"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceCard from "@/components/service-card"

export default function ServiceTabs() {
  const [mainTab, setMainTab] = useState("cerrajeria")
  const [cerrajeriaSubTab, setCerrajeriaSubTab] = useState("urgencias")
  const [ciberseguridadSubTab, setCiberseguridadSubTab] = useState("auditorias")
  const [disenoSubTab, setDisenoSubTab] = useState("digital")
  const [tecnicoSubTab, setTecnicoSubTab] = useState("computadores")
  const [camarasSubTab, setCamarasSubTab] = useState("instalacion")

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Tabs value={mainTab} onValueChange={setMainTab} className="w-full">
        <TabsList className="w-full justify-start bg-slate-50 overflow-x-auto p-0 h-auto border-b">
          <TabsTrigger
            value="cerrajeria"
            className="py-4 px-6 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Cerrajería
          </TabsTrigger>
          <TabsTrigger
            value="ciberseguridad"
            className="py-4 px-6 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Ciberseguridad
          </TabsTrigger>
          <TabsTrigger
            value="diseno"
            className="py-4 px-6 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Diseño Gráfico
          </TabsTrigger>
          <TabsTrigger
            value="tecnico"
            className="py-4 px-6 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Servicio Técnico
          </TabsTrigger>
          <TabsTrigger
            value="camaras"
            className="py-4 px-6 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Cámaras de Seguridad
          </TabsTrigger>
        </TabsList>

        {/* Cerrajería Content */}
        <TabsContent value="cerrajeria" className="p-0 m-0">
          <div className="border-b">
            <Tabs value={cerrajeriaSubTab} onValueChange={setCerrajeriaSubTab}>
              <TabsList className="h-auto bg-white border-b">
                <TabsTrigger
                  value="urgencias"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Emergencias
                </TabsTrigger>
                <TabsTrigger
                  value="residencial"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Residencial
                </TabsTrigger>
                <TabsTrigger
                  value="comercial"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Comercial
                </TabsTrigger>
                <TabsTrigger
                  value="automotriz"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Automotriz
                </TabsTrigger>
              </TabsList>

              <TabsContent value="urgencias" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Servicios de Cerrajería de Emergencia 24/7</h3>
                <p className="text-slate-600 mb-6">
                  Soluciones inmediatas cuando más lo necesitas, disponible las 24 horas los 365 días del año.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/cerrajeria-apertura.jpg"
                    category="Emergencia"
                    title="Apertura de Puertas"
                    description="Servicio rápido y sin daños para cuando te quedas fuera de tu casa, oficina o auto."
                    price="Desde $25.000"
                  />

                  <ServiceCard
                    image="/images/cerrajeria-cambio.jpg"
                    category="Emergencia"
                    title="Cambio de Cerraduras Urgente"
                    description="Reemplazo inmediato de cerraduras comprometidas o dañadas por intento de robo."
                    price="Desde $45.000"
                  />

                  <ServiceCard
                    image="/images/cerrajeria-llaves.jpg"
                    category="Emergencia"
                    title="Copia de Llaves Urgente"
                    description="Realización de copias de llaves en el momento con materiales de alta calidad."
                    price="Desde $15.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="residencial" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Cerrajería Residencial</h3>
                <p className="text-slate-600 mb-6">
                  Soluciones de seguridad para tu hogar y familia con los más altos estándares de calidad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/cerrajeria-residencial.jpg"
                    category="Residencial"
                    title="Instalación de Cerraduras de Seguridad"
                    description="Sistemas de bloqueo avanzados para puertas principales y secundarias de tu hogar."
                    price="Desde $60.000"
                  />

                  <ServiceCard
                    image="/images/cerrajeria-sistemas.jpg"
                    category="Residencial"
                    title="Sistemas de Seguridad Integral"
                    description="Protección completa para tu hogar con cerraduras inteligentes y sistemas de alarma."
                    price="Desde $120.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="comercial" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Cerrajería Comercial</h3>
                <p className="text-slate-600 mb-6">
                  Protección especializada para negocios, oficinas y locales comerciales.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/cerrajeria-comercial.jpg"
                    category="Comercial"
                    title="Sistemas de Acceso Comercial"
                    description="Control de acceso para empleados con sistemas de llaves maestras y controles electrónicos."
                    price="Desde $150.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="automotriz" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Cerrajería Automotriz</h3>
                <p className="text-slate-600 mb-6">
                  Soluciones especializadas para vehículos de todas las marcas y modelos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/cerrajeria-auto.jpg"
                    category="Automotriz"
                    title="Apertura de Vehículos"
                    description="Servicio profesional para cuando te quedas con las llaves dentro del auto."
                    price="Desde $35.000"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </TabsContent>

        {/* Ciberseguridad Content */}
        <TabsContent value="ciberseguridad" className="p-0 m-0">
          <div className="border-b">
            <Tabs value={ciberseguridadSubTab} onValueChange={setCiberseguridadSubTab}>
              <TabsList className="h-auto bg-white border-b">
                <TabsTrigger
                  value="auditorias"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Auditorías
                </TabsTrigger>
                <TabsTrigger
                  value="proteccion"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Protección
                </TabsTrigger>
                <TabsTrigger
                  value="capacitacion"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Capacitación
                </TabsTrigger>
              </TabsList>

              <TabsContent value="auditorias" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Auditorías de Ciberseguridad</h3>
                <p className="text-slate-600 mb-6">
                  Identificamos vulnerabilidades en tus sistemas antes que los atacantes lo hagan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/cyber-auditoria.jpg"
                    category="Auditoría"
                    title="Evaluación de Vulnerabilidades"
                    description="Análisis exhaustivo de tus sistemas para identificar puntos débiles y posibles brechas de seguridad."
                    price="Desde $250.000"
                  />

                  <ServiceCard
                    image="/images/cyber-penetracion.jpg"
                    category="Auditoría"
                    title="Pruebas de Penetración"
                    description="Simulación de ataques controlados para evaluar la resistencia real de tus defensas."
                    price="Desde $350.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="proteccion" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Protección Cibernética</h3>
                <p className="text-slate-600 mb-6">
                  Soluciones avanzadas para proteger tus sistemas y datos sensibles.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/cyber-ransomware.jpg"
                    category="Protección"
                    title="Defensa Contra Ransomware"
                    description="Implementación de medidas preventivas y correctivas para proteger tu negocio contra secuestro de datos."
                    price="Desde $200.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="capacitacion" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Capacitación en Ciberseguridad</h3>
                <p className="text-slate-600 mb-6">
                  Entrenamos a tu personal para que sea la primera línea de defensa.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/cyber-capacitacion.jpg"
                    category="Capacitación"
                    title="Taller de Concientización"
                    description="Entrenamiento práctico para identificar y evitar amenazas como phishing y ingeniería social."
                    price="Desde $180.000"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </TabsContent>

        {/* Diseño Gráfico Content */}
        <TabsContent value="diseno" className="p-0 m-0">
          <div className="border-b">
            <Tabs value={disenoSubTab} onValueChange={setDisenoSubTab}>
              <TabsList className="h-auto bg-white border-b">
                <TabsTrigger
                  value="digital"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Diseño Digital
                </TabsTrigger>
                <TabsTrigger
                  value="impreso"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Diseño Impreso
                </TabsTrigger>
                <TabsTrigger
                  value="branding"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Branding
                </TabsTrigger>
              </TabsList>

              <TabsContent value="digital" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Diseño Gráfico Digital</h3>
                <p className="text-slate-600 mb-6">Creaciones visuales impactantes para tus plataformas digitales.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/diseno-web.jpg"
                    category="Digital"
                    title="Diseño Web"
                    description="Creación de sitios web modernos, responsivos y optimizados para buscadores."
                    price="Desde $300.000"
                  />

                  <ServiceCard
                    image="/images/diseno-redes.jpg"
                    category="Digital"
                    title="Diseño para Redes Sociales"
                    description="Creación de contenido visual atractivo para tus plataformas sociales."
                    price="Desde $120.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="impreso" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Diseño Impreso</h3>
                <p className="text-slate-600 mb-6">Materiales impresos de alta calidad para tu negocio.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/diseno-impreso.jpg"
                    category="Impreso"
                    title="Material Corporativo"
                    description="Diseño de tarjetas de presentación, folletos, catálogos y más."
                    price="Desde $80.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="branding" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Branding</h3>
                <p className="text-slate-600 mb-6">Creación y desarrollo de identidad de marca.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/diseno-branding.jpg"
                    category="Branding"
                    title="Identidad Corporativa"
                    description="Desarrollo de logotipos, paletas de colores y manuales de marca."
                    price="Desde $250.000"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </TabsContent>

        {/* Servicio Técnico Content */}
        <TabsContent value="tecnico" className="p-0 m-0">
          <div className="border-b">
            <Tabs value={tecnicoSubTab} onValueChange={setTecnicoSubTab}>
              <TabsList className="h-auto bg-white border-b">
                <TabsTrigger
                  value="computadores"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Computadores
                </TabsTrigger>
                <TabsTrigger
                  value="redes"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Redes
                </TabsTrigger>
                <TabsTrigger
                  value="software"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Software
                </TabsTrigger>
              </TabsList>

              <TabsContent value="computadores" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Servicio Técnico de Computadores</h3>
                <p className="text-slate-600 mb-6">Reparación y mantenimiento de equipos informáticos.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/tecnico-reparacion.jpg"
                    category="Computadores"
                    title="Reparación de PC y Laptops"
                    description="Diagnóstico y solución de problemas de hardware y software en computadores."
                    price="Desde $40.000"
                  />

                  <ServiceCard
                    image="/images/tecnico-mantenimiento.jpg"
                    category="Computadores"
                    title="Mantenimiento Preventivo"
                    description="Limpieza de componentes, actualización de software y optimización del rendimiento."
                    price="Desde $30.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="redes" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Redes</h3>
                <p className="text-slate-600 mb-6">Instalación y configuración de redes informáticas.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/tecnico-redes.jpg"
                    category="Redes"
                    title="Instalación de Redes"
                    description="Diseño e implementación de redes cableadas e inalámbricas para hogares y empresas."
                    price="Desde $150.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="software" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Software</h3>
                <p className="text-slate-600 mb-6">Instalación y configuración de programas y sistemas operativos.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/tecnico-software.jpg"
                    category="Software"
                    title="Instalación de Sistemas Operativos"
                    description="Instalación y configuración de Windows, macOS y distribuciones Linux."
                    price="Desde $45.000"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </TabsContent>

        {/* Cámaras de Seguridad Content */}
        <TabsContent value="camaras" className="p-0 m-0">
          <div className="border-b">
            <Tabs value={camarasSubTab} onValueChange={setCamarasSubTab}>
              <TabsList className="h-auto bg-white border-b">
                <TabsTrigger
                  value="instalacion"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Instalación
                </TabsTrigger>
                <TabsTrigger
                  value="mantenimiento"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Mantenimiento
                </TabsTrigger>
                <TabsTrigger
                  value="monitoreo"
                  className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
                >
                  Monitoreo
                </TabsTrigger>
              </TabsList>

              <TabsContent value="instalacion" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Instalación de Cámaras de Seguridad</h3>
                <p className="text-slate-600 mb-6">Sistemas de videovigilancia para hogares y empresas.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/camaras-hogar.jpg"
                    category="Instalación"
                    title="Cámaras para Hogar"
                    description="Sistemas de vigilancia residencial con acceso remoto desde tu smartphone."
                    price="Desde $180.000"
                  />

                  <ServiceCard
                    image="/images/camaras-empresa.jpg"
                    category="Instalación"
                    title="Cámaras para Empresas"
                    description="Sistemas profesionales de videovigilancia para comercios, oficinas y bodegas."
                    price="Desde $350.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="mantenimiento" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Mantenimiento de Cámaras</h3>
                <p className="text-slate-600 mb-6">
                  Servicio de mantenimiento preventivo y correctivo para sistemas de videovigilancia.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/camaras-mantenimiento.jpg"
                    category="Mantenimiento"
                    title="Mantenimiento Preventivo"
                    description="Revisión periódica de cámaras, grabadores y cableado para asegurar su correcto funcionamiento."
                    price="Desde $60.000"
                  />
                </div>
              </TabsContent>

              <TabsContent value="monitoreo" className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Monitoreo de Cámaras</h3>
                <p className="text-slate-600 mb-6">Servicio de monitoreo remoto de sistemas de videovigilancia.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    image="/images/camaras-monitoreo.jpg"
                    category="Monitoreo"
                    title="Monitoreo 24/7"
                    description="Vigilancia profesional de tus cámaras las 24 horas del día, los 7 días de la semana."
                    price="Desde $100.000 mensuales"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
