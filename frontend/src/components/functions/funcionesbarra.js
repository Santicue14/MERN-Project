/* global jQuery */
jQuery(document).ready(function() {
    // Manejar clic en elementos del menú
    jQuery(".menu > ul > li").click(function(e) {
  
      // Quitar la clase 'active' de los elementos que ya no están activos
      jQuery(this).siblings().removeClass("active");
  
      // Agregar/quitar la clase 'active' al elemento seleccionado
      jQuery(this).toggleClass("active");
  
      // Mostrar/ocultar el submenú del elemento seleccionado
      jQuery(this).find("ul").slideToggle();
  
      // Ocultar los submenús de otros elementos
      jQuery(this).siblings().find("ul").slideUp();
  
      // Quitar la clase 'active' de los elementos del submenú
      jQuery(this).siblings().find("li").removeClass("active");
    });
  
    // Manejar clic en el botón del menú
    jQuery(".menu-btn").click(function() {
      jQuery(".sidebar").toggleClass("active");
    });
  });
  