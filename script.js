// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100; // start value of HP
let currentAP = 100; // start value of action points

function onReady() {
    console.log("Ready to go!")

    console.log(document.getElementsByClassName("attack-btn arcane-scepter")); // test, kept getting null error previously

    let arcaneButton = document.querySelector(".attack-btn.arcane-scepter") // Selection of button within our HTML
    let entangleButton = document.querySelector(".attack-btn.entangle") // Selection of button within our HTML
    let dragonButton = document.querySelector(".attack-btn.dragon-blade") // Selection of button within our HTML
    let starButton = document.querySelector(".attack-btn.star-fire") // Selection of button within our HTML

    // Empty functions below allow the onAttackButton to be called upon an event action, in our case here a mouse click on the specific button
    // Remember this! It could be super helpful in future code!
    // onAttackButton is then passsed the given parameters/arugments, such as 12 and 14 for the first attack
    

    if (arcaneButton) arcaneButton.addEventListener('click', function() {
        onAttackButton(12, 14)
    }) 
    //end if arcane button is clicked

    if (entangleButton) entangleButton.addEventListener('click', function() {
        onAttackButton(23, 9)
    })
    //end if entangle is button clicked

    if (dragonButton) dragonButton.addEventListener('click', function() {
        onAttackButton(38, 47)
    })
    //end if dragon is button clicked

    if (starButton) starButton.addEventListener('click', function() {
        onAttackButton(33, 25)
    })
    //end if star button is clicked

    updateDisplayInfo()

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

//end onReady function

function onAttackButton(AP, damage) {
    if (currentAP >= AP && fungusHP > 0) {
        fungusHP -= damage
        currentAP -= AP
        updateDisplayInfo()
        updateGame ()
    }
}

// end onAttackBonus function, function decrements hp and ap, and updates displayed values
// then checks if mushroom fungi dude has been vanquished or not

function updateDisplayInfo() {
    document.getElementById("hp-meter").value  = fungusHP // sets new HP value for progress bar
    console.log(fungusHP);
    document.getElementById("ap-meter").value = currentAP // sets new AP value for progress bar
    console.log(currentAP);
    document.querySelector(".hp-text").textContent = `${fungusHP} HP` // sets HP in the dom
    console.log(document.querySelector(".hp-text").textContent);
    document.querySelector(".ap-text").textContent = `${currentAP} AP` // sets AP in the dom
    console.log(document.querySelector(".ap-text").textContent);
}

//end updateDisplayInfo function

function updateGame() {
    if (fungusHP <= 0) {
        console.log("There is no longer a Fungus Amongus");
        console.log("Dead Fungi");
        fungusHP = 0;
    }
}

//end updateGame function

onReady()