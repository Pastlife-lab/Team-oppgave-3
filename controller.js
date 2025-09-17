
const carparts = ["Felger", "Spoiler", "Stickers", "Solfilm", "Kule lys"];
let counter = 0;

function addToList() {
    if (counter < carparts.length) {

        const newElement = document.createElement("li");
        newElement.textContent = carparts[teller];

        document.getElementById("carParts").appendChild(newElement);

        counter++;
    }else {
        alert("You collected all parts!");
    }
 }

 function removeItem(carparts){  //legg til evt item når 
                    if(carparts.length == 0){
                        throw new Error ('You got no parts')
                        carparts.splice()
    }
}

function getGreeting() {
    if (progressBar >= 100) {
        greetingMsg = "Yo man, sick ride"
    } else if (progressBar <= 25) {
        greetingMsg = "Have u thought about upgrading ur car, orrr?"
    } else {
        greetingMsg = "Lmao who do u think u r"
    }
    greetingView();
}
