# Snow on the site 

Demo -> <https://tomik23.github.io/snow/>

## Confert to ES5
First, install the dependencies:
```npm install``` or ```yarn```

Then start the conversion from es6 to es5:
```npm run build ``` or ```yarn build```

## Snowflakes configure
```
const options = {
  canvas: 'canvas',
  snowColor: '255,255,255', // snowflakes color - white
  snowOpacity: '0.6', // snowflakes opacity
  ns: 300, // the number of snowflakes
  radius: 3, // size snowflakes
  interval: 30 // falling speed
};
```