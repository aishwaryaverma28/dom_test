
const options=document.querySelector(".options");
console.log(options.value);
const container=document.querySelector(".container");
const buttonDiv=document.querySelector(".buttons");
const all=document.querySelector(".all");
const headphone=document.querySelector(".headph");
const laptop=document.querySelector(".laptop");
const mobile=document.querySelector(".mobile");

//EVENT Listener
document.querySelector("form").addEventListener("submit", appendItem);
container.addEventListener("click", deleteDiv);

//functions
function appendItem(event){
    event.preventDefault();
    if(document.querySelector("#url").value.length==0)
    alert("enter url");
    else{
    let div=document.createElement("div");
    div.setAttribute("class","item")
    div.classList.add("all");
    const url=document.querySelector("#url").value;
    let image=document.createElement("img");
    image.src=url;

    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.setAttribute("class","delete_btn")

    div.append(image, btn);
    container.append(div);
    document.querySelector("#url").value="";
    if(options.value=="headphone")
    div.classList.add("headphone");
    if(options.value=="mobile")
    div.classList.add("mobile");
    if(options.value=="laptop")
    div.classList.add("laptop");
    console.log(container.innerHTML);
}
}
function deleteDiv(e){
    console.log(e.target);
    if(!(e.target.classList.contains("delete_btn")))
    return
    const delBtn=e.target;
    delBtn.parentElement.remove();

}

all.addEventListener("click",()=>{
    for(let i=0; i<all.length; i++)
    all[i].classList.remove("display_none");

})
headphone.addEventListener("click",()=>{
    for(let i=0;i<all.length;i++)
    {
        laptop[i].classList.add("display_none");
        mobile[i].classList.add("display_none");
        headphone[i].classList.remove("display_none");
    }
})

laptop.addEventListener("click",()=>{
    for(let i=0;i<all.length;i++)
    {
        headphone[i].classList.add("display_none");
        mobile[i].classList.add("display_none");
        laptop[i].classList.remove("display_none");
    }
})

mobile.addEventListener("click",()=>{
    for(let i=0;i<all.length;i++)
    {
        headphone[i].classList.add("display_none");
        laptop[i].classList.add("display_none");
        mobile[i].classList.remove("display_none");
    }
})

