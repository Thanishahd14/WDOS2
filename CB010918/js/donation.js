window.onload = function (){
    document.getElementById("sub").addEventListener("click", btnclick)

    var inputs = [document.getElementById("name"), document.getElementById("num"),
    document.getElementById("exp"), document.getElementById("cvc")];
  
    var error;
  
    for (var i = 0; i < inputs.length; i++) {
      var submit = document.getElementById("sub").addEventListener("click", btn_sub)
  
      function btn_sub(e) {
        if (inputs[i].value == "") {
          error = "please enter all fields"
          alert(error)
        }
        else {
          alert("thank you")
        }
  
  
  
  
      }
  
    }

    function btnclick(e) {
  
      var getSelectedValue = document.querySelector('input[name="amount"]:checked');
      if (getSelectedValue != null) {
        var name = document.getElementById("name").value
        var num = document.getElementById("num").value
        var exp = document.getElementById("exp").value
        var cvc = document.getElementById("cvc").value
  
        if (name == "") {
          alert("Enter a name")
        }
  
        if (num == "") {
          alert("Enter card number")
        }
  
        if (exp == "") {
          alert("Enter expiry number")
        }
  
        if (cvc == "") {
          alert("Enter cvc number")
  
        }
        alert("Thank you for your donation")
  
  
      }
      else {
        alert("No amount has been selected");
  
      }
      var radio = document.querySelector('input[type=radio][name=amount]:checked');
      radio.checked = false;

      document.getElementById("name").value = "";
      document.getElementById("num").value = "";
      document.getElementById("exp").value = "";
      document.getElementById("cvc").value = "";

  
      e.preventDefault()
  
  
    }
}