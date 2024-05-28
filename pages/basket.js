const basketCof = document.querySelector(".basketCof");


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

// import { menuData } from "../script";

let data =  []
fetch('https://starbucks.yetim.me/menu')
    .then((res) => res.json())
    .then((resJson) => {
        data = resJson
        console.log(data)
    })

function goSelectedCoffee(id) {
    const index = menuData.find(item => item.id === id)
    // titleTag.innerHTML = `${index.name}`
    console.log('Coffee item clicked:', index);
    basketCof.innerHTML = `
                <div class="wrapper df txtwhite">
                    <img src="${index.img}" alt="">
                    <div>
                        <h1>${index.name}</h1>
                        <p>${index.sizes[1].calories} <svg aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width: 16px; height: 16px; overflow: visible; fill: currentcolor;"><path d="M12 1.35C6.118 1.35 1.35 6.118 1.35 12c0 5.882 4.768 10.65 10.65 10.65 5.882 0 10.65-4.768 10.65-10.65 0-5.882-4.768-10.65-10.65-10.65zm0 1.5c5.053 0 9.15 4.097 9.15 9.15s-4.097 9.15-9.15 9.15S2.85 17.053 2.85 12 6.947 2.85 12 2.85zm-.75 7.928v6.486c0 .414.336.75.75.75s.75-.336.75-.75v-6.486c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm1.5-3.056v-.61c0-.415-.336-.75-.75-.75s-.75.335-.75.75v.61c0 .414.336.75.75.75s.75-.336.75-.75z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg></p>
                    </div>
                </div>`
    
}