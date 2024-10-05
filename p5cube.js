function setup() {
    let container = select('#container');
    createCanvas(container.width, container.height, WEBGL).parent(container);
}

function draw() {
    background(0); // Black background color
    
    // Transition starting from light blue, moving through dark blue, and then to teal
    let r = 50 * sin(frameCount * 0.0005); // Red stays very low, oscillating near zero
    let g = 50 * max(0, sin(frameCount * 0.0005 + PI / 2)); // Green starts low, increases over time
    let b = 200 + 55 * sin(frameCount * 0.0005); // Blue starts high, drops in the dark blue phase
    
    ambientLight(150);
    directionalLight(r, g, b, 0.25, 0.25, 0);
    
    // Rotate the entire cylinder on multiple axes
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.003); // Additional rotation around the Z axis
    
    // Draw the inverting cylinder with glowing effect
    drawInvertingCylinder(300, 600, 100, r, g, b); // Base radius 300, height 600, number of layers 100
}

function drawInvertingCylinder(baseRadius, height, layers, r, g, b) {
    let angleStep = TWO_PI / 40; // Number of points per circle
    let heightStep = height / layers;
    
    for (let i = 0; i <= layers; i++) {
        let t = map(i, 0, layers, 0, 1);
        let radius = baseRadius * (1 - 2 * abs(t - 0.5)); // Invert radius over time
        let y = map(i, 0, layers, -height / 2, height / 2);
        
        beginShape();
        emissiveMaterial(r, g, b); // Apply glowing effect
        for (let angle = 0; angle < TWO_PI; angle += angleStep) {
            let x = radius * cos(angle);
            let z = radius * sin(angle);
            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
}

function windowResized() {
    let container = select('#container');
    resizeCanvas(container.width, container.height);
}