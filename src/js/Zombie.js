import Character from './Character';

export default function Zombie(name, type) {
  // ? Наследуем общие характеристики персонажей:
  Character.call(this, name, type);
  // ? Указываем собственные:
  this.attack = 40;
  this.defence = 10;
}

// Наследуем прототип родителя
Zombie.prototype = Object.create(Character.prototype);
// Cоздаём собственное свойство "конструктор" в прототипе нашего объекта
Zombie.prototype.constructor = Zombie;