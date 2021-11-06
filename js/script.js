"use strict"

// *********************************************************************************************************
//_________П Р А К Т И К А____________

// ДБ
/*
let personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start:  () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    
    showLevel: () => {
        let stat = (personalMovieDB.count < 10) ? "Просмотрено довольно мало фильмов" :
        (personalMovieDB.count <= 30) ? "Вы классический зверь" :
        (personalMovieDB.count > 30) ? "Вы киноман" : "Произошла ошибка";
        alert (stat);
    },
    
    getLastFilms: () => { 
        for (let i = 0; i < 2; i++) {
            let q1 = prompt ('Один из последних просмотренных фильмов?', '');
            let q2 = prompt ('На сколько оцените его?', '');
            
            if((q1 == null) || (q2 == null) || (q1.length>5) || (q2.length>5) || (q1 == "") || (q2 == "")){
                i--;
                alert("Произошла ошибка.\nВозможные варианты ошибки:\n1. Длина\n2. Пустой ответ\n3. Вы нажали отмена");
            } else {personalMovieDB.movies[q1] = q2;}
        }
    },
    
    getGenres: () => {
        for (let i = 1; i <= 3; i++){
            let q = prompt (`Какой ваш топ-${i} жанр?`, '').toLowerCase();
            if(q == null || q == "") {
                i--;
                alert("Произошла ошибка.\nВозможные варианты ошибки:\n1. Пустой ответ\n2. Вы нажали отмена");
            } else {
                personalMovieDB.genres [i-1] = q;
            }
        }
        personalMovieDB.genres.forEach((item, num, wholeArray) => {
            console.log(`Любимый жанр ${num}: ${item}`);
        });
    },
    
    showMyBD: () => {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleDB: () => {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
}

personalMovieDB.start();
personalMovieDB.showLevel();
personalMovieDB.getLastFilms();
personalMovieDB.getGenres();
personalMovieDB.toggleVisibleDB();
personalMovieDB.showMyBD();
*/









// __Ф У Н К Ц И Я__ Уровень
// function detectPersonalLevel(){
//     let stat = (personalMovieDB.count < 10) ? "Просмотрено довольно мало фильмов" :
//     (personalMovieDB.count <= 30) ? "Вы классический зверь" :
//     (personalMovieDB.count > 30) ? "Вы киноман" : "Произошла ошибка";
//     alert (stat);
// }
// detectPersonalLevel();

// __Ф У Н К Ц И Я__ Последние фильмы
// function rememberMyFilms() { 
//     for (let i = 0; i < 2; i++) {
//         let q1 = prompt ('Один из последних просмотренных фильмов?', '');
//         let q2 = prompt ('На сколько оцените его?', '');
//         if((q1 == null) || (q2 == null) || (q1.length>5) || (q2.length>5) || (q1 == "") || (q2 == "")){
//             i--;
//             alert("Возможные варианты ошибки:\n1. Длина\n2. Пустой ответ\n3. Вы нажали отмена");
//         } else {personalMovieDB.movies[q1] = q2;}
//     }
// }
// rememberMyFilms();

