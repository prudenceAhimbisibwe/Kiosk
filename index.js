let background=document.querySelector("body");
background.style.backgroundColor='silver'
let text=document.querySelector("#title");
text.style.color="green";
let subtitle=document.querySelectorAll("h3").forEach(item=>item.innerHTML=item.textContent.toLocaleUpperCase())
let addition=document.createElement("li")
let add=document.createElement("li")
addition.appendChild(document.createTextNode("apple"))
add.appendChild(document.createTextNode("Cabbage"))
let apple=document.getElementById("fruList").appendChild(addition)
let cabbage=document.getElementById("vegList").appendChild(add)