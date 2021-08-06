export default function Character(name, type) {
  // ? Создаём имя персонажа:
  if (name.length < 2 || name.length > 10) {
    throw new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
  } else {
    this.name = name;
  }
  // ? Создаём тип персонажа:
  if (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
    this.type = type;
  } else {
    throw new Error('Некорректный тип персонажа');
  }
  // ? Создаём уровень жизни и уровень персонажа:
  this.health = 100;
  this.level = 1;
}

Character.prototype.levelUp = function () {
  if (this.health > 0) {
    this.level += 1;
    this.attack *= 1.2;
    this.health = 100;
  }
};

Character.prototype.damage = function (points) {
  if (this.health > 0) {
    this.health -= points * (1 - this.defence / 100);
  }
  if (this.health < 0) this.health = 0;
};