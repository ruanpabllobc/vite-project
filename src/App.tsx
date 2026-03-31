import {
  Code,
  Palette,
  Wrench,
  Mail,
  GitFork,
  Link,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-6xl">
          <div>
            <h1 className="font-bold text-slate-900">Portfolio</h1>
            <p className="text-xs text-slate-600">SIFU</p>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <ul className="flex flex-col py-4">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="w-full text-left px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="w-full text-left px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full text-left px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h1 className="text-slate-900 mb-4 font-bold">
                Ruan Pabllo Barbosa Claudino
              </h1>
              <h2>UI/UX Designer & Front-end Developer</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Crafting beautiful, functional digital experiences with 4 years
                of expertise in software development and creative design.
              </p>
              <button
                onClick={() => scrollToSection("skills")}
                className="mt-8 inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
              >
                Explore My Skills
                <ChevronDown className="size-4" />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center mb-12 text-slate-900">About Me</h2>
            <article className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                UI/UX Designer & Front-end Developer with a Bachelor's degree in
                IT and currently pursuing Software Engineering, I combine the
                aesthetic eye of design with the technical rigor of development.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With 4 years of experience, I focus on creating high-fidelity
                interfaces and front-end maintenance of applications, delivering
                products that are both visually stunning and technically sound.
              </p>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center mb-16 text-slate-900">
              Skills & Expertise
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Design Skills */}
              <article className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Palette className="size-6 text-purple-600" />
                  </div>
                  <h2 className="text-slate-900">Design</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-purple-600 mb-2">
                      Specializations
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                        UI/UX Design
                      </span>
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                        Vector Design
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-3">
                      Tools
                    </p>
                    <ul className="space-y-3">
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">Figma</span>
                          <span className="text-xs text-slate-500">95%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">
                            Photoshop
                          </span>
                          <span className="text-xs text-slate-500">90%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">
                            Illustrator
                          </span>
                          <span className="text-xs text-slate-500">85%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">
                            CorelDRAW
                          </span>
                          <span className="text-xs text-slate-500">80%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">Canva</span>
                          <span className="text-xs text-slate-500">75%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Front-end Skills */}
              <article className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Code className="size-6 text-blue-600" />
                  </div>
                  <h2 className="text-slate-900">Front-end</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-3">
                      Technologies
                    </p>
                    <ul className="space-y-3">
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">React</span>
                          <span className="text-xs text-slate-500">75%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">
                            TypeScript
                          </span>
                          <span className="text-xs text-slate-500">70%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">
                            JavaScript (ES6+)
                          </span>
                          <span className="text-xs text-slate-500">75%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">
                            Next.js
                          </span>
                          <span className="text-xs text-slate-500">65%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">HTML5</span>
                          <span className="text-xs text-slate-500">80%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">CSS3</span>
                          <span className="text-xs text-slate-500">75%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Tools/DevOps Skills */}
              <article className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Wrench className="size-6 text-emerald-600" />
                  </div>
                  <h2 className="text-slate-900">Tools & DevOps</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-3">
                      Technologies
                    </p>
                    <ul className="space-y-3">
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">Git</span>
                          <span className="text-xs text-slate-500">80%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-emerald-500 h-2 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">
                            SonarQube
                          </span>
                          <span className="text-xs text-slate-500">65%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-emerald-500 h-2 rounded-full"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">Docker</span>
                          <span className="text-xs text-slate-500">35%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-emerald-500 h-2 rounded-full"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center mb-12 text-slate-900">Get In Touch</h2>

            <article className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-slate-700 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Mail className="size-5" />
                  Email Me
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <GitFork className="size-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <Link className="size-5" />
                  LinkedIn
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Portfolio. Built with React & Tailwind
            CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
