

//1) Создать новую дату на основе даты созданной ранее, отняв 1 месяц 2 дня и 10 часов 

//var options = {
//    year: 'numeric',
//    month: 'long',
//    day: 'numeric',
//    hour: 'numeric',
//    minute: 'numeric',
//}

//var date = new Date;
//document.write(date.toLocaleString('ru', options));

//document.write('<br> <br>')

////var date2 = new Date(2010, 10, 33, 10, 15);
////document.write(date2);

//var date2 = date;
//date2.setMonth(date.getMonth() - 1);
//date2.setDate(date.getDate() - 2);
//date2.setHours(date.getHours() - 10);

//document.write(date2.toLocaleString("ru", options));

//2) Сделать функцию, принимающую как параметр дату, отдающую день недели в текстовом виде;

//var date3 = new Date();

//function weekd(day3) {
//    switch (day3.getDay()) {
//        case 0:
//            document.write('Sunday')
//            break;
//        case 1:
//            document.write('Monday')
//            break;
//        case 2:
//            document.write('Tuesday')
//            break;
//        case 3:
//            document.write('Wednesday')
//            break;
//        case 4:
//            document.write('Thursday')
//            break;
//        case 5:
//            document.write('Friday')
//            break;
//        case 6:
//            document.write('Saturday')
//            break;
//    }
//}

//weekd(date3);

//3) Написать класс Product(), который содержит цену, бренд и модель
//    Унаследуем от него два класса Phone и Computer (через prototype)
//    Для каждого унаследованного создадим уникальные свойства: screen_size и processor (можно еще, на усмотрение)
//    Объявить массив из нескольких Phone, Computer. Заполнить их в коде, в конструкторе.
//    Сделать вывод данных.

function Product(price, brand, model) {
    this.price = price;
    this.brand = brand;
    this.model = model;
}

function Phone(screen_size, processor, price, brand, model) {
    this.screen_size = screen_size;
    this.processor = processor;

    Product.call(this, price, brand, model)
    this.price = price;

    this.getInfo = function () {
        document.write(this.price + ' ' + this.brand + ' ' + this.model + ' ' + this.screen_size + ' ' + this.processor)
        document.write('<br>')
    }
}

function Computer(screen_size, processor, price, brand, model) {
    this.screen_size = screen_size;
    this.processor = processor;

    Product.call(this, price, brand, model)
    this.price = price;


    this.getInfo = function () {
        document.write(this.price + ' ' + this.brand + ' ' + this.model + ' ' + this.screen_size + ' ' + this.processor)
        document.write('<br>')
    }
}

Phone.prototype = Object.create(Product.prototype);

Computer.prototype = Object.create(Product.prototype);


var Ph = [new Phone("12*5", "2.7", "135", "Samsung", "Mega"), new Computer("15*7", "3.2", "185", "Sony", "A+")];

for (var p in Ph) {
    Ph[p].getInfo();
}



