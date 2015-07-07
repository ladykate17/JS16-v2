$(document).on('ready', function() {

	// --- PART I --- //
	// Define a constructor for the following object. Add parameters to the constructor for the given properties and add them as instance variables.

		// FoodItem
		// string name
		// number calories
		// boolean vegan
		// boolean glutenFree
		// boolean citrusFree


	// Define a toString method on the constructor's prototype. It should return a string description of the food including its name, calories, and 
	// dietary information, formatted as you choose. toString should not have any side effects.

	// Instantiate three different FoodItems and store each in a separate variable. Call toString on each instance and print the result to the console.


	// constructor
	var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
		this.name 		= name;
		this.calories 	= calories;
		this.vegan 		= vegan;
		this.glutenFree = glutenFree;
		this.citrusFree = citrusFree;
	}

	// definition
	FoodItem.prototype.toString = function(item){

		return 'Food Item Prototype:\n\tName: ' + this.name + '\n\tCalories: ' + this.calories + '\n\tVegan: ' + this.vegan + '\n\tGluten Free: ' + this.glutenFree + '\n\tCitrus Free: ' + this.citrusFree	
	}

	var veggieSoup  = new FoodItem('Veggie Soup', 210, true, false, true);
	var chickenWrap = new FoodItem('Chicken Wrap', 560, false, false, true);
	var asianSalad  = new FoodItem('Asian Salad', 360, true, true, false); 


	console.log(veggieSoup.toString());
	console.log(chickenWrap.toString());
	console.log(asianSalad.toString());



	// --- PART II --- //
	// Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.
		// Drink
			// string name
			// string description
			// number price
			// Array of FoodItem ingredients
		// Plate
			// string name
			// string description
			// number price
			// Array of FoodItem ingredients
		// Order
			// Array of Plate plates
		// Menu
			// Array of Plate plates
		// Restaurant
			// string name
			// string description
			// Menu menu
		// Customer
			// string dietaryPreference

	// Define a toString method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. 
	// toString should not have any side effects. You may want to reuse the toString method of the contained objects. (e.g. the Menu object should call toString
	// on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).

	// Add the following methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
		// boolean isVegan
		// boolean isGlutenFree
		// boolean isCitrusFree

	// Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.

	// Instantiate a Menu that contains each of the instantiated Plates and Drinks.

	// Instantiate a Restaurant that contains the instantiated Menu.

	// Call the Restaurant's toString method to have it print out all its information.
  
});