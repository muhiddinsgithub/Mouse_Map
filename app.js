document.addEventListener("mousemove", function (event) {
  const red = Math.round((event.x * 255) / window.innerWidth);
  const blue = Math.floor((event.y * 255) / window.innerHeight);
  const color = `rgb(${red}, 0, ${blue})`;
  document.body.style.backgroundColor = color;
});
