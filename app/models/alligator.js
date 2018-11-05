
export default class Alligator {
  constructor(name, age, habitat, weight, trainer, lastDrVisit) {
    this.name = name
    this.age = age
    this.habitat = habitat
    this.weight = weight
    this.trainer = trainer
    this.lastDrVisit = lastDrVisit
    this.food = ["Meat"]
    this.willAttack = ["elephant", "lion", "osstrich", "quail", "sheep", "numbate", "mouse", 'pig', "turtle", "rabbit", "vulture", "wolf", 'yak', "zebra"]
  }

  willEat(animal) {
    return (this.willAttack.includes(animal.toLowerCase()))
  }
}