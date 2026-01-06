import { Facebook, Instagram, Twitter, Mail, Phone, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="text-green-400" />
            <h2 className="text-xl font-bold text-white">Agri Kisan</h2>
          </div>
          <p className="text-sm text-green-200 leading-relaxed">
            Empowering farmers with digital tools for better growth,
            fair pricing, and smart agriculture 🌱
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Market Prices</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} /> support@agrikisan.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <Facebook className="hover:text-white cursor-pointer" />
              <Instagram className="hover:text-white cursor-pointer" />
              <Twitter className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 text-center py-4 text-sm text-green-300">
        © {new Date().getFullYear()} Agri Kisan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
