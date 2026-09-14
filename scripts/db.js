//db.js
//-----------------------------------------메뉴
// GNB 상세 네비게이션 메뉴 데이터베이스
const navDb = {
  // 1. 여성
    women: [
        {
        category: 'Featured',
        items: ['New', 'Best Seller', 'Running Collection', 'Pants Collection', 'Yoga&Pilates Collection', 'Summer Collection', 'Iconic Style', 'Only Online', 'We Made Too Much']
        },
        {
        category: 'Activity',
        items: ['Running', 'Daily wear', 'Yoga&Pilates', 'Training', 'Tennis', 'Golf']
        },
        {
        category: '상의',
        items: ['숏슬리브', '롱슬리브', '탱크탑', '후디&스웻셔츠', '코트&재킷']
        },
        {
        category: '하의',
        items: ['레깅스', '캐주얼 팬츠', '조거', '쇼츠', '스커트', '드레스&점프수트']
        },
        {
        category: '이너웨어',
        items: ['스포츠브라', '보더&언더웨어']
        },
        {
        category: '패션잡화',
        items: ['양말', '슬라이드']
        },
        {
        category: '액세서리',
        items: ['가방', '크로스바디백', '요가매트', '요가 소도구', '모자', '헤어 액세서리', '장갑', '워터보틀']
        }
    ],

    // 2. 남성
    men: [
        {
        category: 'Featured',
        items: ['New', 'Best Seller', 'Running Collection', 'Pants Collection', 'Summer Collection', 'ABC Collection', 'Iconic Style', 'Only Online', 'We Made Too Much']
        },
        {
        category: 'Activity',
        items: ['Running', 'Daily wear', 'Yoga', 'Training', 'Tennis', 'Golf']
        },
        {
        category: '상의',
        items: ['숏슬리브', '롱슬리브', '슬리브리스', '셔츠', '후디&스웻셔츠', '탱크탑', '코트&재킷']
        },
        {
        category: '하의',
        items: ['캐주얼 팬츠', '조거', '쇼츠', '스웻팬츠']
        },
        {
        category: '이너웨어',
        items: ['언더웨어', '타이즈']
        },
        {
        category: '패션잡화',
        items: ['양말', '슬라이드']
        },
        {
        category: '액세서리',
        items: ['가방', '크로스바디백', '요가매트', '요가 소도구', '모자', '워터보틀']
        }
    ],

    // 3. 액세서리
    accessories: [
        {
        category: 'Featured',
        items: ['New', 'Best Seller', 'Bag Collection', 'We Made Too Much']
        },
        {
        category: 'Activity',
        items: ['Running', 'Yoga', 'Training']
        },
        {
        category: '액세서리',
        items: ['가방', '요가매트', '요가 소도구', '워터보틀', '장갑', '모자', '헤어 액세서리', '헤어밴드']
        }
    ],

    // 4. 신제품
    newItems: [
        { name: '전체 신제품', link: '#' },
        { name: '여성 신제품', link: '#' },
        { name: '남성 신제품', link: '#' },
        { name: '액세서리 신제품', link: '#' }
    ],

    // 5. 커뮤니티
    community: [
        { name: '브랜드 스토리', link: '#' },
        { name: '앰배서더 소개', link: '#' },
        { name: '소셜 임팩트', link: '#' },
        { name: '채용', link: '#' }
    ]
};

