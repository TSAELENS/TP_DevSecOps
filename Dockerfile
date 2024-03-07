# Utiliser l'image officielle de Node.js comme image de base
FROM node:21

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier les fichiers et dossiers du projet dans le répertoire de travail du conteneur
COPY . .

# Exposer le port que l'application utilise
EXPOSE 3000

# Commander pour lancer l'application
CMD ["node", "src/index.js"]
