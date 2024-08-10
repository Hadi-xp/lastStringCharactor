// String Variabls

let myString = 'karo bigi dadashi karo bigi ye *** mikhad bokoshatam mese pazolini';
let secondString = '';

// below code is a function that use slice method for return the last charactor of string

function getString(string){
    let stringLenght = string.length;
    if (stringLenght == 0){
      return "string cant be empty";
    }else{
      return string.slice(-1);
    }
}
// as you can see there is an if in my code that check if the string is empty or not


console.log(getString(myString));