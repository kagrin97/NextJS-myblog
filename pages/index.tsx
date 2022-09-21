import Image from "next/image";
import Link from "next/link";

import Container from "../components/Container";

const Home = () => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <section className={`relative`}>
          <Image
            src={`/배너.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          <article
            className={`flex-col absolute top-14 font-extrabold italic text-white text-base md:text-3xl text flex justify-center w-full drop-shadow-lg`}
          >
            <span className={`ml-3 mb-3`}>MinGyu-Kang Development Blog</span>
            <span className={`ml-3`}>개발을 위한 개발생활</span>
          </article>
        </section>
        <div className={`absolute bottom-5 left-5 animate-pulse`}></div>
        <section className="mt-10 text-center">
          <Image
            src={`/아바타.jpg`}
            alt="깃허브"
            width={100}
            height={100}
            className={`rounded-full`}
          />
          <Link href="https://github.com/kagrin97">
            <Image
              src={`/github.png`}
              alt="깃허브"
              width={40}
              height={40}
              className={`rounded-3xl hover:cursor-pointer`}
            />
          </Link>
          <h1 className="text-2xl my-10">언제나 공부중인 민규</h1>
          <h2 className="text-xl">
            저는 다른 개발자들의 prototype이 되는것이 꿈입니다.
          </h2>
          <p className="my-10 opacity-50">
            GitHub버튼을 클릭하면 제 GitHub으로 이동됩니다!
          </p>
        </section>
      </div>
    </Container>
  );
};

export default Home;
