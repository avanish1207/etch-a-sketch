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