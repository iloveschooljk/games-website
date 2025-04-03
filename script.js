// Existing functionality for the cloaker button
document.querySelector(".cloaker").addEventListener("click", function() {
    let newTitle = prompt("Enter a new tab name:");
    if (newTitle) {
        document.title = newTitle;
    }
});

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
        vx: (Math.random() - 0.5) * 2,  // Initial horizontal velocity
        vy: (Math.random() - 0.5) * 2,  // Initial vertical velocity
        speed: Math.random() * 2 + 0.5
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
            const repelX = Math.cos(angle) * 3;  // Stronger repel force
            const repelY = Math.sin(angle) * 3;

            neuron.vx += repelX;
            neuron.vy += repelY;
        }

        // Update the position of each neuron
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;

        // Apply random drifting effect for floating motion
        neuron.vx += Math.random() * neuron.speed - neuron.speed / 2;
        neuron.vy += Math.random() * neuron.speed - neuron.speed / 2;

        // Ensure the neuron stays within bounds
        if (neuron.x < 0) neuron.x = 0;
        if (neuron.y < 0) neuron.y = 0;
        if (neuron.x > window.innerWidth) neuron.x = window.innerWidth;
        if (neuron.y > window.innerHeight) neuron.y = window.innerHeight;

        // Apply the new position to the element
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
