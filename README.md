# Nodequest - Cow Say!
WCS EXERCISE [Exercice Node débutant - Cow Say!] 

💪 Défi

Dans ce défi, tu devras installer un paquet appelé CowSay.
C'est un paquet qui affichera dans ton terminal une petite vache avec le message de ton choix.

Ta mission est de :

* Crée un nouveau dossier avec le nom de ton choix, et initialise un projet dedans avec npm.

Tu vas rester pour cette exercice sur la syntaxe CommonJS : require pour importer un module, et pas de "type": "module" dans ton package.json.

* Créer un fichier appelé information.js dans ton projet.
* Dans ton fichier information.js, crée un objet avec ton nom et ton campus.
* Exporte maintenant l'objet en utilisant module.exports.
* Dans un fichier index.js, importe l'objet provenant du fichier information.js.
* Installe le module cowsay (npm install cowsay) et lis la documentation pour apprendre à utiliser ce module (savoir lire une documentation est essentiel, cela te permettra d'utiliser tout type d'outil externe dans le futur).
* Exécute ton fichier à l'aide de la commande node et assure-toi que nous pouvons voir la vache avec un message qui utilise tes informations (rappelle-toi comment accéder à la propriété d'un objet).
* Crée maintenant un fichier .gitignore afin de dé-tracker ton dossier node_modules et push ton travail sur GitHub. Partage le lien du repo comme solution du défi.

⚠️ Note importante pour la correction

Si tu veux vérifier le repo d'un autre wilder, télécharge le repo et ouvre-le dans ton terminal, puis, parce que tu n'as pas le dossier node_modules, tu dois lancer la commande npm install de cette façon, les paquets seront téléchargés.

🧐 Critères d'acceptation

Le fichier information.js doit contenir un objet avec le nom et le campus du wilder ainsi que l'export de l'objet
Dans index.js, l'objet est importé à partir du fichier information.js
Le module cowsay est installé et également importé
Quand le fichier est exécuté, la vache est visible et affiche le nom et le campus du wilder
Le dossier node_modules n'est pas push dans le dépôt GitHub
