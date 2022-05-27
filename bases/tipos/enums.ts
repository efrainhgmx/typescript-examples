(() => {

    enum AudioLevel {
        min = 1,
        medium,
        mediumMin,
        max= 10
    }

    let currentAudio = AudioLevel.max ;

    console.log(currentAudio)
    console.log(AudioLevel)

})()