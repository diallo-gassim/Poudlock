
// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page
    init: function() {
        let form = document.querySelector('form');

        form.addEventListener('submit', app.choiceHouse);
    },
        choiceHouse: function(event){

        event.preventDefault();

        
        const speechElement = document.querySelector('.speech')
         speechElement.textContent = '';
        
        const blason = document.createElement('img')
        speechElement.appendChild(blason)

        let inputElement = document.querySelector('.name');
        let userInput = inputElement.value;
        

        if (userInput === ''){
          const alerte = document.querySelector("h2");
          alerte.textContent = ' tu es un moldu ou quoi ?'
          const alerte2 = document.querySelector(".speech")
          alerte2.textContent = 'pose moi sur ta tete crackmol !'
        }else if
             (userInput.length === 8)  {
                blason.src = 'images/maxopus.png';
                let bienvenue = document.querySelector('h2');
                bienvenue.textContent = "bienvenu chez les maxopus !"
                
                
            }else if (userInput.charAt(0).toUpperCase() === 'L' || userInput.charAt(userInput.length - 1).toUpperCase() === 'X'){
                blason.src = 'images/lustrix.png';
                let bienvenue = document.querySelector('h2');
                bienvenue.textContent = "bienvenu chez les lustrix !"
                
                
            } else if (userInput.length % 5 === 0 || userInput.length % 3 === 0){
                blason.src = 'images/anthorvus.png';
                let bienvenue = document.querySelector('h2');
                bienvenue.textContent = "bienvenu chez les anthorvus !"
                
                
            }else {
                blason.src = 'images/darioptera.png';
                let bienvenue = document.querySelector('h2');
                bienvenue.textContent = "bienvenu chez les dariotera !"
        
            }
        
        }
        };
     
    


// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
