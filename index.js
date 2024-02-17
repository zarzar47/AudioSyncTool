const colors = ['Tomato','DodgerBlue','MediumSeaGreen']; 
const colorsName = ['Red','Blue','Green'];
const audio = []
let index = 0;
const text = document.getElementById('text');
const clicks = document.getElementById('clicks');
let clicksNum = 0;

text.addEventListener('click', function colorChange(){
    index = (index+1)%colors.length;
    text.innerHTML = colorsName[index];
    clicks.innerHTML = ++clicksNum;
    const body = document.getElementById('main_window');
    body.style.backgroundColor = colors[index];
    speakColor(colorsName[index]);
})

function speakColor(color){
    var audio = null;
    switch(color){
        case 'Red':
            audio = document.getElementById('red-audio');
            break;
        case 'Blue':
            audio = document.getElementById('blue-audio');
            break;
        case 'Green':
            audio = document.getElementById('green-audio');
            break;
        default:
    }

    if (audio != null)
        audio.play();
}

