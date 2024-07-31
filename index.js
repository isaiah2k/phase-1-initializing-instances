class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad
    this.soup = soup
    this.drink = drink
  }
}
// Creates a class for dinner and passes dessert as a private property
class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad
    this.soup = soup
    this.entree = entree
    this.#dessert = dessert
  }
}
