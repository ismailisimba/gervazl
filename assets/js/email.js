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
      localObj["boundingRect"] = Math.abs(document.getElementById("work").getBoundingClientRect());
    })
    imageconts.forEach(ele=>{
      let imagesinside = ele.querySelectorAll("img");
      imagesinside.forEach(imgin=>{
        imgin.addEventListener("click",(e)=>{
          const width = window.screen.width;
          const height = window.screen.height;
          if(height/width>width/height){
            //taller than wide
            showMeUp(imgin.cloneNode(true),"wide");
          }else{
            //wider than taller
            showMeUp(imgin.cloneNode(true),"wide");
          }
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


function  showMeUp(ele,orientation){

  if(orientation=="wide"){

    const deBox = makeMySpecialBox();
    const remImgs = deBox.querySelectorAll("img");
    const mom = document.getElementById("wrapper");

    ele.style.height = (0.65*window.screen.height)+"px";
    ele.style.width = "auto";
    
    if(remImgs.length>0&&remImgs[0].nodeType){
      remImgs.forEach(ele=>ele.remove());
    }
    deBox.appendChild(ele);
    
   
    
    const remDebox = mom.querySelectorAll(".thisismybox");
    if(remDebox.length>0&&remDebox[0].nodeType){
      remDebox.forEach(ele=>ele.remove());
    }
    mom.appendChild(deBox);

    const timeoutOne = window.setTimeout(()=>{
      deBox.style.right = "-10%";
      
      const timeoutTwo = window.setTimeout(()=>{
        mom.style.overflowX = "hidden";
        mom.style.overflowY = "hidden";
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        window.clearTimeout(timeoutTwo);
      },10)

      window.clearTimeout(timeoutOne);
    },30)
    
    
    document.getElementById("thisismyclosearrow").addEventListener("click",e=>{
      e.stopPropagation();
      deBox.querySelectorAll("img")[0].addEventListener("click",e=>e.stopPropagation());
      //deBox.style.right = (-1.2*window.screen.width)+"px";
      const timeoutThree = window.setTimeout(()=>{
        deBox.remove();
        window.clearTimeout(timeoutThree);
      },50);
      document.getElementsByTagName("html")[0].style.overflowY = "scroll";
      //mom.style.overflowY = "scroll";
    });

  }else{
    const deBox = makeMySpecialBox();
    const remImgs = deBox.querySelectorAll("img");
    const mom = document.getElementById("wrapper");

    ele.style.width = (0.85*window.screen.width)+"px";
    ele.style.height = "auto";
    
    if(remImgs.length>0&&remImgs[0].nodeType){
      remImgs.forEach(ele=>ele.remove());
    }
    deBox.appendChild(ele);
    
   
    
    const remDebox = mom.querySelectorAll(".thisismybox");
    if(remDebox.length>0&&remDebox[0].nodeType){
      remDebox.forEach(ele=>ele.remove());
    }
    mom.appendChild(deBox);

    const timeoutOne = window.setTimeout(()=>{
      deBox.style.right = "-10%";
      
      const timeoutTwo = window.setTimeout(()=>{
        mom.style.overflowX = "hidden";
        mom.style.overflowY = "hidden";
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        window.clearTimeout(timeoutTwo);
      },10)

      window.clearTimeout(timeoutOne);
    },30)
    
    
    document.getElementById("thisismyclosearrow").addEventListener("click",e=>{
      e.stopPropagation();
      deBox.querySelectorAll("img")[0].addEventListener("click",e=>e.stopPropagation());
     // deBox.style.right = (-1.2*window.screen.width)+"px";
      const timeoutThree = window.setTimeout(()=>{
        deBox.remove();
        window.clearTimeout(timeoutThree);
      },50);
      document.getElementsByTagName("html")[0].style.overflowY = "scroll";
      //mom.style.overflowY = "scroll";
    });

  }
}


function makeMySpecialBox(){
  const imagepresenter = document.createElement("div");
  imagepresenter.id = "thisismybox";
  imagepresenter.className = "thisismybox";
  imagepresenter.style.width = (1.2*window.screen.width)+"px";
  imagepresenter.style.height = (1.2*window.screen.height)+"px";
  imagepresenter.style.backgroundColor = "black";
  imagepresenter.style.display = "flex";
  imagepresenter.style.flexFlow = "column";
  imagepresenter.style.flexWrap = "no-wrap";
  imagepresenter.style.justifyContent = "center";
  imagepresenter.style.alignItems = "center";
  imagepresenter.style.zIndex = 1000;
  imagepresenter.style.position = "absolute";
  imagepresenter.style.overflow = "hidden";
  imagepresenter.style.top = (localObj.top-(0.1*window.screen.height))+"px";
  //imagepresenter.style.right = (1.2*window.screen.width)+"px";
  imagepresenter.style.right = "-10%";
  imagepresenter.style.transition = "all 1.3s ease-out";
  imagepresenter.addEventListener("click",e=>e.stopPropagation());


  const closearrow = document.createElement("button");
  closearrow.id="thisismyclosearrow";
  closearrow.style.backgroundImage = `url(https://ismizo.com/projects/gervaz/customres/cancel_white_24dp.svg)`;
  closearrow.style.backgroundRepeat = "no-repeat";
  closearrow.style.backgroundPosition = "center";
  closearrow.style.backgroundSize = "contain";
  closearrow.style.position = "absolute";
  closearrow.style.top = (0.175*window.screen.height)+"px";
  closearrow.style.width = "48px";
  closearrow.style.boxSizing = "border-box";
  closearrow.style.padding = "6px 12px";

  imagepresenter.appendChild(closearrow);

  return imagepresenter;
}