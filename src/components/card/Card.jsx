import { useState } from "react";
import Button from "../button/Button";

const Card = ({ food, onAdd, onRemove }) => {
  const { title, Image, price, id } = food;
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    onAdd(food);
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
      onRemove(food);
    }
  };

  return (
    <div className="relative h-fit w-fit border">
      <span className="absolute left-[-1rem] top-[-1rem] flex h-[2rem] w-[2rem] items-center justify-center rounded-full border bg-yellow-300 p-1 text-sm">
        {count}
      </span>
      <div className="h-full w-full">
        <img className="h-52 object-contain" src={Image} alt={title} />
      </div>

      <h4 className="">
        {title}{" "}
        <span className="h-12 w-12 rounded-full border bg-yellow-300 p-1 text-sm">
          $4
        </span>
      </h4>

      <div className="flex w-full justify-between">
        <Button className="" title={"+"} onClick={handleAdd} />
        <Button className="" title={"-"} onClick={handleRemove} />
      </div>
    </div>
  );
};

export default Card;
