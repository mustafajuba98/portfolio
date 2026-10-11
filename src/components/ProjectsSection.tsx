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
  images?: string[];
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
    id: 19,
    title: "SeekerLeap",
    description: "A live job intelligence platform featuring automated role matching, saved searches, notifications, and freelance projects. Led end-to-end development across Next.js and FastAPI architecture, automated CI/CD pipelines, and full DevOps deployment on AWS.",
    technologies: ["Next.js", "FastAPI", "AWS", "Docker", "CI/CD"],
    images: [
      "/projects/seeker-dashboard.png",
      "/projects/seeker-new-jobs.png",
      "/projects/seeker-job-detail.png",
      "/projects/seeker-freelance.png",
    ],
    liveUrl: "https://seekerleap.com",
    type: "Professional",
  },
  {
    id: 1,
    title: "Mentora - E-Learning Platform",
    description: "A responsive multi-role platform (Student, Teacher, Parent, Admin) with advanced role-based access and JWT/OTP authentication. Features course management, scheduling system, and interactive content integration.",
    technologies: ["React.js", "Vite", "TailwindCSS", "Django REST Framework", "JWT", "H5P", "HTML5"],
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"],
    type: "Professional",
  },
  {
    id: 2,
    title: "Dynamic Clinic Management System",
    description: "A full-stack clinic management application for Dr. Ahmed El Kholy Clinic with appointment scheduling, patient record management, prescription generation, and dynamic dashboard for clinic insights.",
    technologies: ["Next.js", "React", "Django REST Framework", "Simple JWT", "Tailwind CSS", "shadcn/ui"],
    images: ["https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"],
    type: "Professional",
  },
  {
    id: 3,
    title: "AresModz - Gaming Mods E-commerce",
    description: "Frontend for an e-commerce platform specializing in premium gaming modifications, featuring product browsing, detailed views, user accounts, and shopping cart functionality.",
    technologies: ["React", "Vite", "Next.js", "Tailwind CSS", "shadcn/ui"],
    images: ["https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"],
    type: "Professional",
  },
  {
    id: 4,
    title: "Freelancia",
    description: "A freelance marketplace where clients post jobs and filter them by skill, status, and price.",
    technologies: ["React.js", "Redux", "Bootstrap", "Django REST", "PostgreSQL"],
    images: ["/projects/freelancia-jobs.png", "/projects/freelancia-landing.png"],
    multipleRepos: {
      frontend: "https://github.com/PenPro-Team/Freelancia-Front-End",
      backend: "https://github.com/PenPro-Team/Freelancia-Back-End",
    },
    liveUrl: "https://penpro-team.github.io/Freelancia-Front-End/",
    type: "ITI",
  },
  {
    id: 5,
    title: "Shoghl Fnadek",
    description: "An Arabic ceramic storefront with product search, filters, and a product page for hotel and home pieces.",
    technologies: ["React.js", "Tailwind CSS", "Axios"],
    images: ["/projects/shoghl-products.png", "/projects/shoghl-detail.png", "/projects/shoghl-home.png"],
    multipleRepos: {
      frontend: "https://github.com/PenPro-Team/Shoghl-Fnadek",
      backend: "https://github.com/PenPro-Team/Shoghl-Fnadek-Back",
    },
    type: "ITI",
  },
  {
    id: 6,
    title: "E-Commerce Website",
    description: "A shopping catalog with category and price filters, product details, wishlist, and a cart.",
    technologies: ["React.js", "Redux", "Bootstrap"],
    images: ["/projects/ecom-products.png", "/projects/ecom-detail.png", "/projects/ecom-cart.png", "/projects/ecom-landing.png"],
    githubUrl: "https://github.com/mustafajuba98/e-commerce",
    type: "Personal",
  },
  {
    id: 7,
    title: "Movie App",
    description: "A movie browser that loads posters from TMDB, with a details page and a favorites list.",
    technologies: ["React", "Material UI"],
    images: ["/projects/movies-grid.png", "/projects/movies-detail-card.png", "/projects/movies-trending.png"],
    githubUrl: "https://github.com/mustafajuba98/MoviesApp",
    type: "Personal",
  },
  {
    id: 8,
    title: "Mawdah W Rahmah",
    description: "An Arabic matrimonial platform with a guided landing page and account registration.",
    technologies: ["Django", "Bootstrap", "SQLite"],
    images: ["/projects/mawdah-home.png", "/projects/mawdah-signup.png"],
    githubUrl: "https://github.com/mustafajuba98/Mawdah-W-Rahmah",
    type: "Personal",
  },
  {
    id: 9,
    title: "Dawah Platform",
    description: "A learning site for Islamic lessons, with featured videos, articles, and mosque class times.",
    technologies: ["Django", "Bootstrap", "SQLite"],
    images: ["/projects/dawah-videos.png", "/projects/dawah-posts.png", "/projects/dawah-lessons.png"],
    githubUrl: "https://github.com/mustafajuba98/dawah-platform",
    type: "Personal",
  },
  {
    id: 10,
    title: "Online Bookstore API",
    description: "A REST API for browsing books and posting reviews, with JWT authentication and OpenAPI docs. Local data includes books, users, and reviews.",
    technologies: ["Django", "DRF", "JWT", "SQLite"],
    images: ["/projects/bookstore-cover.png"],
    githubUrl: "https://github.com/mustafajuba98/online-bookstore-api",
    type: "Personal",
  },
  {
    id: 11,
    title: "Employee Leave API",
    description: "A Django REST API for employees and leave requests, documented with Swagger and protected by JWT.",
    technologies: ["Django", "DRF", "JWT", "SQLite"],
    images: ["/projects/leave-cover.png"],
    githubUrl: "https://github.com/mustafajuba98/Employee-Leave-Management-Backend-Django-",
    type: "Personal",
  },
  {
    id: 12,
    title: "Examination System",
    description: "A timed exam in the browser, with question review and an admin screen for managing the question bank.",
    technologies: ["HTML", "Bootstrap", "JavaScript"],
    images: ["/projects/exam-question.png", "/projects/exam-admin.png"],
    githubUrl: "https://github.com/mustafajuba98/Examination-Teaching-Project-Test",
    type: "Personal",
  },
  {
    id: 13,
    title: "Upwork Clone",
    description: "A responsive Bootstrap layout of an Upwork-style home page, with a job feed and a profile sidebar.",
    technologies: ["HTML", "Bootstrap", "CSS"],
    images: ["/projects/upwork-home.png"],
    githubUrl: "https://github.com/mustafajuba98/Responsive-Bootstrap-Upwork-Clone",
    type: "Personal",
  },
  {
    id: 14,
    title: "Movie Search API",
    description: "A FastAPI service that searches movies through TMDB and OMDB and publishes the contract in OpenAPI docs.",
    technologies: ["FastAPI", "Pydantic", "httpx"],
    images: ["/projects/movie-search-cover.png"],
    githubUrl: "https://github.com/mustafajuba98/Movie-Search-API-Backend-Task",
    type: "Personal",
  },
  {
    id: 15,
    title: "LinkedIn Job Tracker",
    description: "A local dashboard for saved job searches, with filters for location, remote work, and sort order.",
    technologies: ["FastAPI", "SQLite", "Jinja"],
    images: ["/projects/linkedin-jobs.png"],
    githubUrl: "https://github.com/mustafajuba98/LinkedIn-Job-Tracker",
    type: "Personal",
  },
  {
    id: 16,
    title: "AI Chat Assistant",
    description: "A Flask chat screen with model selection, conversation history, and file upload. Live replies need OpenAI and Anthropic keys.",
    technologies: ["Flask", "Python", "HTML", "CSS"],
    images: ["/projects/chat-home.png"],
    githubUrl: "https://github.com/mustafajuba98/Chat-Ai-Models-Clone",
    type: "Personal",
  },
  {
    id: 17,
    title: "YouTube Downloader",
    description: "A desktop app for reading a YouTube link, previewing a video or playlist, and downloading it with yt-dlp.",
    technologies: ["Python", "CustomTkinter", "yt-dlp"],
    images: ["/projects/yt-downloader-video.png", "/projects/yt-downloader-playlist.png", "/projects/yt-downloader-empty.png"],
    githubUrl: "https://github.com/mustafajuba98/YouTubeDownloader",
    type: "Personal",
  },
  {
    id: 18,
    title: "Database Management System",
    description: "A Bash terminal for creating databases and tables, then inserting, updating, and querying rows from the command line.",
    technologies: ["Bash"],
    images: ["/projects/dbms-terminal-menu.png", "/projects/dbms-terminal-tables.png"],
    githubUrl: "https://github.com/mustafajuba98/DBMS_BashScripting",
    type: "Personal",
  },
];

function ProjectSlides({
  images,
  title,
  offset,
}: {
  images: string[];
  title: string;
  offset: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    let interval = 0;
    const start = window.setTimeout(() => {
      setIndex((current) => (current + 1) % images.length);
      interval = window.setInterval(() => {
        setIndex((current) => (current + 1) % images.length);
      }, 2000);
    }, 2000 + offset);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [images, offset]);

  if (images.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-portfolio-primary/20">
        <span className="px-4 text-center text-lg font-semibold text-portfolio-primary">{title}</span>
      </div>
    );
  }

  return (
    <>
      {images.map((src, imageIndex) => (
        <img
          key={src}
          src={src}
          alt={imageIndex === index ? title : ""}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:scale-105 ${
            imageIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}

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
            <Button
              variant={filter === "professional" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("professional")}
              className={filter === "professional" ? "bg-portfolio-accent hover:bg-portfolio-accent/90" : ""}
            >
              Professional
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
                  <ProjectSlides
                    images={project.images ?? []}
                    title={project.title}
                    offset={(project.id % 4) * 400}
                  />
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
