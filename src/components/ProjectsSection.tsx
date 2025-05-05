import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  multipleRepos?: {
    frontend?: string;
    backend?: string;
  };
  liveUrl?: string;
  type: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Freelancing Platform",
    description: "A comprehensive platform for freelancers and clients to connect, collaborate, and manage projects effectively.",
    technologies: ["React.js", "Redux", "Bootstrap", "Django REST", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    multipleRepos: {
      frontend: "https://github.com/PenPro-Team/Freelancia-Front-End",
      backend: "https://github.com/PenPro-Team/Freelancia-Back-End"
    },
    type: "ITI",
  },
  {
    id: 2,
    title: "Crowd Funding",
    description: "A platform enabling users to create and fund projects, with comprehensive campaign management features.",
    technologies: ["Django", "Python", "PostgreSQL", "jinja Templates", "HTML", "CSS", "Bootstrap"],
    imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    githubUrl: "https://github.com/hosam7080/django-help-me",
    type: "ITI",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "A feature-rich online shopping platform with product catalog, cart management, and secure checkout.",
    technologies: ["React.js", "Redux", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    githubUrl: "https://github.com/mustafajuba98/e-commerce",
    type: "Personal",
  },
  {
    id: 4,
    title: "shoghl-fnadek",
    description: "A platform connecting service providers with customers for various home and professional services.",
    technologies: ["React.js", "Redux", "Tailwind CSS", "Python", "Django", "REST Framework"],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    multipleRepos: {
      frontend: "https://github.com/PenPro-Team/Shoghl-Fnadek",
      backend: "https://github.com/PenPro-Team/Shoghl-Fnadek-Back"
    },
    type: "Collaborative",
  },
  {
    id: 5,
    title: "Movie App",
    description: "An interactive application for browsing movies, reading reviews, and discovering new films.",
    technologies: ["React", "Material UI"],
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    githubUrl: "https://github.com/mustafajuba98/MoviesApp",
    type: "Personal",
  },
  {
    id: 6,
    title: "Database Management System",
    description: "A command-line tool for managing databases with features for data manipulation and querying.",
    technologies: ["Bash"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    githubUrl: "https://github.com/mustafajuba98/DBMS_BashScripting",
    type: "Personal",
  }
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.type.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">My Projects</h2>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-portfolio-accent hover:bg-portfolio-accent/90" : ""}
            >
              All
            </Button>
            <Button
              variant={filter === "ITI" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("ITI")}
              className={filter === "ITI" ? "bg-portfolio-accent hover:bg-portfolio-accent/90" : ""}
            >
              ITI
            </Button>
            <Button
              variant={filter === "personal" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("personal")}
              className={filter === "personal" ? "bg-portfolio-accent hover:bg-portfolio-accent/90" : ""}
            >
              Personal
            </Button>
            <Button
              variant={filter === "collaborative" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("collaborative")}
              className={filter === "collaborative" ? "bg-portfolio-accent hover:bg-portfolio-accent/90" : ""}
            >
              Collaborative
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 delay-${index % 3 * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-all h-full project-card group">
                <div className="relative h-48 overflow-hidden">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-portfolio-primary/20 flex items-center justify-center">
                      <span className="text-portfolio-primary text-lg font-semibold">
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-white/80 text-portfolio-primary text-xs font-medium">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity project-overlay flex items-center justify-center space-x-4">
                    {project.multipleRepos ? (
                      <>
                        {project.multipleRepos.frontend && (
                          <Button size="sm" variant="outline" className="bg-white">
                            <a href={project.multipleRepos.frontend} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <Github className="h-4 w-4 mr-1" /> Frontend
                            </a>
                          </Button>
                        )}
                        {project.multipleRepos.backend && (
                          <Button size="sm" variant="outline" className="bg-white">
                            <a href={project.multipleRepos.backend} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <Github className="h-4 w-4 mr-1" /> Backend
                            </a>
                          </Button>
                        )}
                      </>
                    ) : (
                      project.githubUrl && (
                        <Button size="sm" variant="outline" className="bg-white">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Github className="h-4 w-4 mr-1" /> Code
                          </a>
                        </Button>
                      )
                    )}
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className="bg-white">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Globe className="h-4 w-4 mr-1" /> Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={`${project.id}-${i}`}
                        variant="outline" 
                        className="bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20 font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
