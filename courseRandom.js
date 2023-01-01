const courses = [
    {
      id: 1,
      category: "JS",
      price: 19.99,
      img: "/assetes/javascriptfull.png",
      desc: `Js Totorial`,
    },
    {
      id: 2,
      category: "Php",
      price: 23.99,
      img: "/assetes/php3.png",
      desc: `Php Totorial`,
    },
    {
      id: 3,
      category: "Css",
      price: 19.99,
      img: "/assetes/css1.png",
      desc: `Css Totorial`,
    },
    {
      id: 4,
      category: "TypeScript",
      price: 19.99,
      img: "/assetes/typescript.png",
      desc: `TypeScript Totorial`,
    },
    {
      id: 5,
      category: "TypeScript",
      price: 30.99,
      img: "/assetes/typS.jpg",
      desc: `TypeScript for React Developers`,
    },
    {
      id: 6,
      category: "Sass",
      price: 25.99,
      img: "/assetes/sass.png",
      desc: `The Beginner's Guide to Sass`,
    },
    {
      id: 7,
      category: "JS",
      price: 15.99,
      img: "/assetes/js5.jpg",
      desc: `How to Build a Dropdown Menu with JavaScript`,
    },
    {
      id: 8,
      category: "JS",
      price: 16.99,
      img: "/assetes/js4.png",
      desc: `JavaScript String to Boolean – How to Parse a Boolean in JS`,
    },
    {
      id: 9,
      category: "Bootstrap",
      price: 5.99,
      img: "/assetes/bootstrap.png",
      desc: `Full Bootstrap 5 Tutorial for Beginners`,
    },
    {
      id: 10,
      category: "React",
      price: 15.99,
      img: "/assetes/react.png",
      desc: `How to Have Fun Building React Apps`,
    },
  ];


//select items 

const card= document.querySelector(".cardcourses");
const img= document.querySelector(".img");
const cardBody= document.querySelector(".card-body");
const text= document.querySelector(".desc");
const price= document.querySelector(".price");


const cotainerItem =document.querySelector('.contItems');



window.addEventListener('DOMContentLoaded',function(){
    var item1 = courses[Math.floor(Math.random()*courses.length)];
    
    var item2 = courses[Math.floor(Math.random()*courses.length)];
    
    var item3 = courses[Math.floor(Math.random()*courses.length)];
    

    let list = [item1,item2,item3]
    displayItems(list);
    
})


function displayItems (arrayItem){
    let items = arrayItem.map(function(e){
        
        return ` <div class="col-lg-3    cardcourses card ">
        <img src=${e.img} class="img card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">${e.desc} Totorial</p>
            <h5 class="card-title">$${e.price}</h5>
        </div>
      </div>`;
    });
    items = items.join('');
    

    cotainerItem.innerHTML = items;
    
}



