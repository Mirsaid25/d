let localS = JSON.parse(localStorage.getItem("info"))

let wallets = document.querySelector(".wallets")
let transictions = document.querySelector(".transictions")
let overview = document.querySelector(".overview")
let market = document.querySelector(".market")
let name_1 = document.querySelector(".name")
let out = document.querySelector(".out")

wallets.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index3.html"
}
transictions.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index4.html"
}
overview.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index2.html"
}
market.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index6.html"
}
out.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index.html"
}

name_1.innerHTML = `${localS.name} ${localS.surname}`