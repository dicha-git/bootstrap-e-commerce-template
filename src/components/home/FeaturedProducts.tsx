import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Kemeja Flannel Premium Motif Kotak",
    price: 189000,
    originalPrice: 299000,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 234,
    isNew: true,
    discount: 37,
  },
  {
    id: 2,
    name: "Sneakers Running Ultra Comfort",
    price: 599000,
    originalPrice: 899000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 567,
    discount: 33,
  },
  {
    id: 3,
    name: "Jam Tangan Analog Classic Steel",
    price: 450000,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 189,
    isNew: true,
  },
  {
    id: 4,
    name: "Tas Ransel Laptop Anti Air",
    price: 275000,
    originalPrice: 350000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 312,
    discount: 21,
  },
  {
    id: 5,
    name: "Dress Casual Wanita Floral",
    price: 245000,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 428,
    isNew: true,
  },
  {
    id: 6,
    name: "Wireless Earbuds Pro Max",
    price: 399000,
    originalPrice: 599000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 876,
    discount: 33,
  },
  {
    id: 7,
    name: "Celana Jeans Slim Fit Premium",
    price: 325000,
    image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 245,
  },
  {
    id: 8,
    name: "Kacamata Hitam Polarized UV400",
    price: 175000,
    originalPrice: 250000,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 156,
    discount: 30,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Produk Unggulan
            </h2>
            <p className="text-muted-foreground">
              Produk terlaris dengan rating terbaik
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/products">
              Lihat Semua
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
