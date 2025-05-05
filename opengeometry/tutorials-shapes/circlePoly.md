---
sidebar_position: 1
---

# Circle Poly

The `CirclePoly` class is used to create a polygon from a circle. It can be used to create polygons with different colors.
Circle Poly is a 2D shape.

Circle Poly can be extruded to create a 3D shape.

### Create Circle Poly
```js
const circleData = {
  radius: 3,
  segments: 15,
  position: new Vector3D(10, 0, 0),
  startAngle: 0,
  endAngle: Math.PI * 2,
}

const ogCircle = new BaseCircle(circleData);
scene.add(ogCircle);

// highlight-start
// Create Polygon from BaseCircle
const circlePoly = new CirclePoly(ogCircle);
scene.add(circlePoly);
// highlight-end
```

### Extrude Circle Poly
Circle Poly can be extruded to create a 3D shape by using the `extrude` method and passing the height as a parameter.
```js
circlePoly.extrude(5);
```

:::tip
Apart from OpenGeometry properties, you can also use the Three.js properties to change the appearance of the Circle Poly.
:::

### And One More Thing
Let's checkout the live example [<u>here</u>](https://demos.opengeometry.io/src/kernel/shapes/circlePoly.html)