import Character from './Character';

export default function Magician(name, type) {
  // ? Наследуем общие характеристики персонажей:
  Character.call(this, name, type);
  // ? Указываем собственные:
  this.attack = 10;
  this.defence = 40;
}

// Наследуем прототип родителя
Magician.prototype = Object.create(Character.prototype);
// Cоздаём собственное свойство "конструктор" в прототипе нашего объекта
Magician.prototype.constructor = Magician;