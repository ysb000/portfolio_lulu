//index.js

// =================================변수
// =================================4행
const best_woman_swiper = document.querySelector('.best_woman_swiper');
const best_man_swiper = document.querySelector('.best_man_swiper');
const best_acc_swiper = document.querySelector('.best_acc_swiper');

const running_woman_swiper = document.querySelector('.running_woman_swiper');
const running_man_swiper = document.querySelector('.running_man_swiper');
const running_acc_swiper = document.querySelector('.running_acc_swiper');

const daily_woman_swiper = document.querySelector('.daily_woman_swiper');
const daily_man_swiper = document.querySelector('.daily_man_swiper');

const look_swiper = document.querySelector('.look_swiper');

const best_tab_menu = document.querySelectorAll('.best_tab_more .best_tab_menu > a');
const best_contents = document.querySelectorAll('.best_contents > .swiper');
//================================= html 생성&반복문
//================================= 4행 베스트셀러
//여성
for(let w of womanBestDb){
    // console.log(w);
    const best_woman_slide = document.createElement('div');
    best_woman_slide.classList.add('swiper-slide');

    best_woman_slide.innerHTML = `
        <a href="#">
            <p class="item_thum"><img src="${w.thum}" alt="${w.item_name}"></p>
            <div class="item_contents">
                <p class="item_name">${w.item_name}</p>
                <p class="item_price">${w.item_price}</p>
            </div>
        </a>
        <button type="button" class="wish_btn"><img src="./images/wish_v2.svg" alt="위시리스트"></button>

    `;
    best_woman_swiper.children[0].append(best_woman_slide);
}
//남성
for(let m of manBestDb){
    const best_man_slide = document.createElement('div');
    best_man_slide.classList.add('swiper-slide');
    
    best_man_slide.innerHTML = `
        <a href="#">
            <p class="item_thum"><img src="${m.thum}" alt="${m.item_name}"></p>
            <div class="item_contents">
                <p class="item_name">${m.item_name}</p>
                <p class="item_price">${m.item_price}</p>
            </div>
        </a>
        <button type="button" class="wish_btn"><img src="./images/wish_v2.svg" alt="위시리스트"></button>
    
    `;
    best_man_swiper.children[0].append(best_man_slide);
}
//액세서리
for(let a of accBestDb){
    const best_acc_slide = document.createElement('div');
    best_acc_slide.classList.add('swiper-slide');
    
    best_acc_slide.innerHTML = `
        <a href="#">
            <p class="item_thum"><img src="${a.thum}" alt="${a.item_name}"></p>
            <div class="item_contents">
                <p class="item_name">${a.item_name}</p>
                <p class="item_price">${a.item_price}</p>
            </div>
        </a>
        <button type="button" class="wish_btn"><img src="./images/wish_v2.svg" alt="위시리스트"></button>
    
    `;
    best_acc_swiper.children[0].append(best_acc_slide);
}

//================================= 5행 러닝컬렉션
//여성
for(let w of woman_runningDB){
    // console.log(w);
    const running_woman_slide = document.createElement('div');
    running_woman_slide.classList.add('swiper-slide');

    running_woman_slide.innerHTML = `
        <a href="#">
            <p class="item_thum"><img src="${w.thum}" alt="${w.item_name}"></p>
            <div class="item_contents">
                <p class="item_name">${w.item_name}</p>
                <p class="item_price">${w.item_price}</p>
            </div>
        </a>
        <button type="button" class="wish_btn"><img src="./images/wish_v2.svg" alt="위시리스트"></button>

    `;
    running_woman_swiper.children[0].append(running_woman_slide);
}
//남성
for(let m of man_runningDB){
    const running_man_slide = document.createElement('div');
    running_man_slide.classList.add('swiper-slide');
    
    running_man_slide.innerHTML = `
        <a href="#">
            <p class="item_thum"><img src="${m.thum}" alt="${m.item_name}"></p>
            <div class="item_contents">
                <p class="item_name">${m.item_name}</p>
                <p class="item_price">${m.item_price}</p>
            </div>
        </a>
        <button type="button" class="wish_btn"><img src="./images/wish_v2.svg" alt="위시리스트"></button>
    
    `;
    running_man_swiper.children[0].append(running_man_slide);
}
//액세서리
for(let a of acc_runningDB){
    const running_acc_slide = document.createElement('div');
    running_acc_slide.classList.add('swiper-slide');
    
    running_acc_slide.innerHTML = `
        <a href="#">
            <p class="item_thum"><img src="${a.thum}" alt="${a.item_name}"></p>
            <div class="item_contents">
                <p class="item_name">${a.item_name}</p>
                <p class="item_price">${a.item_price}</p>
            </div>
        </a>
        <button type="button" class="wish_btn"><img src="./images/wish_v2.svg" alt="위시리스트"></button>
    
    `;
    running_acc_swiper.children[0].append(running_acc_slide);
}

//================================= 7행 데일리웨어
//여성
for(let w of womanDailyDb){
    const daily_woman_slide = document.createElement('div');
    daily_woman_slide.classList.add('swiper-slide');

    daily_woman_slide.innerHTML = `
    <a href="#">
        <p class="item_thum"><img src="${w.thum}" alt="${w.item_name}"></p>
        <div class="item_contents">
            <p class="item_name">${w.item_name}</p>
            <p class="item_price">${w.item_price}</p>
            </div>
        </a>
        <button type="button" class="wish_btn"><img src="./images/wish_v2.svg" alt="위시리스트"></button>
    </a>
    `;
    daily_woman_swiper.children[0].append(daily_woman_slide);
}
//남성
for(let m of manDailyDb){
    const daily_man_slide = document.createElement('div');
    daily_man_slide.classList.add('swiper-slide');
    
    daily_man_slide.innerHTML = `
        <a href="#">
            <p class="item_thum"><img src="${m.thum}" alt="${m.item_name}"></p>
            <div class="item_contents">
                <p class="item_name">${m.item_name}</p>
                <p class="item_price">${m.item_price}</p>
            </div>
        </a>
        <button type="button" class="wish_btn"><img src="./images/wish_v2.svg" alt="위시리스트"></button>
    
    `;
    daily_man_swiper.children[0].append(daily_man_slide);
}

//9행 look_swiper
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
//=================================스와이퍼 연결
//================================= 4행
const best_woman_swiper_func = new Swiper(best_woman_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:30, //여백
    observer: true,        // DOM 변화 감지 후 재계산
    observeParents: true,  // 부모 요소 변화 감지 후 재계산
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

//================================= 함수 
//reset함수
function resetFunc(target){
    for(let reset of target){
        reset.classList.remove('active');
    }
}

//================================= 이벤트
//탭 클릭 시 상품 레이아웃 변경
//베스트셀러
best_tab_menu.forEach((o, i)=>{
    // console.log(o, i);
    o.addEventListener('click',()=>{
        resetFunc(best_tab_menu);
        o.classList.add('active');
        console.log(o,i);

        resetFunc(best_contents);
        best_contents[i].classList.add('active');
    })
})