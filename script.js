
 // Initialize cart total
 let totalPrice = 0;

 // Function to update the total price and cart display
 function updateCart(price) {
     totalPrice += parseFloat(price);
     document.getElementById('total-price').textContent = totalPrice.toFixed(2);

     // Enable checkout button if the cart has items
     if (totalPrice > 0) {
         document.getElementById('checkout-button').disabled = false;
     } else {
         document.getElementById('checkout-button').disabled = true;
     }
 }

 // Ensure the DOM is fully loaded before adding event listeners
 document.addEventListener('DOMContentLoaded', function() {
     // Add event listeners to all "Add to Cart" buttons
     const addToCartButtons = document.querySelectorAll('.add-to-cart');
     addToCartButtons.forEach(button => {
         button.addEventListener('click', (e) => {
             const price = e.target.getAttribute('data-price');
             updateCart(price);
         });
     });
 });
 
