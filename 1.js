// Выражение, функции, обьекты
// Обьект - набор свойств Имя значение
//  Массив , Функция, Число, Строка - Это все обьекты (ведут себя как обьекты)
// log / dir
// table (tabliczny widok)
// Выражение всегда возвращает значение
// Выражение присваивания "="
// Переменные дают возможность повторного доступа к значению
//  PascalCase - всегда с заглавной буквы P&C слитно  - типы и классы 
// DB_PASSWORD - значения известны до запуска приложения и не меняются 
//  camelCase - все остальные переменные 
// 'let' 'const' 'var' - Обьявление переменных (var не рекомендуется)
// let дает возможность переисваиния переменной! let a =10 --- a=20
// const - присваиваем сразу в одной строке
// Тип перменной определяется типом присвоенным значением
// Примитивные типа  ('String'-- строка)  ('boolean'-- логический) ("number" -- число) ('null' --null) ('undefined' -- значение не определенно) ('symbol' -- символ)
// null - присваевается нами и, позже может быть определенно, в отличии от undefined
// 
// let a=5
// let b=5
// b=50
// console.log(a+b);


// let a 
// a = true;
// console.log(a);


// ссылочный тип (ссылка и обьект находятся в разных местах)
// 
// const objectA = {
//   a:10,
//   b:true
// }
// const copyOfA = objectA;
// copyOfA.a = 20;
// console.log(objectA);

// // Добавление новых значений 
// copyOfA.c = 'abc'
// console.log(objectA);


// Практика создание ссылочного типа и добавление значений

            // const myContact = {
            //   Name:'Maksim',
            //   mail:"@gmail.com"
            // }
            // const addingContact = myContact;
            // addingContact.phone = '+13253231';
            // console.log(myContact);
// сылочный тип - !ОБЬЕКТ! object
//end of reference type parsing


// dynamic typing

        // let a = 10
        // a = true
        // a = 'maks'

                      // function a() {
                      //   console.log('hey there');
                      // }
                      // a()
        
        // Используем Const 
        // позволяет предотвратить возможные проблемы связанные с динамической типизации
        // стрелочное обьявление перменной  =>
        // const a =() => {
        //   console.log('hey,there')
        // }
        // a()

    let num = 20;
    let s = num ="";
    let n = +s;