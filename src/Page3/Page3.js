import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as $ from 'jquery'
import "./Page3.css"
import especialista1 from "./especialista1.png"
import especialista2 from "./especialista2.png"
import operaciones1 from "./operaciones1.png"
import operaciones2 from "./operaciones2.png"
import otros1 from "./otros1.png"
import otros2 from "./otros2.png"


class Page3 extends Component {
  render() {
    $(document).ready(function(){

     
      $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    
     
    
      $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);
    
     
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
        <h1>SERVICIOS</h1>
        <div className="store-wrapper">
		      	<div className="category_list">
				<a href="#" className="category_item" category="all">Todo</a>
				<a href="#" className="category_item" category="Especialistas">Especialistas</a>
				<a href="#" className="category_item" category="Operaciones">Operaciones y Estudios</a>
				<a href="#" className="category_item" category="Otros">Otros</a>
				
			</div>
			<section className="products-list">
      <div className="product-item" category="Especialistas">
					<img src={especialista1} alt="" />
          <a href="#">especialista1</a>
				</div>
				<div className="product-item" category="Especialistas">
					<img src={especialista2} alt="" />
          <a href="#">especialista2</a>
				</div>
				<div className="product-item" category="Operaciones">
					<img src={operaciones1} alt="" />
          <a href="#">operaciones1</a>
				</div>
				<div className="product-item" category="Operaciones">
        <img src={operaciones2} alt="" />
					<a href="#">operaciones2</a>
				</div>
				<div className="product-item" category="Otros">
        <img src={otros1} alt="" />
					<a href="#">otros1</a>
				</div>
				<div className="product-item" category="Otros">
        <img src={otros2} alt="" />
					<a href="#">otros2</a>
				</div>
				
			</section>
		</div>
        
      </div>
    );
  }
}

export default withRouter(Page3);