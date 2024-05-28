const drinks = document.querySelector("#drinks");
const menuAll = document.querySelector(".menu-all");
const coffees = document.querySelector(".coffees");
const content = document.querySelector(".content");
const num = document.querySelector(".num");
const otherCatg = document.querySelector(".otherCatg");
const title = document.querySelector("#title");
const mTitle = document.querySelector("#mTitle");
const h1 = document.querySelector("#h1");
const titleTag = document.querySelector("#titleTag");


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

let categoriesData=[]
let menuData =[]

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
                        <a href="#" onclick="getCoffee('${item.subcategory}')">
                            <img src="${item.img}">
                            <h3>${item.subcategory}</h3>
                        </a>
                    </div>`).join('')
        })
}


function fetchCategories() {
    fetch('https://starbucks.yetim.me/categories')
        .then((res) => res.json())
        .then((resJson) => {
            categoriesData = resJson
            console.log(categoriesData)
            categoriesData.forEach(category => {
                drinks.innerHTML += `<li onclick="getCoffee('${category}')"><a href="#">${category}</a></li>`
            })
        })
}

fetchCategories();
fetchMenu();

function getCoffee(category) {
    coffees.innerHTML = ''
    // otherCatg.innerHTML = ''
    h1.style.display='none'
    const filteredCoffee = menuData.filter(item => item.subcategory === category).map(item => {
        mTitle.innerHTML = `<p>Menu/ <b>${item.subcategory}</b></p>`
        title.innerHTML = `${item.subcategory}`
        return `<div class="coffee">
                    <a href="basket.htm" onclick="goSelectedCoffee(${item.id})">
                        <img src="${item.img}">
                        <h3>${item.name}</h3>
                    </a>
                </div>`;
    }).join('');
    coffees.innerHTML = filteredCoffee;
    console.log('salam');
}

function goSelectedCoffee(id) {
    const index = menuData.find(item => item.id === id)
    titleTag.innerHTML = `${index.name}`
    console.log('Coffee item clicked:', index);
}

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
