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
    console.log("block",tropic);//block React
}
console.log("global",tropic);//global React

//Применение let защищает значение глобальной переменной

var tropic = "Javascript";
if(tropic){
    let tropic = "React";
    console.log("block",tropic);//block React
}
console.log("global",tropic);//global Javascript




var div,
    container = document.getElementById("container");
    for(var i = 0;i < 5;i++){
        div = document.createElement("div");
        div.onclick = function(){
            alert("Tis is box # " + i);
        }
        container.appendChild(div);
    };
//Переменная i равна 5 для каждого прямоугольника

    

var div,
container = document.getElementById("container");
for(let i = 0;i < 5;i++){
    div = document.createElement("div");
    div.onclick = function(){
        alert("Tis is box # " + i);
    }
    container.appendChild(div);
};
//При щелчке на любой прямоугольник будет отображаться значение i;
//Область видимости i защищена с помощью let




//Шаблонные строки(c.24);

//Они представляют собой альтернативу конкатенации 
//Позволяют вставлять в строки переменные

//console.log(lastName + "," + firstName + " " + middName);
//console.log(`${lastName},${firstName}${middName}`);

//${} сюда может быть добавлен любой код JS возвращающий значения
//Шаблонные строки оставляют пробельные символы в неприкосновенности




//Параматры по умолчанию(c.26);

//Например если функции не предоставить аргументы то она отработает без сбоев воспользуется значениями по умолчанию
//Аргументы по умолчанию могут быть любого типа

function logActivity(name = "Shane McConkey",activity = "skiing"){
    console.log(`${name} loves ${activity}`);
}
//logActivity();//Shane McConkey loves skiing


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

    //logActivity();//Shane loves skiing
*/







//СТРЕЛОЧНЫЕ ФУНКЦИИ(C.26);


//Тадиционная функция
/*
var lordify = function(firstName){
    return `${firstName} of Canterbury`
};

//console.log(lordify("Dale"));//Dale of Canterbury
//console.log(lordify("Daryle"));//Daryle of Canterbury



//Использование стрелочной функции(c.27);
//Если принимается один аргумент круглые кобки можно убрать окружающие аргументы
//var lordify = firstName => `${firstName} of canterbury`
//console.log(lordify("Daryle"));//Daryle of canterbury

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
//console.log(bread,meat);//dutch crunch tuna

bread = "garlic";
meat = "turkey";

//console.log(bread);//garlic
//console.log(meat);//turkey
//console.log(sandwich.bread,sandwich.meat);//dutch crunch tuna



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
lordify(regularPerson);//Bill of Canterbury






//Дестуктуризация значений из массивов(c.32);
//Присвоение первого значения переменной
var [firstResort] = ["Kirkwood","Squaw","Alpine"];
//console.log(firstResort);



//C помощью запятых можно пропустить ненужные значения

var [,,thirdResort] = ["Kirkwood","Squaw","Alpine"];
//console.log(thirdResort);




//Расширение обьектных литералов(c.33);
// является противоположностью деструктурирования
// Это процесс реструктурирования или воссоединения

var name = "Talles";
var elevetion = 9738;

var funHike = {name,elevetion};
//console.log(funHike);//Object { name: "Talles", elevetion: 9738 }

// Теперь это ключи обьекта funHike





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


//Оператор распространения служит для получения некоторых выбранных элем массива

var lakes = ["Donner","Marlette","Fallen","Leaf","Cascade"];
var [first,...rest] = lakes;

console.log(rest.join(","));//Marlette,Fallen,Leaf,Cascade







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






//Название всех типов должны начинаться с прописных букв
//Имена всех классов мы будем записывать исходя из этого правила

//Например чтобы создать экиперовку (gear)класс Vacation
//можно расширить классом Expedition(c.38);

class Expedition extends Vacation{
    constructor(destination,length,gear){
    super(destination,length)
    this.gear = gear
}
print(){
    super.print()
    console.log(`Bring ytour ${this.gear.join("and your ")}`)
}
}
const trip = new Expedition("Mt.Whitney",3,
    ["sunglasses","prayer flags","camera"])

trip.print()

*/








