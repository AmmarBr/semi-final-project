// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";

//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);


// 
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear()+5,
    nextYear = yyyy + 8,
    dayMonth = "12/30/",
    birthday = dayMonth + yyyy;

  today = mm + ":" + dd + ":" + yyyy;
  
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached

      //seconds
    }, 1000)
}());
// 

const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

// الحدث لزيادة القيمة
incrementBtn.addEventListener("click", () => {
  let value = parseInt(counterValue.textContent);
  counterValue.textContent = value + 1;
});

// الحدث لإنقاص القيمة
decrementBtn.addEventListener("click", () => {
  let value = parseInt(counterValue.textContent);
  if (value > 1) { // تأكد أن القيمة لا تقل عن 0
    counterValue.textContent = value - 1;
  }
});