// __Ф У Н К Ц И Я__ Жанры
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++){
//         personalMovieDB.genres [i-1] = prompt (`Ваш любимый жанр под номером ${i}`,'');
//     }
// }
// writeYourGenres();

// __Ф У Н К Ц И Я__ Выводит ДБ, если профиль не приватный
// function showMyDB(){
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();




















// *********************************************************************************************************



// *********************************************************************************************************
//_________O B J E C T S____________
/*
//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

//console.log(options.colors.vvv.bbb);
//console.log(options["colors"]["vvv"]["bbb"]);
//delete options.colors.bg;

console.log(Object.keys(options).length);

options.makeTest();

const {border, bg} = options.colors;
console.log(border);


let counter = 0;
for (let key in options) {
    counter++;
    if (typeof(options[key]) === 'object')  {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    }   else {
           console.log(`Свойство ${key} имеет значение ${options[key]}`)
          
    }
}
console.log(counter);
*/
// *********************************************************************************************************


// *********************************************************************************************************
//_____________M E T H O D S____O F____S T R I N G S____A N D____N U M_____________
/*
let str = "testMEGATEST";


console.log(str.toUpperCase());
console.log(str);
console.log(str.slice(5,10));
console.log(str.substring(5,10));
console.log(str.substr(5,3));
//console.log(str[1]+str[3]);

let num = "12.8px123";
console.log(Math.round(num));
console.log(parseInt(num));
console.log(parseFloat(num));
*/


//____INSIGHT___CLOSURE_____
/*
function getCounter() { 
    let counter = 0;
    //console.log (counter);
    return function() {
        return counter++;
    }
}

let count = getCounter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
*/
//*********************************************************************************************************




//*********************************************************************************************************
//_____________M A S S I V E S_____________

// const arr = [2, 13, 26, 8, 10];

//arr[99] = 0; //пуш элемента на 99ую позицию массива
//console.log(arr.length); //и демонстрация сущности .length

//arr.pop(); //удаление последнего значения массива
//arr.push(10); //пуш нового элемента в конец массива


// **виды переборов элементов массива**

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// } //перебор элементов массива

// for (let value of arr) {
//     console.log(value);
//     //тут можно юзать break и continue
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// // **формирование массива из строки и наоборот, сортировка**

// const str = prompt("","");
// const products = str.split(", ") //массив из строки
// console.log(products);
// console.log(products.join('; ')); //строка из массива


// products.sort(); //сортировка строчная

// arr.sort(compareNum); //сортировка численная
// function compareNum(a, b){
//     return a-b;
// }

// console.log(arr);

// *********************************************************************************************************


//*********************************************************************************************************
//_____________П Е Р Е Д А Ч А___П О___С С Ы Л К Е___И___З Н А Ч Е Н И Ю_____________
/*
const obj = {
    a: 5,
    b: 1
};

const copyy = obj; //ССЫЛКА !! на объект obj
copy.a = 10;
console.log(copyy);
console.log(obj);
*/

//поверхностное клонирование О Б Ъ Е К Т А
/*
function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(numbers);
console.log(newNumbers);

//(numbers == newNumbers) ? alert("true") : alert("false");
*/


//тоже поверхностное клонирование   О Б Ъ Е К Т А   с объединением
/*
const add = {
    d: 17,
    e: 20
};
const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);
*/

//поверхностное клонирование   М А С С И В А
/*
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'd';
console.log(oldArray);
console.log(newArray);
*/

//поверхностное клонирование   М А С С И В А  с объединением
/*
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);
*/


// разворачиваение   М А С С И В А
/*
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7, 9];

//log (num[0], num[1], num[2]);
log (...num);
*/

// клонирование   М А С С И В А    разворачиваение 
/*
const array = ['a', 'b'];
const newAarray = [...array];
newAarray[0] = 1;
console.log(newAarray);
console.log(array);

const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
*/








//*********************************************************************************************************
//_____________О   О   П_____________


// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         alert ("Hello");
//     }
// };

// const john = {
//     health: 100
// };


// john.__proto__ = soldier;
// =
// Object.setPrototypeOf(john,soldier);

//  **норм способ**
// const john = Object.create(soldier);
// john.sayHello();
// *********************************************************************************************************



//*********************************************************************************************************
//_____________Д И Н А М И Ч  Е С К А Я_____Т И П И З А Ц И Я_____________

//____Получение строки_____
//1
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));
//2
// console.log(typeof(null + ''));
// const num = 5;
// console.log ("https://vk.com/catalog/" + num);
// const fontSize = 26 + 'px';

//____Получение числа_____
//1
// console.log(typeof(Number('4')));
//2
// console.log(typeof(+'4'));
//3
// console.log(typeof(parseInt('15px', 10)));

//___Получение boolean
//1
// let switcher = null;
// let switcher = 1;
// if (switcher) {
//     console.log('Working...');
// }
//2
// console.log(typeof(Boolean('4')));
// console.log(Boolean('0'));
//3
// console.log(typeof(!!"4444"));
//*********************************************************************************************************



//*********************************************************************************************************
//_____________З А Д А Ч И____С ____С О Б Е С Е Д О В А Н И Й_____________

// let x = 5;
// alert(x++); // 5

// y = [] + false - null + true;
// console.log(y); //NaN ??
// console.log(typeof([]+false+1)); // string "false1"
// console.log([]+false+true); // "falsetrue"



// let y = 1;
// let x = y = 2;
// alert(x); // 2

// console.log([] + 1 + 2); //12

// alert ("1"[0]); //1 - нулевой символ строки

// console.log(2 && 1 && null && undefined); //null - && запинается на лжи, || запинается на правда.

// let a, b;
// console.log(!!(a && b));    //false
// console.log(a && b);        //undefined

//alert (null || 2 && 3 || 4); //3

// let a = [1, 2, 3],
//     b = [1, 2, 3];
// (a == b) ? console.log("true") : console.log("false"); // false

// alert (+"Infinity"); //Infinity



























