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

let number = 23;

switch ( true ) {
    case ( number >= 0 && number < 2 ):
        console.log( 'Сутки только начались' );
        break;
    case ( number >= 2 && number < 5 ):
        console.log( 'Еще рано, можно спать' );
        break;
    case ( number >= 5 && number < 7 ): 
        console.log( 'Мам, можно еще чуть-чуть по спать' );
        break;   
    case ( number >= 7 && number < 10 ): 
        console.log( 'Собираемся в школу' );
        break;   
    case ( number >= 10 && number < 14 ): 
        console.log( 'Уроки в школе' );
        break;
    case ( number >= 14 && number < 17 ): 
        console.log( 'Продленка' );
        break;
    case ( number >= 17 && number < 19 ): 
        console.log( 'Дорога домой' );
        break;
    case ( number >= 19 && number <= 23 ):    
        console.log( 'Урррааа :)' );
        break;
};

//if else

let time = 15;

if ( time >= 0 && time < 2 ) {
    console.log( 'Сутки только начались' )
}  else if ( time >= 2 && time < 5 ) {
    console.log( 'Еще рано, можно спать' )
}  else if ( time >= 5 && time < 7 ) {
    console.log( 'Мам, можно еще чуть-чуть по спать' )
}  else if ( time >= 7 && time < 10 ) {
    console.log( 'Собираемся в школу' )
}  else if ( time >= 10 && time < 14 ) {
    console.log( 'Уроки в школе' )
}  else if ( time >= 14 && time < 17 ) {
    console.log( 'Продленка' )
}  else if ( time >= 17 && time < 19 ) {
    console.log( 'Дорога домой' )
}  else if ( time >= 19 && time <= 23 ) {
    console.log( 'Урррааа :)' )
};