---
sidebar_position: 3
---

# Circle

The `Circle` class is used to create a circle with a given center, radius, and number of segments. It can be used to create circles with different colors and angles.

### Create Circle
```js
const circleData = {
  radius: 3,
  segments: 15,
  position: new Vector3D(0, 0, 0),
  startAngle: 0,
  endAngle: Math.PI * 2,
}

const ogCircle = new BaseCircle(circleData);
scene.add(ogCircle);
```

### Circle with Color
```js
const circleData = {
  radius: 3,
  segments: 15,
  position: new Vector3D(0, 3, 0),
  startAngle: 0,
  endAngle: Math.PI * 2,
}
const ogCircle = new BaseCircle(circleData);
ogCircle.color = 0x00ff00;
scene.add(ogCircle);
```

### Properties
These properties can be edited to change the appearance of the circle in real-time which generates a new geometry and updates the scene.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `radius` | number | The radius of the circle. |

:::tip
Apart from OpenGeometry properties, you can also use the Three.js properties to change the appearance of the circle.
:::

### And One More Thing
Let's checkout the live example [<u>here</u>](https://demos.opengeometry.io/src/kernel/primitives/circle.html)