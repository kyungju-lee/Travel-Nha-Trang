/**
 * 🌴 Nha Trang Travel AI Assistant
 * 모바일 최적화 AI 여행 비서
 */

class TravelAssistant {
    constructor() {
        this.chatHistory = [];
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createChatInterface();
        this.setupEventListeners();
        this.loadChatHistory();
    }

    createChatInterface() {
        // 플로팅 버튼
        const chatButton = document.createElement('button');
        chatButton.className = 'chat-toggle-btn';
        chatButton.innerHTML = '💬';
        chatButton.setAttribute('aria-label', 'AI 여행 비서 열기');
        document.body.appendChild(chatButton);

        // 챗봇 컨테이너
        const chatContainer = document.createElement('div');
        chatContainer.className = 'chat-container';
        chatContainer.innerHTML = `
            <div class="chat-header">
                <div class="chat-header-content">
                    <span class="chat-avatar">🤖</span>
                    <div>
                        <h3>나트랑 여행 비서</h3>
                        <p>무엇이든 물어보세요!</p>
                    </div>
                </div>
                <button class="chat-close-btn" aria-label="닫기">×</button>
            </div>
            <div class="chat-messages" id="chatMessages"></div>
            <div class="chat-input-container">
                <input 
                    type="text" 
                    id="chatInput" 
                    class="chat-input" 
                    placeholder="질문을 입력하세요..."
                    autocomplete="off"
                />
                <button class="chat-send-btn" id="chatSendBtn" aria-label="전송">📤</button>
            </div>
        `;
        document.body.appendChild(chatContainer);

        // 초기 환영 메시지
        this.addWelcomeMessage();
    }

    setupEventListeners() {
        const chatToggle = document.querySelector('.chat-toggle-btn');
        const chatClose = document.querySelector('.chat-close-btn');
        const chatInput = document.getElementById('chatInput');
        const chatSendBtn = document.getElementById('chatSendBtn');
        const chatContainer = document.querySelector('.chat-container');

        // 토글 버튼
        chatToggle.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.toggleChat());

        // 전송 버튼
        chatSendBtn.addEventListener('click', () => this.sendMessage());

