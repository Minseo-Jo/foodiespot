# UI/UX 스타일 가이드
## 회사 주변 맛집 추천 서비스

### 1. 브랜드 아이덴티티

#### 1.1 디자인 컨셉
**"Efficient Foodie Partner"** - 효율적이고 신뢰할 수 있는 미식 파트너

**핵심 가치**
- **효율성**: 빠른 의사결정을 돕는 직관적 인터페이스
- **신뢰성**: 데이터 기반의 객관적이고 정확한 정보 제공
- **개인화**: 사용자의 취향을 학습하여 맞춤형 경험 제공
- **커뮤니티**: 사용자들의 경험 공유를 통한 집단 지성

#### 1.2 브랜드 특성
- **타겟**: 25-40세 직장인, 효율적인 점심시간 활용 중시
- **감정**: 신뢰감, 편리함, 만족감
- **톤앤매너**: 친근하지만 전문적, 간결하고 명확

### 2. 디자인 원칙

#### 2.1 핵심 원칙
1. **정보 우선 (Information First)**: 사용자 결정에 필요한 핵심 정보 우선 배치
2. **한 번에 하나씩 (One Thing at a Time)**: 단계별 명확한 액션 가이드
3. **일관된 패턴 (Consistent Patterns)**: 학습 비용 최소화를 위한 일관된 UI 패턴
4. **즉각적 피드백 (Immediate Feedback)**: 모든 사용자 액션에 대한 명확한 반응
5. **접근성 우선 (Accessibility First)**: 모든 사용자가 이용 가능한 포용적 디자인

#### 2.2 디자인 가치
- **속도**: 3탭 이내 모든 핵심 기능 접근
- **명확성**: 전문 용어 최소화, 직관적 아이콘과 라벨
- **신뢰성**: 일관된 시각적 언어, 정확한 정보 표현
- **효율성**: 반복 작업 최소화, 스마트 기본값 제공

### 3. 컬러 시스템

#### 3.1 Primary Colors
```
Primary Blue (#2563EB)
- 메인 액션 버튼, 중요한 정보 강조
- RGB: 37, 99, 235
- 신뢰감과 안정감을 전달

Primary Blue Light (#DBEAFE)
- Primary의 배경색, 강조 영역
- RGB: 219, 234, 254

Primary Blue Dark (#1D4ED8)
- 호버 상태, 활성 상태
- RGB: 29, 78, 216
```

#### 3.2 Secondary Colors
```
Food Orange (#FB923C)
- 음식 관련 요소, 따뜻함 표현
- RGB: 251, 146, 60
- 식욕을 자극하는 따뜻한 색상

Food Orange Light (#FED7AA)
- 배경, 하이라이트
- RGB: 254, 215, 170

Food Orange Dark (#EA580C)
- 강조, 호버 상태
- RGB: 234, 88, 12
```

#### 3.3 Status Colors
```
Success Green (#10B981)
- 성공 상태, 좋은 가성비, 추천
- RGB: 16, 185, 129

Warning Yellow (#F59E0B)
- 주의사항, 대기시간 경고
- RGB: 245, 158, 11

Error Red (#EF4444)
- 오류, 품절, 부정적 피드백
- RGB: 239, 68, 68

Info Blue (#3B82F6)
- 정보 전달, 팁
- RGB: 59, 130, 246
```

#### 3.4 Neutral Colors
```
Gray 900 (#111827) - 메인 텍스트
Gray 700 (#374151) - 서브 텍스트
Gray 500 (#6B7280) - 플레이스홀더, 보조 정보
Gray 300 (#D1D5DB) - 구분선, 테두리
Gray 100 (#F3F4F6) - 배경, 카드
Gray 50 (#F9FAFB) - 페이지 배경

White (#FFFFFF) - 카드 배경, 주요 컨텐츠 영역
Black (#000000) - 고대비 텍스트 (접근성)
```

### 4. 타이포그래피

#### 4.1 폰트 패밀리
```
Primary: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif
- 한글 최적화, 다양한 웨이트 지원
- 숫자 가독성 우수

Monospace: 'SF Mono', Monaco, 'Cascadia Code', monospace
- 가격, 점수 등 수치 정보
```

