let menuBtn = document.querySelector(".menuBtn")
let sidebar = document.querySelector('.sidebar')

function openSidebar() {
sidebar.classList.add('active')
}

menuBtn.addEventListener('click',openSidebar) 

 

let crossBtn = document.querySelector(".crossBtn")

function closeSidebar(event) {
   if(
    event.target.classList.contains('crossBtn')||
    event.target.classList.contains('sidebar')
    ) {
        sidebar.classList.remove('active')
    } else{
        return false;
    }
}

crossBtn.addEventListener("click",closeSidebar);


sidebar.addEventListener('click',closeSidebar);

