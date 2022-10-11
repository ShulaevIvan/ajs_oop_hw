/* eslint-disable no-console */
import Bowerman from './bowerman.js';
import Deamon from './deamon.js';
import Swordsman from './swordsman.js';
import Undead from './undead.js';
import Zombie from './zombie.js';
import Magician from './magican.js';

const bowerman = new Bowerman('test');
const deamon = new Deamon('test');
const swordsman = new Swordsman('test');
const undead = new Undead('test');
const zombie = new Zombie('test');
const magican = new Magician('test');
magican.levelup();
magican.damage(100);
console.log(bowerman);
console.log(deamon);
console.log(swordsman);
console.log(undead);
console.log(zombie);
console.log(magican);
