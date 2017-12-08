window.onload=function () {
    let bannerpic = document.getElementsByClassName("banner-pic")[0];
    let widths = bannerpic.offsetWidth;
    console.log(widths);
    let lis = bannerpic.getElementsByTagName("li");
    console.log(lis);
    let bths = document.getElementsByClassName("bth-list")[0];
    console.log(bths);
    let lis1 = bths.getElementsByTagName("li");
    console.log(lis1);
    let forward = document.getElementsByClassName("banner-left")[0];
    let back= document.getElementsByClassName("banner-right")[0];

    let t;
    let flag=true;
    let now=next=0;
    t=setInterval(fn, 3000);
    back.onclick = function () {
        if(flag){
            fn();
        }
        flag=false;
    };
    forward.onclick = function () {
        if(flag){
            fn1();
        }
        flag=false;
    };
    bannerpic.onmouseover = function () {
        clearInterval(t);
    }
    bannerpic.onmouseout = function () {
        t = setInterval(fn, 3000);
    }
    function fn(){
        next++;
        if (next==lis.length) {
            next=0;
        }
        lis[next].style.left = `${widths}px`;
        animate(lis[now], {left:-widths},function () {
            for(let i=0;i<lis1.length;i++){
                lis1[i].className='';
            }
            lis1[now].className='bth';
            flag=true;
        });
        animate(lis[next],{left:0});
        now = next;
    }
    function fn1() {
        next--;
        if (next == -1) {
            next = lis.length - 1
        }
        lis[next].style.left = `-${widths}px`;
        animate(lis[now], {left: widths},function () {
            for(let i=0;i<lis1.length;i++){
                lis1[i].className='';
            }
            lis1[now].className='bth';
            flag=true;
        });
        animate(lis[next], {left: 0});
        now = next;
    }
    for (let i = 0; i<lis1.length; i++) {
        lis1[i].onclick = function () {
            if (flag) {
                if(i==now){
                    return;
                }
                else if(i<now){
                        lis[now].style.left=`${widths}px`;
                        lis[i].style.left=`0px`;
                        for(let j=0;j<lis1.length;j++){
                            lis1[j].className='';
                        }
                        lis1[i].className='bth';
                    }
                    else if(i>now){
                        lis[now].style.left=`-${widths}px`;
                        lis[i].style.left=`0px`;
                        for(let j=0;j<lis1.length;j++){
                            lis1[j].className='';
                        }
                        lis1[i].className='bth';
                    }
                    next=now=i;
                }
                flag=true;
            }
        }
//    nav
    let nav=document.getElementsByClassName("nav")[0];
    // console.log(nav);
    let list=document.querySelectorAll(".list1");
    // console.log(list);
    let mai=document.getElementsByClassName("mai");
    // console.log(mai);
    list.forEach(function (val,index) {
        val.onmouseover=function () {
                mai[index].style.display="block";
        }
        val.onmouseout=function () {
            mai[index].style.display="none";
        }
    })
//优惠轮播
    let youhui=document.getElementsByClassName("youhui")[0];
    let diyi=document.getElementsByClassName("diyiceng")[0];
    let list3=diyi.getElementsByClassName("list3");
    console.log(diyi,list3);
    let list1=diyi.childElementCount;
    console.log(list1);
    let lis3w=diyi.children[0].offsetWidth+parseInt(getComputedStyle(diyi.children[0],null).marginLeft);
    diyi.style.width=`${list1*lis3w}px`;
    console.log(lis3w);
    let btnL=document.getElementsByClassName('left')[0];
    let btnR=document.getElementsByClassName('right')[0];
    let num=0;
    let t1;
    t1=setInterval(fun,3000);
    btnR.onclick=fun;
    btnL.onclick=fun1;
    youhui.onmouseenter=function(){
        clearInterval(t1);
    }
    youhui.onmouseleave=function(){
        t1=setInterval(fun,3000);
    }
    function fun(){
        num++;
        if(num==5){
            num=0;
        }
        diyi.style.transform=`translateX(-${lis3w*num}px)`;
    }
    function fun1(){
        num--;
        if(num==-1){
            num=4;
        }
        diyi.style.transform=`translateX(-${lis3w*num}px)`;
    }
//    广告
    let l=document.querySelector(".l");
    let r=document.querySelector(".r");
    let xinwen=document.querySelector(".xinwen");
    let lia=document.querySelectorAll(".xinwen li");
    // console.log(l,r,xinwen,lia);
    let t2;
    let nub=0;
    r.onclick=fc;
    l.onclick=fc1;
    t2=setInterval(fc,1000);
    function fc(){
        nub+=2;
        if(nub==4){
            nub=0;
        }
        for(let i=0;i<lia.length;i++){
            lia[i].className='';
        }
        lia[nub].className='gg';
        lia[nub+1].className='gg';
    }
    function fc1(){
        nub-=2;
        if(nub==-2){
            nub=2;
        }
        for(let i=0;i<lia.length;i++){
            lia[i].className='';
        }
        lia[nub].className='gg';
        lia[nub+1].className='gg';
    }
//    二维码
    let youlan=document.querySelector(".youlan");
    let er=document.querySelector(".youlan .er");
    let saoma=document.querySelector(".saoma");
    er.onmouseenter=function () {
        saoma.style.display="block"
    }
    er.onmouseleave=function () {
        saoma.style.display="none"
    }
}
















