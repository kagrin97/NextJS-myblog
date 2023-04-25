# 👀 블로그 프로젝트 목차

> 개발 블로그를 직접 만들고 싶어서 시작한 프로젝트입니다.
> <br>

- [1. 구현된 기능](#1-구현된-기능)
  - 1-1. 블로그 기능
  - 1-2. 다른 모든 기능
- [2. 사용한 프레임워크및 라이브러리](#2-사용한-프레임워크및-라이브러리)
- [3. 핵심 기능](#3-핵심-기능)
- [4. 트러블 슈팅](#4-트러블-슈팅)
  <br>

### 기술 스택

<div>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextjs&logoColor=white">
<img src="https://img.shields.io/badge/contentlayer-8D5A9E?style=for-the-badge&logo=contentlayer&logoColor=white">
<img src="https://img.shields.io/badge/tailwind-3484D2?style=for-the-badge&logo=tailwind&logoColor=white">
<img src="https://img.shields.io/badge/vercel-68BC71?style=for-the-badge&logo=vercel&logoColor=black">
<img src="https://img.shields.io/badge/PWA-5A0FC8.svg?style=for-the-badge&logo=PWA&logoColor=white">
</div>
<br>

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
        <br>

## 2. 사용한 프레임워크및 라이브러리

<details>
<summary> 읽고 싶으면 펴기 / 닫고 싶으면 접기 </summary>
<div markdown="1">

- **Next.JS**

  react에서 SSR방식을 사용해 성능을 향상시키고 SEO를 유리하게 하기 위해서 사용했습니다.

- **contentlayer**

  Next.JS와 호환이 되면서 블로그 기능을 구현할 수 있는 SDK로 Next.js 단독 또는 Gatsby와 같은 다른 프레임워크보다 빌드 시간이 빠릅니다.

- **tailwind**

  기존 css보다 사용하기 편리하고 컴포넌트에서 스타일 유추가 쉽기 때문에 사용했습니다.

- **rehype-prism-plus**

  코드 블록을 사용할 때 tailwind를 사용하면 스타일 적용이 안 되기 때문에 코드 블록에 클래스를 추가 하기 위해 사용했습니다.

- **next-themes**

  라이트모드와 다크모드를 구현하기 위해 현재 테마 정보를 가져오기위해 사용했습니다.

- **cheerio**

  OpenGraphPreview를 생성할떄 필요한 og정보를 html에서 더 쉽게 추출하기 위해서 사용했습니다.
  <br>

</div>
</details>

## 3. 핵심 기능

<details>
<summary>재사용 가능한 [category].tsx</summary>
<div markdown="1">
<br>
  
> 제 블로그는 크게 home, category, slug 3가지 부분으로 이루어져 있습니다. <br>category 페이지에는 해당 카테고리의 모든 글을 card 형태로 모아두는 페이지입니다. <br>처음에는 pages/js, pages/react... 이런 식으로 각각 폴더별로 만들었지만 <br>카테고리의 페이지들은 거의 흡사하게 생겼기 때문에 재사용성을 높이기 위해서 하나의 컴포넌트로 구현했습니다.
<br>
  
https://github.com/kagrin97/NextJS-myblog/blob/7f51c309772133a814cbf53639f8c03b7ed234a3/pages/%5Bcategory%5D.tsx#L30-L73
<br>
  
- 63번줄에 checkCategory함수는 category, slug 둘다에 쓰이는 스위치 함수입니다. <br>두번째 인자에 함수를 주입함으로써 category에서는 날짜순으로 문서를 정렬합니다.
https://github.com/kagrin97/NextJS-myblog/blob/7f51c309772133a814cbf53639f8c03b7ed234a3/utils/checkCategory.ts#L1-L16
<br>
  
</div>
</details>

<details>
<summary>재사용 가능한 [...slug].tsx</summary>
<div markdown="1">
<br>
  
> 제 블로그는 크게 home, category, slug 3가지 부분으로 이루어져 있습니다. <br>slug 페이지에는 해당 카테고리의 특정 글을 보여주는 페이지입니다. <br>category 페이지와 마찬가지로 재사용성을 높이기 위해서 구현했습니다.
<br>
  
https://github.com/kagrin97/NextJS-myblog/blob/7f51c309772133a814cbf53639f8c03b7ed234a3/pages/%5B...slug%5D.tsx#L23-L66
<br>
  
</div>
</details>

<details>
<summary>URL 미리보기 구현 (OpenGraphPreview)</summary>
<div markdown="1">
<br>

> 다른 분들의 블로그들을 읽던 도중에 공유된 URL이 멋지게 꾸며져 있는 부분을 발견했습니다. <br>저는 a 태그로 언더라인 하나가 그어져 있는 텍스트로 보여주었기 때문에 멋진 URL card를 만들었습니다.
> <br>

https://github.com/kagrin97/NextJS-myblog/blob/7f51c309772133a814cbf53639f8c03b7ed234a3/components/Post/BlogContents.tsx#L15-L51
<br>

- 완성된 카드<br>
  ![링크 미리보기](https://user-images.githubusercontent.com/75124028/226801173-8367cb88-c209-4947-a6db-7c26e36f6210.png)
- 구현 도중 제가 작성한 블로그 글입니다.<br> [OpenGraphPreview(링크미리보기) 만들기 (feat. NextJS)](https://kagrin97-blog.vercel.app/next/OpenGraphPreview)

</div>
</details>
<br>

## 4. 트러블 슈팅

<details>
<summary>초기 html에 서버에서 동적으로 생성된 메타태그가 주입되지 않는 문제</summary>
<div markdown="1">
<br>

> 카카오톡 같은 다른 플랫폼에서 제 블로그가 공유될 때 og태그를 가지고 카드를 만드는데 제 블로그 글마다 다른 카드를 형성하고 싶어서 <br>getStacticProps를 사용해서 서버에서 메타정보를 가진 객체를 container 컴포넌트에 props를 내려준 뒤 <br>메타 정보를 바탕으로 메타태그를 형성하는 방법을 사용했지만 <br>초기 html에 동적인 메타태그가 주입되지 않는 문제가 있습니다.
> <br>

- 서버에서 메타 객체를 생성후 props로 내려줍니다.<br>
  https://github.com/kagrin97/NextJS-myblog/blob/7f51c309772133a814cbf53639f8c03b7ed234a3/pages/%5B...slug%5D.tsx#L37-L66
  <br>
- structuredData 객체가 메타 정보를 가진 객체입니다.<br>
  https://github.com/kagrin97/NextJS-myblog/blob/7f51c309772133a814cbf53639f8c03b7ed234a3/components/Layout/Container.tsx#L13-L60
  <br>

결국 문제를 고치지 못해서 \_documents.tsx에 대표적인 메타 태그를 주입했었습니다.

그때 어떤 귀인분이 문제 해결의 실마리를 알려주셨습니다.
<br>

[#27 fix: next/head가 적용되지 않는 이슈](https://github.com/kagrin97/NextJS-myblog/issues/27#issue-1682340110)
<br>

https://github.com/kagrin97/NextJS-myblog/blob/baab7edbffdd482865ed8ace67500f2edac00489/pages/_app.tsx#L10-L20
<br>

> 이 코드는 \_app.tsx에서 실행되기 때문에 모든 페이지와 컴포넌트에 영향을 줍니다.<br>
> showChild 상태가 false일 때 렌더링을 하지 않도록 설정하고 있습니다.<br>
> 그러나 이렇게 설정하면 페이지 렌더링이 늦어지고 동적 메타 태그가 정상적으로 삽입되지 않을 수 있습니다.<br>
> 따라서 해당부분을 삭제하고 window, document 객체를 사용하는 로직들을 브라우저 상태에서만 로직이 동작하도록 변경했습니다.
> <br>
> <br>

마운트시 True Boolean값을 전달하는 hook 👇
https://github.com/kagrin97/NextJS-myblog/blob/c23731eae6326f29e6951d195b5e0c5037d01523/hooks/useIsBrowser.ts#L3-L13
<br>

isBrowser값이 false일 경우 로직을 실행하지 않는 코드 👇
https://github.com/kagrin97/NextJS-myblog/blob/c23731eae6326f29e6951d195b5e0c5037d01523/components/Layout/SideDrawer.tsx#L53-L55
<br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/75124028/234187814-1b1fa576-e3fa-4bff-93ab-7d51c3fb2def.png" width="30%" />
  <br>
  실제로 까똑 og card를 잘 불러옵니다.
</p>

</div>
</details>