//-----------------------------------------4행 베스트셀러 상품 데이터 베이스
//여성 베스트셀러
const womanBestDb = [
    {
        num: 1,
        thum: 'images/item/1.png',
        item_name: '그루브 하이라이즈 와이드 레그 팬츠 아시아 핏',
        item_price: '118,000원 ~ 169,000원'
    },
    {
        num: 2,
        thum: 'images/item/4-2.webp',
        item_name: '룰루레몬 에너지 브라 하이 서포트 지퍼 프런트 *하이 서포트, B–G컵',
        item_price: '87,000원 ~ 109,000원'
    },
    {
        num: 3,
        thum: 'images/item/4-3.webp',
        item_name: '스쿠바 에볼브 클래식 풀집 후디',
        item_price: '184,000원'
    },
    {
        num: 4,
        thum: 'images/item/4-4.webp',
        item_name: '패스트 앤 프리 포 포켓 하이라이즈 타이츠 24" *아시아 핏',
        item_price: '159,000원'
    },
    {
        num: 5,
        thum: 'images/item/4-5.webp',
        item_name: '패스트 앤 프리 식스 포켓 하이라이즈 쇼츠 6" *업데이트 디자인',
        item_price: '93,000원'
    },
    {
        num: 6,
        thum: 'images/item/4-6.webp',
        item_name: '패스트 앤 프리 식스 포켓 하이라이즈 타이츠 26" *아시아 핏',
        item_price: '184,000원'
    },
    {
        num: 7,
        thum: 'images/item/4-7.webp',
        item_name: '스쿠바 에볼브 풀집 후디',
        item_price: '184,000원'
    },
    {
        num: 8,
        thum: 'images/item/4-8.webp',
        item_name: '패스트 앤 프리 식스 포켓 하이라이즈 타이츠 25" *업데이트 디자인',
        item_price: '184,000원'
    },
    {
        num: 9,
        thum: 'images/item/4-9.webp',
        item_name: '원더 트레인 스트래피 레이서 브라 라이트 서포트, A/B컵',
        item_price: '62,000원 ~ 78,000원'
    },
    {
        num: 10,
        thum: 'images/item/4-10.jpg',
        item_name: '스쿠바 오버사이즈드 풀집 후디 와플',
        item_price: '198,000원'
    }
    ];
