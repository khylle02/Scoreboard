let homeScore = document.getElementById('home-points');
console.log(homeScore);
let guestScore = document.getElementById('guest-points');
console.log(guestScore);

let scoreHome = 0;
let scoreGuest = 0;

function plusOneHome(){
    homeScore.textContent = scoreHome += 1;
}
function plusTwoHome(){
    homeScore.textContent = scoreHome += 2;
}
function plusThreeHome(){
    homeScore.textContent = scoreHome += 3;
}

function plusOneGuest(){
    guestScore.textContent = scoreGuest += 1;
}
function plusTwoGuest(){
    guestScore.textContent = scoreGuest += 2;
}
function plusThreeGuest(){
    guestScore.textContent = scoreGuest += 3;
}