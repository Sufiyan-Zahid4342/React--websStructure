
const ProductCard = () => {
    return (
      <div className="border p-4 rounded-md shadow-md">
        <img src="/assets/product1.jpg" alt="Product" className="w-full h-40 object-cover" />
        <h3 className="text-lg font-bold mt-2">Product Name</h3>
        <p className="text-gray-500">$99.99</p>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">More Info</button>
      </div>
    );
  };
  
  export default ProductCard;
  