function changeText(){
    const element = document.getElementsByClassName('text');
    for(let i=0;i<element.length;i++){
        element[i].innerHTML='Text has been modified';

    }
}