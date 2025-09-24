// 공통 JavaScript - 회사 주변 맛집 추천 서비스

// 앱 전체 상태 관리
const AppState = {
    currentLocation: null,
    searchRadius: 500,
    selectedRestaurant: null,
    currentOrder: null,
    userProfile: {
        preferences: {},
        history: []
    }
};

// 유틸리티 함수들
const Utils = {
    // 로컬스토리지 헬퍼
    storage: {
        set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
        get: (key) => {
            try {
                return JSON.parse(localStorage.getItem(key));
            } catch {
                return null;
            }
        },
        remove: (key) => localStorage.removeItem(key),
        clear: () => localStorage.clear()
    },

    // 세션스토리지 헬퍼
    session: {
        set: (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
        get: (key) => {
            try {
                return JSON.parse(sessionStorage.getItem(key));
            } catch {
                return null;
            }
        },
        remove: (key) => sessionStorage.removeItem(key),
        clear: () => sessionStorage.clear()
    },

    // 페이지 전환
    navigateTo: (page) => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            if (page.includes('.html')) {
                window.location.href = page;
            } else {
                window.location.href = `${page}.html`;
            }
        }, 150);
    },

    // 뒤로가기
    goBack: () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            Utils.navigateTo('01-홈화면');
        }
    },

    // 토스트 메시지
    showToast: (message, type = 'info', duration = 3000) => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        // 토스트 스타일
        Object.assign(toast.style, {
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: type === 'success' ? '#10B981' :
                           type === 'error' ? '#EF4444' :
                           type === 'warning' ? '#F59E0B' : '#3B82F6',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            zIndex: '10000',
            opacity: '0',
            transition: 'opacity 0.3s ease'
        });

        document.body.appendChild(toast);

        // 애니메이션
        setTimeout(() => toast.style.opacity = '1', 10);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => document.body.removeChild(toast), 300);
        }, duration);
    },

    // 로딩 스피너 표시/숨김
    showLoading: (element) => {
        element.innerHTML = '<div class="spinner"></div>';
        element.style.pointerEvents = 'none';
    },

    hideLoading: (element, originalContent) => {
        element.innerHTML = originalContent;
        element.style.pointerEvents = 'auto';
    },

    // 거리 계산 (Haversine formula)
    calculateDistance: (lat1, lon1, lat2, lon2) => {
        const R = 6371e3; // 지구 반지름 (미터)
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return Math.round(R * c);
    },

    // 거리 포맷팅
    formatDistance: (meters) => {
        if (meters < 1000) {
            return `${meters}m`;
        } else {
            return `${(meters / 1000).toFixed(1)}km`;
        }
    },

    // 가격 포맷팅
    formatPrice: (price) => {
        return new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW',
            minimumFractionDigits: 0
        }).format(price);
    },

    // 시간 포맷팅
    formatTime: (minutes) => {
        if (minutes < 60) {
            return `${minutes}분`;
        } else {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return `${hours}시간 ${mins}분`;
        }
    },

    // 별점 렌더링
    renderStars: (rating, maxStars = 5) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '★';
        }

        if (hasHalfStar) {
            stars += '☆';
        }

        for (let i = fullStars + (hasHalfStar ? 1 : 0); i < maxStars; i++) {
            stars += '☆';
        }

        return stars;
    },

    // 대기시간 클래스 반환
    getWaitTimeClass: (minutes) => {
        if (minutes === 0) return 'no-wait';
        if (minutes <= 10) return 'short';
        return 'long';
    },

    // 가성비 점수 클래스 반환
    getValueScoreClass: (score) => {
        if (score >= 4.5) return 'excellent';
        if (score >= 3.5) return 'good';
        if (score >= 2.5) return 'average';
        return 'poor';
    },

    // 디바운스 함수
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 스크롤 방향 감지
    detectScrollDirection: (() => {
        let lastScrollTop = 0;
        return (callback) => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const direction = currentScrollTop > lastScrollTop ? 'down' : 'up';
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
            callback(direction, currentScrollTop);
        };
    })()
};

