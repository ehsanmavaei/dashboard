document.querySelector('#burger').addEventListener('click',function(){
    if(this.classList.contains("burgerextend")){
        console.log('in the if')
        this.classList.remove("burgerextend");
    }else{
        console.log('in the else')

        this.classList.add("burgerextend");

    }
})