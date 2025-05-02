
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Music, Video, Image, Headphones } from "lucide-react";

// Price card component
const PriceCard = ({ title, price, description, features, highlight = false, icon: Icon }) => {
  return (
    <div className={`rounded-xl ${highlight ? 'border-2 border-freelance-primary' : 'border border-gray-200'} overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl`}>
      {highlight && (
        <div className="bg-freelance-primary text-white py-1 text-center text-sm font-medium">
          Plus populaire
        </div>
      )}
      <div className="p-6 bg-white">
        <div className="flex items-center mb-4">
          <div className={`h-10 w-10 rounded-full ${highlight ? 'bg-freelance-primary text-white' : 'bg-freelance-light text-freelance-primary'} flex items-center justify-center mr-3`}>
            <Icon size={20} />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">€{price}</span>
            <span className="text-gray-500 ml-1">/ projet</span>
          </div>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex">
              <CheckCircle size={18} className={`${highlight ? 'text-freelance-primary' : 'text-gray-500'} mt-0.5 mr-2 flex-shrink-0`} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Link 
          to="/contact" 
          className={`w-full block text-center py-2 px-4 rounded font-medium ${highlight 
            ? 'bg-freelance-primary hover:bg-freelance-secondary text-white' 
            : 'border border-freelance-primary text-freelance-primary hover:bg-freelance-primary hover:text-white'
          } transition-colors`}
        >
          Choisir cette formule
        </Link>
      </div>
    </div>
  );
};

