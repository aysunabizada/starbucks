const drinks = document.querySelector("#drinks");
const food = document.querySelector("#food");
const athome = document.querySelector("#athome");
const merc = document.querySelector("#merc");
const menuAll = document.querySelector(".menu-all");
const coffees = document.querySelector(".coffees");


//hamburger component
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
});

//accardions
var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }

let categoriesData;
let menuData;

fetch('https://starbucks.yetim.me/categories')
    .then((res) => res.json())
    .then((resJson) => {
        categoriesData = resJson
        console.log(categoriesData)
        for (let i = 0; i < categoriesData.length; i++) {
            drinks.innerHTML += `<li><a href="#">${categoriesData[i]}</a></li>`
        }
    })


function fetchMenu() {
    fetch('https://starbucks.yetim.me/menu')
        .then((res) => res.json())
        .then((resJson) => {
            menuData = resJson
            console.log(menuData)
            const uniqueItems = [...new Set(menuData.map(item => item.subcategory))].map(subcategory => {
                return menuData.find(item => item.subcategory === subcategory);
            })
            coffees.innerHTML = uniqueItems.map(item => 
                `<div class="coffee">
                        <a href="#">
                            <img src="${item.img}">
                            <h3>${item.subcategory}</h3>
                        </a>
                    </div>`).join('')
        })
}

fetchMenu();

function Favorites() {
    menuAll.innerHTML = ''
    menuAll.innerHTML = `
        <div class="previous wrapper">
            <h2 class="p20">Favorites</h2>
            <img src="../img/kaset.webp" style="width: 220px; padding: 20px 0;" alt="">
            <h2>Save your favorite <br> mixes</h2>
            <p class="p20">Use the heart to save <br> customizations. Your favorites will <br> appear here to order again.</p>
            <div class="nav-btns">
                <button>Sign in</button>
                <button>Join now</button>
            </div>
        </div>`
}

function Previous() {
    menuAll.innerHTML = ''
    menuAll.innerHTML = `
        <div class="previous wrapper">
            <h2 class="p20">Previous</h2>
            <img src="../img/moon.webp" alt="">
            <h2>When history repeats <br> itself</h2>
            <p class="p20">Previous orders will appear here to <br> quickly order again.</p>
            <div class="nav-btns">
                <button>Sign in</button>
                <button>Join now</button>
            </div>
        </div>`
}

const content = document.querySelector(".content")
const num = document.querySelector(".num")
function ulduzlar(arg) {
    if(arg == 25){
        content.innerHTML = `
        <div class="box p20">
                        <img src="../img/25.webp" alt="">
                        <div class="text">
                            <h2>Customize your drink</h2>
                            <p class="p20">Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</p>
                        </div>
                    </div>`
    }else if (arg == 100){
        content.innerHTML = `
        <div class="box p20">
                        <img src="../img/100.webp" alt="">
                        <div class="text">
                            <h2>Brewed hot or iced coffee or tea, bakery item, packaged snack and more</h2>
                            <p class="p20">Treat yourself to an iced coffee, buttery croissant, bag of chips and more.</p>
                        </div>
                    </div>`
    }else if(arg == 200){
        content.innerHTML = `
        <div class="box p20">
                        <img src="../img/200.webp" alt="">
                        <div class="text">
                            <h2>Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</h2>
                            <p class="p20">Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</p>
                        </div>
                    </div>`
    }else if(arg == 300){
        content.innerHTML = `
        <div class="box p20">
                        <img src="../img/300.webp" alt="">
                        <div class="text">
                            <h2>Sandwich, protein box or at-home coffee</h2>
                            <p class="p20">Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.</p>
                        </div>
                    </div>`
    }else{
        content.innerHTML = `
        <div class="box p20">
                        <img src="../img/400.webp" alt="">
                        <div class="text">
                            <h2>Select Starbucks® merchandise</h2>
                            <p class="p20">Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</p>
                        </div>
                    </div>`
    }
}
