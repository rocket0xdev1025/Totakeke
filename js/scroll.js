window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".scroll-rotate");
  const scrollY = window.scrollY;

  elements.forEach((el, index) => {
    const speed = 0.05; // cambia para más o menos rotación
    const offset = el.getBoundingClientRect().top + window.scrollY;
    const distance = (scrollY - offset + window.innerHeight / 1.5) * speed;

    const direction = index % 2 === 0 ? 1 : -1; // alterna lados
    const rotation = Math.max(-10, Math.min(10, direction * distance)); // limitamos entre -10 y 10 grados
    el.style.transform = `rotate(${rotation}deg)`;
  });
});
