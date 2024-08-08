var total = document.querySelector('.total-price')
console.log(total)
var prices = document.querySelectorAll('.unit-price')
console.log(prices)
var plus = document.querySelectorAll('.plus-btn')
console.log(plus)
var minus = document.querySelectorAll('.minus-btn')
console.log(minus)
var qute = document.querySelectorAll('.qute')
console.log(qute);
var hearts = document.querySelectorAll('.fa-heart')
console.log(hearts);
var trash = document.querySelectorAll('.fa-trash-can')
console.log(trash);
var card = document.querySelectorAll('.card')
console.log(card);
var dark=document.querySelector('.bb8-toggle__checkbox')
var body=document.querySelector('body')





function totalprice() {
    var res = 0
    for (let i = 0; i < prices.length; i++) {
        res = res + prices[i].innerHTML * qute[i].innerHTML

    }
    total.innerHTML = res
    return total
}
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function increment() {
        qute[i].innerHTML++
        totalprice()
    })

}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function decrement() {
        if (qute[i].innerHTML > 0) {
            qute[i].innerHTML--
        }
        totalprice()
    })

}
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function like() {
        if (hearts[i].style.color === "red") {
            hearts[i].style.color = "black"
        }
        else {
            hearts[i].style.color = "red"
        }

    })

}
for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click',function remove(){
        card[i].remove()
        qute[i].innerHTML=0
        totalprice()
    })
   

}

dark.addEventListener("click",function theme(){
    if(body.style.background===""){
        body.style.background="black"
    }
      else {
        body.style.background=""
      }
})
for (let i = 0; i< card.length; i++) {
  card[i].addEventListener("mouseover",function change(){
    card[i].style.background="linear-gradient(30deg,red,blue)"
  })
    card[i].addEventListener("mouseout",function change(){
      card[i].style.background=""
    })
    }