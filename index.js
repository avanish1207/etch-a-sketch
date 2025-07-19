const container=document.querySelector("#container");
for(let i=0; i<256; i++){
    const content=document.createElement("div");
    content.classList.add("content");
    container.append(content);
}

container.addEventListener("mouseover", e => {
    if(e.target.classList.contains("content")){
        e.target.style.backgroundColor="red";
    }
})

const body=document.body;
const press=document.createElement("div");
press.classList.add("top");
const but=document.createElement("button");
but.textContent="Customize Grid";
body.insertBefore(press, container);
press.append(but);

but.addEventListener("click", () => {
    let a=parseInt(prompt("Enter the number of rows"));
    let b=parseInt(prompt("Enter the number of columns"));

    container.innerHTML='';

    for(let i=0; i<(a*b); i++){
        const content=document.createElement("div");
        content.classList.add("content");
        content.style.width=`${100/b}%`;
        container.append(content);
    }
});