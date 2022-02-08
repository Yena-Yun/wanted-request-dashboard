<h1>wanted-request-dashboard<</h1>

## 🚀 배포
🔗 **링크**:

<br>

## 🪄 프로젝트 실행 방법
1. json-server를 통해 연결된 서버를 켭니다.
    ```bash
    npm run server
    ```
2. 클라이언트쪽 서버를 켭니다.
    ```bash
    npm run start
    ```

<br>

## 🧰 기술 스택 및 구현사항
[![Netlify Status](https://api.netlify.com/api/v1/badges/52ae0d9c-aff9-47c9-b40d-1977fb887069/deploy-status)](https://app.netlify.com/sites/hyo-choi-wanted-ggumim/deploys)
  
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

### 📚 전체 구현사항
    
안병진,이지용
    
- Select Box 컴포넌트 구현
   - 상담중이라면 상담중인것들과 체크된 가공방식,재료 이 3가지를 교집합으로 필터링해서 카드 컴포넌트로 시각화
   - 상담중이 아니라면 체크된 가공방식,재료 이 2가지를 교집합으로 필터링해서 카드 컴포넌트로 시각화
   - 아무것도 체크되지 않은상태에서 상담중 토글을 활성화하면 상담중인 카드들만 보이게함
   - 두개의 Select Box중 하나라도 체크된게 있다면 refresh버튼 보이게함
   - refresh버튼을 누르면 체크된거 초기화되면서 보여지는 카드 컴포넌트들도 초기화
   - 두개의 Select Box중 하나의 Select Box만 모달이 보여지게함.
   - 피그마의 예시대로 css 완벽구현
    
    

<br>

## 📂 디렉토리 구조

```bash
  // 프로젝트에 맞게 수정
.
├── public
└── src
    ├── api             
    ├── components
    │   ├── ProductList     
    │   ├── ProductTooltip  
    │   └── RoomInfo        
    ├── constants       # 상수
    ├── hooks           # custom hook
    ├── types           # Typescript type & interface
    │   └── components # 컴포넌트에서 사용되는 type
    └── utils           # 의존성 없이 사용되는 함수
```
