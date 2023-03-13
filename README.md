# 👀 블로그 프로젝트 목차

- [1. 구현된 기능](#1-구현된-기능)
  - 1-1. 블로그 기능
  - 1-2. 다른 모든 기능
- [2. 사용한 프레임워크및 라이브러리](#2-사용한-프레임워크및-라이브러리)
- [3. 폴더 구조](#3-폴더-구조)
  - 폴더구조 설명
  - 폴더 트리
- [4. 한계점](#4-한계점)

### 기술 스택

<div>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextjs&logoColor=white">
<img src="https://img.shields.io/badge/contentlayer-8D5A9E?style=for-the-badge&logo=contentlayer&logoColor=white">
<img src="https://img.shields.io/badge/tailwind-3484D2?style=for-the-badge&logo=tailwind&logoColor=white">
<img src="https://img.shields.io/badge/vercel-68BC71?style=for-the-badge&logo=vercel&logoColor=black">
<img src="https://img.shields.io/badge/PWA-5A0FC8.svg?style=for-the-badge&logo=PWA&logoColor=white">
</div>

## 1. 구현된 기능

- ### 1-1) 블로그 기능

  ***

  - [x] 포스터의 이름을 기준으로 검색 기능을 구현했습니다

  - [x] 각각 카테고리 별로 포스터를 가져옵니다 (최신순으로)

  - [x] 포스터를 누르면 포스터의 내용을 가져옵니다.(포스터는 mdx 입니다.)

  - [x] article에서 url 정보가 존재할경우 해당 url의 og정보를 가져와 OpenGraphPreview를 생성합니다.

- ### 1-2) 다른 모든 기능

  ***

  - [x] 라이트모드, 다크모드를 바꿀수 있습니다.

  - [x] utterances를 사용해 댓글기능을 구현했습니다.

  - [x] 기존 tailwind 코드 태그에 스타일을 새로 적용시켰습니다. in globals.css

  - [x] PWA가 적용되어서 앱을 설치하지 않은 사용자가 접속할시 설치 스낵바가 나타납니다.

  - [x] bulild시 자동으로 sitemap을 새로 생성합니다.

  - [x] Google search console에서 크롤링하기 쉽게 JSON-LD가 Head에 포함되어있습니다.

## 2. 사용한 프레임워크및 라이브러리

- ### **Next.JS**

  react에서 SSR방식을 사용해 성능을 향상시키고 SEO를 유리하게 하기 위해서 사용했습니다.

- ### **contentlayer**

  Next.JS와 호환이 되면서 블로그 기능을 구현할 수 있는 SDK로 Next.js 단독 또는 Gatsby와 같은 다른 프레임워크보다 빌드 시간이 빠릅니다.

- ### **tailwind**

  기존 css보다 사용하기 편리하고 컴포넌트에서 스타일 유추가 쉽기 때문에 사용했습니다.

- ### **rehype-prism-plus**

  코드 블록을 사용할 때 tailwind를 사용하면 스타일 적용이 안 되기 때문에 코드 블록에 클래스를 추가 하기 위해 사용했습니다.

- ### **next-themes**

  라이트모드와 다크모드를 구현하기 위해 현재 테마 정보를 가져오기위해 사용했습니다.

- ### **cheerio**

  OpenGraphPreview를 생성할떄 필요한 og정보를 html에서 더 쉽게 추출하기 위해서 사용했습니다.

## 3. 폴더 구조

- ### 3-1) 폴더 구조 설명

  ***

  | 폴더           | 용도                                                      |
  | -------------- | --------------------------------------------------------- |
  | **data**       | 기본 META 데이터와 각 페이지 URL정보를 모았습니다.        |
  | **components** | 페이지 안에서 자주 쓰이는 컴포넌트를 모아 놓았습니다.     |
  | **pages**      | 각각 페이지를 담당하는 파일 폴더입니다.                   |
  | **posts**      | 각각 카테고리 포스터파일인 mdx파일을 모아놓은 폴더입니다. |
  | **public**     | 리소스 파일을 모아놓은 폴더입니다.                        |

- ### 3-2) 폴더 트리

  ***

```
NextJS-myblog
├─ package-lock.json
├─ data
│  ├─ metadata.ts
│  └─ navlinks.ts
├─ contentlayer.config.ts
├─ types
│  └─ posts.ts
├─ .gitignore
├─ .babelrc
├─ package.json
├─ next-sitemap.config.js
├─ postTemplate.mdx
├─ README.md
├─ styles
│  ├─ transition.css
│  └─ globals.css
├─ tailwind.config.js
├─ postcss.config.js
├─ .husky
│  └─ husky-config
│     ├─ _
│     │  ├─ .gitignore
│     │  └─ husky.sh
│     └─ pre-commit
├─ posts
│  ├─ backend
│  ├─ types
│  ├─ react
│  ├─ git
│  ├─ server
│  ├─ other
│  ├─ db
│  ├─ next
│  ├─ js
│  └─ algorithm
├─ tsconfig.json
├─ hooks
├─ utils
├─ components
│  ├─ UIElements
│  ├─ Layout
│  └─ Post
├─ pages
│  ├─ backend
│  ├─ types
│  ├─ react
│  ├─ git
│  ├─ _app.tsx
│  ├─ server
│  ├─ other
│  ├─ db
│  ├─ _document.tsx
│  ├─ next
│  ├─ index.tsx
│  ├─ js
│  ├─ algorithm
│  └─ api
│     └─ proxy.ts
├─ public
│  ├─ sitemap-0.xml
│  ├─ imgs
│  ├─ font
│  ├─ robots.txt
│  ├─ icons
│  ├─ sw.js
│  ├─ sitemap.xml
│  ├─ workbox-588899ac.js
│  └─ manifest.json
├─ .eslintrc.json
├─ next.config.js
└─ next-env.d.ts
```

## 4. 한계점 개선할점

페이지마다 getStaticProps로 메타태그를 동적으로 생성했지만 초기 html에 해당 메타태그가 생성되지 않는것으로 확인되고있습니다.
따라서 카카오톡같은 곳에서 url이 공유될때 og정보를 \_document에 default 메타태그를 생성했습니다.
