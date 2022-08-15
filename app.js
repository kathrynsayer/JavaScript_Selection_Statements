console.log("Hello World!\n==========\n");
  let FavNumber = 8;
  let input= prompt("What is my favorite number?");

  input = parseFloat(input);

  if (input < FavNumber){
    alert("too low");
  }
  else if (input < FavNumber){
    alert("too high");
  }
  else {
    alert("Congratulations!!!");
  }

let birthMonth = prompt("What is your birth month? \n (ex: January=1)")
birthMonth = parseInt(birthMonth);

switch (birthMonth) {
  case 12: 
  case 1: 
  case 2:
      alert("Winter");
      break;
  case 3:
  case 4:
  case 5:
      alert("Spring");
      break;
  case 6: 
  case 7: 
  case 8:
      alert("Summer"); 
      break;
  case 9:
  case 10:
  case 11:
      alert("Autumn");
      break;
    default:
    alert("That month doesn't exist on my calender")
  
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";



switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
  case "04":
    type = "Sweat Shirt";
    break;
  default: 
    type = "Other";
}

switch (colorId) {
  case "BL":
    type = "Black";
    break;
  case "BL":
    type = "Blue";
    break;
  case "RD":
    type = "Red";
  case "PU":
    type = "Purple";
    break;
  default: 
    type = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    type = "Medium";
    break;
  case "L":
    type = "Large";
  case "XL":
    type = "Extra Large";
    break;
  default:
    size = "One Size Fits All"
}





console.log(`Product: ${size} ${color} ${type}`)