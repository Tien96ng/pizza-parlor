function Pizza(toppings, size = "small") {
  this.toppings = toppings;
  this.size = size
}

Pizza.prototype.specs = function() {
  let selectedToppingsArr = [];

  Object.entries(this.toppings).forEach(topping => {
    console.log(topping)
    if(topping[1]) {
      selectedToppingsArr.push(topping[0])
    }
  });

  return selectedToppingsArr;
}

Pizza.prototype.costOfPizza = function() {
  let toppings = this.specs();
  let sizePrice = 0;
  
  switch(this.size) {
    case "large":
      sizePrice = 15;
      break;
    case "medium":
      sizePrice = 12;
      break;
    default:
      sizePrice = 10;
  }

  return ((toppings.length * 1.5) + sizePrice).toFixed(2);
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

    let tax = newPizza.costOfPizza() / 10;
    let total = parseFloat(newPizza.costOfPizza()) + tax;

    $("#pizza-detail").text(newPizza.specs());
    $("#price-detail").text(newPizza.costOfPizza());
    $("#tax").text(tax);
    $("#total-price").text(total);
    $("#receipt-container").show();
    $(".container").hide();

    this.reset();
  });



  

});