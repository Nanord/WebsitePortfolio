'use strict';
//1 задание
document.write("Привет мир");
alert("Привет мир2");

//2 задание
function task2(){
    alert("Спасибо");
}
//3 задание
function task3(){
    var arr = [ "array", 1, 2.5];
    alert("Массив:");
    for(var i=0; i<arr.length; i++) 
    alert(arr[i]);
}
//4 задание
function task4(){
    var x = 4, y = 2;
    //+, -, *, /, %
    alert("x+y = " + x+y);
    alert("x-y = " + x-y);
    alert("x*y = " + x*y);
    alert("x/y = " + x/y);
    alert("x%y = " + x%y);
}
//5 задание
function task5(){
    var x;
        x = prompt('Введите число от 1 до 5 или число равное 10:');
        if ((x < 0 || x > 6) && (x != 10)){
            alert("не правильно");
        }
        else{
            alert("правильно");
    }

}
//6 задание
 function task6(){
 	numbers = prompt('Введите строчку:');
	alert(numbers.length+' - симоволов в строке; '+numbers.substring(3)+' - извлеченная часть строчки ; '+numbers.toUpperCase()+' верхний регистр.');
}
//7 задание
function task7(){
    var x;
        x = prompt('Введите число:');
        if (x < 0){
            alert(x + " Отрицательное число");
        }
        else{
            if(x > 0){
                alert(x +" Положительное число");
            }
            else{
                alert(x + " Число явлется нулем")
            }
}
//8 задание
function task8(){
    var a = prompt("Введите № месяца");
    switch (a) {
        case '1':
            alert( 'январь' );
        break;
        case '2':
            alert( 'февраль!' );
        break;
        case '3':
            alert( 'март' );
        break;
        case '4':
            alert( 'апрель' );
        break;
        case '5':S
            alert( 'май!' );
        break;
        case '6':
            alert( 'июнь' );
        break;
        case '7':
            alert( 'июль' );
        break;
        case '8':
            alert( 'август' );
        break;
        case '9':
            alert( 'сентябрь' );
        break;
        case '10':
            alert( 'октябрь' );
        break;
        case '11':
            alert( 'ноябрь' );
        break;
        case '12':
            alert( 'декабрь' );
        break;
        default:
            alert( 'Нет месяца под таким номером' );
    }
}
}
//задание 9
function task9(){	
    var s=0;
	for(var i = 14;i <= 100; i += 7){
	s += i;
    }
	alert("сумма двузначных чисел кратных 7:" + s);
}
//задание 10
function task10(){
	 var x = prompt("Введите математическое выражение", '');
     var res = eval(x);
     alert("Результат : " + res);
 }
//задание 11
function task11(){
    var x = [1, 2, 3, 4], p = 0;
    for(var i = 0; i < 4; i++){
        p += x[i];
    }
    p = p / 4;
    alert("Среднее арифмитическое равно " + p);
    
} 
//задание 12,13

$(document).ready(function(){
   $('#text').hide();
    
});
$('#button').click(function(){ 
    $('#text').show();
    $("#dialog1").dialog();
    });          