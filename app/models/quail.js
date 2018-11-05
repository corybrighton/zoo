export default class Quail {
  constructor(name, age, weight, trainer, lastDrVisit) {
    this.name = name
    this.age = age
    this.weight = weight
    this.trainer = trainer
    this.lastDrVisit = lastDrVisit

    this.food = ["Grain"]
    this.getsAlong = ["osstrich", "elephant", "giraffe"]
    this.willAttack = []
    this.afraid = ["alligator", "bear", "cat", "dinosaur", "fox"]
    this.habitat = "amid wild grasses, scrub, brush and open woodlands"
  }

  willEat(animal) {
    return (this.willAttack.includes(animal))
  }
}