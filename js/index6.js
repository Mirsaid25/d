let plc = document.querySelector(".block1")

let arr = [
  {
    title: "DASH",
    persent: "1.93%",
    img: "../img/img5/img1.jpg",
    vector: "../img/img5/green.svg"
  },
  {
    title: "Aeternity",
    persent: "-1.14%",
    img: "../img/img5/img2.jpg",
    vector: "../img/img5/red.svg"
  },
  {
    title: "Ethereum",
    persent: "1.14%",
    img: "../img/img5/img3.jpg",
    vector: "../img/img5/green.svg"
  },
  {
    title: "PeerCoin",
    persent: "1.93%",
    img: "../img/img5/img4.jpg",
    vector: "../img/img5/green.svg"
  },
  {
    title: "DASH",
    persent: "1.93%",
    img: "../img/img5/img1.jpg",
    vector: "../img/img5/red.svg"
  },
  {
    title: "DASH",
    persent: "1.93%",
    img: "../img/img5/img2.jpg",
    vector: "../img/img5/green.svg"
  },
  {
    title: "DASH",
    persent: "1.93%",
    img: "../img/img5/img3.jpg",
    vector: "../img/img5/green.svg"
  },
  {
    title: "DASH",
    persent: "1.93%",
    img: "../img/img5/img4.jpg",
    vector: "../img/img5/red.svg"
  },
  {
    title: "DASH",
    persent: "1.93%",
    img: "../img/img5/img1.jpg",
    vector: "../img/img5/green.svg"
  }
]

function reload(arr, plc) {
  plc.innerHTML = ""

  for(let item of arr){
    let block1_1 = document.createElement("div")

    let block1_1_top = document.createElement("div")

    let top_left = document.createElement("div")
    let top_left_img = document.createElement("img")
    let dush = document.createElement("div")
    let h3_top_left_dush = document.createElement("h3")
    let span_top_left_dush = document.createElement("span")

    let top_right = document.createElement("div")
    let right1 = document.createElement("div")
    let right1_span1 = document.createElement("span")
    let right1_span2 = document.createElement("span")
    let right1_span3 = document.createElement("span")
    let right2 = document.createElement("div")
    let right2_span1 = document.createElement("span")
    let right2_span2 = document.createElement("span")
    let right3 = document.createElement("div")
    let right3_span1 = document.createElement("span")
    let right3_span2 = document.createElement("span")
    let right3_span3 = document.createElement("span")

    let block1_1_bottom = document.createElement("div")
    let block1_1_bottom_img = document.createElement("img")
    
    block1_1.classList.add("block1_1")
    block1_1_top.classList.add("block1_1_top")
    top_left.classList.add("top-left")
    dush.classList.add("dush")
    top_right.classList.add("top-right")
    right1.classList.add("right1")
    right2.classList.add("right2")
    right3.classList.add("right3")
    block1_1_bottom.classList.add("block1_1_bottom")

    top_left_img.alt = ""
    block1_1_bottom_img.alt = ""

    top_left_img.src = item.img
    block1_1_bottom_img.src = item.vector

    h3_top_left_dush.innerHTML = item.title
    span_top_left_dush.innerHTML = item.persent
    right1_span1.innerHTML = "EUR"
    right1_span2.innerHTML = "USD"
    right1_span3.innerHTML = "BTC"
    right2_span1.innerHTML = "1,307.96"
    right2_span2.innerHTML = "EUR"
    right3_span1.innerHTML = "Volume"
    right3_span2.innerHTML = "18,423"
    right3_span3.innerHTML = item.title

    top_left_img.style.height = "70px"
    top_left_img.style.width = "70px"

    plc.append(block1_1)
    block1_1.append(block1_1_top,block1_1_bottom)
    block1_1_top.append(top_left,top_right)
    top_left.append(top_left_img,dush)
    dush.append(h3_top_left_dush, span_top_left_dush)
    top_right.append(right1, right2, right3)
    right1.append(right1_span1, right1_span2, right1_span3)
    right2.append(right2_span1, right2_span2)
    right3.append(right3_span1, right3_span2, right3_span3)
    block1_1_bottom.append(block1_1_bottom_img)
  }
}

reload(arr, plc)

// ==============================================================

let localS = JSON.parse(localStorage.getItem("info"))

let wallets = document.querySelector(".wallets")
let transictions = document.querySelector(".transictions")
let exchange = document.querySelector(".exchange")
let overview = document.querySelector(".overview")
let name_1 = document.querySelector(".name")
let out = document.querySelector(".out")

wallets.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index3.html"
}
transictions.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index4.html"
}
exchange.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index5.html"
}
overview.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index2.html"
}
out.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index.html"
}

name_1.innerHTML = `${localS.name} ${localS.surname}`