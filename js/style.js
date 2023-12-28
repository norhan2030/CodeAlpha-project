let backgroundOption=true;
let backinterval;
let landind=document.querySelector('.landing-page')
let images=["1.jfif","2.jfif","3.jfif","4.jfif","5.jfif","6.jfif","7.jfif","8.jfif","9.jfif","10.jfif"]

function randomizeImgs(){
    if(backgroundOption===true){
        backinterval=setInterval(()=>{
            let random=Math.floor(Math.random() * images.length);
            landind.style.backgroundImage='url("image/' + images[random] + '")';
        },1000)
    }
}
randomizeImgs()

//create opoup image

let Gallary=document.querySelectorAll(".gallery img")
Gallary.forEach(img=>{
    img.addEventListener('click',(e)=>{
        let overlaydiv=document.createElement("div")
        overlaydiv.className="popup"
        document.body.appendChild(overlaydiv);

        let popupbox=document.createElement("div")
        popupbox.className="popup-box"
        
        if(img.alt!==null){
            let imgHeading=document.createElement("h4")
            let imgtext=document.createTextNode(img.alt)
            imgHeading.appendChild(imgtext)
            popupbox.appendChild(imgHeading)
        }

        let popupimg=document.createElement("img")
        popupimg.src=img.src;
        popupbox.appendChild(popupimg)
        document.body.appendChild(popupbox)

        //create close button
        let closeButton=document.createElement("span")
        let closeButtontext=document.createTextNode("x")
        closeButton.appendChild(closeButtontext)
        closeButton.className="close-button"
        popupbox.appendChild(closeButton);

   
    })
})

//close popup image
document.addEventListener("click",function(e){
    if(e.target.className=="close-button"){
        e.target.parentNode.remove();
        document.querySelector(".popup").remove()
    }
})






//add

let addrecipe=document.querySelectorAll(".add");
let addpupup=document.querySelector(".popup");

addrecipe.forEach(addbutton=>{
    addbutton.addEventListener('click',(e)=>{
        addpupup.classList.add("active");
        // let overlaydivv=document.createElement("div")
        // overlaydivv.className="popup"
        // document.body.appendChild(overlaydivv);

        // let popupboxx=document.createElement("div")
        // popupboxx.className="popup-box"
        
        // let addform=document.createElement("form");

        // let popupinput=document.createElement("input")
        // popupinput.type="text";
        // popupinput.placeholder="name of recipe";
        // popupinput.name="nameofrecipe";
        // popupinput.className="pupinput1";
        // addform.appendChild(popupinput);
        // popupboxx.appendChild(addform);
        // document.body.appendChild(popupboxx);

        // let popupimgrecipe=document.createElement("input");
        // popupimgrecipe.type="text";
        // popupimgrecipe.placeholder="image of recipe"
        // popupimgrecipe.name="imageofrecipe";
        // popupimgrecipe.className="pupinput2";
        // addform.appendChild(popupimgrecipe);
        // popupboxx.appendChild(addform);
        // document.body.appendChild(popupboxx);

        // let popupsubmit=document.createElement("button");
        // popupsubmit.textContent="add";
        // popupsubmit.className="add-buttom";
        // addform.appendChild(popupsubmit);
        // popupboxx.appendChild(addform);
        // document.body.appendChild(popupboxx);


        // // create close button
        // let closeButtonn=document.createElement("span")
        // let closeButtontextt=document.createTextNode("x")
        // closeButtonn.appendChild(closeButtontextt)
        // closeButtonn.className="close-button"
        // popupboxx.appendChild(closeButtonn);

   
    })
})

//close popup add
document.addEventListener("click",function(e){
    if(e.target.className=="close-button"){
        e.target.parentNode.remove();
        document.querySelector(".popup").remove()
    }
})


// function add
let adddata=[];
let input1=document.querySelector(".pupinput1");
let input2=document.querySelector(".pupinput2");
let addbutton=document.querySelector(".add-buttom");
let addform=document.querySelector(".add-form");

