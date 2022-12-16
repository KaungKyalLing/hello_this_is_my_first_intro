let h1 = document.querySelector("h1");
let pTag =document.querySelector("p");

let theOptions = {root margin : "-30px 0px 0px 0px"};

let observer = new IntersectionObserver((entries,observer)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("scrolled");observer.unobserve(entry.target);}})},theOptions);

observer.observe(h1);

// If I did something wrong please forgive me. Cause I can't check these codes. Sorry.
