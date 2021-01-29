function Pizza(toppings = [], size = "small") {
  this.toppings = toppings;
  this.size = size
}

Pizza.prototype.costOfPizza = function() {
  return this.size === small ?  (this.toppings.length * 2) + 5 : 5;
}

$(document).ready(function() {
  let toppingsObj = {};

  $("#pizza-order").submit(function(event) {
    event.preventDefault();

    let size = $("#size :selected").val();
    let pepperoni = $("#pepperoni").is(":checked");
    let onions = $("#onions").is(":checked");
    let sausage = $("#sausage").is(":checked");
    let bacon = $("#bacon").is(":checked");

    let toppingsArr = {pepperoni, onions, sausage, bacon};

    console.log(size);
    console.log(toppingsArr)

    this.reset();
  });
});