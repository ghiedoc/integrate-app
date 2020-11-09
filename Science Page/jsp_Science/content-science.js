let url = "";

// UNIT 1": HUMAN BODY PARTS
if(sessionStorage.getItem("ID")==1 && sessionStorage.getItem("lessonID")==1){
    url = 'https://www.youtube.com/watch?v=ugadc_0Il7w';
    youtubeVid(url);
}

else if(sessionStorage.getItem("ID")==1 && sessionStorage.getItem("lessonID")==2){
    url = "https://www.youtube.com/embed/BG7oqAQsv-k?controls=0";
    youtubeVid(url);
}


// UNIT 2: LIVING THINGS
else if(sessionStorage.getItem("ID")==2 && sessionStorage.getItem("lessonID")==1){
    url = 'https://www.youtube.com/embed/zCz3xerrr1o?controls=0';
    youtubeVid(url);
}

else if(sessionStorage.getItem("ID")==2 && sessionStorage.getItem("lessonID")==2){
    url = "https://www.youtube.com/embed/IoCHarKoNfI?controls=0";
    youtubeVid(url);
}

// UNIT 3: PLANTS
else if(sessionStorage.getItem("ID")==3 && sessionStorage.getItem("lessonID")==1){
    url = "https://nationalueduph-my.sharepoint.com/:p:/g/personal/doctorge_students_national-u_edu_ph/EZUWm-TF_E1Ckjxk34HpFb0Ba7VfuXuRKsfHEgrHaKoslQ?e=w80Kjh";
    powerpoint(url);
}

// UNIT 4: ANIMALS
else if(sessionStorage.getItem("ID")==4 && sessionStorage.getItem("lessonID")==1){
    url = 'https://www.youtube.com/embed/tquecIG-Pws?controls=0';
    youtubeVid(url);
}

else if(sessionStorage.getItem("ID")==4 && sessionStorage.getItem("lessonID")==2){
    url = "https://www.youtube.com/embed/ZY3U25QMxS8?controls=0";
    youtubeVid(url);
}

else if(sessionStorage.getItem("ID")==4 && sessionStorage.getItem("lessonID")==3){
    url = "https://www.youtube.com/embed/BRZajMzxjeY?controls=0";
    youtubeVid(url);
}

else if(sessionStorage.getItem("ID")==4 && sessionStorage.getItem("lessonID")==4){
    url = "https://www.youtube.com/embed/xePbH2sN_ZI?controls=0";
    youtubeVid(url);
}

// UNIT 5: NON-LIVING THINGS
else if(sessionStorage.getItem("ID")==5 && sessionStorage.getItem("lessonID")==1){
    url= 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EYjuOWR-kk9OiiDdQeTE4jQBBI2iSqSWAiZqUgLfiCT3Rg?e=b8ZSWR';
    powerpoint(url);
}

else if(sessionStorage.getItem("ID")==5 && sessionStorage.getItem("lessonID")==2){
    url= 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EQCt_HGsysZDnVWY3LHiO5YBSeg4UbRRXknj23F3yOwPPw?e=L6gXbB';
    powerpoint(url);
}

else if(sessionStorage.getItem("ID")==5 && sessionStorage.getItem("lessonID")==3){
    url= 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EW8NZ-loncFLu4JYdlXC274Bs3GGkuAqnkXouOG0k40zaw?e=y8WdIJ';
    powerpoint(url);
}

else if(sessionStorage.getItem("ID")==5 && sessionStorage.getItem("lessonID")==4){
    url= 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/ER-CnJNsYJtKoY7APwpyFdcB9Mh3EKCqyyvmbARng_h9zQ?e=b9JUan';
    powerpoint(url);
}

//6
else if(sessionStorage.getItem("ID")==6 && sessionStorage.getItem("lessonID")==1){

}

else if(sessionStorage.getItem("ID")==6 && sessionStorage.getItem("lessonID")==2){

}


//7
else if(sessionStorage.getItem("ID")==7 && sessionStorage.getItem("lessonID")==1){

}

else if(sessionStorage.getItem("ID")==7 && sessionStorage.getItem("lessonID")==2){

}



//8
else if(sessionStorage.getItem("ID")==8 && sessionStorage.getItem("lessonID")==1){

}

else if(sessionStorage.getItem("ID")==8 && sessionStorage.getItem("lessonID")==2){

}

//9
else if(sessionStorage.getItem("ID")==9 && sessionStorage.getItem("lessonID")==1){

}

else if(sessionStorage.getItem("ID")==9 && sessionStorage.getItem("lessonID")==2){

}


else{

}

function youtubeVid(url){
    let container = document.createElement('div');
    container.className = "container";
    container.setAttribute("style","width:100%;height:80%");
    
    
    let framePane = document.createElement('iframe');
    framePane.setAttribute("style","width:100%;height:100%");
    framePane.setAttribute("src",url);
    // framePane.setAttribute("frameborder","0");
    // framePane.setAttribute("allow","accelerometer");
    // framePane.setAttribute("allow","autoplay");
    // framePane.setAttribute("allow","clipboard-write");
    // framePane.setAttribute("allow","encrypted-media");
    // framePane.setAttribute("allow","gyroscope");
    // framePane.setAttribute("allow","picture-in-picture");
    // framePane.setAttribute("allowfullscreen");
    
    var el = document.getElementById('marker');
    el.setAttribute("style","width:100%;height:100%");
    container.appendChild(framePane);
    
    el.appendChild(container);
}

function powerpoint(url){
    var el = document.getElementById('container');
    el.setAttribute("style","width:100%;height:100%");
    el.innerHTML = '<iframe src="'+url+'/_layouts/15/Doc.aspx?sourcedoc={25063ca0-8135-448e-9bef-64f0ef613e66}&amp;action=embedview&amp;wdAr=1.4148802017654476" width="1089px" height="793px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>';
}







