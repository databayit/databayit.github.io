## 실행 가이드

- 첫 실행
- yarn install or npm install
- 프로젝트 실행
- yarn start or npm start

## 파일 구조

```
databayit
    ├── public
    │   ├── apple-icon.png
    │   ├── favicon.png
    │   ├── index.html
    │   ├── logo.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── assets
    │   │   ├── images
    │   │   ├── theme
    │   │   │   ├── base
    │   │   │   ├── components
    │   │   │   ├── functions
    │   │   └── └── index.js
    │   ├── components
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
    │   │   ├── Navbars
    │   │   └── Tables
    │   ├── layouts
    │   │   ├── pages
    │   │   │    └── landing-pages
    │   │   ├── sections
    │   │   │    ├── attention-catchers
    │   │   │    ├── components
    │   │   │    ├── elements
    │   │   │    ├── input-areas
    │   │   │    ├── input-navigation
    │   │   └──  └── page-sections
    │   ├── pages/LandingPages
    │   │   ├── AboutUs
    │   │   ├── Bigdata
    │   │   ├── Infra
    │   │   ├── Lab
    │   │   ├── Meta
    │   │   └── Security
    │   ├── App.js
    │   ├── index.js
    │   ├── footer.routes.js
    │   └── routes.js
    ├── .eslintrc.json
    ├── .prettierrc.json
    ├── jsconfig.json
    ├── package.json
    └── README.md
```

## 새 페이지 생성 시

1. page 에서 컴포넌트를 만든다.
2. layouts에서 컴포넌트 등록.
3. routes.js 에 라우팅 시킨다.

## 사용한 템플릿

- https://www.creative-tim.com/product/material-kit-react
- https://www.creative-tim.com/learning-lab/react/overview/material-kit/

## 테스트 배포 방법 (github.io)

- npm run build
- npm run deploy
