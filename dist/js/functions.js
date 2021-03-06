/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function prodFunction() {
    document.getElementById("products").classList.toggle("show");
}

// $(document).ready(function(){
//   $("#sizing").on('change', function() {
//     console.log( this.value );
// });

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// SimpleCart configuration

simpleCart({

  cartColumns: [
        { attr: "name", label: "Name"},
        { view: "currency", attr: "price", label: "Price"},
        { view: "decrement", label: false},
        { attr: "quantity", label: "Qty"},
        { view: "increment", label: false},
        { view: "size", attr: "size", label: "Size"},
        { view: "panty", attr: "panty", label: "Panty Type" },
        { view: "currency", attr: "total", label: "SubTotal" },
        { view: "remove", text: "Remove", label: false }
    ],
    cartStyle: "table", 
    checkout: { 
      type: "PayPal" , 
      email: "you@yours.com",        
      // use paypal sandbox, default is false
      sandbox: true , 
      // http method for form, "POST" or "GET", default is "POST"
      method: "GET"
    },
    tax:    0.051,
    currency:   "USD",
    language: "english-us"
});