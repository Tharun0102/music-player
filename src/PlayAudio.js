
const playAudio = (isPlaying, audioElement) => {
    if (isPlaying) {
        // play() method returns a promise
        const playPromise = audioElement.current.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                audioElement.current.play();
            }).catch(() => {
                console.log("song not loaded");
            });
        }
    }
};

export default playAudio;