import { useState } from "react";

const Info = () => {
  const [fruitName, setfruitName] = useState("");
  const [singerName, setSingerName] = useState("");

  const onChageFruitName = (event) => {
    setfruitName(event.target.value);
  };

  const onChageSingerName = (event) => {
    setSingerName(event.target.value);
  };

  return (
    <>
      <input
        placeholder="과일을 입력해주세요."
        value={fruitName}
        onChange={onChageFruitName}
      />

      <input
        placeholder="가수를 입력해주세요."
        value={singerName}
        onChange={onChageSingerName}
      />
      <p>진실님은 과일 {fruitName}을(를) 좋아한다.</p>
      <p>현수님은 가수 {singerName}을(를) 좋아한다.</p>
    </>
  );
};

export default Info;
