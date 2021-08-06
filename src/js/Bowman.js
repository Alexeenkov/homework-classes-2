import Character from './Character';

export default function Bowman(name, type) {
  // ? Наследуем общие характеристики персонажей:
  Character.call(this, name, type);
  // ? Указываем собственные:
  this.attack = 25;
  this.defence = 25;
}

// Наследуем прототип родителя
Bowman.prototype = Object.create(Character.prototype);
// Cоздаём собственное свойство "конструктор" в прототипе нашего объекта
Bowman.prototype.constructor = Bowman;