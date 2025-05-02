
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard, { ProjectProps } from "@/components/portfolio/ProjectCard";

const Portfolio = () => {
  const allProjects: ProjectProps[] = [
    {
      id: 1,
      title: "Site E-commerce Mode",
      category: "Développement Web",
      description: "Création d'une boutique en ligne complète avec système de paiement sécurisé et gestion des stocks.",
      image: "https://images.unsplash.com/photo-1698988499190-3ca52f1dc172?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 2,
      title: "Application Mobile Fitness",
      category: "UX/UI Design",
      description: "Design d'interface utilisateur pour une application de suivi d'entraînement et de nutrition.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 3,
      title: "Refonte Site Institutionnel",
      category: "Développement Web",
      description: "Refonte complète du site web d'une entreprise dans le secteur financier avec focus sur l'UX.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 4,
      title: "Campagne SEO Restaurant",
      category: "Marketing Digital",
      description: "Stratégie de référencement naturel pour un restaurant gastronomique avec augmentation du trafic de 150%.",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Plateforme Éducative",
      category: "Développement Web",
      description: "Développement d'une plateforme de cours en ligne avec système de gestion de contenu personnalisé.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 6,
      title: "Application de Réservation",
      category: "UX/UI Design",
      description: "Design d'une application de réservation pour une chaîne d'hôtels avec parcours utilisateur optimisé.",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const categories = ["Tous", "Développement Web", "UX/UI Design", "Marketing Digital"];
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

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-freelance-dark text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mon Portfolio</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Découvrez une sélection de mes projets récents. Chaque projet est unique et 
              répond aux besoins spécifiques de mes clients.
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
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === category
                        ? "bg-freelance-primary text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
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
