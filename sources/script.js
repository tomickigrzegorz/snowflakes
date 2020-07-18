class Hohoho {
  constructor(options) {
    Object.assign(this, options);
    this.angle = 0;
    this.partivles = [];

    this.createCanvas();
    this.resizeWindow();

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.getWidth();

    for (let i = 0; i < this.ns; i++) {
      this.partivles.push({
        x: Math.random() * this.W,
        y: Math.random() * this.H,
        r: Math.random() * this.radius + 1,
        d: Math.random() * this.ns
      });
    }

    this.drawSnowflakes();
  }

  getWidth() {
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.canvas.width = this.W;
    this.canvas.height = this.H;
  }

  createCanvas() {
    const canv = document.createElement('canvas');
    canv.id = 'canvas';
    canv.setAttribute(
      'style',
      'position: fixed; top: 0; pointer-events: none;'
    );
    document.body.appendChild(canv);
  }

  resizeWindow() {
    window.addEventListener('resize', () => {
      this.getWidth();
    });
  }

  hexTorgb(fullhex) {
    const hex = fullhex.substring(1, 7);
    const rgb = `${parseInt(hex.substring(0, 2), 16)}, ${parseInt(hex.substring(2, 4), 16)}, ${parseInt(hex.substring(4, 6), 16)}`;
    return rgb;
  }

  drawSnowflakes() {
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.W, this.H);
      this.ctx.fillStyle = `rgba(${this.hexTorgb(this.snowColor)},${this.snowOpacity})`;
      this.ctx.beginPath();
      for (let i = 0; i < this.ns; i++) {
        const p = this.partivles[i];
        this.ctx.moveTo(p.x, p.y);
        this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      this.ctx.fill();
      this.updateSnowflakes();
    }, this.interval);
  }

  updateSnowflakes() {
    this.angle += 0.01;
    for (let i = 0; i < this.ns; i++) {
      const p = this.partivles[i];
      p.y += Math.cos(this.angle + p.d) + 1 + p.r / 2;
      p.x += Math.sin(this.angle) * 2;
      if (p.x > this.W + 5 || p.x < -5 || p.y > this.H) {
        if (i % 3 > 0) {
          this.partivles[i] = {
            x: Math.random() * this.W,
            y: -10,
            r: p.r,
            d: p.d
          };
        } else if (Math.sin(this.angle) > 0) {
          this.partivles[i] = {
            x: -5,
            y: Math.random() * this.H,
            r: p.r,
            d: p.d
          };
        } else {
          this.partivles[i] = {
            x: this.W + 5,
            y: Math.random() * this.H,
            r: p.r,
            d: p.d
          };
        }
      }
    }
  }
}

export default Hohoho;