        // Enter 키
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // 외부 클릭 시 닫기
        chatContainer.addEventListener('click', (e) => {
            if (e.target === chatContainer) {
                this.toggleChat();
            }
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatContainer = document.querySelector('.chat-container');
        const chatToggle = document.querySelector('.chat-toggle-btn');

        if (this.isOpen) {
            chatContainer.classList.add('active');
            chatToggle.classList.add('hidden');
            document.getElementById('chatInput').focus();
        } else {
            chatContainer.classList.remove('active');
            chatToggle.classList.remove('hidden');
        }
    }

    addWelcomeMessage() {
        const welcomeMessages = [
            "안녕하세요! 🌴 나트랑 여행 비서입니다.",
            "여행 일정, 관광지, 맛집, 꿀팁 등 무엇이든 물어보세요!",
            "",
            "💡 예시 질문:",
            "• 오늘 일정이 뭐야?",
            "• 빈원더스 가는 방법 알려줘",
            "• 맛집 추천해줘",
            "• 환전은 어떻게 해야 해?",
            "• 그랩 사용법 알려줘"
        ];

        welcomeMessages.forEach(msg => {
            if (msg) {
                this.addMessage(msg, 'assistant');
            }
        });
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();

        if (!message) return;

        // 사용자 메시지 추가
        this.addMessage(message, 'user');
        input.value = '';

        // AI 응답 생성 (약간의 지연으로 자연스러움)
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage(response, 'assistant');
        }, 500);
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = text;

        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);

        // 스크롤을 맨 아래로
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // 히스토리 저장
        this.chatHistory.push({ text, sender, timestamp: new Date() });
        this.saveChatHistory();
    }

    generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        const data = getTravelData();

        // 일정 관련 질문
        if (message.includes('일정') || message.includes('스케줄') || message.includes('오늘') || message.includes('내일')) {
            return this.getScheduleResponse(message, data);
        }

        // 관광지 관련 질문
        if (message.includes('관광지') || message.includes('빈원더스') || message.includes('포나가르') || 
            message.includes('롱선사') || message.includes('담 시장') || message.includes('혼총')) {
            return this.getAttractionResponse(message, data);
        }

        // 맛집 관련 질문
        if (message.includes('맛집') || message.includes('식당') || message.includes('카페') || 
            message.includes('음식') || message.includes('먹을') || message.includes('레스토랑')) {
            return this.getRestaurantResponse(message, data);
        }

        // 항공 관련 질문
        if (message.includes('항공') || message.includes('비행기') || message.includes('출발') || 
            message.includes('도착') || message.includes('공항')) {
            return this.getFlightResponse(data);
        }

        // 숙소 관련 질문
        if (message.includes('리조트') || message.includes('숙소') || message.includes('호텔') || 
            message.includes('체크인') || message.includes('체크아웃')) {
            return this.getAccommodationResponse(data);
        }

        // 교통 관련 질문
        if (message.includes('그랩') || message.includes('택시') || message.includes('교통') || 
            message.includes('가는 방법') || message.includes('이동')) {
            return this.getTransportationResponse(data);
        }

        // 환전 관련 질문
        if (message.includes('환전') || message.includes('돈') || message.includes('동') || 
            message.includes('달러') || message.includes('환율')) {
            return this.getCurrencyResponse(data);
        }

        // 날씨 관련 질문
        if (message.includes('날씨') || message.includes('온도') || message.includes('기온')) {
            return this.getWeatherResponse(data);
        }

        // 앱 관련 질문
        if (message.includes('앱') || message.includes('어플')) {
            return this.getAppsResponse(data);
        }

        // 팁 관련 질문
        if (message.includes('팁') || message.includes('꿀팁') || message.includes('주의') || 
            message.includes('주의사항')) {
            return this.getTipsResponse(data);
        }

        // 일반적인 인사
        if (message.includes('안녕') || message.includes('하이') || message.includes('헬로')) {
            return "안녕하세요! 나트랑 여행 비서입니다. 무엇을 도와드릴까요? 😊";
        }

        // 감사 인사
        if (message.includes('고마워') || message.includes('감사') || message.includes('thanks')) {
            return "천만에요! 즐거운 여행 되세요! 🌴✨";
        }

        // 기본 응답
        return this.getDefaultResponse(message, data);
    }

    getScheduleResponse(message, data) {
        const today = new Date();
        const travelStart = new Date(data.basic.dates.start);
        const daysDiff = Math.floor((today - travelStart) / (1000 * 60 * 60 * 24)) + 1;

        if (message.includes('오늘')) {
            if (daysDiff >= 1 && daysDiff <= 6) {
                const daySchedule = getDaySchedule(daysDiff);
                if (daySchedule) {
                    return this.formatDaySchedule(daySchedule, daysDiff);
                }
            }
            return "오늘은 여행 일정이 없습니다. 여행 시작일은 2026년 1월 1일입니다! 📅";
        }

        if (message.includes('내일')) {
            const tomorrowDay = daysDiff + 1;
            if (tomorrowDay >= 1 && tomorrowDay <= 6) {
                const daySchedule = getDaySchedule(tomorrowDay);
                if (daySchedule) {
                    return this.formatDaySchedule(daySchedule, tomorrowDay);
                }
            }
        }

        // 전체 일정 요약
        let response = "📅 나트랑 여행 일정 (6일)\n\n";
        for (let i = 1; i <= 6; i++) {
            const day = getDaySchedule(i);
            if (day) {
                response += `${i}일차 (${day.date} ${day.day}) - ${day.theme}\n`;
                if (day.events && day.events.length > 0) {
                    response += `  • ${day.events[0].title}\n`;
                }
                response += "\n";
            }
        }
        response += "더 자세한 정보는 웹사이트의 일정 섹션을 확인해주세요!";
        return response;
    }

    formatDaySchedule(daySchedule, dayNum) {
        let response = `📅 ${dayNum}일차 일정 (${daySchedule.date} ${daySchedule.day})\n`;
        response += `테마: ${daySchedule.theme}\n\n`;
        
        daySchedule.events.forEach(event => {
            response += `⏰ ${event.time}\n`;
            response += `   ${event.title}\n`;
            if (event.description) {
                response += `   ${event.description}\n`;
            }
            response += "\n";
        });

        if (daySchedule.tips && daySchedule.tips.length > 0) {
            response += "💡 팁:\n";
            daySchedule.tips.forEach(tip => {
                response += `   • ${tip}\n`;
            });
        }

        return response;
    }

    getAttractionResponse(message, data) {
        // 특정 관광지 검색
        for (const [key, attraction] of Object.entries(data.attractions)) {
            if (message.includes(attraction.name.toLowerCase()) || 
                message.includes(attraction.nameEnglish.toLowerCase())) {
                return this.formatAttractionInfo(attraction);
            }
        }

        // 빈원더스 특별 처리
        if (message.includes('빈원더스')) {
            return this.formatAttractionInfo(data.attractions.vinwonders);
        }

        // 전체 관광지 목록
        let response = "🏛️ 추천 관광지:\n\n";
        for (const [key, attraction] of Object.entries(data.attractions)) {
            response += `📍 ${attraction.name}\n`;
            response += `   ${attraction.description}\n`;
            response += `   ⏰ ${attraction.hours}\n`;
            response += `   🚗 ${attraction.distance}\n\n`;
        }
        response += "더 자세한 정보는 웹사이트의 관광지 섹션을 확인해주세요!";
        return response;
    }

    formatAttractionInfo(attraction) {
        let response = `📍 ${attraction.name}\n`;
        response += `${attraction.description}\n\n`;
        response += `⏰ 운영시간: ${attraction.hours}\n`;
        response += `🚗 거리: ${attraction.distance}\n`;
        if (attraction.admission) {
            response += `💰 입장료: ${attraction.admission}\n`;
        }
        response += `🚗 교통: ${attraction.transportation}\n\n`;
        
        if (attraction.tips && attraction.tips.length > 0) {
            response += "💡 팁:\n";
            attraction.tips.forEach(tip => {
                response += `   • ${tip}\n`;
            });
        }

        return response;
    }

    getRestaurantResponse(message, data) {
        // 카페 검색
        if (message.includes('카페') || message.includes('커피')) {
            let response = "☕ 추천 카페:\n\n";
            data.restaurants.cafes.forEach(cafe => {
                response += `☕ ${cafe.name}\n`;
                response += `   ${cafe.type}\n`;
                response += `   ${cafe.description}\n`;
                if (cafe.recommended) {
                    response += `   추천: ${cafe.recommended}\n`;
                }
                response += "\n";
            });
            return response;
        }

        // 해산물 레스토랑
        if (message.includes('해산물') || message.includes('씨푸드')) {
            let response = "🦐 해산물 레스토랑:\n\n";
            data.restaurants.seafood.forEach(restaurant => {
                response += `🦐 ${restaurant.name}\n`;
                response += `   ${restaurant.description}\n\n`;
            });
            return response;
        }

        // 전체 맛집 목록
        let response = "🍽️ 추천 맛집:\n\n";
        response += "🦐 해산물:\n";
        data.restaurants.seafood.slice(0, 2).forEach(r => {
            response += `   • ${r.name}\n`;
        });
        response += "\n🥖 로컬 푸드:\n";
        data.restaurants.local.forEach(r => {
            response += `   • ${r.name}\n`;
        });
        response += "\n☕ 카페:\n";
        data.restaurants.cafes.slice(0, 2).forEach(r => {
            response += `   • ${r.name}\n`;
        });
        response += "\n더 자세한 정보는 웹사이트의 맛집 섹션을 확인해주세요!";
        return response;
    }

    getFlightResponse(data) {
        let response = "✈️ 항공 정보\n\n";
        response += "🛫 가는 편:\n";
        response += `   ${data.flights.outbound.departure.airport} → ${data.flights.outbound.arrival.airport}\n`;
        response += `   ${data.flights.outbound.departure.date} ${data.flights.outbound.departure.time}\n`;
        response += `   항공사: ${data.flights.outbound.carrier} ${data.flights.outbound.flightNumber}\n`;
        response += `   소요시간: ${data.flights.outbound.duration}\n\n`;
        
        response += "🛬 오는 편:\n";
        response += `   ${data.flights.return.departure.airport} → ${data.flights.return.arrival.airport}\n`;
        response += `   ${data.flights.return.departure.date} ${data.flights.return.departure.time}\n`;
        response += `   항공사: ${data.flights.return.carrier} ${data.flights.return.flightNumber}\n`;
        response += `   소요시간: ${data.flights.return.duration}`;
        return response;
    }

    getAccommodationResponse(data) {
        let response = `🏨 ${data.accommodation.nameKorean}\n`;
        response += `${data.accommodation.name}\n\n`;
        response += `📍 위치: ${data.accommodation.location}\n`;
        response += `⭐ 등급: ${data.accommodation.rating}성급\n`;
        response += `🕐 체크인: ${data.accommodation.checkIn}\n`;
        response += `🕐 체크아웃: ${data.accommodation.checkOut}\n`;
        response += `🚗 공항 픽업: ${data.accommodation.airportPickup ? '신청 완료 ✅' : '없음'}\n`;
        response += `🍳 조식: ${data.accommodation.breakfast ? '포함 ✅' : '불포함'}\n\n`;
        response += "시설:\n";
        data.accommodation.amenities.slice(0, 5).forEach(amenity => {
            response += `   • ${amenity}\n`;
        });
        return response;
    }

    getTransportationResponse(data) {
        let response = "🚗 교통 정보\n\n";
        response += "그랩(Grab) 앱 사용:\n";
        response += "   • 목적지 주소를 영어로 저장해두면 편리합니다\n";
        response += "   • 현금 결제 시 잔돈 준비!\n";
        response += "   • 앱에서 목적지 검색 후 예약\n\n";
        response += "주요 거리:\n";
        response += "   • 리조트 → 빈원더스: 약 50분\n";
        response += "   • 리조트 → 포나가르 사원: 약 30분\n";
        response += "   • 리조트 → 담 시장: 약 35분\n";
        return response;
    }

    getCurrencyResponse(data) {
        let response = "💱 환전 정보\n\n";
        response += `환율: ${data.usefulInfo.currency.exchangeRate}\n\n`;
        response += `💡 팁: ${data.usefulInfo.currency.tip}\n\n`;
        response += "결제 팁:\n";
        response += "   • 큰 식당/호텔: 카드 OK\n";
        response += "   • 작은 가게: 현금 필수!";
        return response;
    }

    getWeatherResponse(data) {
        return `🌡️ 날씨 정보\n\n온도: ${data.usefulInfo.weather.temperature}\n계절: ${data.usefulInfo.weather.season}\n\n건기라서 비가 적고 맑은 날씨가 많습니다! ☀️`;
    }

    getAppsResponse(data) {
        let response = "📱 필수 앱:\n\n";
        data.usefulInfo.apps.forEach(app => {
            response += `${app.icon} ${app.name}\n`;
            response += `   ${app.description}\n\n`;
        });
        return response;
    }

    getTipsResponse(data) {
        let response = "💡 여행 꿀팁:\n\n";
        data.usefulInfo.tips.forEach((tip, index) => {
            if (index < 4) {
                response += `📌 ${tip.category}\n`;
                response += `   ${tip.tip}\n\n`;
            }
        });
        response += "더 많은 팁은 웹사이트의 꿀팁 섹션을 확인해주세요!";
        return response;
    }

    getDefaultResponse(message, data) {
        const responses = [
            "죄송해요, 그 질문에 대한 답변을 준비하지 못했어요. 😅\n\n다음과 같은 질문을 해주시면 도와드릴 수 있어요:\n• 일정 관련 질문\n• 관광지 정보\n• 맛집 추천\n• 교통 정보\n• 환전/팁",
            "그 질문은 아직 답변할 수 없어요. 🤔\n\n여행 일정, 관광지, 맛집, 교통 등에 대해 물어보시면 도와드릴게요!",
            "제가 답변할 수 있는 주제는 다음과 같아요:\n• 📅 여행 일정\n• 🏛️ 관광지 정보\n• 🍽️ 맛집 추천\n• ✈️ 항공 정보\n• 🏨 숙소 정보\n• 🚗 교통 정보\n• 💱 환전 정보\n\n이 중에서 무엇이 궁금하신가요?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    saveChatHistory() {
        try {
            localStorage.setItem('travel_chat_history', JSON.stringify(this.chatHistory.slice(-50))); // 최근 50개만 저장
        } catch (e) {
            console.warn('채팅 히스토리 저장 실패:', e);
        }
    }

    loadChatHistory() {
        try {
            const saved = localStorage.getItem('travel_chat_history');
            if (saved) {
                this.chatHistory = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('채팅 히스토리 로드 실패:', e);
        }
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // travel-data.js가 로드되었는지 확인
    if (typeof getTravelData === 'function') {
        window.travelAssistant = new TravelAssistant();
    } else {
        console.error('travel-data.js를 먼저 로드해주세요.');
    }
});

