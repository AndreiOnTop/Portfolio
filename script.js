const menuToggle = document.querySelector('.navhead .menu-toggle');
const navLinks = document.querySelector('.navhead .links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach(el => {
        el.style.opacity = 1;
    })
})

// TYPING EFFECT

var typed = new Typed('.typing', {
    strings:['Web Developer', 'Roblox Scripter', 'Student', 'Human'],
    typeSpeed:80,
    BackSpeed:100,
    startDelay:200,
    loop:true
})


// MUSIC PLAYER
document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const audio = document.getElementById('audio');
    const progressBar = document.getElementById('progressBar');
    const currentTimeElement = document.getElementById('currentTime');
    const durationElement = document.getElementById('duration');
    const songNameElement = document.getElementById('songName');
    const nowPlayingElement = document.getElementById('nowPlaying');

    const songs = [
        { title: 'Clair De Lune', src: 'ClairDeLune.mp3' },
        { title: 'Nocturne C#', src: 'NocturneCSharp.mp3' },
        { title: 'Liebestraum No.3', src: 'Liebestraum.mp3' },
    ];

    let currentSongIndex = 0;


    audio.src = songs[currentSongIndex].src;
    songNameElement.textContent = songs[currentSongIndex].title;


    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = '❚❚';  
        } else {
            audio.pause();
            playPauseBtn.textContent = '▶'; 
        }
    });


    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;


        progressBar.value = (currentTime / duration) * 100;


        currentTimeElement.textContent = formatTime(currentTime);
        durationElement.textContent = formatTime(duration);
    });


    progressBar.addEventListener('input', () => {
        const newTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
    });


    audio.addEventListener('ended', () => {
        nextSong();
    });


    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length; 
        audio.src = songs[currentSongIndex].src;
        songNameElement.textContent = songs[currentSongIndex].title;
        audio.play();
        playPauseBtn.textContent = '❚❚';  
    }


    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
    }

    audio.play().then(() => {
        
        playPauseBtn.textContent = '❚❚';  
    }).catch((error) => {
        console.log("Autoplay failed, trying user interaction to start play.");
        
    });
})