#### 4.2 타이포그래피 스케일
```
Display Large: 32px / 40px (섹션 타이틀)
Display Medium: 28px / 36px (페이지 타이틀)
Display Small: 24px / 32px (카드 헤더)

Heading 1: 22px / 28px (주요 제목)
Heading 2: 20px / 26px (서브 제목)
Heading 3: 18px / 24px (섹션 제목)

Body Large: 16px / 24px (본문, 중요 정보)
Body Medium: 14px / 20px (일반 본문)
Body Small: 12px / 16px (보조 정보, 캡션)

Label Large: 14px / 20px (폼 라벨, 버튼)
Label Medium: 12px / 16px (태그, 배지)
Label Small: 11px / 14px (시간, 상태)
```

#### 4.3 폰트 웨이트
```
Regular (400): 일반 본문
Medium (500): 강조 텍스트, 라벨
SemiBold (600): 제목, 중요 정보
Bold (700): 강한 강조, CTA 버튼
```

### 5. 간격 시스템

#### 5.1 spacing Scale (8pt Grid)
```
4px (0.5) - 아주 작은 간격
8px (1) - 작은 간격, 인라인 요소
12px (1.5) - 밀접한 관계 요소
16px (2) - 기본 간격, 버튼 패딩
20px (2.5) - 느슨한 관계 요소
24px (3) - 섹션 간격
32px (4) - 카드 간격, 페이지 패딩
40px (5) - 큰 섹션 구분
48px (6) - 매우 큰 구분
64px (8) - 페이지 레벨 구분
```

#### 5.2 컴포넌트별 간격 가이드
```
버튼 패딩: 12px 16px (세로 가로)
카드 패딩: 16px 20px
입력 필드: 12px 16px
리스트 아이템: 16px 간격
섹션 구분: 32px 이상
```

### 6. 컴포넌트 스타일

#### 6.1 버튼 (Button)
```css
/* Primary Button */
.btn-primary {
  background: #2563EB;
  color: #FFFFFF;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  min-height: 44px; /* 접근성 */
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #1D4ED8;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #2563EB;
  border: 1px solid #2563EB;
  border-radius: 8px;
  padding: 12px 24px;
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: #374151;
  border: none;
  padding: 8px 12px;
}
```

#### 6.2 카드 (Card)
```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid #E5E7EB;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
```

#### 6.3 입력 필드 (Input)
```css
.input {
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px; /* iOS 확대 방지 */
  background: #FFFFFF;
  min-height: 44px;
}

.input:focus {
  outline: none;
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

### 7. 반응형 브레이크포인트

#### 7.1 미디어 쿼리 기준점
```css
/* Mobile First Approach */
/* Small Mobile: 320px ~ 479px */
@media (max-width: 479px) { }

/* Mobile: 480px ~ 767px */
@media (min-width: 480px) { }

/* Tablet: 768px ~ 1023px */
@media (min-width: 768px) { }

/* Desktop: 1024px ~ 1279px */
@media (min-width: 1024px) { }

/* Large Desktop: 1280px+ */
@media (min-width: 1280px) { }
```

#### 7.2 컨테이너 최대 너비
```css
.container {
  max-width: 375px; /* Mobile */
  padding: 0 16px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}
```

### 8. 대상 서비스 특화 컴포넌트

#### 8.1 가성비 지수 표시 (Value Score)
```css
.value-score {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
}

.value-score::before {
  content: "💰";
  margin-right: 4px;
}

