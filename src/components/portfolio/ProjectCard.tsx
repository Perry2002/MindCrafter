
import { Link } from "react-router-dom";
import { ArrowRight, Music, Video, Image } from "lucide-react";

export type ProjectProps = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  // Get icon based on category
  const getCategoryIcon = () => {
    switch (project.category) {
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl border border-gray-100">
      <div className="h-64 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {project.category === "Création Musicale" && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent flex items-center px-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((bar, idx) => (
                <div 
                  key={idx} 
                  className="w-1 bg-white rounded-t"
                  style={{
                    height: `${8 + Math.sin(idx * 1.5) * 6}px`,
                    animation: `wave ${1 + idx * 0.1}s ease-in-out infinite alternate`
                  }}
                ></div>
              ))}
            </div>
            <span className="text-white text-sm ml-2">Musique disponible</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-white bg-freelance-primary px-3 py-1 rounded-full flex items-center">
            {getCategoryIcon()}
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mt-2 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.link ? (
          <Link
            to={project.link}
            className="inline-flex items-center text-freelance-primary hover:text-freelance-secondary font-medium"
          >
            Voir le projet <ArrowRight size={16} className="ml-1" />
          </Link>
        ) : (
          <span className="inline-flex items-center text-gray-500 font-medium">
            Projet privé
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
