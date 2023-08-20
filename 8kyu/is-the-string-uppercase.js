// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// Solutions

String.prototype.isUpperCase=function() {return this==this.toUpperCase()}



String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }



  String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);
  };



//define the string prototype here
String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this;
  }



  String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf();
};


//define the string prototype here
String.prototype.isUpperCase = function() {
  
    return this == this.toUpperCase() ? true : false;
  }