// 위치 서비스
const LocationService = {
    getCurrentLocation: () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation이 지원되지 않습니다.'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    };
                    AppState.currentLocation = location;
                    resolve(location);
                },
                (error) => {
                    let message = '위치를 가져올 수 없습니다.';
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            message = '위치 접근이 거부되었습니다.';
                            break;
                        case error.POSITION_UNAVAILABLE:
                            message = '위치 정보를 사용할 수 없습니다.';
                            break;
                        case error.TIMEOUT:
                            message = '위치 요청 시간이 초과되었습니다.';
                            break;
                    }
                    reject(new Error(message));
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 300000 // 5분
                }
            );
        });
    }
};

// 데이터 서비스 (목 데이터)
const DataService = {
    // 목 식당 데이터
    mockRestaurants: [
        {
            id: 'r1',
            name: '맛있는 김치찌개',
            category: '한식',
            image: 'https://picsum.photos/300/200?random=1',
            rating: 4.2,
            reviewCount: 156,
            priceRange: 'affordable',
            averagePrice: 8000,
            waitTime: 5,
            distance: 120,
            valueScore: 4.5,
            factors: {
                price: 4.5,
                portion: 4.2,
                taste: 4.3,
                service: 4.1
            },
            address: '서울시 강남구 테헤란로 123',
            phone: '02-555-1234',
            hours: '11:00-21:00',
            description: '정통 김치찌개 전문점'
        },
        {
            id: 'r2',
            name: '파스타 하우스',
            category: '양식',
            image: 'https://picsum.photos/300/200?random=2',
            rating: 4.0,
            reviewCount: 89,
            priceRange: 'moderate',
            averagePrice: 15000,
            waitTime: 15,
            distance: 250,
            valueScore: 3.8,
            factors: {
                price: 3.5,
                portion: 4.0,
                taste: 4.2,
                service: 3.8
            },
            address: '서울시 강남구 테헤란로 456',
            phone: '02-555-5678',
            hours: '11:30-22:00',
            description: '신선한 재료로 만드는 이탈리안 파스타'
        },
        {
            id: 'r3',
            name: '라면 천국',
            category: '분식',
            image: 'https://picsum.photos/300/200?random=3',
            rating: 3.8,
            reviewCount: 234,
            priceRange: 'affordable',
            averagePrice: 6000,
            waitTime: 0,
            distance: 80,
            valueScore: 4.1,
            factors: {
                price: 4.8,
                portion: 4.0,
                taste: 3.5,
                service: 3.8
            },
            address: '서울시 강남구 테헤란로 789',
            phone: '02-555-9012',
            hours: '24시간',
            description: '24시간 언제나 뜨끈한 라면'
        }
    ],

    // 목 메뉴 데이터
    mockMenus: {
        'r1': [
            { id: 'm1', name: '김치찌개', price: 8000, category: '메인', image: 'https://picsum.photos/150/100?random=11', description: '돼지고기와 김치가 듬뿍' },
            { id: 'm2', name: '된장찌개', price: 7000, category: '메인', image: 'https://picsum.photos/150/100?random=12', description: '구수한 된장국물' },
            { id: 'm3', name: '공기밥', price: 1000, category: '사이드', image: 'https://picsum.photos/150/100?random=13', description: '갓 지은 밥' }
        ],
        'r2': [
            { id: 'm4', name: '크림 파스타', price: 16000, category: '파스타', image: 'https://picsum.photos/150/100?random=14', description: '진한 크림소스 파스타' },
            { id: 'm5', name: '토마토 파스타', price: 14000, category: '파스타', image: 'https://picsum.photos/150/100?random=15', description: '상큼한 토마토 파스타' },
            { id: 'm6', name: '시저 샐러드', price: 12000, category: '샐러드', image: 'https://picsum.photos/150/100?random=16', description: '신선한 야채 샐러드' }
        ],
        'r3': [
            { id: 'm7', name: '신라면', price: 4000, category: '라면', image: 'https://picsum.photos/150/100?random=17', description: '매콤한 신라면' },
            { id: 'm8', name: '치즈라면', price: 5000, category: '라면', image: 'https://picsum.photos/150/100?random=18', description: '고소한 치즈 토핑' },
            { id: 'm9', name: '김밥', price: 3000, category: '분식', image: 'https://picsum.photos/150/100?random=19', description: '기본 김밥' }
        ]
    },

    // 식당 검색
    searchRestaurants: (query, location, radius) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let results = [...DataService.mockRestaurants];

                if (query) {
                    results = results.filter(r =>
                        r.name.includes(query) ||
                        r.category.includes(query) ||
                        r.description.includes(query)
                    );
                }

                // 거리 기준 필터링 (실제로는 위치 기반)
                if (radius) {
                    results = results.filter(r => r.distance <= radius);
                }

                resolve(results);
            }, 500);
        });
    },

    // 식당 상세 정보
    getRestaurant: (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const restaurant = DataService.mockRestaurants.find(r => r.id === id);
                if (restaurant) {
                    resolve(restaurant);
                } else {
                    reject(new Error('식당을 찾을 수 없습니다.'));
                }
            }, 200);
        });
    },

    // 식당 메뉴
    getRestaurantMenus: (restaurantId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const menus = DataService.mockMenus[restaurantId] || [];
                resolve(menus);
            }, 300);
        });
    }
};

