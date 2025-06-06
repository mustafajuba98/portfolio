
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    icon?: string;
    proficiency: number;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "JavaScript", proficiency: 85 },
      { name: "Bash", proficiency: 75 },
    ],
  },
  {
    name: "Frontend Technologies",
    skills: [
      { name: "React.js", proficiency: 80 },
      { name: "Redux", proficiency: 75 },
      { name: "Bootstrap", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 80 },
    ],
  },
  {
    name: "Backend Technologies",
    skills: [
      { name: "Django", proficiency: 85 },
      { name: "Flask", proficiency: 80 },
      { name: "Django REST", proficiency: 85 },
      { name: "Jinja2", proficiency: 75 },
    ],
  },
  {
    name: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", proficiency: 80 },
      { name: "Git", proficiency: 85 },
      { name: "Linux", proficiency: 75 },
    ],
  },
];

const SkillsSection = () => {
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

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 pb-2 border-b text-portfolio-dark">
                    {category.name}
                  </h3>

                  <div className="space-y-5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="skill-item">
                        <div className="flex justify-between mb-1.5">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-xs text-gray-500">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-portfolio-accent h-2 rounded-full"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
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

export default SkillsSection;
