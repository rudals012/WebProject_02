// main.js

/* 퀵메뉴 이미지 */
// let quick1 = '';
// for()문을 이용해서 <img>를 quick01_00000.png~quick01_00019.png 생성
// <span>안에 넣기
/*
for(let i=0;i<20;i++){
    if(i<10){
        quick1 += `<img src="images/quick01/quick01_0000${i}.png" />`
    }else{
        quick1 += `<img src="images/quick01/quick01_000${i}.png" />`
    }
}
document.querySelector("span.quick1").innerHTML = quick1;

 */

const qucikSpan = document.querySelectorAll('.content1>ul>li>a>span');

for(let j=0; j<qucikSpan.length;j++){ //0,1,2,3
    let images =''
    for(let i=0; i<20; i++){
        if(i<10){
            images += `<img src="images/quick0${j+1}/quick0${j+1}_0000${i}.png" />`;
        }else{
            images += `<img src="images/quick0${j+1}/quick0${j+1}_000${i}.png" />`;
        }
    }
    qucikSpan[j].innerHTML = images;
}

let appear ='';
for(let i=0;i<57;i++){
    if(i<10){
        appear += `<img src="images/appear/appear_0000${i}.png" />`;
    }else{
        appear += `<img src="images/appear/appear_000${i}.png" />`;
    }
}
document.querySelector("a.appear").innerHTML = appear;

let loop ='';
for(let i=0;i<82;i++){
    if(i<10){
        loop += `<img src="images/loop/loop_0000${i}.png" />`;
    }else{
        loop += `<img src="images/loop/loop_000${i}.png" />`;
    }
}
document.querySelector("a.loop").innerHTML = loop;

/* 로그인 애니메이션 */
// appear 0~56 이미지
// animation: ani 2.85s linear 0s 1;
// animation: ani 2.85s linear 0.05s 1;
// animation: ani 2.85s linear 0.10s 1;

// loop 0~81 이미지
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.90s infinite;
// animation: ani 4.1s linear 2.85s infinite;
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for(let i=0; i<appearImgs.length; i++){
    appearImgs[i].style.animation = `ani 2.85s linear ${i*delay}s 1`;
}
for(let j=0; j<loopImgs.length; j++){
    loopImgs[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}

/*고객센터*/
// toggle()
// title="고객센터 열기" -> title="고객센터 닫기"

const topMenuDD = document.querySelectorAll("dl.topMenu>dd");
topMenuDD[4].addEventListener('click' , e => {
    e.currentTarget.classList.toggle("on");
    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","고객센터 열기");
    }
});

/*주메뉴*/
// .header_wrap.on
// nav.gnb>ul>li>ul.on
const headerWrap = document.querySelector('.header_wrap');
const gnbMenu = document.querySelectorAll('.gnb>ul>li');
var subMenu = document.querySelectorAll('.gnb>ul>li>ul');
for (let i = 0; i < gnbMenu.length; i++) {
    gnbMenu[i].addEventListener('mouseover', () => {
    // 고객센터에 on붙어 있으면 on을 지운다
    if(topMenuDD[4].classList.contains("on")){
        topMenuDD[4].classList.remove("on");
    }
    // 검색박스에 on붙어 있으면 on을 지운다.
    if(srchOpen.classList.contains("on")){
        srchOpen.classList.remove("on");
        srchBox.classList.remove("on");
    }

    headerWrap.classList.add("on");
    subMenu.forEach(item => {
        item.classList.add("on");
    });
    
  }); //mouseover

  gnbMenu[i].addEventListener('mouseout', () => {
    headerWrap.classList.remove("on");
    subMenu.forEach(item => {
        item.classList.remove("on");
    })
  }); //mouseout

  gnbMenu[i].children[0].addEventListener('focus', () => {
    headerWrap.classList.add("on");
    subMenu.forEach(item => {
        item.classList.add("on");
    })
  }); //focus

  gnbMenu[i].children[0].addEventListener('blur', () => {
    headerWrap.classList.remove("on");
    subMenu.forEach(item => {
        item.classList.remove("on");
    })
  }); //blur

}

  /* 검색열기닫기 */
  const srchBox = document.querySelector('form.srch');
  const srchOpen = document.querySelector('.srch_open');

  srchOpen.addEventListener("click" , e => {
      e.preventDefault();
      e.currentTarget.classList.toggle("on");
      srchBox.classList.toggle("on");

      if(e.currentTarget.classList.contains('on')){
          e.currentTarget.children[0].setAttribute('title', '검색입력서식 닫기');
      }else{
          e.currentTarget.children[0].setAttribute('title', '검색입력서식 열기');
      }
  });


/* 배너 */
const btnPrev = document.querySelector(".btn_prev");
const btnNext = document.querySelector(".btn_next");
const bnnFrame = document.querySelector(".banner_frame");
const bnnSection = document.querySelectorAll(".banner_frame>section");

