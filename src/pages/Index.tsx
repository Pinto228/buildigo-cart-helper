import { ProductCard } from "@/components/ProductCard";

// Mock data - replace with actual API call later
const products = [
  {
    id: "1",
    name: "Premium Cement",
    price: 12.99,
    description: "High-quality cement for construction projects",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Cement",
  },
  {
    id: "2",
    name: "Steel Rebar",
    price: 24.99,
    description: "Reinforced steel bars for concrete structures",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Steel",
  },
  {
    id: "3",
    name: "Bricks",
    price: 0.99,
    description: "Standard red clay bricks",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Bricks",
  },
];

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-8">Building Materials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;