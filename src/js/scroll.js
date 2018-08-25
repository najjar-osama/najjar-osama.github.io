const setScrollHandler = ()=>{
    const scrollStep = document.body.clientHeight;
    if(!window.lastScrollStep){
        window.lastScrollStep = window.scrollY;
    }
    window.addEventListener("scroll",(e)=>{
        //e.preventDefault(); // does nothing becasue the event is not cancelable
        if(window.scrollY > window.lastScrollStep){

            window.scrollTo({
                left : 0,
                top:scrollStep,
                behavior : "smooth"
            }); 
            
        }else{
            window.scrollTo({
                left : 0,
                top: window.lastScrollStep - scrollStep,
                behavior : "smooth"
            }); 
        }
        window.lastScrollStep = window.scrollY;
    });
};

export default setScrollHandler;