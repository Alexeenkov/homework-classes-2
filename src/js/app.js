import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';

// ? Создаём персонажей:
const bowman = new Bowman('Anatoly', 'Bowman');
const swordsman = new Swordsman('Vasily', 'Swordsman');
const magician = new Magician('Ivan', 'Magician');
const undead = new Undead('Dmitriy', 'Undead');
const zombie = new Zombie('Aleksey', 'Zombie');
const daemon = new Daemon('Ilya', 'Daemon');

// ? Проверяем работу методов:
undead.damage(150);
magician.damage(30);
swordsman.damage(50);
swordsman.levelUp();

// ? Чисто глянуть, что мы изменили:
console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(undead);
console.log(zombie);
console.log(daemon);