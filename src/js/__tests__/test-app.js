import Bowerman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';

test('create the character "Bowman"', () => {
  const name = 'Anatoly';
  const type = 'Bowman';

  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Bowman',
  };

  const received = new Bowerman(name, type);

  expect(received).toEqual(expected);
});

test('create the character "Swordsman"', () => {
  const name = 'Anatoly';
  const type = 'Swordsman';

  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Swordsman',
  };

  const received = new Swordsman(name, type);

  expect(received).toEqual(expected);
});

test('create the character "Magician"', () => {
  const name = 'Anatoly';
  const type = 'Magician';

  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Magician',
  };

  const received = new Magician(name, type);

  expect(received).toEqual(expected);
});

test('create the character "Undead"', () => {
  const name = 'Anatoly';
  const type = 'Undead';

  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Undead',
  };

  const received = new Undead(name, type);

  expect(received).toEqual(expected);
});

test('create the character "Zombie"', () => {
  const name = 'Anatoly';
  const type = 'Zombie';

  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Zombie',
  };

  const received = new Zombie(name, type);

  expect(received).toEqual(expected);
});

test('create the character "Daemon"', () => {
  const name = 'Anatoly';
  const type = 'Daemon';

  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Daemon',
  };

  const received = new Daemon(name, type);

  expect(received).toEqual(expected);
});

test('uncorrect name character', () => {
  const name = 'A';
  const type = 'Daemon';

  function showThrowError() {
    // eslint-disable-next-line no-new
    new Daemon(name, type);
  }

  expect(showThrowError).toThrowError(new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов'));
});

test('uncorrect type character', () => {
  const name = 'Anatoly';
  const type = 'Druid';

  function showThrowError() {
    // eslint-disable-next-line no-new
    new Daemon(name, type);
  }

  expect(showThrowError).toThrowError(new Error('Некорректный тип персонажа'));
});

test('work of the method "levelUp"', () => {
  const name = 'Anatoly';
  const type = 'Daemon';

  const expected = {
    attack: 12,
    defence: 40,
    health: 100,
    level: 2,
    name: 'Anatoly',
    type: 'Daemon',
  };

  const received = new Daemon(name, type);
  received.levelUp();

  expect(received).toEqual(expected);
});

test('work of the method "damage"', () => {
  const name = 'Anatoly';
  const type = 'Daemon';

  const expected = {
    attack: 10,
    defence: 40,
    health: 70,
    level: 1,
    name: 'Anatoly',
    type: 'Daemon',
  };

  const received = new Daemon(name, type);
  received.damage(50);

  expect(received).toEqual(expected);
});