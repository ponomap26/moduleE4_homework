function Appliance(name, power) {
  this.name = name;
  this.power = power;
  this.isOn = false;
}

// Методы включения/выключения прибора
Appliance.prototype.turnOn = function() {
  if (!this.isOn) {
    console.log(`${this.name} включен в розетку.`);
    this.isOn = true;
  } else {
    console.log(`${this.name} уже включен.`);
  }
};

Appliance.prototype.turnOff = function() {
  if (this.isOn) {
    console.log(`${this.name} выключен из розетки.`);
    this.isOn = false;
  } else {
    console.log(`${this.name} уже выключен.`);
  }
};

// Дочерний прибор - тостер
function Toaster(name, power, time) {
  Appliance.call(this, name, power);
  this.time = time;
}

Toaster.prototype = Object.create(Appliance.prototype);
Toaster.prototype.constructor = Toaster;

// Метод запекания тостов
Toaster.prototype.toast = function() {
  console.log(`Тостер ${this.name} начал запекать тосты на ${this.time} мин.`);
};

// Дочерний прибор - утюг
function Iron(name, power, temperature) {
  Appliance.call(this, name, power);
  this.temperature = temperature;
}

Iron.prototype = Object.create(Appliance.prototype);
Iron.prototype.constructor = Iron;

// Метод глажки
Iron.prototype.iron = function() {
  console.log(`Утюг ${this.name} готов к глажке при температуре ${this.temperature}°C.`);
};

// Создание экземпляров приборов
let toaster = new Toaster("Tefal", 900, 3);
let iron = new Iron("Philips", 1800, 150);

// Использование объектов-приборов
toaster.turnOn(); // "Tefal включен в розетку."
toaster.toast(); // "Тостер Tefal начал запекать тосты на 3 мин."
toaster.turnOff(); // "Tefal выключен из розетки."
console.log(toaster.power); // 900 - свойство, уникальное для объекта-тостера

iron.turnOn(); // "Philips включен в розетку."
iron.iron(); // "Утюг Philips готов к глажке при температуре 150°C."
iron.turnOff(); // "Philips выключен из розетки."
console.log(iron.temperature); // 150 - свойство, уникальное для объекта-утюга