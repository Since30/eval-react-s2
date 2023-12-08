## Configuration et Utilisation

### Utilisateurs Windows

Assurez-vous d'exécuter ces commandes dans un terminal git pour éviter les [problèmes liés aux formats de saut de ligne](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats) :

```bash
git config --global core.eol lf
git config --global core.autocrlf false
```

### Initialisation du Projet

- Dans VSCode, installez les plugins **Prettier - Code formatter** et **ESLint**, et configurez-les
- Clonez ce dépôt, entrez dedans
- Exécutez la commande `npm install`
- Créez des fichiers d'environnement (`.env`) à la fois dans le dossier `backend` et `frontend` : vous pouvez copier les fichiers `.env.sample` comme points de départ (**ne** les supprimez pas). Votre formateur vous montrera quoi mettre dedans

### Commandes Disponibles

- `db:migrate` : Exécute le script de migration de la base de données (Ne vous inquiétez pas si cela prend du temps. Le temps d'exécution moyen est entre 30s et 100s)
- `db:seed` : Exécute le script de seed de la base de données
- `dev` : Lance les deux serveurs (frontend + backend) dans un seul terminal
- `dev-front` : Lance le serveur frontend React
- `dev-back` : Lance le serveur backend Express
- `lint` : Exécute les outils de validation (sera exécuté à chaque _commit_ et refusera un code non propre)

## FAQ

### Outils

- _Concurrently_ : Permet l'exécution simultanée de plusieurs commandes dans la même CLI
- _Husky_ : Permet d'exécuter des commandes spécifiques déclenchées par des événements _git_
- _Vite_ : Alternative à _Create-React-App_, regroupe moins d'outils pour une expérience plus fluide
- _ESLint_ : Outil de "qualité du code", garantit l'application des règles choisies
- _Prettier_ : Outil de "qualité du code" également, se concentre sur le guide de style
- _Airbnb Standard_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
