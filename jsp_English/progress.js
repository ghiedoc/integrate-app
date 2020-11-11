function showID(id){
    // alert(id);
    sessionStorage.setItem("ID",id); 
    window.location.href = "../English Page/lesson-eng.html";
}



var user = 3;
const show = "show";

    document.getElementById('passed1').style.display = "none";
function showImage(){

    if(show == 'show'){
    document.getElementById('lock1').style.display = "none";
    }if(user >= 5 ){
    document.getElementById('passed1').style.display = "inline";
        
    }else{
    //    document.getElementById('lock1').style.display = "inline";
    }
}