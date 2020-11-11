if(sessionStorage.getItem("ID") === "1"){
    var titles=["Oral Language 1","Oral Language 2","Oral Language 3","Oral Language 4","Oral Language 5"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "2"){
    var titles=["Songs","Rhymes","Poems","Stories","Writing"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }

}else if(sessionStorage.getItem("ID") === "3"){
    var titles=["Phonics and Word Recognition​ 1","Phonics and Word Recognition​ 2","Phonics and Word Recognition​ 3","Phonics and Word Recognition​ 4","Phonics and Word Recognition​ 5"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "4"){
    var titles=["Nouns","Pronouns","Vowels and Consonant","Verb Tenses","Adjectives","Prefix and Suffix","Preposition"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "5"){
    var titles=["Homonyms","Homophones 1","Homophones 2","Synonyms and Antonyms","Vocabulary and Concept Development"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "6"){
    
    var titles=["Listening Comprehension 1","Listening Comprehension 2","Listening Comprehension 3","Listening Comprehension 4","Listening Comprehension 5"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "7"){
    var titles=["Jack and the Beanstalk","The Five W's","The Stone Soup","The Ugly Duckling","The life cycle of a Butterfly"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
}else if(sessionStorage.getItem("ID") === "8"){
    var titles=["Rani's First Day At School","Reba Wants Ice Cream","Goby's noisy friend","The Clever Rabbit ","The Right Way School", "The Magic Mirror", "The Storybook Princess"];
    for(var temp= 1;temp<=7;temp++){
        Populate(temp,titles[temp-1]);  
    }
}else if(sessionStorage.getItem("ID") === "9"){
    var titles=["Parts of the Books","Print awareness","Mark it!","What We Like About Stories","What do you do with a Book"];
    for(var temp= 1;temp<=5;temp++){
        Populate(temp,titles[temp-1]);
    }
}

function Populate(temp,Head_title){
     //lesson content
let container = document.createElement('div');
container.className = "container-eng";
container.setAttribute("onclick","showIDLesson("+temp+")");

//div > row
let container_row = document.createElement('div');
container_row.className = "row";

//div > column_img
let container_column_img = document.createElement('div');
container_column_img.className = "column-img";

//content of column_img
let imgsrc = document.createElement("img");
imgsrc.className = "image";
imgsrc.setAttribute("src","");
container_column_img.appendChild(imgsrc);

//div  > column_desc
let container_column_desc = document.createElement('div');
container_column_desc.className = "column-desc";

//content of column_desc
let title = document.createElement("h1");
var titletext = document.createTextNode(Head_title);
title.appendChild(titletext);


let hrline= document.createElement("hr");

let textcontent = document.createElement("h3");
var content = document.createTextNode("Subcontent");
textcontent.appendChild(content);
//

//appendingChild to container_column_desc
container_column_desc.appendChild(title);
container_column_desc.appendChild(hrline);
container_column_desc.appendChild(textcontent);

//appendingChild to container and container_row
container.appendChild(container_row);
container_row.appendChild(container_column_img);
container_row.appendChild(container_column_desc);
document.body.appendChild(container);
}

function showIDLesson(id){
    // alert(id);
    sessionStorage.setItem("lessonID",id); 
    window.location.href = "../English Page/vid-eng.html";

}