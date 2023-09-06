// let count = 0;
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (list) {
//     list.addEventListener("click", function (e) {
//     const style = e.currentTarget.classList;
// if(style.contains("increase")) {
//     count ++;
// }
// else if(style.contains("decrease")) {
//     count --;
// }
// else{
//     count = 0;
// }
// if(count > 0) {
//     value.style.color = "green";
// }
// if(count < 0) {
//     value.style.color = "red";
// }
// if(count === 0) {
//     value.style.color = "black";
// }
// value.textContent = count;
//     });
// });



// const reviews = [
//     {
//         Id: 1,
//         name: "Rose chep",
//         job: "Web Developer",
//         img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-964894534-1600088334.jpg",
//         text: "Would recommend anyone to get their glasses here.Top quality!",
//     },
//     {
//         id: 2,
//         name: "josh Werner",
//         job:  "Ux Designer",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIOfjYdgqb2559aXQSwMOfEfQoCePwANbKw&usqp=CAU",
//         text: "Since i got this glasses my coding life has improved significantly due to reduced stress on my eyes",
//     }
// ];
// const img = document.getElementById("img");
//  const author = document.getElementById("author");
//  const job = document.getElementById("job");
//  const description = document.getElementById("description");

//  const prev = document.querySelector(".prev");
//  const next = document.querySelector(".next");
//  const random = document.querySelector(".random");

//  let currentItem = 0;

//  window.addEventListener('DOMContentLoaded', function() {
//     showPerson(currentItem);
//  })

//  function showPerson(person) {
//     const item = reviews[currentItem];
//     img.src = item.img;
//     author.textContent = item.author;
//     job.textContent = item.job;
//     description.textContent = item.description;
//  }

//  next.addEventListener("click", function() {
//     currentItem++;
   
//     if(currentItem > reviews.length - 1) {
//         currentItem = 0;
//     }
//     showPerson(currentItem);
//  })
//  prev.addEventListener("click", function() {
//     currentItem--;
//     if(currentItem = 0) {
//         currentItem < reviews.length - 1;
        
//     }
//     showPerson(currentItem);
//  })
//  random.addEventListener("click", function() {
//     currentItem = Math.floor(Math.random() * reviews.length);
//     showPerson();
//  })

const coding = document.querySelector(".coding");
const links = document.querySelector(".links");

coding.addEventListener("click", function() {
    coding.classList.toggle("active");
    links.classList.toggle("active");
});