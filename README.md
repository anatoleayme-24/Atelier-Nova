# Test technique — Intégration d'une page d'accueil

Bienvenue, et merci de prendre le temps de faire ce test dans le cadre de votre candidature au poste de webdesigner / intégrateur / développeur web chez Idefixe.

## Contexte

**Atelier Nova** est un studio d'architecture et de design d'intérieur (fictif, créé pour l'exercice). Vous devez intégrer sa page d'accueil en **React**, en consommant du contenu qui simule une réponse de **CMS headless**, à partir de la direction artistique fournie.

## Ce qui vous est fourni

- Un projet **React (Vite)** déjà scaffoldé — `npm install && npm run dev` suffit, aucune autre installation n'est nécessaire.
- Un **mock de CMS headless** : le contenu de la page (`src/data/homepage.json`) est servi via une fonction `getHomepageContent()` (`src/lib/cms.js`) qui simule un appel réseau asynchrone (délai + gestion d'erreur possible). C'est la même logique qu'un vrai appel à un CMS (Contentful, Sanity, Strapi, WordPress headless…), sans le compte, la clé d'API ni le serveur à gérer.
- Une **direction artistique** (`DESIGN-DA.html`, à ouvrir dans un navigateur) : palette, typographie, grille, sections de contenu attendues et comportements attendus. La mise en page (agencement, hiérarchie visuelle, disposition desktop/mobile) n'est volontairement pas imposée : c'est à vous de la concevoir, dans l'esprit de la DA.
- Des visuels de substitution (via `picsum.photos`) déjà référencés dans les données — vous n'avez pas à chercher d'images.

## Votre mission

Construire la page d'accueil d'Atelier Nova à partir de `content` (les données renvoyées par `getHomepageContent()`), en respectant la palette et la typographie de la DA, et en faisant apparaître toutes les sections listées dans `DESIGN-DA.html` (header, hero, intro, services, projets, témoignages, bandeau CTA, footer).

**La mise en page est entièrement de votre ressort** : agencement des sections, hiérarchie visuelle, disposition en grille, comportement du menu mobile, etc. C'est volontairement laissé ouvert — c'est une partie de ce qu'on évalue.

Vous êtes libre de :
- structurer vos composants comme vous le souhaitez (`src/components/` est vide, à vous de l'organiser) ;
- choisir votre méthode de style (CSS Modules, Sass, Tailwind, styled-components, CSS pur…) — indiquez votre choix et pourquoi dans votre README de rendu ;
- ajouter des librairies légères si elles se justifient (mais évitez d'alourdir inutilement le projet) ;
- concevoir la mise en page et interpréter les détails non précisés par la DA, tant que l'esprit (sobre, éditorial, aéré) est respecté.

## Contraintes

- **React** obligatoire pour la couche front (fonctionnel/hooks, pas de classe imposée).
- Le contenu doit être **récupéré de façon asynchrone** via `getHomepageContent()` (ne pas importer le JSON directement dans vos composants d'affichage) : prévoyez un état de chargement et un état d'erreur cohérents avec la DA. Vous pouvez tester l'erreur avec `?simulateError=true` dans l'URL.
- **Responsive** : le rendu doit être propre en mobile, tablette et desktop (points de rupture indicatifs dans la DA).
- **Accessibilité** de base : HTML sémantique, contrastes suffisants, focus clavier visible, `alt` sur les images.
- Pas besoin de configurer de vrai CMS, de base de données ni de serveur : tout est local.

## Ce que nous regardons

- Fidélité à la direction artistique (couleurs, typographie, esprit général) et pertinence de la mise en page que vous concevez vous-même.
- Qualité et lisibilité du code (structure des composants, nommage, réutilisabilité).
- Gestion propre des données asynchrones (chargement, erreur, cas vide).
- Responsive et accessibilité.
- Sens du détail et de la finition (micro-interactions, cohérence visuelle).
- Choix techniques justifiés (même partiels ou imparfaits, du moment qu'ils sont expliqués).

Nous ne cherchons pas un pixel-perfect parfait ni une couverture de tests exhaustive : ce test se fait en temps limité, un travail honnête et bien argumenté vaut mieux qu'une tentative de tout faire à moitié.

## Temps indicatif

Comptez environ **4 à 6 heures**. Ce n'est pas un chronomètre strict — si vous avez besoin d'un peu plus de temps, prévenez-nous simplement.

## Pour démarrer

```bash
npm install
npm run dev
```

Puis ouvrez `DESIGN-DA.html` dans votre navigateur pour la référence visuelle.

## Comment rendre votre travail

- Un dépôt Git (de préférence un lien GitHub/GitLab public ou privé avec accès invité) **ou** une archive du projet (hors `node_modules`).
- Un court paragraphe dans votre propre README expliquant vos choix (style, structure, ce que vous feriez différemment avec plus de temps).
- Idéalement, 2-3 captures d'écran (desktop + mobile) si vous ne pouvez pas déployer un aperçu en ligne.

Merci de nous faire parvenir votre rendu par retour d'email, et n'hésitez pas à nous écrire en cas de question sur le brief. Bonne chance !
