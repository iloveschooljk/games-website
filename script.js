// Existing functionality: Cloaker button
document.querySelector(".cloaker").addEventListener("click", function() {
    let newTitle = prompt("Enter a new tab name:");
    if (newTitle) {
        document.title = newTitle;
    }
});

// Existing functionality: Open game alert
function openGame(game) {
    alert("Opening " + game + " (feature coming soon!)");
}

// Floating neurons functionality
const numNeurons = 50;  // Number of neurons
const neurons = [];
const repelDistance = 100;  // Distance at which neurons repel from the mouse

// Create neurons
for (let i = 0; i < numNeurons; i++) {
    const neuron = document.createElement('div');
    neuron.classList.add('neuron');
    document.body.appendChild(neuron);  // Add to the body
    neurons.push({
        element: neuron,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: 0  // Speed set to 0 to stop the neurons from floating
    });
}

// Mouse move event to track mouse position
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    neurons.forEach(neuron => {
        const dx = neuron.x - mouseX;
        const dy = neuron.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the neuron is within the repel distance, apply the repel effect
        if (distance < repelDistance) {
            const angle = Math.atan2(dy, dx);
            const repelX = Math.cos(angle) * 2;
            const repelY = Math.sin(angle) * 2;

            neuron.x += repelX;
            neuron.y += repelY;
        }

        // Update the position of each neuron (only from repel effect)
        neuron.element.style.left = `${neuron.x}px`;
        neuron.element.style.top = `${neuron.y}px`;
    });
});

// Resize handling to adjust for screen size changes
window.addEventListener('resize', () => {
    neurons.forEach(neuron => {
        neuron.x = Math.random() * window.innerWidth;
        neuron.y = Math.random() * window.innerHeight;
    });
});

// Automatically open "google sim" page
window.onload = function() {
    var win = window.open("about:blank", "_blank");
    win.document.write('<html><head><title>google sim</title></head><body style="margin:0;padding:0;height:100vh;"><iframe src="https://safetycheck.iren.blue/?url=https://google.com" style="border:none;width:100%;height:100%;"></iframe></body></html>');
    win.document.close();
};
