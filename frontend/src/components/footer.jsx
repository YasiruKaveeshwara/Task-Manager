import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container px-6 mx-auto lg:px-20">
        {/* Top Section */}
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo and Name */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-2xl font-bold">Yasiru Kaveeshwara</h1>
            <p className="text-sm text-gray-200">Full Stack Developer | Innovator</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {/* Email */}
            <a
              href="mailto:kaveeshwaray@gmail.com"
              className="transition transform hover:scale-110"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm16.384 2H5.616L12 11.804 18.384 6zM20 6.672L12.606 13.4a.75.75 0 01-.955 0L4 6.672V18h16V6.672z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/YasiruKaveeshwara"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 00-3.162 19.476c.5.092.682-.216.682-.482v-1.719c-2.778.605-3.366-1.189-3.366-1.189-.455-1.155-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.004.069 1.533 1.06 1.533 1.06.891 1.557 2.339 1.106 2.911.846.092-.646.35-1.105.637-1.358-2.219-.251-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.684-.103-.253-.447-1.27.098-2.648 0 0 .84-.269 2.75 1.025a9.597 9.597 0 015.002 0c1.91-1.294 2.749-1.025 2.749-1.025.546 1.378.202 2.395.1 2.648.64.7 1.03 1.593 1.03 2.684 0 3.841-2.339 4.691-4.567 4.936.36.308.679.917.679 1.846v2.735c0 .269.18.579.689.48A10 10 0 0012 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kaveeshwaray/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.25 18.25h-2.5v-7.5h2.5v7.5zm-1.25-8.64c-.802 0-1.459-.658-1.459-1.47s.657-1.47 1.459-1.47c.802 0 1.459.658 1.459 1.47s-.657 1.47-1.459 1.47zm11.5 8.64h-2.5v-4c0-1.054-.41-1.75-1.25-1.75-.697 0-1.115.463-1.3.91-.067.163-.092.39-.092.617v4.223h-2.5v-7.5h2.5v1.026c.374-.577.934-.876 1.55-.876 1.207 0 2.092.8 2.092 2.527v4.823z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 mt-8 text-sm text-center text-gray-200 border-t border-blue-500">
          <p>&copy; {new Date().getFullYear()} Yasiru Kaveeshwara. All rights reserved.</p>
          <p>
            <a
              href="mailto:kaveeshwaray@gmail.com"
              className="hover:text-blue-300"
            >
              kaveeshwaray@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
