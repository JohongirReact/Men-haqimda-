window.addEventListener("DOMContentLoaded" , ()=>{
  let bilist=document.querySelector(".bi-list")
      bilist.style.color="white"
  let navlist=document.querySelector(".navlist")
  let top1=document.querySelector(".top1")
      top1.style.color="white";
  let top2=document.querySelector(".top2")
      top2.style.color="white";
  let top3=document.querySelector(".top3")
      top3.style.color="white";
  let top4=document.querySelector(".top4")
      top4.style.color="white";
  let body=document.querySelector("body");
  let navbar=document.querySelector(".navbar")
  let box=document.querySelector(".box")
      box.style.color="white"
  

  
 

  bilist.addEventListener("click" ,()=>{
    navlist.classList.toggle("shew")
  })

  window.addEventListener("scroll" , (e)=>{
    e.preventDefault
    if(window.pageYOffset>=600){
      navbar.style.backgroundColor= "white"
      top1.style.color="black"
      top2.style.color="black"
      top3.style.color="black"
      top4.style.color="black"
      box.style.color="black"
      bilist.style.color="black"
      
    }
    else{
      navbar.style.backgroundColor=""
      top1.style.color="white"
      top2.style.color="white"
      top3.style.color="white"
      top4.style.color="white"
      box.style.color="white"
      bilist.style.color="white"

    }
  })

  let indexbox=document.getElementById("indexbox")
  let list=document.getElementById("list")

  indexbox.addEventListener("keyup" , function(event){
    if(event.key == "Enter"){
      addItem(this.value)
      this.value = ""
    }
  })


  
  let addItem = (indexbox) =>{
    let listItem=document.createElement("li")
    listItem.innerHTML = `${indexbox}<i>`

    listItem.querySelector("i").addEventListener("click", ()=>{
      listItem.remove()
    })

   list.appendChild(listItem)
  }


  let fremwork=document.querySelector(".fremwork")
  let inp=document.querySelector("#inp")
  let github=document.querySelector(".github")
 
  inp.addEventListener("click", ()=>{
    fremwork.classList.toggle("mono")
    fremwork.classList.toggle("right")
  })
  inp.addEventListener("click", ()=>{
    github.classList.toggle("on")
  })


 


})

 


 

  