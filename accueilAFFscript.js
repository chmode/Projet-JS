var srces = document.querySelector('#content');
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

let i=0,j,test=[2];
for(i=0;i<3;i++){
    if(i===0){
         j=Math.floor(Math.random() * 22);
        test[0]=j;
    }else if(i===1){
        do{
             j=Math.floor(Math.random() * 22);
        }while(j===test[0]);
        test[1]=j;
    }else{
        do{
            j=Math.floor(Math.random() * 22);
        }while(j===test[0] || j===test[1]);
    }
    creationCourses(courses[j].path, courses[j].title, courses[j].price);
}