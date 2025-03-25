import CategoryItem from "../CategoryItem/CategoryItem";

const Directory = ({categories}) => {
  return (
    <div className="container mx-auto p-6 flex flex-wrap justify-center text-center">
      {categories.map((category) => (
        <div key={category.id} className="flex justify-center p-2">
          <CategoryItem category={category} />
        </div>
      ))}
    </div>
  );
};

export default Directory;
