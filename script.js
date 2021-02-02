var str2 = "React and Redux";

//Javascript синтаксис ES6
//Обьявление переменных в ES6(c.22);

//var pizza = true;
//pizza = false;
//console.log(pizza);//false


//const pizza = true;
//pizza = false;//ошибка


//Область видимости переменных


/*
var tropic = "Javascript";
if(tropic){
    var tropic = "React";
    console.log("block",tropic);
}
console.log("global",tropic);



var tropic = "Javascript";
if(tropic){
    let tropic = "React";
    console.log("block",tropic);
}
console.log("global",tropic);




var div,
    container = document.getElementById("container");
    for(var i = 0;i < 5;i++){
        div = document.createElement("div");
        div.onclick = function(){
            alert("Tis is box # " + i);
        }
        container.appendChild(div);
    };
//Переменная i равна 5 для каждого треугольника

    

var div,
container = document.getElementById("container");
for(let i = 0;i < 5;i++){
    div = document.createElement("div");
    div.onclick = function(){
        alert("Tis is box # " + i);
    }
    container.appendChild(div);
};
//При щелчке на любой треугольник будет отображаться значение i;
//Область видимости i защищена с помощью let




//Шаблонные строки(c.24);

//Они представляют собой альтернативу конкатенации 
//Позволяют вставлять в строки переменные

//console.log(lastName + "," + firstName + " " + middName);
//console.log(`${lastName},${firstName}${middName}`);

//Шаблонные строки оставляют пробельные символы в неприкосновенности




//Параматры по умолчанию(c.26);

//Например если функции не предоставить аргументы то она отработает без сбоев воспользуется значениями по умолчанию
//Аргументы по умолчанию могут быть любого типа

function logActivity(name = "Shane McConkey",activity = "skiing"){
    console.log(`${name} loves ${activity}`);
}
//logActivity();


var defaulPerson = {
    name : {
        first : "Shane",
        last : "McConkey"
    },
    favActivity : "skiing"
    };

    function logActivity(p = defaulPerson){
        console.log(`${p.name.first} loves ${p.favActivity}`);
    };

    //logActivity();
*/







//СТРЕЛОЧНЫЕ ФУНКЦИИ(C.26);


