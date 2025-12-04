import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Gratis Ongkir",
    description: "Untuk pembelian di atas Rp 500.000",
  },
  {
    icon: Shield,
    title: "Pembayaran Aman",
    description: "100% transaksi terenkripsi",
  },
  {
    icon: Headphones,
    title: "Layanan 24/7",
    description: "Siap membantu kapan saja",
  },
  {
    icon: RefreshCw,
    title: "Garansi Pengembalian",
    description: "30 hari pengembalian mudah",
  },
];

const Features = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
