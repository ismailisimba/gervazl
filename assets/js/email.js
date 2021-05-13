console.log("dkvbdbv");
let reqString = "https://script.google.com/macros/s/AKfycbw39czh1LjMDSNlVJjUueIwwLMSfzfyBMrzmEPaPeqXfs3UzCDdKSDqtFds7fhA_IPQ/exec";

window.onload = () => {
   let oldNode = document.getElementById("sendmyregards");
   let newNode = oldNode.cloneNode(true);
   oldNode.parentNode.replaceChild(newNode,oldNode);
   let newDiv = document.createElement("div");
   document.getElementById("sendmyregards").addEventListener("click",sendAStrangersHail);
}


function sendAStrangersHail(){


    let deId = {};
    deId["message"] = document.getElementById("message").value;
    deId["email"] = document.getElementById("email").value;
    deId["name"] = document.getElementById("name").value;
  
    let [myDate]    = new Date().toLocaleDateString("en-US").split("-");
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
  
    deId["timeid"] = myDate+"-"+hour+"-"+minute+"-"+second;

    let paraTemplate = {"params":[{"initVal":"initKey"}]};
  
    let contextObject = JSON.parse(JSON.stringify(paraTemplate));
  
    contextObject.params[0]["action"] = "later...";
    contextObject.params[0]["token"] = "wHaT tOkEn!";
    contextObject.params[0]["dataObj"] = deId;
  
   startHailing(contextObject,"hollacomoestas",function(){
      // window.location.reload();
   });
    
  }

  async function startHailing(data,para,functionToRunAfter){
    fetchInfoWithFilter(data,para).then((responseObj)=>{
      functionToRunAfter(responseObj);
    });
  }


  async function fetchInfoWithFilter (data,para) {

    data = JSON.stringify(data);
      
  
    var myRequest = new Request(reqString+"?paraOne="+para);
    
  
         
    const returnVal = await fetch(myRequest, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        //'Content-Type': 'text/txt'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data // body data type must match "Content-Type" header
    })
          .then(function(response) {
            if (!response.ok) {
              
              throw new Error("HTTP error, status = " + response.status);
              
            }
            
            return response.text();
          })
          .then(function(myBlob) {
            
            var cloudObject = JSON.parse(myBlob);
            
          
            return cloudObject;
            
          })
          .catch(function(error) {
            alert(error)
          });
  
        
         // document.querySelectorAll(".mycolumns")[1].innerHTML = returnVal;
          return returnVal; 
  
      // tempDiv.innerHTML = Object.entries(localVar.values)[0][1][3] ;   
  };