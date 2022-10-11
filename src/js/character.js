export default class Character {
  constructor(name) {
    this.name = name;
    this.type = this.constructor.name;
    this.level = 1;
    this.health = 100;
    this.attack = 0;
    this.defence = 0;
    if (this.name.length <= 2 || this.name.length >= 10 || !this.name) {
      throw new Error('Error by name length');
    }
    this.checkClassName();
  }

  checkClassName() {
    const nameArr = ['Bowerman', 'Swordsman', 'Magician', 'Deamon', 'Undead', 'Zombie'];
    if (!nameArr.includes(this.type) && this.type !== 'Character') {
      throw new Error('err className invalid!');
    }
  }

  levelup() {
    if (this.health <= 0) {
      throw new Error('Err health < 0!');
    }
    this.level += 1;
    this.health = 100;
    this.attack = Math.floor((this.attack / 100) * 20 + (this.attack));
    this.defence = Math.floor((this.defence / 100) * 20 + (this.defence));
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= Math.floor(points * (1 - this.defence / 100));
    }
  }
}
