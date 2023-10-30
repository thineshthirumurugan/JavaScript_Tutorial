// //Here we can accces through id 

// const view12=document.getElementById("view1")   //Id name(Only id name pota pothum)
// console.log(view12);

// const view21=document.querySelector("#view2") //Id name with #(bcoz this is id nu sollanum)
// console.log(view21);

// //we can overwrite using the javascript
// // view12.style.display="none"
// view12.style.display="flex"
// view21.style.display="none"


// //Here we can accces through class name
// const view = document.getElementsByClassName("view")
// console.log(view);

// const sameviews=document.querySelectorAll(".view")   //class name with (.)
// console.log(sameviews);


// //king div kulla irukaShow all division
// const divs=view12.querySelectorAll("div")
// console.log(divs)
// const samedivs=view12.getElementsByTagName("div")
// console.log(samedivs)

// //king div oda inside even matum pakalam
// const evendivs=view12.querySelectorAll("div:nth-of-type(2n)")
// console.log(evendivs)
// //change styles
// evendivs[4].style.backgroundColor="purple"

// //change all even div width
// for(i=0;i<evendivs.length;i++){
//     evendivs[i].style.width="150px"
//     evendivs[i].style.backgroundColor="red"
// }


// //here we will see how to change the text
// const navtext = document.querySelector("nav h1")
// console.log(navtext)
// navtext.textContent="Hello World!..."
// //now we create inner html like sub
// const navBar=document.querySelector("nav")
// navBar.innerHTML='<h1>Dhuddu</h1><p>Subscribe</p>'
// console.log(navBar)
// navBar.style.justifyContent="space-evenly"

// //reach using js
// console.log(evendivs[0])
// console.log(evendivs[0].parentElement)
// console.log(evendivs[0].parentElement.children)
// console.log(evendivs[0].parentElement.childNodes)
// console.log(evendivs[0].parentElement.lastChild)
// console.log(evendivs[0].parentElement.lastElementChild)
// console.log(evendivs[0].parentElement.firstElementChild)
// console.log(evendivs[0].nextSibling)
// console.log(evendivs[0].nextElementSibling)
// console.log(evendivs[0].nextElementSibling.nextElementSibling)
// console.log(evendivs[0].previousSibling)
// console.log(evendivs[0].previousElementSibling)

// //how to create div
// view12.style.display="none"
// view21.style.display="flex"
// view21.style.flexDirection="row"
// view21.style.flexWrap="wrap"
// view21.style.margin="10px"

// console.log(view21.lastElementChild)
// view21.lastElementChild.remove()

// //How to create div using Js
// // const newDiv=document.createElement("div")
// // newDiv.textContent="Hi"
// // newDiv.style.width="100px"
// // newDiv.style.height="100px"
// // newDiv.style.backgroundColor="yellow"
// // newDiv.style.color="black"
// // newDiv.style.display="flex"
// // newDiv.style.justifyContent="center"
// // newDiv.style.alignItems="center"
// // view21.append(newDiv)

// //change t0 function becoz we want multiple box
// const createDiv=(parent,iter)=>{
//     const newDiv=document.createElement("div")
//     newDiv.textContent=iter
//     newDiv.style.width="100px"
//     newDiv.style.height="100px"
//     newDiv.style.margin="10px"
//     newDiv.style.backgroundColor="yellow"
//     newDiv.style.color="black"
//     newDiv.style.display="flex"
//     newDiv.style.justifyContent="center"
//     newDiv.style.alignItems="center"
//     parent.append(newDiv)
// }
// for(j=0;j<12;j++){
//     createDiv(view21,j)
// }

///(<--------------------Event Listner------------------------>)

// const view=document.querySelector("#view2")
// console.log(view)
// const h2=view.querySelector("h2")
// console.log(h2)

// //Syntax
// //.addEventListeners(event,function,useCapture)

// const dosomething=()=>{
//     alert("do Something")
// }
// h2.addEventListener("click",dosomething,false)
// h2.removeEventListener("click",dosomething,false)
// //Anonymous function use panna remove panna mudiyathu
// h2.addEventListener("click",(event)=>{
//     console.log(event.target)   //click panna antha element aa target panni console la print pannum
//     event.target.textContent="Hai,dear"
// })

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("complete")
        initApp()
    }
})
const initApp=()=>{
    const view=document.querySelector("#view2")
    const h2=view.querySelector("h2")

    view.addEventListener("click",(event)=>{
        view.style.backgroundColor="purple"
    })
    h2.addEventListener("click",(event)=>{
        view.style.backgroundColor="blue"
        event.target.textContent="hai"
    })
}