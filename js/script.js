function Pizza(toppings = {}, size = "small") {
  this.toppings = toppings;
  this.size = size
}

Pizza.prototype.costOfPizza = function() {
  let selectedToppingsArr = [];
  let sizePrice = 0;

  Object.entries(this.toppings).forEach(topping => {
    console.log(topping)
    if(topping[1]) {
      selectedToppingsArr.push(topping[0])
    }
  });
  
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

  return (selectedToppingsArr.length * 1.5) + sizePrice;
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
    let totalprice = newPizza.costOfPizza();

    $("#total-price").text(totalprice);
    $("#receipt-container").show();

    console.log(totalprice);

    this.reset();
  });

  

});