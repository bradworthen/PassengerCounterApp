//initialize the count as 0
let count = 0
let savedCount = document.getElementById("save-el")

//listen for clicks on the increment button in HTML with "on-click" in button
//increment the count variable when the button is clicked with function increment()
//change the count-el in the HTML to reflect the new count
function increment()
{
   count++
   document.getElementById("count-el").textContent = count
}

function save()
{
   let subStringCount = count + " - "
   savedCount.textContent += subStringCount
   count = 0
   document.getElementById("count-el").textContent = count
   //console.log(count)
}
