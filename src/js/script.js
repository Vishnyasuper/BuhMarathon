 $(document).ready(function(){
 // Галерея
   var prize = $('#prize');
   prize.owlCarousel({
     items: 1,                 // одновременно 1 миниатюры
     loop: true,               // включаем петлю
     center: true,             // центрируем активную миниатюру
    mouseDrag: true,         // отключаем перетаскивание мышом
     nav: false,
     navText: false,
     dots: true,
     dotsEach: 3,

   });


 });

 $(document).ready(function(){
  //Создаем объект 'user', который будет содержать информацию Detect.js
//Вызываем detect.parse() с navigator.userAgent в качестве аргумента

// // Выводим нужные значения в консоли браузера
// console.log(
//   user.browser.family,
//   user.browser.version,
//   user.os.name
// )

  //console.log(navigator.userAgent);
  //var user = parse(navigator.userAgent);

  // if (user.browser.family === 'Safari') {
  // alert('You\'re using the Safari browser');


  function check_browser() {
    var version = 0;
    if (navigator.userAgent.indexOf ("MSIE 5") != -1){
      document.write ("Internet Explorer 5.0");
      document.write ("Установите новую версию, пожалуйста");
      check_browser();
    }
    else if (navigator.userAgent.indexOf("MSIE 4") != -1){
      document.write ("Internet Explorer 3.0!");
      document.write ("Установите новую версию, пожалуйста");
      check_browser();
    }
    else if (navigator.userAgent.indexOf ("MSIE 4.5") != -1){
      document.write ("Microsoft Internet Explorer 4.5 for Macintosh");
      document.write ("Установите новую версию, пожалуйста");
      check_browser();
    }
    else if (navigator.userAgent.indexOf ("Opera") != -1)
      document.write("Opera");
    else if (navigator.userAgent.indexOf ("Mozilla/5.0") != -1)
      document.write ("Navigator 5 или выше (в т.ч. 6.2+)");
    else if (navigator.userAgent.indexOf ("Mozilla/4.7") != -1)
      document.write ("Navigator 4.7");
    //else if ………

    else version = 8;
      return true;
  }

  //alert("Вы используете браузер:", check_browser());
  //document.write("Вы используете браузер: ");
  //check_browser();


 });


$(document).ready(function(){
var listTurn = $('.prize__list-turn');
var listItem = $('.prize__list-item_turn');
// сохранили в переменную ссылку на тег

// по нажатию на первую ссылку убераем класс который прокручивает слайд
$('#prize__list-turn').on('click', function(e) {
  e.preventDefault();
  listTurn.addClass('prize__list-turn--close');
  listMore.removeClass('prize__list-more--close');
  listItem.addClass('prize__list-item--close');
});

var listMore = $('.prize__list-more');
// сохранили в переменную ссылку на тег

// по нажатию на первую ссылку убераем класс который прокручивает слайд
$('#prize__list-more').on('click', function(e) {
  e.preventDefault();
  listMore.addClass('prize__list-more--close');
  listTurn.removeClass('prize__list-turn--close');
  listItem.removeClass('prize__list-item--close');
});

});