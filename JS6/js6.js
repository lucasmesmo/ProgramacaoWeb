const dots = [];
const maxDots = 8;

document.addEventListener("mousemove", function(event) {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
    dots.push(dot);

    if (dots.length > maxDots) {
        const oldDot = dots.shift();
        document.body.removeChild(oldDot);
        }
    });