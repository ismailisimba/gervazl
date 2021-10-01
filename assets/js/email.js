//console.log("dkvbdbv");
let reqString = "https://script.google.com/macros/s/AKfycbw39czh1LjMDSNlVJjUueIwwLMSfzfyBMrzmEPaPeqXfs3UzCDdKSDqtFds7fhA_IPQ/exec";
const localObj = {};

window.onload = () => {

   let oldNode = document.getElementById("sendmyregards");
   let newNode = oldNode.cloneNode(true);
   oldNode.parentNode.replaceChild(newNode,oldNode);
   let newDiv = document.createElement("button");

   newDiv.addEventListener("click",sendAStrangersHail,true);
   newDiv.style.width = "186px";
   newDiv.style.height = "auto";
   newDiv.style.fontSize = "12px";
   newDiv.innerText = " Send Message ";
   document.getElementById("sendmyregards").replaceWith(newDiv);

 //  addCustomEventListeners();

    document.querySelectorAll("nav")[0].querySelectorAll("ul")[0].querySelectorAll("li")[1].addEventListener("click",workActions,true);
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
  
   startHailing(contextObject,"hollacomoestasgervaz",function(){
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
              console.log(error.message);
          });
  
        
         // document.querySelectorAll(".mycolumns")[1].innerHTML = returnVal;
          return returnVal; 
  
      // tempDiv.innerHTML = Object.entries(localVar.values)[0][1][3] ;   
  };


  function  addCustomEventListeners(){
    let myHeads = document.querySelectorAll(".customworkmenulist")[0].querySelectorAll("h3");
   /* document.body.addEventListener("click",function(){
      console.log("Stop Touching me!!!")
    })*/
    document.querySelectorAll("body")[0].addEventListener("scroll",function(){
      console.log(window.scrollX);
    })
    myHeads.forEach(head=>{
      head.addEventListener("click",navigateToDisHead)
    })
  };

  function navigateToDisHead(){
    console.log(this.id);
    console.log(window.scrollY);
    console.log(window.scrollX);
    console.log(document.getElementById("wrapper").scrollHeight);
  }


  function workActions (e) {
    console.log(e);
    console.log(e.target)

    let timeOut1 = window.setTimeout(()=>{
      let cont1 = document.querySelectorAll(".customoutercontainer")[0];
      let myWorkHeads = document.querySelectorAll(".customworkmenulist")[0].querySelectorAll("h3");
      localObj["height"]= getPosStyles(cont1).height;
      localObj["width"]= getPosStyles(cont1).width;
      let images = document.getElementById("work").querySelectorAll("img");
      images.forEach(img=>{
        img.style.height = (.85*localObj.height)+"px";
      })

      let leftButts = document.querySelectorAll(".custom-left-arrow");
      let rightButts = document.querySelectorAll(".custom-right-arrow");

      leftButts.forEach(butt=>{
        butt.addEventListener("click",()=>{
          myCustomScrollFunc(butt.className,butt.parentNode);
        })
      })

      rightButts.forEach(butt=>{
        butt.addEventListener("click",()=>{
          myCustomScrollFunc(butt.className,butt.parentNode);
        })
      })


      myWorkHeads.forEach(head=>{
        head.addEventListener("click",()=>{
          document.getElementById("bg").scrollBy({
            top: 500,
            left: 0,
            behavior: 'smooth'
          });
          document.getElementById("wrapper").scrollBy({
            top: 500,
            left: 0,
            behavior: 'smooth'
          });
          console.log("everytime")
          switch(head.id){
            case 'workone':
            document.body.scrollBy({
          top: -500,
          left: 0,
          behavior: 'smooth'
        });
            break;
            case 'worktwo':
              document.getElementById("eventthead").scrollTo({
          top: getOffsetObj(document.querySelectorAll(".customworkmenu")[0]).top+48,
          left: 0,
          behavior: 'smooth'
        });
                break;
            case 'workthree':
              document.getElementById("corphead").scrollTo({
          top: getOffsetObj(document.querySelectorAll(".customworkmenu")[0]).top+48,
          left: 0,
          behavior: 'smooth'
        });
                break;
            case 'workfour':
              document.getElementById("designhead").scrollTo({
          top: getOffsetObj(document.querySelectorAll(".customworkmenu")[0]).top+48,
          left: 0,
          behavior: 'smooth'
        });
                break;
            default:
              document.getElementById("portraithead").scrollTo({
          top: getOffsetObj(document.querySelectorAll(".customworkmenu")[0]).top+48,
          left: 0,
          behavior: 'smooth'
        });
          }
        })
      })

      window.clearTimeout(timeOut1);
    },696)
    
  }



  function getPosStyles(ele){
    const eleCompStyles = window.getComputedStyle(ele);
    const stylesObj = {};
    const elemRect = ele.getBoundingClientRect();
    stylesObj["left"] = eleCompStyles.getPropertyValue("left");
    stylesObj["top"] = eleCompStyles.getPropertyValue("top");
    stylesObj["fontFam"] = eleCompStyles.getPropertyValue("font-family");
    stylesObj["width"] = elemRect.width;
    stylesObj["height"] = elemRect.height;
    stylesObj.left = stylesObj.left.slice(0,stylesObj.left.length-2);
    stylesObj.left = parseInt(stylesObj.left,10);
    stylesObj.top = stylesObj.top.slice(0,stylesObj.top.length-2);
    stylesObj.top = parseInt(stylesObj.top,10);

    return stylesObj;
};


function myCustomScrollFunc (className,parent){
  console.log(className);
  console.log(parent)

      
    if(className==="custom-left-arrow"){
        parent.querySelectorAll(".customimagecontainer")[0].scrollBy({
            top: 0,
            left: -269,
            behavior: 'smooth'
          });

    }else{ 
        parent.querySelectorAll(".customimagecontainer")[0].scrollBy({
            top: 0,
            left: 269,
            behavior: 'smooth'
        });
    }

}




function getOffsetObj (){
  //var bodyRect = document.querySelectorAll(".canvas")[0].getBoundingClientRect();
  var bodyRect = document.body.getBoundingClientRect();
  var elemRect = document.querySelectorAll(".customworkmenu")[0].getBoundingClientRect();
  const offSetObj = {};
 // offSetObj["top"]  = elemRect.top - bodyRect.top;
  offSetObj["left"]  = elemRect.left - bodyRect.left;
  offSetObj["right"]  = Math.abs(elemRect.right - bodyRect.right);
  offSetObj["bottom"]  = Math.abs(elemRect.bottom - bodyRect.bottom);
  offSetObj["parHeight"] = bodyRect.height;
  offSetObj["parWidth"] = bodyRect.width;
  offSetObj["chiWidth"] = elemRect.width;
  offSetObj["chiHeight"] = elemRect.height;

  console.log(offSetObj);
  offSetObj["top"] = 1800;


 return offSetObj;
}