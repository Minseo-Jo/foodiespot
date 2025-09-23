---
command: "/deploy-help"
description: "배포 작업 순서 가이드를 터미널에 표시"
---

배포 작업 순서

1단계: 백엔드 컨테이너 이미지 작성
/deploy-build-image-back
- '백엔드컨테이너이미지작성가이드'에 따라 컨테이너 이미지를 작성합니다

2단계: 프론트엔드 컨테이너 이미지 작성
/deploy-build-image-front
- '프론트엔드컨테이너이미지작성가이드'에 따라 컨테이너 이미지를 작성합니다

3단계: 백엔드 컨테이너 실행 방법 작성
/deploy-run-container-guide-back
- '백엔드컨테이너실행방법가이드'에 따라 컨테이너 실행 가이드를 작성합니다

4단계: 프론트엔드 컨테이너 실행 방법 작성
/deploy-run-container-guide-front
- '프론트엔드컨테이너실행방법가이드'에 따라 컨테이너 실행 가이드를 작성합니다

5단계: 백엔드 K8s 배포 가이드 작성
/deploy-k8s-guide-back
- '백엔드배포가이드'에 따라 백엔드 서비스 배포 방법을 작성합니다

6단계: 프론트엔드 K8s 배포 가이드 작성
/deploy-k8s-guide-front
- '프론트엔드배포가이드'에 따라 프론트엔드 서비스 배포 방법을 작성합니다

CI/CD 파이프라인 (선택사항)

Jenkins CI/CD:
/deploy-jenkins-cicd-guide-back  - 백엔드 Jenkins CI/CD 가이드
/deploy-jenkins-cicd-guide-front - 프론트엔드 Jenkins CI/CD 가이드

GitHub Actions CI/CD:
/deploy-actions-cicd-guide-back  - 백엔드 GitHub Actions CI/CD 가이드
/deploy-actions-cicd-guide-front - 프론트엔드 GitHub Actions CI/CD 가이드