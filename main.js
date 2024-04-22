let html = '<h1>Word Counter</h1> <div class="main"><textarea id="textarea"></textarea><p><span id="word">0</span> Words <span id="letter">0</span> Letters</p></div>';

let createDiv = document.createElement("div");
createDiv.className = "container";
createDiv.innerHTML = html;

document.body.insertBefore(createDiv, document.body.firstChild)



// Constant
const textarea = document.getElementById('textarea');

// logic
textarea.addEventListener('input',function(){
    document.getElementById('letter').innerHTML = this.value.length;
    
    let split = this.value.split(' ');
    let cleanList = split.filter(function(elm){
        return elm !== '';
    });
    document.getElementById('word').innerHTML = cleanList.length;
});      
