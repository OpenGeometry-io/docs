---
sidebar_position: 2
---

# Getting Started

### What you'll need

- Basic understanding about JS/TS
- Ability to Think Creatively
- Willigness to Embrace Change

## Create Simple Rectangle

We will start with the most basic step, to create a simple rectangle.
Before going forward, make sure you have node installed, if you don't have it, you can find the setup instructions [<u>here</u>](https://nodejs.org/en/download)

### Create a new Directory
```bash
  mkdir OpenPlans-Rectangle
  cd OpenPlans-Rectangle
```

### Setup a npm project
```bash
  npm init -y
```
Accept the default conditions

### Create Project Files
- Create `index.html` - This will contain skeleton for your app
- Create `style.css` - This will contain various styles

### Adding Packages/Libraries
OpenGeometry can be used with Three.js, so we need to install Three.js and OpenGeometry.
```bash
npm install opengeometry vite
```
- `opengeometry` is the library which is used for creating and manipulating geometries
- `vite` is a build tool which is used for development and production

Your directory would like this after you have the files added
```bash
 |-index.html
 |-node_modules/
 |-package.json
 |-styles.css
```

Open the project in your favorite code editor, and you should see the files you created.

### Creating HTML Skeleton
Add the below code into your `index.html` file
```html
<!DOCTYPE html>
<html>
<head>
  <title>OpenGeometry | Rectangle</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="app"></div>
  <script type="module"></script>
</body>
</html>
```

### Adding Basic Styling
Add the below code to your `style.css` file
```css
body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}
```

### Setup OpenGeometry
Now, we will setup OpenGeometry and Three.js.
Copy the below code inside the `<script>` tag
```js
let scene, camera, renderer;
let openGeometry;

async function init(){
  const app = document.getElementById('app');

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(app.clientWidth, app.clientHeight);
  app.appendChild(renderer.domElement);

  openGeometry = await OpenGeometry.create({
    container: app,
    scene: scene,
    camera: camera,
    wasmURL: 'opengeometry_bg.wasm'
  });

  scene.background = new THREE.Color(0xf0f0f0);

  camera.position.z = 15;
  camera.position.y = 5;

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const controls = new OrbitControls(
    camera,
    openGeometry.labelRenderer.domElement
  );
  controls.update();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const rectangleData = {
    center: new Vector3D(0, 0, 0),
    width: 2,
    breadth: 10
  }

  // Create Base Rectangle
  const ogRectangle = new Rectangle(rectangleData);
  scene.add(ogRectangle);

  initGUI();
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  openGeometry.update(scene, camera);
}

init();
```

### Adding OpenGeometry Kernel
Create public folder and copy the `opengeometry_bg.wasm` file from the `node_modules/opengeometry` folder to the public folder

### Start the server
Add the below script to your `package.json` file
```json
"scripts": {
  "dev": "vite"
}
```
Now, run the below command to start the server
```bash
npm run dev
```
Open your browser and go to `http://localhost:5173` and you should see a simple rectangle.

### Voila!
You have successfully created a simple rectangle using OpenGeometry. You can now start exploring the library and create more complex geometries.

## And One More Thing
Let's checkout the live example [<u>here</u>](https://demos.opengeometry.io/src/kernel/primitives/rectangle.html)

## Source Code
You can find the source code for this example [<u>here</u>](https://github.com/OpenGeometry-io/quickstart-js)