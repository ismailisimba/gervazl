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
    const imageconts = document.querySelectorAll(".customimagecontainer");
    window.addEventListener("scroll",(e)=>{
      localObj["scrollHeight"] = document.getElementById("work").scrollHeight;
      localObj["top"] = Math.abs(document.getElementById("work").getBoundingClientRect().top);
    })
    imageconts.forEach(ele=>{
      let imagesinside = ele.querySelectorAll("img");
      imagesinside.forEach(imgin=>{
        imgin.addEventListener("click",(e)=>{
          showMeUp(imgin.cloneNode(true));
        })
      })
    })
}


function sendAStrangersHail(e){
  e.stopPropagation();


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
          switch(head.id){
            case 'workone':
            document.getElementById("portraitcont").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
            break;
            case 'worktwo':
              document.getElementById("eventcont").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
                break;
            case 'workthree':
              document.getElementById("corpcont").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
                break;
            case 'workfour':
              document.getElementById("designcont").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
                break;
            default:
              document.getElementById("portraitcont").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
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


function  showMeUp(ele){
    const deBox = document.createElement("div");
    const mom = document.getElementById("wrapper");
    deBox.id = "thisismybox";
    deBox.className = "thisismybox";
    deBox.style.width = (1.2*window.screen.width)+"px";
    deBox.style.height = (1.2*window.screen.height)+"px";
    deBox.style.backgroundColor = "black";
    deBox.style.display = "flex";
    deBox.style.flexFlow = "column";
    deBox.style.flexWrap = "no-wrap";
    deBox.style.justifyContent = "center";
    deBox.style.alignItems = "center";
    deBox.style.zIndex = 1000;
    deBox.style.position = "absolute";
    deBox.style.top = (localObj.top-24)+"px";
    deBox.style.right = (1.2*window.screen.width)+"px";
    deBox.style.transition = "all 1.3s ease-out";

    ele.style.height = (0.69*window.screen.height)+"px";
    ele.style.width = "auto";
    const remImgs = deBox.querySelectorAll("img");
    if(remImgs.length>0&&remImgs[0].nodeType){
      remImgs.forEach(ele=>ele.remove());
    }
    deBox.appendChild(ele);
    
    mom.style.overflowX = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    
    const remDebox = mom.querySelectorAll(".thisismybox");
    if(remDebox.length>0&&remDebox[0].nodeType){
      remDebox.forEach(ele=>ele.remove());
    }
    mom.appendChild(deBox);
    deBox.style.right = "-10%";
    deBox.addEventListener("click",e=>{
      e.stopPropagation();
      deBox.querySelectorAll("img")[0].addEventListener("click",e=>e.stopPropagation());
      deBox.remove();
      document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    });
}