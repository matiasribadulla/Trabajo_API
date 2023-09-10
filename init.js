const API = 'https://api.thedogapi.com/v1/images/search';
const btn = document.getElementById("dog")
const img = document.querySelector("img")

btn.addEventListener("click", async()=>{
    btn.value = "Ver Otro Perro";
    let link = await fetch(API)
                .then (response => response.json())
                .then (data => {
                    return data[0].url});
    img.src = link;
});