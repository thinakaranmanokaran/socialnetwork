const heart = document.getElementById("heart");
heart.style.visibility = "hidden";

function like() {
    heart.style.visibility = "visible";
    console.log("liked");

    setTimeout(() => {
        heart.style.visibility = "hidden";
    }, 1000); // 1 second
}

const fire = document.getElementById("fire");
fire.style.visibility = "hidden";

function fired() {
    fire.style.visibility = "visible";
    console.log("fired");

    setTimeout(() => {
        fire.style.visibility = "hidden";
    }, 1000); // 1 second
}

const cele = document.getElementById("cele");
cele.style.visibility = "hidden";

function celeb() {
    cele.style.visibility = "visible";
    console.log("celebrated");

    setTimeout(() => {
        cele.style.visibility = "hidden";
    }, 1000); // 1 second
}

const hand = document.getElementById("hand");
hand.style.visibility = "hidden";

function showHand() {
    hand.style.visibility = "visible";
    console.log("hand shown");

    setTimeout(() => {
        hand.style.visibility = "hidden";
    }, 3000); // 1 second
}
