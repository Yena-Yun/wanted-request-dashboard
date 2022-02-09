<h1>원티드: 요청서 대시보드 구현</h1>

## 🎈 배포 주소
https://ateam-ventrues-mission.herokuapp.com/

## 🎈 실행 영상 및 이미지
### 🧩 필터 기능 및 리셋 + 토글 기능
<img src="https://user-images.githubusercontent.com/68722179/153127251-1b8b9af7-9fd1-4453-8260-fcc4763b2695.gif" width="800" />

### 🧩 모바일 화면 + 메뉴 클릭 시 transition + 바깥 누르면 닫기
<img src="https://user-images.githubusercontent.com/68722179/153127306-b7b32f57-bc3d-41d3-90f7-b27776e8d390.gif" width="300" />

### 🧩 대쉬보드 반응형 구현
<img src="https://user-images.githubusercontent.com/68722179/153125715-d1bc2ea0-f99d-43ff-b3d6-e6e8b77204bc.gif" width="800" />


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

<br>

## ✨ 전체 구현사항
    
⚜ 안병진,이지용
    
- Select Box 컴포넌트 구현
   - 상담중이라면 상담중인 것들과 체크된 가공방식, 재료 이 3가지를 교집합으로 필터링해서 카드 컴포넌트로 시각화
   - 상담중이 아니라면 체크된 가공방식, 재료 이 2가지를 교집합으로 필터링해서 카드 컴포넌트로 시각화
   - 아무것도 체크되지 않은상태에서 상담중 토글을 활성화하면 상담중인 카드들만 보이게 함
   - 두개의 Select Box 중 하나라도 체크된 게 있다면 refresh 버튼 보이게 함
   - refresh 버튼을 누르면 체크된 거 초기화되면서 보여지는 카드 컴포넌트들도 초기화
   - 두개의 Select Box중 하나의 Select Box만 모달이 보여지게 함.
   - 피그마의 예시대로 css 완벽구현
    
⚜ 박민주
   - 모바일 화면: 햄버거 메뉴 클릭 시 transition 구현
   - 모바일 화면: 사이드 메뉴 화면 영역에서 백그라운드 영역 탭하면 사이드 바 close
   - 백그라운드 영역 탭하면 기존 영역이 닫히는 hooks 함수 도입 (hooks/useOnClickOutside)
 
⚜ 윤예나
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
    │   ├── AllSelectBox.tsx     
    │   ├── Burger.tsx  
    │   ├── Card.tsx  
    │   ├── Header.tsx  
    │   ├── Modal.tsx  
    │   ├── Section.tsx
    │   ├── SelectBox.tsx
    │   ├── Sidebar.tsx
    │   └── Toggle.tsx       
    ├── hooks           # 커스텀 훅
    │   └── useOnClickOutside 
    ├── styles
    │   ├── fonts       # Noto Sans KR 폰트 다운로드한 폴더
    │   ├── globalStyles.ts
    │   ├── AllSelectBoxStyle.ts
    │   ├── BurgetStyle.ts
    │   ├── CardStyle.ts
    │   ├── HeaderStyle.ts
    │   ├── ModalStyle.ts
    │   ├── SectionStyle.ts
    │   ├── SelectBoxStyle.ts
    │   ├── SidebarStyle.ts
    │   ├── ToggleStyle.ts
    │   └── theme.ts 
    ├── types           # Typescript interface 타입들
    │   ├── burgerMenuType.ts
    │   ├── dataType.ts
    │   ├── modalProps.ts
    │   ├── toggleProps.ts
    │   └── selectBoxType.ts
    └── utils           # 공통 함수
        ├── filteringData.ts
        └── getApi.ts
```
