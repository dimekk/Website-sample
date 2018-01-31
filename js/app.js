document.addEventListener('DOMContentLoaded', function (){
var clair_img = document.querySelector('.img1');
var clair = document.querySelector('.img1 div');
var margarita_img = document.querySelector('.img2');
var margarita = document.querySelector('.img2 div');

clair_img.addEventListener('mouseover', function(){
clair.style.visibility = 'hidden';
});
clair_img.addEventListener('mouseout', function(){
clair.style.visibility = 'visible';
});

margarita_img.addEventListener('mouseover', function(){
margarita.style.visibility = 'hidden';
});
margarita_img.addEventListener('mouseout', function(){
margarita.style.visibility = 'visible';
});

var left = document.querySelector('.left');
var right = document.querySelector('.right');
var foto = document.querySelector('.tv_container');

left.addEventListener('click', function (){
var zmienna_1 = -450;
var l =  foto.style.left ? parseInt(foto.style.left) : 0;
foto.style.left = (l + zmienna_1) + 'px';
if (foto.style.left == '-1350px'){
  foto.style.left = '0px';
}
});

right.addEventListener('click', function (){
  var zmienna_2 = 450;
  var l2 = foto.style.left ? parseInt(foto.style.left) : 0;
foto.style.left = (l2 + zmienna_2) + 'px';
if (foto.style.left === '450px'){
  foto.style.left = '-900px';
}
});

});
