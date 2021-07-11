# 개인프로젝트_MattewCoffee_무인결제시스템

## Index
### 1. 소개
### 2. 목적
### 3. 플랜
### 4. API 기술대장
### 5. 사용기술
### 6. 주요기능
-----------------
### 1. 소개
- MattewCoffee 프로젝트는 독학으로 React와 Restful 통신, JPA를 학습하여 개인 1인 으로 개발한 무인결제시스템 프로젝트 입니다.
- Frontend: node 엔진을 이용한 React 기술을 사용하였습니다.
- Backend: Tomcat과 SpringBoot를 사용하여 Restful 통신과 JPA, JPA를 구현한 Hibernate를 사용하였습니다.
- DB: h2datebase를 사용하였고, 더미데이터의 image는 AWS S3를 이용하였습니다.
- API : 결제시스템인 PayPal과 Junit5를 대신하여 사용한 테스트 API인 Postman을 사용하였습니다.
   (PayPal은 현재 test계정을 사용하고 있습니다. ID :sb-q9ww86016524@personal.example.com / pass:lsc01099 << 결제테스트가능하면 또한 소지하고계신 카드로 정보기입으로 테스트 가능합니다.)
![logo1](https://user-images.githubusercontent.com/73806238/125185489-0b583500-e260-11eb-8af2-68d13691691c.png)
--------------------
### 2. 목적
![그림1](https://user-images.githubusercontent.com/73806238/125185650-021b9800-e261-11eb-9a49-88e75c9977f1.jpg)
- 코로나로 인해 무인결제시스템 수요가 증가함에 따라 무인결제시스템의 불편은 겪는 사람들이 줄어듬과 동시에 키오스크 포비아를 체감하던 노인분들 또한 종업원의 도움없이 주문을 쉽게할수 있게 되었습니다. 오히려 이러한 주문 재미요소로 느끼는 방문객들이 늘어남에 따라 현재 무인결제시스템을 가장 손쉽게 볼 수 있는 커피전문점을 타겟으로하여 프로젝트를 제작하게되었습니다.
-----------------------
### 3. 플랜
![그림2](https://user-images.githubusercontent.com/73806238/125185921-625f0980-e262-11eb-95f0-cab36d64bb8e.png)
------------------------
### 4. API 기술대장
![그림3](https://user-images.githubusercontent.com/73806238/125185985-bc5fcf00-e262-11eb-84a1-150220f48541.png)
------------------------
### 5. 사용기술
![그림5](https://user-images.githubusercontent.com/73806238/125186724-fd59e280-e266-11eb-85b9-02be22cdd523.png)
------------------------
### 6. 사용기술
![그림4](https://user-images.githubusercontent.com/73806238/125186141-8e2ebf00-e263-11eb-9ba1-61281d9a7262.png)

[시작페이지]
![image](https://user-images.githubusercontent.com/73806238/125186900-d2bc5980-e267-11eb-9cf4-46d2f1144c21.png)

[메인페이지]
![image](https://user-images.githubusercontent.com/73806238/125186981-49595700-e268-11eb-86d9-f9c8853d6978.png)

[상제페이지]
![image](https://user-images.githubusercontent.com/73806238/125187010-655cf880-e268-11eb-9d0a-0b9fc8079081.png)

[장바구니페이지]
![image](https://user-images.githubusercontent.com/73806238/125187028-7574d800-e268-11eb-994b-66452d564d14.png)

[결제페이지 - PayPal]

![image](https://user-images.githubusercontent.com/73806238/125187043-91787980-e268-11eb-8339-3e1f71c78329.png)

[관리자페이지 - 실시간 주문 현황]
![image](https://user-images.githubusercontent.com/73806238/125187066-ba007380-e268-11eb-8013-b72fb2463ada.png)

[관리페이지 - 지난 주문 내역]
![image](https://user-images.githubusercontent.com/73806238/125187075-c389db80-e268-11eb-8721-41db464be846.png)

