## 실행 가이드

1. 노드 설치
2. npm 설치

- 첫 실행 : yarn install or npm install
- 프로젝트 실행 : yarn start or npm start

## 파일 구조

```
databayit
    ├── public
    │   ├── apple-icon.png
    │   ├── favicon.png
    │   ├── index.html ( meta 정보 )
    │   ├── logo.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── assets
    │   │   ├── images ( 이미지 파일 )
    │   │   ├── theme ( 테마 )
    │   │   │   ├── base
    │   │   │   ├── components ( 컴포넌트 포맷 )
    │   │   │   ├── functions
    │   │   └── └── index.js
    │   ├── components ( Material 테마 컴포넌트 )
    │   │   ├── MKAlert
    │   │   ├── MKAvatar
    │   │   ├── MKBadge
    │   │   ├── MKBox
    │   │   ├── MKButton
    │   │   ├── MKDatePicker
    │   │   ├── MKInput
    │   │   ├── MKPagination
    │   │   ├── MKProgress
    │   │   ├── MKSnackbar
    │   │   ├── MKSocialButton
    │   │   └── MKTypography
    │   ├── examples
    │   │   ├── Breadcrumbs
    │   │   ├── Cards
    │   │   ├── Footer
    │   │   ├── Navbars ( 메인 메뉴 )
    │   │   └── Tables
    │   ├── layouts  ( 페이지 등록 )
    │   │   ├── pages
    │   │   │    └── landing-pages
    │   ├── pages/LandingPages ( 페이지 )
    │   │   ├── AboutUs ( 메인 페이지 )
    │   │   ├── Bigdata ( 빅데이터 페이지 )
    │   │   ├── Infra ( 인프라 페이지 )
    │   │   ├── Lab ( 연구소 페이지 )
    │   │   ├── Meta ( 메타버스 페이지 )
    │   │   └── Security ( 보안 페이지 )
    │   ├── App.js
    │   ├── index.js
    │   ├── footer.routes.js ( 푸터 라우트 수정 등록 )
    │   └── routes.js  ( 라우트와 메뉴 수정 등록 )
    ├── .eslintrc.json
    ├── .prettierrc.json
    ├── jsconfig.json
    ├── package.json
    └── README.md
```

## 새 페이지 생성 시

1. page 에서 컴포넌트(컨텐츠)를 만든다.
2. layouts에서 컴포넌트 등록.
3. routes.js 에 라우팅 시킨다.

## 사용한 템플릿

- https://www.creative-tim.com/product/material-kit-react
- https://www.creative-tim.com/learning-lab/react/overview/material-kit/

## 테스트 배포 방법 (github.io)

- npm install gh-pages --save-dev ( 처음에만 )
- npm run deploy
