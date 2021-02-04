overlay=document.querySelector('.overlay');
sidebar=document.querySelector('.sidebar');
content=document.querySelector('.content');
main=document.querySelector('.main');

document.querySelector('#burger').addEventListener('click',function(){
    
           if(size()){
               if(this.classList.contains("burgerextend")){

               this.classList.remove("burgerextend");
              overlay.classList.remove('show')

                   
                }else{
               this.classList.add("burgerextend");
               overlay.classList.add('show')
               }

            }
            else{

                if(this.classList.contains("burgerextend")){

                    this.classList.remove("burgerextend");
                   sidebar.classList.remove('minisidebar')
                   content.classList.remove('padding')
                   main.classList.remove('padding')
     
                        
                     }else{
                    this.classList.add("burgerextend");
                    sidebar.classList.add('minisidebar')
                    content.classList.add('padding')
                    main.classList.add('padding')

                    }
            }
})
          
           


 





var size =function (){
	var value=window.innerWidth;
      if( value<760){
          sidebar.classList.add('hide');
          overlay.classList.remove('hide')
	return true
	
	 

}
else {
    sidebar.classList.remove('hide')
    overlay.classList.add('hide')

return false


}
}
