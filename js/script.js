/*دکمه بالا*/
$(document).ready(function () {
  $(document).on("scroll", function () {
    let st = $(this).scrollTop();
    if (st > 350) {
      $("#top").fadeIn(350);
    } else {
      $("#top").fadeOut(350);
    }
  });
  $("#top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500,
      "swing"
    );
  });
});

/*جستجو کامپیوتر*/
let search1 = document.getElementById("search1");
let search3 = document.getElementById("search3");
let close = document.getElementById("close");
search3.addEventListener("click", function () {
  search1.style.display = "block";
});
close.addEventListener("click", function () {
  search1.style.display = "none";
});

/*عکس محصول*/
let image1 = document.querySelectorAll(".image1");
let image2 = document.getElementById("image2");
image1.forEach((elem) => {
  elem.addEventListener("click", function () {
    image2.src = `${elem.src}`;
  });
});
/*اضافه کردن محصول*/
let plus = document.getElementById("plus");
let count = document.getElementById("count");
let minus = document.getElementById("minus");
let counter = 0;
plus.addEventListener("click", plusCounter);
function plusCounter() {
  counter++;
  count.innerHTML = counter;
}
plusCounter();
minus.addEventListener("click", minusCounter);
function minusCounter() {
  if (counter > 1) {
    counter--;
    count.innerHTML = counter;
  }
}
/*سبدخرید*/
let sabad = document.getElementById("sabad");
let par = document.getElementById("par");
let close2 = document.getElementById("close2");
sabad.addEventListener("click", function () {
  par.style.display = "block";
});
close2.addEventListener("click", function () {
  par.style.display = "none";
});
let plus1 = document.getElementById("plus1");
let count1 = document.getElementById("count1");
let minus1 = document.getElementById("minus1");
plus1.addEventListener("click", plusCounter1);
function plusCounter1() {
  counter++;
  count1.innerHTML = counter;
  changePrice();
}
count1.innerHTML = counter;
minus1.addEventListener("click", minusCounter1);
function minusCounter1() {
  if (counter > 1) {
    counter--;
    count1.innerHTML = counter;
    changePrice();
  }
}
function changePrice() {
  let finalPrice = document.getElementById("totalPrice");
  let price = `${counter * 700000}`;
  let finalP = [];
  for (i in price) {
    if (i == 0) {
      finalP.push(price[price.length - 1]);
    } else {
      price = `${Math.floor((counter * 700000) / 10 ** i)}`;
      finalP.push(price[price.length - 1]);
      if (i % 3 == 2) {
        finalP.push(",");
      }
    }
  }
  if (finalP.length % 3 == 2) {
    finalP.pop();
  }
  finalPrice.innerHTML = finalP.reverse().join("");
}
let zobale = document.getElementById("zobale");
zobale.addEventListener("click", function () {
  counter = 0;
  plusCounter1();
});
changePrice();
/*توضیحات بیشتر*/
let tozihat = document.querySelectorAll(".tozihat");
let tContainer = document.querySelectorAll(".tContainer");
dActive();
tozihat[0].classList.add("active1");

tContainer[0].classList.remove("hide");
function dActive() {
  tozihat.forEach((elem, index) => {
    elem.classList.remove("active1");
    tContainer[index].classList.add("hide");
  });
}
tozihat.forEach((elem, index) => {
  elem.addEventListener("click", function () {
    dActive();
    elem.classList.add("active1");
    tContainer[index].classList.remove("hide");
  });
});
/*منوی همبرگری*/
let btn = document.getElementById("ham1");
let close10 = document.getElementById("close10");
let menha = document.getElementById("vertical");
let list = document.getElementById("list1");
btn.addEventListener("click", function () {
  list.style.display = "block";
});
close10.addEventListener("click", function () {
  list.style.display = "none";
});
let open1 = document.getElementById("open1");
let list2 = document.getElementById("list2");

open1.addEventListener("click", function () {
  list2.classList.toggle("opa");
  menha.classList.toggle("hide");
});
let open2 = document.getElementById("open2");
let list3 = document.getElementById("list3");
let menha1 = document.getElementById("vertica2");

open2.addEventListener("click", function () {
  list3.classList.toggle("opa");
  menha1.classList.toggle("hide");
});
let open3 = document.getElementById("open3");
let list4 = document.getElementById("list4");
let menha2 = document.getElementById("vertica3");

open3.addEventListener("click", function () {
  list4.classList.toggle("opa");
  menha2.classList.toggle("hide");
});
let open4 = document.getElementById("open4");
let list5 = document.getElementById("list5");
let menha3 = document.getElementById("vertica4");

open4.addEventListener("click", function () {
  list5.classList.toggle("opa");
  menha3.classList.toggle("hide");
});
let open5 = document.getElementById("open5");
let list6 = document.getElementById("list6");
let menha4 = document.getElementById("vertica5");

open5.addEventListener("click", function () {
  list6.classList.toggle("opa");
  menha4.classList.toggle("hide");
});
let open6 = document.getElementById("open6");
let list7 = document.getElementById("list7");
let menha5 = document.getElementById("vertica6");

open6.addEventListener("click", function () {
  list7.classList.toggle("opa");
  menha5.classList.toggle("hide");
});
/*جستجوی موبایل*/
let search4 = document.getElementById("search4");
let search6 = document.getElementById("search6");
let clos = document.getElementById("clos");
search6.addEventListener("click", function () {
  search4.style.display = "block";
});
clos.addEventListener("click", function () {
  search4.style.display = "none";
});
/* سبدخرید موبایل*/
let par1 = document.getElementById("par1");
let close3 = document.getElementById("close3");
sabad.addEventListener("click", function () {
  par1.style.display = "block";
});
close3.addEventListener("click", function () {
  par1.style.display = "none";
});
let plus2 = document.getElementById("plus2");
let count2 = document.getElementById("count2");
let minus2 = document.getElementById("minus2");
plus2.addEventListener("click", plusCounter1);
function plusCounter1() {
  counter++;
  count2.innerHTML = counter;
  changePrice();
}
count2.innerHTML = counter;
minus2.addEventListener("click", minusCounter1);
function minusCounter1() {
  if (counter > 1) {
    counter--;
    count1.innerHTML = counter;
    changePrice();
  }
}
function changePrice() {
  let finalPrice = document.getElementById("totalPrice1");
  let price = `${counter * 700000}`;
  let finalP = [];
  for (i in price) {
    if (i == 0) {
      finalP.push(price[price.length - 1]);
    } else {
      price = `${Math.floor((counter * 700000) / 10 ** i)}`;
      finalP.push(price[price.length - 1]);
      if (i % 3 == 2) {
        finalP.push(",");
      }
    }
  }
  if (finalP.length % 3 == 2) {
    finalP.pop();
  }
  finalPrice.innerHTML = finalP.reverse().join("");
}
let zobale1 = document.getElementById("zobale1");
zobale1.addEventListener("click", function () {
  counter = 0;
  plusCounter1();
});
changePrice();