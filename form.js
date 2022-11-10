
/**/
let popup = document.getElementById("popup");
function send() {

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_ob53u8g";
    const templateID = "template_fbofjuv";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          
            popup.classList.add("open-popup");
        
        
      
      })

      .catch(err=>console.log(err));
  
  }

function closepopup(){
        
  popup.classList.remove("open-popup");
} 

