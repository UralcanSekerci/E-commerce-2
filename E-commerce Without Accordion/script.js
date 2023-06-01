

// BURGER BUTTON ANIMATION / SIDEBAR OPEN/HIDE
const btn = document.querySelector(".burger-button")
const sidebar = document.querySelector(".sidebar")
const closebtn = document.querySelector(".close-btn")



btn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar")
})

closebtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar")
})
sidebar.addEventListener("mouseleave", function () {
  sidebar.classList.remove("show-sidebar")
})


// MINI CAROUSEL 
let items = document.querySelectorAll('.minitotal .mini')

items.forEach((el) => {
  const minPerSlide = 5
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

// SCROLL TO TOP
var scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// OPENING SEPET
let sepetEkle = document.querySelector(".sepet-ekle");
let sepet = document.querySelector(".sepet");

sepetEkle.addEventListener("click", function () {
  sepet.classList.toggle("visible");
});

document.addEventListener("click", function (event) {
  if (!sepet.contains(event.target) && !sepetEkle.contains(event.target)) {
    sepet.classList.remove("visible");
  }
});

let scroll2 = document.querySelector(".scroll-to-top-btn");

scroll2.addEventListener("mouseenter", function () {
  scroll2.style.transform = "translateY(-5px)";
  console.log("scroll2.style.transform");

});

scroll2.addEventListener("mouseleave", function () {
  scroll2.style.transform = "";
});

// ADDING TO SEPET

const eklebtn = document.querySelectorAll(".ekle")
const card = document.getElementsByClassName(".card")
const shopbtn = document.getElementsByClassName(".sepet-ekle")
const shopdiv = document.getElementsByClassName(".sepet")

class Shopping {
  constructor(image, title, eth) {
    this.image = image;
    this.title = title;
    this.eth = eth;
  }
}

class Ekle {
  addToCart(shopping) {
    const urunler = document.querySelector(".urunler")

    const urunResim = document.createElement("div");
    urunResim.classList.add("urun-resim");

    const urunResimSrc = document.createElement("img");
    urunResimSrc.src = shopping.image

    const urunİsim = document.createElement("span");
    urunİsim.classList.add("urun-isim")
    urunİsim.textContent = shopping.title

    const para = document.createElement("span");
    para.textContent = shopping.eth

    const olusturucu = document.createElement("div");
    olusturucu.classList.add("d-flex", "justify-content-between", "align-items-center");

    urunResim.appendChild(urunResimSrc);
    olusturucu.appendChild(urunResim);
    olusturucu.appendChild(urunİsim);
    olusturucu.appendChild(para);
    urunler.appendChild(olusturucu);
  }
}

eklebtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    element = e.target
    let image = element.parentElement.parentElement.parentElement.children[0].children[0].src
    let title = element.parentElement.parentElement.parentElement.children[1].children[0].innerHTML
    let eth = element.parentElement.parentElement.parentElement.children[1].children[1].children[0].innerHTML
    let shopping = new Shopping(image, title, eth)
    let ekle = new Ekle()
    ekle.addToCart(shopping)
  })
})


// NAV-SCROLL

