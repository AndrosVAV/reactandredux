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


