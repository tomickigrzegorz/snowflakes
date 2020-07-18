# Snow on the site - [demo](https://tomik23.github.io/snowflakes/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Clone the repo and install dependencies
First, install the dependencies:
```bash
git clone https://github.com/tomik23/snowflakes.git
cd snowflakes
npm i
```

## Watch
```bash
npm watch
```

## Production build
```bash
npm build
```

## Snowflakes configure

```html
<script>
  window.addEventListener('DOMContentLoaded', function () {
    new Hohoho({
      // snowflakes color in hex
      snowColor: '#ffffff',
      // snowflakes opacity
      snowOpacity: '0.6',
      // the number of snowflakes
      ns: 200,
      // size snowflakes
      radius: 3,
      // falling speed
      interval: 30
    })
  });
</script>
<script src="./snow.min.js"></script>
```