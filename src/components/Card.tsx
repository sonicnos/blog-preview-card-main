import svg from "../../assets/images/illustration-article.svg";
import Badge from "./Badge";
import Section from "./Section";
import User from "./User";

const Card = () => {
  return (
    <div className="border rounded-2xl border-black p-6 h-[525px] w-[390px] bg-white shadow-[9px_9px_0px_-1px_rgba(0,_0,_0,_0.9)]">
      <div className="h-full w-full flex gap-y-6 flex-col">
        <img src={svg} alt="svg" className="rounded-xl" />
        <Badge />
        <Section />
        <User />
      </div>
    </div>
  );
};

export default Card;
