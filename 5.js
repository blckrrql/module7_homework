class Device {
  constructor(name, power, status) {
    this.name = name;
    this.power = power;
    this.n = function(n) {
      this.status = n;
    }
  }
}
 class Computer extends Device {
     constructor(name, power, status, room) {
         super(name, power, status);
         this.room = room;
     }
 }
 class Televisor extends Device {
     constructor(name, power, status, room) {
         super(name, power, status);
         this.room = room;
     }
 }
const laptop = new Computer("laptop", 400, 0, "living room");
const tv = new Televisor("TV", 680, 0, "bedroom");

let laptopStatus = prompt("Чтобы включить ноутбук, введите 1; чтобы оставить выключенным — 0");
let tvStatus = prompt("Чтобы включить телевизор, введите 1; чтобы оставить выключенным — 0");

laptop.n(+laptopStatus);
tv.n(+tvStatus);

console.log(laptop);
console.log(tv);

function powerSum(a, b) {
  let x = a.power;
  let y = b.power;
  if (a.status == 0) {
    x = 0;
  }
  if (b.status == 0) {
   y = 0; 
  }
  console.log("Общая потребляемая энергия: " + (x+y));
}
powerSum(laptop, tv);
