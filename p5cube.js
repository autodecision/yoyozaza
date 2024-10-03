function setup() {
    let container = select('#container');
    createCanvas(container.width, container.height, WEBGL).parent(container);
}

function draw() {
    background(0); // Black background color
    
    // Set up soft colors for the cube
    let r = 173, g = 216, b = 230; // Light Blue
    ambientLight(150);
    directionalLight(r, g, b, 0.25, 0.25, 0);
    ambientMaterial(r, g, b);
    
    // Rotate the cube more slowly
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    
    // Draw the cube
    box(300); // Cube size doubled
}

function windowResized() {
    let container = select('#container');
    resizeCanvas(container.width, container.height);
}
