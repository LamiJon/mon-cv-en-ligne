const translate = require("google-translate-api-x");
const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
const presentations = require("./presentations");

const app = express();
/*app.use(cors({
  origin: "https://jonathanbrachetcv.vercel.app", // ✅ Autorise uniquement Vercel
  methods: "GET,POST",
  allowedHeaders: "Content-Type"
}));*/

app.use(cors({
  origin: "*", // ✅ TEMPORAIRE : Autorise tout le monde (test)
  methods: "GET, POST, OPTIONS",
  allowedHeaders: "Content-Type"
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // ✅ Autorise toutes les origines temporairement
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const PORT = process.env.PORT || 5000;

const translateText = async (text, targetLang = "fr") => {
  try {
    const result = await translate(text, { to: targetLang });
    console.log("Texte original :", text);
    console.log("Texte traduit :", result.text);
    return result.text;
  } catch (error) {
    console.error("Erreur lors de la traduction :", error);
    return text; // ✅ Retourne le texte original si la traduction échoue
  }
};

app.get("/api/films", async (req, res) => {
  try {
    const sortOption = req.query.mode || "sortie"; // ✅ Mode par défaut : sortie
    const page = parseInt(req.query.page) || 1; // ✅ Page par défaut : 1
    const filmsPerPage = 21; // ✅ Nombre de films par page
    const startIndex = (page - 1) * filmsPerPage; // ✅ Index de départ
    const endIndex = page * filmsPerPage; // ✅ Index de fin

    let LETTERBOXD_URL;
    if (sortOption === "vu") {
      LETTERBOXD_URL = "https://letterboxd.com/lamijon/films/by/date/";
    } else if (sortOption === "sortie") {
      LETTERBOXD_URL = "https://letterboxd.com/lamijon/films/";
    } else if (sortOption === "titre") {
      LETTERBOXD_URL = "https://letterboxd.com/lamijon/films/by/name/";
    } else if (sortOption === "popularite") {
      LETTERBOXD_URL = "https://letterboxd.com/lamijon/films/by/popular/";
    } else if (sortOption === "hasard") {
      LETTERBOXD_URL = "https://letterboxd.com/lamijon/films/by/shuffle/";
    }

    console.log(`Chargement des films depuis : ${LETTERBOXD_URL} (Page ${page})`);

    const browser = await puppeteer.launch({ headless: "new" });
    /*const browser = await puppeteer.launch({
      headless: true, // ✅ Évite l'affichage graphique
      args: ["--no-sandbox", "--disable-setuid-sandbox"] // ✅ Réduit la consommation mémoire
    });*/
    const pageInstance = await browser.newPage();
    await pageInstance.goto(LETTERBOXD_URL, { waitUntil: "networkidle2" });

    await pageInstance.waitForSelector(".poster-container img", { timeout: 15000 });

    const films = await pageInstance.evaluate((startIndex, endIndex) => {
      let movieList = [];
      document.querySelectorAll(".poster-container").forEach((element, index) => {
        if (index >= startIndex && index < endIndex) {
          const imgElement = element.querySelector("img");
          const title = imgElement ? imgElement.alt : "Titre inconnu";
          const linkElement = element.querySelector("a");

          let image = imgElement ? imgElement.srcset : "";
          let href = linkElement.getAttribute("href");

          if (image.includes("empty-poster")) {
            image = "";
          }

          movieList.push({ title, image, href });
        }
      });
      return movieList;
    }, startIndex, endIndex);

    console.log("Films extraits :", films);
    //await page.close();
    await browser.close();
    res.json(films);
  } catch (error) {
    console.error("Erreur lors du scraping :", error);
    res.status(500).json({ error: "Impossible de récupérer les films." });
  }
});

app.get("/api/synopsis", async (req, res) => {
  const { href } = req.query;
  if (!href) {
    return res.status(400).json({ error: "Aucun lien de film fourni" });
  }

  const url = `https://letterboxd.com${href}`;

  try {
    const browser = await puppeteer.launch({
      headless: true, // ✅ Évite l'affichage graphique
      args: ["--no-sandbox", "--disable-setuid-sandbox"] // ✅ Réduit la consommation mémoire
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // ✅ Sélection du synopsis dans la balise <p> à l'intérieur de .review
    const synopsis = await page.evaluate(() => {
      const reviewElement = document.querySelector(".review p");
      return reviewElement ? reviewElement.innerText.trim() : "Synopsis non disponible.";
    });

    await page.close();
    await browser.close();

    // ✅ Traduction du synopsis en français
    const translatedSynopsis = await translateText(synopsis, "fr");
    
    res.json({ synopsis: translatedSynopsis });
  } catch (error) {
    console.error("Erreur lors du scraping du synopsis :", error);
    res.status(500).json({ error: "Impossible de récupérer le synopsis" });
  }
});

app.get("/api/youtube-videos", async (req, res) => {
  const channels = [
    { name: "Whoogy's", url: "https://www.youtube.com/@Whoogys/videos"},
    { name: "Eloy Spinnler", url: "https://www.youtube.com/@EloySpinnler/videos"},
    { name: "Bonne Pitance", url: "https://www.youtube.com/@bonnepitance/videos"},
    { name: "Philippe Etchebest", url: "https://www.youtube.com/@ChefEtchebest"},
    { name: "Au Bord de l'Assiette", url: "https://www.youtube.com/@auborddelassiette/shorts"}
  ];

  const browser = await puppeteer.launch({
    headless: true, // ✅ Évite l'affichage graphique
    args: ["--no-sandbox", "--disable-setuid-sandbox"] // ✅ Réduit la consommation mémoire
  });
  /*const browser = await puppeteer.launch({
    headless: false, // ❌ Voir ce que fait Puppeteer
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });*/
  const page = await browser.newPage();
  const results = [];

  for (const channel of channels) {
    try {
      console.log(`Scraping de la chaîne : ${channel.name}`);
      await page.goto(channel.url, { waitUntil: "domcontentloaded" });

      // ✅ Attendre un court instant pour que la page charge bien
      await new Promise(resolve => setTimeout(resolve, 1000));

      // ✅ Vérifier si un bouton "Tout refuser" est présent
      const cookieButton = await page.$('button[jsname="tWT92d"]');
      if (cookieButton) {
        console.log("🍪 Bouton 'Tout refuser' détecté, on clique dessus...");
        await cookieButton.click();
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre un peu après le clic
      } else {
        console.log("✅ Aucun bouton de cookies détecté.");
      }

      // ✅ Attendre un court instant pour que la page charge bien
      await new Promise(resolve => setTimeout(resolve, 2000));

      // ✅ Extraire les liens des vidéos
      /*const videoLinks = await page.evaluate(() => {
        return [...document.querySelectorAll("a#thumbnail")].map(a => a.href);
      });
      console.log("Vidéos trouvées :", videoLinks);*/

      // ✅ Déterminer si c'est une page de vidéos classiques ou de Shorts
      let videoSelector = channel.url.includes("/shorts") ? ".shortsLockupViewModelHost a" : "a#thumbnail";

      // ✅ Récupérer la bonne URL (soit un Short, soit une vidéo)
      const videoURL = await page.evaluate((selector) => {
        const firstVideo = document.querySelector(selector);
        return firstVideo ? "https://www.youtube.com" + firstVideo.getAttribute("href") : null;
      }, videoSelector);
      console.log("videoURL :", videoURL);

      if (videoURL) {
        results.push({ name: channel.name, videoURL, presentation: presentations[channel.name] || "Pas de présentation disponible." });
      } else {
        console.log(`⚠️ Aucune vidéo trouvée pour ${channel.name}`);
      }
    } catch (error) {
      console.error(`❌ Erreur lors du scraping de ${channel.name} :`, error);
    }
  }

  await page.close();
  await browser.close();

  if (results.length === 0) {
    return res.status(500).json({ error: "Impossible de récupérer les vidéos." });
  }

  res.json(results);
});

app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log(`📌 Route active : ${r.route.path}`);
  }
});
app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));