// DOM 조작 헬퍼
const DOM = {
    // 요소 선택
    $: (selector) => document.querySelector(selector),
    $$: (selector) => document.querySelectorAll(selector),

    // 요소 생성
    create: (tag, className, content) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (content) element.textContent = content;
        return element;
    },

    // 요소에 이벤트 리스너 추가
    on: (element, event, handler) => {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) {
            element.addEventListener(event, handler);
        }
    },

    // 요소에서 이벤트 리스너 제거
    off: (element, event, handler) => {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) {
            element.removeEventListener(event, handler);
        }
    },

    // 클래스 토글
    toggleClass: (element, className) => {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) {
            element.classList.toggle(className);
        }
    }
};

// 애니메이션 헬퍼
const Animation = {
    // 페이드 인
    fadeIn: (element, duration = 300) => {
        element.style.opacity = '0';
        element.style.display = 'block';

        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;

            element.style.opacity = Math.min(progress / duration, 1);

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    },

    // 페이드 아웃
    fadeOut: (element, duration = 300) => {
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;

            element.style.opacity = Math.max(1 - (progress / duration), 0);

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };

        requestAnimationFrame(animate);
    },

    // 슬라이드 인
    slideIn: (element, direction = 'right', duration = 300) => {
        const transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
        element.style.transform = transform;
        element.style.display = 'block';

        setTimeout(() => {
            element.style.transition = `transform ${duration}ms ease`;
            element.style.transform = 'translateX(0)';
        }, 10);
    }
};

// 폼 유틸리티
const Form = {
    // 폼 데이터 수집
    serialize: (form) => {
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    },

    // 입력 검증
    validate: {
        email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        phone: (phone) => /^01[0-9]-?[0-9]{4}-?[0-9]{4}$/.test(phone),
        required: (value) => value && value.trim().length > 0
    }
};

// 전역 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
    // 페이지 로드 애니메이션
    document.body.style.opacity = '1';

    // 뒤로가기 버튼 공통 처리
    const backButtons = document.querySelectorAll('.btn-back, .back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            Utils.goBack();
        });
    });

    // 터치 피드백 추가
    const touchableElements = document.querySelectorAll('.touchable, .btn, .card');
    touchableElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.classList.add('touching');
        });

        element.addEventListener('touchend', () => {
            setTimeout(() => {
                element.classList.remove('touching');
            }, 150);
        });
    });
});

// 전역 에러 핸들링
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    Utils.showToast('오류가 발생했습니다. 다시 시도해주세요.', 'error');
});

// unhandled promise rejection 처리
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    Utils.showToast('요청 처리 중 오류가 발생했습니다.', 'error');
    e.preventDefault();
});

// 전역 변수로 노출
window.AppState = AppState;
window.Utils = Utils;
window.LocationService = LocationService;
window.DataService = DataService;
window.DOM = DOM;
window.Animation = Animation;
window.Form = Form;