/* 점수별 색상 */
.value-score.excellent { background: linear-gradient(135deg, #10B981 0%, #34D399 100%); }
.value-score.good { background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%); }
.value-score.average { background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%); }
.value-score.poor { background: linear-gradient(135deg, #EF4444 0%, #F87171 100%); }
```

#### 8.2 평점 시스템 (Rating)
```css
.rating {
  display: flex;
  align-items: center;
  gap: 2px;
}

.rating-star {
  width: 16px;
  height: 16px;
  color: #FCD34D;
}

.rating-star.filled {
  color: #F59E0B;
}

.rating-score {
  margin-left: 8px;
  font-weight: 600;
  color: #374151;
}

.rating-count {
  margin-left: 4px;
  color: #6B7280;
  font-size: 12px;
}
```

#### 8.3 대기시간 표시 (Wait Time)
```css
.wait-time {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.wait-time.no-wait {
  background: #D1FAE5;
  color: #065F46;
}

.wait-time.short {
  background: #FEF3C7;
  color: #92400E;
}

.wait-time.long {
  background: #FEE2E2;
  color: #991B1B;
}

.wait-time::before {
  content: "⏱";
  margin-right: 4px;
}
```

#### 8.4 가격대 표시 (Price Range)
```css
.price-range {
  display: inline-flex;
  align-items: center;
  color: #6B7280;
  font-size: 14px;
}

.price-symbol {
  color: #374151;
  font-weight: 600;
}

.price-symbol.affordable::before { content: "₩"; }
.price-symbol.moderate::before { content: "₩₩"; }
.price-symbol.expensive::before { content: "₩₩₩"; }
.price-symbol.luxury::before { content: "₩₩₩₩"; }
```

#### 8.5 4요소 평가 차트 (Four Factor Chart)
```css
.factor-chart {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 16px;
  background: #F9FAFB;
  border-radius: 12px;
}

.factor-item {
  text-align: center;
}

.factor-icon {
  width: 32px;
  height: 32px;
  margin: 0 auto 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.factor-icon.price { background: #FEE2E2; }
.factor-icon.portion { background: #DBEAFE; }
.factor-icon.taste { background: #FED7AA; }
.factor-icon.service { background: #D1FAE5; }

.factor-score {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
}

.factor-label {
  font-size: 12px;
  color: #6B7280;
}
```

### 9. 인터랙션 패턴

#### 9.1 터치 피드백
```css
.touchable {
  transition: all 0.15s ease;
  cursor: pointer;
}

.touchable:active {
  transform: scale(0.98);
  opacity: 0.8;
}

/* iOS 스타일 터치 피드백 */
.ios-touch:active {
  background-color: rgba(0, 0, 0, 0.05);
}
```

#### 9.2 로딩 애니메이션
```css
.skeleton {
  background: linear-gradient(90deg, #F3F4F6 25%, #E5E7EB 50%, #F3F4F6 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #E5E7EB;
  border-top: 2px solid #2563EB;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

#### 9.3 전환 애니메이션
```css
.page-enter {
  opacity: 0;
  transform: translateX(100%);
}

.page-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s ease-out;
}

.modal-enter {
  opacity: 0;
  transform: translateY(100%);
}

.modal-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease-out;
}
```

#### 9.4 마이크로 인터랙션
```css
.like-button:active {
  transform: scale(1.2);
}

.notification-badge {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.success-check {
  animation: checkmark 0.3s ease-in-out;
}

@keyframes checkmark {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
```

### 10. 다크모드 대응 (선택사항)

#### 10.1 다크모드 컬러 팔레트
```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #111827;
    --bg-secondary: #1F2937;
    --text-primary: #F9FAFB;
    --text-secondary: #D1D5DB;
    --border-color: #374151;
  }
}
```

### 11. 접근성 가이드라인

#### 11.1 색상 대비
- 최소 4.5:1 (일반 텍스트)
- 최소 3:1 (큰 텍스트, 18px+)
- UI 요소: 최소 3:1

#### 11.2 터치 영역
- 최소 44px × 44px
- 인접 요소 간 8px 이상 간격

#### 11.3 키보드 네비게이션
- 모든 인터랙티브 요소 Tab 접근 가능
- 명확한 포커스 인디케이터
- 논리적인 Tab 순서

### 12. 변경 이력

| 버전 | 날짜 | 변경자 | 변경내용 |
|------|------|--------|----------|
| 1.0 | 2024-12-24 | 박서준(준이) | 초기 스타일 가이드 작성 |

---

**검토 및 승인**
- 설계자: 박서준(준이) - Service Designer
- 검토자: 이해민(민지) - Product Owner
- 승인일: 2024-12-24