export  const fetchWhoogys = async (videoHref) => {
    try {
      const response = await fetch(`http://localhost:5000/api/whoogys?href=${videoHref}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération de la vidéo de Whoogys :", error);
      return "Impossible de charger la vidéo de Whoogys.";
    }
  };