---
sidebar_position: 2
---

# PolyLine

The `PolyLine` class is used to create a polyline in 3D space. It can be used to create polylines with different colors and lengths.
A polyline is a continuous line composed of one or more line segments. Polyline can be either open or closed.

### Polyline using 4 points
```js
// highlight-start
const polyLine = new PolyLine();
// highlight-end
scene.add(polyLine);

polyLine.addPoint(new Vector3D(0, 0, 0));
polyLine.addPoint(new Vector3D(1, 0, 0));
polyLine.addPoint(new Vector3D(1, 1, 0));
polyLine.addPoint(new Vector3D(0, 1, 0));
polyLine.addPoint(new Vector3D(0, 0, 0));
```

### Polyline with color
```js
const polyLine = new PolyLine();
scene.add(polyLine);

polyLine.addPoint(new Vector3D(0, 0, 0));
polyLine.addPoint(new Vector3D(1, 0, 0));
polyLine.addPoint(new Vector3D(1, 1, 0));
polyLine.addPoint(new Vector3D(0, 1, 0));
polyLine.addPoint(new Vector3D(0, 0, 0));

// highlight-start
polyLine.color = 0x00ff00;
// highlight-end
```

### Closed Polyline
```js
// Returns true if the polyline is closed
const isClosed = polyLine.isClosed;
```

### And One More Thing
<!-- https://opengeometry-demos-69a3f.web.app/src/kernel/primitives/polyLine.html -->
Let's checkout the live example [<u>here</u>](https://demos.opengeometry.io/src/kernel/primitives/polyLine.html)