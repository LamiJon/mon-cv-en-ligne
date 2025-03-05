export const fetchFilms = async (mode = "sortie", page = 1) => {
  try {
    const response = await fetch(`http://localhost:5000/api/films?mode=${mode}&page=${page}`);
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
    return [];
  }
};

export  const fetchSynopsis = async (filmHref) => {
  try {
    const response = await fetch(`http://localhost:5000/api/synopsis?href=${filmHref}`);
    const data = await response.json();
    return data.synopsis || "Synopsis non disponible.";
  } catch (error) {
    console.error("Erreur lors de la récupération du synopsis :", error);
    return "Impossible de charger le synopsis.";
  }
};