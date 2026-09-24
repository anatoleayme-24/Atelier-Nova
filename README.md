# Démo en ligne : https://atelier-nova-three.vercel.app/

Bonjour et merci pour cet exercice très instructif.

# Démarche
J'ai commencé par analyser la DA et le contenu JSON, puis réalisé une maquette mobile dans Figma avant de passer à l'intégration, section par section, en mobile first.

# Choix de design
  - Terracotta et accessibilité : le terracotta de la DA (#C97C4B) n'atteint pas le contraste AA en texte sur fond clair. J'ai ajouté une variante plus foncée (#A9643A) pour les numéros des services. Le terracotta d'origine reste utilisé pour les CTA (avec un texte foncé, 4,8:1), les accents décoratifs et le fond du menu mobile, où les liens en 32 px respectent le contraste AA pour le grand texte.
  - Menu mobile : overlay plein écran sur fond terracotta. C'est le seul aplat de couleur d'accent du site, qui en fait un moment de marque.
  - Typographie : la navigation reprend la typographie du logo (Fraunces), pour unifier le header desktop et le menu mobile.
  - Projets : les visuels sont harmonisés dans un même format pour une grille plus régulière. Le CMS ne fournit pas d'URL par projet : les cartes ne sont donc pas cliquables, et l'effet au survol reste visuel. Dès qu'un champ href existera, la carte deviendra un lien.
  - Ordre des sections : il suit celui du menu (Studio, Projets, Approche, Contact).

# Choix techniques
  - Style : CSS Modules + variables CSS.
  Natif dans Vite, sans dépendance, avec des styles isolés par composant. Toute la DA (couleurs, typos, espacements) est centralisée dans `src/styles/variables.css`.
  - Structure : `components/layout` (Header, MobileMenu, Footer), `components/sections` (une section par composant), `components/ui` (Button réutilisable, Loading, ErrorState).
  - Données : un hook `useHomepageContent` gère le chargement (skeleton), l'erreur (écran dédié avec « Réessayer ») et le succès. Chaque section gère aussi le cas vide. Aucun texte n'est écrit en dur, tout vient du CMS.
  - Accessibilité : HTML sémantique, focus clavier visible, `alt` repris du CMS, menu mobile accessible au clavier (Échap, gestion du focus), contrastes vérifiés.


# Avec plus de temps
  - J'aurai travaillé un peu plus d'animation sur le desktop tout en restant sobre.
  - Ce projet est basé sur une entreprise d'architecture et de design d'interieur, il faudrait refléchir a une expérience peut etre plus immersive, avec plus d'images travaillées, qui montrent les projets.
