import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as $ from 'jquery'
import "./Page2.css"
import accesorio1 from "./accesorio1.jpg"
import accesorio2 from "./accesorio2.jpg"
import alimento1 from "./alimento1.jpg"
import alimento2 from "./alimento2.png"
import juguete1 from "./juguete1.jpg"
import juguete2 from "./juguete2.jpg"

window.jQuery = window.$=$

class Page2 extends Component {
  render() {

    $(document).ready(function(){

      
      $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    
      
    
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

        <h1>PRODUCTOS</h1>

            <div className="store-wrapper">
		      	<div className="category_list">
				<a href="#" className="category_item" category="all">Todo</a>
				<a href="#" className="category_item" category="Accesorios">Accesorios</a>
				<a href="#" className="category_item" category="Alimentos">Alimentos</a>
				<a href="#" className="category_item" category="Juguetes">Juguetes</a>
				
			</div>
			<section className="products-list">
				<div className="product-item" category="Accesorios">
					<img src={accesorio1} alt="" />
					<a href="#">accesorio1</a>
				</div>
				<div className="product-item" category="Accesorios">
        <img src={accesorio2} alt="" />
					<a href="#">accesorio2</a>
				</div>
				<div className="product-item" category="Alimentos">
					<img src={alimento1} alt="" />
          <a href="#">alimento1</a>
				</div>
				<div className="product-item" category="Alimentos">
        <img src={alimento2} alt="" />
					<a href="#">alimento2</a>
				</div>
				<div className="product-item" category="Juguetes">
        <img src={juguete1} alt="" />
					<a href="#">juguete1</a>
				</div>
				<div className="product-item" category="Juguetes">
        <img src={juguete2} alt="" />
					<a href="#">juguete2</a>
				</div>
				
			</section>
		</div>
        
      </div>
    );
  }
}

export default withRouter(Page2);