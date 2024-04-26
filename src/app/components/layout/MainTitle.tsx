const MainTitle = ({
  subTitle,
  title,
}: {
  subTitle: string;
  title: string;
}) => {
  return (
    <div className="text-center mb-4">
      <h3 className="font-bold text-gray-500 leading-4">{subTitle}</h3>
      <h2 className="text-main font-bold text-4xl">{title}</h2>
    </div>
  );
};
export default MainTitle;
