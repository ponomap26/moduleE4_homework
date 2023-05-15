// Базовый класс для электроприборов
class ElectricAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
  }

  // Методы включения/выключения прибора
  turnOn() {
    if (!this.isOn) {
      console.log(`${this.name} включен в розетку.`);
      this.isOn = true;
    } else {
      console.log(`${this.name} уже включен.`);
    }
  }

  turnOff() {
    if (this.isOn) {
      console.log(`${this.name} выключен из розетки.`);
      this.isOn = false;
    } else {
      console.log(`${this.name} уже выключен.`);
    }
  }
}

// Дочерний класс - настольная лампа
class TableLamp extends ElectricAppliance {
  constructor(name, power, bulbType) {
    super(name, power);
    this.bulbType = bulbType;
  }
}

// Дочерний класс - компьютер
class Computer extends ElectricAppliance {
  constructor(name, power, cpuFrequency, ramAmount) {
    super(name, power);
    this.cpuFrequency = cpuFrequency;
    this.ramAmount = ramAmount;
  }
}

// Создаем объекты электроприборов
let lamp = new TableLamp("Настольная лампа", 60, "LED");
let computer = new Computer("Компьютер", 500, "3.5 GHz", "8 ГБ");

// Включаем приборы
lamp.turnOn();
computer.turnOn();

// Посчитаем потребляемую мощность
let totalPower = lamp.power + computer.power;
console.log(`Потребляемая мощность: ${totalPower} Вт.`);

// Выключаем приборы
lamp.turnOff();
computer.turnOff();