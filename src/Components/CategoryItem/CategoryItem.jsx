const CategoryItem = ({category}) => {

  const { title, img } = category;

  return (
    <div className="shadow-lg rounded-lg p-3 m-2 w-64 flex flex-col items-center justify-center transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
      <img src={img} alt={title} className="w-4/5 h-4/5 my-2" />
      <p className="mt-2 text-sm">Shop Now</p>
    </div>
  );
};

export default CategoryItem;