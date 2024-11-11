type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    if("radius" in shape) {
        return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
    } else {
        return parseFloat((shape.height * shape.width).toFixed(2));
    }
}