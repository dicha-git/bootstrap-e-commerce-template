import { useState } from "react";
import { Filter, Grid3X3, List, ChevronDown, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const products = [
  {
    id: 1,
    name: "Laptop Gaming ASUS ROG Strix G15",
    price: 18999000,
    originalPrice: 21999000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
    rating: 4.8,
    reviews: 256,
    isNew: true,
    discount: 14,
    category: "Elektronik",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max 256GB",
    price: 21499000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    rating: 4.9,
    reviews: 512,
    isNew: true,
    category: "Elektronik",
  },
  {
    id: 3,
    name: "Nike Air Max 270 React",
    price: 2199000,
    originalPrice: 2799000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    rating: 4.7,
    reviews: 189,
    discount: 21,
    category: "Fashion",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Wireless",
    price: 4999000,
    originalPrice: 5499000,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
    rating: 4.9,
    reviews: 324,
    discount: 9,
    category: "Elektronik",
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch 6 Classic",
    price: 5299000,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400",
    rating: 4.6,
    reviews: 98,
    isNew: true,
    category: "Elektronik",
  },
  {
    id: 6,
    name: "Kemeja Batik Premium Pria",
    price: 459000,
    originalPrice: 599000,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    rating: 4.5,
    reviews: 67,
    discount: 23,
    category: "Fashion",
  },
  {
    id: 7,
    name: "Tas Ransel Anti Air Waterproof",
    price: 289000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.4,
    reviews: 156,
    category: "Fashion",
  },
  {
    id: 8,
    name: "Blender Philips HR2157",
    price: 899000,
    originalPrice: 1099000,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400",
    rating: 4.3,
    reviews: 234,
    discount: 18,
    category: "Rumah Tangga",
  },
  {
    id: 9,
    name: "Set Peralatan Masak Anti Lengket",
    price: 1299000,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    rating: 4.6,
    reviews: 87,
    category: "Rumah Tangga",
  },
  {
    id: 10,
    name: "Vitamin C 1000mg Immune Booster",
    price: 185000,
    originalPrice: 225000,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    rating: 4.7,
    reviews: 445,
    discount: 18,
    category: "Kesehatan",
  },
  {
    id: 11,
    name: "Sepatu Running Adidas Ultraboost",
    price: 2899000,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400",
    rating: 4.8,
    reviews: 312,
    isNew: true,
    category: "Olahraga",
  },
  {
    id: 12,
    name: "Dumbbell Set 20kg Adjustable",
    price: 1599000,
    originalPrice: 1899000,
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=400",
    rating: 4.5,
    reviews: 76,
    discount: 16,
    category: "Olahraga",
  },
];

const categories = [
  "Semua",
  "Elektronik",
  "Fashion",
  "Rumah Tangga",
  "Kesehatan",
  "Olahraga",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [priceRange, setPriceRange] = useState([0, 25000000]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showDiscount, setShowDiscount] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "Semua" || product.category === selectedCategory;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const discountMatch = !showDiscount || product.discount;
    const newMatch = !showNew || product.isNew;
    return categoryMatch && priceMatch && discountMatch && newMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
      default:
        return b.id - a.id;
    }
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Kategori</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Rentang Harga</h3>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={25000000}
            step={500000}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Filter</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox
              checked={showDiscount}
              onCheckedChange={(checked) => setShowDiscount(checked as boolean)}
            />
            <span className="text-sm">Sedang Diskon</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox
              checked={showNew}
              onCheckedChange={(checked) => setShowNew(checked as boolean)}
            />
            <span className="text-sm">Produk Baru</span>
          </label>
        </div>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSelectedCategory("Semua");
          setPriceRange([0, 25000000]);
          setShowDiscount(false);
          setShowNew(false);
        }}
      >
        <X className="h-4 w-4 mr-2" />
        Reset Filter
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <a href="/" className="hover:text-primary transition-colors">
            Beranda
          </a>
          <ChevronDown className="h-4 w-4 -rotate-90" />
          <span className="text-foreground">Produk</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Semua Produk
            </h1>
            <p className="text-muted-foreground mt-1">
              Menampilkan {sortedProducts.length} produk
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Filter Produk</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Terbaru</SelectItem>
                <SelectItem value="price-low">Harga Terendah</SelectItem>
                <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                <SelectItem value="rating">Rating Tertinggi</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="hidden md:flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <h2 className="font-semibold text-lg text-foreground mb-4">
                Filter Produk
              </h2>
              <FilterContent />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {sortedProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Tidak ada produk yang sesuai dengan filter.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("Semua");
                    setPriceRange([0, 25000000]);
                    setShowDiscount(false);
                    setShowNew(false);
                  }}
                >
                  Reset Filter
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
