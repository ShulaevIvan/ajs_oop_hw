/* eslint-disable react/destructuring-assignment */
import Character from '../js/character.js';
import Bowerman from '../js/bowerman.js';
import Deamon from '../js/deamon.js';
import Magican from '../js/magican.js';
import Swordsman from '../js/swordsman.js';
import Undead from '../js/undead.js';
import Zombie from '../js/zombie.js';

test('test character class', () => {
  const testClass = new Character('test');
  const name = testClass.name;
  const level = testClass.level;
  const health = testClass.health;
  const attack = testClass.attack;
  const defence = testClass.defence;
  expect(name).toBe('test');
  expect(level).toBe(1);
  expect(health).toBe(100);
  expect(attack).toBe(0);
  expect(defence).toBe(0);
});
test('Test err length exept', () => {
  const errCatch = () => {
    new Character('t');
  };
  expect(errCatch).toThrow('Error by name length');
});
test('Test name err', () => {
  const errCatch = () => {
    const testClass = new Bowerman('test');
    testClass.type = 'badName';
    testClass.checkClassName();
  };
  expect(errCatch).toThrow('err className invalid!');
});

test('Test err health exept', () => {
  const errCatch = () => {
    const testClass = new Bowerman('test');
    testClass.health = 0;
    testClass.levelup();
  };
  expect(errCatch).toThrow('Err health < 0!');
});

test('Test health exept', () => {
  const errCatch = () => {
    const testClass = new Bowerman('test');
    testClass.health = 0;
    testClass.levelup();
  };
  expect(errCatch).toThrow('Err health < 0!');
});

test('test damage func Bowerman', () => {
  const testClass = new Bowerman('test');
  testClass.damage(100);
  const health = testClass.health;
  expect(health).toBe(25);
});

test('test lvlup func Bowerman', () => {
  const testClass = new Bowerman('test');
  testClass.levelup();
  const level = testClass.level;
  const attack = testClass.attack;
  const defence = testClass.defence;
  expect(level).toBe(2);
  expect(attack).toBe(30);
  expect(defence).toBe(30);
});

test('test damage func Deamon', () => {
  const testClass = new Deamon('test');
  testClass.damage(100);
  const health = testClass.health;
  expect(health).toBe(40);
});

test('test lvlup func Deamon', () => {
  const testClass = new Deamon('test');
  testClass.levelup();
  const level = testClass.level;
  const attack = testClass.attack;
  const defence = testClass.defence;
  expect(level).toBe(2);
  expect(attack).toBe(12);
  expect(defence).toBe(48);
});

test('test damage func Swordsman', () => {
  const testClass = new Swordsman('test');
  testClass.damage(100);
  const health = testClass.health;
  expect(health).toBe(10);
});

test('test lvlup func Swordsman', () => {
  const testClass = new Swordsman('test');
  testClass.levelup();
  const level = testClass.level;
  const attack = testClass.attack;
  const defence = testClass.defence;
  expect(level).toBe(2);
  expect(attack).toBe(48);
  expect(defence).toBe(12);
});

test('test damage func Undead', () => {
  const testClass = new Undead('test');
  testClass.damage(100);
  const health = testClass.health;
  expect(health).toBe(25);
});

test('test lvlup func Undead', () => {
  const testClass = new Undead('test');
  testClass.levelup();
  const level = testClass.level;
  const attack = testClass.attack;
  const defence = testClass.defence;
  expect(level).toBe(2);
  expect(attack).toBe(30);
  expect(defence).toBe(30);
});

test('test damage func Zombie', () => {
  const testClass = new Zombie('test');
  testClass.damage(100);
  const health = testClass.health;
  expect(health).toBe(10);
});

test('test lvlup func Zombie', () => {
  const testClass = new Zombie('test');
  testClass.levelup();
  const level = testClass.level;
  const attack = testClass.attack;
  const defence = testClass.defence;
  expect(level).toBe(2);
  expect(attack).toBe(48);
  expect(defence).toBe(12);
});

test('test damage func Magican', () => {
  const testClass = new Magican('test');
  testClass.damage(100);
  const health = testClass.health;
  expect(health).toBe(40);
});

test('test lvlup func Magican', () => {
  const testClass = new Magican('test');
  testClass.levelup();
  const level = testClass.level;
  const attack = testClass.attack;
  const defence = testClass.defence;
  expect(level).toBe(2);
  expect(attack).toBe(12);
  expect(defence).toBe(48);
});
