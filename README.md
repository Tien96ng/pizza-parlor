# _Pizza Parlor_

#### _Pizza website where a user can choose 1 or more individual toppings and size of the pizza._

#### By _**Tien Nguyen**_

## Technologies Used
* _HTML5_
* _CSS3_
* _Bootstrap 4.5_
* _jQuery 3.1_

## Description
_This apps takes in a user's input. The input is then displayed to the user on the HTML page starting from the 0, ranging to the input as the max number. For example, input is 5, so it'll display 0 - 5. But it also alters the range by changing every inclusion of "3" to "Won't you be my {placeholder}?". The placeholder is the user's name that is optional as a second input. If they don't enter their name, then the placeholder will be "neighbor". Then every inclusion of the number of 2 replaces the number with "Boop!" but that doesn't supersede the rule of 3. For example, if the number is "32", it'll replace the number with "Won't you be my {placeholder}?" instead of "Boop!". Finally, the last inclusion rule is for the number 1, that replaces the number with "Beep!", while following the rule to not supersede 2 and 3._

## Setup/Installation Requirements
* _(No installations required.)_
* _Clone the Repo or simply download the repo as a zip._

_If neither option is appeal, please view the live project [here](https://tien96ng.github.io/mr-roboger-neighborhood/)!_

## Test Specs
**Describe: beepBoop()**\
Test: Numbers containing 3: all digits replaced by "Won't you be my neighbor?"\
Expect(beepBoop(3).toEqual([0, 1, 2, "Won't you be my neighbor?"]);

Test: Numbers containing 2: all digits replaced by (all digits) with "Boop!"\
Expect(beepBoop(2).toEqual([0, 1, "Boop!", "Won't you be my neighbor?"]);

Test: Numbers containing 1: all digits replaced by (all digits) with "Beep!"\
Expect(beepBoop(1).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"]);

Test: User enters the number 13.\
Expect(beepBoop(13).toEqual(
  [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]);

**Describe: reverseInput()**\
Test: Takes the user's input and reverse the output."\
Expect(beepBoop(5).toEqual([5, 4, "Won't you be my neighbor?", "Boop!", "Beep!", 0]);

## Known Bugs
* _Reverse with a name will put it at the beginning of the 3 digit replacement._
* _For Example: Input 3 with a name will reverse to === [Tien?", "Won't you be my neighbor, "Boop!", "Beep!", 0]_

## License
_This software is licensed under the MIT license_

Copyright (c) 2020 __Tien Nguyen__

## Contact Information
_<Tien96ng@github.com>_