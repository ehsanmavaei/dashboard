overlay=document.querySelector('.overlay');

document.querySelector('#burger').addEventListener('click',function(){
    if(this.classList.contains("burgerextend")){

        console.log('in the if')
        this.classList.remove("burgerextend");
        overlay.classList.remove("show");

    }else{
        console.log('in the else')

        this.classList.add("burgerextend");
        overlay.classList.add("show");

    }
})