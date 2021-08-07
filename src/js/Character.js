const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    // ? Создаём имя персонажа:
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
    } else {
      this.name = name;
    }
    // ? Создаём тип персонажа:
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректный тип персонажа');
    }
    // ? Создаём уровень жизни и уровень персонажа:
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.health = 100;
      return;
    }
    throw new Error('Нельзя повысить левел умершего');
  }

  damage(points) {
    if (this.health === 0) return;
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.health = 0;
  }
}