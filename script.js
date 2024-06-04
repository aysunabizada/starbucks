const drinks = document.querySelector("#drinks");
const menuAll = document.querySelector(".menu-all");
const coffees = document.querySelector(".coffees");
const content = document.querySelector(".content");
const burger = document.querySelector(".burgermenu");
// const basketCof = document.querySelector(".basketCof");
// const otherCatg = document.querySelector(".otherCatg");
const title = document.querySelector("#title");
const mTitle = document.querySelector("#mTitle");
const h1 = document.querySelector("#h1");
const main = document.querySelector("main")


//hamburger component
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
});

//burgerrrrrr
function openBurger(){
    burger.classList.toggle('open')
}
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

let categoriesData = [];
let menuData = [];

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
fetchMenu();

fetch('https://starbucks.yetim.me/categories')
    .then((res) => res.json())
    .then((resJson) => {
        categoriesData = resJson
        console.log(categoriesData)
        categoriesData.forEach(category => {
            drinks.innerHTML += `<li onclick="getCoffee('${category}')"><a href="#">${category}</a></li>`
        })
    })



function getCoffee(category) {
    coffees.innerHTML = ''
    // otherCatg.innerHTML = ''
    h1.style.display='none'
    const filteredCoffee = menuData.filter(item => item.subcategory === category).map(item => {
        mTitle.innerHTML = `<p>Menu/ <b>${item.subcategory}</b></p>`
        title.innerHTML = `${item.subcategory}`
        return `<div class="coffee">
                    <a href="#" onclick="goSelectedCoffee(${item.id})">
                        <img src="${item.img}">
                        <h3>${item.name}</h3>
                    </a>
                </div>`;
    }).join('');
    coffees.innerHTML = filteredCoffee;
    console.log('salam');
}

