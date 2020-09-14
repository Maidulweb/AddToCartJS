let carts = document.querySelectorAll('.add-to-cart');

for (let i = 0; i < carts.length; i++) {
   carts[i].addEventListener('click', ()=>{
      cartNumbers();
     
   });
}


function onLoadCarts(){
   let productNumbers = localStorage.getItem('cartNumbersKey');
   
   if(productNumbers){
      document.querySelector('.cart-span').textContent = productNumbers;
   }
   
}

function cartNumbers(){
   let productNumbers = localStorage.getItem('cartNumbersKey');
   
   productNumbers = parseInt(productNumbers);

   if(productNumbers){
      localStorage.setItem('cartNumbersKey', productNumbers + 1);
      document.querySelector('.cart-span').textContent = productNumbers + 1;
   }else {
      localStorage.setItem('cartNumbersKey', 1);
      document.querySelector('.cart-span').textContent = 1;
   }
   
}

onLoadCarts();
