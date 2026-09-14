//index.js
//html 생성 및 삽입
//nav
//4행
const best_woman_swiper = document.querySelector('.best_woman_swiper');

const best_woman_swiper_func = new Swiper(best_woman_swiper, {
    slidesPerView:5, //보이는 개수
    spaceBetween:16, //여백

}); //swiper 플러그인 함수 최종 연결
//여성
for(let w of womanBestDb){
    // console.log(w);
    const best_woman_slide = document.createElement('div');
    best_woman_slide.classList.add('swiper-slide');

    best_woman_slide.innerHTML = `
        <a href="#">
            <p class="item_thum"><img src="${w.thum}" alt=""></p>
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
    
}
