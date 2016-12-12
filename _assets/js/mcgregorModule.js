const mcgregorModule = function() {
  // Cache DOM
  const mcgregor = document.querySelector("[data-mcgregorArt]");
  const head = mcgregor.querySelector("[data-head]");
  const neck = mcgregor.querySelector("[data-neck]");
  const body = mcgregor.querySelector("[data-body]");
  const waist = mcgregor.querySelector("[data-waist]");
  const torso = mcgregor.querySelector("[data-torso]");
  const leftShoulder = mcgregor.querySelector("[data-leftShoulder]");
  const leftElbow = mcgregor.querySelector("[data-leftElbow]");
  const leftWrist = mcgregor.querySelector("[data-leftWrist]");
  const rightShoulder = mcgregor.querySelector("[data-rightShoulder]");
  const rightElbow = mcgregor.querySelector("[data-rightElbow]");
  const rightWrist = mcgregor.querySelector("[data-rightWrist]");

  let joints = [head, neck, body, waist, leftWrist, leftElbow, leftShoulder, rightWrist, rightElbow, rightShoulder]
  
  TweenLite.defaultEase = Power2.easeInOut;

  const dur = 0.75;

  // Test rig
  TweenMax.set(joints, {transformOrigin: "center"});

  TweenMax.fromTo(body, dur/2, { y: 0 }, { y: 40, repeat: -1, yoyo: true, ease: Power1.easeInOut, delay: dur*0.75 });

  TweenMax.fromTo(torso, dur, { scaleX: 1, transformOrigin: "center" }, { scaleX: 0.9, repeat: -1, yoyo: true, ease: Power2.easeInOut });
  TweenMax.fromTo(waist, dur, { x: 0, scaleX: 1, transformOrigin: "center" }, { x: -5, scaleX: 0.9, repeat: -1, yoyo: true, ease: Power2.easeInOut });

  TweenMax.fromTo(head, dur/2, { rotation: 5 }, { rotation: -5, repeat: -1, yoyo: true, ease: Power1.easeInOut, delay: dur*0.5 });
  TweenMax.fromTo(neck, dur/2, { rotation: -5 }, { rotation: 5, repeat: -1, yoyo: true, ease: Power1.easeInOut, delay: dur*0.5 });
  
  TweenMax.fromTo(leftShoulder, dur, { x: 10, y: -10, rotation: -50 }, { x: -10, y: 10, rotation: 60, repeat: -1, yoyo: true });
  TweenMax.fromTo(leftElbow, dur, { rotation: 20 }, { rotation: 70, repeat: -1, yoyo: true });
  TweenMax.fromTo(leftWrist, dur, { rotation: 0 }, { rotation: 10, repeat: -1, yoyo: true });

  TweenMax.fromTo(rightShoulder, dur, { x: -10, y: 10, rotation: 60 }, { x: 10, y: -10, rotation: -50, repeat: -1, yoyo: true });
  TweenMax.fromTo(rightElbow, dur, { rotation: 70 }, { rotation: 20, repeat: -1, yoyo: true });
  TweenMax.fromTo(rightWrist, dur, { rotation: 10 }, { rotation: 0, repeat: -1, yoyo: true });
}

mcgregorModule();