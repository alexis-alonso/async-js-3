// how to make the imgs rotate and shrink
const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

// how long to do the whole anime
const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

// ref the imgs
const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// get the first img to do the anime
alice1.animate(aliceTumbling, aliceTiming)
    .finished.then(() => {alice2.animate(aliceTumbling, aliceTiming)
        .finished.then(() => {alice3.animate(aliceTumbling, aliceTiming)})});
// note: animate() returns an Animation object
// idea sprung from chatGPT (is this callback hell?)


// right approach but alice3 animated wrong
// Promise.all(alice1.getAnimations().map((animation) => animation.finished))
//     .then(() => alice2.animate(aliceTumbling, aliceTiming))
//     .then(() => alice3.animate(aliceTumbling, aliceTiming));

