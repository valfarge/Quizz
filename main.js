const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");// const pour indentifier notre form

form.addEventListener("submit",handleSubmit) //ajout evenement à l'envoie plus une fonction



function handleSubmit(e){ // la fonction en question
    e.preventDefault() //qd on clique cela ne ns renvoie plus sur la mm page


    const results = []; // on créé la const result pour avoir les result de ce quon a coché
    //pour avoir tout ça , il faut dabord selectionné tt les input qui ont été coché

    const radioButtons = document.querySelectorAll("input[type ='radio']:checked");//donc on fait ça
    //on prend tout les input de type radio qui sont checked

   
   radioButtons.forEach((radioButton,index)=>{ // pour chaque radioButton au singulier, 1ere input "index 0" dans la nodelist ect.., avec FONCTION FLECHE
    if(radioButton.value === responses[index]){ // si pour chaque button coché , sa valeur = a responses de [index]
        results.push(true)            //alors j'envoie true

    }else{
        results.push(false) //sinon c'est false
    }
   });
   
   showResults(results); //fonction montrer les resultats
   addColors(results);
}


const titleResults = document.querySelector(".results h2");
const markResults = document.querySelector(".mark");
const helpResults = document.querySelector(".help");

function showResults(results){ //creation de la fonction
    const numberOfErrors = results.filter(Element =>Element===false).length; //const nombre erreur = les resultats filtré  donc si sa retourne "true" cest que l'element est egale à "false" et ."length" nous donne le nombre d'erreur
    
    switch(numberOfErrors){     //switch sert a switcher diffenrrent evenement en fonction de la reponse
        case 0:
            titleResults.textContent = "Bravo c'est un sans faute !";
            helpResults.style.display = "block";
            helpResults.textContent = "Quelle culture...";
            markResults.style.display = "block";
            markResults.innerHTML = "Score : <span>5/5</span>";
        break;
        case 1:
      titleResults.textContent = `✨ Vous y êtes presque ! ✨`;
      helpResults.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      helpResults.style.display = "block";
      markResults.innerHTML = "Score : <span>4 / 5</span>";
      markResults.style.display = "block";
      break;
    case 2:
      titleResults.textContent = `✨ Encore un effort ... 👀`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResults.style.display = "block";
      markResults.innerHTML = "Score : <span>3 / 5</span>";
      markResults.style.display = "block";
      break;
    case 3:
      titleResults.textContent = `👀 Il reste quelques erreurs. 😭`;
      helpResults.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResults.style.display = "block";
      markResults.innerHTML = "Score : <span>2 / 5</span>";
      markResults.style.display = "block";
      break;
    case 4:
      titleResults.textContent = `😭 Peut mieux faire ! 😭`;
      helpResults.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResults.style.display = "block";
      markResults.innerHTML = "Score : <span>1 / 5</span>";
      markResults.style.display = "block";
      break;
    case 5:
      titleResults.textContent = `👎 Peut mieux faire ! 👎`;
      helpResults.style.display = "block";
      helpResults.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      markResults.style.display = "block";
      markResults.innerHTML = "Score : <span>0 / 5</span>";
      break;

    default : 
        titleResults.textContent = "Wops, cas innatendu";
            
    }

}

const questions = document.querySelectorAll(".question-block"); // selection de question-block dans le html

function addColors(results){ //ajout fonction couleur avec call back "result"
    results.forEach((response,index)=>{ //resultat pour chaque reponse 
        if(results[index]){ //si vrai
            questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78,#78ffd6)" //couleur verte
        }else{
            questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b,#fd674c)" // couleur rouge
        }
    })
}

const radioInputs = document.querySelectorAll("input[type='radio']") // selection des inputs type radio

radioInputs.forEach(radioInputs=> radioInputs.addEventListener('input',resetColors)) //pour chaque input radio, ajouter un evenement , reset couleur donc appelle de la fonction call back "reset couleur"

function resetColors(e){ //fonction reset couleur
    const index = e.target.getAttribute("name").slice(1) -1 ; //e.target pour trouver , le getAtt pour recuperer le nom, sur console log on a q1, q2, donc pour garder juste 2,3 on fait slice(1) donc c un chiffrre pas un index de tableau donc on met -1 , on est sur index 0, index 1 , les index fonctionne avec les tableaux
    const parentQuestionBlock = questions[index]; // on a rretrouve le bloc de question grace a lindex ci dessus

   //Apres avoir clique , on a les couleurs verte et rouge et si on veut se reprendre 
    parentQuestionBlock.style.backgroundColor = "#f1f1f1"; //des quon reclique quelque part cela se remet en gris
    parentQuestionBlock.style.backgroundImage = "none"; // et cela annule le degradé couleur
   
}























