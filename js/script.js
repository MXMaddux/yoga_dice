const poses = {
    1: "Boat",
    2: "Butterfly",
    3: "Camel",
    4: 'Cat',
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
    73: "Knees To Chest"
}



function roll() {
    var audio = new Audio('/yoga_dice/audio/roll_dice.mp3');
    audio.loop = false;
    audio.play();
    // var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    var randNum1 = Math.floor(Math.random() * 6) + 1; //1-6
    var randNum2 = Math.floor(7 + Math.random() * 6) + 1;
    var randNum3 = Math.floor(13 + Math.random() * 6) + 1;
    var randNum4 = Math.floor(19 + Math.random() * 6) + 1;
    var randNum5 = Math.floor(25 + Math.random() * 6) + 1;
    var randNum6 = Math.floor(31 + Math.random() * 6) + 1;
    var randNum7 = Math.floor(37 + Math.random() * 6) + 1;
    var randNum8 = Math.floor(43 + Math.random() * 6) + 1;
    var randNum9 = Math.floor(49 + Math.random() * 6) + 1;
    var randNum10 = Math.floor(55 + Math.random() * 6) + 1;
    var randNum11 = Math.floor(61 + Math.random() * 6) + 1;
    var randNum12 = Math.floor(67 + Math.random() * 6) + 1;

    // var randomDiceImage = "dice" + randomNumber1 + ".png";
    var dieImage1 = "pose" + randNum1 + ".png";
    var dieImage2 = "pose" + randNum2 + ".png";
    var dieImage3 = "pose" + randNum3 + ".png";
    var dieImage4 = "pose" + randNum4 + ".png";
    var dieImage5 = "pose" + randNum5 + ".png";
    var dieImage6 = "pose" + randNum6 + ".png";
    var dieImage7 = "pose" + randNum7 + ".png";
    var dieImage8 = "pose" + randNum8 + ".png";
    var dieImage9 = "pose" + randNum9 + ".png";
    var dieImage10 = "pose" + randNum10 + ".png";
    var dieImage11 = "pose" + randNum11 + ".png";
    var dieImage12 = "pose" + randNum12 + ".png"; //dice1.png - dice6.png

    // var randomImageSource = "images/" + randomDiceImage; images/dice1.png - images/dice6.png
    var dieImageSource1 = "/yoga_dice/img/yoga_poses/" + dieImage1;
    var dieImageSource2 = "/yoga_dice/img/yoga_poses/" + dieImage2;
    var dieImageSource3 = "/yoga_dice/img/yoga_poses/" + dieImage3;
    var dieImageSource4 = "/yoga_dice/img/yoga_poses/" + dieImage4;
    var dieImageSource5 = "/yoga_dice/img/yoga_poses/" + dieImage5;
    var dieImageSource6 = "/yoga_dice/img/yoga_poses/" + dieImage6;
    var dieImageSource7 = "/yoga_dice/img/yoga_poses/" + dieImage7;
    var dieImageSource8 = "/yoga_dice/img/yoga_poses/" + dieImage8;
    var dieImageSource9 = "/yoga_dice/img/yoga_poses/" + dieImage9;
    var dieImageSource10 = "/yoga_dice/img/yoga_poses/" + dieImage10;
    var dieImageSource11 = "/yoga_dice/img/yoga_poses/" + dieImage11;
    var dieImageSource12 = "/yoga_dice/img/yoga_poses/" + dieImage12;

    // var image1 = document.querySelectorAll("img")[0];
    var image1 = document.querySelectorAll("img")[3];
    var image2 = document.querySelectorAll("img")[4];
    var image3 = document.querySelectorAll("img")[5];
    var image4 = document.querySelectorAll("img")[6];
    var image5 = document.querySelectorAll("img")[7];
    var image6 = document.querySelectorAll("img")[8];
    var image7 = document.querySelectorAll("img")[9];
    var image8 = document.querySelectorAll("img")[10];
    var image9 = document.querySelectorAll("img")[11];
    var image10 = document.querySelectorAll("img")[12];
    var image11 = document.querySelectorAll("img")[13];
    var image12 = document.querySelectorAll("img")[14];

    // image1.setAttribute("src", randomImageSource);
    image1.setAttribute("src", dieImageSource1);
    image2.setAttribute("src", dieImageSource2);
    image3.setAttribute("src", dieImageSource3);
    image4.setAttribute("src", dieImageSource4);
    image5.setAttribute("src", dieImageSource5);
    image6.setAttribute("src", dieImageSource6);
    image7.setAttribute("src", dieImageSource7);
    image8.setAttribute("src", dieImageSource8);
    image9.setAttribute("src", dieImageSource9);
    image10.setAttribute("src", dieImageSource10);
    image11.setAttribute("src", dieImageSource11);
    image12.setAttribute("src", dieImageSource12);

    document.querySelectorAll("p")[0].innerText = poses[randNum1];
    document.querySelectorAll("p")[1].innerText = poses[randNum2];
    document.querySelectorAll("p")[2].innerText = poses[randNum3];
    document.querySelectorAll("p")[3].innerText = poses[randNum4];
    document.querySelectorAll("p")[4].innerText = poses[randNum5];
    document.querySelectorAll("p")[5].innerText = poses[randNum6];
    document.querySelectorAll("p")[6].innerText = poses[randNum7];
    document.querySelectorAll("p")[7].innerText = poses[randNum8];
    document.querySelectorAll("p")[8].innerText = poses[randNum9];
    document.querySelectorAll("p")[9].innerText = poses[randNum10];
    document.querySelectorAll("p")[10].innerText = poses[randNum11];
    document.querySelectorAll("p")[11].innerText = poses[randNum12];

}










// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);