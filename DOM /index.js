// let newdiv = document.createElement("div");
// newdiv.style.backgroundColor = "red";
// newdiv.style.marginTop = "20px";
// let newbtn = document.createElement("button");
// newbtn.innerHTML = "Click me 2";  

// newbtn.classList.add("btn");
// console.log(newbtn.classList);
// newbtn.classList.remove("btn");
// newbtn.classList.add("button");
// console.log(newbtn.classList);

// let newonediv = document.body.appendChild(newdiv);
// newonediv.appendChild(newbtn);

let currentmode = "light";
let lightbtn = document.querySelector("#toggle1");
let darkbtn = document.querySelector("#toggle2");

darkbtn.addEventListener("click", () => {
    if (currentmode === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        currentmode = "dark";
        darkbtn.style.display = "none";
        lightbtn.style.display = "block";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        currentmode = "light";
        lightbtn.style.display = "none";
        darkbtn.style.display = "block";
    }
});
lightbtn.addEventListener("click", () => {
    if (currentmode === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        currentmode = "dark";
        darkbtn.style.display = "none";
        lightbtn.style.display = "block";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        currentmode = "light";
        lightbtn.style.display = "none";
        darkbtn.style.display = "block";
    }
});