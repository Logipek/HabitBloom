# 📊 Habit Tracker

Une application web moderne pour suivre vos habitudes quotidiennes et améliorer votre productivité. Développée avec JavaScript vanilla et une architecture MVC.

## 🌟 Fonctionnalités

- ✅ Gestion complète des habitudes (ajout, modification, suppression)
- 📈 Visualisation des progrès avec des graphiques interactifs
- 🕒 Suivi du temps passé sur les réseaux sociaux
- 📱 Interface responsive et moderne
- 💾 Stockage local des données
- 🎯 Messages de motivation personnalisés
- 📊 Filtrage des données par période (jour/semaine/mois)

## 🛠️ Technologies Utilisées

- JavaScript (ES6+)
- Webpack 5
- Chart.js
- ESLint
- Babel
- Architecture MVC

## 📋 Prérequis

- Node.js (version 20.x recommandée)
- npm (version 9.x ou supérieure)

## 🚀 Installation
https://github.com/Logipek/HabitBloom.git
1. Clonez le repository :
```bash
git clone https://github.com/Logipek/HabitBloom.git
cd HabitBloom
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm start
```

4. Ouvrez votre navigateur à l'adresse :
```
http://127.0.0.1:9090
```

## 📦 Construction

Pour créer une version de production :
```bash
npm run dist
```

## 🧪 Linting

Pour vérifier la qualité du code :
```bash
npm run lint
```

## 📁 Structure du Projet

```
habit-tracker/
├── src/
│   ├── models/
│   │   └── HabitModel.js
│   ├── views/
│   │   └── HabitView.js
│   ├── controllers/
│   │   └── HabitController.js
│   ├── styles.css
│   ├── index.js
│   └── index.html
├── webpack.config.js
├── .eslintrc.js
├── package.json
└── README.md
```

## 🔧 Configuration

### Webpack

Le projet utilise Webpack avec les configurations suivantes :
- Babel pour la transpilation ES6+
- Loaders pour CSS
- ESLint pour la qualité du code
- Hot Module Replacement activé
- Optimisations pour la production

### ESLint

Configuration basée sur :
- airbnb-base
- eslint:recommended
- Règles personnalisées pour le projet

## 🎯 Fonctionnalités Détaillées

### Gestion des Habitudes
- Création d'habitudes avec nom et objectif
- Modification des habitudes existantes
- Suppression d'habitudes
- Suivi du temps consacré

### Visualisation
- Graphiques de progression
- Statistiques par période
- Indicateurs de performance

### Suivi Réseaux Sociaux
- Tracking spécifique du temps d'écran
- Alertes de dépassement
- Conseils de modération

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence ISC. Voir le fichier `LICENSE` pour plus de détails.

## 📫 Contact

Logipek - contact@hugo-damion.fr

Lien du projet : [https://github.com/Logipek/HabitBloom](https://github.com/Logipek/HabitBloom)
