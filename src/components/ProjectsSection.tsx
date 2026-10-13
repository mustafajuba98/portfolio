import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, Images, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
  type?: string;
  isApiOnly?: boolean;
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
    description: "A responsive multi-role platform (Student, Teacher, Parent, Admin) with advanced role-based access and JWT/OTP authentication. Features interactive teacher analytics, student learning hubs, course management, and real-time scheduling.",
    technologies: ["React.js", "Vite", "TailwindCSS", "Django REST Framework", "JWT", "H5P", "HTML5"],
    images: [
      "/projects/mentora-teacher-dashboard.png",
      "/projects/mentora-student-dashboard.png",
      "/projects/mentora-courses.png",
      "/projects/mentora-student-courses.png",
      "/projects/mentora-admin-dashboard.png",
      "/projects/mentora-signin.png",
    ],
    multipleRepos: {
      frontend: "https://github.com/mustafajuba98/tutoring-platform-ui",
      backend: "https://github.com/mustafajuba98/Mentora-Backend",
    },
    type: "Professional",
  },
  {
    id: 2,
    title: "Dynamic Clinic Management System",
    description: "A full-featured clinic operations and telemedicine platform for Dr. Ahmed El Kholy Clinic. Includes live appointment queues, comprehensive patient directories, revenue & visit analytics, multi-branch management, and patient booking portals.",
    technologies: ["Next.js", "React", "Django REST Framework", "Simple JWT", "Tailwind CSS", "shadcn/ui"],
    images: [
      "/projects/clinic-home.png",
      "/projects/clinic-dashboard.png",
      "/projects/clinic-appointments.png",
      "/projects/clinic-patients.png",
      "/projects/clinic-statistics.png",
      "/projects/clinic-branches.png",
    ],
    multipleRepos: {
      frontend: "https://github.com/mustafajuba98/Clinic_MS_Front-End",
      backend: "https://github.com/mustafajuba98/Clinic_MS_Back-End",
    },
    type: "Professional",
  },
  {
    id: 3,
    title: "AresModz - Gaming Mods E-commerce",
    description: "A specialized storefront for premium gaming modifications and software solutions, featuring glowing dark gaming UI, catalog browsing, shopping cart and checkout management, verified customer feedback, and support.",
    technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    images: [
      "/projects/aresmodz-home.png",
      "/projects/aresmodz-store.png",
      "/projects/aresmodz-cart.png",
      "/projects/aresmodz-reviews.png",
      "/projects/aresmodz-contact.png",
    ],
    githubUrl: "https://github.com/mustafajuba98/Byte",
    type: "Professional",
  },
  {
    id: 8,
    title: "Mawdah W Rahmah",
    description: "An Arabic Islamic matrimonial platform built with Django adhering to Sharia guidelines. Features comprehensive applicant profiles (Quran memorization milestones, education, partner criteria), advanced multi-criteria matching filters, supervised direct communication channels, and introduction request approvals.",
    technologies: ["Django", "Python", "Bootstrap", "SQLite", "Channels"],
    images: [
      "/projects/mawdah-home.png",
      "/projects/mawdah-browse.png",
      "/projects/mawdah-detail.png",
      "/projects/mawdah-chat.png",
      "/projects/mawdah-inbox.png",
      "/projects/mawdah-form.png",
    ],
    githubUrl: "https://github.com/mustafajuba98/Mawdah-W-Rahmah",
    type: "Personal",
  },
  {
    id: 9,
    title: "Dawah Platform",
    description: "A comprehensive Islamic educational portal featuring categorized video lectures (Aqeedah, Fiqh, Quran, Seerah, Hadith), weekly mosque lesson schedules across Egyptian mosques, an Islamic article feed with discussions, Cairo prayer times, and a personal daily spiritual task planner.",
    technologies: ["Django", "Python", "Bootstrap", "SQLite", "YouTube API"],
    images: [
      "/projects/dawah-home.png",
      "/projects/dawah-videos.png",
      "/projects/dawah-lessons.png",
      "/projects/dawah-posts.png",
      "/projects/dawah-todos.png",
    ],
    githubUrl: "https://github.com/mustafajuba98/dawah-platform",
    type: "Personal",
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
    id: 4,
    title: "Freelancia",
    description: "A full-featured freelance marketplace platform with client job posting forms, searchable job feeds with dynamic skill filters (Django, React, Docker, PostgreSQL), comprehensive project details with client reputation ratings, and proposal workflows.",
    technologies: ["React.js", "Redux", "Bootstrap", "Django REST", "PostgreSQL"],
    images: [
      "/projects/freelancia-landing.png",
      "/projects/freelancia-jobs.png",
      "/projects/freelancia-job-detail.png",
      "/projects/freelancia-postjob.png",
    ],
    multipleRepos: {
      frontend: "https://github.com/PenPro-Team/Freelancia-Front-End",
      backend: "https://github.com/PenPro-Team/Freelancia-Back-End",
    },
    liveUrl: "https://penpro-team.github.io/Freelancia-Front-End/",
    type: "ITI",
  },
  {
    id: 10,
    title: "Online Bookstore API",
    description: "A REST API for browsing books and posting reviews, with JWT authentication and OpenAPI docs. Local data includes books, users, and reviews.",
    technologies: ["Django", "DRF", "JWT", "SQLite"],
    images: ["/projects/bookstore-cover.png"],
    githubUrl: "https://github.com/mustafajuba98/online-bookstore-api",
    type: "Personal",
    isApiOnly: true,
  },
  {
    id: 11,
    title: "Employee Leave API",
    description: "A Django REST API for employees and leave requests, documented with Swagger and protected by JWT.",
    technologies: ["Django", "DRF", "JWT", "SQLite"],
    images: ["/projects/leave-cover.png"],
    githubUrl: "https://github.com/mustafajuba98/Employee-Leave-Management-Backend-Django-",
    type: "Personal",
    isApiOnly: true,
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
    isApiOnly: true,
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const openProjectDetails = (project: Project) => {
    if (project.isApiOnly) return;
    setSelectedProject(project);
    setActiveImageIdx(0);
  };

  useEffect(() => {
    if (!selectedProject || !selectedProject.images?.length) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveImageIdx((prev) =>
          prev === 0 ? selectedProject.images!.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) =>
          (prev + 1) % selectedProject.images!.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

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

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => {
            const hasMultipleShots = (project.images?.length ?? 0) > 1;
            const canOpen = !project.isApiOnly;

            return (
              <div
                key={project.id}
                className={`transition-all duration-700 delay-${(index % 3) * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-all h-full project-card group flex flex-col justify-between">
                  <div>
                    <div
                      onClick={() => canOpen && openProjectDetails(project)}
                      className={`relative h-48 overflow-hidden ${canOpen ? "cursor-pointer" : "cursor-default"}`}
                    >
                      <ProjectSlides
                        images={project.images ?? []}
                        title={project.title}
                        offset={(project.id % 4) * 400}
                      />
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        {hasMultipleShots && !project.isApiOnly && (
                          <Badge variant="secondary" className="bg-black/60 text-white backdrop-blur-sm text-xs font-normal flex items-center gap-1">
                            <Images className="h-3 w-3" /> {project.images?.length}
                          </Badge>
                        )}
                        <Badge variant="outline" className="bg-white/80 text-portfolio-primary text-xs font-medium">
                          {project.technologies[0]}
                        </Badge>
                      </div>

                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 transition-opacity project-overlay flex flex-wrap items-center justify-center gap-2 p-3 sm:p-4">
                        {canOpen && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/95 hover:bg-white text-portfolio-dark shadow-sm text-xs sm:text-sm px-2.5 sm:px-3 h-8 sm:h-9"
                            onClick={(e) => {
                              e.stopPropagation();
                              openProjectDetails(project);
                            }}
                          >
                            <Images className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 text-portfolio-accent" /> Gallery
                          </Button>
                        )}

                        {project.multipleRepos ? (
                          <>
                            {project.multipleRepos.frontend && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-white/95 hover:bg-white text-xs sm:text-sm px-2.5 sm:px-3 h-8 sm:h-9"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <a href={project.multipleRepos.frontend} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                  <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" /> Frontend
                                </a>
                              </Button>
                            )}
                            {project.multipleRepos.backend && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-white/95 hover:bg-white text-xs sm:text-sm px-2.5 sm:px-3 h-8 sm:h-9"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <a href={project.multipleRepos.backend} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                  <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" /> Backend
                                </a>
                              </Button>
                            )}
                          </>
                        ) : (
                          project.githubUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/95 hover:bg-white text-xs sm:text-sm px-2.5 sm:px-3 h-8 sm:h-9"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" /> Code
                              </a>
                            </Button>
                          )
                        )}

                        {project.liveUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/95 hover:bg-white text-xs sm:text-sm px-2.5 sm:px-3 h-8 sm:h-9"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" /> Live
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h3
                        onClick={() => canOpen && openProjectDetails(project)}
                        className={`text-xl font-semibold mb-2 text-portfolio-dark ${canOpen ? "cursor-pointer hover:text-portfolio-accent transition-colors" : ""}`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    </CardContent>
                  </div>

                  <div className="px-5 pb-5">
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
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Project Details Modal / Gallery */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl w-[95vw] sm:w-[90vw] md:w-full max-h-[92vh] p-0 overflow-hidden bg-white rounded-2xl shadow-2xl flex flex-col">
            {selectedProject && (
              <div className="flex flex-col h-full max-h-[92vh]">
                <DialogHeader className="p-4 sm:p-5 pb-3 border-b shrink-0">
                  <div className="flex items-center justify-between pr-8">
                    <div>
                      <DialogTitle className="text-xl sm:text-2xl font-bold text-portfolio-dark">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription className="text-xs sm:text-sm text-gray-500 mt-1">
                        {selectedProject.technologies.join(" • ")}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
                  {/* Big Image Viewer */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="space-y-3">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-md flex items-center justify-center select-none">
                        <img
                          src={selectedProject.images[activeImageIdx]}
                          alt={`${selectedProject.title} preview`}
                          className="w-full h-full object-contain"
                        />
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              type="button"
                              aria-label="Previous image"
                              onClick={() =>
                                setActiveImageIdx((prev) =>
                                  prev === 0 ? selectedProject.images!.length - 1 : prev - 1
                                )
                              }
                              className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/90 active:scale-90 text-white p-2 sm:p-2.5 transition-all shadow-lg backdrop-blur-md border border-white/20 z-10"
                            >
                              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                            </button>
                            <button
                              type="button"
                              aria-label="Next image"
                              onClick={() =>
                                setActiveImageIdx((prev) =>
                                  (prev + 1) % selectedProject.images!.length
                                )
                              }
                              className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/90 active:scale-90 text-white p-2 sm:p-2.5 transition-all shadow-lg backdrop-blur-md border border-white/20 z-10"
                            >
                              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </button>
                            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-black/75 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full shadow border border-white/10">
                              {activeImageIdx + 1} / {selectedProject.images.length}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Responsive Navigation Bar & Counter */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex items-center justify-between px-1 py-0.5 text-xs text-gray-500">
                          <button
                            type="button"
                            onClick={() =>
                              setActiveImageIdx((prev) =>
                                prev === 0 ? selectedProject.images!.length - 1 : prev - 1
                              )
                            }
                            className="flex items-center gap-1 font-medium text-portfolio-primary hover:text-portfolio-accent transition-colors px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            <ChevronLeft className="h-3.5 w-3.5" /> Previous
                          </button>
                          <span className="font-medium text-gray-600">
                            Photo {activeImageIdx + 1} of {selectedProject.images.length}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveImageIdx((prev) =>
                                (prev + 1) % selectedProject.images!.length
                              )
                            }
                            className="flex items-center gap-1 font-medium text-portfolio-primary hover:text-portfolio-accent transition-colors px-2 py-1 rounded-md hover:bg-gray-100"
                          >
                            Next <ChevronRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}

                      {/* Thumbnails row */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex gap-2 sm:gap-2.5 overflow-x-auto py-1 px-0.5">
                          {selectedProject.images.map((img, idx) => (
                            <button
                              key={img}
                              type="button"
                              onClick={() => setActiveImageIdx(idx)}
                              className={`relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                                idx === activeImageIdx
                                  ? "border-portfolio-accent scale-105 shadow-sm ring-2 ring-portfolio-accent/30"
                                  : "border-transparent opacity-60 hover:opacity-100"
                              }`}
                            >
                              <img src={img} alt="thumb" className="h-full w-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description & Links */}
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-portfolio-dark mb-1">About the Project</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t">
                    {selectedProject.multipleRepos ? (
                      <>
                        {selectedProject.multipleRepos.frontend && (
                          <Button size="sm" variant="outline" asChild className="text-xs sm:text-sm">
                            <a href={selectedProject.multipleRepos.frontend} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3.5 w-3.5 mr-1.5" /> Frontend Repo
                            </a>
                          </Button>
                        )}
                        {selectedProject.multipleRepos.backend && (
                          <Button size="sm" variant="outline" asChild className="text-xs sm:text-sm">
                            <a href={selectedProject.multipleRepos.backend} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3.5 w-3.5 mr-1.5" /> Backend Repo
                            </a>
                          </Button>
                        )}
                      </>
                    ) : (
                      selectedProject.githubUrl && (
                        <Button size="sm" variant="outline" asChild className="text-xs sm:text-sm">
                          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3.5 w-3.5 mr-1.5" /> GitHub Code
                          </a>
                        </Button>
                      )
                    )}

                    {selectedProject.liveUrl && (
                      <Button size="sm" className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-xs sm:text-sm" asChild>
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Open Live App
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
