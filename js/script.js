function Pizza(toppings = [], size = "small") {
  this.toppings = toppings;
  this.size = size
}

Pizza.prototype.costOfPizza = function() {
  return this.size === small ?  (this.toppings.length * 2) + 5 : 5;
}

$(document).ready(function() {
  
});