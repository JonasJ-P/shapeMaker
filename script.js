//A fuction to hide elements based on what the user have selected in the selector
//If the user has chosen rectangle in the selector, then the input fields for rectangle shows, while all others is hidden
function handleSelection(choice) {
    if (choice=="rectangleInfo"){
        document.getElementById(choice).style.display="block"
        document.getElementById("circleInfo").style.display="none"
        document.getElementById("triangleInfo").style.display="none"
        document.getElementById("squareInfo").style.display="none"
    }
    if (choice=="circleInfo"){
        document.getElementById(choice).style.display="block"
        document.getElementById("rectangleInfo").style.display="none"
        document.getElementById("triangleInfo").style.display="none"
        document.getElementById("squareInfo").style.display="none"
    }
    if (choice=="triangleInfo"){
        document.getElementById(choice).style.display="block"
        document.getElementById("circleInfo").style.display="none"
        document.getElementById("rectangleInfo").style.display="none"
        document.getElementById("squareInfo").style.display="none"
    }
    if (choice=="squareInfo"){
        document.getElementById(choice).style.display="block"
        document.getElementById("circleInfo").style.display="none"
        document.getElementById("triangleInfo").style.display="none"
        document.getElementById("rectangleInfo").style.display="none"
    }
}
//creates canvas
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


//A fuction to create a rectangle
function createRectangle(width, height){
    //Clears out the field and resizes the canvas area to be a bit larger then how large the rectangle is
    context.clearRect(0, 0, 10000, 10000)
    let canvasHøyde = parseFloat(height)+100;
    let canvasBredde = parseFloat(width)+100;
    document.getElementById("myCanvas").height = canvasHøyde;
    document.getElementById("myCanvas").width = canvasBredde;

    //Creates the rectangle
    context.fillRect(10, 10, width, height)

    //This changes the text under the rectangle to a title and a paragraf with area and parimeter of the rectangle
    let infoSquareHead = document.getElementById("infoHeader");
    infoSquareHead.innerHTML = "Info about rectangle";
    let infoSquarePara = document.getElementById("infoParagraf");
    let parimeter = (parseFloat(width)*2)+(parseFloat(height)*2);
    let area = parseFloat(width) * parseFloat(height);
    infoSquarePara.innerHTML = "The parimeter of the rectangle is: " + parimeter + "<br>" + "The area of the rectangle is: " + area;
}

//function to create the square
function createSquare(sideLength){
    //Clears out the field and resizes the canvas area to be a bit larger then how large the square is
    context.clearRect(0, 0, 10000, 10000)
    let canvasHøyde = parseFloat(sideLength)+100;
    let canvasBredde = parseFloat(sideLength)+100;
    document.getElementById("myCanvas").height = canvasHøyde;
    document.getElementById("myCanvas").width = canvasBredde;

    //Creates the square
    context.fillRect(10, 10, sideLength, sideLength)

    //This changes the text under the square to a title and a paragraf with area and parimeter of the square
    let infoSquareHead = document.getElementById("infoHeader");
    infoSquareHead.innerHTML = "Info about square";
    let infoSquarePara = document.getElementById("infoParagraf");
    let parimeter = (parseFloat(sideLength)*2)+(parseFloat(sideLength)*2);
    let area = parseFloat(sideLength) * parseFloat(sideLength);
    infoSquarePara.innerHTML = "The parimeter of the square is: " + parimeter + "<br>" + "The area of the square is: " + area;
}

//function to create the triangle
function createTriangle(høyde, bredde){
    //Clears out the field and resizes the canvas area to be a bit larger then how large the triangle is
    context.clearRect(0, 0, 10000, 10000);
    let canvasHøyde = parseFloat(høyde)+100;
    let canvasBredde = parseFloat(bredde)+100;
    document.getElementById("myCanvas").height = canvasHøyde;
    document.getElementById("myCanvas").width = canvasBredde;

    //Creates the triangle
    let delBredde = parseFloat(bredde)+20;
    let delbredde2 = delBredde-20;
    let delHøyde = høyde;
    let punkt2 = (delbredde2/2)+20;
    context.beginPath();
    context.moveTo(20, delHøyde);
    context.lineTo(delBredde, delHøyde);
    context.lineTo(punkt2, 0);
    context.fill();


    //This changes the text under the triangle to a title and a paragraf with area and parimeter of the triangle
    let infoSquareHead = document.getElementById("infoHeader");
    infoSquareHead.innerHTML = "Info about triangle";
    let infoSquarePara = document.getElementById("infoParagraf");
    let parimetersqrt = ((parseFloat(bredde)/2)**2)+(parseFloat(høyde)**2);
    let parimeter = (Math.sqrt(parimetersqrt)*2)+ parseFloat(bredde);
    let area = 0.5 * (parseFloat(høyde) * parseFloat(bredde));
    infoSquarePara.innerHTML = "The parimeter of the triangle is: " + parimeter + "<br>" + "The area of the triangle is: " + area;
}

//Function to create the circle
function createCircle(radius){
    //Clears out the field and resizes the canvas area to be a bit larger then how large the circle is
    context.clearRect(0, 0, 10000, 10000);
    let canvasHøyde = (parseFloat(radius)*2)+100;
    let canvasBredde = (parseFloat(radius)*2)+100;
    document.getElementById("myCanvas").height = canvasHøyde;
    document.getElementById("myCanvas").width = canvasBredde;

    //Creates the circle
    let xStart = parseFloat(radius)+20
    context.beginPath();
    context.arc(xStart, xStart, radius, 0, 2 * Math.PI);
    context.fill();

    //This changes the text under the circle to a title and a paragraf with area and parimeter of the circle
    let infoSquareHead = document.getElementById("infoHeader");
    infoSquareHead.innerHTML = "Info about circle";
    let infoSquarePara = document.getElementById("infoParagraf");
    let parimeter = 2 * Math.PI * parseFloat(radius);
    let area = Math.PI * (parseFloat(radius)**2);
    infoSquarePara.innerHTML = "The parimeter of the circle is: " + parimeter + "<br>" + "The area of the circle is: " + area;
}


//Tested some things that failed here

/*function reSizeCircle(høydeCan, breddeCan) {


} */
/*
function reSizeTriangle (høydeTriangle, breddeTriangle){
    let canvasHøyde = parseFloat(høydeTriangle)+50;
    let canvasBredde = parseFloat(breddeTriangle)+50;
    console.log(canvasHøyde);
    console.log(canvasBredde);
    document.getElementById("myCanvas").height = canvasHøyde.toString();
    document.getElementById("myCanvas").width = canvasBredde.toString();
    //canvas.setAttribute("height", canvasHøyde);
    //canvas.setAttribute("width", canvasBredde);

} */

    //reSizeTriangle(document.getElementById('heightTri').value,document.getElementById('baseTri').value);