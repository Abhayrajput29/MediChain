import React from "react";
import { Github, Linkedin } from "lucide-react";

const developers = [
  {
    name: "Adarsh Sachan",
    linkedIn: "https://www.linkedin.com/in/adarshsachan01/",
  },
  {
    name: "Abhinav Sahu",
    linkedIn: "https://www.linkedin.com/in/abhinav-sahu-865a01297/",
  },
  {
    name: "Abhinav",
    linkedIn: "https://www.linkedin.com/in/abhinav-kumar-10a942262/",
  },
  {
    name: "Abhijeet Rai",
    linkedIn: "https://www.linkedin.com/in/abhijeet-rai-0a740b27a/",
  },
];

export default function Footer() {
  return (
    <footer
      data-scroll-section
      className="bg-gray-900 text-gray-300 pt-12 pb-8 "
    >
      <div className="container mx-auto px-4 text-center">
        {/* Developers Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Developed By
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {developers.map((dev) => (
              <a
                key={dev.name}
                href={dev.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-slate-200 dark:bg-slate-800 text-gray-700 dark:text-slate-300  px-5 py-2 rounded-full shadow-md  hover:shadow-lg dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300
                "
              >
                <Linkedin className="w-4 h-4 mr-2 text-blue-600 group-hover:text-blue-500" />
                {dev.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-0 text-center">
          <a
            href="https://github.com/theadarsh1m/MediChain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3  bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700  dark:bg-greenish dark:text-slate-900 dark:hover:bg-[#00e0c4] transition-all transform hover:-translate-y-0.5"
          >
            <Github className="inline-block w-5 h-5 mr-2" />
            Contribute on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
