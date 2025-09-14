import { ResumeHeader } from "./components/resume-header";
import { ResumeSection } from "./components/resume-section";
import { ExperienceItem } from "./components/experience-item";
import { ProjectItem } from "./components/project-item";
import { SkillsSection } from "./components/skills-section";
import { EducationItem } from "./components/education-item";
import { PDFExportButton } from "./components/pdf-export-button";

const experienceData = [
  {
    title: "Senior Data Visualization Analyst (Contract)",
    company: "Center for Employment Opportunities (CEO)",
    location: "New York, NY",
    duration: "Jun 2024 - Dec 2024",
    achievements: [
      "Directed design and development of interactive dashboards and visual reports, crafting narratives for executive-level decision-making",
      "Collaborated on PathwayPal, an AI-powered prototype chatbot, contributing to UX design, interface, and conversational flow",
      "Facilitated training in Salesforce and data visualization tools, enhancing team adoption of digital platforms",
      "Partnered with engineers to troubleshoot and optimize web-based dashboards in Salesforce Lightning",
    ],
  },
  {
    title: "Freelance Graphics Editor",
    company: "PixlBloom NYC",
    location: "New York, NY",
    duration: "Jan 2024 - Apr 2024",
    achievements: [
      "Designed and implemented an interactive story on Tesla's Cybertruck for Nikkei Business, blending narrative, visuals, and frontend interactivity",
      "Built the interactive framework using HTML, CSS, JavaScript, ai2html, and Scrollama, creating a smooth scroll-based experience",
      "Coordinated design and narrative flow with the editorial team to ensure a seamless, responsive user experience across desktop and mobile",
    ],
  },
  {
    title: "Data Insights Specialist I",
    company: "Center for Employment Opportunities (CEO)",
    location: "New York, NY",
    duration: "Jun 2021 - May 2024",
    achievements: [
      "Translated complex datasets into clear, engaging visualizations for executives and program teams",
      "Led quarterly KPI reporting, redesigning outputs with Tableau Stories and custom dashboards that increased board engagement by 30%",
      "Experimented with Python NLP (BERT Topic, pysentimento) to analyze feedback, testing digital tools for interactive reporting and storytelling",
      "Created the 'Why Campaign', a gamified data-literacy project using storytelling to build organization-wide engagement with data",
    ],
  },
  {
    title: "Program Quality Analyst",
    company: "Center for Employment Opportunities (CEO)",
    location: "New York, NY",
    duration: "Jun 2019 - Jun 2021",
    achievements: [
      "Built and launched performance dashboards in Salesforce and Tableau, scaling data access across 30+ sites",
      "Developed the Baseline Assessment Tool, a scoring system to evaluate site delivery — improving program consistency by 25%",
      "Designed Google Sheets–based dashboards as lightweight, interactive tools for monitoring performance trends",
    ],
  },
  {
    title: "Quality Assurance Manager",
    company: "Brooklyn Community Services",
    location: "Brooklyn, NY",
    duration: "Jul 2017 - Sep 2018",
    achievements: [
      "Introduced automated data systems to streamline compliance reporting, reducing errors by 35%",
      "Directed operational turnaround strategies using data dashboards, saving up to $40K per quarter",
    ],
  },
];

const projectsData = [
  {
    title: "The Cost of Sunlight Story",
    description:
      "An interactive data story exploring solar energy accessibility and costs, featuring scroll-driven animations and data visualizations to guide readers through complex energy policy insights.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python",
      "Scrollama",
      "D3.js",
      "Adobe Illustrator",
    ],
    liveUrl: "https://ligea-alexander.github.io/cost-of-sunlight-story/#BEGIN",
    githubUrl: "https://github.com/ligea-alexander/cost-of-sunlight-story",
  },
  {
    title: "Biking Safety Interactive Story",
    description:
      "An interactive web application analyzing urban biking safety data with interactive maps, filtering capabilities, and responsive design for exploring transportation safety metrics.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Leaflet",
      "Data Analysis",
      "Interactive Maps",
    ],
    liveUrl: "https://biking-safety-io.vercel.app",
    githubUrl: "https://github.com/ligea-alexander/biking-safety",
  },
];

