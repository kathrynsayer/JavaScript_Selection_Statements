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
    alert("That month doesn't exist on my calendar")
  
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
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default: 
    type = "Other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default: 
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All"
}





console.log(`Product: ${size} ${color} ${type}`)