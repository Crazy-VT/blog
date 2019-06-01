window.onload=function () {

    //四个点
    let leftimage=document.getElementsByClassName("leftimage-bottombuttom");
    let leftpoint=leftimage[0].getElementsByTagName('li')
    // console.log(leftpoint);
    for(let i=0;i<leftpoint.length;i++){
        leftpoint[i].onmouseenter=function () {
            leftpoint[i].classList.add('hot');
        }
        leftpoint[i].onmouseleave=function () {
            leftpoint[i].classList.remove('hot');
        }
    }
    //轮播
    var current=0, next=0;

    let leftBtn=document.querySelector('.leftimage-leftbuttom');
    let rightBtn=document.querySelector('.leftimage-rightbuttom');
    let buttomBtn=document.querySelectorAll('.leftimage-bottombuttom>li');
    let imgs=document.querySelectorAll(".leftimage-Box>li");
    let w=imgs[0].offsetWidth;
    let flag=true;
    /*
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
    }*/
    rightBtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next>=imgs.length){
            next=0;
        }
        // console.log(next);
        imgs[next].style.left=w+"px";
        animate(imgs[current],{left:-w});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        buttomBtn[current].classList.remove("hot");
        buttomBtn[next].classList.add("hot");
        current=next;
    };
    leftBtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-w+"px";
        animate(imgs[current],{left:w});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        buttomBtn[current].classList.remove("hot");
        buttomBtn[next].classList.add("hot");
        current=next;
    };
    for(let i=0;i<4;i++){
        buttomBtn[i].onclick=function(){
            if(!flag){
                return;
            }
            flag=false;
            if(i===current){
                flag=true;
                return;
            }
            next=i;
            imgs[next].style.left=-w+"px";
            animate(imgs[current],{left:w});
            animate(imgs[next],{left:0},function () {
                flag=true;
            });
            buttomBtn[current].classList.remove("hot");
            buttomBtn[next].classList.add("hot");
            current=next;
        }
    }

    // 自动播放
    let leftimageBox=document.querySelector(".leftimage-Box")
    // console.log(leftimageBox);
    let t=setInterval(rightBtn.onclick,2000);
    leftimageBox.onmouseenter=function(){
        clearTimeout(t);
    }
    leftimageBox.onmouseleave=function(){
            t= setInterval(rightBtn.onclick,2000);
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

//    按需加载
//    页面滚动距离+屏幕高度>=图片到文档高度
    let viewH=window.innerHeight;
    let img=document.querySelectorAll(".anxu");
    let Arr=[];
    img.forEach(function (elm) {
        let parent=elm.offsetParent;
        Arr.push(parent.offsetTop+elm.offsetTop);
    });
    console.log(Arr);
    window.onscroll=function () {
        let scroll=document.documentElement.scrollTop;
        console.log(scroll);
        for(let i=0;i<Arr.length;i++){
            if(scroll+viewH>Arr[i]){
                if(!img[i].src){
                    console.log(11);
                img[i].src=img[i].getAttribute('aa');
                }
            }
        }
    }
}