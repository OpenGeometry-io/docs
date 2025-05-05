---
sidebar_position: 2
---

# Polygon

The `BasePoly` class is used to create a polygon in 3D space. It can be used to create polygons with different points and materials.
BasePoly can have holes and can be extruded to create a 3D shape.

And extruded polygon would also support holes.

### Create Simple Polygon
```js
const vertices = [
  new Vector3D(1, 0, -1),
  new Vector3D(1, 0, 7),
  new Vector3D(9, 0, 6),
  new Vector3D(10, 0, 3),
  new Vector3D(9, 0, 1),
];

const ogPoly = new BasePoly(vertices);
scene.add(ogPoly);
```

### Extrude Simple Polygon
```js
ogPoly.extrude(5);
```

### Create Complex Polygon
```js
const ogVertices = [
  new Vector3D(-3, 0, -1), // 0
  new Vector3D(0, 0, -3), // 1
  new Vector3D(2, 0, -1), // 2
  new Vector3D(4, 0, -1), // 3
  new Vector3D(2, 0, 0), // 4
  new Vector3D(1.5, 0, 2), // 5
  new Vector3D(0.5, 0, 2), // 6
  new Vector3D(0.75, 0, 0.5), // 7
  new Vector3D(0.75, 0, 1.5), // 8
  new Vector3D(1.25, 0, 1.5), // 9
  new Vector3D(1.5, 0, 0.5), // 10
  new Vector3D(0, 0, 0), // 11
  new Vector3D(0, 0, 2), // 12
  new Vector3D(1, 0, 4), // 13
  new Vector3D(-2, 0, 2), // 14
];

const ogPolyComplex = new BasePoly(ogVertices);
scene.add(ogPolyComplex);
```

### Add Holes to Complex Polygon
Note that the holes should be added in a clockwise direction.
```js
const holeClockwise = [
  new Vector3D(-1, 0, -1),
  new Vector3D(0, 0, -1),
  new Vector3D(0, 0, -2),
  new Vector3D(-1, 0, -2),
];
ogPolyComplex.addHole(holeClockwise);
```

### Extrude Complex Polygon with Holes
```js
ogPolyComplex.extrude(5);
```

:::tip
Apart from OpenGeometry properties, you can also use the Three.js properties to change the appearance of the polygon.
:::

### And One More Thing
Let's checkout the live example [<u>here</u>](https://demos.opengeometry.io/src/kernel/shapes/basePoly.html)