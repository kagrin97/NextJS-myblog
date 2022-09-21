import Link from "next/link";

const SeachBar = ({ searchTitle, onChangeSearchTitle }) => {
  return (
    <form className={`fixed w-4/5 max-w-2xl flex mt-4`}>
      <input
        type="text"
        value={searchTitle}
        onChange={onChangeSearchTitle}
        className={`w-full px-3 py-5 rounded-lg bg-gray-200 dark:bg-gray-600 mt-3 focus:outline-none`}
        placeholder="포스터의 제목을 입력하세요. 😎"
      />
    </form>
  );
};

export default SeachBar;
