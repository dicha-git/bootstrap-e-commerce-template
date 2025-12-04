import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Flash Sale Banner */}
          <div className="relative bg-gradient-to-br from-destructive to-destructive/80 rounded-2xl p-8 text-destructive-foreground overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Flash Sale</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Diskon hingga 70%
              </h3>
              <p className="text-destructive-foreground/80 mb-6">
                Berakhir dalam 12:34:56
              </p>
              <Button variant="secondary" size="lg">
                Belanja Sekarang
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-destructive-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          {/* New Arrival Banner */}
          <div className="relative bg-gradient-to-br from-foreground to-foreground/90 rounded-2xl p-8 text-background overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-warning text-warning-foreground rounded-full text-sm font-medium mb-3">
                New Arrival
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Koleksi Musim Panas
              </h3>
              <p className="text-background/80 mb-6">
                Tampil segar dengan koleksi terbaru kami
              </p>
              <Button variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground">
                Jelajahi Koleksi
              </Button>
            </div>
            <div className="absolute top-4 right-4 w-40 h-40 bg-background/5 rounded-full" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-background/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
