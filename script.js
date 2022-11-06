document.getElementById("sendButton").onclick=function(){


    let errorMessageElement = 
    
    document.getElementById("error");
    
    errorMessageElement.innerHTML = "";
    
    let name = document.getElementById("name").value;
    
    if( name == ""){
        errorMessageElement.innerHTML = "Syötä pakolliset tiedot"
        
    }
    }
    