---
sidebar_position: 1
---

# Simple Line

The `SimpleLine` class is used to create a simple line in 3D space. It can be used to create lines with different colors and lengths.

### Unit Line with Length 1 on XZ Plane
```js
const ogSimple = new SimpleLine();
scene.add(ogSimple);
```

### Line with 2 points
```js
const ogSimple2 = new SimpleLine(
  new Vector3D(1, 1, 2),
  new Vector3D(1, 1, -2)
);
scene.add(ogSimple2);
```

### Line with 2 points and color
```js
const ogSimple3 = new SimpleLine(
  new Vector3D(-1, 1, 2),
  new Vector3D(-1, 1, -2)
);
ogSimple3.color = 0x00ff00;
scene.add(ogSimple3);
```

### And One More Thing
Let's checkout the live example [<u>here</u>](https://demos.opengeometry.io/src/kernel/primitives/line.html)