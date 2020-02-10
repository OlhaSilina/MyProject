//Exercise_0

let firstValue = 242;
let secondValue = 255;
let thirdValue = 156;
let fourthValue = Math.random();

console.log( `background-color: rgba(${firstValue}, ${secondValue}, ${thirdValue}, ${fourthValue})` );

//Exercise_1

let age = 27;

if ( typeof age == 'number' ) {
    if (age>=18) {
        console.log( 'Доступ разрешен' )
    } else {
        console.log( 'Доступ запрещен' )     
    } 
} else if ( typeof age == 'string' ) {
    if ( isNaN( parseInt( age ) ) == false ) {
        if (parseInt( age ) >= 18) {  
            console.log( 'Доступ разрешен' ) 
        } else {
            console.log( 'Доступ запрещен' )     
        }
    } else {
        console.log( 'Ввели неккоректную строку' ) 
    }

} else { 
    console.log( 'Данный формат данных не поддерживается' )  
 };

//Exercise_2

let c = 0.5;
let b = -12;
let max;
let message=c>=b ? max=c : max=b;

console.log(max);

//Exercise_3

let a = 23;

switch ( true ) {
    case ( a >= 0 && a < 2 ):
        console.log( 'Сутки только начались' );
        break;
    case ( a >= 2 && a < 5 ):
        console.log( 'Еще рано, можно спать' );
        break;
    case ( a >= 5 && a < 7 ): 
        console.log( 'Мам, можно еще чуть-чуть по спать' );
        break;   
    case ( a >= 7 && a < 10 ): 
        console.log( 'Собираемся в школу' );
        break;   
    case ( a >= 10 && a < 14 ): 
        console.log( 'Уроки в школе' );
        break;
    case ( a >= 14 && a < 17 ): 
        console.log( 'Продленка' );
        break;
    case ( a >= 17 && a < 19 ): 
        console.log( 'Дорога домой' );
        break;
    case ( a >= 19 && a <= 23 ):    
        console.log( 'Урррааа :)' );
        break;
};

//if else

let d = 15;

if ( d >= 0 && d < 2 ) {
    console.log( 'Сутки только начались' )
}  else if ( d >= 2 && d < 5 ) {
    console.log( 'Еще рано, можно спать' )
}  else if ( d >= 5 && d<7 ) {
    console.log( 'Мам, можно еще чуть-чуть по спать' )
}  else if ( d >= 7 && d < 10 ) {
    console.log( 'Собираемся в школу' )
}  else if ( d >= 10 && d < 14 ) {
    console.log( 'Уроки в школе' )
}  else if ( d >= 14 && d < 17 ) {
    console.log( 'Продленка' )
}  else if ( d >= 17 && d < 19 ) {
    console.log( 'Дорога домой' )
}  else if ( d >= 19 && d <= 23 ) {
    console.log( 'Урррааа :)' )
};