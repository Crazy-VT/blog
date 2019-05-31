window.onload=function () {

    //四个点
    let leftimage=document.getElementsByClassName("leftimage-bottombuttom");
    let leftpoint=leftimage[0].getElementsByTagName('li')
    // console.log(leftpoint);
    for(let i=0;i<leftpoint.length;i++){
        leftpoint[i].onmouseenter=function () {
            leftpoint[i].style.backgroundColor="#1296DB";
        }
        leftpoint[i].onmouseleave=function () {
            leftpoint[i].style.backgroundColor='#e4e3e3';
        }
    }
    //轮播
    var num=0;
    let leftBtn=document.querySelector('.leftimage-leftbuttom');
    let rightBtn=document.querySelector('.leftimage-rightbuttom');
    let buttomBtn=document.querySelectorAll('.leftimage-bottombuttom>li');
    let imgs=document.querySelectorAll(".leftimage-Box>li");
    leftBtn.onclick=function(){
        num--;
        if(num<0){
            num=imgs.length-1;
        }
        imgs.forEach(function (img,num1) {
            img.style.zIndex="1"
            buttomBtn[num1].style.background="#e4e3e3";
        })
        console.log(num);
        imgs[num].style.zIndex="3";
        buttomBtn[num].style.background="orange";
    }
    rightBtn.onclick=function(){
        num++;
        if(num==imgs.length){
            num=0;
        }
        imgs.forEach(function (img,num1) {
            img.style.zIndex="1"
            buttomBtn[num1].style.background="#e4e3e3";
        })
        // console.log(num);
        imgs[num].style.zIndex="3";
        buttomBtn[num].style.background="orange";
    }
    for(let i=0;i<buttomBtn.length;i++){
        buttomBtn[i].onclick=function(){
            imgs.forEach(function (img,num1) {
                img.style.zIndex="1"
                buttomBtn[num1].style.background="#e4e3e3";
            })
            num=i;
            // console.log(num);
            // console.log(i);
            imgs[i].style.zIndex="3";
            buttomBtn[i].style.background="orange";
        }
    }
    // 自动播放
    let leftimageBox=document.querySelector(".leftimage-Box")
    // console.log(leftimageBox);
    let t=setInterval(rightBtn.onclick,1000);
    leftimageBox.onmouseenter=function(){
        clearTimeout(t);
    }
    leftimageBox.onmouseleave=function(){
       t= setInterval(rightBtn.onclick,1000);
    }
    //五个标题
    let leftNecktitle=document.getElementsByClassName("leftNeck-title");
    let title=leftNecktitle[0].getElementsByTagName("ul");
    let littletitle=title[0].getElementsByTagName("li");
    for(let i=0;i<littletitle.length;i++){
        littletitle[i].onclick=function () {
            for(let j=0;j<littletitle.length;j++){
                littletitle[j].style.borderBottom='none';
            }
            littletitle[i].style.borderBottom='2px solid #000';
        }
    }
//  五个内容
    let Necktext=document.querySelectorAll(".leftNeck-list>li");
    // console.log(Necktext);
    Necktext.forEach(function (text,index) {
            text.onmouseenter=function () {
                for(let i=0;i<Necktext.length;i++){
                    Necktext[i].classList.remove("hot");
                }
                text.classList.add("hot");
            }
        })
}