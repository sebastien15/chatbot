// dropdown Animation starts
// let dropAnimation = ()=>{
//     let dropdown = document.querySelector('.dropdown')
//     let dropItem = document.querySelectorAll('.dropItem')
//     dropdown.classList.toggle('dropdownA')
//     dropItem.forEach(element => {
//         element.classList.toggle('dropItemA')
//         element.addEventListener('click',()=>{
//             dropAnimation()
//         })
//     })
// }
// let dropTriggerChat = document.querySelector('.dropTriggerChat')
// let dropTrigger = document.querySelectorAll('.dropTrigger')
// dropTrigger.forEach(element => {
//     element.addEventListener('click',()=>{
//         dropAnimation()
//     })
    
// })
// dropTriggerChat.addEventListener('click',()=>{
//     dropAnimation(2)
// })

// dropdown Animation ends

// chatbox

let chatOpener = document.querySelectorAll('.botobiWebchatchatOpener')
let chatCloser = document.querySelector('#botobiWebchatchatOpenerchatCloser')
let chatBox    = document.querySelectorAll('.botobiWebchatchatBox')
setTimeout(() => {
    // console.log("offset hei" +chatBox[0].clientHeight)
    // console.log("offset wid" +chatBox[0].clientWidth)
}, 4000);
let clicked = true
function chatFull() {
    chatBox.forEach(element => { 
        if (clicked) {
            element.classList.remove('botobiWebchatabsolute');
            element.classList.add('botobiWebchatfixed','botobiWebchatmin-h-full', 'botobiWebchatmin-w-full', 'botobiWebchatz-50', 'botobiWebchattop-0','botobiWebchatsm\:my-2','botobiWebchatleft-0','botobiWebchatbg-white');
        } else {
            element.classList.add('botobiWebchatabsolute');
            element.classList.remove('botobiWebchatfixed', 'botobiWebchatmin-h-full', 'botobiWebchatmin-w-full', 'botobiWebchatz-50', 'botobiWebchattop-0', 'botobiWebchatsm\:my-2', 'botobiWebchatleft-0', 'botobiWebchatbg-white');
            if (pos4 > window.innerHeight/2) {
                chatBox[0].style.top = "";
                chatBox[0].style.bottom = (chatBox[0].offsetBottom - pos4) + 'px';
            }else if (pos4 == 0){
                chatBox[0].style.top = "";
                chatBox[0].style.bottom = (chatBox[0].offsetBottom - pos4) + 'px';
            }else{
                chatBox[0].style.bottom = '';
                chatBox[0].style.top = pos4 + 'px';
            }
            chatBoxWidth = chatBox[0].offsetWidth
            if (window.innerWidth - pos3 < chatBoxWidth) {
                chatBox[0].style.right = '0px';
                chatBox[0].style.left  = "";
            }else if (pos3 == 0){
                chatBox[0].style.right = '0px';
                chatBox[0].style.left  = "";
            }else{
                chatBox[0].style.left = pos3 + 'px';
            }
        }
    });
    clicked = !clicked
}
showOpener(2)
function showOpener(timer) {
    timer = timer*1000
    setTimeout(() => {
        console.log(document.querySelectorAll(".botobiWebchathidden"))
        chatOpener[0].classList.toggle('botobiWebchathidden')
    }, timer);
}


var agencyName = jQuery('#webchat').data('value').toString().trim();
if (localStorage.getItem(agencyName.toString().trim() + "chatboxopened") == null || localStorage.getItem(agencyName.toString().trim() + "chatboxopened") == "false") {

    setTimeout(() => {
        chatBox[0].classList.toggle('botobiWebchathidden');
    }, 5000);
}
chatOpener[0].addEventListener('click', () => {
    document.getElementById("botobiWebchatidIncomingMsg").style.display = "none";
    chatBox[0].classList.remove('botobiWebchatmin-h-full','botobiWebchatmin-w-full','botobiWebchatz-50','botobiWebchattop-0','botobiWebchatleft-0','botobiWebchatbg-white')
    chatBox[0].classList.remove('botobiWebchathidden')
    if (pos4 > window.innerHeight/2) {
        chatBox[0].style.top = "";
        chatBox[0].style.bottom = (chatBox[0].offsetBottom - pos4) + 'px';
    }else{
        chatBox[0].style.bottom = '';
        chatBox[0].style.top = pos4 + 'px';
    }
    chatBoxWidth = chatBox[0].offsetWidth
    if (window.innerWidth - pos3 < chatBoxWidth) {
        chatBox[0].style.right = '0px';
        chatBox[0].style.left  = "";
    }else{
        chatBox[0].style.left = pos3 + 'px';
    }
})
chatCloser.addEventListener('click', () => {
    document.getElementById("botobiWebchatidIncomingMsg").style.display = "block";
    chatBox[0].classList.add('botobiWebchathidden')
    
    // chatCloser.parentElement.parentElement.parentElement.classList.toogle('botobiWebchathidden')
})

// chat box draggability code

dragElement(document.getElementsByClassName("botobiWebchatchatOpener")[0]);

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
function dragElement(elmnt) {
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;
    // if (pos4 <= 20 ) {
    //     // pos4 = 0;
    //     console.log(elmnt)
    //     pos4 = 0;
    //     console.log(pos4)
    // }
    // if (pos4 > window.innerHeight) {pos4 = 0}
    // set the element's new position:
    // chatBox.forEach(element=>{
    //     element.classList.remove('bottom-0')
    // })
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    if (pos4 > window.innerHeight/2) {
        chatBox[0].style.top = "";
        chatBox[0].style.bottom = (chatBox[0].offsetBottom - pos4) + 'px';
    }else if(pos4 <=20){
        elmnt.style.top = 0 + "px";
    }else{
        chatBox[0].style.bottom = '';
        chatBox[0].style.top = pos4 + 'px';
    }
    if(pos4 > window.innerHeight-20){
        elmnt.style.top = window.innerHeight-40 + "px";
        console.log('woking'+ window.innerHeight)
    }
    chatBoxWidth = chatBox[0].offsetWidth
    if (window.innerWidth - pos3 < chatBoxWidth) {
        chatBox[0].style.right = '0px';
        chatBox[0].style.left  = "";
    }else{
        chatBox[0].style.left = pos3 + 'px';
    }
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    chatBox[0].classList.toggle('botobiWebchathidden')
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//keep the scroll bar down 

let scrolled = false;
const chatmain = document.querySelector('.botobiWebchatchatBox main');
var chatscrollH = chatmain.scrollHeight;
setInterval(()=>{
    if (chatscrollH < chatmain.scrollHeight) {
        scrolled = false;
        updateScroll()
        chatscrollH = chatmain.scrollHeight
    }
}, 1000)
function updateScroll(){
    if (!scrolled) {
        chatmain.scrollTop = chatmain.scrollHeight;
    }
}
setInterval(()=>{
    updateScroll()
} , 1000);

chatmain.addEventListener('scroll',()=>{
    scrolled = true;
})