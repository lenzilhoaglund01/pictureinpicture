// console.log('testing');
// //  ^this helps you know that the console is working and the javascript file is working

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
      // catch error here
      console.log('whoops, error with media stream');
  }
}

button.addEventListener('click', async () => {
  // Disable button 
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset button 
  button.disabled = false;
});

// On Load

selectMediaStream();

