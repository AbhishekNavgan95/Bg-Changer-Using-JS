let bg = document.querySelector(".main");
let button = document.querySelectorAll(".Color-palet > div")

button.forEach((e) => {
    e.addEventListener("click", () => {
        bg.classList = "main"
        bg.classList.add(e.classList.value)
    })
})