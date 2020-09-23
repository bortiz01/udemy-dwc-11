//esperar a que carguen los elementos HTML y ejecutar el codigo js

/* ---------------------------- version sin query --------------------------- */
// document.addEventListener('DOMContentLoaded', function () {
// 'use strict';

// });

/* ----------------------------- version jquery ----------------------------- */
// 1- forma - larga
// jQuery(document).ready(function () {
//     'use strict';
//     console.log('hola');

// });

// 2- forma - media
// $(document).ready(function () {
//     'use strict';
//     console.log('hola');

// });

// 3- forma - abreviada
$(function () {
    'use strict'; //forzar restricciones de la version ECMAScript v5

    /* --------------------------- esconder elementos --------------------------- */
    // $('main article:first').hide();

    /* ---------------------------- mostrar elementos --------------------------- */
    // $('#menu').on('click', function () {
    //     $('#navegacion').show();
    // });

    /* ------------------------ remover elementos del DOM ----------------------- */
    // $('main article:first').remove();

    /* ---------- dos formas de clonar un elemento y agregarlo al final --------- */
    // let copia = $('main article:last').clone();    
    // $('main').append(copia);
    // $(copia).appendTo('main');

    /* --------- dos formas de clonar un elemento y agregarlo al inicio --------- */
    // let copia = $('main article:last').clone();
    // $('main').prepend(copia);
    // $(copia).prependTo('main');

    /* --------------------------- eventos con jquery --------------------------- */
    // $('div.logo img').on('click', function () {
    //     console.log('Has hecho click en el logo');
    // })

    /* ---------------------------- remover elementos --------------------------- */
    // $('div.logo img').on('click', function () {
    //     $(this).remove();
    // });

    /* ------------------------------- hover event ------------------------------ */
    // $('div.logo img').on('mouseenter', function () {
    //     console.log('sobre el logo');
    // });

    /* ---------------------------- hover event leave --------------------------- */
    // $('div.logo img').on('mouseleave', function () {
    //     console.log('fuera del logo');
    // });

    /* ---------------------- agregar clases a un elemento ---------------------- */
    // $('#navegacion nav ul li:first').addClass('activo');

    /* ---------------------- agregar de forma interactiva ---------------------- */
    // $('#navegacion ul li a').on('click', function (e) {
    //     $('#navegacion ul li a').removeClass('activo');
    //     e.preventDefault(); //evita que las acciones por default del briwser se ejecuten (por ejemplo, al dar clic a un enlace, que nos lleve a la pagina destino)
    //     $(this).addClass('activo');
    // })

    /* ----------------------- grupo de eventos con jquery ---------------------- */
    // $('main').on({
    //     click: function () {
    //         $(this).addClass('fondoverde activo');
    //     },
    //     mouseenter: function () {
    //         $(this).addClass('fondorojo');
    //     },
    //     mouseleave: function () {
    //         $(this).removeClass('fondorojo');
    //     }
    // });

    /* --------------------------- navegar por el DOM --------------------------- */
    // let nav = $('article:first').parent().children();
    // let nav = $('article:first').parent().children()[2];
    // console.log(nav);

    // let nav2 = $('article:first').next().next();
    // console.log(nav2);

    /* ------------------------ modificar textos del DOM ------------------------ */
    // $('main article:first h2').text();
    // $('main article:first h2').text('Nuevo titulo');

    // $('.navegacion ul li:first a').text('Home');

    /* ----------------------- modificar atributos del DOM ---------------------- */
    // let nav = $('.navegacion ul li:first a').attr('href');
    // console.log(nav);
    // nav = $('.navegacion ul li:first a').attr('href', 'www.udemy.com');

    // let nav = $('.navegacion ul li:first a').attr('target');
    // console.log(nav);
    // nav = $('.navegacion ul li:first a').attr('target', '_blank');

    /* ---------------------------- modificar el css ---------------------------- */
    // $('.logo img').css({ 'width': '600px' });
    // $('main article h2').css({ 'color': 'red' });
    // $('aside').css({
    //     'background-color': 'gray',
    //     'text-transform': 'uppercase',
    //     'padding': '20px'
    // })

    /* ----------------------- IMPORTANTE eventos animados ---------------------- */
    // $('.logo img').on('click', function () {
    //     $(this).animate({ 'width': '200px' }, 1000);
    // });

    // $('main article img').on('mouseenter', aumentarImagen);
    // $('main article img').on('mouseleave', disminuirImagen);

    // function aumentarImagen() {
    //     $(this).animate({ 'width': '100%' }, 1000);
    // }

    // function disminuirImagen() {
    //     $(this).animate({ 'width': '350px' }, 1000);
    // }

    /* -------------------- IMPORTANTE animacion de acordion -------------------- */
    // $('.logo img').click(function () {
    //     $('main article:first').slideUp(1000);
    // });

    // $('aside').click(function () {
    //     $('main article:first').slideDown(1000);
    // });

    /* ---------------------------------- AJAX ---------------------------------- */
    // $('div.logo img').on('click', cargarAjax);

    // //funcion a ejecutar el evento
    // function cargarAjax() {
    //     $.ajax('promociones.txt', {
    //         success: agregarContenido,
    //         type: 'GET',
    //         datatype: 'text'
    //     });
    // };

    // // funcion ajax, debe de recibir los 3 parametros indicados
    // function agregarContenido(data, status, jqxhr) {
    //     $('aside').text(data);
    //     console.log(status);
    // };

    /* ------------------------- Fusionar contenido HTML ------------------------ */
    // $('aside').load('promociones.html');

    /* -------------------------------- Arreglos -------------------------------- */
    // var proximosViajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];
    // console.log(proximosViajes);

    // $.each(proximosViajes, function (i, v) {
    //     if (i === 0) {
    //         $('aside').append('<h2>Proximos Viajes</h2>');
    //     }
    //     $('aside').append('<li>' + v + '</li>')
    // });

    // var proximosViajes = {
    //     primero: 'Londres',
    //     segundo: 'valencia',
    //     tercero: 'Madrid',
    //     cuarto: 'Paris',
    //     quinto: 'Milan'
    // }

    // $.each(proximosViajes, function (i, v) {
    //     if (i === 'primero') {
    //         $('aside').append('<h2>Proximos Viajes</h2>');
    //     }
    //     $('aside').append(`<li> ${i} - ${v} </li>`)
    // });

    /* ------------------------ Interactuando con el DOM ------------------------ */
    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');

    $('.servicios nav a').on('click', function () {
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');

        let id = $(this).attr('href');
        // $('.nuestros-servicios div').hide();
        $('.nuestros-servicios div').fadeOut();
        // $(`.nuestros-servicios ${id}`).show();
        // $(id).show();
        $(id).fadeIn();
        return false;
    })


});