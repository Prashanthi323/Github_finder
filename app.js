//init github
const github= new Github;
const ui= new UI;

// search input
const searchUser= document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    const user= e.target.value;

    if(user!==''){
        github.getUser(user)
        .then(data =>{
            console.log(data);
            if(data.profile.message=== 'Not Found'){
                //alert
            }else{
                //display profile
                ui.showProfile(data.profile);
            }
        })
    }else{
        //clear profile

    }
})