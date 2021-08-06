import Character from './Character';

export default function Swordsman(name, type) {
  // ? Наследуем общие характеристики персонажей:
  Character.call(this, name, type);
  // ? Указываем собственные:
  this.attack = 40;
  this.defence = 10;
}

// Наследуем прототип родителя
Swordsman.prototype = Object.create(Character.prototype);
// Cоздаём собственное свойство "конструктор" в прототипе нашего объекта
Swordsman.prototype.constructor = Swordsman;