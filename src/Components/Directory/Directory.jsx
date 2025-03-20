import CategoryItem from "../CategoryItem/CategoryItem";

const Directory = ({categories}) => {
  return (
    <div className="container mx-auto p-6 flex flex-col justify-center items-center text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
