$(function(){
   $(window).scroll(function () {//Au scroll dans la fenetre on déclenche la fonction
      if ($(this).scrollTop() > 64) { //si on a défilé de plus de 160px du haut vers le bas
          $('#header').addClass("fixe"); //on ajoute la classe "fixe" au header
      } else {
      $('#header').removeClass("fixe");//sinon on retire la classe "fixe" (c'est pour laisser le header à son endroit de départ lors de la remontée
      }
   });
 });