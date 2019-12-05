//Insert try catch clause to catch unexpected errors like NaN output

//Calculate Tip
function calculateTip(){
   var billAmt, serviceQual, numOfPeople, totalTip;
   billAmt = document.getElementById("billamt").value;
   console.log('Bill amount: ', billAmt);
   serviceQual = document.getElementById("serviceQual").value;
   console.log('Service quality: ', serviceQual);
   numOfPeople = document.getElementById("peopleamt").value;
   console.log('Number of people: ', numOfPeople);
   totalTip = document.getElementById('totalTip');

   //validate input
   if(billAmt === "" || serviceQual == 0){
      console.warn('Bill amount is empty');
      alert("Please enter values");
      return;
   }

   //check to see if input is empty or less than or equal to 1
   if (numOfPeople === "" || numOfPeople <= 1){
      numOfPeople = 0;
      document.getElementById("each").hidden = true;
   } else {
      document.getElementById("each").style.display = "block";
   }

   //calculate tip
   var total = (billAmt * serviceQual) / numOfPeople;
   //round to two decimal places
   if(isNaN(total)){
      console.warn('Total is NaN:', total);
      var dollarSign = document.getElementById('totalTip');
      dollarSign.innerHTML = "";
      var contentBefore = window.getComputedStyle(document.querySelector('#totalTip'), ':before').hidden = true;
      totalTip.hidden = false;
      totalTip.innerHTML('Insert Numeric values.')
      console.log(dollarSign);
   } else {
   total = Math.round(total * 100) / 100;
   //this allows us to always have two digits after decimal point
   total = total.toFixed(2);

   document.getElementById("totalTip").style.display = "block";
   document.getElementById("tip").innerHTML = total;
   }
   //display the tip
   //document.getElementById("totalTip").style.display = "block";
   //document.getElementById("tip").innerHTML = total;
} //end of calculateTip function

//hide the tip amount on load
document.getElementById("totalTip").hidden = true;
document.getElementById("each").hidden = true; //note: hiding #TotalTip hides #each.

//click to call function
document.getElementById("calculate").onclick = function(){
   calculateTip();
}