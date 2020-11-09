/**
 * Paano yung mga subcontent(description) parang katulad din
 * ba nung nasa baba keme
 */



if(sessionStorage.getItem("ID") === "1"){
    var titles=["Count 1-100","Skip Counting", "Comparisons", "Place Values", "Ordinal Numbers"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "2"){
    var titles=["Visual Examples","Addends, Sum, Basic Computation", "Vertical Addition", "Addition without regrouping",  "Addition with regrouping", "Word Problems"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }

}else if(sessionStorage.getItem("ID") === "3"){
    var titles=["Visual Examples", "Minuend, Subtrahend, Difference, Basic Computation", "Vertical Subtraction", "Subtraction without regrouping",  "Subtraction with regrouping", "Word Problems"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "4"){
    var titles=["Introduction to Money","Bills and Coins","Computing Money"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "5"){
    var titles=["Visual Examples","Multiplier, Multiplicand, Product","Multiplication of 2, 3, 4, 5, 10","Word problem"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "6"){
    var titles=["Visual Examples","Divisor, Dividend, Quotient","Division of 2,5,10","Word problem"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "7"){
    var titles=["Introduction to Fraction","Parts of Fraction", "Writing of fractions"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "8"){
    var titles=["Introduction to Shapes","Basic Shapes","Regular Polygons","Irregular Polygons", "Identifying Shapes"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}else if(sessionStorage.getItem("ID") === "9"){
    var titles=["Telling Time","Reading Time in Minutes","Quarter Hour and Half Hour"];
    for(var temp= 1;temp<=titles.length;temp++){
        Populate(temp,titles[temp-1]);
    }
    
}

function Populate(temp,Head_title){
//lesson content
let container = document.createElement('div');
container.className = "container-math";
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
    window.location.href = "/Math Page/vid-math.html";

}