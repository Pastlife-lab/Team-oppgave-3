
updateView();
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div id="carDiv">
        <img src="Mujaffa_2.0.jpg" class="car">
    </div>
    
    <button onclick="spawnPart()">Start</button> <!-- legg til en funksjon som starter spillet når man trykker på knappen-->
    <button onclick="removeItem()">Ignore</button>

    <div id="carPartDiv">
        <ul id="carParts">Bildeler</ul><br>

        <div id="pointDiv">Score: </div>
    </div>
    
    <div id="buddyGrandmaDiv">
    
    </div>

    `
}
// popup functions 

function duVantView(){
    alert("Congratulation Pimp!!!!");
        }       //Ved makset ut Thug life meter legg til popup
                //fin evt bilde og en behagelig lyd?? =) 
 