//МОДУЛИ ES6(C.39);

/*
//2-а варианта:
//Экспорт сразу нескольких обьектов JS из одного модуля
//Экспорт по одному обьекту из каждого модуля

//Пример1  Файл./text-helpers.js   экспортируется модуль и 2-е функции

export const print(message) => log(message,new Date())
export const log(message,timestamp) => 
//console.log(`${timestamp.toString()}: ${message}`)



//Экспорт из модуля только одной переменной с помощью инструкции export default
//Пример2 Файл./mt-freel.js   

const freel = new Expedition("Mt.Freel",2,["water","snack"])
export default freel



//Модули могут использоваться в других файлах JS с помощью инструкции import
//Модули в кот.применяется export default импортируется в одну переменную


import {print,log}from "./text-helpers"
import freel from "./mt-freel"

print("printing a message")
log("logging a message")

freel.print()



//Для переменных модуля можно задать локальную обл видимости
//под другими именами переменных:

import {print as p,log as l} from "./text-helpers"

p("printing a message")
l("logging a message")



//Можно импортировать всё в одну переменную с помощью знака *

import * as fns from "./text-helpers"

*/





//Common JS(c.41);


//Модульный шаблон поддерживаемый всеми версиями Node.js
//Используются модули с Babel и Webpack
// Благодаря CommonJS  обьекты JavaScript экспортируются с приминением module.exports


//Пример.Файл ./txt-helpers.js       в этом примере есть ошибка?!
/*
const print(message) => log(message,new Date())
const log(message,timestamp) =>
    console.log(`${timestamp.toString()}: ${message}`);
    
module.exports = {print,log}
// Common не поддерживает иструкцию import 
//Вместо этого модули импортируются с помощью функции require:

const {log,print} = require("./txt-helpers");

*/






//Функциональное программирование


//Значение понятия функциальности
/*
var log = function(message){
console.log(message);
};
log("in JS function are variables");
*/

/*
var log = message => console.log(message);
log("in JavaScript function are variables");
*/

//Функции можно добавлять к обьектам

/*
const obj = {
	message : "They can be added to object like variables",
	log(message){
	console.log(message);
	}
};
obj.log(obj.message);
*/

//Функции в JS можно добавлять к массивам

/*
const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
];
messages[1](messages[0]);
messages[3](messages[2]);
*/

//Ф.можно добавлять другим функциям в кач-ве аргументов

/*
const insideFn = logger =>
logger("They can be sent to other function as arguments");

insideFn(message => console.log(message));
*/

//Они могут возвращаться из других функций

/*
var createScream = function(logger){
    return function(message){
        logger(message.toUpperCase() + "!!!")
    }
}
const scream = createScream(message => console.log(message));

scream("Function can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");
*/
//Последние два примера были функц высшего порядка 

/*
const createScream = logger => message =>
logger(message.toUpperCase() + "!!!");

const scream = createScream(message => console.log(message));
scream("Function can be returned from other functions");
*/









//Императивность и декларативность

//императивный подход(Замена пробелов в строке дефисами);
/*
var str = "This is the midday with Chery Waters";
var urlFriendly = "";

for(var i = 0;i < str.length;i++){
    if(str[i] === " "){
    urlFriendly += "-";
    }else{
     urlFriendly += str[i];  
    }
}
console.log(urlFriendly);//This-is-the-midday-with-Chery-Waters


//декларативный подход

var str = "This is the midday with Chery Waters";
var urlFriendly = str.replace(/ /g,"-");

console.log(urlFriendly);
*/







//Функциональные концепции: неизменяемость,чистые функции,
//преобразование данных,функции высшего порядка,рекурсия


//неизменяемость
//Для понятия сути работы посмотрим что значит изменение данных

