document.querySelector(".cloaker").addEventListener("click", function() {
    let newTitle = prompt("Enter a new tab name:");
    if (newTitle) {
        document.title = newTitle;
    }
});

function openGame(game) {
    alert("Opening " + game + " (feature coming soon!)");
}
