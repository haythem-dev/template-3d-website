# TEMPLATE - Site Web Moderne

Site web d'entreprise moderne avec animations 3D et design interactif.

## Technologies utilisées

- React avec TypeScript
- Three.js pour les animations 3D
- GSAP pour les animations fluides
- Base de données PostgreSQL (Neon)
- Authentification sécurisée
- Déploiement sur Vercel

## Déploiement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre dépôt Git à Vercel
3. Dans les paramètres du projet sur Vercel, ajoutez les variables d'environnement suivantes :
   - `DATABASE_URL` : URL de votre base de données Neon
   - `SESSION_SECRET` : Clé secrète pour les sessions
   - `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGHOST`, `PGDATABASE` : Informations de connexion à la base de données

4. Déployez le projet :
   ```bash
   npm install -g vercel
   vercel
   ```

5. Pour les déploiements suivants :
   ```bash
   vercel --prod
   ```

Le site sera automatiquement déployé à chaque push sur la branche principale.

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
