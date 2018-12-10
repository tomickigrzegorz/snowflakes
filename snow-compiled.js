"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hohoho =
/*#__PURE__*/
function () {
  function Hohoho(options) {
    _classCallCheck(this, Hohoho);

    this.canvas = options.canvas;
    this.ns = options.ns;
    this.radius = options.radius;
    this.interval = options.interval;
    this.snowColor = options.snowColor;
    this.snowOpacity = options.snowOpacity;
    this.angle = 0;
    this.partivles = [];
    this.createCanvas();
    this.resizeWindow();
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.canvas.width = this.W;
    this.canvas.height = this.H;

    for (var i = 0; i < this.ns; i++) {
      this.partivles.push({
        x: Math.random() * this.W,
        y: Math.random() * this.H,
        r: Math.random() * this.radius + 1,
        d: Math.random() * this.ns
      });
    }
  }

  _createClass(Hohoho, [{
    key: "createCanvas",
    value: function createCanvas() {
      var canv = document.createElement('canvas');
      canv.id = 'canvas';
      canv.setAttribute('style', 'position: fixed; top: 0; pointer-events: none;');
      document.body.appendChild(canv);
    }
  }, {
    key: "resizeWindow",
    value: function resizeWindow() {
      var _this = this;

      window.addEventListener('resize', function () {
        _this.W = window.innerWidth;
        _this.H = window.innerHeight;
        _this.canvas.width = _this.W;
        _this.canvas.height = _this.H;
      });
    }
  }, {
    key: "drawSnowflakes",
    value: function drawSnowflakes() {
      var _this2 = this;

      return function () {
        setInterval(function () {
          _this2.ctx.clearRect(0, 0, _this2.W, _this2.H);

          _this2.ctx.fillStyle = "rgba(".concat(_this2.snowColor, ",").concat(_this2.snowOpacity, ")");

          _this2.ctx.beginPath();

          for (var i = 0; i < _this2.ns; i++) {
            var p = _this2.partivles[i];

            _this2.ctx.moveTo(p.x, p.y);

            _this2.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
          }

          _this2.ctx.fill();

          _this2.updateSnowflakes();
        }, _this2.interval);
      };
    }
  }, {
    key: "updateSnowflakes",
    value: function updateSnowflakes() {
      this.angle += 0.01;

      for (var i = 0; i < this.ns; i++) {
        var p = this.partivles[i];
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
          } else {
            if (Math.sin(this.angle) > 0) {
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
  }]);

  return Hohoho;
}();

var options = {
  canvas: 'canvas',
  snowColor: '255,255,255',
  // snowflakes color - white
  snowOpacity: '0.6',
  // snowflakes opacity
  ns: 300,
  // the number of snowflakes
  radius: 3,
  // size snowflakes
  interval: 30 // falling speed

};
var snow = new Hohoho(options).drawSnowflakes();
window.addEventListener('load', snow);
