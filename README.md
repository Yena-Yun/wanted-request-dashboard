<h1>wanted-request-dashboard<</h1>

## 🚀 배포
🔗 **과제물**(netlify): https://hyo-choi-wanted-ggumim.netlify.app/  
🔗 **Storybook**: https://develop--61fbd18d695077004a3c55d8.chromatic.com/

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
