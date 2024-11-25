
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");


let boxNumber = document.getElementById("boxNumber");
let changeColor = document.getElementById("changeColor");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");

let color= "";
let boxNum = "";


changeColorBtn.addEventListener("click", function(){
    color = changeColor.value;
    color = color.toLowerCase();
    
    boxNum = boxNumber.value;

    switch(boxNum){
        case "1":
            box1.className = BG(color);
            break
        case "2":
            box2.className = BG(color);
            break
        case "3":
            box3.className = BG(color);
            break
        case "4":
            box4.className = BG(color);
            break
        case "5":
            box5.className = BG(color);
            break
        case "6":
            box6.className = BG(color);
            break
        case "7":
            box7.className = BG(color);
            break
        case "8":
            box8.className = BG(color);
            break

        default:
            alert("Enter a number 1-8");
            break
    }

})

function BG(color){
    switch(color){
        case "red" || "Red":
            return "red col-3 text-center boxSize";

        case "blue" || "Blue":
            return "blue col-3 text-center boxSize";

        case "purple" || "Purple":
            return "purple col-3 text-center boxSize";

        case "brown" || "Brown":
            return "brown col-3 text-center boxSize";

        case "yellow" || "Yellow":
            return "yellow col-3 text-center boxSize";

        default:
            alert("Enter a valid color")
    }
}


resetBtn.addEventListener("click", function(){
    box1.className = "col-3 text-center boxSize"
    box2.className = "col-3 text-center boxSize"
    box3.className = "col-3 text-center boxSize"
    box4.className = "col-3 text-center boxSize"
    box5.className = "col-3 text-center boxSize"
    box6.className = "col-3 text-center boxSize"
    box7.className = "col-3 text-center boxSize"
    box8.className = "col-3 text-center boxSize"
})