function Pizza(toppings = {}, size = "small") {
  this.toppings = toppings;
  this.size = size
}

Pizza.prototype.costOfPizza = function() {
  let selectedToppingsArr = [];
  Object.entries(this.toppings).forEach(topping => {
    console.log(topping)
    if(topping[1]) {
      selectedToppingsArr.push(topping[0])
    }
  });


  return selectedToppingsArr;
}

$(document).ready(function() {
  let toppingsObj = {};

  $("#pizza-order").submit(function(event) {
    event.preventDefault();

    let size = $("#size :selected").val();
    let pepperoni = $("#pepperoni").is(":checked");
    let mushroom = $("#mushroom").is(":checked");
    let onions = $("#onions").is(":checked");
    let sausage = $("#sausage").is(":checked");
    let bacon = $("#bacon").is(":checked");

    let toppingsObj = {pepperoni, mushroom, onions, sausage, bacon};

    let newPizza =  new Pizza(toppingsObj, size);
    console.log(newPizza.costOfPizza())

    this.reset();
  });
});