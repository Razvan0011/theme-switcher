const themeBtn = document.querySelector(".switch");
const body = document.querySelector("body");
const theme = document.querySelector(".theme");

themeBtn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        theme.firstElementChild.innerText = "Light Mode";
    } else if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        theme.firstElementChild.innerText = "Dark Mode";
    }
});