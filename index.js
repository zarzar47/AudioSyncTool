const colors = ['Tomato','DodgerBlue','MediumSeaGreen']; 
const colorsName = ['Red','Blue','Green'];
const audio = []
let index = 0;
const text = document.getElementById('text');

text.addEventListener('click', function colorChange(){
    console.log(index);
    index = (index+1)%colors.length;
    text.innerHTML = colorsName[index];
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

