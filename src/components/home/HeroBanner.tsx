import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 overflow-hidden">
      <div className="container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground animate-fade-in">
            <span className="inline-block px-4 py-1 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4">
              Koleksi Terbaru 2024
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Temukan Gaya <br />
              <span className="text-warning">Terbaikmu</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-md">
              Jelajahi koleksi produk fashion terkini dengan kualitas premium dan harga terjangkau.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero-outline" size="lg">
                Belanja Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Lihat Promo
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop"
                    alt="Fashion Collection"
                    className="w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute top-4 right-0 bg-warning text-warning-foreground px-4 py-2 rounded-lg shadow-lg font-semibold">
                Diskon 50%
              </div>
              <div className="absolute bottom-8 -left-4 bg-background text-foreground px-4 py-2 rounded-lg shadow-lg font-medium text-sm">
                ⭐ 4.9 Rating
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default HeroBanner;
