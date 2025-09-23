---
command: "/develop-help"
---

echo "
==============================
개발 작업 순서
==============================

1단계: 데이터베이스 설치 계획
/develop-db-guide
- 데이터베이스설치계획서가이드를 참고하여 설치 계획서를 작성합니다

2단계: 데이터베이스 설치
/develop-db-install
- 데이터베이스설치가이드에 따라 데이터베이스를 설치합니다
- 설치정보(환경, Resource Group, Namespace 등)를 제공해야 합니다

3단계: Message Queue 설치 계획 (필요시)
/develop-mq-guide
- MQ설치계획서가이드를 참고하여 Message Queue 설치 계획서를 작성합니다

4단계: Message Queue 설치 (필요시)
/develop-mq-install
- MQ설치가이드에 따라 Message Queue를 설치합니다
- 설치정보(환경, Resource Group, Namespace 등)를 제공해야 합니다

5단계: 백엔드 개발
/develop-dev-backend
- 백엔드개발가이드에 따라 백엔드 서비스를 개발합니다

6단계: 백엔드 오류 해결
/develop-fix-backend
- 개발된 서비스와 common 모듈을 컴파일하고 에러를 해결합니다

7단계: 서비스 실행파일 작성
/develop-make-run-profile
- 서비스실행파일작성가이드에 따라 실행 프로파일을 작성합니다
- 작성정보(API Key 등)를 제공해야 합니다

8단계: 백엔드 테스트
/develop-test-backend
- 백엔드테스트가이드에 따라 백엔드 서비스를 테스트합니다
- 테스트정보(서비스명, API Key 등)를 제공해야 합니다

9단계: 프론트엔드 개발
/develop-dev-front
- 프론트엔드개발가이드에 따라 프론트엔드를 개발합니다
- 개발정보(프레임워크, UI 라이브러리 등)를 제공해야 합니다

추가 명령어:
/develop-db-remove     - 데이터베이스 및 캐시 리소스 삭제
/develop-mq-remove     - Message Queue 리소스 삭제

==============================
"