import Character from './Character';

export default function Daemon(name, type) {
  // ? Наследуем общие характеристики персонажей:
  Character.call(this, name, type);
  // ? Указываем собственные:
  this.attack = 10;
  this.defence = 40;
}

// Наследуем прототип родителя
Daemon.prototype = Object.create(Character.prototype);
// Cоздаём собственное свойство "конструктор" в прототипе нашего объекта
Daemon.prototype.constructor = Daemon;