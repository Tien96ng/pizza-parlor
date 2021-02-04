# _Pizza Parlor_

#### _Pizza website where a user can choose 1 or more individual toppings and size of the pizza._

#### By _**Tien Nguyen**_

## Technologies Used
* _HTML5_
* _CSS3_
* _Bootstrap 4.5_
* _jQuery 3.1_

## Description
_This a a pizza ordering app for a company where they can choose one or more individual toppings and a size for the pizza. The combination of the two parameters will determine the final cost of the pizza. There is also an option to order again after the user has ordered their pizza._

## Setup/Installation Requirements
* _(No installations required.)_
* _Clone the Repo or simply download the repo as a zip._

_If neither option is appeal, please view the live project [here](https://tien96ng.github.io/pizza-parlor/)!_

## Test Specs
**Describe: Pizza.prototype.addToppings(toppings)**\
Test: Should return an array of toppings to add to the order that the user selected from the order form.\
Expect(pizza.addToppings({pepperoni: false, mushroom: false, onions: true, sausage: false, bacon:false}).toEqual(["onions"]);

**Describe: Pizza.prototype.costOfPizza(specs, size)**\
Test: Should return the cost of the pizza depending on the number of toppings added and the size chosen.\
Expect(pizza.specs(["onions", "pepperoni"], "small").toEqual(13);

**Describe: Pizza.prototype.calculateTax(cost)**\
Test: Should return the tax of the cost of the order which is 10%.\
Expect(pizza.specs(10.00).toEqual(1.00);

## Known Bugs
* _No None Bugs At the moment._


## License
_This software is licensed under the MIT license_

Copyright (c) 2020 __Tien Nguyen__

## Contact Information
_<Tien96ng@github.com>_