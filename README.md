# 👀 블로그 프로젝트 목차

- [1. 구현된 기능](#1-구현된-기능)
  - 1-1. 블로그 기능
  - 1-2. 다른 모든 기능
- [2. 사용한 프레임워크및 라이브러리](#2-사용한-프레임워크및-라이브러리)
- [3. 폴더 구조](#3-폴더-구조)
  - 폴더구조 설명
  - 폴더 트리
- [4. 주안점](#4-주안점)
- [5. 한계점](#5-한계점)

### 라이트하우스 지표

![성능표](<public/%EC%84%B1%EB%8A%A5%EC%A7%80%ED%91%9C(ligthHosue).PNG>)

## 1. 구현된 기능

- ### 1-1) 블로그 기능

  ***

  - [x] 포스터의 이름을 기준으로 검색 기능을 구현했습니다

  - [x] 각각 카테고리 별로 포스터를 가져옵니다 (최신순으로)

  - [x] 포스터를 누르면 포스터의 내용을 가져옵니다.(포스터는 mdx 입니다.)

- ### 1-2) 다른 모든 기능

  ***

  - [x] 라이트모드, 다크모드를 바꿀수 있습니다.

  - [x] utterances를 사용해 댓글기능을 구현했습니다.

  - [x] 기존 tailwind 코드 태그에 스타일을 새로 적용시켰습니다. in globals.css

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

## 3. 폴더 구조

- ### 3-1) 폴더 구조 설명

  ***

  | 폴더           | 용도                                                  |
  | -------------- | ----------------------------------------------------- |
  | **data**       | 기본 META 데이터와 각 페이지 URL정보를 모았습니다.    |
  | **components** | 페이지 안에서 자주 쓰이는 컴포넌트를 모아 놓았습니다. |
  | **pages**      | 각각 페이지를 담당하는 파일 폴더입니다.               |
  | **posts**      | 포스터파일인 mdx파일을 모아놓은 폴더입니다.           |
  | **public**     | 리소스 파일을 모아놓은 폴더입니다.                    |

- ### 3-2) 폴더 트리

  ***

 ```
  NextJS-myblog
├─ package-lock.json
├─ data
│  ├─ metadata.ts
│  └─ navlinks.ts
├─ contentlayer.config.ts
├─ .gitignore
├─ .babelrc
├─ package.json
├─ next-sitemap.config.js
├─ README.md
├─ styles
│  └─ globals.css
├─ tailwind.config.js
├─ postcss.config.js
├─ posts
│  ├─ types
│  ├─ react
│  ├─ git
│  ├─ other
│  ├─ next
│  ├─ js
│  └─ algorithm
├─ tsconfig.json
├─ components
│  ├─ BlogPost.tsx
│  ├─ TopBtn.tsx
│  ├─ Container.tsx
│  ├─ PostList.tsx
│  ├─ Nav.tsx
│  ├─ Comments.tsx
│  └─ SeachBar.tsx
├─ pages
│  ├─ types
│  ├─ react
│  ├─ git
│  ├─ _app.tsx
│  ├─ other
│  ├─ _document.tsx
│  ├─ next
│  ├─ index.tsx
│  ├─ js
│  └─ algorithm
├─ public
│  ├─ 배너.jpg
│  ├─ round.webp
│  ├─ react
│  ├─ 성능지표(ligthHosue).PNG
│  ├─ github.png
│  ├─ other
│  ├─ 아바타.jpg
│  ├─ top.png
│  ├─ 해.png
│  ├─ top1.svg
│  ├─ favicon.ico
│  ├─ next
│  ├─ js
│  ├─ 달.png
├─ .eslintrc.json
├─ next.config.js
└─ next-env.d.ts
 ```

## 4. 주안점

블로그는 노출이 많이 될수록 좋기 때문에 seo에 유리한 nextjs와 메타태그 사용했습니다.

그리고 빠른 성능을 위해서 contentlayer를 사용해 빠른 로딩을 구현했습니다.

## 5. 한계점 개선할점

아직 게시글이 적어서인지 meta정보가 부족해서인지 구글사이트맵에서의 방문자 수가 적습니다.

더 많은 포스터를 작성하고 발전해서 더 많은 방문자를 달성 해보이겠습니다.
