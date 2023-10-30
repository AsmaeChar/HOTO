let x = document.querySelector(".cursor");
let density = 2,
    number = 40; // length of the trail
for (let i = 0; i < number; i++) {
    let y = document.createElement("div");
    y.classList.add("circle");
    y.id = "circle";
    y.style.transition = `transform ${density + i * density}ms ease-out`;
    y.style.opacity = `${(number - i) / (1.0 * number)}`;
    x.appendChild(y);
}

const pos = (px, offset) => `calc(${px + offset}px - 50%)`;

document.addEventListener("mousemove", ({ clientX, clientY }) => {
    x.style.opacity = "1";
    for (const e of x.children)
        e.style.transform = `translate(${pos(clientX, 0)}, ${pos(clientY, 0)})`;
});

document.addEventListener("mouseover", (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName == 'A' || e.target.tagName == 'BUTTON' || e.target.tagName == 'INPUT' || e.target.tagName == 'LI' || e.target.tagName == 'IMG') {
        document.getElementById('circle').style.height = '1.5rem';
        document.getElementById('circle').style.width = '1.5rem';
        document.getElementById('circle').style.background = '#000';
        document.getElementById('circle').style.opacity = '0.5';
    }
});

document.addEventListener("mouseout", (e) => {
    if (e.target.tagName == 'A' || e.target.tagName == 'BUTTON' || e.target.tagName == 'INPUT' || e.target.tagName == 'LI' || e.target.tagName == 'IMG') {
        document.getElementById('circle').style.height = '1rem';
        document.getElementById('circle').style.width = '1rem';
        document.getElementById('circle').style.opacity = '1';
        document.getElementById('circle').style.background = '#000';
    }
});