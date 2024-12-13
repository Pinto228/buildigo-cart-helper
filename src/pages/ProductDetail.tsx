import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Mock data - replace with actual API call later
  const product = {
    id: id || "1",
    name: "Premium Cement",
    price: 12.99,
    description:
      "High-quality cement perfect for construction projects. This premium grade cement ensures durability and strength in all your building needs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Cement",
    specifications: [
      "Weight: 50kg",
      "Type: Portland Cement",
      "Setting Time: 45 minutes",
      "Strength: High",
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.specifications.map((spec, index) => (
                <li key={index} className="text-gray-600">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
          <Button
            onClick={() => {
              addToCart(product);
              console.log("Added to cart:", product.name);
            }}
            className="w-full md:w-auto"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;