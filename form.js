function updateTotal() {
    // Get the quantity of each product
    var quantity1 = document.getElementById("quantity1").value;
    var quantity2 = document.getElementById("quantity2").value;
    var quantity3 = document.getElementById("quantity3").value;
  
    // Calculate the total price of each product
    var total1 = quantity1 * 30;
    var total2 = quantity2 * 25;
    var total3 = quantity3 * 10;
  
    // Update the total price of each product on the page
    document.getElementById("total1").innerHTML = total1;
    document.getElementById("total2").innerHTML = total2;
    document.getElementById("total3").innerHTML = total3;
  
    // Calculate the grand total
    var grandTotal = total1 + total2 + total3;
    // Update the grand total on the page
    document.getElementById("grandTotal").innerHTML = grandTotal;
    document.getElementById("customer-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting immediately
      console.log("SUCCESSFULLY ORDERED THANK YOU!");
      
      // Refresh the window after the alert
      location.reload(); // You can also use window.location.reload();
  });
  

  
  }
  
  // Update the total price of each product when the page loads
  updateTotal();  