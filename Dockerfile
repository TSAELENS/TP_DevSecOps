# Utiliser l'image officielle de Node.js comme image de base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier les autres fichiers du projet dans le conteneur
COPY . .

# Exposer le port sur lequel votre app va tourner
EXPOSE 3000

# Commander pour lancer l'application
CMD ["node", "src/index.js"]
