console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Better Call Saul - Theme", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Breaking Bad Theme", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Eminem - Mockingbird(Slowed & Reverb)", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Don Toliver - No Idea", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "La Haasil - Sunny Khan Durrani", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Nirvana - Something In The Way", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Oppenheimer - Theme", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Red Right Hand - Peaky Blinders", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "The Weeknd - I Was Never There", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Maroon 5 - Memories", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


































// $("#volume").slider({
//     min: 0,
//     max: 100,
//     value: 0,
//       range: "min",
//     slide: function(event, ui) {
//       setVolume(ui.value / 100);
//     }
//   });
  
//   var myMedia = document.createElement('audio');
//   $('#player').append(myMedia);
//   myMedia.id = "myMedia";

//   playAudio('http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3', 0);
  
//   function playAudio(fileName, myVolume) {
//           myMedia.src = fileName;
//           myMedia.setAttribute('loop', 'loop');
//       setVolume(myVolume);
//       myMedia.play();
//   }
  
//   function setVolume(myVolume) {
//   var myMedia = document.getElementById('myMedia');
//   myMedia.volume = myVolume;
//   }