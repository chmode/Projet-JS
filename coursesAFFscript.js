var srces = document.querySelector('#coursesshow');
function creationCourses(image, titre, prix) {
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = image;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(prix));
    div.setAttribute('class', 'card col-3 me-3 mb-3 coureseMYCLASS');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    srces.append(div);

}


/*courses.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
})*/

let i=0,k=0,test=[22],tem;
for(i=0;i<courses.length;i++){
    if(i===0){
        j=Math.floor(Math.random() * 22);
        creationCourses(courses[j].path, courses[j].title, courses[j].price);
        test[i]=j;
    }else{
        do{
            j=Math.floor(Math.random() * 22);
            for(k=0;k<test.length;k++){
                tem=1;
                if(test[k]===j){
                    tem=0;
                    break;
                }

            }
        }while(tem===0);  
        creationCourses(courses[j].path, courses[j].title, courses[j].price);  
        test[i]=j;

    }
    
}



function categoryALL(){
    window.location.reload();
}

function categoryHTML(){
    let i;
    srces.innerHTML='';
    for(i=0;i<courses.length;i++){
        if(courses[i].category==='HTML'){
            creationCourses(courses[i].path, courses[i].title, courses[i].price);
        }
    }
}

function categoryCSS(){
    let i;
    srces.innerHTML='';
    for(i=0;i<courses.length;i++){
        if(courses[i].category==='CSS'){
            creationCourses(courses[i].path, courses[i].title, courses[i].price);
        }
    }
}

function categoryPHP(){
    let i;
    srces.innerHTML='';
    for(i=0;i<courses.length;i++){
        if(courses[i].category==='PHP'){
            creationCourses(courses[i].path, courses[i].title, courses[i].price);
        }
    }
}





var srch=document.getElementById("mysearch");

function searchC(){
    let i;
    srces.innerHTML='';
    for(i=0;i<courses.length;i++){
        if(courses[i].title.indexOf(srch.value)!=-1){
            creationCourses(courses[i].path, courses[i].title, courses[i].price);
        }
    }
}






var ranger=document.getElementById("pricerang");
var rangervalue=document.getElementById("pricevalue");
rangervalue.innerHTML='Value: $'+ranger.value;
function rng(){
    let i;
    srces.innerHTML='';
    rangervalue.innerHTML='Value: $'+ranger.value;
    for(i=0;i<courses.length;i++){
        if(parseFloat(courses[i].price.slice(1))>=ranger.value){
            creationCourses(courses[i].path, courses[i].title, courses[i].price);
        }
    }
}

