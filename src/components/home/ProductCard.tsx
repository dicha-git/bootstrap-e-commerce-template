import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isNew,
  discount,
}: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-success text-success-foreground">Baru</Badge>
          )}
          {discount && (
            <Badge className="bg-destructive text-destructive-foreground">-{discount}%</Badge>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full shadow">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to cart overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button className="w-full" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Tambah ke Keranjang
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">({reviews} ulasan)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
