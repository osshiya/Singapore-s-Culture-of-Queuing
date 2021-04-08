var bartx = document.getElementById("barChart");
var pietx = document.getElementById("pieChart");


var barChart = new Chart(bartx, {
    type: 'bar',
    data: {
      datasets: [
        {
        label: 'F&B',
        data: [10.25],
        backgroundColor: 'rgba(11, 99, 132, 0.2)',
        borderColor: 'rgba(11, 99, 132, 1)',
        borderWidth: 1,
        },
        {
        label: 'HDB',
        data: [8.39],
        backgroundColor: 'rgba(22, 162, 235, 0.2)',
        borderColor: 'rgba(22, 162, 235,1)',
        borderWidth: 1,
        },  
        {
        label: 'Condominium',
        data: [4.04],
        backgroundColor: 'rgba(33, 206, 86, 0.2)',
        borderColor: 'rgba(33, 206, 86,1)',
        borderWidth: 1,
        },  
        {
        label: 'Events',
        data: [7.45],
        backgroundColor: 'rgba(44, 192, 192, 0.2)',
        borderColor: 'rgba(44, 192, 192, 1)',
        borderWidth: 1,
        },
        {
        label: 'Celebrities',
        data: [7.14],
        backgroundColor: 'rgba(55, 102, 255, 0.2)',
        borderColor: 'rgba(55, 102, 255,1)',
        borderWidth: 1,
        },
        {
        label: 'Technology',
        data: [5.28],
        backgroundColor: 'rgba(66, 159, 64, 0.2)',
        borderColor: 'rgba(66, 159, 64, 1)',
        borderWidth: 1,
        },
        {
        label: 'Services',
        data: [4.97],
        backgroundColor: 'rgba(77, 99, 132, 0.2)',
        borderColor: 'rgba(77, 99, 132, 1)',
        borderWidth: 1,
        },
        {
        label: 'Collectibles',
        data: [4.97],
        backgroundColor: 'rgba(88, 162, 235, 0.2)',
        borderColor: 'rgba(88, 162, 235, 1)',
        borderWidth: 1,
        },
        {
        label: 'Transport',
        data: [4.35],
        backgroundColor: 'rgba(99, 206, 86, 0.2)',
        borderColor: 'rgba(99, 206, 86, 1)',
        borderWidth: 1,
        },
        {
        label: 'Freebies',
        data: [3.73],
        backgroundColor: 'rgba(111, 192, 192, 0.2)',
        borderColor: 'rgba(111, 192, 192, 1)',
        borderWidth: 1,
        },
        {
        label: 'Sale',
        data: [3.73],
        backgroundColor: 'rgba(122, 102, 255, 0.2)',
        borderColor: 'rgba(122, 102, 255, 1)',
        borderWidth: 1,
        },
        {
        label: 'Openings',
        data: [3.73],
        backgroundColor: 'rgba(133, 159, 64, 0.2)',
        borderColor: 'rgba(133, 159, 64, 1)',
        borderWidth: 1,
        },
        {
        label: 'Launches',
        data: [3.73],
        backgroundColor: 'rgba(144, 99, 132, 0.2)',
        borderColor: 'rgba(144, 99, 132, 1)',
        borderWidth: 1,
        },
        {
        label: 'NDP Tickets',
        data: [3.11],
        backgroundColor: 'rgba(155, 162, 235, 0.2)',
        borderColor: 'rgba(155, 162, 235, 1)',
        borderWidth: 1,
        },
        {
        label: 'Lottery',
        data: [3.11],
        backgroundColor: 'rgba(166, 206, 86, 0.2)',
        borderColor: 'rgba(166, 206, 86, 1)',
        borderWidth: 1,
        }
    ],
},
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      },
      title: {
        display: true,
        text: 'Barchart: Trends of Singapore\'s Queuing Culture',
        fontFamily: "'Philosopher', sans-serif",
    },
    legend: {
        labels: {
            fontFamily: "'Philosopher', sans-serif",
        }
    }
  },
});

var pieChart = new Chart(pietx, {
    type: 'pie',
    data: {
        labels: ["Food", "HDB", "Condominium", "Events", "Celebrities", 
        "Technology", "Services", "Collectibles", "Transport", "Freebies",
        "Sale", "Openings", "Launches", "NDP Tickets", "Lottery"],
        datasets: [{
          data: [10.25, 8.39, 4.04, 7.45, 7.14, 5.28, 4.97, 4.97, 4.35, 3.73, 3.73, 3.73, 3.73,3.11,3.11],
          backgroundColor: [
            'rgba(11, 99, 132, 0.2)',
            'rgba(22, 162, 235, 0.2)',
            'rgba(33, 206, 86, 0.2)',
            'rgba(44, 192, 192, 0.2)',
            'rgba(55, 102, 255, 0.2)',
            'rgba(66, 159, 64, 0.2)',
            'rgba(77, 99, 132, 0.2)',
            'rgba(88, 162, 235, 0.2)',
            'rgba(99, 206, 86, 0.2)',
            'rgba(111, 192, 192, 0.2)',
            'rgba(122, 102, 255, 0.2)',
            'rgba(133, 159, 64, 0.2)',
            'rgba(144, 99, 132, 0.2)',
            'rgba(155, 162, 235, 0.2)',
            'rgba(166, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(11, 99, 132, 1)',
            'rgba(22, 162, 235, 1)',
            'rgba(33, 206, 86, 1)',
            'rgba(44, 192, 192, 1)',
            'rgba(55, 102, 255, 1)',
            'rgba(66, 159, 64, 1)',
            'rgba(77, 99, 132, 1)',
            'rgba(88, 162, 235, 1)',
            'rgba(99, 206, 86, 1)',
            'rgba(111, 192, 192, 1)',
            'rgba(122, 102, 255, 1)',
            'rgba(133, 159, 64, 1)',
            'rgba(144, 99, 132, 1)',
            'rgba(155, 162, 235, 1)',
            'rgba(166, 206, 86, 1)',
          ],
          borderWidth: 1
        }]
      },
    options: {
      title: {
        display: true,
        text: 'Piechart: Trends of Singapore\'s Queuing Culture',
        fontFamily: "'Philosopher', sans-serif",
    },
    legend: {
        labels: {
            fontFamily: "'Philosopher', sans-serif",
        }
    }
  },
});


 /*
 if ( event.target.className == "pp" ) {
        event.target.style.border = "3px dotted red";
        $(".screen-text").text("HI");
    }
    if ( event.target.className == "bb" ) {
        event.target.style.border = "3px dotted red";
        $(".screen-text").text("HI2");
    } 
*/

