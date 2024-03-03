<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mouse Drawing</title>
<style>
    #canvas {
        border: 1px solid #000;
    }
</style>
</head>
<body>
<canvas id="canvas" width="800" height="600"></canvas>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var isDrawing = false;
        var lastX = 0;
        var lastY = 0;

        canvas.addEventListener('mousedown', function(e) {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        });

        canvas.addEventListener('mousemove', function(e) {
            if (isDrawing) {
                var x = e.offsetX;
                var y = e.offsetY;

                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(x, y);
                ctx.stroke();

                lastX = x;
                lastY = y;
            }
        });

        canvas.addEventListener('mouseup', function() {
            isDrawing = false;
        });

        canvas.addEventListener('mouseleave', function() {
            isDrawing = false;
        });
    });
</script>
</body>
</html>
