/* En este script realizamos las referencias de la Api Web
( jquery.min.js) a metdodos , los eventos y funciones

*/

/* Leemos la funcion en este documento 
Una página no se puede manipular de forma segura hasta que el documento esté "listo". jQuery detecta este estado de preparación por usted. El código incluido en el interior $( document ).ready()solo se ejecutará una vez que el Modelo de objetos de documento (DOM) de la página esté listo para que se ejecute el código JavaScript. */

$(document).ready(function () {

    /* Activamos con el metodo .on() el evento de desplazamiento "scroll" desde la funcion"onScroll" que crearemos mas adelante.
    
    el método .on() adjunta controladores de eventos al conjunto de elementos
     seleccionado actualmente en el objeto jQuery ( jquery.min.js)
    */
    $(document).on("scroll", onScroll);
  
  
    /* Activamos la referencia ($) de la barra de navegacion <nav> 
     desde el evento (click) en los enlaces de activación existentes */
    $('nav a[href="#"]').on('click', function (e) {
  
      /* Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo. 
      esto se puede ver cada vez que me desplazo en la pagina , presionando click en la barra de navegacion  */
      e.preventDefault();
  
      /* luesgo deactivo el evento de desplazamiento */
      $(document).off("scroll");
  
      /* El .each()método está diseñado para hacer que las construcciones de bucles DOM sean concisas y menos propensas a errores. Cuando se llama, itera sobre los elementos DOM que forman parte del objeto jQuery. Cada vez que se ejecuta la devolución de llamada, se pasa la iteración del bucle actual, comenzando desde 0. Más importante aún, la devolución de llamada se activa en el contexto del elemento DOM actual, por lo que la palabra clave (this) se refiere al elemento. */
      $('nav a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
  
      /* en la variable target la hacemos igual  (this.hash) 
      el navegador reconoce un hash (identificador de fragmento) en la URL, intenta encontrar el primer elemento con este ID
      
      la variable  selector ($target) abarcara la busqueda en todo el documento 
  
      Controlamos los eventos de cambio de hash ( identificador del elemento posicion) dentro del documento 
      */
  
      var target = this.hash;
      $target = $(target);

      /* detectamos la altura del encabezado fijo y sumamos la posicion tope del 
       scroll y luego almacenamos la ubicacion (target) en el identificador de localizacion hash */
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top + 2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });
  

/* Creamos la funcion para el evento del scroll activado , el cual estaremos referenciando en el documento */

  function onScroll(event) {
    var scrollPosition = $(document).scrollTop();

    /* Cada vez que se referencia en el documento el selector (nav a) se active
    la funcion en el documento DOM y almacenamos en una variable la posicion */
    $('nav a').each(function () {
      var currentLink = $(this);


      /* almacenamos en una variable la referencia del elemento (href)  */
      var refElement = $(currentLink.attr("href"));

      /* Luego se realiza la validacion de la posicion del elemento */
      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('nav a').removeClass("active");
        currentLink.addClass("active");
      }
      else {
        currentLink.removeClass("active");
      }
    });
  }