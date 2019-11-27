import React, { Component } from 'react';
import * as $ from 'jquery'
import "./Page1.css"
import perro1 from "./perro1.jpg"
import perro2 from "./perro2.jpg"
import conejo1 from "./conejo1.jpg"
import conejo2 from "./conejo2.jpg"
import gato1 from "./gato1.jpg"
import gato2 from "./gato2.jpg"

window.jQuery = window.$=$

class Page1 extends Component {

  
  render() {

    $(document).ready(function(){

      // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
      $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    
      // FILTRANDO PRODUCTOS  ============================================
    
      $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
    
    
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');
    
      
        $('.product-item').css('transform', 'scale(0)');
        function hideProduct(){
          $('.product-item').hide();
        } setTimeout(hideProduct,400);
    
     
        function showProduct(){
          $('.product-item[category="'+catProduct+'"]').show();
          $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400);
      });
    
    
      $('.category_item[category="all"]').click(function(){
        function showAll(){
          $('.product-item').show();
          $('.product-item').css('transform', 'scale(1)');
        } setTimeout(showAll,400);
      });
    });

   
    return (
      <div className="page">
      
       <h1>EN ADOPCIÓN</h1>

       <div className="store-wrapper">
			<div className="category_list">
				<a href="#" className="category_item" category="all">Todo</a>
				<a href="#" className="category_item" category="Conejos">Conejos</a>
				<a href="#" className="category_item" category="Perros">Perros</a>
				<a href="#" className="category_item" category="Gatos">Gatos</a>
				
			</div>
			<section className="products-list">
				<div className="product-item" category="Conejos">
					<img src={conejo1} alt="" />
					<a href="#">Conejo1</a>
				</div>
				<div className="product-item" category="Conejos">
        <img src={conejo2} alt="" />
					<a href="#">Conejo2</a>
				</div>
				<div className="product-item" category="Perros">
					<img src={perro1} alt="" />
          <a href="#">Perro1</a>
				</div>
				<div className="product-item" category="Perros">
        <img src={perro2} alt="" />
					<a href="#">perro2</a>
				</div>
				<div className="product-item" category="Gatos">
        <img src={gato1} alt="" />
					<a href="#">gato1</a>
				</div>
				<div className="product-item" category="Gatos">
        <img src={gato2} alt="" />
					<a href="#">Gato2</a>
				</div>
				
			</section>
		</div>
	</div>

      
      
      
    );
  }
}

export default Page1;