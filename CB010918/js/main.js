window.onload = function () {
  var totCstOrder = 0;
  var totCstSingle = 0;
  function process(m) {
    //variables for all codes
    var adltTkt;
    var chldTkt;
    var totCst;
    var totTkt = 0;
    var duraCost = 0;
    var annualCst = 0;
    var fdTknCst = 0;
    var totalChild = 0;

    //references to interact with elements
    var passChoice = document.getElementById("ticketChoice").value;
    var adultTkt = document.getElementById("adultTicket").value;
    var duration = document.querySelector(
      '#duration input[type="radio"]:checked'
    ).value;
    var annualPass = document.getElementById("annualpass").value;
    var foodTkn = document.getElementById("token").value;

    //local ticket choice
    if (passChoice == "local_pass") {
      var childTicket = document.getElementById("childTicket").value;
      var childTicket2 = document.getElementById("childTicket2").value;

      adltTkt = eval(adultTkt) * 2500;
      childTicketPrice = eval(childTicket) * 1000;
      childTicketPrice2 = eval(childTicket2) * 500;

      //Duration cost
      if (duration == "halfday") {
        duraCost = eval(adultTkt) + eval(childTicket) + eval(childTicket2);
        duraCost = duraCost * 250;
      } else if (duration == "fullday") {
        duraCost = eval(adultTkt) + eval(childTicket) + eval(childTicket2);
        duraCost = duraCost * 500;
      }
      //calc
      totalChild = childTicketPrice2 + childTicketPrice;
      totTkt = adltTkt + childTicketPrice + childTicketPrice2 + duraCost;
      //foreign ticket choice
    } else {
      var childTkts = document.getElementById("ch_ticket").value;

      adltTkt = eval(adultTkt) * 5000;
      chldTkt = eval(childTkts) * 2500;
      //Duration cost
      if (duration == "3hours") {
        duraCost = eval(adultTkt) + eval(childTkts);
        duraCost = duraCost * 1000;
      } else if (duration == "halfday") {
        duraCost = eval(adultTkt) + eval(childTkts);
        duraCost = duraCost * 500;
      } else if (duration == "fullday") {
        duraCost = eval(adultTkt) + eval(childTkts);
        duraCost = duraCost * 1000;
      }
      totalChild = chldTkt;
      totTkt = adltTkt + chldTkt + duraCost;
    }

    annualCst = eval(annualPass) * 5000;

    fdTknCst = eval(foodTkn) * 500;
    //total
    console.log(totTkt, annualCst, fdTknCst);
    totCst = totTkt + annualCst + fdTknCst;
    totCstSingle = totCst;

    if (totTkt === 0) {
      alert("Please select number of tickets!");
      p1.innerText = 0;
      p3.innerText = totCst;
      
    } else {
      // set the values
      var current_order = document.getElementById("p1").innerText;
      var current_order_cost = document.getElementById("p3").innerText;

      p1.innerText = 1;
      p3.innerText = totCst;
    }

    m.preventDefault();
  }

  localPassBinding();

  document.getElementById("3hours").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("halfday").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("fullday").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("annualpass").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("token").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("addOrder").addEventListener(
    "click",
    function (e) {
      var OverallOrder = document.getElementById("p2").innerText;
      var CurrentOrderCst = document.getElementById("p3").innerText;

      document.getElementById("p1").innerText = 0;
      document.getElementById("p2").innerText = eval (OverallOrder) + 1;
      document.getElementById("p3").innerText = 0;
      document.getElementById("p4").innerText = eval (CurrentOrderCst) + totCstOrder;
      

      totCstOrder = totCstOrder + totCstSingle;

      document.getElementById("ticketChoice").value = "local_pass";
      document.getElementById("adultTicket").value = 0;
      document.getElementsByClassName("#numOfTickets input").value = 0;
      document.getElementById("3hours").checked = true;
      document.getElementById("annualpass").value = 0;
      document.getElementById("token").value = 0;

      e.preventDefault();
    },
    false
  );

  // place order onclick
  document.getElementById("placeOrder").addEventListener(
    "click",
    function (e) {
      totCstOrder = 0;
      totCstSingle = 0;

      document.getElementById("p1").innerText = 0;
      document.getElementById("p2").innerText = 0;
      document.getElementById("p3").innerText = 0;
      document.getElementById("p4").innerText = 0;

      document.getElementById("ticketChoice").value = "local_pass";
      document.getElementById("adultTicket").value = 0;
      document.getElementsByClassName("#numOfTickets input").value = 0;
      document.getElementById("3hours").checked = true;
      document.getElementById("annualpass").value = 0;
      document.getElementById("token").value = 0;

      var name = document.getElementById("train_name").innerText;

      document.getElementById("ticketChoice").value = "local_pass";

      alert(
        "Thank you! You have a reserved your ticket."
      );

      var dropdowns =
        '<label for="adultTicket">(Adult)</label><input type="number" id="adultTicket" name="adultTicket" style="width: 120px; height: 25px;" min="0"max="200" value="0"><br><br><label for="childTicket">(Child - Below 15 Yrs)</label><input type="number" id="childTicket" name="childTicket" style="width: 120px; height: 25px;" min="0"max="200" value="0"><br><br><label for="childTicket2">(Child - Below 6 Yrs)</label><input type="number" id="childTicket2" name="childTicket2" style="width: 120px; height: 25px;" min="0"max="200" value="0">';
      document.getElementById("numOfTickets").innerHTML = dropdowns;

      localPassBinding();
      e.preventDefault();
    },
    false
  );

  // Child pass dropdown display

  document.getElementById("ticketChoice").onchange = function () {
    var val = document.getElementById("ticketChoice").value;

    if (val == "local_pass") {
      var dropdowns =
        '<label for="adultTicket">(Adult)</label><input type="number" id="adultTicket" name="adultTicket" style="width: 120px; height: 25px;" min="0"max="200" value="0"><br><br><label for="childTicket">(Child - Below 15 Yrs)</label><input type="number" id="childTicket" name="childTicket" style="width: 120px; height: 25px;" min="0"max="200" value="0"><br><br><label for="childTicket2">(Child - Below 6 Yrs)</label><input type="number" id="childTicket2" name="childTicket2" style="width: 120px; height: 25px;" min="0"max="200" value="0">';
      document.getElementById("numOfTickets").innerHTML = dropdowns;

      localPassBinding();
    } else {
      var dropdowns =
        '<label for="adultTicket">(Adult)</label><input type="number" id="adultTicket" name="adultTicket" style="width: 120px; height: 25px;" min="0"max="200" value="0"><br><br><label for="ch_ticket">(Child)</label> <input type="number" id="ch_ticket" name="ch_ticket" style="width: 120px; height: 25px; color: black; border-radius: 6px; padding:0 20px; position:relative; left:110px; cursor: pointer;" min="0" max="200" value="0">';

      document.getElementById("numOfTickets").innerHTML = dropdowns;

      foreignPassBinding();
    }
  };

  function localPassBinding() {
    document.getElementById("adultTicket").addEventListener(
      "change",
      function (a) {
        process(a);
      },
      false
    );
    // Add to cart onclick

    document.getElementById("childTicket").addEventListener(
      "change",
      function (e) {
        process(e);
      },
      false
    );

    document.getElementById("childTicket2").addEventListener(
      "change",
      function (e) {
        process(e);
      },
      false
    );
  }
  function foreignPassBinding() {
    document.getElementById("adultTicket").addEventListener(
      "change",
      function (a) {
        process(a);
      },
      false
    );
    // Add to cart onclick

    document.getElementById("ch_ticket").addEventListener(
      "change",
      function (e) {
        process(e);
      },
      false
    );
  }
};
