import profile from "../../assets/images/profile.png";
export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-4 border-b-2">
      <h2 className="text-4xl font-bold">Dev Article Recap</h2>
      <img src={profile} alt="" />
    </header>
  );
};
