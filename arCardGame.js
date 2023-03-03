
// Load in the required modules
const Scene = require('Scene');
const Animation = require('Animation');
const Materials = require('Materials');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');
// const Layers = require('Layers');
const Time = require('Time');

// How to load in modules
// const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
// export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(async function () {  // Enables async/await in JS [part 1]

  const canvas = await Scene.root.findFirst('canvas0');

  const [layer0, layer1, layer2, layer3, layer4] = await Promise.all([

    Scene.root.findFirst('screen0'),
    Scene.root.findFirst('screen1'),
    Scene.root.findFirst('screen2'),
    Scene.root.findFirst('screen3'),
    Scene.root.findFirst('screen4'),
  ]);

  const [getStarted, heading0, description0,  tryAgain] = await Promise.all([
    Scene.root.findFirst('getStarted'),
    Scene.root.findFirst('heading0'),
    Scene.root.findFirst('description0'),
    Scene.root.findFirst('tryAgain')
  ]);

  const [heading1, description1, club, diamond, spade, heart] = await Promise.all([
    Scene.root.findFirst('heading1'),
    Scene.root.findFirst('description1'),
    Scene.root.findFirst('club'),
    Scene.root.findFirst('diamond'),
    Scene.root.findFirst('spade'),
    Scene.root.findFirst('heart')
  ]);

  const [burna, tems, tiwa, wizkid] = await Promise.all([
    Scene.root.findFirst('burnaBoyGrp'),
    Scene.root.findFirst('temsGrp'),
    Scene.root.findFirst('tiwaGrp'),
    Scene.root.findFirst('wizkidGrp')
  ]);


  // Diagnostics.log(tracker.isTracked);

  const transition =(objName, travDis=-50, delay=0)=> {

    const objPos = objName.transform.position;
    const final_y_value = objPos.y.pinLastValue();
    const initial_y_value = final_y_value + travDis
    

    const driver = Animation.timeDriver({ durationMilliseconds: 500, loopCount: 1});
    const sampler = Animation.samplers.easeOutCubic(initial_y_value, final_y_value);
    const posY = Animation.animate(driver, sampler);
    objName.transform.y = posY;
    // driver.start()
    Time.setTimeout(()=>{driver.start()}, delay);

  }

  transition(heading0, 20);
  transition(description0, 20, 200);
  transition(getStarted, -30, 0);

  // const tracker = await Scene.root.findFirst('targetTracker0');
  // const trackedObject = tracker.trackables[0];
  
//   {

//   if(tracker.isTracking) {
//     Diagnostics.log('tracking');
//     const driver = Animation.timeDriver({ durationMilliseconds: 1000, loopCount: 1 });
//     const sampler = Animation.samplers.easeOutCubic(y-50, y);
//     const posY = Animation.animate(driver, sampler);
//     getStarted.transform.y = posY;
//     driver.start();
//   }

// }

    // Diagnostics.log(tracker.isTracking);

  layer0.hidden = false;
  layer1.hidden = true;
  layer2.hidden = true;
  layer3.hidden = true;
  layer4.hidden = true;

  TouchGestures.onTap(getStarted).subscribe((gesture) => {
    layer0.hidden = true;
    layer1.hidden = false;
    layer2.hidden = true;
    layer3.hidden = true;
    layer4.hidden = true;

    transition(club, -40, 0);
    transition(diamond, -40, 50);
    transition(spade, -40, 150);
    transition(heart, -40, 200);
    // club.opacity = 0.2;
  });

  TouchGestures.onTap(club).subscribe((gesture) => {
    layer0.hidden = true;
    layer1.hidden = true;
    layer2.hidden = false;
    layer3.hidden = true;
    layer4.hidden = true;

    transition(burna, 40, 0);
    transition(tems, 40, 50);
    transition(tiwa, 40, 150);
    transition(wizkid, 40, 200);
  });

  TouchGestures.onTap(tems).subscribe((gesture) => {
    layer0.hidden = true;
    layer1.hidden = true;
    layer2.hidden = true;
    layer3.hidden = false;
    layer4.hidden = true;
  });

  TouchGestures.onTap(burna).subscribe((gesture) => {
    layer0.hidden = true;
    layer1.hidden = true;
    layer2.hidden = true;
    layer3.hidden = true;
    layer4.hidden = false;
  });

  Diagnostics.log(typeof layer2.hidden);

})(); // Enables async/await in JS [part 2]
