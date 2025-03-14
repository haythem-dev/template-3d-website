# TEMPLATE - Site Web Moderne

Site web d'entreprise moderne avec animations 3D et design interactif. Test de connexion GitHub. Test de connexion GitHub.

## Technologies utilisées

- React avec TypeScript
- Three.js pour les animations 3D
- GSAP pour les animations fluides
- Base de données PostgreSQL (Neon)
- Authentification sécurisée
- Déploiement sur Vercel

## Déploiement sur Vercel avec GitHub

1. **Préparation GitHub**
   - Sur GitHub.com, créez un nouveau repository nommé "template-3d-website"
   - Copiez l'URL du repository (par exemple : https://github.com/haythem-dev/template-3d-website)
   - Dans votre terminal, exécutez :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [URL_DU_REPOSITORY]
   git push -u origin main
   ```

2. **Configuration Vercel**
   - Allez sur [Vercel](https://vercel.com)
   - Connectez votre compte GitHub
   - Cliquez sur "Import Project"
   - Sélectionnez le repository "template-3d-website"
   - Dans les paramètres du projet, ajoutez les variables d'environnement :
     - `DATABASE_URL` : URL de votre base de données Neon
     - `SESSION_SECRET` : Clé secrète pour les sessions
     - `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGHOST`, `PGDATABASE` : Informations de connexion à la base de données

3. **Déploiement**
   - Le déploiement se fera automatiquement après chaque push
   - Vercel fournira une URL de prévisualisation

4. **Configuration du domaine (optionnel)**
   - Dans les paramètres du projet sur Vercel, section "Domains"
   - Ajoutez votre domaine personnalisé
   - Suivez les instructions pour configurer les DNS

## Développement local

1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

3. Ouvrez [http://localhost:5000](http://localhost:5000)