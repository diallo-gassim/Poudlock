
## Petit exercie en Javascript fait pendant ma formation O'clock 

# Poudlock

Il était une fois, une école d'apprentis magidevs du nom de Poudlock. Cette école a été fondée par 4 personnes aux talents divers et complémentaires : **Anthony**, **Dario**, **Lucie** et **Maxime**.

Ces derniers décidèrent de diviser l'école en 4 maisons distinctes basées sur leurs noms. Pour ce faire, nos magidevs conçurent un habile système de sélection bâptisé le **choixp'O**. Toute ressemblance avec une oeuvre de fiction serait purement fortuite.

Seulement, le choixp'O souffre de quelques ratés ces temps-ci et n'arrive plus à attribuer de maison aux nouveaux apprentis.

Votre mission sera de recoder le choixp'O afin qu'il repuisse officier !



## But de l'exercice

Quand on entre un nom dans le champ du formulaire et qu'on valide, le choixp'O doit afficher le blason d'une des maisons de Poudlock dans sa bulle de dialogue. Si on valide le formulaire vide, il doit dire *"Ça ne fonctionne qu'avec un nom, pardi !"*.

J'avais à ma disposition : un fichier HTML déjà fait, un fichier CSS et un fichier JS à compléter.

Exemple de choixp'O réparé :
![Alt text](screens/capture.png?raw=true "Optional Title")


##  Explication

Quand on tape le nom d'un apprenti magidev, on affiche un blason selon des règles prédéfinies : 

- Si le nom contient exactement **8 caractères**, on affiche le blason de la maison **Maxopus**.
- Sinon, si la **première** lettre du nom est un **L** ou la **dernière** un **X**, on affiche le blason de la maison **Lustrix**.
- Sinon, si le nombre de lettres du nom est un **multiple de 5** ou un  **multiple de 3**, on affiche le blason de la maison **Anthorvus**.
- Sinon, on affiche le blason de la maison **Darioptera**.