// FAQ Item component
const FAQItem = ({ question, answer }) => {
  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-3 text-freelance-dark">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

const Services = () => {
  const priceOptions = [
    {
      title: "Création Musicale",
      price: "149",
      description: "Compositions musicales personnalisées pour vos événements spéciaux",
      features: [
        "Chanson entièrement personnalisée",
        "Jusqu'à 5 minutes de musique",
        "Paroles sur mesure",
        "2 révisions incluses",
        "Fichiers audio haute qualité",
        "Livraison sous 7 jours"
      ],
      highlight: true,
      icon: Music
    },
    {
      title: "Formule START",
      price: "99",
      description: "Contenus optimisés pour réseaux sociaux avec livraison rapide",
      features: [
        "1 format vidéo (Reel/TikTok/Short)",
        "Musique libre de droits",
        "1 révision incluse",
        "Optimisé pour l'algorithme",
        "Formats adaptés aux plateformes",
        "Livraison sous 48h"
      ],
      highlight: false,
      icon: Video
    },
    {
      title: "BRAND BOOST",
      price: "199",
      description: "Pack complet visuel, vidéo et son pour une identité de marque cohérente",
      features: [
        "3 formats vidéo personnalisés",
        "Identité sonore unique",
        "Pack de visuels coordonnés",
        "3 révisions incluses",
        "Stratégie de contenu",
        "Livraison sous 10 jours"
      ],
      highlight: false,
      icon: Image
    }
  ];

  const faqs = [
    {
      question: "Comment se déroule le processus de création musicale personnalisée ?",
      answer: "Le processus commence par un échange détaillé pour comprendre votre projet et vos attentes. Nous créons ensuite une première version que vous pourrez écouter et commenter. Après vos retours, nous finalisons la création pour vous livrer un produit qui correspond parfaitement à vos souhaits."
    },
    {
      question: "Quels sont les délais de livraison pour une chanson personnalisée ?",
      answer: "Les délais standards sont de 7 jours ouvrés pour une création musicale personnalisée. Pour les projets urgents, nous proposons une option de livraison express (48-72h) moyennant un supplément."
    },
    {
      question: "Est-ce que je possède les droits sur la musique créée pour moi ?",
      answer: "Oui, vous recevez une licence d'utilisation complète pour un usage personnel ou commercial (selon la formule choisie). Vous pouvez utiliser votre création sans restriction dans le cadre défini par votre contrat."
    },
    {
      question: "Quels formats de fichiers audio sont fournis avec la création musicale ?",
      answer: "Nous fournissons vos fichiers audio en formats haute qualité (WAV) ainsi qu'en MP3 pour une utilisation plus facile. Sur demande, nous pouvons également fournir les pistes séparées ou d'autres formats spécifiques."
    },
    {
      question: "Puis-je demander des modifications après la livraison de ma création ?",
      answer: "Chaque formule inclut un nombre défini de révisions. Au-delà, des frais supplémentaires peuvent s'appliquer pour des modifications importantes. Nous vous encourageons à partager tous vos besoins et préférences dès le début du projet."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-freelance-dark to-black text-white">
          <div className="container text-center">
            <span className="text-freelance-primary font-medium">Nos services</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Créations sonores et contenu digital</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Des solutions créatives adaptées à vos besoins, de la chanson personnalisée 
              au contenu multimédia pour votre marque.
            </p>
          </div>
        </section>
        
        {/* Main Service - Music Creation */}
        <section className="section bg-gradient-to-b from-gray-100 to-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-freelance-primary/20 rounded-3xl blur-md"></div>
                  <div className="relative bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 bg-freelance-primary rounded-full flex items-center justify-center mr-4">
                        <Music size={20} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-freelance-dark">Créations Musicales Personnalisées</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Notre service phare : des compositions uniques qui immortalisent vos moments les plus précieux en musique.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-freelance-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Chansons d'anniversaire personnalisées avec paroles sur mesure</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-freelance-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Compositions pour mariages, cérémonies et moments importants</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-freelance-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Berceuses personnalisées pour nouveau-nés</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-freelance-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Musiques thématiques pour entreprises et événements</span>
                      </li>
                    </ul>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center bg-freelance-primary hover:bg-freelance-secondary text-white font-medium py-2 px-6 rounded-md transition-colors"
                    >
                      Demander un devis
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-freelance-dark">Un souvenir musical inoubliable</h2>
                <p className="text-gray-600 mb-6">
                  Chez MINDCRAFTER, nous transformons vos histoires, émotions et souvenirs en créations musicales uniques. 
                  Chaque note est composée pour capturer l'essence de votre histoire et créer une expérience sonore personnelle.
                </p>
                <p className="text-gray-600 mb-6">
                  Que ce soit pour célébrer un anniversaire, accompagner un mariage, accueillir un nouveau-né ou pour tout autre 
                  moment important de votre vie, notre musique apporte une dimension émotionnelle unique que vous et vos 
                  proches pourrez chérir pour toujours.
                </p>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-12 w-12 bg-freelance-light rounded-full flex items-center justify-center">
                    <Headphones size={24} className="text-freelance-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Plus de 200 créations musicales</h4>
                    <p className="text-gray-500">Réalisées pour des clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="section bg-gray-100">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-freelance-primary font-medium">Nos formules</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Des offres adaptées à vos besoins</h2>
              <p className="text-lg text-gray-600">
                Choisissez la formule qui correspond le mieux à votre projet et à votre budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {priceOptions.map((option) => (
                <PriceCard key={option.title} {...option} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Besoin d'une formule sur mesure ou d'un projet plus complexe ?
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-freelance-primary hover:text-freelance-secondary font-medium"
              >
                Contactez-nous pour une offre personnalisée
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-freelance-primary font-medium">Questions fréquentes</span>
              <h2 className="text-3xl font-bold mb-6">Tout ce que vous devez savoir</h2>
              <p className="text-lg text-gray-600">
                Retrouvez les réponses aux questions les plus courantes sur nos services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Vous avez d'autres questions ?
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-freelance-primary hover:bg-freelance-secondary text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Nous contacter
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-freelance-primary font-medium">Notre processus</span>
              <h2 className="text-3xl font-bold mb-6">Comment nous travaillons</h2>
              <p className="text-lg text-gray-600">
                Une approche simple et transparente pour transformer votre vision en réalité
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Découverte",
                  description: "Nous discutons de votre projet, vos besoins et vos attentes pour bien comprendre votre vision."
                },
                {
                  step: 2,
                  title: "Création",
                  description: "Nous composons votre musique ou créons votre contenu selon vos spécifications."
                },
                {
                  step: 3,
                  title: "Livraison",
                  description: "Nous vous livrons le projet final après validation et ajustements si nécessaire."
                }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-freelance-primary text-white font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
