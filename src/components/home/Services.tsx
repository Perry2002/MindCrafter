
import { CheckCircle, MonitorSmartphone, Code, Globe } from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
      <div className="inline-flex items-center justify-center p-3 bg-freelance-light text-freelance-primary rounded-lg mb-5">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-4 space-y-2">
        {/* Features spécifiques à chaque service */}
        {title === "Développement Web" && (
          <>
            <li className="flex items-center text-gray-600">
              <CheckCircle size={16} className="text-freelance-primary mr-2" />
              <span>Sites vitrine & e-commerce</span>
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle size={16} className="text-freelance-primary mr-2" />
              <span>Applications web sur mesure</span>
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle size={16} className="text-freelance-primary mr-2" />
              <span>Solutions WordPress</span>
            </li>
          </>
        )}
        {title === "Design UX/UI" && (
          <>
            <li className="flex items-center text-gray-600">
              <CheckCircle size={16} className="text-freelance-primary mr-2" />
              <span>Wireframing & Prototypage</span>
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle size={16} className="text-freelance-primary mr-2" />
              <span>Design responsive</span>
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle size={16} className="text-freelance-primary mr-2" />
              <span>Refonte visuelle</span>
            </li>
          </>
        )}
        {title === "Marketing Digital" && (
          <>
            <li className="flex items-center text-gray-600">
              <CheckCircle size={16} className="text-freelance-primary mr-2" />
              <span>Référencement naturel SEO</span>
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle size={16} className="text-freelance-primary mr-2" />
              <span>Stratégie de contenu</span>
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle size={16} className="text-freelance-primary mr-2" />
              <span>Analyse des performances</span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web modernes, rapides et sécurisés qui répondent à vos besoins spécifiques.",
      icon: Code,
    },
    {
      title: "Design UX/UI",
      description: "Interfaces utilisateurs intuitives et esthétiques pour une expérience utilisateur optimale.",
      icon: MonitorSmartphone,
    },
    {
      title: "Marketing Digital",
      description: "Stratégies efficaces pour améliorer votre visibilité en ligne et attirer plus de clients.",
      icon: Globe,
    },
  ];

  return (
    <section className="section bg-gray-50" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mes services</h2>
          <p className="text-lg text-gray-600">
            Je propose des solutions complètes pour aider votre entreprise à se développer dans l'environnement numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