const arrowA = document.querySelectorAll(".banner_arrow > a");
const rollingA = document.querySelectorAll(".banner_rolling a");

const bnn_RollA = document.querySelectorAll(".banner_rolling li a");


let bnnW = document.querySelector('body>section').offsetWidth;
window.addEventListener('resize' , ()=>{
    bnnW = document.querySelector('body>section').offsetWidth;
});

let bnnNum = 0;
let lastNum = bnnSection.length -1;

let secWhite = (bannerNummer) => {   //인자값:bnnNum을 파라미터:bannerNummer에 전달
    // roll
    bnn_RollA.forEach(item =>{
        item.classList.remove('on');
    });
    bnn_RollA[bannerNummer].classList.add('on');

    if(bnnSection[bannerNummer].classList.contains('white')) {
        arrowA.forEach(item => {
            item.classList.add('white');
        })
        rollingA.forEach(item => {
            item.classList.add('white');
        })
    }else{
        arrowA.forEach(item => {
            item.classList.remove('white');
        })
        rollingA.forEach(item => {
            item.classList.remove('white');
        })
    }
}
secWhite(0);

//next버튼을 눌렀을 때
//배너번호 1증가
//배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
//배너프레임의 left값 변경해서 배너 움직이게 


// next 버튼
btnNext.addEventListener("click" , e => {
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum){
        bnnNum=bnnFrame[0]}
    //bnnFrame.style.left = `${-bnnNum * 100}%`; //0,-100%,-200%...-1100%
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite(bnnNum);
});


//prev버튼 움직이게
btnPrev.addEventListener("click" , e => {
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum=lastNum;
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite(bnnNum);
});
  
//오토배너 작동 - setTimeout 사용, 재귀함수 사용
let autoBanner = () => {
    //next버튼 눌렀을때
    bnnNum++;
    if(bnnNum>lastNum) bnnNum=0;
    //bnnFrame.style.left = `${-bnnNum * 100}%`; //0,-100%,-200%...-1100%
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite(bnnNum);

    autoBnn = setTimeout(autoBanner,5000);
}
let autoBnn = setTimeout(autoBanner,5000);

// 배너 재생/멈춤
let flag = true;
const btnPlay = document.querySelector("a.btn_play");
btnPlay.addEventListener('click' , e => {
    e.preventDefault();
    if(flag){
        clearTimeout(autoBnn);
        btnPlay.classList.add('pause');
        flag = false;
    }else{
        autoBnn = setTimeout(autoBanner,5000);
        btnPlay.classList.remove('pause');
        flag = true;
    }
});

// 롤링버튼클릭
// const bnnRollList = document.querySelectorAll(".banner_rolling li");
// for(let i=0; i<bnnRollList.length;i++){
//     bnnRollList[i].addEventListener('click', e => {
//         e.preventDefault();
//         clearTimeout(autoBnn);
//         bnnFrame.style.left = `${-i * bnnW}px`;
//         secWhite(i); 
//         btnPlay.classList.add('pause'); 
//     })
// }

for(let i=0; i<bnn_RollA.length;i++){
    bnn_RollA[i].addEventListener('click', e => {
        e.preventDefault();
        clearTimeout(autoBnn);
        bnnFrame.style.left = `${-i * bnnW}px`;
        secWhite(i); 
        btnPlay.classList.add('pause'); 
        flag = false;
        bnnNum = i;
    })
}

// content1
// 마우스 올렸을 때 이미지에 애니메이션 적용
// 마우스 땠을 때 이미지에 애니메이션 적용
const content1Li = document.querySelectorAll(".content1 ul li"); //4개 li

for(let i=0;i<content1Li.length;i++){
    content1Li[i].addEventListener("mouseover" , e => {
        for(let k=0; k<20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = `ani 1s linear ${k*delay}s 1`;
        }
    
    });
    content1Li[i].addEventListener("mouseout" , e => {
        for(let k=0; k<20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = "none";
        }
    
    });
}

// foreach문 사용시
// content1Li.forEach(item => {
//     item.addEventListener("mouseover" , e => {
//         for(let k=0; k<20; k++){
//             let imgLi = e.currentTarget.children[0].children[0].children;
//             imgLi[k].style.animation = `ani 1s linear ${k*delay}s 1`;
//         }
//     })

//     item.addEventListener("mouseout" , e => {
//         for(let k=0; k<20; k++){
//             let imgLi = e.currentTarget.children[0].children[0].children;
//             imgLi[k].style.animation = "none";
//         }
//     })
// })


/* 스크롤 이벤트 */
const btnTop = document.querySelector('div.top');

