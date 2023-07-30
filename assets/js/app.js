'use strict'
// Create an AudioContext object
const audioContext = new (window.AudioContext || window.webkitAudioContext)()
let sourceNode
let audioBuffer
let filterNode

// Fetch the audio file and decode it into an AudioBuffer
fetch('http://localhost:8080/brownnoise')
  .then((response) => response.arrayBuffer())
  .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
  .then((decodedBuffer) => {
    audioBuffer = decodedBuffer
    // Create an initial AudioBufferSourceNode
    sourceNode = audioContext.createBufferSource()
    sourceNode.buffer = audioBuffer
    sourceNode.loop = true // Set the loop property to true

    // Create a BiquadFilterNode for the low pass filter
    filterNode = audioContext.createBiquadFilter()
    filterNode.type = 'lowpass'
    // filterNode.frequency.value = 1000;
    filterNode.Q.value = 1

    // Connect the sourceNode to the filterNode and then to the audioContext destination
    sourceNode.connect(filterNode)
    filterNode.connect(audioContext.destination)
    console.log(sourceNode.context)
    console.log(filterNode.context)
  })
  .catch((error) => console.error(error))

// Add event listeners to play and stop buttons
const playButton1000 = document.getElementById('playButn1000hz')

const stopButton1000 = document.getElementById('stopButn1000hz')

const playButtonEl500 = document.getElementById('playButn500hz')
const stopButtonEl500 = document.getElementById('stopButn500hz')
const playButtonEl256 = document.getElementById('playButn256hz')
const stopButtonEl256 = document.getElementById('stopButn256hz')
const playButtonEl130 = document.getElementById('playButn130Hz')
const stopButtonEl130 = document.getElementById('stopButn130Hz')

//eventlistener for the play button att 100hz
playButton1000.addEventListener('click', function startPlayer1000() {
  audioContext.resume().then(() => {
    console.log('sourceNode context', sourceNode.context)
    console.log('sourceNode state', sourceNode.state)
    if (sourceNode) {
      // Stop the current audio if it's playing
      console.log(sourceNode.context)

      console.log(sourceNode.state)

      if (sourceNode.state === 'playing') {
        sourceNode.stop()
      }

      // Create a new AudioBufferSourceNode and connect it to the filterNode and audioContext destination
      sourceNode = audioContext.createBufferSource()
      sourceNode.buffer = audioBuffer
      sourceNode.loop = true // Set the loop property to true
      filterNode.frequency.value = 1000
      sourceNode.connect(filterNode)
      filterNode.connect(audioContext.destination)
      sourceNode.start(0)
      sourceNode.state = 'playing'
    }
  })
})
stopButton1000.addEventListener('click', function () {
  if (sourceNode) {
    sourceNode.stop()
  }
  // Rest of the audio stop code for 1000Hz
})
// stopButtonEl1000.addEventListener('click', function stopPlayer1000() {
//   if (sourceNode) {
//     sourceNode.stop()
//   }
// })

playButtonEl500.addEventListener('click', function startPlayer500() {
  if (sourceNode) {
    // Stop the current audio if it's playing
    if (sourceNode.state === 'playing') {
      sourceNode.stop()
    }

    // Create a new AudioBufferSourceNode and connect it to the filterNode and audioContext destination
    sourceNode = audioContext.createBufferSource()
    sourceNode.buffer = audioBuffer
    sourceNode.loop = true // Set the loop property to true
    sourceNode.connect(filterNode)
    filterNode.frequency.value = 500
    filterNode.connect(audioContext.destination)
    sourceNode.start(0)
  }
})

stopButtonEl500.addEventListener('click', function stopPlayer500() {
  if (sourceNode) {
    sourceNode.stop()
  }
})

playButtonEl256.addEventListener('click', function startPlayer256() {
  if (sourceNode) {
    // Stop the current audio if it's playing
    if (sourceNode.state === 'playing') {
      sourceNode.stop()
    }

    // Create a new AudioBufferSourceNode and connect it to the filterNode and audioContext destination
    sourceNode = audioContext.createBufferSource()
    sourceNode.buffer = audioBuffer
    sourceNode.loop = true // Set the loop property to true
    sourceNode.connect(filterNode)
    filterNode.frequency.value = 256
    filterNode.connect(audioContext.destination)
    sourceNode.start(0)
  }
})

stopButtonEl256.addEventListener('click', function stopPlayer256() {
  if (sourceNode) {
    sourceNode.stop()
  }
})
playButtonEl130.addEventListener('click', function startPlayer130() {
  if (sourceNode) {
    // Stop the current audio if it's playing
    if (sourceNode.state === 'playing') {
      sourceNode.stop()
    }

    // Create a new AudioBufferSourceNode and connect it to the filterNode and audioContext destination
    sourceNode = audioContext.createBufferSource()
    sourceNode.buffer = audioBuffer
    sourceNode.loop = true // Set the loop property to true
    sourceNode.connect(filterNode)
    filterNode.frequency.value = 130
    filterNode.connect(audioContext.destination)
    sourceNode.start(0)
  }
})

stopButtonEl130.addEventListener('click', function stopPlayer130() {
  if (sourceNode) {
    sourceNode.stop()
  }
})

// fetch('http://localhost:8080/whitenoise')
//     .then(response => response.blob())
//     .then(blob => {
//         const audio = new Audio(URL.createObjectURL(blob));
//         // audio.addEventListener("canplaythrough", (event) => {
//         //     /* the audio is now playable; play it if permissions allow */
//         const playButtonEl = document.getElementById("playButn");
//         const stopButnEl = document.getElementById("stopButn");

//         playButtonEl.addEventListener('click',function startPlayer() {
//             audio.play();
//         })
//             stopButnEl.addEventListener('click',function stopPlayer(){
//                 audio.pause();

//             })
//         // });
//     })
//     .catch(error => console.error(error));
// const playNodeButnEl = document.getElementById("playNodeButn");
// // Get a reference to the audio element in the DOM
// const audioElement = document.getElementById('myAudio');

// // Create a new AudioContext
// const audioContext = new AudioContext();

// // Create a new MediaElementAudioSourceNode with the audio element as the source
// const sourceNode = audioContext.createMediaElementSource(audioElement);

// // Connect the source node to the AudioContext destination node
// playNodeButnEl.addEventListener('click',function playNode(){
//     sourceNode.connect(audioContext.destination);
//     audioContext.resume();
//     audioElement.play();
//     console.log(audioElement.volume);
// })
// const whiteNoisePlayer = document.getElementById('white-noise-player');
// whiteNoisePlayer.pause();

// Get the audio element from the DOM
// const audioElement = document.querySelector('audio');

// // Create an AudioContext object
// const audioContext = new AudioContext();
// audioContext.resume();
// // Create a MediaElementAudioSourceNode
// const sourceNode = audioContext.createMediaElementSource(audioElement);

// // Connect the source node to the destination (e.g. speakers)
// sourceNode.connect(audioContext.destination);
