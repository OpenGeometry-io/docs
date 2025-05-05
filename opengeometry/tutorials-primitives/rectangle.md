---
sidebar_position: 4
---

# Rectangle

The `Rectangle` class is used to create a rectangle with a given center, width, and breadth.

### Create Rectangle
```js
const rectangleData = {
  center: new Vector3D(0, 0, 0),
  width: 2,
  breadth: 10
}

const ogRectangle = new Rectangle(rectangleData);
scene.add(ogRectangle);
```

### Create Rectangle with different properties
```js
const ogRectangle = new Rectangle({
  center: new Vector3D(0, 3, 0),
  width: 2,
  breadth: 10
});

scene.add(ogRectangle);

// highlight-start
ogRectangle.color = 0x00ff00;
ogRectangle.width = 5;
ogRectangle.breadth = 15;
// highlight-end
```

### Properties
These properties can be edited to change the appearance of the rectangle in real-time which generates a new geometry and updates the scene.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `width` | number | The width of the rectangle. |
| `breadth` | number | The breadth of the rectangle. |
| `color` | number | The color of the rectangle. |

:::tip
Apart from OpenGeometry properties, you can also use the Three.js properties to change the appearance of the rectangle.
:::

### And One More Thing
Let's checkout the live example [<u>here</u>](https://demos.opengeometry.io/src/kernel/primitives/rectangle.html)