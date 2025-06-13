
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo/Branding */}
          <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold">Namaste Bitcoin 2026</h3>
            <p className="font-mono text-sm text-gray-400"><a href="https://getbit.in" target="_blank" rel="noopener noreferrer">Organized by Getbit</a></p>
          </div>
          
          {/* Event Details */}
          <div className="font-mono text-sm text-gray-300 space-y-1">
            <p>January 8–9, 2026</p>
            <p>Bangalore, India</p>
          </div>
          
          {/* Bitcoin Symbol */}
          <div className="text-bitcoin-orange text-4xl">₿</div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800">
            <p className="font-mono text-xs text-gray-500">
              © 2025 Getbit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
