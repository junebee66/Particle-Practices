// see https://nextparticle.nextco.de for more informations

var nextParticle = new NextParticle(document.all.logo);
nextParticle.particleGap = 2;
nextParticle.noise = 30;
nextParticle.mouseForce = 30;
nextParticle.size = Math.max(window.innerWidth, window.innerHeight);
nextParticle.colorize = false;
nextParticle.tint = '#FFFFFF';
nextParticle.minWidth = nextParticle.size;
nextParticle.minHeight = nextParticle.size;
nextParticle.maxWidth = nextParticle.size;
nextParticle.maxHeight = nextParticle.size;
nextParticle.colorArr = [255, 255, 255, 255];

// Add 3D settings
nextParticle.threeDimensional = true; // Enable 3D mode
nextParticle.depth = 50; // Adjust depth for 3D effect
nextParticle.layerCount = 4; // Add more layers for better 3D effect
nextParticle.layerDistance = 4; // Distance between layers

var redraw = function() {
  nextParticle.initPosition = "none";
  nextParticle.initDirection = "none";
  nextParticle.fadePostion = "none";
  nextParticle.fadeDirection = "none";
  nextParticle.minWidth = nextParticle.size;
  nextParticle.minHeight = nextParticle.size;
  nextParticle.maxWidth = nextParticle.size;
  nextParticle.maxHeight = nextParticle.size;
  nextParticle.color = nextParticle.colorize ? nextParticle.tint : '#ffffff';
  nextParticle.start();
};

// var gui = new dat.GUI();
// gui.add(nextParticle, "particleGap", 1, 10, 1).onChange(redraw);
// gui.add(nextParticle, "noise", 0, 200, 1).onChange(redraw);
// gui.add(nextParticle, "mouseForce", -200, 200, 1).onChange(redraw);
// gui.add(nextParticle, "size", 100, 800, 1).onChange(redraw);
// gui.add(nextParticle, "colorize").onChange(redraw);
// gui.addColor(nextParticle, "tint").onChange(redraw);


// window.addEventListener('resize', function(event) {
//   nextParticle.width = window.innerWidth;
//   nextParticle.height = window.innerHeight;
//   redraw();
// }, true);

// Add mouse movement handler for 3D perspective
document.addEventListener('mousemove', function(e) {
  // Calculate mouse position relative to center of screen
  var mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
  var mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
  
  // Apply rotation based on mouse position
  if (nextParticle.vScene) {
    nextParticle.vScene.rotation.y = mouseX * 0.5; // Horizontal rotation
    nextParticle.vScene.rotation.x = mouseY * 0.5; // Vertical rotation
  }
  
  // Apply perspective shift
  if (nextParticle.camera) {
    nextParticle.camera.position.x = mouseX * 100;
    nextParticle.camera.position.y = -mouseY * 100;
    nextParticle.camera.lookAt(0, 0, 0);
  }
});

// Optional: Add smooth reset when mouse leaves window
document.addEventListener('mouseleave', function() {
  if (nextParticle.vScene) {
    nextParticle.vScene.rotation.y = 0;
    nextParticle.vScene.rotation.x = 0;
  }
  if (nextParticle.camera) {
    nextParticle.camera.position.x = 0;
    nextParticle.camera.position.y = 0;
    nextParticle.camera.position.z = 1000;
    nextParticle.camera.lookAt(0, 0, 0);
  }
});