window.addEventListener('DOMContentLoaded', () => {   ///unload page

const cartWrapper = document.querySelector('.cart__wrapper'),
 fourBlock = document.querySelector('.four_block'),
 cart = document.getElementById('cart'),
 cart__body = document.getElementById('cart__body');
 cart__close = document.querySelector('.cart__close'),
 image2 = document.querySelector('.image2'),
 order = document.querySelectorAll('.order'),
 products = document.querySelectorAll('.firts_phone'),
 description = document.querySelectorAll('.text2'),
 count = document.querySelector('.span0'),
 totalCost = document.querySelector('.cart__total > span'),
 confirm = document.querySelector('.confirm');


 fourBlock.addEventListener('click', open_card);
 cart__close.addEventListener('click', close_card);

/// open card when we click on card
 function open_card(){   
 	cart.style.display = "block";
}



///close card when we click on X
 function close_card(){ 
 	cart.style.display = "none";
 }




  order.forEach((btn,i) => {
  	btn.addEventListener('click', () =>{
  		
         let item = products[i].cloneNode(true), /// clone all dates of goods to item
             trigger = item.querySelector('button'),  /// chose all buttons in the .first_phone
             removeBt = document.createElement('div'),  /// create new field for delete goods in the card
             empty = cartWrapper.querySelector('.empty'); 
             trigger.remove();   /// delete block button
             showCart(); /// animation cart
             calcGoods(1); /// calculate how added goods
             removeBt.classList.add('goods__item-remove'); /// added class to removeBt
             removeBt.innerHTML = "&times"; /// create X for delete .first_phone
             item.appendChild(removeBt); /// insert removeBt in the item
             
             cartWrapper.appendChild(item); /// insert item in the cartWrapper

             if(empty){  /// check if chose order, so Кoрзина пустая delete
             	empty.style.display = 'none';
             }
             calcTotal();
             removeFromCart();
          });
 });



  function del(){/// delete more 30 symbol in the description od goods
  description.forEach(function(item){
    if(item.textContent.length < 30 ){
      return item.textContent;
    } else{
      const str = `${item.textContent.slice(0,31)}...`;//ES6
      item.textContent = str;
      return str;
    }
  });
}
del();


///animation cart
const showCart = () =>{ 
     confirm.style.display = 'block';
     let counter = 100;
  const frame = () =>{
     if(counter == 10 ){
        clearInterval(id); // finish 
        confirm.style.display = 'none';
    }
     else{
        counter--;
        confirm.style.opacity = '.' + counter; // increase opacity 
        confirm.style.transform = `translateY(${counter}px)`; // up to counter 
         }
  }
  const id = setInterval(frame,10);
}
 
//calculate how goods added in the cart
const calcGoods = (i) =>{ 
     const items = cartWrapper.querySelectorAll('.firts_phone');
     count.textContent = i + items.length;
}

const calcTotal =() =>{
  const prices = document.querySelectorAll('.cart__wrapper > .firts_phone > .price > span'); ///inheritance
 let total = 0;
 prices.forEach((item) =>{
total += +item.textContent;
 });
  totalCost.textContent = total;
} 

const removeFromCart =() =>{
  const removeBt = cartWrapper.querySelectorAll('.goods__item-remove');
  removeBt.forEach((btn) =>{
    btn.addEventListener('click', () =>{
      btn.parentElement.remove();


      calcGoods(0);
      calcTotal();
      

      if(count.textContent == 0){
      let empty = cartWrapper.querySelector('.empty');
       empty.style.display = 'block';
     }

       
    

    })
  })
}


});

