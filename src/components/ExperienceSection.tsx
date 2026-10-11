
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, School } from "lucide-react";

type ExperienceItem = {
  type: "education" | "work" | "internship";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Software Engineer (Backend)",
    organization: "Brite",
    location: "El Sheikh Zaid, Giza, Egypt (Hybrid)",
    period: "Dec 2025 – Present",
    description: [
      "Developing and maintaining a production HRMS platform serving 30K+ users across the employee lifecycle.",
      "Built REST APIs with Django REST Framework for Employees, Attendance, Leave, Payroll, Recruitment, Performance, Notifications, and Reporting.",
      "Designed role-based access control, authentication, and permissions for a multi-role environment.",
      "Moved 10 unmanaged schedulers to Celery Beat and systemd, cutting server RAM use by 72%.",
      "Cut notification processing from 60+ seconds for 1,000 records to 3–5 seconds for 10,000 records.",
      "Improved PostgreSQL performance with indexing, query refactoring, and ORM optimization, and deployed services on Azure.",
      "Used AI coding assistants to analyze the codebase, implement backend features, and troubleshoot issues."
    ],
  },
  {
    type: "work",
    title: "Full Stack Python Developer",
    organization: "Opream & Expotech",
    location: "Remote",
    period: "Jul 2024 – Dec 2025",
    description: [
      "Contributed to backend development with Django REST Framework, implementing secure role-based APIs.",
      "Developed interactive frontend modules using React.js and TailwindCSS with focus on responsive design.",
      "Built and maintained scalable backend services with Django and PostgreSQL.",
      "Integrated third-party APIs and optimized database queries for performance."
    ],
  },
  {
    type: "work",
    title: "Software Engineer (Full Stack)",
    organization: "Freelance",
    location: "Remote",
    period: "2023 – 2024",
    description: [
      "Developed full-stack web applications using Python, Django, Django REST Framework, React.js, Next.js, and PostgreSQL.",
      "Built AresModz, Dynamic Clinic Management System, and Sho8l Fnadeek, covering APIs, authentication, role-based access, and responsive interfaces.",
      "Designed and integrated RESTful APIs with the frontends, focusing on maintainability and performance."
    ],
  },
  {
    type: "internship",
    title: "Full Stack Python Development Track",
    organization: "Information Technology Institute (ITI)",
    location: "BeniSuef, Egypt",
    period: "Jan 2024 – Jun 2024",
    description: [
      "Built full-stack applications using Django and Flask with security best practices.",
      "Developed responsive frontend interfaces using React.js and Redux.",
      "Worked in agile teams using Git workflows and sprint planning.",
      "Designed and consumed RESTful APIs between frontend and backend systems."
    ],
  },
  {
    type: "education",
    title: "Bachelor's Degree in Islamic and Arabic Studies",
    organization: "Faculty of Islamic and Arabic Studies, Al-Azhar University",
    location: "Sharqia, Egypt",
    period: "Sep 2023",
    description: [
      "Completed studies with a focus on analytical thinking and research methodologies.",
      "Developed strong writing and communication skills."
    ],
  }
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById("experience");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Experience & Education</h2>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.title}-${index}`}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className={`p-6 text-white ${
                      exp.type === "education" ? "bg-portfolio-primary" : 
                      exp.type === "internship" ? "bg-portfolio-accent" : "bg-portfolio-secondary"
                    } md:w-1/4`}>
                      <div className="flex items-center mb-3">
                        {exp.type === "education" ? (
                          <School className="h-5 w-5 mr-2" />
                        ) : exp.type === "internship" ? (
                          <Briefcase className="h-5 w-5 mr-2" />
                        ) : (
                          <Briefcase className="h-5 w-5 mr-2" />
                        )}
                        <span className="font-medium capitalize">{exp.type}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 md:w-3/4">
                      <h3 className="text-xl font-semibold text-portfolio-dark">{exp.title}</h3>
                      <p className="text-portfolio-accent font-medium mb-1">{exp.organization}</p>
                      <p className="text-gray-600 text-sm mb-4">{exp.location}</p>
                      
                      <ul className="space-y-2 text-gray-700">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-portfolio-accent mr-2 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default ExperienceSection;
