import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="bg-primary py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-primary-foreground">
                Berlangganan Newsletter
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Dapatkan info promo dan produk terbaru
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="bg-primary-foreground text-foreground w-full md:w-80"
              />
              <Button variant="secondary">Langganan</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h4 className="text-xl font-bold mb-4">TokoKu</h4>
            <p className="text-background/70 text-sm mb-4">
              Toko online terpercaya dengan produk berkualitas dan harga terjangkau.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-background/70 hover:text-background">Tentang Kami</Link></li>
              <li><Link to="/products" className="text-background/70 hover:text-background">Produk</Link></li>
              <li><Link to="/promo" className="text-background/70 hover:text-background">Promo</Link></li>
              <li><Link to="/blog" className="text-background/70 hover:text-background">Blog</Link></li>
              <li><Link to="/career" className="text-background/70 hover:text-background">Karir</Link></li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h4 className="font-semibold mb-4">Layanan Pelanggan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-background/70 hover:text-background">Pusat Bantuan</Link></li>
              <li><Link to="/faq" className="text-background/70 hover:text-background">FAQ</Link></li>
              <li><Link to="/shipping" className="text-background/70 hover:text-background">Pengiriman</Link></li>
              <li><Link to="/returns" className="text-background/70 hover:text-background">Pengembalian</Link></li>
              <li><Link to="/track" className="text-background/70 hover:text-background">Lacak Pesanan</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-background/70" />
                <span className="text-background/70">Jl. Sudirman No. 123, Jakarta Pusat, 10110</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-background/70" />
                <span className="text-background/70">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-background/70" />
                <span className="text-background/70">cs@tokoku.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2024 TokoKu. Hak Cipta Dilindungi.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-background">Kebijakan Privasi</Link>
              <Link to="/terms" className="hover:text-background">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
