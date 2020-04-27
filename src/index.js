import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import 'owl.carousel';

import './scss/style.scss';


$(document).ready(function(){
    $('.owl-home-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        //responsiveClass:true,
        // autoWidth:true,
        items:3
        

      
    })
    
  });

