//index.js
//html 생성 및 삽입
//nav
//4행
//=================================변수
const best_woman_swiper = document.querySelector('.best_woman_swiper');
const best_man_swiper = document.querySelector('.best_man_swiper');
const best_acc_swiper = document.querySelector('.best_acc_swiper');

const running_woman_swiper = document.querySelector('.running_woman_swiper');
const running_man_swiper = document.querySelector('.running_man_swiper');
const running_acc_swiper = document.querySelector('.running_acc_swiper');

const daily_woman_swiper = document.querySelector('.daily_woman_swiper');
const daily_man_swiper = document.querySelector('.daily_man_swiper');
//=================================스와이퍼 연결
//4행
const best_woman_swiper_func = new Swiper(best_woman_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:16, //여백
}); //swiper 플러그인 함수 최종 연결

const best_man_swiper_func = new Swiper(best_man_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:16, //여백
}); //swiper 플러그인 함수 최종 연결
const best_acc_swiper_func = new Swiper(best_acc_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:16, //여백
}); //swiper 플러그인 함수 최종 연결
//5행
const running_woman_swiper_func = new Swiper(running_woman_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:16, //여백
}); //swiper 플러그인 함수 최종 연결

const running_man_swiper_func = new Swiper(running_man_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:16, //여백
}); //swiper 플러그인 함수 최종 연결
const running_acc_swiper_func = new Swiper(running_acc_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:16, //여백
}); //swiper 플러그인 함수 최종 연결

//7행
const daily_woman_swiper_func = new Swiper(daily_woman_swiper, {
    slidesPerView:3, //보이는 개수
    spaceBetween:20, //여백
}); //swiper 플러그인 함수 최종 연결

const daily_man_swiper_func = new Swiper(daily_man_swiper, {
    slidesPerView:3, //보이는 개수
    spaceBetween:20, //여백
}); //swiper 플러그인 함수 최종 연결


//=================================반복문
//4행 
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
        <button type="button" class="wish_btn"><img src="./images/wish.svg" alt="위시리스트"></button>

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
        <button type="button" class="wish_btn"><img src="./images/wish.svg" alt="위시리스트"></button>
    
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
        <button type="button" class="wish_btn"><img src="./images/wish.svg" alt="위시리스트"></button>
    
    `;
    best_acc_swiper.children[0].append(best_acc_slide);
}
//5행 러닝컬렉션
//여성
for(let w of womanBestDb){
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
        <button type="button" class="wish_btn"><img src="./images/wish.svg" alt="위시리스트"></button>

    `;
    running_woman_swiper.children[0].append(running_woman_slide);
}

//남성
for(let m of manBestDb){
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
        <button type="button" class="wish_btn"><img src="./images/wish.svg" alt="위시리스트"></button>
    
    `;
    running_man_swiper.children[0].append(running_man_slide);
}

//액세서리
for(let a of accBestDb){
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
        <button type="button" class="wish_btn"><img src="./images/wish.svg" alt="위시리스트"></button>
    
    `;
    running_acc_swiper.children[0].append(running_acc_slide);
}

//7행 데일리웨어
//여성
for(let w of womanDailyDb){
    // console.log(w);
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
        <button type="button" class="wish_btn"><img src="./images/wish.svg" alt="위시리스트"></button>
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
        <button type="button" class="wish_btn"><img src="./images/wish.svg" alt="위시리스트"></button>
    
    `;
    daily_man_swiper.children[0].append(daily_man_slide);
}


//클릭 이벤트
