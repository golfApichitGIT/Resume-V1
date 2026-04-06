export function initCanvas() {
  const canvas = document.getElementById('canvas-bg');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  
  resize();
  window.addEventListener('resize', resize);
  
  class Particle {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 1.5 + 0.3;
      this.life = Math.random();
      this.maxLife = Math.random() * 0.8 + 0.2;
      this.color = Math.random() > 0.7 ? 'rgba(0,212,255,' : 'rgba(0,255,136,';
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life += 0.002;
      if (this.life > this.maxLife || this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
        this.reset();
      }
    }
    
    draw() {
      const a = Math.sin(this.life / this.maxLife * Math.PI) * 0.6;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color + a + ')';
      ctx.fill();
    }
  }
  
  for (let i = 0; i < 120; i++) {
    particles.push(new Particle());
  }
  
  let mx = W / 2, my = H / 2;
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });
  
  function drawGrid() {
    ctx.strokeStyle = 'rgba(0,212,255,0.025)';
    ctx.lineWidth = 1;
    const sz = 60;
    for (let x = 0; x < W; x += sz) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += sz) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
  }
  
  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (d < 100) {
          ctx.strokeStyle = 'rgba(0,212,255,' + (1 - d / 100) * 0.08 + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function loop() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(5,10,15,.04)';
    ctx.fillRect(0, 0, W, H);
    drawGrid();
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connectParticles();
    const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 300);
    grd.addColorStop(0, 'rgba(0,212,255,0.04)');
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);
    requestAnimationFrame(loop);
  }
  
  loop();
}