document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    event.dataTransfer.setData("Text", event.target.id);
    // Output some text when starting to drag the p element
    document.getElementById("screen").innerHTML = "Drag to the left area.";
    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
  });
  
  // While dragging the p element, change the color of the output text
  document.addEventListener("drag", function(event) {
    document.getElementById("screen").style.color = "red";
  });
  
  // Output some text when finished dragging the p element and reset the opacity
  document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
    document.getElementById("screen").innerHTML = "";
    if ( event.target.id == "p1" ) {
        document.getElementById("p1Text").style.display = "block";
    }else{
        document.getElementById("p1Text").style.display = "none";
    }
    if ( event.target.id == "p2" ) {
        document.getElementById("p2Text").style.display = "block";
    }else{
        document.getElementById("p2Text").style.display = "none";
    }
    if ( event.target.id == "p3" ) {
        document.getElementById("p3Text").style.display = "block";
    }else{
        document.getElementById("p3Text").style.display = "none";
    }
    if ( event.target.id == "p4" ) {
        document.getElementById("p4Text").style.display = "block";
    }else{
        document.getElementById("p4Text").style.display = "none";
    }
    if ( event.target.id == "p5" ) {
        document.getElementById("p5Text").style.display = "block";
    }else{
        document.getElementById("p5Text").style.display = "none";
    }
    if ( event.target.id == "p6" ) {
        document.getElementById("p6Text").style.display = "block";
    }else{
        document.getElementById("p6Text").style.display = "none";
    }
    if ( event.target.id == "p7" ) {
        document.getElementById("p7Text").style.display = "block";
    }else{
        document.getElementById("p7Text").style.display = "none";
    }
    if ( event.target.id == "p8" ) {
        document.getElementById("p8Text").style.display = "block";
    }else{
        document.getElementById("p8Text").style.display = "none";
    }
    if ( event.target.id == "p9" ) {
        document.getElementById("p9Text").style.display = "block";
    }else{
        document.getElementById("p9Text").style.display = "none";
    }
    if ( event.target.id == "p10" ) {
        document.getElementById("p10Text").style.display = "block";
    }else{
        document.getElementById("p10Text").style.display = "none";
    }
  });
  
  /* Events fired on the drop target */
  
  // When the draggable p element enters the droptarget, change the DIVS's border style
  document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "3px dotted red";
    }
  });
  
  // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  // When the draggable p element leaves the droptarget, reset the DIVS's border style
  document.addEventListener("dragleave", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
    }
  });
  
  /* On drop - Prevent the browser default handling of the data (default is open as link on drop)
     Reset the color of the output text and DIV's border color
     Get the dragged data with the dataTransfer.getData() method
     The dragged data is the id of the dragged element ("drag1")
     Append the dragged element into the drop element
  */
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      document.getElementById("screen").style.color = "";
      event.target.style.border = "";
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });

  $(document).ready(function() {
    var slider = document.getElementById("sliderId");
    
    slider.oninput = function() {
      console.log("value: " + this.value);

      if(this.value=="0"){
        $("#cardOne").removeClass("card");
        $("#cardOne").addClass("newCard");
    }else{
        $("#cardOne").addClass("card");
        $("#cardOne").removeClass("newCard");
    }

    if(this.value=="25"){
        $("#cardTwo").removeClass("card");
        $("#cardTwo").addClass("newCard");
    }else{
        $("#cardTwo").addClass("card");
        $("#cardTwo").removeClass("newCard");
    }

      if(this.value=="50"){
        $("#cardThree").removeClass("card");
        $("#cardThree").addClass("newCard");
    }else{
        $("#cardThree").addClass("card");
        $("#cardThree").removeClass("newCard");
    }

    if(this.value=="75"){
        $("#cardFour").removeClass("card");
        $("#cardFour").addClass("newCard");
    }else{
        $("#cardFour").addClass("card");
        $("#cardFour").removeClass("newCard");
    }

    if(this.value=="100"){
        $("#cardFive").removeClass("card");
        $("#cardFive").addClass("newCard");
    }else{
        $("#cardFive").addClass("card");
        $("#cardFive").removeClass("newCard");
    }

    }


  });