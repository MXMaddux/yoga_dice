const poses = {
  1: "Boat",
  2: "Butterfly",
  3: "Camel",
  4: "Cat",
  5: "Chair",
  6: "Chaturanga",
  7: "Child's Pose",
  8: "Cobra",
  9: "Cow",
  10: "Cow Face",
  11: "Crow",
  12: "Dancer",
  13: "Devotional Warrior",
  14: "Dolphin",
  15: "Double Pigeon",
  16: "Down Dog",
  17: "Eagle",
  18: "Easy Seat",
  19: "Easy Twist",
  20: "Extended Side Angle",
  21: "Forearm Plank",
  22: "Forward Fold",
  23: "Frog",
  24: "Goddess",
  25: "Half Frog",
  26: "Half Moon",
  27: "Hero",
  28: "High Lunge",
  29: "Lizard",
  30: "Locust",
  31: "Lotus",
  32: "Low Lunge",
  33: "Melasana Squat",
  34: "Mermaid",
  35: "Peaceful Warrior",
  36: "Pigeon Upright",
  37: "Plank",
  38: "Plow",
  39: "Puppy",
  40: "Pyramid",
  41: "Reverse Plank",
  42: "Revolved Chair",
  43: "Revolved Lunge",
  44: "Revolved Side Angle",
  45: "Revolved Triangle",
  46: "Seated Forward Bend",
  47: "Seated 1Legged Forward Bend",
  48: "Seated Wide Legged Bend",
  49: "Side Plank",
  50: "Standing Split",
  51: "Tadasana",
  52: "3 Legged Dog",
  53: "Tree",
  54: "Triangle",
  55: "Up Dog",
  56: "Warrior I",
  57: "Warrior II",
  58: "Warrior III",
  59: "Wide Legged Fold",
  60: "Wild Thing",
  61: "Shoulder Stand",
  62: "Plow",
  63: "Bridge",
  64: "Wheel",
  65: "Fish",
  66: "Reclined Pigeon",
  67: "Reclined Twist",
  68: "Reclined Butterfly",
  69: "Knees To Chest",
  70: "Happy Baby",
  71: "Waterfall",
  72: "Monkey",
};



function roll() {
    let audio = new Audio('./audio/roll_dice.mp3');
    audio.loop = false;
    audio.play();
    let randNum1 = Math.floor(Math.random() * 72) + 1; //1-72


    let dieImage1 = "pose" + randNum1 + ".png";

    let dieImageSource1 = "./img/yoga_poses/" + dieImage1;

    let image1 = document.querySelector("img");

    image1.setAttribute("src", dieImageSource1);

    document.querySelector("p").innerText = poses[randNum1];

  countdown()
    setTimeout(roll, 25000);
}

const countdown = function () {
  let timeleft = 25;
  let downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
}


// let randomNumber1 = Math.floor(Math.random() * 72) + 1; //1-72

// let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// let randomImageSource = "./img/" + randomDiceImage; //images/dice1.png - images/dice6.png

// let image1 = document.querySelector("img");

// image1.setAttribute("src", randomImageSource);

// let randomNumber2 = Math.floor(Math.random() * 72) + 1;

// let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
