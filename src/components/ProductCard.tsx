import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/product/${product.id}`} className="block aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        </Link>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Button
          onClick={() => {
            addToCart(product);
            console.log("Added to cart:", product.name);
          }}
          className="w-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}