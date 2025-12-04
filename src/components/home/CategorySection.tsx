import { Link } from "react-router-dom";
import { Shirt, Watch, Footprints, Smartphone, Sofa, Sparkles } from "lucide-react";

const categories = [
  {
    name: "Fashion Pria",
    icon: Shirt,
    count: 1250,
    color: "bg-blue-100 text-blue-600",
    href: "/category/mens-fashion"
  },
  {
    name: "Fashion Wanita",
    icon: Sparkles,
    count: 2340,
    color: "bg-pink-100 text-pink-600",
    href: "/category/womens-fashion"
  },
  {
    name: "Aksesoris",
    icon: Watch,
    count: 890,
    color: "bg-amber-100 text-amber-600",
    href: "/category/accessories"
  },
  {
    name: "Sepatu",
    icon: Footprints,
    count: 1567,
    color: "bg-green-100 text-green-600",
    href: "/category/shoes"
  },
  {
    name: "Elektronik",
    icon: Smartphone,
    count: 2100,
    color: "bg-purple-100 text-purple-600",
    href: "/category/electronics"
  },
  {
    name: "Perabotan",
    icon: Sofa,
    count: 760,
    color: "bg-orange-100 text-orange-600",
    href: "/category/furniture"
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Kategori Populer
          </h2>
          <p className="text-muted-foreground">
            Temukan produk berdasarkan kategori favoritmu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className="group bg-card rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count.toLocaleString()} Produk</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