// 남성 베스트셀러
const manBestDb = [
    {
        num: 1,
        thum: 'images/item/4-11.webp',
        item_name: '맨즈 패스트 앤 프리 숏슬리브 셔츠 레이스 렝스',
        item_price: '125,000원'
    },
    {
        num: 2,
        thum: 'images/item/4-12.webp',
        item_name: '패스트 앤 프리 하프 타이츠 8" 업데이트 디자인',
        item_price: '138,000원'
    },
    {
        num: 3,
        thum: 'images/item/4-13.webp',
        item_name: '맨즈 패스트 앤 프리 싱글릿 레이스 렝스',
        item_price: '109,000원'
    },
    {
        num: 4,
        thum: 'images/item/4-14.webp',
        item_name: '패스트 앤 프리 라인드 러닝 쇼츠 5" 업데이트 디자인',
        item_price: '125,000원'
    },
    {
        num: 5,
        thum: 'images/item/4-15.webp',
        item_name: '라이선스 투 트레인 라이너리스 쇼츠 7" 업데이트',
        item_price: '100,000원 ~ 125,000원'
    },
    {
        num: 6,
        thum: 'images/item/4-16.webp',
        item_name: '메탈 벤트 테크 숏슬리브 셔츠',
        item_price: '74,000원 ~ 93,000원'
    },
    {
        num: 7,
        thum: 'images/item/4-17-22.webp',
        item_name: '더 매트 5mm 천연고무 사용',
        item_price: '125,000원'
    },
    {
        num: 8,
        thum: 'images/item/4-18.webp',
        item_name: '페이스 브레이커 라이너리스 쇼츠 7"',
        item_price: '74,000원 ~ 93,000원'
    },
    {
        num: 9,
        thum: 'images/item/4-19-25.webp',
        item_name: '더블 롤러',
        item_price: '78,000원'
    },
    {
        num: 10,
        thum: 'images/item/4-20.webp',
        item_name: '메탈 벤트 테크 슬리브리스 셔츠 업데이트 핏',
        item_price: '62,000원 ~ 78,000원'
    }
];
// 악세서리 베스트셀러
const accBestDb = [
    {
        num: 1,
        thum: 'images/item/4-21.webp',
        item_name: '릴리즈 앤 리커버 볼 세트',
        item_price: '40,000원'
    },
    {
        num: 2,
        thum: 'images/item/4-17-22.webp',
        item_name: '더 매트 5mm 천연고무 사용',
        item_price: '125,000원'
    },
    {
        num: 3,
        thum: 'images/item/4-23.webp',
        item_name: '리프트 앤 렝스 요가 블록',
        item_price: '29,000원'
    },
    {
        num: 4,
        thum: 'images/item/4-24.webp',
        item_name: '삼라스 와이드 헤드밴드',
        item_price: '29,000원'
    },
    {
        num: 5,
        thum: 'images/item/4-19-25.webp',
        item_name: '더블 롤러',
        item_price: '78,000원'
    },
    {
        num: 6,
        thum: 'images/item/4-26.webp',
        item_name: '유닉섹스 데일리 에센셜 크루 삭스 3팩',
        item_price: '36,000원 ~ 51,000원'
    },
    {
        num: 7,
        thum: 'images/item/4-27.webp',
        item_name: '로고 비드 헤어 타이 3팩',
        item_price: '23,000원 ~ 29,000원'
    },
    {
        num: 8,
        thum: 'images/item/4-28.webp',
        item_name: '우먼스 Luxtreme 트레이닝 헤드밴드',
        item_price: '15,000원 ~ 19,000원'
    },
    {
        num: 9,
        thum: 'images/item/4-29.webp',
        item_name: '커브드 크로스바디 백 3L',
        item_price: '109,000원'
    },
    {
        num: 10,
        thum: 'images/item/4-30.webp',
        item_name: '패스트 앤 프리 러닝 벨트',
        item_price: '39,000원 ~ 56,000원'
    }
];
//-----------------------------------------5행 러닝 컬렉션 데이터베이스
// 5행 러닝 컬렉션 데이터베이스
const woman_runningDB = [
    {
        num: 1,
        thum: 'images/item/5-1.webp',
        item_name: '벤틸레이티드 패커블 러닝 재킷',
        item_price: '230,000원'
    },
    {
        num: 2,
        thum: 'images/item/5-2.webp',
        item_name: '패스트 앤 프리 탱크탑 미디엄 서포트, B/C컵',
        item_price: '109,000원'
    },
    {
        num: 3,
        thum: 'images/item/5-3.webp',
        item_name: '어댑티드 스테이트 트랙 재킷',
        item_price: '184,000원'
    },
    {
        num: 4,
        thum: 'images/item/5-4.webp',
        item_name: '슬릭 퍼포레이티드 탱크탑',
        item_price: '109,000원'
    },
    {
        num: 5,
        thum: 'images/item/5-5.webp',
        item_name: '스피드 업 하이라이즈 쇼츠 2.5" 업데이트',
        item_price: '55,000원 ~ 78,000원'
    }
];
// 5행 러닝 컬렉션 데이터베이스 (남성)
const man_runningDB = [
    {
        num: 1,
        thum: 'images/item/5-6.webp',
        item_name: '패스트 앤 프리 에어플로우 러닝 싱글릿',
        item_price: '125,000원'
    },
    {
        num: 2,
        thum: 'images/item/5-7.webp',
        item_name: '패스트 앤 프리 에어플로우 러닝 쇼츠 6"',
        item_price: '138,000원'
    },
    {
        num: 3,
        thum: 'images/item/5-8.webp',
        item_name: '맨즈 패스트 앤 프리 싱글릿 레이스 렝스',
        item_price: '109,000원'
    },
    {
        num: 4,
        thum: 'images/item/5-9.webp',
        item_name: '패스트 앤 프리 라인드 러닝 쇼츠 5"',
        item_price: '100,000원'
    },
    {
        num: 5,
        thum: 'images/item/5-10.webp',
        item_name: '패스트 앤 프리 라인드 러닝 쇼츠 5" 업데이트 디자인',
        item_price: '74,000원 ~ 93,000원'
    }
];
// 5행 러닝 컬렉션 데이터베이스 (악세서리)
const acc_runningDB = [
    {
        num: 1,
        thum: 'images/item/5-11.webp',
        item_name: '우먼스 패스트 앤 프리 트레일 러닝 베스트',
        item_price: '139,000원 ~ 198,000원'
    },
    {
        num: 2,
        thum: 'images/item/5-12.webp',
        item_name: '패스트 앤 프리 러닝 햇 WovenAir',
        item_price: '36,000원 ~ 51,000원'
    },
    {
        num: 3,
        thum: 'images/item/5-13.webp',
        item_name: '맨즈 패스트 앤 프리 트레일 러닝 베스트',
        item_price: '139,000원 ~ 198,000원'
    },
    {
        num: 4,
        thum: 'images/item/5-14.webp',
        item_name: '올 스포츠 백팩 10L',
        item_price: '138,000원'
    },
    {
        num: 5,
        thum: 'images/item/5-15.webp',
        item_name: '리무버블 스웻밴드 올 스포츠 바이저',
        item_price: '51,000원'
    }
];
//-----------------------------------------7행 데일리웨어 데이터 베이스
const woman_daliyDb = [
    {
        num: 1,
        thum: 'images/item/7-1.webp',
        item_name: '리틀 지지 티',
        item_price: '67,000원'
    },
    {
        num: 2,
        thum: 'images/item/7-2.jpeg',
        item_name: '스쿠바 오버사이즈드 풀집 후디 와플',
        item_price: '198,000원'
    },
    {
        num: 3,
        thum: 'images/item/7-3.jpg',
        item_name: '그루브 노라인 하이라이즈 플레어드 팬츠',
        item_price: '184,000원'
    },
    {
        num: 2,
        thum: 'images/item/7-4.webp',
        item_name: '스쿠바 에볼브 클래식 풀집 후디',
        item_price: '184,000원'
    },
    {
        num: 4,
        thum: 'images/item/7-5.webp',
        item_name: '테일러드 리조트 하이라이즈 트라우저 레귤러',
        item_price: '129,000원 ~ 184,000원'
    },
    {
        num: 6,
        thum: 'images/item/7-6.webp',
        item_name: '더 클래식 저지 티',
        item_price: '67,000원'
    }
];
/* 남자 데이터베이스 */
const man_daliyDb = [
    {
        num: 1,
        thum: 'images/item/7-7.webp',
        item_name: '맨즈 ShowZero™ 클래식 핏 폴로 셔츠',
        item_price: '97,000원 ~ 189,000원'
    },
    {
        num: 2,
        thum: 'images/item/7-8.webp',
        item_name: '맨즈 데이드드래프트 릴랙스 핏 플리티드 쇼츠',
        item_price: '230,000원'
    },
    {
        num: 3,
        thum: 'images/item/7-9.webp',
        item_name: '이지파이브 루즈 스트레이트 팬츠 32L',
        item_price: '99,000원 ~ 198,000원'
    },
    {
        num: 4,
        thum: 'images/item/7-10.webp',
        item_name: '피케 패포머 캠프 카라 셔츠',
        item_price: '169,000원'
    },
    {
        num: 5,
        thum: 'images/item/7-11.webp',
        item_name: '에브리데이 코튼 블렌드 클래식 티셔츠',
        item_price: '78,000원'
    },
    {
        num: 6,
        thum: 'images/item/7-12.webp',
        item_name: '에브리데이 코튼 블렌드 릴랙스드 티셔츠',
        item_price: '78,000원'
    }
];

//-----------------------------------------9행 Shop the look 데이터 베이스
// SNS 피드 데이터베이스
const snsDb = [
    {
        num: 1,
        thum: 'images/item/sns1.jpg',
        account: '@demisodam__',
    },
    {
        num: 2,
        thum: 'images/item/sns2.jpg',
        account: '@kimjeehyuk',
    },
    {
        num: 3,
        thum: 'images/item/sns3.jpg',
        account: '@kimjeehyuk',
    },
    {
        num: 4,
        thum: 'images/item/sns4.jpg',
        account: '@korkisen',
    }
];