/*
let color_lawn = {
	title : "lawn",
	color : "#00FF00",
	rating : 0
}

function rateColor(color,rating){
	color.rating = rating
	return color
}

console.log(rateColor(color_lawn,5).rating);//5
console.log(color_lawn.rating);//5


//Функцию rateColor можно переписать
// чтобы она не приносила вред оригиналу



var rateColor = function(color,rating){
	return Object.assign({},color,{rating : rating})
};

console.log(rateColor(color_lawn,5).rating);//5
console.log(color_lawn.rating

//ES6 стрелочная ф
//ES7  ОПЕРАТОР РАСПРОСТРАНЕНИЯ ОБЬЕКТА

const rateColor = (color,rating) =>
	({
	...color,
	rating
	})

console.log(rateColor(color_lawn,5).rating);//5
console.log(color_lawn.rating);//0

//Возвращаемый обьект заключен в круглые скобки
//при использовании стрелочных ф это обязательный шаг




let list = [
	{title : "Rad Red"},
	{title : "Lawn"},
	{title : "Party Pinc"}
]

var addColor = function(title,colors){
colors.push({title : title})
return colors;
}
console.log(addColor("Glan Green",list).length);//4
console.log(list.length);//4

//Но Array.push не является неизменяемой функцией
//Это ф addColor изменяет исходный массив путем добавление
// в него элемента
//Чтобы сохранить неизменяемость массива colors
//используем ф Array.concat



//const addColor = (title,array) => array.concat({title})

//console.log(addColor("Glan Green",list).length);//4
//console.log(list.length);//3



//Оператор распространения ES6 не только копирует обьекты но 
// и обьединяет массивы

const addColor = (title,list) => [...list,{title}]

console.log(addColor("Glan Green",list).length);//4
console.log(list.length);//3

*/





//Чистые функции (с.50)

//Функции с побочным еффектом

/*
var frederick = {
    name : "Frederick Douglass",
    canRead : false,
    canWrite : false
}

function selfEducate(){
    frederick.canRead = true
    frederick.canWrite = true
    return frederick
}
selfEducate()
console.log(frederick);//Object { name: "Frederick Douglass", canRead: true, canWrite: true }



var frederick = {
    name : "Frederick Douglass",
    canRead : false,
    canWrite : false
}

const selfEducate = (person) =>{
    person.canRead = true
    person.canWrite = true
    return person
}

console.log(selfEducate(frederick));//Object { name: "Frederick Douglass", canRead: true, canWrite: true }
console.log(frederick);//Object { name: "Frederick Douglass", canRead: true, canWrite: true }




var frederick = {
    name : "Frederick Douglass",
    canRead : false,
    canWrite : false
}

const selfEducate = person =>
    ({
        ...person,
    canRead : true,
    canWrite : true
    
    })

console.log(selfEducate(frederick));//Object { name: "Frederick Douglass", canRead: true, canWrite: true }
console.log(frederick);//Object { name: "Frederick Douglass", canRead: false, canWrite: false }
*/








