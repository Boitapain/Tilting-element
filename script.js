const pre = document.querySelector("pre");

// define max angle to rotate
const max_angle = 45

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
});

function rotateElement(event, element) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    // find the middle of the page
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // get the offset from the middle
    const offsetX = ((x - middleX) / middleX) * max_angle
    const offsetY = ((y -  middleY) / middleY) * max_angle

    element.style.setProperty("--rotateX", -1 * offsetY + "deg"); // using -1 to follow the mouse movement
    element.style.setProperty("--rotateY", offsetX + "deg");
}