
import { CheckCircle, Music, Headphones, Star, Video, Image, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, icon: Icon, features, highlight = false, price = null }) => {
  return (
    <div className={`p-8 rounded-lg transition-transform hover:-translate-y-1 hover:shadow-xl ${highlight ? 'bg-freelance-primary/10 border border-freelance-primary' : 'bg-white'}`}>
      <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-5 ${highlight ? 'bg-freelance-primary text-white' : 'bg-freelance-light text-freelance-primary'}`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {price && (
        <div className="mb-4 flex items-baseline">
          <span className="text-2xl font-bold text-freelance-primary">À partir de {price}€</span>
        </div>
      )}
      
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <CheckCircle size={16} className="text-freelance-primary mr-2 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        to="/contact" 
        className={`mt-6 inline-flex items-center font-medium ${highlight ? 'text-freelance-primary' : 'text-gray-800'} hover:text-freelance-secondary`}
      >
        En savoir plus <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Création musicale personnalisée",
      description: "Des compositions uniques pour immortaliser vos moments importants avec une touche personnelle.",
      icon: Music,
      highlight: true,
      price: 149,
      features: [
        "Chanson d'anniversaire personnalisée",
        "Musique de mariage sur mesure", 
        "Compositions pour occasions spéciales",
        "Droits d'utilisation inclus",
        "2 révisions incluses"
      ],
    },
    {
      title: "Formule START",
      description: "Contenu clé en main pour vos réseaux sociaux avec un impact immédiat.",
      icon: Video,
      price: 99,
      features: [
        "Création pour Reels, TikTok et Shorts",
        "Livraison rapide (48h)",
        "Optimisé pour l'algorithme",
        "Format adapté à chaque plateforme",
        "Musique libre de droits incluse"
      ],
    },
    {
      title: "Formule BRAND BOOST",
      description: "Contenu complet (vidéo + visuel + son personnalisé) pour marquer les esprits et vous démarquer.",
      icon: Image,
      price: 199,
      features: [
        "Identité sonore unique",
        "Visuels de marque cohérents",
        "Montage vidéo professionnel",
        "Stratégie de contenu incluse",
        "Format pour toutes plateformes"
      ],
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-gray-100 to-white" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="text-freelance-primary font-medium">Nos offres</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Des créations sonores pour chaque besoin</h2>
          <p className="text-lg text-gray-600">
            Découvrez nos services de création musicale et contenu multimédia personnalisés pour particuliers et professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Besoin d'une formule sur mesure pour votre projet ?</p>
          <Link 
            to="/contact" 
            className="bg-freelance-primary hover:bg-freelance-secondary text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center"
          >
            Demander un devis personnalisé
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
