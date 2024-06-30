import './cube.scss'

const Cube = () => {

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;
  const damping = 0.1;

  function rotateCube() {
    currentX += (targetX - currentX) * damping;
    currentY += (targetY - currentY) * damping;

    const cube = document.getElementsByClassName("cube");
    for (let i = 0; i < cube.length; i++) {
      cube[i].style.transform = `rotateY(${currentX}deg) rotateX(${currentY}deg)`;
    }

    requestAnimationFrame(rotateCube);
  }

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    const q = 0.15;

    targetX = x * q * 1.25;
    targetY = -y * q * 1.25;
  });

  rotateCube();

  return (
    <div className="cube">
      <div className="face">Programmer🧑‍💻</div>
      <div className="face">Piano player🎹</div>
      <div className="face">Football lover⚽️</div>
      <div className="face">Cricket player🏏</div>
      <div className="face">LEGO builder🧱</div>
      <div className="face">Gymmer🏋️‍♂️</div>
    </div>
  );
}

export default Cube;