function setup() {
    let container = select('#container');
    createCanvas(container.width, container.height, WEBGL).parent(container);
}

function draw() {
    background(0); // Black background color
    
    // Generate pastel shades starting from light blue, transitioning to green and red
    let r = 150 + 100 * sin(frameCount * 0.0005); // Red for the transition to red
    let g = 150 + 100 * sin(frameCount * 0.0005 + TWO_PI / 3); // Green for the transition to green
    let b = 200 + 55 * sin(frameCount * 0.0005 + TWO_PI / 3); // Blue dominant at start for light blue shades
    
    ambientLight(150);
    directionalLight(r, g, b, 0.25, 0.25, 0);
    ambientMaterial(r, g, b);
    
    // Rotate the cube
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    
    // Draw the cube
    box(300); // Cube size doubled
}

function windowResized() {
    let container = select('#container');
    resizeCanvas(container.width, container.height);
}
