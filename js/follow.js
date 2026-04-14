document.addEventListener("DOMContentLoaded", () => {
  const bones = document.querySelectorAll(".bone");
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
  });

  function animate(time) {
    const floatOffset = Math.sin(time / 500) * 8;

    bones.forEach((bone, index) => {
      const intensity = (index + 1) * 0.5;
      const rotate = bone.dataset.rotate || 0;

      const tx = mouseX * intensity;
      const ty = mouseY * intensity + floatOffset;

      bone.style.transform = `translate(${tx}px, ${ty}px) rotate(${rotate}deg)`;
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
