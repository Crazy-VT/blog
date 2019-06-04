window.onload=function () {
    //选择头像
    let headimg=document.querySelectorAll(".content .head-img>li>img");
    console.log(headimg.length);
    let prevThumb=0;
    for(let i=0;i<headimg.length;i++){
        headimg[i].style.opacity=0.7;
        headimg[i].onclick=function() {
            headimg[prevThumb].style.opacity = 0.7;
            this.style.opacity = 1;
            prevThumb = i;
        }
    }
//    已输入字数
    let textarea=document.querySelector(".content>p>textarea");
    let limit=document.querySelector(".limit");
    textarea.onkeyup=function(){
        let value=this.value;
        limit.innerHTML=value.length;
        return value;
    };
    //  获取文本框内容
    let username=document.querySelector(".name");
    let submit=document.querySelector("#button1");
    let form=document.querySelector(".content");
    console.log(form);

    submit.onclick=function(){
        let name=username.value;
        console.log(prevThumb);
        let imgs=headimg[prevThumb].src;
        let time=new Date().toISOString().slice(0,10);
        let contentBox=document.querySelector(".Alltell");
        let content=textarea.value;
        let html=`
            <li>
                    <i class="Alltell-img">
                        <img src="${imgs}"/>
                    </i>
                    <span class="All">
                        <span class="All-top">
                            <span class="name">
                                ${name}
                            </span>
                            <span class="time">
                                ${time}
                            </span>
                        </span>
                        <span class="All-bottom">
                            ${content}
                        </span>
                    </span>
                </li>
    `;
    contentBox.innerHTML=html+contentBox.innerHTML;
    headimg[prevThumb].style.opacity=0.7;
    limit.innerHTML=0;
    form.reset();

    }

}