// top
btnTop.addEventListener('click' , e =>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll' ,() => {
let scroll = document.querySelector('html').scrollTop;
    // 도넛
    const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
    const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
    const combine_Left = document.querySelector(".combine_Left");

    combine_Left.style.top = `${2190-scroll*0.5}px`;
    doughnut_Left_s.style.top = `${scroll*0.5}px`
    doughnut_Left_L.style.top = `${scroll*0.8}px`

    const doughnut_Center_M = document.querySelector(".doughnut_Center_M");

    doughnut_Center_M.style.top = `${2190-scroll*0.9}px`

    const doughnut_right_M = document.querySelector(".doughnut_right_M");
    const combine_right = document.querySelector(".combine_right");

    combine_right.style.top = `${scroll*0.7}px`;
    doughnut_right_M.style.top = `${scroll*0.7}px`

    // top버튼
    console.log(scroll);
    if(scroll <= 0){
        btnTop.classList.remove("on","ab");
    }else if(scroll > 2700){
        btnTop.classList.add("ab");
    }else{
        btnTop.classList.remove("ab");
        btnTop.classList.add("on");
    }

})

// content3
// li하나하나에 마우스오버하면 모든 li에 .on을 지우고 마우스 오버한 li만 .on이 붙어라

var all = document.querySelectorAll(".content3_inner>div>ul>li");
all.forEach(item => {
    item.addEventListener('mouseover' , e => {
        e.preventDefault();
        e.currentTarget.classList.add('on');
    });
    item.addEventListener('mouseout' , e => {
        e.currentTarget.classList.remove('on');
    });
});

//li 하나하나를 클릭했을때
//class속성값을 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 찾아서 
// 해당 클래스이름에 해당되는 li만 보이게 설정 - 각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고

const group = document.querySelectorAll(".content3_inner>ul>li>a"); //5개

const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent");
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shop");
const diner = document.querySelectorAll(".content3_inner>div>ul>li.diner");
const box = document.querySelectorAll(".content3_inner>div>ul>li.box");

for(let k=0;k<group.length;k++){
    group[k].addEventListener('click' , e => {
        e.preventDefault();
        group.forEach(item => {
            item.classList.remove('on');
        });
        e.currentTarget.classList.add('on');

        let className = e.currentTarget.parentElement.getAttribute("class");

        all.forEach(item => {
            item.style.display = "none";
        })

        switch(className){
            case "all" :
                all.forEach(item => {
                    item.style.display = "block";
                })
                break;
            case "ent" :
                ent.forEach(item => {
                    item.style.display = "block";
                })
                break;
            case "shop" :
                shop.forEach(item => {
                    item.style.display = "block";
                })
                break;
            case "diner" :
                diner.forEach(item => {
                    item.style.display = "block";
                })
                break;
            case "box" :
                box.forEach(item => {
                    item.style.display = "block";
                })
                break;
        }
    });
}

/* family_site */
const familySite = document.querySelector("dd.family_site");

familySite.addEventListener('click' , e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");

    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","열기");
    }
})

// 햄버거 버튼 클릭
const mobBtn = document.querySelector(".mobBtn")
const mobBtn_Close = document.querySelector(".mobBtn_close")
const mob = document.querySelector(".mob");

const body = document.querySelector("body");
const bg = document.querySelector("div.bg");

mobBtn.addEventListener('click', e =>{
    e.preventDefault();
    body.classList.add("on");
    bg.classList.add("on");
    mob.classList.add("on");
    mobBtn_Close.classList.add("on");
});

mobBtn_Close.addEventListener('click', e =>{
    e.preventDefault();
    body.classList.remove("on");
    bg.classList.remove("on");
    mob.classList.remove("on");
    mobBtn_Close.classList.remove("on");
});

/* 모바일 전체메뉴 */
// 탑메뉴
const mob_TopMenu = document.querySelector("dl.mob_topMenu>dd:nth-child(6)");

mob_TopMenu.addEventListener("click" , e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
});

// 주메뉴
const mob_Gnb = document.querySelectorAll("nav.mob_gnb>ul>li");
console.log(mob_Gnb);
const mob_GnbLi = document.querySelectorAll("nav.mob_gnb>ul>li>ul>li");
console.log(mob_GnbLi);



mob_Gnb.forEach(item => {
    item.addEventListener("click" , e => {
        e.preventDefault();
        e.currentTarget.classList.toggle("on");
    });
});

mob_GnbLi.forEach(item => {
    item.addEventListener("click" , e => {
        e.preventDefault();
        e.currentTarget.classList.toggle("on");
    });
});


// for(let i=0;i<mob_Gnb.length;i++){
//     mob_Gnb[i].addEventListener("click" , e => {
//         e.preventDefault();
//         e.currentTarget.classList.toggle("on");
//     });
//     mob_Gnb.forEach(item => {
//         item.classList.remove("on");
//     })
// }

// for(let i=0;i<mob_GnbLi.length;i++){
//     mob_GnbLi[i].addEventListener("click" , e => {
//         e.preventDefault();
//         e.currentTarget.classList.toggle("on");
//     });
//     mob_GnbLi.forEach(item => {
//         item.classList.remove("on");
//     })
// }
// function activation(index,list){
//     for(let el of list){
//         el.classList.remove("on");
//     }
//     list[index].classList.add("on");
// }










