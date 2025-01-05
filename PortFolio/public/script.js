// Text animation
const texts = ["FrontEnd Development", "BackEnd Development", "Full-Stack Development", "Machine Learning", "Problem Solving"];
let count = 0;

function changeText() {
    const animatedText = document.querySelector(".animated-text");
    animatedText.textContent = texts[count];
    animatedText.classList.remove("slide-in");
    void animatedText.offsetWidth; // Trigger reflow
    animatedText.classList.add("slide-in");
    
    count = (count + 1) % texts.length;
    setTimeout(changeText, 3000);
}

// Background shapes animation
function createShape() {
    const shapes = ['circle', 'square', 'triangle'];
    const colors = ['#6be1ff', '#faff78', '#ff6b6b', '#90ff6b', '#ff6bf3', '#ffb66b'];
    
    const shape = document.createElement('div');
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    shape.className = `shape ${randomShape}`;
    if (randomShape === 'triangle') {
        shape.style.borderBottom = `45px solid ${randomColor}`;
    } else {
        shape.style.background = randomColor;
    }
    
    // Random position and size
    shape.style.left = Math.random() * 100 + '%';
    shape.style.top = Math.random() * 100 + '%';
    const scale = 0.5 + Math.random() * 1; // Random size between 50% and 150%
    shape.style.transform = `scale(${scale})`;
    
    // Random animation duration (faster now)
    const duration = 5 + Math.random() * 10; // Between 5 and 15 seconds
    shape.style.animation = `float ${duration}s linear infinite`;
    shape.style.animationDelay = -Math.random() * 10 + 's';
    
    return shape;
}

function initShapes() {
    const container = document.getElementById('background-shapes');
    const numShapes = 20; // Increased number of shapes
    
    for (let i = 0; i < numShapes; i++) {
        const shape = createShape();
        container.appendChild(shape);
    }
}

// Regenerate shapes periodically to keep the animation fresh
function regenerateShapes() {
    const container = document.getElementById('background-shapes');
    const shape = createShape();
    container.appendChild(shape);
    
    // Remove old shapes to prevent too many elements
    if (container.children.length > 25) {
        container.removeChild(container.children[0]);
    }
    
    setTimeout(regenerateShapes, 3000); // Add new shape every 3 seconds
}

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Initialize animations when page loads
window.onload = () => {
    changeText();
    initShapes();
    regenerateShapes();
};








