import homepageData from '../data/homepage.json';

/**
 * Simule un client d'API pour un CMS headless.
 *
 * En conditions réelles, cette fonction ferait un fetch() vers l'endpoint
 * de votre CMS (Contentful, Sanity, Strapi, WordPress headless, etc.).
 * Ici, les données sont locales (src/data/homepage.json) afin que vous
 * n'ayez aucune infrastructure à configurer pour ce test : pas de compte
 * CMS, pas de clé d'API, pas de backend à lancer.
 *
 * @param {Object} [options]
 * @param {number} [options.delay=600] - délai réseau simulé (ms)
 * @param {boolean} [options.simulateError=false] - force une erreur réseau simulée
 * @returns {Promise<Object>} le contenu de la page d'accueil
 */
export function getHomepageContent({ delay = 600, simulateError = false } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject(new Error('Erreur réseau simulée : impossible de récupérer le contenu du CMS.'));
        return;
      }
      resolve(homepageData);
    }, delay);
  });
}
