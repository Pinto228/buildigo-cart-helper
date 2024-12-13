import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

// Массив с данными продуктов (в реальном приложении это должно быть API)
const products = [
  {
    id: "1",
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
  },
  {
    id: "2",
    name: "Steel Rebar",
    price: 24.99,
    description:
      "Professional-grade steel rebar for reinforced concrete structures. Ensures maximum strength and durability in construction projects.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Steel",
    specifications: [
      "Length: 6m",
      "Diameter: 12mm",
      "Grade: B500B",
      "Yield Strength: 500 MPa",
    ],
  },
  {
    id: "3",
    name: "Bricks",
    price: 0.99,
    description:
      "High-quality clay bricks perfect for all construction needs. These bricks offer excellent durability and aesthetic appeal.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Bricks",
    specifications: [
      "Size: 215x102.5x65mm",
      "Material: Clay",
      "Compressive Strength: 20 N/mm²",
      "Water Absorption: <12%",
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Находим продукт по id из URL
  const product = products.find((p) => p.id === id) || products[0];

  console.log("Showing details for product:", product.name);

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