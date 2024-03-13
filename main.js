const textarea = document.getElementById('textarea');

textarea.addEventListener('input',function(){
    document.getElementById('letter').innerHTML = this.value.length;
    
    let split = this.value.split(' ');
    let cleanList = split.filter(function(elm){
        return elm !== '';
    });
    document.getElementById('word').innerHTML = cleanList.length;
});      
