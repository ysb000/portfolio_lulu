//index.js

// =================================변수
// =================================스와이퍼
const best_woman_swiper = document.querySelector('.best_woman_swiper');
const best_man_swiper = document.querySelector('.best_man_swiper');
const best_acc_swiper = document.querySelector('.best_acc_swiper');

const running_woman_swiper = document.querySelector('.running_woman_swiper');
const running_man_swiper = document.querySelector('.running_man_swiper');
const running_acc_swiper = document.querySelector('.running_acc_swiper');

const daily_woman_swiper = document.querySelector('.daily_woman_swiper');
const daily_man_swiper = document.querySelector('.daily_man_swiper');

const look_swiper = document.querySelector('.look_swiper');

// =================================탭 메뉴
const best_tab_menu = document.querySelectorAll('.best_tab_more .best_tab_menu > a');
const running_tab_menu = document.querySelectorAll('.running_tab_menu > a');
const daily_tab_menu = document.querySelectorAll('.daily_tab_menu > a');

// =================================스와이프  컨텐츠
const best_contents = document.querySelectorAll('.best_contents > .swiper');
const running_contents = document.querySelectorAll('.running_contents > .swiper');
const daily_contents = document.querySelectorAll('.daily_contents > .swiper');
//================================= html 생성&반복문
//================================= 4행 베스트셀러
// //여성
slideFunc(womanBestDb, best_woman_swiper);
//남성
slideFunc(manBestDb, best_man_swiper);
//액세서리
slideFunc(accBestDb, best_acc_swiper);
//================================= 5행 러닝컬렉션
//여성
slideFunc(woman_runningDB, running_woman_swiper);
//남성
slideFunc(man_runningDB, running_man_swiper);
//액세서리
slideFunc(acc_runningDB, running_acc_swiper);
//================================= 7행 데일리웨어
//여성
slideFunc(womanDailyDb, daily_woman_swiper);
//남성
slideFunc(manDailyDb, daily_man_swiper);

//=================================9행 look_swiper
for(let l of snsDb){
    const look_slide = document.createElement('div');
    look_slide.classList.add('swiper-slide');

    look_slide.innerHTML =`
    <div class="swiper-slide">
        <div class="item_contents">
            <p class="account">${l.account}</p>
            <a href="#"><img src="./images/style.svg" alt="정보 확인하기"></a>                                
        </div>
    </div>
    `
    look_slide.style.backgroundImage = `url(${l.thum})`;

    look_swiper.children[0].append(look_slide);
}
//=============================================================스와이퍼 연결
//================================= 4행
const best_woman_swiper_func = new Swiper(best_woman_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:30, //여백
}); //swiper 플러그인 함수 최종 연결
const best_man_swiper_func = new Swiper(best_man_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:30, //여백
}); //swiper 플러그인 함수 최종 연결
const best_acc_swiper_func = new Swiper(best_acc_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:30, //여백
}); //swiper 플러그인 함수 최종 연결

//================================= 5행
const running_woman_swiper_func = new Swiper(running_woman_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:30, //여백
}); //swiper 플러그인 함수 최종 연결
const running_man_swiper_func = new Swiper(running_man_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:30, //여백
}); //swiper 플러그인 함수 최종 연결
const running_acc_swiper_func = new Swiper(running_acc_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:30, //여백
}); //swiper 플러그인 함수 최종 연결

//================================= 7행
const daily_woman_swiper_func = new Swiper(daily_woman_swiper, {
    slidesPerView:3, //보이는 개수
    spaceBetween:20, //여백
    grid: {
    rows: 2,        // 세로 2줄 (총 6개 노출)
    fill: 'row',    // 좌->우 순서로 채우기 ('column'으로 하면 위->아래 순서)
    },
}); //swiper 플러그인 함수 최종 연결
const daily_man_swiper_func = new Swiper(daily_man_swiper, {
     slidesPerView:3, //보이는 개수
    spaceBetween:20, //여백
    grid: {
    rows: 2,        // 세로 2줄 (총 6개 노출)
    fill: 'row',    // 좌->우 순서로 채우기 ('column'으로 하면 위->아래 순서)
    },
}); //swiper 플러그인 함수 최종 연결

//================================= 9행
const look_swiper_func = new Swiper(look_swiper, {
    slidesPerView:4, //보이는 개수
    spaceBetween:20, //여백
}); //swiper 플러그인 함수 최종 연결

//============================================================= 이벤트
//탭 클릭 시 상품 레이아웃 변경
//베스트셀러
tabEventFunc(best_tab_menu, best_contents, 
    [best_woman_swiper_func, best_man_swiper_func, best_acc_swiper_func]);
tabEventFunc(running_tab_menu, running_contents, 
    [running_woman_swiper_func, running_man_swiper_func, running_acc_swiper_func]);
tabEventFunc(daily_tab_menu, daily_contents, [daily_woman_swiper_func, daily_man_swiper_func]);

//============================================================= 함수
//swiper 생성 함수
function slideFunc(db, swiper){
    for(let v of db){
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        slide.innerHTML = `
            <a href="#">
                <p class="item_thum"><img src="${v.thum}" alt="${v.item_name}"></p>
                <div class="item_contents">
                    <p class="item_name">${v.item_name}</p>
                    <p class="item_price">${v.item_price}</p>
                </div>
            </a>
            <button type="button" class="wish_btn"><img src="./images/wish_v2.svg" alt="위시리스트"></button>
        `;
        swiper.children[0].append(slide);
    }
}

//reset함수
function resetFunc(target){
    for(let reset of target){
        reset.classList.remove('active');
    }
}
//탭 클릭 시 상품 변경 함수
function tabEventFunc(tabB, itemC, swiperList= []){
    tabB.forEach((o, i)=>{
        // console.log(o, i);
        o.addEventListener('click',(e)=>{
            e.preventDefault(); //a태그 기본 링크 이동 방지
            
            resetFunc(tabB);
            o.classList.add('active');
    
            resetFunc(itemC);
            itemC[i].classList.add('active');

            if(swiperList[i]){
                swiperList[i].update();
            }
        });
    });
}