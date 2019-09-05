

                function validation(){
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var title = document.getElementById("title").value;
            var message = document.getElementById("message").value;
    
      
        if (name=='' || email=='' || message=='')
            {
                
                document.getElementById("eresult").innerHTML = "All Fields Require";
            
                return false;
            } 
        
        else if(name.length<4){
            
            document.getElementById("eresult").innerHTML = "Name must be at least 4 Characters";
                
                return false;
            }
        
        else if(title.length<4){
            
            document.getElementById("eresult").innerHTML = "Title must be at least 4 Characters";

                return false;
            }
        
        else if(message.length<20){
            
            document.getElementById("eresult").innerHTML = "Message must be at least 20 Characters";
                
                return false;
            }
        else {
            onclick="alert('Submission Successful')"
            return true;
        }

    }