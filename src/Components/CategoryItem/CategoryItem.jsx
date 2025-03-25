const CategoryItem = ({category}) => {

  const { title, img } = category;

  return (
    <div className="shadow-lg rounded-lg p-1 m-1 flex flex-col items-center justify-center transform transition-transform hover:scale-105 hover:shadow-2xl w-full max-w-[200px] sm:max-w-[250px]">
      <h2 className="text-xs font-semibold tracking-tight">{title}</h2>
      <img src={img} alt={title} className="w-4/5 h-4/5 my-1" />
      <button
      onClick={() => alert(`You clicked on ${title}`)}
      className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
    >
      Shop Now
    </button>
    </div>
  );
};

export default CategoryItem;