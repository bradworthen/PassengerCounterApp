// initialize the count as 0 and grab the HTML element that will update the count
let count = 0;
const savedCount = document.getElementById("save-el");

// listen for clicks on the "INCREMENT" button in HTML with "on-click"
//    increment the count variable when the button is clicked with function increment()
//    change the count-el in the HTML to reflect the new count
function increment()
{
   count++;
   document.getElementById("count-el").textContent = count;
}

// listen for clicks on the "SAVE" button in HTML with "on-click"
//    create a variable that can hold the count
//    detect if a count has been saved or not for formatting
//    update the displayed record with the latest count
//    reset the count to a value of 0 and display the update
function save()
{
   let subStringCount = '-' + count;

   if(savedCount.textContent === "Previous Counts: ")
   {
      subStringCount = count;
   }

   savedCount.textContent += subStringCount;
   
   count = 0;
   document.getElementById("count-el").textContent = count;
}