addbutton.onclick = function(e){
    e.preventDefault();
    addrecipes();
    
    addform.reset('');
    // closeButtonn.click();
};


let counter=0;
if(localStorage.getItem("adddata") !=null){
    adddata=JSON.parse(localStorage.getItem("adddata"));
}
// console.log(adddata)
function addrecipes(){
    adddata.push({
       
        name : input1.value ,
        profile_pic : input2.value ,
        // profilepic : imgUrl==undefined ?"image/1.jfif":imgUrl
    });
    let addstring=JSON.stringify(adddata);
    localStorage.setItem("adddata",addstring);
    // swal("good job","you clicked the button","success");
}

let divcontainer=document.querySelector(".create");
const createdatadesign=()=>{
    // divcontainer.innerHTML="";
    adddata.forEach((data,index)=>{
        divcontainer.innerHTML+=`
        <div class="col " index='${index}'>
            <div class="card ">
                <div class="images">
                    <a href="recipe.html"><img src="${data.profile_pic}" class="card-img-top toop" alt="..."></a>              
                </div>
                <p class="name">${data.name}</p>
                <div class="card-body">       
                    <p class="card-text ico" style="text-align: left; margin-top: 0;"><i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i></p>
                </div>
                <div class="btnnn">
                    <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
        `
    })
}
createdatadesign();

//delete button recipe
let allDelBtn=document.querySelectorAll(".delete-btn");
let i;
for(i=0;i<allDelBtn.length;i++){
    allDelBtn[i].onclick=function(){
        let div=this.parentElement;
        let cardDiv=div.parentElement;
        let colDiv=cardDiv.parentElement;
        colDiv.remove();
        
    }
}


//update

let allEdit=document.querySelectorAll(".edit-btn");
let ediBtntINform=document.querySelector(".edit")

for(i=0;i<allEdit.length;i++){
    allEdit[i].onclick=function(){
        let div=this.parentElement.parentElement;
        let imgg=div.getElementsByTagName("img");
        let p=div.getElementsByClassName("name")
        let srcimg=imgg[0].src;
        let pContent=p[0].innerHTML;
        addrecipe[0].click();
        addbutton.disabled=true;
        ediBtntINform.disabled=false;
        input1.value=pContent;
        input2.value=srcimg;
        ediBtntINform.onclick=function(e){
            adddata[1]={
                name : input1.value ,
                profile_pic : input2.value ,
            }
            localStorage.setItem("adddata",JSON.stringify(adddata));
            let close=document.querySelector(".close-button");
            close.click();
        }


    }
}


// var profile_pic=document.querySelector("#profile-pic");
// var uploade_pic=document.querySelector("#uploade-field");
// uploade_pic.onchange=function(){
//     if(uploade_pic.files[0].size<1000000){
//         var fReade=new FileReader();
//         fReade.onload=function(e){
//             imgUrl=e.target.result;
//             profile_pic.src=imgUrl;
//         }
//         fReade.readAsDataURL(uploade_pic.files[0]);
//     }else{
//         alert("file is big")
//     }
// }

let alllinks=document.querySelectorAll(".links a");
alllinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        })
    })

})


//toggle menu
let toggleBtn=document.querySelector(".toggle-menu")
let tLinks=document.querySelector(".links")

toggleBtn.onclick=function(){
    // e.stopPropagation();
    this.classList.toggle("menu-active")
    tLinks.classList.toggle("open")
}

//click anywhere outside menu
document.addEventListener("click",e=>{
    if(e.target!==toggleBtn&&e.target!==tLinks){
        //check if menu is open
        if(tLinks.classList.contains("open")){
            toggleBtn.classList.toggle("menu-active")
            tLinks.classList.toggle("open")
        }
    }
})


//stop propagation onn menu
// tLinks.onclick=function(e){
//     e.stopPropagation();

// }