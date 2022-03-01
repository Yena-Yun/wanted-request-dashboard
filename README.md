<h1>Wanted 3번째 과제: 요청서 대시보드 구현</h1>

## ✨ [배포 화면 구경하기](https://ateam-ventrues-mission.herokuapp.com/)


## 🧨 구현사항
1. Typescript 사용
2. SelectBox 다중선택 + 리셋
3. 반응형(Mobile) 화면에서 햄버거 바 transition
4. json-server로 mock 데이터 받아오기
  

## 🛍 디렉토리 구조

```bash
└── src
    ├── assets             
    ├── components      # 프로젝트 구성 컴포넌트
    ├── hooks           
    │   └── useOnClickOutside   # 바깥쪽 클릭 시 모달창 닫는 custom 훅
    ├── styles
    │   ├── fonts       # Noto Sans KR 폰트
    │   └── ...
    ├── types           # 타입 모음
    └── utils           # 공통 함수
```


## 🧶 기술 스택
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 


## 💎 실행 방법
1. json-server 서버 켜기
    ```bash
    npm run start:server
    ```
2. 클라이언트 서버 켜기
    ```bash
    npm run start
    ```
