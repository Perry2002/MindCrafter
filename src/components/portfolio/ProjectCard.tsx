
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export type ProjectProps = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-freelance-primary bg-freelance-light px-3 py-1 rounded-full">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold mt-3 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.link ? (
          <Link
            to={project.link}
            className="inline-flex items-center text-freelance-primary hover:text-freelance-secondary font-medium"
          >
            Voir le projet <ArrowRight size={16} className="ml-1" />
          </Link>
        ) : (
          <span className="inline-flex items-center text-freelance-primary font-medium">
            Projet privé
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