const skillsData = [
  {
    category: "Frontend & Web Development",
    skills: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "D3.js",
      "Node.js",
      "REST APIs",
      "Git",
    ],
  },
  {
    category: "Design & Prototyping",
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Prototyping",
      "UX Design",
      "Visual Design",
      "Interactive Design",
    ],
  },
  {
    category: "Data Analysis & Visualization",
    skills: [
      "Python",
      "Pandas",
      "R",
      "ggplot",
      "Tableau Desktop",
      "Tableau Prep",
      "Looker",
      "QGIS",
      "Mapbox",
    ],
  },
  {
    category: "Machine Learning & Analytics",
    skills: [
      "Machine Learning",
      "Statistical Analysis",
      "A/B Testing",
      "AI",
      "LLM",
      "NLP",
      "STATA",
      "SQL",
    ],
  },
  {
    category: "Data Tools & Platforms",
    skills: [
      "Salesforce (SFDC)",
      "Airtable",
      "Excel",
      "Google Sheets",
      "Web Scraping",
      "BeautifulSoup",
      "Selenium",
      "ReGex",
    ],
  },
];

const educationData = [
  {
    degree: "Full Stack Development Program",
    institution: "Hamburg Coding School",
    location: "Hamburg, Germany",
    duration: "2025",
    relevant: [
      "JavaScript",
      "REST APIs",
      "Node.js",
      "Full Stack Development",
    ],
  },
  {
    degree: "Lede Program: Data Journalism",
    institution: "Columbia University",
    location: "New York, NY",
    duration: "2023",
    relevant: [
      "Data Journalism",
      "Interactive Storytelling",
      "Web Development",
      "Data Visualization",
    ],
  },
  {
    degree: "MPS Data Analytics and Visualization",
    institution: "Maryland Institute College of Art (MICA)",
    location: "Baltimore, MD",
    duration: "2023",
    relevant: [
      "Data Analytics",
      "Data Visualization",
      "Statistical Analysis",
      "Design Thinking",
    ],
  },
  {
    degree: "MSc. Nutrition (Medical Science)",
    institution: "University of the West Indies",
    location: "Jamaica",
    duration: "2017",
    relevant: [
      "Research Methods",
      "Statistical Analysis",
      "Data Collection",
      "Scientific Writing",
    ],
  },
  {
    degree: "BSc. Biochemistry and Biology (Double Majors)",
    institution: "University of the West Indies",
    location: "Trinidad & Tobago",
    duration: "2012",
    relevant: [
      "Analytical Thinking",
      "Research Methods",
      "Problem Solving",
      "Laboratory Data Analysis",
    ],
  },
];

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-background text-foreground">
      <PDFExportButton fileName="Ligea_Alexander_Resume" />
      
      <div id="resume-content" className="bg-white text-black print:p-0">
            <ResumeHeader />

        <ResumeSection title="Professional Summary">
          <p className="text-muted-foreground leading-relaxed">
            Early-career data storyteller and interactive
            developer with professional experience in visual
            analytics, web-based narratives, and data-driven
            design. Adept at tools like JavaScript, D3.js, Figma,
            Tableau, and Python, with projects ranging from
            scroll-based stories to AI chatbot prototypes. Excited
            to apply my skills and learn further as a Frontend
            Developer Intern with Kontinentalist.
          </p>
        </ResumeSection>

        <ResumeSection title="Experience">
          {experienceData.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </ResumeSection>

        <ResumeSection title="Projects">
          {projectsData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </ResumeSection>

        <ResumeSection title="Technical Skills">
          <SkillsSection skillCategories={skillsData} />
        </ResumeSection>

        <ResumeSection title="Education">
          {educationData.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </ResumeSection>
      </div>
    </div>
  );
}