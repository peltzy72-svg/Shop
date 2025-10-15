import ProductCard from "./ProductCard";
import products from "@/data/products.json";

const ProductGrid = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
        <select className="px-4 py-2 rounded-md border bg-background text-sm">
          <option>Sort by: Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
