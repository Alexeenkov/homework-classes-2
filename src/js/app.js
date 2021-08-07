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

// ? Чисто глянуть, что мы создали:
// eslint-disable-next-line no-console
console.log(bowman, swordsman, magician, undead, zombie, daemon);