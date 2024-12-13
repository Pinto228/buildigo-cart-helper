import { ProductCard } from "@/components/ProductCard";
//import { Layout } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Кирпич",
    price: 899,
    description: "Высококачественный кирпич для строительных проектов и работ",
    image: "https://кирпич.com/upload/iblock/c70/qh1q3gth34do23lchu7yema68ga4yah9.jpg",
    category: "Cement",
  },
  {
    id: "2",
    name: "Дрель",
    price: 13000,
    description: "Высококачественная дрель для строительных проектов и работ",
    image: "https://vihr.ru/pictures/product/big/5332_big.jpg",
    category: "Steel",
  },
  {
    id: "3",
    name: "Гвозди",
    price: 150,
    description: "Высококачественные гвозди для строительных проектов и работ",
    image: "https://425555.ru/upload/iblock/25b/y31gr5lsjc06jt3kpbs75r255e7ky9ml.jpg",
    category: "Bricks",
  },
  {
    id: "4",
    name: "Шуруповёрт",
    price: 7499,
    description: "Высококачественный шуруповёрт для строительных проектов и работ",
    image: "https://cdn1.ozone.ru/s3/multimedia-3/6104885499.jpg",
    category: "Cement",
  },
  {
    id: "5",
    name: "Рулетка",
    price: 3400,
    description: "Высококачественная релетка для строительных проектов и работ",
    image: "https://m.media-amazon.com/images/I/71RcwHWG0iS._AC_UL800_QL65_.jpg",
    category: "Steel",
  },
  {
    id: "6",
    name: "Цемент",
    price: 2350,
    description: "Высококачественный цемент для строительных проектов и работ",
    image: "https://stroymoll33.ru/image/cache/catalog/stroymoll/test10/htmlimage-1000x1000.png",
    category: "Bricks",
  },
  {
    id: "7",
    name: "Плитка напольная",
    price: 8000,
    description: "Высококачественная плитка для строительных проектов и работ",
    image: "https://valles.ru/upload/iblock/fa0/fa08cbf31d886c2fc239f953640efa55.jpg",
    category: "Cement",
  },
  {
    id: "8",
    name: "Строительный фен",
    price: 6999,
    description: "Высококачественный стоительный фен для строительных проектов и работ",
    image: "https://cdn1.ozone.ru/s3/multimedia-j/6020054719.jpg",
    category: "Steel",
  },
  {
    id: "9",
    name: "Ящик для инструментов",
    price: 5555,
    description: "Высококачественный ящик для хранения различных инструментов ",
    image: "https://avatars.mds.yandex.net/i?id=30bcd8b20a1cbff5f86a80501fe1a75e_l-10574297-images-thumbs&n=13",
    category: "Bricks",
  },
  {
    id: "10",
    name: "Клей для плитки",
    price: 999,
    description: "Высококачественный клей для плиточных работ и строительных проектов",
    image: "https://sordon.ru/image/cache/catalog/products/6f6c9463b36a6fe1115ca979ea8e1cba-500x500.jpg",
    category: "Cement",
  },
  {
    id: "11",
    name: "Молоток",
    price: 1500,
    description: "Высококачественный молоток для строительных проектов и работ",
    image: "https://avatars.mds.yandex.net/i?id=c7d05c9b39683e7347606a7b3e05c686_l-9068443-images-thumbs&n=13",
    category: "Steel",
  },
  {
    id: "12",
    name: "Отвёртка",
    price: 1200,
    description: "Высококачественная отвёртка для строительных проектов и работ",
    image: "https://avatars.mds.yandex.net/get-mpic/12490566/2a0000018dbe6bf951d902b59da2699a1273/orig",
    category: "Bricks",
  },
];

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-8">Стройматериаллы</h1>
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