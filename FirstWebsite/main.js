let clickfunction01 = document.getElementById('clickme-01');

clickfunction01.addEventListener('click',function()
{
    if(this.style.height=="100px"){
        this.style.height = "50px";
    }else{
        this.style.height="100px";
    }
})
