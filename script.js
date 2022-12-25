function alea(){
    var elements = document.querySelectorAll(".background-item");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.left = Math.random()*screen.width+"px";
        element.style.top = Math.random()*document.documentElement.offsetHeight+"px";
    }
    elements = document.querySelector(".background");
    elements.style.height = document.documentElement.offsetHeight+"px";
    window.scrollTo(0, 0);

}