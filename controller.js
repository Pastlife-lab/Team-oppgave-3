
function spawnPart() {
    if (counter < carParts.length) {
        let part = carParts[counter];

        let img = document.createElement("img");
        // bildene legges inn under her 
        img.src = Rims.jpg , Spoiler.jpg , Sticker.jpg , Tint.jpg , Cool_light.jpg;
        img.alt = part.name;
        img.className = "car-part";


        img.onclick = () => {
        addToList(part.name);
        addPoints(part.points);
        img.remove();  //fjerner bildet fra spill området 

     };

     document.getElementById("gameArea").appendChild(img);
        counter++;
            } else {
        // alert("All parts have appeared!");
    }
}

setInterval(spawnPart, 3000); //starter på 3 sekunder så får vi se om det blir for lite eller mye

function addToList(partName) {
    if (counter < carParts.length) {

        let newElement = document.createElement("li");
        newElement.textContent = carParts[partName];

        document.getElementById("carParts").appendChild(newElement);

    }
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
        points = points + 20;
    } else if (carpart === "Spoiler") {
        points = points + 25;
    } else if (carpart === "Stickers") {
        points = points + 5;
    } else if (carpart === "Tint") {
        points = points + 10;
    } else if (carpart === "Cool lights") {
        points = points + 15;
    } else {
        points = 0;
    }

    totalPoints += points;
    document.getElementById("pointDiv").textContent = "Score:" + totalPoints;

    if (totalPoints >= 100) {
        duVantView();
    } else {
        updateView();
    }
}
