const mcgregorModule = function() {
  // Cache DOM
  const mcgregor = document.querySelector("[data-mcgregorArt]"); console.log(mcgregor);
  const head = mcgregor.querySelector("[data-head]"); console.log(head);
  const neck = mcgregor.querySelector("[data-neck]"); console.log(neck);
  const body = mcgregor.querySelector("[data-body]"); console.log(body);
  const waist = mcgregor.querySelector("[data-waist]"); console.log(waist);
  const leftShoulder = mcgregor.querySelector("[data-leftShoulder]"); console.log(leftShoulder);
  const leftElbow = mcgregor.querySelector("[data-leftElbow]"); console.log(leftElbow);
  const leftWrist = mcgregor.querySelector("[data-leftWrist]"); console.log(leftWrist);
  const rightShoulder = mcgregor.querySelector("[data-rightShoulder]"); console.log(rightShoulder);
  const rightElbow = mcgregor.querySelector("[data-rightElbow]"); console.log(rightElbow);
  const rightWrist = mcgregor.querySelector("[data-rightWrist]"); console.log(rightWrist);

  let joints = [head, neck, body, waist, leftWrist, leftElbow, leftShoulder, rightWrist, rightElbow, rightShoulder]
  
  TweenLite.defaultEase = Power2.easeInOut;

  const dur = 1;

  // Test rig
  TweenMax.set(joints, {transformOrigin: "center"});

  TweenMax.fromTo(body, dur/2, { y: 0 }, { y: 20, repeat: -1, yoyo: true, ease: Power2.easeInOut, delay: .75 });

  TweenMax.fromTo(head, dur/2, { rotation: 5 }, { rotation: -5, repeat: -1, yoyo: true, ease: Power1.easeInOut, delay: dur/2 });
  TweenMax.fromTo(neck, dur/2, { rotation: -5 }, { rotation: 5, repeat: -1, yoyo: true, ease: Power1.easeInOut, delay: dur/2 });
  
  TweenMax.fromTo(leftShoulder, dur, { x: 10, y: -10, rotation: -50 }, { x: -10, y: 10, rotation: 60, repeat: -1, yoyo: true });
  TweenMax.fromTo(leftElbow, dur, { rotation: -20 }, { rotation: 70, repeat: -1, yoyo: true });
  TweenMax.fromTo(leftWrist, dur, { rotation: -5 }, { rotation: 10, repeat: -1, yoyo: true });

  TweenMax.fromTo(rightShoulder, dur, { x: -10, y: 10, rotation: 60 }, { x: 10, y: -10, rotation: -50, repeat: -1, yoyo: true });
  TweenMax.fromTo(rightElbow, dur, { rotation: 70 }, { rotation: -20, repeat: -1, yoyo: true });
  TweenMax.fromTo(rightWrist, dur, { rotation: 10 }, { rotation: -5, repeat: -1, yoyo: true });
}

mcgregorModule();