---
sidebar_position: 1
---

# Simple Line

#### Unit Line with Length 1 on XZ Plane
```js
const ogSimple = new SimpleLine();
scene.add(ogSimple);
```

#### Line with 2 points
```js
const ogSimple2 = new SimpleLine(
  new Vector3D(1, 1, 2),
  new Vector3D(1, 1, -2)
);
scene.add(ogSimple2);
```

#### Line with 2 points and color
```js
const ogSimple3 = new SimpleLine(
  new Vector3D(-1, 1, 2),
  new Vector3D(-1, 1, -2)
);
ogSimple3.color = 0x00ff00;
scene.add(ogSimple3);
```

#### Example
```jsx

```