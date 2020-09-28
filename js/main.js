let addtocart = document.querySelectorAll('.add-to-cart');
console.log(addtocart);

for(let i = 0; i < addtocart.length; i++){
addtocart[i].addEventListener("click", () => { 
     productCount();
 });
}


function productCount(){
   let productNumbers = localStorage.getItem('cartNumbers')
   productNumbers = parseInt(productNumbers);
   if(productNumbers){
   	localStorage.setItem('cartNumbers', productNumbers + 1);
   	document.querySelector('.cart-span').textContent = productNumbers + 1; 
   }else {
   	localStorage.setItem('cartNumbers', 1); 
   	document.querySelector('.cart-span').textContent = 1;
   }
   
}

