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

//items
const sectionItm = document.querySelector(".sectionItm");
const contaiBtn = document.querySelector(".courseCatg");
//affiche  items after loaded

//loading items by using function displayItems
//creat button category auto
window.addEventListener("DOMContentLoaded", function () {
  displayItems(courses);

  const catgoryNmae = courses.reduce(
    function (accumilateur, valeurCourante) {
      if (!accumilateur.includes(valeurCourante.category)) {
        accumilateur.push(valeurCourante.category);
      }

      return accumilateur;
    },
    ["All"]
  );

  const CatgBtn = catgoryNmae
    .map(function (e) {
      return ` <p><a class="display-7  btnCatg  text-decoration-none text-secondary " data-id="${e}" href="#">${e}</a></p>`;
    })
    .join("");

  contaiBtn.innerHTML = CatgBtn;

  //loaded and add eventlistner
  //category
  const btnCtg = document.querySelectorAll(".btnCatg");

  btnCtg.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const courseCatg = courses.filter(function (list) {
        if (list.category === category) {
          return list;
        }
      });
      if (category === "All") {
        displayItems(courses);
      } else {
        displayItems(courseCatg);
      }
    });
  });
});

//function display courses
function displayItems(arrayItem) {
  let items = arrayItem.map(function (e) {
    return `<div class="col-3 cardcourses card mb-md-3 my-sm-3 ">
        <img src=${e.img} class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">${e.desc}</p>
            <h5 class="card-title">$${e.price}</h5>
        </div>
      </div>`;
  });
  items = items.join("");

  sectionItm.innerHTML = items;
}

const btnCtg = document.querySelectorAll(".btnCatg");

btnCtg.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const courseCatg = courses.filter(function (list) {
      if (list.category === category) {
        return list;
      }
    });
    if (category === "All") {
      displayItems(courses);
    } else {
      displayItems(courseCatg);
    }
  });
});

//text filter
const form = document.querySelector(".inpForm");
const searchInp = document.querySelector(".searchInp");

form.addEventListener("keyup", () => {
  const searchValue = searchInp.value;

  coursesFilter = courses.filter((c) => {
    return c.desc.toLowerCase().includes(searchValue);
  });

  displayItems(coursesFilter);
});

//rang filter
const formRang = document.querySelector(".rangForm");
const rangeInp = document.querySelector(".inpRange");

rangeInp.addEventListener("change", function () {
  let rangeVal = rangeInp.value;
  const coursePrice = courses.filter((e) => {
    if (e.price <= rangeVal) {
      return e;
    }
  });
  displayItems(coursePrice);
});

const SectionRand = document.querySelector(".courseRand");
