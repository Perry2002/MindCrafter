
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-freelance-dark text-white pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-freelance-accent font-heading font-bold text-2xl">Freelance</span>
              <span className="text-white font-medium">.pro</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Services professionnels de freelance pour transformer vos idées en réalité. 
              Expertise, qualité et satisfaction client garanties.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
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
                <Link to="/contact" className="text-gray-300 hover:text-freelance-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Développement Web</li>
              <li className="text-gray-300">Design UX/UI</li>
              <li className="text-gray-300">Référencement SEO</li>
              <li className="text-gray-300">Marketing Digital</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: contact@freelance.pro</li>
              <li className="text-gray-300">Téléphone: +33 6 12 34 56 78</li>
              <li className="text-gray-300">Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Freelance Pro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