//Тадиционная функция
/*
var lordify = function(firstName){
    return `${firstName} of Canterbury`
};

//console.log(lordify("Dale"));
//console.log(lordify("Daryle"));



//Использование стрелочной функции(c.27);
//Если принимается один аргумент круглые кобки можно убрать окружающие аргументы
//var lordify = firstName => `${firstName} of canterbury`
//console.log(lordify("Daryle"));

//если прим.более одного элемента то их следует заключить в круглые скобки
//старый синтаксис
var lordify = function(firstName,land){
    return `${firstName} of ${land}`
};
//console.log(lordify("Daryle","MaryLand"));


//Новый синтаксис

var lordify = (firstName,land) => `${firstName} of ${land}`;
//console.log(lordify("Daryle","Culpepper"));






//Точка с запятой является необязательным элементом в JS
//Принцип минимализма - зачем ставить её если она не требуется
//Ислючить использование ненужных элементов синтаксиса





//Если тело функции состоит более чем из одной строчки следует заключать его в фигурные скобки
//старый синтаксис

var lordify = function(firstName,land){
    if(!firstName){
        throw new Error("A firstName is required to lordify");
    }
    if(!land){
        throw new Error("A lord must have a land");
    }
    return `${firstName} of ${land}`;
}



//Новый синтаксис

var lordify = (firstName,land) =>{
    if(!firstName){
        throw new Error("A firstName is required to lordify");
    }
    if(!land){
        throw new Error("A lord must have a land");
    }
    return `${firstName} of ${land}`;
}

//console.log(lordify("Kelly","Sonoma"));
//console.log(lordify("Dave"));







//Стрелочные ф.не изолируют ключевое слово this.Например оно представляет в ф.
//обратного вызова setTimeout нечто,но не обьект tahoe:

var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heaventy","Northstar"],
    print: function(delay = 1000){
        setTimeout(function(){
            console.log(this.resorts.join(","));
        },delay)
    }
};

//tahoe.print();//undefined

//ошибка использование метода join для обьекта
//представленного ключевым словом this




//Стрелочная ф.защитит область видимости this:
var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heaventy","Northstar"],
    print: function(delay = 1000){
        setTimeout(() =>{
            console.log(this.resorts.join(","));
        },delay)
    }
};
//tahoe.print();//Kirkwood,Squaw,Alpine,Heaventy,Northstar






//Об области видимости нужно помнить всегда
//Стрелочные ф. не изолируют область видимости this:

var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heaventy","Northstar"],
    print: (delay = 1000) =>{
        setTimeout(() =>{
            console.log(this.resorts.join(","));
        },delay)
    }
};
//tahoe.print();//resorts is undefined



//Замена ф.print на стрелочную означает что this указывает на window

var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heaventy","Northstar"],
    print: (delay = 1000) =>{
        setTimeout(() =>{
            console.log(this === window);
        },delay)
    }
};
//tahoe.print();//true





//Чтобы зафиксировать this можно воспользоваться обычной функцией

var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heaventy","Northstar"],
    print: function(delay = 1000){
        setTimeout(() =>{
            console.log(this === window);
        },delay)
    }
};
//tahoe.print();//false







//Транспиляция ES6(c.30);





//Дестуктуризация(c.31);

var sandwich = {
    bread : "dutch crunch",
    meat : "tuna",
    cheese : "swiss",
    topping : ["lettuce","tomato","mustard"]
};
var {bread,meat} = sandwich;
//console.log(bread,meat);

bread = "garlic";
meat = "turkey";

//console.log(bread);
//console.log(meat);
//console.log(sandwich.bread,sandwich.meat);



//Деструктурируем поступающие аргументы функций(c.32);

var lordify = regularPerson =>{
    //console.log(`${regularPerson.firstName} of Canterbury`);
}
var regularPerson = {
    firstName : "Bill",
    lastName : "Wilson"
};
lordify(regularPerson);//Bill of Canterbury





var lordify = ({firstname}) =>{
   //console.log(`${firstname} of Canterbury`); 
}

var regularPerson = {
    firstname : "Bill",
    lastname : "Wilson"
};
lordify(regularPerson);




//Дестуктуризация значений из массивов(c.32);

var [firstResort] = ["Kirkwood","Squaw","Alpine"];
//console.log(firstResort);


var [,,thirdResort] = ["Kirkwood","Squaw","Alpine"];
//console.log(thirdResort);




//Расширение обьектных литералов(c.33);


var name = "Talles";
var elevetion = 9738;

var funHike = {name,elevetion};
//console.log(funHike);//Object { name: "Talles", elevetion: 9738 }





var name = "Talles";
var elevetion = 9738;
var print = function(){
    //console.log(`Mt. ${this.name} is ${this.elevetion} feet tall`);
};
var funHike = {name,elevetion,print};

funHike.print();//Mt. Talles is 9738 feet tall

//Для доступа к ключам исп ключевое слово this





//При определении методов больше не нужно прибегать к ключевому слову function
//Старый синтаксис

var skier = {
    name : "name",
    sound : "sound",
    ppowderYell : function(){
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed : function(mph){
        this.speed = mph;
        console.log("speed: ",mph);
    }
};



//Новый синтаксис
var skier = {
    name,
    sound,
    ppowderYell(){
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph){
        this.speed = mph;
        console.log("speed: ",mph);
    }
};





//Оператор распространения(c.34);
//имеет вид(...)
//Позволяет обьединять содержимое массивов

var peaks = ["Tallas","Ralston","Rose"];
var canoys = ["Ward","Blackwood"];
var tahoe = [...peaks,...canoys];

//console.log(tahoe.join(","));//Tallas,Ralston,Rose,Ward,Blackwood




//Получаем посл.елемент массива с помощью Array.reverse

var peaks = ["Tallas","Ralston","Rose"];
var [last] = peaks.reverse();

//console.log(last);//Rose
//console.log(peaks);//Array(3) [ "Rose", "Ralston", "Tallas" ]

/var peaks = ["Tallas","Ralston","Rose"];
//var [last] = [...peaks].reverse();

//console.log(last);//Rose
//console.log(peaks.join(","));//Tallas,Ralston,Rose






//Данный оператор служит для сбора аргументов функции в массив(c.35)
function directions(...args){
    var [start,...remaining] = args
    var [finish,...stops] = remaining.reverse()

//console.log(`drive through ${args.length} towns`)//drive through 5 towns
//console.log(`start in ${start}`)//start in Truckee
//console.log(`the distanation is ${finish}`)//the distanation is Tahoma
//console.log(`stoping ${stops.length} times in between`)//stoping 3 times in between 
}

directions(
    "Truckee",
    "Tahoe city",
    "Sunnyside",
    "Homewood",
    "Tahoma"
)




//Обьединение 2-ух обьектов в третий(c.36)

var morning = {
    breakfast : "oatmeal",
    lunch : "peanut butter and jelly"
}

var dinner = "mac and cheese"

var backpackingMeals = {
    ...morning,
    dinner
}

//console.log(backpackingMeals)//Object { breakfast: "oatmeal", lunch: "peanut butter and jelly", dinner: "mac and cheese" }










//Промисы(Обещания)(c.36)

//Представляет способ разобраться в асинхронном поведении
//При выдаче асинхронного запроса может произойти одно из двух:
//Все пойдет так как мы надеялись или же 
//случиться ошибка

const getFakeMembers = count => new Promise((resolve,reject) =>{
    const api = `https://api.randomuser.me/?nat=US&result =${count}`
    const request = new XMLHttpResult()
    request.open("GET",api)
    request.onload = () =>
    (request.status === 200)?
    resolve(JSON.parse(request.response).results):
    reject(Error(request.statusText))
    request.onneror = (err) => reject(err)
    request.send()
})




//Функция then может быть встроена в цепочку для выполнения каких либо действий
//после выполнения промиса
//Это называется композицией

getFakeMembers(5).then(
   members => console.log(members),
   err => console.error(
       new Error("cannot load members from randmuser.me")
   )
)
//Промис делает запрос к API
//Если он завершится удачно то данные будут загруженны
//В противном случае выдаётся ошибка:
//Error: cannot load members from randmuser.me



//Промисы облегчают работу с асинхронными запросами
//т.к. в js приходиться работать с большим обьёмом асинхронно запрашиваемых данных










//Классы(c.37)

//Старый синтаксис
function Vacation(destination,length){
    this.destination = destination
    this.length = length
}

Vacation.prototype.print = function(){
    //console.log(this.destination + " | " + this.length + "days")
}

var maul = new Vacation("Maul",7);
//maul.print();//Maul | 7days


//Новый синтаксис
class Vacation{
    constructor(destination,length){
     this.destination = destination
    this.length = length   
    }
        print(){
        //console.log(`${this.destination} will take ${this.length} days`)
    }
}

const trip = new Vacation("Santiago,Chile",7);
//trip.print();//Santiago,Chile will take 7 days

*/


//c.38