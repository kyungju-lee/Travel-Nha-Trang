/**
 * 🌴 Nha Trang Travel Data - 구조화된 여행 정보
 * AI 에이전트가 참조할 수 있는 데이터베이스
 */

const travelData = {
    // 기본 정보
    basic: {
        destination: "나트랑 (Nha Trang)",
        dates: {
            start: "2026-01-01",
            end: "2026-01-06",
            duration: 6
        },
        travelers: [
            { name: "아빠", emoji: "👨" },
            { name: "엄마", emoji: "👩" },
            { name: "아들", emoji: "👦", age: 11 }
        ],
        timezone: "GMT+7",
        timeDifference: -2 // 한국 대비 -2시간
    },

    // 항공 정보
    flights: {
        outbound: {
            flightNumber: "TW045",
            carrier: "티웨이항공",
            departure: {
                airport: "CJJ",
                name: "청주",
                date: "2026-01-01",
                time: "20:45"
            },
            arrival: {
                airport: "CXR",
                name: "나트랑",
                date: "2026-01-02",
                time: "00:05"
            },
            duration: "5시간 20분",
            type: "직항",
            class: "스마트운임"
        },
        return: {
            flightNumber: "TW046",
            carrier: "티웨이항공",
            departure: {
                airport: "CXR",
                name: "나트랑",
                date: "2026-01-06",
                time: "01:05"
            },
            arrival: {
                airport: "CJJ",
                name: "청주",
                date: "2026-01-06",
                time: "08:20"
            },
            duration: "5시간 15분",
            type: "직항",
            class: "스마트운임"
        }
    },

    // 숙소 정보
    accommodation: {
        name: "Amiana Resort Cam Ranh",
        nameKorean: "아미아나 깜란 리조트",
        rating: 5,
        location: "깜란만, 나트랑",
        checkIn: "14:00",
        checkOut: "12:00",
        airportPickup: true,
        breakfast: true,
        amenities: [
            "인피니티 풀",
            "프라이빗 비치",
            "스파",
            "요가",
            "레스토랑",
            "피트니스",
            "테니스",
            "키즈클럽"
        ]
    },

    // 일정 정보
    schedule: {
        day1: {
            date: "2026-01-01",
            day: "목",
            theme: "출국",
            events: [
                { time: "18:00", title: "청주공항 도착", description: "출국 수속 및 탑승 준비" },
                { time: "20:45", title: "청주 출발", description: "TW045편 나트랑행" }
            ]
        },
        day2: {
            date: "2026-01-02",
            day: "금",
            theme: "테마파크",
            events: [
                { time: "00:05", title: "나트랑 깜란공항 도착", description: "리조트 픽업 서비스 이용", highlight: true },
                { time: "01:00", title: "아미아나 리조트 체크인", description: "새벽 체크인 후 취침" },
                { time: "08:00", title: "조식", description: "리조트 조식 뷔페" },
                { time: "09:00", title: "빈원더스 오픈런!", description: "엄마 + 아들 출발 (그랩 이용)", highlight: true },
                { time: "18:00", title: "리조트 복귀", description: "그랩으로 숙소 복귀" },
                { time: "20:00", title: "일찍 취침", description: "피곤할 테니 푹 쉬기" }
            ],
            tips: [
                "알파인 코스터 먼저 타기",
                "광산 탐험",
                "더울 때 워터파크 이동",
                "놀이기구 재탑승",
                "공연 관람"
            ]
        },
        day3: {
            date: "2026-01-03",
            day: "토",
            theme: "리조트",
            events: [
                { time: "자유", title: "리조트 휴양", description: "수영장, 해변, 스파 이용" },
                { time: "선택", title: "포나가르 사원 방문", description: "심심하면 유적지 구경 (그랩 약 30분)", optional: true }
            ]
        },
        day4: {
            date: "2026-01-04",
            day: "일",
            theme: "리조트",
            events: [
                { time: "자유", title: "리조트 휴양", description: "해변 산책, 수영, 맛집 탐방" },
                { time: "선택", title: "주변 탐방", description: "롱선사, 담 시장, 혼총곶 등", optional: true }
            ]
        },
        day5: {
            date: "2026-01-05",
            day: "월",
            theme: "휴양",
            events: [
                { time: "자유", title: "마지막 휴양", description: "리조트에서 여유롭게" },
                { time: "23:00", title: "체크아웃 준비", description: "짐 정리 및 공항 이동 준비" }
            ]
        },
        day6: {
            date: "2026-01-06",
            day: "화",
            theme: "귀국",
            events: [
                { time: "01:05", title: "나트랑 출발", description: "TW046편 청주행", highlight: true },
                { time: "08:20", title: "청주공항 도착", description: "즐거운 여행 끝! 🎉" }
            ]
        }
    },

    // 관광지 정보
    attractions: {
        vinwonders: {
            name: "빈원더스 나트랑",
            nameEnglish: "VinWonders Nha Trang",
            type: "테마파크",
            priority: "필수",
            hours: "09:00 - 21:00",
            distance: "리조트에서 약 50분",
            description: "베트남 최대 테마파크. 놀이기구, 워터파크, 아쿠아리움, 공연까지!",
            tips: [
                "오픈런 필수! 인기 어트랙션 먼저",
                "알파인 코스터 → 광산 탐험 순서",
                "더울 때 워터파크 이동",
                "저녁 공연 시간 체크",
                "사물함 이용료 약 50,000동",
                "여분의 옷과 수건 필수"
            ],
            transportation: "그랩 이용"
        },
        ponagar: {
            name: "포나가르 사원",
            nameEnglish: "Po Nagar Cham Towers",
            type: "유적지",
            priority: "추천",
            hours: "06:00 - 18:00",
            distance: "리조트에서 약 30분",
            admission: "약 22,000동",
            description: "7세기 참파 왕국의 힌두교 유적지. 아름다운 건축과 나트랑 전경.",
            tips: [
                "짧은 바지/민소매 불가 (가릴 옷 제공)",
                "오전 방문 추천 (덜 더움)",
                "롱선사와 함께 방문 추천"
            ],
            transportation: "그랩 이용"
        },
        longson: {
            name: "롱선사",
            nameEnglish: "Long Son Pagoda",
            type: "사원",
            hours: "08:00 - 17:00",
            distance: "리조트에서 약 35분",
            admission: "무료",
            description: "거대한 백색 불상이 있는 불교 사원. 언덕 위에서 시내 전경 감상.",
            tips: [
                "계단이 많아 편한 신발 필수",
                "포나가르 사원과 함께 방문 추천"
            ],
            transportation: "그랩 이용"
        },
        dammarket: {
            name: "담 시장",
            nameEnglish: "Dam Market",
            type: "시장",
            hours: "06:00 - 19:00",
            distance: "리조트에서 약 35분",
            description: "나트랑 최대 전통시장. 기념품, 과일, 현지 음식 체험.",
            tips: [
                "흥정 필수! (처음 가격의 50-70%)",
                "소지품 주의",
                "오전에 방문하면 더 활기참"
            ],
            transportation: "그랩 이용"
        },
        honchong: {
            name: "혼총곶",
            nameEnglish: "Hon Chong",
            type: "자연경관",
            hours: "06:00 - 18:00",
            distance: "리조트에서 약 25분",
            description: "아름다운 바위 해안. 사진 명소로 유명한 자연 경관.",
            tips: [
                "일출/일몰 때 방문 추천",
                "포나가르 사원 근처",
                "미끄러운 바위 주의"
            ],
            transportation: "그랩 이용"
        }
    },

    // 맛집 정보
    restaurants: {
        seafood: [
            {
                name: "Louisiane Brewhouse",
                type: "브루어리 & 해산물",
                description: "해변가 브루어리. 자체 생산 맥주와 신선한 해산물. 수영장도 있어 아이와 함께 즐기기 좋음!",
                tags: ["수제맥주", "수영장", "가족친화"]
            },
            {
                name: "Sailing Club Nha Trang",
                type: "인터내셔널 & 씨푸드",
                description: "해변 레스토랑 & 바. 다양한 국제 요리, 저녁 라이브 음악.",
                tags: ["라이브음악", "석양뷰", "칵테일"]
            },
            {
                name: "Seafood Restaurant 88",
                type: "로컬 해산물",
                description: "현지인도 찾는 해산물 맛집. 신선하고 합리적인 가격.",
                tags: ["가성비", "신선함", "현지인맛집"]
            }
        ],
        local: [
            {
                name: "Banh Mi Phuong",
                type: "반미 (베트남 샌드위치)",
                description: "베트남 대표 길거리 음식. 바삭한 빵과 신선한 속재료!",
                tags: ["인기", "저렴", "간편식"]
            },
            {
                name: "LIVIN Collective",
                type: "퓨전 & 버거",
                description: "현지인과 관광객 모두에게 인기. 버거와 바비큐 요리.",
                tags: ["버거", "바비큐", "분위기"]
            }
        ],
        cafes: [
            {
                name: "Cong Caphe (콩카페)",
                type: "베트남 전통 카페",
                description: "베트남 전통 커피의 현대적 재해석. 독특한 군대 컨셉 인테리어.",
                tags: ["코코넛커피", "인스타감성", "유니크"],
                recommended: "코코넛 커피, 연유 커피"
            },
            {
                name: "Rainforest",
                type: "자연친화 카페",
                description: "열대 우림 컨셉의 카페. 신선한 주스와 건강한 식사.",
                tags: ["생과일주스", "건강식", "힐링"]
            },
            {
                name: "Cafe Terrace",
                type: "디저트 카페",
                description: "아늑한 분위기에서 현지 커피와 디저트를 즐기기 좋은 곳.",
                tags: ["디저트", "아늑함", "가족"]
            }
        ]
    },

    // 유용한 정보
    usefulInfo: {
        weather: {
            temperature: "26~30°C",
            season: "건기"
        },
        timezone: {
            difference: "한국 -2시간",
            local: "GMT+7"
        },
        currency: {
            exchangeRate: "1,000원 ≈ 18,000동",
            tip: "한국에서 달러로 환전 후 현지 금은방에서 동으로 재환전하면 유리"
        },
        voltage: "220V (한국과 동일)",
        emergency: {
            police: "113",
            ambulance: "115"
        },
        apps: [
            { name: "Grab", description: "택시/배달 앱", icon: "🚗" },
            { name: "Google Maps", description: "지도", icon: "🗺️" },
            { name: "Google 번역", description: "번역", icon: "🌐" }
        ],
        tips: [
            { category: "그랩 이용", tip: "목적지 주소를 영어로 저장해두면 편리합니다. 현금 결제 시 잔돈 준비!" },
            { category: "환전", tip: "한국에서 달러로 환전 후 현지 금은방에서 동으로 재환전하면 유리합니다." },
            { category: "빈원더스", tip: "여분의 옷과 수건 필수! 사물함 이용료 약 50,000동." },
            { category: "식사", tip: "생수는 꼭 사서 마시기. 얼음은 가급적 피하세요." },
            { category: "사원 방문", tip: "무릎과 어깨를 덮는 옷 착용. 안되면 입구에서 가릴 옷 제공됩니다." },
            { category: "결제", tip: "큰 식당/호텔은 카드 OK. 작은 가게는 현금 필수!" }
        ]
    }
};

// 데이터 접근 헬퍼 함수
const getTravelData = () => travelData;

const getDaySchedule = (dayNumber) => {
    const dayKey = `day${dayNumber}`;
    return travelData.schedule[dayKey] || null;
};

const getAttraction = (name) => {
    const key = name.toLowerCase().replace(/\s+/g, '');
    for (const [attractionKey, attraction] of Object.entries(travelData.attractions)) {
        if (attractionKey === key || 
            attraction.name.includes(name) || 
            attraction.nameEnglish.toLowerCase().includes(name.toLowerCase())) {
            return attraction;
        }
    }
    return null;
};

const getRestaurant = (name) => {
    const allRestaurants = [
        ...travelData.restaurants.seafood,
        ...travelData.restaurants.local,
        ...travelData.restaurants.cafes
    ];
    return allRestaurants.find(r => 
        r.name.toLowerCase().includes(name.toLowerCase())
    ) || null;
};

// 모듈 내보내기 (브라우저 환경)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { travelData, getTravelData, getDaySchedule, getAttraction, getRestaurant };
}

