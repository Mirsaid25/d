const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
      datasets: [{
         label: '# of Votes',
         data: [ 19,10, 5],
         backgroundColor: [
            '#1070CA',
            '#EC4C47',
            '#F7D154',
         ],
         borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
         ],
         borderWidth: 1
      }]
   }
});


// ====================================================================

let localS = JSON.parse(localStorage.getItem("info"))

let overview = document.querySelector(".overview")
let transictions = document.querySelector(".transictions")
let exchange = document.querySelector(".exchange")
let market = document.querySelector(".market")
let name_1 = document.querySelector(".name")
let out = document.querySelector(".out")

overview.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index2.html"
}
transictions.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index4.html"
}
exchange.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index5.html"
}
market.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index6.html"
}
out.onclick=()=>{
   window.location.href = "http://127.0.0.1:5501/html/index.html"
}

name_1.innerHTML = `${localS.name} ${localS.surname}`
