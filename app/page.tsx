import Image from "next/image";
import ContactForm from "./components/ContactForm";
import ClientInteractions from "./components/ClientInteractions";

export default function Home() {
  return (
    <div>
      <ClientInteractions />
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-[10px] z-[1000] py-4 border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
            <div className="flex items-center gap-3 no-underline">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                    <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                    <path d="M8 12L16 28L24 12M24 12L20 20M24 12L28 20" stroke="white" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 28L20 12L28 28" stroke="white" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" opacity="0.8" />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#667eea" stopOpacity={1} />
                            <stop offset="100%" stopColor="#764ba2" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                </svg>
                <span className="text-xl font-bold text-[#667eea] m-0 tracking-tight">Anna Franz</span>
            </div>

            <div className="hidden lg:flex gap-8">
                <a href="#home" className="no-underline text-[#1a1a1a] font-medium transition-colors duration-300 hover:text-[#667eea]">Home</a>
                <a href="#about" className="no-underline text-[#1a1a1a] font-medium transition-colors duration-300 hover:text-[#667eea]">About</a>
                <a href="#projects" className="no-underline text-[#1a1a1a] font-medium transition-colors duration-300 hover:text-[#667eea]">Projects</a>
                <a href="#contact" className="no-underline text-[#1a1a1a] font-medium transition-colors duration-300 hover:text-[#667eea]">Contact</a>
            </div>

            <div className="flex items-center">
                <a href="mailto:ankarolina.empresarial@gmail.com" className="inline-flex items-center justify-center px-6 py-3 border-none rounded-lg text-sm font-medium no-underline cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(102,126,234,0.3)]">Get in Touch</a>
            </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center pt-32 pb-16 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] relative" id="home">
          <div className="max-w-[1200px] mx-auto px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="text-center lg:text-left">
                      <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-[#1a1a1a]">
                          Hi, I'm <span className="bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Anna Karolina Franz</span>
                      </h1>
                      <h2 className="text-2xl lg:text-3xl font-medium text-[#667eea] mb-6">
                          System Architect & Full Stack Developer
                      </h2>
                      <p className="text-lg lg:text-xl text-[#666] mb-8 leading-relaxed">
                          Crafting scalable solutions and designing intuitive web experiences
                          for modern digital ecosystems from Brazil.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                          <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border-none rounded-lg text-sm font-medium no-underline cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(102,126,234,0.3)]">View My Work</a>
                          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#667eea] rounded-lg text-sm font-medium no-underline cursor-pointer transition-all duration-300 bg-transparent text-[#667eea] hover:bg-[#667eea] hover:text-white hover:-translate-y-0.5">Let's Talk</a>
                      </div>
                  </div>

                  <div className="flex justify-center">
                      <Image src="/profile.jpg" alt="Anna Karolina Franz" width={400} height={400} className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-[20px] object-cover shadow-[0_20px_40px_rgba(0,0,0,0.1)]" />
                  </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#666] text-sm">
                  <span>Scroll Down</span>
                  <i className="ri-arrow-down-line animate-bounce"></i>
              </div>
          </div>
      </section>

      <section className="py-24 bg-white" id="about">
          <div className="max-w-[1200px] mx-auto px-8">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">About Me</h2>
                  <p className="text-lg text-[#666] font-normal">Get to know me better</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div>
                      <h3 className="text-3xl font-semibold text-[#1a1a1a] mb-6">Experienced Developer with a Passion for Innovation</h3>
                      <p className="text-lg leading-relaxed mb-6">
                          I'm a dedicated System Architect and Full Stack Developer with extensive
                          experience across multiple technologies and project types. My expertise
                          spans from frontend development with React and TypeScript to backend
                          solutions with Node.js and Python.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                          With over 40+ JavaScript projects and 20+ React applications under my belt,
                          I bring creativity and technical proficiency to every project, ensuring
                          responsive, high-performance web applications that enhance user experiences.
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12">
                          <div className="text-center p-6 bg-[#f8f9fa] rounded-xl transition-transform duration-300 hover:-translate-y-1">
                              <span className="block text-4xl font-bold text-[#667eea] mb-2">40+</span>
                              <span className="text-sm text-[#666] font-medium">JavaScript Projects</span>
                          </div>
                          <div className="text-center p-6 bg-[#f8f9fa] rounded-xl transition-transform duration-300 hover:-translate-y-1">
                              <span className="block text-4xl font-bold text-[#667eea] mb-2">20+</span>
                              <span className="text-sm text-[#666] font-medium">React Projects</span>
                          </div>
                          <div className="text-center p-6 bg-[#f8f9fa] rounded-xl transition-transform duration-300 hover:-translate-y-1 sm:col-span-1 col-span-2">
                              <span className="block text-4xl font-bold text-[#667eea] mb-2">5+</span>
                              <span className="text-sm text-[#666] font-medium">Years Experience</span>
                          </div>
                      </div>
                  </div>

                  <div>
                      <h4 className="text-2xl font-semibold text-[#1a1a1a] mb-8">Technologies I Work With</h4>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="group flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-lg transition-all duration-300 hover:bg-[#667eea] hover:text-white hover:translate-x-1">
                              <i className="ri-reactjs-line text-2xl text-[#667eea] group-hover:text-white transition-colors"></i>
                              <span className="font-medium">React</span>
                          </div>
                          <div className="group flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-lg transition-all duration-300 hover:bg-[#667eea] hover:text-white hover:translate-x-1">
                              <i className="ri-javascript-line text-2xl text-[#667eea] group-hover:text-white transition-colors"></i>
                              <span className="font-medium">JavaScript</span>
                          </div>
                          <div className="group flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-lg transition-all duration-300 hover:bg-[#667eea] hover:text-white hover:translate-x-1">
                              <i className="ri-code-s-slash-line text-2xl text-[#667eea] group-hover:text-white transition-colors"></i>
                              <span className="font-medium">TypeScript</span>
                          </div>
                          <div className="group flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-lg transition-all duration-300 hover:bg-[#667eea] hover:text-white hover:translate-x-1">
                              <i className="ri-nodejs-line text-2xl text-[#667eea] group-hover:text-white transition-colors"></i>
                              <span className="font-medium">Node.js</span>
                          </div>
                          <div className="group flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-lg transition-all duration-300 hover:bg-[#667eea] hover:text-white hover:translate-x-1">
                              <i className="ri-terminal-line text-2xl text-[#667eea] group-hover:text-white transition-colors"></i>
                              <span className="font-medium">Python</span>
                          </div>
                          <div className="group flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-lg transition-all duration-300 hover:bg-[#667eea] hover:text-white hover:translate-x-1">
                              <i className="ri-database-2-line text-2xl text-[#667eea] group-hover:text-white transition-colors"></i>
                              <span className="font-medium">PostgreSQL</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-24 bg-[#f8f9fa]">
          <div className="max-w-[1200px] mx-auto px-8">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Work Experience</h2>
                  <p className="text-lg text-[#666] font-normal">My professional journey</p>
              </div>

              <div className="max-w-[800px] mx-auto">
                  <div className="relative py-8 border-l-2 border-[#667eea] ml-8">
                      <div className="absolute -left-[0.5rem] top-10 w-4 h-4 bg-[#667eea] rounded-full"></div>
                      <div className="bg-white p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] ml-8">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                              <h4 className="text-xl font-semibold text-[#1a1a1a] m-0">Software Engineer</h4>
                              <span className="text-[#667eea] font-medium">Lighthouse</span>
                          </div>
                          <span className="block text-sm text-[#666] mb-4">Jan 2023 - Feb 2024</span>
                          <p>Led development of scalable web applications and system architecture solutions. Worked with
                              modern technologies to create robust and efficient solutions.</p>
                      </div>
                  </div>

                  <div className="relative py-8 border-l-2 border-[#667eea] ml-8">
                      <div className="absolute -left-[0.5rem] top-10 w-4 h-4 bg-[#667eea] rounded-full"></div>
                      <div className="bg-white p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] ml-8">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                              <h4 className="text-xl font-semibold text-[#1a1a1a] m-0">Full Stack Developer</h4>
                              <span className="text-[#667eea] font-medium">C&R Sistemas</span>
                          </div>
                          <span className="block text-sm text-[#666] mb-4">Jan 2022 - Mar 2023</span>
                          <p>Developed end-to-end solutions using React, Node.js and modern web technologies. Focused on
                              enterprise applications and management systems.</p>
                      </div>
                  </div>

                  <div className="relative py-8 border-l-2 border-[#667eea] ml-8">
                      <div className="absolute -left-[0.5rem] top-10 w-4 h-4 bg-[#667eea] rounded-full"></div>
                      <div className="bg-white p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] ml-8">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                              <h4 className="text-xl font-semibold text-[#1a1a1a] m-0">Software Engineer</h4>
                              <span className="text-[#667eea] font-medium">Infox</span>
                          </div>
                          <span className="block text-sm text-[#666] mb-4">May 2022 - May 2023</span>
                          <p>Contributed to development and maintenance of enterprise applications. Worked with legacy
                              systems and technology modernization.</p>
                      </div>
                  </div>

                  <div className="relative py-8 border-l-2 border-[#667eea] ml-8">
                      <div className="absolute -left-[0.5rem] top-10 w-4 h-4 bg-[#667eea] rounded-full"></div>
                      <div className="bg-white p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] ml-8">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                              <h4 className="text-xl font-semibold text-[#1a1a1a] m-0">Python Developer</h4>
                              <span className="text-[#667eea] font-medium">MaisTodos</span>
                          </div>
                          <span className="block text-sm text-[#666] mb-4">May 2022 - Nov 2022</span>
                          <p>Developed Python applications for automation and data processing. Created scripts and tools
                              for process optimization.</p>
                      </div>
                  </div>

                  <div className="relative py-8 border-l-2 border-[#667eea] ml-8">
                      <div className="absolute -left-[0.5rem] top-10 w-4 h-4 bg-[#667eea] rounded-full"></div>
                      <div className="bg-white p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] ml-8">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                              <h4 className="text-xl font-semibold text-[#1a1a1a] m-0">Frontend Developer</h4>
                              <span className="text-[#667eea] font-medium">CloudValid</span>
                          </div>
                          <span className="block text-sm text-[#666] mb-4">Jul 2021 - Sep 2022</span>
                          <p>Created responsive user interfaces and improved user experience across web applications.
                              Developed with React and modern frontend technologies.</p>
                      </div>
                  </div>

                  <div className="relative py-8 border-l-2 border-[#667eea] ml-8">
                      <div className="absolute -left-[0.5rem] top-10 w-4 h-4 bg-[#667eea] rounded-full"></div>
                      <div className="bg-white p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] ml-8">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                              <h4 className="text-xl font-semibold text-[#1a1a1a] m-0">Software Engineer</h4>
                              <span className="text-[#667eea] font-medium">Panteu</span>
                          </div>
                          <span className="block text-sm text-[#666] mb-4">Apr 2021 - Mar 2022</span>
                          <p>Software development and participation in technological innovation projects. Worked with
                              multidisciplinary teams on complex solutions.</p>
                      </div>
                  </div>

                  <div className="relative py-8 border-l-2 border-[#667eea] ml-8">
                      <div className="absolute -left-[0.5rem] top-10 w-4 h-4 bg-[#667eea] rounded-full"></div>
                      <div className="bg-white p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] ml-8">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                              <h4 className="text-xl font-semibold text-[#1a1a1a] m-0">Software Engineer</h4>
                              <span className="text-[#667eea] font-medium">WeDev</span>
                          </div>
                          <span className="block text-sm text-[#666] mb-4">Mar 2020 - Oct 2021</span>
                          <p>Full-stack development of web applications. Worked with various technologies and frameworks
                              to create complete and scalable solutions.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-24 bg-white" id="projects">
          <div className="max-w-[1200px] mx-auto px-8">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Featured Projects</h2>
                  <p className="text-lg text-[#666] font-normal">Some of my recent work</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                      <div className="h-[200px] overflow-hidden relative">
                          <Image src="/chatbot.png" alt="Chatbot Project" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="p-8">
                          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Interactive Chatbot</h3>
                          <p className="text-[#666] mb-6 leading-relaxed">AI-powered chatbot built with GroqCloud, Python, and Docker for seamless user interactions.
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">Python</span>
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">Docker</span>
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">GroqCloud</span>
                          </div>
                          <div className="flex gap-4">
                              <a href="https://github.com/iannak/chatbot_interativo" className="inline-flex items-center justify-center px-4 py-2 border-2 border-[#667eea] rounded-lg text-xs font-medium no-underline cursor-pointer transition-all duration-300 bg-transparent text-[#667eea] hover:bg-[#667eea] hover:text-white hover:-translate-y-0.5" target="_blank" rel="noopener">View Code</a>
                          </div>
                      </div>
                  </div>

                  <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                      <div className="h-[200px] overflow-hidden relative">
                          <Image src="/shopping-card.png" alt="Shopping Cart Project" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="p-8">
                          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">E-commerce Shopping Cart</h3>
                          <p className="text-[#666] mb-6 leading-relaxed">Full-featured shopping cart application with React JS, featuring product management and
                              checkout flow.</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">React</span>
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">JavaScript</span>
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">CSS3</span>
                          </div>
                          <div className="flex gap-4">
                              <a href="https://github.com/iannak/shopping-cart" className="inline-flex items-center justify-center px-4 py-2 border-2 border-[#667eea] rounded-lg text-xs font-medium no-underline cursor-pointer transition-all duration-300 bg-transparent text-[#667eea] hover:bg-[#667eea] hover:text-white hover:-translate-y-0.5">View Code</a>
                          </div>
                      </div>
                  </div>

                  <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                      <div className="h-[200px] overflow-hidden relative">
                          <Image src="/list-tasks.png" alt="Task List Project" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="p-8">
                          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Task Management App</h3>
                          <p className="text-[#666] mb-6 leading-relaxed">
                              Modern task management application built with React, TypeScript, Material UI, and Firebase integration.
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">React</span>
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">TypeScript</span>
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">Firebase</span>
                          </div>
                          <div className="flex gap-4">
                              <a href="#" className="inline-flex items-center justify-center px-4 py-2 border-2 border-[#667eea] rounded-lg text-xs font-medium no-underline cursor-pointer transition-all duration-300 bg-transparent text-[#667eea] hover:bg-[#667eea] hover:text-white hover:-translate-y-0.5">View Code</a>
                          </div>
                      </div>
                  </div>

                  <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                      <div className="h-[200px] overflow-hidden relative">
                          <Image src="/nodejs.png" alt="CSV Export Project" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="p-8">
                          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">CSV Data Export Tool</h3>
                          <p className="text-[#666] mb-6 leading-relaxed">Node.js application for generating and exporting CSV data with Faker.js and PostgreSQL
                              integration.</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">Node.js</span>
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">PostgreSQL</span>
                              <span className="bg-[#f0f2f5] text-[#667eea] px-3 py-1 rounded-full text-xs font-medium">Faker.js</span>
                          </div>
                          <div className="flex gap-4">
                              <a href="https://github.com/iannak/export-csv-node" className="inline-flex items-center justify-center px-4 py-2 border-2 border-[#667eea] rounded-lg text-xs font-medium no-underline cursor-pointer transition-all duration-300 bg-transparent text-[#667eea] hover:bg-[#667eea] hover:text-white hover:-translate-y-0.5">View Code</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white" id="contact">
          <div className="max-w-[1200px] mx-auto px-8">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
                  <p className="text-lg text-white font-normal">Ready to start your next project?</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
                  <div>
                      <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
                      <p className="text-lg leading-relaxed mb-8 text-white/90">
                          I'm always interested in new opportunities and exciting projects.
                          Whether you have a question or just want to say hi, feel free to reach out!
                      </p>

                      <div className="flex flex-col gap-6 mb-8">
                          <div className="flex items-center gap-4">
                              <i className="ri-mail-line text-2xl text-white/80"></i>
                              <div>
                                  <h4 className="text-base font-semibold mb-1">Email</h4>
                                  <a href="mailto:franz.karols@gmail.com" className="text-white/90 no-underline">franz.karols@gmail.com</a>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <i className="ri-phone-line text-2xl text-white/80"></i>
                              <div>
                                  <h4 className="text-base font-semibold mb-1">Phone</h4>
                                  <a href="https://wa.me/5541992410704" className="text-white/90 no-underline">+55 (41) 992410704</a>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <i className="ri-map-pin-line text-2xl text-white/80"></i>
                              <div>
                                  <h4 className="text-base font-semibold mb-1">Location</h4>
                                  <span className="text-white/90">Brazil</span>
                              </div>
                          </div>
                      </div>

                      <div className="flex gap-4">
                          <a href="https://www.linkedin.com/in/anna-karolina-f-b72242218/" className="flex items-center justify-center w-[50px] h-[50px] bg-white/10 rounded-full text-white no-underline transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                              <i className="ri-linkedin-box-line text-2xl"></i>
                          </a>
                          <a href="https://github.com/iannak" className="flex items-center justify-center w-[50px] h-[50px] bg-white/10 rounded-full text-white no-underline transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                              <i className="ri-github-fill text-2xl"></i>
                          </a>
                      </div>
                  </div>

                  <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-[10px]">
                      <ContactForm />
                  </div>
              </div>
          </div>
      </section>

      <footer className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-12 pt-16">
          <div className="max-w-[1200px] mx-auto px-8">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
                  <div className="flex-1 max-w-[300px]">
                      <div className="flex items-center gap-3 mb-4">
                          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="40" height="40" rx="8" fill="url(#gradient-footer)" />
                              <path d="M8 12L16 28L24 12M24 12L20 20M24 12L28 20" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M12 28L20 12L28 28" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round" opacity="0.8" />
                              <defs>
                                  <linearGradient id="gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#667eea" stopOpacity={1} />
                                      <stop offset="100%" stopColor="#764ba2" stopOpacity={1} />
                                  </linearGradient>
                              </defs>
                          </svg>
                          <span className="text-xl font-bold text-white tracking-tight">Anna Franz</span>
                      </div>
                      <p className="text-white/80 text-sm">System Architect & Full Stack Developer</p>
                  </div>

                  <div className="flex flex-wrap gap-8 justify-center lg:justify-end">
                      <a href="#home" className="text-white/80 no-underline transition-colors duration-300 hover:text-white">Home</a>
                      <a href="#about" className="text-white/80 no-underline transition-colors duration-300 hover:text-white">About</a>
                      <a href="#projects" className="text-white/80 no-underline transition-colors duration-300 hover:text-white">Projects</a>
                      <a href="#contact" className="text-white/80 no-underline transition-colors duration-300 hover:text-white">Contact</a>
                  </div>
              </div>

              <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
                  <p className="text-white/80 text-sm m-0">&copy; 2024 Anna Karolina Franz. All rights reserved.</p>
                  <div className="font-sans text-sm">
                      Visitas: <span id="visitCount" className="font-semibold text-white">Carregando...</span>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
}
