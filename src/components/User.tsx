import userImg from "../../assets/images/image-avatar.webp";

const User = () => {
  return (
    <div className="flex gap-x-4 items-center">
      <img src={userImg} alt="User Avatar" className="h-[32px]" />
      <p className="font-bold ">Greg Hooper</p>
    </div>
  );
};

export default User;