//Преобразование данных
/*
const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
]
//console.log(schools.join(","));//Yorktown,Washington & Lee,Wakefield

const wSchools = schools.filter(school => school[0] === "W")
//console.log(wSchools);//Array [ "Washington & Lee", "Wakefield" ]


const cutSchool = (cut,list) =>
    list.filter(school => school !== cut)

//console.log(cutSchool("Washington & Lee",schools).join(" * "));//Yorktown * Wakefield
//console.log(schools.join("\n"));

//const higSchools = schools.map(school => `${school} High School`);
//console.log(higSchools.join("\n"));
    //Yorktown High School
    //Washington & Lee High School
    //Wakefield High School
//console.log(schools.join("\n"));
    //Yorktown
    //Washington & Lee
    //Wakefield



const higSchools = schools.map(school => ({name : school}))
//console.log(higSchools);//Array(3) [ {…}, {…}, {…} ]
//Массив содержит обьекты созданные из массива который содержит строки


let schools_2 = [
    {name : "Yorktown"},
    {name : "Stranford"},
    {name : "Washington & Lee"},
    {name : "Wakefield"}
]




const editName = (oldName,name,arr) =>
    arr.map(item =>{
        if(item.name === oldName){
            return {
                ...item,
                name
            }
        }else{
            return item
        }
    })





//const editName = (oldName,name,arr) =>
//    arr.map(item =>(item.name === oldName)?
//   ({...item,name}):
//  item
//  )


let updateSchools = editName("Stranford","HB Woodlawn",schools_2);

//console.log(updateSchools[1]);//Object { name: "HB Woodlawn" }
//console.log(schools_2[1]);//Object { name: "Stranford" }



//Преобразование обьекта schools в массив schools

const schools = {
    "Yorktown" : 10,
    "Washington & Lee" : 2,
    "Wakefield" : 5
}

const schoolArray = Object.keys(schools).map(key =>
    ({
        name : key,
        wins : schools[key]    
    })
)


//console.log(schoolArray);//Array(3) [ {…}, {…}, {…} ]

//[…]
​//0: Object { name: "Yorktown", wins: 10 }
//​1: Object { name: "Washington & Lee", wins: 2 }
​//2: Object { name: "Wakefield", wins: 5 }
​//length: 3


//Преобразование массивов можно выполнить с применением Array.map и Array.filter
//Превратить массивы в обьекты можно сочетая Object.keys и Array.map


//Для преобразования массива в любое значение можно использовать ф reduce и reduceRight

//В массиве из чисел нужно найти самое большое число

const ages = [21,18,42,40,64,63,34];

const maxAge = ages.reduce((max,age) =>{
    console.log(`${age} > ${max} = ${age > max}`);
    if(age > max){
        return age
    }else{
        return max
    }
},0)

const max = ages.reduce(
    (max,value) => (value > max) ? value : max,
    0
);
//console.log(max);//64
//console.log("maxAge",maxAge);

//21 > 0 = true
//18 > 21 = false
//42 > 21 = true
//40 > 42 = false
//64 > 42 = true
//63 > 64 = false
//34 > 64 = false
//maxAge 64


//Превращаем массив в обьект 

const colors = [
    {
    id : "-xekare",
    title : "red red",
    rating : 3
    },
    {
    id : "-jbwsof",
    title : "big blue",
    rating : 2
    },
    {
    id : "-prigbj",
    title : "grizzly grey",
    rating : 5
    },
    {
    id : "-ryhhsl",
    title : "banana",
    rating : 1
    }
];

const hashColors = colors.reduce((hash,{id,title,rating}) =>{
    hash[id] = {title,rating}
    return hash
},
 {}
)

console.log(hashColors);
//Object { "-xekare": {…}, "-jbwsof": {…}, "-prigbj": {…}, "-ryhhsl": {…} }

//{…}
//​"-jbwsof": Object { title: "big blue", rating: 2 }
​//"-prigbj": Object { title: "grizzly grey", rating: 5 }
​//"-ryhhsl": Object { title: "banana", rating: 1 }
​//"-xekare": Object { title: "red red", rating: 3 }



const colors = ["red","red","green","blue","green"];

const distinctColors = colors.reduce((distinct,color) => 
    (distinct.indexOf(color) !== -1) ?
    distinct : 
    [...distinct,color],
    []
)
console.log(distinctColors);//Array(3) [ "red", "green", "blue" ]

*/

//Функции высшего порядка

//const invokelf = (condition,fnTrue,fnFalse) =>
//(condition) ? fnTrue() : fnFalse();

//const showWelcome = () =>
//console.log("Welcome!!!");

//const showUnauthorized = () =>
//console.log("Unauthorized!!!");
//invokelf(true,showWelcome,showUnauthorized);
//invokelf(false,showWelcome,showUnauthorized);


//Каррирование

//Глава 2(Промиссы)
/*
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
getFakeMembers(5).then(
   members => console.log(members),
   err => console.error(
       new Error("cannot load members from randmuser.me")
   )
)


const userLogs = userName => message =>
console.log(`${userName} -> ${message}`); 

const log = userLogs("grandpa23");

log("attempted to load 20 fake members");
getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`),
    error => log("encountered an error loading members")
)

*/




//Рекурсия
/*
const countdouwn = (value,fn) =>{
    fn(value)
    return(value > 0) ? countdouwn(value - 1,fn) : value
}
countdouwn(10,value => console.log(value));

*/

const countdouwn = (value,fndelay = 1000) =>{
    fn(value)
    return(value > 0) ? 
    setTimeout(() => countdouwn(value - 1,fn),delay) : value
}
countdouwn(10,value => console.log(value));


