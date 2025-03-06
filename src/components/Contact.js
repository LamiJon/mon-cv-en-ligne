/*function Contact() {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg m-6">
      <h2 className="text-2xl font-semibold text-blue-600">Contact</h2>
      <p className="mt-2 text-gray-700">📧 Email : monemail@example.com</p>
      <p className="mt-2 text-gray-700">🔗 LinkedIn : linkedin.com/in/monprofil</p>
    </div>
  );
}

export default Contact;*/

/*import { motion } from "framer-motion";

const Contact = () => {

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gris-acier/50"
      initial={{ opacity: 0, y: 50 }} // Départ invisible et en bas
      animate={{ opacity: 1, y: 0 }} // Apparition et montée
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }} // Animation fluide
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className>📧 Email : monemail@example.com</p>
        <p className>🔗 LinkedIn : linkedin.com/in/monprofil</p>
      </div>
    </motion.section>
  );
};

export default Contact;*/

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const serviceId = "service_jkf9mzq";
      const templateId = "template_wfzdrd9";
      const publicKey = "npNG_lN9L-Irax231";

      // Simule un envoi (à remplacer par ton appel API si nécessaire)
      console.log("Données envoyées :", data);

      // Affiche le message de confirmation
      setMessageEnvoye(true);
      setMessageVisible(true); // Affiche immédiatement

      setTimeout(() => setMessageVisible(false), 4000); // Début du fade-out
      // Cache le message après 3 secondes
      setTimeout(() => setMessageEnvoye(false), 5000);

      await emailjs.send(serviceId, templateId, data, publicKey);
      reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    }
  };

  const [messageEnvoye, setMessageEnvoye] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  return (
    <section id="contact" className="w-full min-h-screen flex flex-col justify-center items-center bg-bleu-nuit/30 px-4">
      <h2 className="text-3xl font-bold mb-6">Me Contacter</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-brun-terreux/50 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-sm text-blanc-casse mb-2">Nom</label>
          <input
            type="text"
            {...register("name", { required: "Le nom est requis" })}
            className="w-full p-2 rounded rounded bg-black/50 text-blanc-casse border border-bleu-nuit outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-200 focus:border-transparent"
          />
          {errors.name && <p className="text-red-700 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-blanc-casse mb-2">Email</label>
          <input
            type="email"
            {...register("email", { 
              required: "L'email est requis", 
              pattern: { value: /^\S+@\S+$/i, message: "Email invalide" } 
            })}
            className="w-full p-2 rounded rounded bg-black/50 text-blanc-casse border border-bleu-nuit outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-200 focus:border-transparent"
          />
          {errors.email && <p className="text-red-700 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-blanc-casse mb-2">Message</label>
          <textarea
            {...register("message", { required: "Le message est requis" })}
            className="w-full p-2 rounded bg-black/50 text-blanc-casse border border-bleu-nuit outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-200 focus:border-transparent resize-none"
            rows="4"
            placeholder="Si vous avez des projets informatiques et/ou audiovisuels auxquels vous souhaiteriez que je participe, c'est ici que vous pouvez m'en faire part. N'hésitez pas non plus à me lancer des défis pour me tester, comme par exemple ajouter une fonctionnalité que vous aimeriez voir apparaître dans mon CV en ligne."
          ></textarea>
          {errors.message && <p className="text-red-700 text-sm">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 rounded bg-black/50 text-blanc-casse font-bold hover:bg-blue-200 hover:text-bleu-nuit/80 transition"
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {messageEnvoye && (
        <div className={`mt-4 p-3 text-center text-noir-spatial bg-green-700 rounded-lg shadow-lg ${
          messageVisible ? "opacity-100 glitch animate-fadeIn": "transition-opacity duration-1000 opacity-0"
          }`}
        >
          ✅ Votre message a bien été envoyé !
        </div>
      )}

    </section>
  );
};

export default Contact;
