
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard, { ProjectProps } from "@/components/portfolio/ProjectCard";
import { Music, Video, Image } from "lucide-react";

const Portfolio = () => {
  const allProjects: ProjectProps[] = [
    {
      id: 1,
      title: "Chanson d'Anniversaire Personnalisée",
      category: "Création Musicale",
      description: "Composition personnalisée pour célébrer les 40 ans de Jean, incluant des références à ses passions et souvenirs de famille.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 2,
      title: "Musique de Mariage sur Mesure",
      category: "Création Musicale",
      description: "Composition originale pour la cérémonie et la première danse d'un couple, basée sur leur histoire d'amour.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 3,
      title: "Identité Sonore pour Marque de Cosmétiques",
      category: "Brand Boost",
      description: "Création d'une identité sonore complète avec jingle, sons d'interface et ambiance pour points de vente.",
      image: "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 4,
      title: "Série de Reels pour Lancement Produit",
      category: "Formule START",
      description: "Création d'une série de 5 Reels avec musique adaptée pour le lancement d'une nouvelle collection de mode.",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Berceuse Personnalisée pour Nouveau-né",
      category: "Création Musicale",
      description: "Berceuse unique créée pour l'arrivée d'un bébé, incorporant les prénoms des parents et de l'enfant.",
      image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 6,
      title: "Campagne TikTok pour Restaurant",
      category: "Formule START",
      description: "Série de TikToks viraux avec musique et sons personnalisés pour un restaurant gastronomique.",
      image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const categories = ["Tous", "Création Musicale", "Formule START", "Brand Boost"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    // Filter by category
    if (selectedCategory !== "Tous" && project.category !== selectedCategory) {
      return false;
    }
    
    // Filter by search query
    if (
      searchQuery &&
      !project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !project.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    
    return true;
  });

  // Get icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Création Musicale":
        return <Music size={16} className="mr-1" />;
      case "Formule START":
        return <Video size={16} className="mr-1" />;
      case "Brand Boost":
        return <Image size={16} className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-freelance-dark to-black text-white">
          <div className="container text-center">
            <span className="text-freelance-primary font-medium">Nos créations</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Découvrez nos créations musicales et projets multimédia réalisés pour nos clients.
              Chaque projet est unique et conçu pour répondre aux besoins spécifiques.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section bg-gray-50">
          <div className="container">
            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md transition-colors flex items-center ${
                      selectedCategory === category
                        ? "bg-freelance-primary text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category === "Création Musicale" && <Music size={16} className="mr-1" />}
                    {category === "Formule START" && <Video size={16} className="mr-1" />}
                    {category === "Brand Boost" && <Image size={16} className="mr-1" />}
                    {category}
                  </button>
                ))}
              </div>

              <div className="w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-freelance-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  Aucun projet ne correspond à votre recherche.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
