const btnpopup=document.querySelector(".buttonLogin");
// close icon for pop up window
const closeIcon=document.querySelector(".closeIcon");
//logi,register link swith
const loginlink=document.querySelector(".loginlink");
const registerlink=document.querySelector(".registerlink");
//login,register chat base plase wrapper
const wrapper=document.querySelector(".wrapper");
const cover=document.getElementById("cover");
const main=document.getElementById("main");
cover.classList.add("hide");


//login register popup place
//register link onclick event switch between login page to register page
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    
});
//login link onclick event switch between register page to login page
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    
});
//login button onclick show popup window
btnpopup.addEventListener('click',()=>{
    cover.classList.add('show');
    cover.classList.remove('hide');
    main.classList.add("hide");
    wrapper.classList.add('active-popup');
    
});
//close icon onclick remove popup window
closeIcon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    window.location.reload();
    
});

