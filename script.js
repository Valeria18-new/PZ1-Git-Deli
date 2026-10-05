const button = document.getElementById("changeButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Git и GitHub работают!";
});
// Дополнительная работа после применения stash