let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

// Intialize main shape
// consisting of  circles, ellipse, rectangles, squares
let shapes = [
  { x: 210, y: 215, radius1: 20, radius2: 20, type: "circle" },
  { x: 280, y: 215, radius1: 20, radius2: 20, type: "circle" },
  { x: 280, y: 215, radius1: 5, radius2: 5, type: "circle" },
  { x: 210, y: 215, radius1: 5, radius2: 5, type: "circle" },
  { x: 245, y: 255, radius1: 10, radius2: 30, type: "ellipse" },
  { x: 170, y: 115, width: 150, height: 50, type: "rect" },
  { x: 170, y: 175, width: 150, height: 150, type: "square" },
  { x: 220, y: 305, width: 50, height: 10, type: "rect" },
];

const drawRect = (shape) => {
  context.strokeRect(shape.x, shape.y, shape.width, shape.height);
};

const drawEllipse = (shape) => {
  context.beginPath();
  context.ellipse(
    shape.x,
    shape.y,
    shape.radius1,
    shape.radius2,
    0,
    0,
    2 * Math.PI
  );
  context.stroke();
};

const draw_shapes = () => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  for (let shape of shapes) {
    if (shape.type == "rect" || shape.type == "square") {
      drawRect(shape);
    } else if (shape.type == "ellipse" || shape.type == "circle") {
      drawEllipse(shape);
    }
  }
};
