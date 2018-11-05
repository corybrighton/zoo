export default class Cat {
  constructor(name, age, weight, trainer, lastDrVisit) {
    this.name = name
    this.age = age
    this.weight = weight
    this.trainer = trainer
    this.lastDrVisit = lastDrVisit

    this.food = ["Garbage", "Grain"]
    this.getsAlong = []
    this.willAttack = []
    this.afraid = ["alligator", "bear", "cat", "dinosaur", "fox"]
    this.habitat = "moist forests, swamps and shrublands, especially oak forests and regions where reeds are abundant"
  }

  willEat(animal) {
    return (this.willAttack.includes(animal))
  }
}