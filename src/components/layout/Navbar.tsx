
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Music, Headphones } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navigationLinks = [
    { name: "Accueil", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" }, 
    { name: "Contact", path: "/contact" },
  ];
  
  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Fermer le menu en cas de changement de route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-freelance-dark/95 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative h-10 w-10 bg-freelance-primary rounded-full flex items-center justify-center animate-pulse-glow">
              <Music size={20} className="text-white" />
              <span className="absolute -right-1 -top-1 h-4 w-4 bg-freelance-accent rounded-full flex items-center justify-center">
                <Headphones size={10} className="text-white" />
              </span>
            </div>
            <div>
              <span className="text-freelance-primary font-heading font-bold text-2xl tracking-wider">MIND</span>
              <span className="text-white font-heading font-bold text-2xl tracking-wider">CRAFTER</span>
            </div>
          </Link>
          
          {/* Navigation sur desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-freelance-primary ${
                  location.pathname === link.path
                    ? "text-freelance-primary"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-freelance-primary hover:bg-freelance-secondary text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
            >
              Demander un devis
            </Link>
          </div>
          
          {/* Toggle menu mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-freelance-dark absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-4 font-medium ${
                  location.pathname === link.path
                    ? "text-freelance-primary"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-freelance-primary hover:bg-freelance-secondary text-white font-medium py-2 px-4 mx-4 rounded-md transition-all duration-300"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
