# Alloclean - Site Web de Services de Nettoyage

Site web professionnel pour Alloclean, une entreprise de services de nettoyage à domicile.

## Technologies utilisées

- React
- TypeScript
- Tailwind CSS
- React Router
- Heroicons

## Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd alloclean
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Lancez le serveur de développement :
```bash
npm start
# ou
yarn start
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
src/
  ├── components/     # Composants réutilisables
  ├── pages/         # Pages de l'application
  ├── App.tsx        # Composant principal
  └── index.tsx      # Point d'entrée
```

## Fonctionnalités

- Page d'accueil avec présentation des services
- Page À propos avec l'histoire de l'entreprise
- Page Services avec la liste des prestations
- Page Devis avec formulaire de demande
- Page Contact avec formulaire et carte
- Design responsive
- Animations et transitions fluides

## Personnalisation

Les couleurs principales peuvent être modifiées dans le fichier `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: '#5DBCD2',    // Bleu clair
      secondary: '#A8D5BA',  // Vert doux
    }
  }
}
```

## Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Déploiement sur Vercel

1. Connectez votre dépôt GitHub à Vercel.
2. Lors de la configuration du projet, choisissez :
   - **Framework Preset** : Vite
   - **Build Command** : npm run vercel-build
   - **Output Directory** : dist
3. Déployez ! 