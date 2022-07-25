# NextJS를 이용해 블로그를 만들었습니다.

주소 : [https://firebase-twitter.vercel.app/](https://kagrin97-blog.vercel.app/)

## 사용 기술

- frontEnd : NextJS, TypeScript
- backend, db : contentlayer 
- deploy : vercel

## 구현한 기능

  + 블로그 포스트 가져오기

  ![본다](https://user-images.githubusercontent.com/75124028/180695584-57d74da4-8b7d-4d88-8a33-541328a25655.gif)
  - contentlayer.config.ts 설정 파일에 포스터의 필드와 contents 타입과 path를 설정합니다.
  - contentlayer의 useMDXComponent메소드를 사용해 posts폴더의 MDX파일(블로그글)을 가져옵니다.
  ***
  + 블로그 포스팅 기능
  
  ![포스팅](https://user-images.githubusercontent.com/75124028/180694879-51cd8624-1536-48a0-8237-08f115187e90.gif)
  - contentlayer라는 NextJS용 SDK를 사용해서 블로그 작성, 삭제, 수정이 가능합니다.
  ***
  + 다크모드, 댓글기능

  ![댓글](https://user-images.githubusercontent.com/75124028/180695344-2e45d499-ca3b-4cf8-bb60-69b474026ac9.gif)
  - next-themes를 사용 현재 dark인지 ligth인지를 판단해 _document의 className을 dark, ligth 토글
  - utterances의 깃 이슈기능을 이용해서 블로긔 댓글 
