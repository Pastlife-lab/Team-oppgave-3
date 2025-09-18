
function spawnPart() {
    if (counter < carParts.length) {
        let part = carParts[counter];

        let img = document.createElement("img"); 
        img.src = part.img;
        img.alt = part.name;
        img.className = "car-part";


        //Når du trykker på bildet skjer dette
        img.onclick = () => {
        addToList(part.name);
        pickUpParts(part.points);
        img.remove();  //fjerner bildet fra spill området 

     };

     document.getElementById("gameArea").appendChild(img);
        counter++;
        } else {
          console.log("All parts have appeared!");
           updateView();
    }
}

setInterval(spawnPart, 3000); //starter på 3 sekunder så får vi se om det blir for lite eller mye

function addToList(partName) {
     let newElement = document.createElement("li");
    newElement.textContent = partName;
    document.getElementById("carParts").appendChild(newElement);
    }

 function removeItem(){  
                    if(carParts.length == 0){
                        throw new Error ('You got no parts');
                    } else {
                        carParts.splice(0, 1);
                        console.log("Parts left:", carParts);
                    }
                        
    }


function getGreeting() {
    if (totalPoints >= 90) {
        greetingMsg = "Yo man, sick ride"
    } else if (totalPoints <= 25) {
        greetingMsg = "Have u thought about upgrading ur car, orrr?"
    } else {
        greetingMsg = "Lmao who do u think u r"
    }
}

function pickUpParts(carpart) {
    let points = 0;

    if (carpart === "Rims") {
        points + 20;
    } else if (carpart === "Spoiler") {
        points + 25;
    } else if (carpart === "Stickers") {
        points + 5;
    } else if (carpart === "Tint") {
        points + 10;
    } else if (carpart === "Cool lights") {
        points + 15;
    } else {
        points = 0;
    }

    totalPoints += points;
    updateView();

    if (totalPoints >= 100) {
        duVantView();
    } else {
        updateView();
    }
}
