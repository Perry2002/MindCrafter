
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, Copyright } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-freelance-dark text-white pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-freelance-accent font-heading font-bold text-2xl">MIND</span>
              <span className="text-white font-medium">CRAFTER</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Création musicale personnalisée et contenu multimédia pour particuliers et professionnels. 
              Des compositions uniques qui marquent les esprits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-freelance-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-freelance-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-freelance-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-freelance-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-freelance-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-freelance-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-freelance-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos créations</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Musique personnalisée</li>
              <li className="text-gray-300">Chansons d'anniversaire</li>
              <li className="text-gray-300">Musique de mariage</li>
              <li className="text-gray-300">Contenu pour réseaux sociaux</li>
              <li className="text-gray-300">Identité sonore de marque</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2 text-freelance-accent" /> 
                <span>contact@mindcrafter.fr</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2 text-freelance-accent" /> 
                <span>+33 6 12 34 56 78</span>
              </li>
              <li className="text-gray-300">Paris, France</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="flex items-center mb-4 md:mb-0">
            <Copyright size={16} className="mr-2" />
            <p>{currentYear} MINDCRAFTER. Tous droits réservés.</p>
          </div>
          <div>
            <p className="text-sm">Création de sons personnalisés et contenu multimédia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