// function goSelectedCoffee(id) {
//     const index = menuData.find(item => item.id === id)
//     titleTag.innerHTML = `${index.name}`
//     console.log('Coffee item clicked:', index);
//     basketCof.innerHTML = `
//                 <div class="wrapper df txtwhite">
//                     <img src="${index.img}" alt="">
//                     <div>
//                         <h1>${index.name}</h1>
//                         <p>${index.sizes[1].calories} <svg aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width: 16px; height: 16px; overflow: visible; fill: currentcolor;"><path d="M12 1.35C6.118 1.35 1.35 6.118 1.35 12c0 5.882 4.768 10.65 10.65 10.65 5.882 0 10.65-4.768 10.65-10.65 0-5.882-4.768-10.65-10.65-10.65zm0 1.5c5.053 0 9.15 4.097 9.15 9.15s-4.097 9.15-9.15 9.15S2.85 17.053 2.85 12 6.947 2.85 12 2.85zm-.75 7.928v6.486c0 .414.336.75.75.75s.75-.336.75-.75v-6.486c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm1.5-3.056v-.61c0-.415-.336-.75-.75-.75s-.75.335-.75.75v.61c0 .414.336.75.75.75s.75-.336.75-.75z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg></p>
//                     </div>
//                 </div>`
// }
function goSelectedCoffee(id) {
    menuAll.innerHTML = ''
    const index = menuData.find(item => item.id === id)
    console.log('Coffee item clicked:', index);
    main.innerHTML = `
            <div class="HereIsBasket">
                <div class="wrapper p20">Menu/ ${index.subcategory} / <b>${index.name}</b></div>
                <div class="basketCof">
                    <div class="wrapper df txtwhite">
                        <img src="${index.img}" alt="">
                        <div>
                            <h1>${index.name}</h1>
                            <p>${index.sizes[1].calories} <svg aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width: 16px; height: 16px; overflow: visible; fill: currentcolor;"><path d="M12 1.35C6.118 1.35 1.35 6.118 1.35 12c0 5.882 4.768 10.65 10.65 10.65 5.882 0 10.65-4.768 10.65-10.65 0-5.882-4.768-10.65-10.65-10.65zm0 1.5c5.053 0 9.15 4.097 9.15 9.15s-4.097 9.15-9.15 9.15S2.85 17.053 2.85 12 6.947 2.85 12 2.85zm-.75 7.928v6.486c0 .414.336.75.75.75s.75-.336.75-.75v-6.486c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm1.5-3.056v-.61c0-.415-.336-.75-.75-.75s-.75.335-.75.75v.61c0 .414.336.75.75.75s.75-.336.75-.75z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg></p>
                        </div>
                    </div>
                </div>
                <div class="table df wrapper">
                    <div class="table-left p20">
                        <h2>Size options</h2>
                        <div class="fieldset">
                            <div class="cup txtcenter">
                                <span id="cup1" class="c"></span>
                                <h3>Short</h3>
                                <p>8 fl oz</p>
                            </div>
                            <div class="cup txtcenter">
                                <span id="cup2" class="c"></span>
                                <h3>Tall</h3>
                                <p>12 fl oz</p>
                            </div>
                            <div class="cup txtcenter">
                                <span id="cup3" class="c"></span>
                                <h3>Grande</h3>
                                <p>16 fl oz</p>
                            </div>
                            <div class="cup txtcenter">
                                <span id="cup4" class="c"></span>
                                <h3>Venti</h3>
                                <p>20 fl oz</p>
                            </div>
                        </div>
                        <p class="txtgray"><svg aria-hidden="true" class="valign-middle color-black60 mr2" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;"><path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path><path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path></svg> Select a store to view availability</p>
                    </div>
                    <div class="table-right p20">
                        <h2>What's included</h2> <br>
                        <p id="legend">Add-ins</p>
                        <select name="" id="">
                            <option value="">Water</option>
                            <option value="">Extra Water</option>
                            <option value="">Light Water</option>
                            <option value="">No Water</option>
                        </select>
                        <p id="legend">Espresso and Shot Options</p>
                        <select name="" id="">
                            <option value="">Signature Espresso Roast</option>
                            <option value="">Blonde Espresso Roast</option>
                            <option value="">Decaf Espresso Roast</option>
                            <option value="">1/3 Espresso Roast</option>
                            <option value="">1/2 Espresso Roast</option>
                            <option value="">2/3 Espresso Roast</option>
                        </select>
                        <p id="legend">Espresso and Shot Options</p>
                        <div class="shorts">
                            <p>Shorts</p>
                            <div>
                                <button>‒</button>
                                <span> 2 </span>
                                <button>+</button>
                            </div>
                        </div>
                        <button id="custom"><svg aria-hidden="true" class="valign-middle mr2 color-gold" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width: 24px; height: 24px; overflow: visible; fill: currentcolor;"><path d="M9.818 3.166a.55.55 0 0 0-.271.572l.914 5.377-4.908 2.895a.55.55 0 0 0 .174 1.013l5.587 1.112.913 5.377a.55.55 0 0 0 1.02.183l2.806-4.867 5.59.524a.55.55 0 0 0 .449-.928l-3.856-4.049 2.301-5.094a.55.55 0 0 0-.73-.726l-5.102 2.34-4.258-3.666a.55.55 0 0 0-.629-.063zm1.069 1.893 3.367 2.9a.55.55 0 0 0 .588.082l4.088-1.875-1.848 4.094a.55.55 0 0 0 .102.607l3.097 3.252-4.476-.42a.55.55 0 0 0-.53.274l-2.218 3.847-.723-4.244a.55.55 0 0 0-.434-.447l-4.545-.904 3.99-2.354a.55.55 0 0 0 .264-.566ZM17.375.848a.25.25 0 0 0-.25.148c-.247.566-.334.828-.395.893a.25.25 0 0 0-.005.006c-.03.034-.072.062-.186.113-.114.05-.288.117-.521.23a.25.25 0 0 0-.036.428c.21.151.368.247.471.316.103.07.139.102.162.141a.25.25 0 0 0 .004.008c.047.073.087.345.23.943a.25.25 0 0 0 .473.043c.248-.565.335-.827.395-.892a.25.25 0 0 0 .004-.006c.03-.035.073-.063.187-.114.114-.05.286-.118.52-.232a.25.25 0 0 0 .037-.428c-.21-.15-.368-.245-.47-.314-.104-.07-.142-.104-.165-.143a.25.25 0 0 0-.004-.006c-.047-.073-.087-.346-.23-.945a.25.25 0 0 0-.221-.19Zm-.086.972c.03.122.052.328.117.43.08.13.19.215.309.295.023.016.062.044.088.06a8.775 8.775 0 0 0-.098.043.988.988 0 0 0-.357.239c-.082.09-.138.29-.19.406-.03-.123-.051-.33-.117-.432a.974.974 0 0 0-.31-.295l-.088-.058.1-.045a.971.971 0 0 0 .357-.238c.081-.09.137-.29.19-.405zm.805 16.998a.25.25 0 0 0-.235.143c-.373.782-.477 1.131-.615 1.26a.25.25 0 0 0-.006.004c-.134.132-.479.212-1.265.54a.25.25 0 0 0-.016.456c.763.384 1.099.488 1.225.63a.25.25 0 0 0 .005.006c.13.139.21.494.53 1.301a.25.25 0 0 0 .457.016c.373-.782.477-1.132.615-1.26a.25.25 0 0 0 .006-.006c.134-.133.477-.213 1.264-.54a.25.25 0 0 0 .017-.454c-.762-.384-1.099-.488-1.224-.63a.25.25 0 0 0-.006-.007c-.13-.138-.21-.493-.53-1.3a.25.25 0 0 0-.222-.159Zm-.03.836c.121.358.227.76.415.961.186.21.573.348.925.502-.361.129-.757.237-.957.434-.2.187-.334.58-.478.928-.121-.36-.227-.762-.416-.963-.186-.209-.572-.345-.922-.498.36-.129.755-.24.955-.436.2-.187.334-.58.478-.928zM22.5 8.75a.754.754 0 0 0-.75.75c0 .411.339.75.75.75s.75-.339.75-.75a.754.754 0 0 0-.75-.75zm0 .5c.141 0 .25.109.25.25 0 .141-.109.25-.25.25a.246.246 0 0 1-.25-.25c0-.141.109-.25.25-.25zm-19 6.5a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75.75.75 0 0 1 .75-.75.75.75 0 0 1 .75.75Zm1.5-10c-.687 0-1.25.563-1.25 1.25S4.313 8.25 5 8.25 6.25 7.687 6.25 7 5.687 5.75 5 5.75Zm0 .5c.417 0 .75.333.75.75s-.333.75-.75.75A.746.746 0 0 1 4.25 7c0-.417.333-.75.75-.75Zm5.746 7.771-8.41 8.41a.55.55 0 0 0 .777.78l8.328-8.328-.127-.748z"></path></svg> Customize</button>
                    </div>
                </div>
                <div class="lastDiv txtwhite p20">
                    <div class="wrapper">
                        <p>200★ item</p>
                        <p>Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.</p>
                        <p>15 calories, 0g sugar, 0g fat <svg aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width: 16px; height: 16px; overflow: visible; fill: currentcolor;"><path d="M12 1.35C6.118 1.35 1.35 6.118 1.35 12c0 5.882 4.768 10.65 10.65 10.65 5.882 0 10.65-4.768 10.65-10.65 0-5.882-4.768-10.65-10.65-10.65zm0 1.5c5.053 0 9.15 4.097 9.15 9.15s-4.097 9.15-9.15 9.15S2.85 17.053 2.85 12 6.947 2.85 12 2.85zm-.75 7.928v6.486c0 .414.336.75.75.75s.75-.336.75-.75v-6.486c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm1.5-3.056v-.61c0-.415-.336-.75-.75-.75s-.75.335-.75.75v.61c0 .414.336.75.75.75s.75-.336.75-.75z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg></p> <br>
                        <button>Full nutrition & ingredients list</button>
                    </div>
                </div>
                <div class="fixed">
                    <button id="ordr" onclick="addOrder()">Add to Order</button>
                    <div class="fixedGreen">
                        <div class="locator"><a href="https://www.starbucks.com/menu/store-locator">
                                <div>
                                    <p class="txtgray">For item avaibility</p>
                                    <h4>Choose a store</h4>
                                </div>
                                <svg aria-hidden="true" class="valign-middle ml2 color-white" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width: 18px; height: 18px; overflow: visible; fill: currentcolor;"><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path></svg>
                        </a></div>
                        <span id="bag"><h3 id="basketCount"> 2 </h3></span>
                    </div>
                </div>
            </div>`
    
}
// const basketCount = document.querySelector("#basketCount");
// let bCount = 0;
// function addOrder() {
//     console.log("noldu pasinyan?");
//     bCount++;
//     basketCount.innerText = bCount;
// }


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
