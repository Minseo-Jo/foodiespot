---
command: "/deploy-k8s-guide-back"
description: "백엔드 배포 가이드 작성"
---

@cicd 
'백엔드배포가이드'에 따라 백엔드 서비스 배포 방법을 작성해 주세요. 
프롬프트에 '[실행정보]'항목이 없으마 수행을 중단하고 안내 메시지를 표시해 주세요. 
{안내메시지}
'[실행정보]'섹션 하위에 아래 예와 같이 필요한 정보를 제시해 주세요.   
[실행정보]
- ACR명: acrdigitalgarage01
- k8s명: aks-digitalgarage-01
- 네임스페이스: tripgen
- 파드수: 2
- 리소스(CPU): 256m/1024m
- 리소스(메모리): 256Mi/1024Mi