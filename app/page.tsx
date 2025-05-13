import { Lightbulb, Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import ContactForm from "@/components/contact-form"
import ServiceTabs from "@/components/service-tabs"

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5 text-2xl font-bold">
            <Lightbulb className="text-amber-500" />
            <span>JP Soluciones</span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a
                  href="#inicio"
                  className="text-white font-medium hover:text-amber-500 transition-colors border-b-2 border-transparent hover:border-amber-500 py-2"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-white font-medium hover:text-amber-500 transition-colors border-b-2 border-transparent hover:border-amber-500 py-2"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-white font-medium hover:text-amber-500 transition-colors border-b-2 border-transparent hover:border-amber-500 py-2"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-white font-medium hover:text-amber-500 transition-colors border-b-2 border-transparent hover:border-amber-500 py-2"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Soluciones Profesionales a tu Medida</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            En JP Soluciones ofrecemos servicios especializados en cerrajería, ciberseguridad, diseño gráfico, soporte
            técnico e instalación de cámaras con la más alta calidad en Chile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#servicios"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <ServiceTabs />
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/images/about-us.jpg" alt="Equipo JP Soluciones" className="w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre JP Soluciones</h2>
              <p className="text-slate-600 mb-4">
                Somos un equipo de profesionales especializados con más de 10 años de experiencia en el mercado chileno.
                Nuestra misión es brindar soluciones integrales y de alta calidad para hogares y empresas, garantizando
                siempre la satisfacción de nuestros clientes.
              </p>
              <p className="text-slate-600 mb-6">
                En JP Soluciones entendemos que cada cliente tiene necesidades únicas, por eso ofrecemos servicios
                personalizados y a la medida, utilizando tecnología de punta y los mejores materiales del mercado.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Profesionales Certificados</h4>
                    <p className="text-slate-600">
                      Nuestro equipo cuenta con todas las certificaciones necesarias para garantizar un trabajo de
                      calidad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Servicio 24/7</h4>
                    <p className="text-slate-600">
                      Disponibles todos los días del año para atender tus emergencias cuando más lo necesitas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Garantía en Todos los Servicios</h4>
                    <p className="text-slate-600">
                      Ofrecemos garantía en todos nuestros trabajos para tu tranquilidad y satisfacción.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
                <p className="text-slate-600 mb-6">
                  Estamos disponibles para atender todas tus consultas y solicitudes. No dudes en contactarnos por
                  cualquiera de estos medios.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-slate-600">
                      <a href="tel:+56912345678" className="hover:text-blue-600 transition-colors">
                        +56 9 1234 5678
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-slate-600">
                      <a href="mailto:contacto@jpsoluciones.cl" className="hover:text-blue-600 transition-colors">
                        contacto@jpsoluciones.cl
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-slate-600">Av. Providencia 1234, Santiago, Chile</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horario de Atención</h4>
                    <p className="text-slate-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-slate-600">Emergencias: 24/7</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Síguenos en Redes Sociales</h4>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Envíanos un Mensaje</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-amber-500 inline-block">
                JP Soluciones
              </h3>
              <p className="text-slate-300 mb-4">
                Soluciones profesionales en cerrajería, ciberseguridad, diseño gráfico, servicio técnico e instalación
                de cámaras.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-500 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-500 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-500 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-500 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-amber-500 inline-block">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#cerrajeria" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Cerrajería
                  </a>
                </li>
                <li>
                  <a href="#ciberseguridad" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Ciberseguridad
                  </a>
                </li>
                <li>
                  <a href="#diseno" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Diseño Gráfico
                  </a>
                </li>
                <li>
                  <a href="#tecnico" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Servicio Técnico
                  </a>
                </li>
                <li>
                  <a href="#camaras" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Cámaras de Seguridad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-amber-500 inline-block">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-amber-500 inline-block">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="text-amber-500 mr-2 mt-1" />
                  <span className="text-slate-300">Av. Providencia 1234, Santiago, Chile</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="text-amber-500 mr-2 mt-1" />
                  <a href="tel:+56912345678" className="text-slate-300 hover:text-amber-500 transition-colors">
                    +56 9 1234 5678
                  </a>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="text-amber-500 mr-2 mt-1" />
                  <a
                    href="mailto:contacto@jpsoluciones.cl"
                    className="text-slate-300 hover:text-amber-500 transition-colors"
                  >
                    contacto@jpsoluciones.cl
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} JP Soluciones. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}