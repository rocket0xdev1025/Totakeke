document.addEventListener("mousemove", (e) => {
  const bones = document.querySelectorAll(".bone");
  const chem = document.querySelector(".chem__picture");
  const leftOverlay = document.querySelector(".left__overlay");

  const x = (e.clientX / window.innerWidth - 0.5) * 20; // rango: -10 a 10
  const y = (e.clientY / window.innerHeight - 0.5) * 20; // rango: -10 a 10

  bones.forEach((bone, index) => {
    const intensity = (index + 1) * 0.5;
    const rotate = bone.dataset.rotate || 0;
    bone.style.transform = `translate(${x * intensity}px, ${
      y * intensity
    }px) rotate(${rotate}deg)`;
  });

  if (chem) {
    chem.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
  }

  if (leftOverlay) {
    leftOverlay.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
  }
});
