<h1>원티드: 요청서 대시보드 구현</h1>

## 🎈 배포
🔗 **링크**:

<br>

## 💎 실행 방법
1. json-server의 서버 켜기
    ```bash
    npm run server
    ```
2. 클라이언트 서버 켜기
    ```bash
    npm run start
    ```

<br>

## 🧶 기술 스택
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

###✨ 전체 구현사항
    
안병진,이지용
    
- Select Box 컴포넌트 구현
   - 상담중이라면 상담중인 것들과 체크된 가공방식, 재료 이 3가지를 교집합으로 필터링해서 카드 컴포넌트로 시각화
   - 상담중이 아니라면 체크된 가공방식, 재료 이 2가지를 교집합으로 필터링해서 카드 컴포넌트로 시각화
   - 아무것도 체크되지 않은상태에서 상담중 토글을 활성화하면 상담중인 카드들만 보이게 함
   - 두개의 Select Box 중 하나라도 체크된 게 있다면 refresh 버튼 보이게 함
   - refresh 버튼을 누르면 체크된 거 초기화되면서 보여지는 카드 컴포넌트들도 초기화
   - 두개의 Select Box중 하나의 Select Box만 모달이 보여지게 함.
   - 피그마의 예시대로 css 완벽구현
    
박민주
   - 모바일 화면: 메뉴 버튼 클릭 시 사이드 바 transition 구현
   - 모바일 화면: 사이드 바 나타난 후 바깥쪽 누르면 사이드 바 제거
   - 요소 바깥을 누르면 요소가 사라지는 hooks 함수 도입 (hooks/useOnClickOutside)
 
윤예나
   - json-server 연결 후 카드에 데이터 렌더링
   - 웹 화면 UI + 카드 반응형 구현
   - 모바일 화면 UI 구현
   - styled-components의 ThemeProvider 도입 + 전체 컴포넌트 스타일 리팩토링
    
<br>

## 🧧 디렉토리 구조

```bash
└── src
    ├── assets             
    ├── components
    │   ├── AllSelectBox     
    │   ├── Burger  
    │   ├── Card  
    │   ├── Header  
    │   ├── Modal  
    │   ├── Section  
    │   ├── SelectBox 
    │   ├── Sidebar
    │   └── Toggle       
    ├── hooks           # 커스텀 훅
    │   └── useOnClickOutside 
    ├── styles
    │   ├── fonts       # Noto Sans KR 폰트 다운로드한 폴더
    │   ├── globalStyles
    │   └── theme.ts 
    ├── types           # Typescript interface 타입들
    │   ├── burgerMenuType
    │   ├── dataType 
    │   └── selectBoxType
    └── utils           # 공통 함수
        ├── filteringData
        └── getApi
```
