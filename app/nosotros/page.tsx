"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

const sections = [
  {
  title: "Nuestra Historia",
  eyebrow: "Origen",
  preview:
    "Más de 20 años construyendo tranquilidad, respaldo y crecimiento para empresas, empresarios y personas naturales en Colombia.",
  content: (
    <div className="space-y-6">
      <p>
        En Grupo Análisis &amp; Consultorías llevamos más de 20 años construyendo
        tranquilidad, respaldo y crecimiento para empresas, empresarios y
        personas naturales en Colombia. Nacimos en Medellín con el propósito de
        ofrecer soluciones integrales en materia contable, tributaria,
        administrativa y tecnológica, entendiendo que detrás de cada declaración,
        cada balance y cada decisión financiera, existen sueños, patrimonio y
        proyectos de vida que merecen protección y acompañamiento experto.
      </p>

      <p>
        Desde el año 2006, bajo el liderazgo de Lennyn Yepes, contador público
        especializado en diseño e implementación de sistemas de información
        contable, tributaria y administrativa, se ha consolidado un grupo
        empresarial enfocado en desarrollar estructuras modernas, eficientes y
        estratégicas para el manejo de la información financiera y tributaria.
      </p>

      <p>
        A lo largo de estos años hemos integrado un equipo humano altamente
        calificado, conformado por especialistas en contabilidad, tributación,
        auditoría, tecnología y gestión empresarial, comprometidos con brindar a
        nuestros clientes información clara, segura y disponible en tiempo real,
        acompañada siempre de asesoría permanente y un enfoque estratégico
        orientado al crecimiento y la optimización empresarial.
      </p>

      <p>
        Entendimos muy temprano que muchas personas naturales y pequeñas empresas
        enfrentaban dificultades para cumplir adecuadamente con sus obligaciones
        tributarias debido a la falta de acompañamiento profesional, información
        clara o herramientas tecnológicas eficientes. Como resultado, miles de
        personas terminaban expuestas a sanciones, errores o decisiones
        financieras incorrectas.
      </p>

      <p>
        Con el objetivo de transformar esa realidad, desarrollamos SADI – Sistema
        Administrativo de Información, una plataforma tecnológica propia creada
        para facilitar el acceso, control y administración de la información
        contable y tributaria de nuestros clientes. SADI permite consultar
        información en tiempo real, acceder al historial tributario, gestionar
        procesos administrativos y recibir acompañamiento especializado desde
        cualquier lugar y dispositivo.
      </p>

      <p>
        Más que un software, SADI representa nuestra visión de una contabilidad
        moderna: estratégica, automatizada, segura y enfocada en el análisis
        integral de la información. Mientras los métodos tradicionales se limitan
        a la digitación de datos, nuestro modelo busca convertir la información
        financiera en una herramienta de control, planeación y crecimiento
        empresarial.
      </p>

      <p>
        La seguridad y confidencialidad de la información han sido pilares
        fundamentales en el desarrollo de nuestra estructura tecnológica. Por ello
        contamos con protocolos avanzados de protección de datos, infraestructura
        especializada y un equipo interno de tecnología encargado del
        mantenimiento, evolución y optimización continua de nuestras plataformas y
        procesos.
      </p>

      <p>
        Uno de los aspectos que más nos diferencia es nuestra filosofía de
        acompañamiento permanente. Para nosotros, la asesoría tributaria y
        contable no debe existir únicamente en temporada de impuestos. Creemos en
        relaciones de largo plazo, cercanas y estratégicas, donde cada cliente
        recibe atención personalizada, respuestas oportunas y soluciones diseñadas
        según sus necesidades reales.
      </p>

      <p>
        Hoy, el Grupo Análisis &amp; Consultorías integra diferentes líneas de
        negocio especializadas en:
      </p>

      <ul className="grid gap-3 pt-2 text-black/60 md:grid-cols-2">
        <li>Planeación y optimización tributaria</li>
        <li>Declaraciones de renta para personas naturales y jurídicas</li>
        <li>Devoluciones y compensaciones de IVA</li>
        <li>Auditoría y revisoría fiscal</li>
        <li>Gestión contable y administrativa</li>
        <li>Trámites ante la DIAN y Cámara de Comercio</li>
        <li>Reestructuración patrimonial e insolvencia</li>
        <li>Soluciones tecnológicas y administrativas mediante SADI</li>
        <li>Asesoría jurídica y empresarial</li>
      </ul>

      <p>
        Nuestro crecimiento no sería posible sin un equipo humano guiado por
        valores sólidos como la ética, la excelencia, la responsabilidad, la
        innovación y el compromiso genuino con cada cliente. En nuestra
        organización creemos que el bienestar de nuestros colaboradores se refleja
        directamente en la calidad del servicio que entregamos, por eso promovemos
        ambientes laborales dignos, procesos de formación constante y una cultura
        enfocada en el crecimiento profesional y humano.
      </p>

      <p>
        Más que una firma contable, somos un grupo empresarial que combina
        experiencia, estrategia, tecnología y conocimiento para ayudar a nuestros
        clientes a tomar mejores decisiones, proteger su patrimonio y avanzar con
        mayor tranquilidad hacia el futuro.
      </p>
    </div>
  ),
},
  {
  title: "Misión",
  eyebrow: "Propósito",
  preview:
    "Transformamos conocimiento contable, tributario y tecnológico en soluciones estratégicas que generan tranquilidad, crecimiento y rentabilidad.",
  content: (
    <div className="space-y-6">
      <p>
        En Grupo Análisis &amp; Consultorías transformamos el conocimiento
        contable, tributario, administrativo y tecnológico en soluciones
        estratégicas que generan tranquilidad, crecimiento y rentabilidad para
        nuestros clientes.
      </p>

      <p>
        Acompañamos a empresas, empresarios y personas naturales con asesoría
        especializada, herramientas tecnológicas propias y un equipo humano
        altamente calificado, permitiéndoles tomar decisiones inteligentes,
        optimizar sus recursos, cumplir oportunamente sus obligaciones y
        fortalecer su patrimonio en un entorno empresarial cada vez más
        competitivo.
      </p>

      <p>
        Trabajamos con excelencia, ética y compromiso, construyendo relaciones de
        confianza a largo plazo y aportando valor real al desarrollo económico y
        empresarial de nuestros clientes y colaboradores.
      </p>
    </div>
  ),
},
 {
  title: "Visión",
  eyebrow: "Futuro",
  preview:
    "Ser el grupo empresarial líder y referente en Colombia en soluciones contables, tributarias, administrativas y tecnológicas.",
  content: (
    <div className="space-y-6">
      <p>
        Ser el grupo empresarial líder y referente en Colombia en soluciones
        contables, tributarias, administrativas y tecnológicas, reconocido por
        nuestra innovación, solidez, confiabilidad y capacidad de transformar la
        gestión financiera y tributaria de empresas y personas.
      </p>

      <p>
        Proyectamos consolidar un ecosistema empresarial moderno y altamente
        competitivo, apoyado en tecnología propia, automatización inteligente y
        talento humano de excelencia, que nos permita expandir nuestro impacto a
        nivel nacional e internacional.
      </p>

      <p>
        Queremos ser la primera opción para quienes buscan respaldo estratégico,
        seguridad en la información, optimización tributaria y acompañamiento
        integral para crecer con tranquilidad y sostenibilidad en el tiempo.
      </p>
    </div>
  ),
},
  {
  title: "Nuestros Valores",
  eyebrow: "Cultura",
  preview:
    "Excelencia, trabajo en equipo, humildad, pasión y honor son los principios que orientan cada decisión de nuestra organización.",
  content: (
    <div className="space-y-10">

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Excelencia
        </h4>

        <p>
          En Grupo Análisis &amp; Consultorías creemos que la excelencia no es un
          objetivo, sino la forma en la que hacemos las cosas todos los días.
          Cada proceso, estrategia y servicio es desarrollado con altos
          estándares de calidad, precisión y planificación, garantizando
          resultados confiables, eficientes y orientados al crecimiento de
          nuestros clientes.
        </p>

        <p className="mt-4">
          Trabajamos con disciplina, innovación y mejora continua para entregar
          soluciones que generen tranquilidad, respaldo y valor real.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Trabajo en Equipo
        </h4>

        <p>
          Nuestro mayor diferencial es el talento humano que construye cada
          solución. Fomentamos una cultura basada en la colaboración, el respeto,
          la comunicación y el compromiso, donde cada integrante aporta su
          conocimiento y experiencia para alcanzar objetivos comunes.
        </p>

        <p className="mt-4">
          Creemos en el poder de trabajar unidos, compartir ideas y crecer como
          equipo para brindar a nuestros clientes un servicio más sólido, ágil,
          humano y estratégico.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Humildad
        </h4>

        <p>
          La humildad nos permite evolucionar constantemente. Reconocemos que
          siempre existe una nueva forma de aprender, mejorar y crecer.
          Valoramos las ideas, reconocemos los logros de los demás y asumimos
          cada reto con disposición, respeto y mentalidad de crecimiento.
        </p>

        <p className="mt-4">
          Escuchamos a nuestros clientes, aprendemos de cada experiencia y
          transformamos el conocimiento en oportunidades de mejora continua.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Pasión
        </h4>

        <p>
          La pasión es la energía que impulsa nuestro compromiso con cada
          cliente y cada proyecto. Disfrutamos lo que hacemos y entendemos que
          detrás de cada empresa existen sueños, esfuerzos y metas que merecen
          ser respaldados con dedicación absoluta.
        </p>

        <p className="mt-4">
          Actuamos con entusiasmo, iniciativa y determinación, creando
          soluciones innovadoras y relaciones de confianza que generan impacto
          positivo y crecimiento sostenible.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Honor
        </h4>

        <p>
          El honor es la base de nuestra identidad empresarial. Actuamos con
          ética, transparencia, responsabilidad y coherencia en cada decisión y
          en cada proceso que desarrollamos. Nuestra reputación ha sido
          construida sobre la confianza, el cumplimiento y el respeto hacia
          nuestros clientes, colaboradores y aliados.
        </p>

        <p className="mt-4">
          En un entorno empresarial donde la seguridad y la credibilidad son
          fundamentales, nuestro honor representa el compromiso de hacer las
          cosas correctamente, proteger la información de nuestros clientes y
          brindar siempre un respaldo sólido, profesional y confiable.
        </p>
      </div>

    </div>
  ),
},
  {
  title: "Políticas de Calidad",
  eyebrow: "Método",
  preview:
    "Estandarizamos planificación, análisis, ejecución y mejora continua para garantizar eficiencia, seguridad y trazabilidad.",
  content: (
    <div className="space-y-6">
      <p>
        En Grupo Análisis &amp; Consultorías estamos comprometidos con la
        excelencia, la innovación y el mejoramiento continuo de cada uno de
        nuestros procesos. Por ello, desarrollamos e implementamos metodologías
        de trabajo orientadas a garantizar altos estándares de calidad,
        eficiencia, seguridad y trazabilidad en la administración de la
        información contable, tributaria y administrativa de nuestros clientes.
      </p>

      <p>
        Nuestra organización trabaja bajo procesos estructurados de
        planificación, análisis, ejecución, control y optimización permanente,
        permitiéndonos ofrecer soluciones confiables, ágiles y alineadas con las
        necesidades reales del entorno empresarial actual.
      </p>

      <p>
        Contamos con una metodología propia para el desarrollo e implementación
        de sistemas de información contable y administrativa, respaldada por
        protocolos internos que definen de manera clara cada fase del proceso:
        análisis, diseño, construcción, implementación, documentación,
        seguimiento y mejora continua.
      </p>

      <p>
        Cada proyecto es desarrollado bajo estándares técnicos y operativos que
        garantizan control, organización, estabilidad y transparencia,
        permitiendo a nuestros clientes mantenerse informados en tiempo real sobre
        el avance de sus procesos y tener acceso seguro y oportuno a su
        información.
      </p>

      <p>
        Nuestro compromiso con la calidad se refleja en la confianza de nuestros
        clientes, en la evolución constante de nuestras herramientas tecnológicas
        y en la capacidad de brindar soluciones estratégicas que aportan
        tranquilidad, control y crecimiento sostenible.
      </p>
    </div>
  ),
},
  {
  title: "Políticas Corporativas",
  eyebrow: "Principios",
  preview:
    "Tranquilidad, riqueza y seguridad representan los pilares que orientan nuestra relación con clientes, información y patrimonio.",
  content: (
    <div className="space-y-10">

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Tranquilidad
        </h4>

        <p>
          En Grupo Análisis &amp; Consultorías trabajamos para que nuestros
          clientes puedan enfocarse en crecer, mientras nosotros nos encargamos
          de brindarles respaldo, control y seguridad en cada proceso contable,
          tributario y administrativo.
        </p>

        <p className="mt-4">
          Nuestro principal objetivo es ofrecer tranquilidad a través de un
          servicio cercano, estratégico y altamente especializado. Nos
          caracterizamos por entregar soluciones claras, ágiles y fáciles de
          entender, adaptadas a las verdaderas necesidades de cada cliente.
        </p>

        <p className="mt-4">
          Más que asesorías, construimos relaciones de confianza basadas en el
          cumplimiento, la transparencia y la excelencia profesional.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Riqueza
        </h4>

        <p>
          Creemos que la verdadera riqueza nace del conocimiento, la disciplina
          y las decisiones inteligentes. Por eso, en Grupo Análisis &amp;
          Consultorías fortalecemos permanentemente nuestro talento humano,
          nuestros procesos y nuestras herramientas tecnológicas para ofrecer
          soluciones de alto valor a empresas y personas.
        </p>

        <p className="mt-4">
          A través de nuestros servicios contables, tributarios,
          administrativos y estratégicos, ayudamos a nuestros clientes a
          proteger su patrimonio, optimizar sus recursos y construir crecimiento
          sostenible a largo plazo.
        </p>

        <p className="mt-4">
          Nuestro compromiso no es solamente resolver obligaciones fiscales; es
          contribuir al desarrollo empresarial, financiero y personal de quienes
          depositan su confianza en nosotros.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Seguridad
        </h4>

        <p>
          La seguridad de la información es uno de los pilares fundamentales de
          nuestra organización. Por ello, hemos desarrollado SADI – Sistema
          Administrativo de Información, una plataforma tecnológica propia
          diseñada para garantizar control, confidencialidad, estabilidad y
          acceso seguro a la información contable y tributaria de nuestros
          clientes.
        </p>

        <p className="mt-4">
          Nuestros sistemas y procesos cuentan con altos estándares de
          protección y trazabilidad, permitiendo administrar información en
          tiempo real desde cualquier lugar y dispositivo, con la tranquilidad
          de contar con una infraestructura tecnológica sólida y confiable.
        </p>

        <p className="mt-4">
          En Grupo Análisis &amp; Consultorías entendemos que la confianza se
          construye protegiendo lo más valioso de nuestros clientes: su
          información, su patrimonio y su tranquilidad.
        </p>
      </div>

    </div>
  ),
},
  {
  title: "Desarrollo Sostenible",
  eyebrow: "Responsabilidad",
  preview:
    "Impulsamos crecimiento responsable mediante conocimiento, innovación, optimización de recursos y mejora continua.",
  content: (
    <div className="space-y-6">
      <p>
        En Grupo Análisis &amp; Consultorías creemos que el crecimiento
        verdadero debe ser sostenible, responsable y capaz de generar valor a
        largo plazo. Por eso, impulsamos una cultura basada en el conocimiento,
        la innovación y el mejoramiento continuo, fortaleciendo permanentemente
        nuestros procesos, nuestro talento humano y nuestras herramientas
        tecnológicas.
      </p>

      <p>
        Nuestro compromiso es construir una organización sólida y sostenible en
        lo económico, empresarial, social y humano, generando beneficios reales
        para nuestros clientes, colaboradores y aliados estratégicos.
      </p>

      <p>
        Entendemos que el desarrollo empresarial también implica responsabilidad
        con el entorno. Por ello, promovemos iniciativas orientadas a la
        optimización de recursos, la digitalización de procesos y la reducción
        del impacto ambiental, contribuyendo a una operación más eficiente,
        consciente y alineada con las necesidades del futuro.
      </p>
    </div>
  ),
},
{
  title: "Nuestro Sueño",
  eyebrow: "Ambición",
  preview:
    "Convertirnos en la firma líder y más confiable en soluciones tributarias, contables y estratégicas en Colombia.",
  content: (
    <div className="space-y-6">
      <p>
        Convertirnos en la firma líder y más confiable en soluciones
        tributarias, contables y estratégicas para personas naturales,
        empresarios y empresas en Colombia, brindando respaldo, tranquilidad y
        crecimiento a través del conocimiento, la tecnología y la excelencia
        humana.
      </p>
    </div>
  ),
},
  {
  title: "Nuestra Meta",
  eyebrow: "2030",
  preview:
    "Consolidarnos como uno de los grupos empresariales más innovadores y confiables en soluciones tributarias, contables, administrativas y tecnológicas.",
  content: (
    <div className="space-y-6">
      <p>
        Para el año 2030, consolidarnos como uno de los grupos empresariales más
        reconocidos e innovadores del país en servicios contables, tributarios,
        administrativos y tecnológicos, expandiendo nuestra presencia a nivel
        nacional e internacional mediante soluciones inteligentes,
        automatización de procesos y plataformas tecnológicas propias como SADI.
      </p>

      <p>
        Buscamos impactar positivamente a miles de empresas y personas,
        posicionándonos como un referente de confianza, innovación, seguridad y
        transformación empresarial en Colombia y Latinoamérica.
      </p>
    </div>
  ),
},
  {
  title: "Relaciones y Compromiso Ético",
  eyebrow: "Conducta",
  preview:
    "La confianza, el conocimiento, la protección de la información y el respeto por las personas son la base de nuestra conducta empresarial.",
  content: (
    <div className="space-y-10">

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Relación con Proveedores
        </h4>

        <p>
          Promovemos relaciones comerciales transparentes, éticas y sostenibles
          con nuestros proveedores y aliados estratégicos. Buscamos trabajar
          únicamente con organizaciones y personas que compartan nuestros
          principios de integridad, responsabilidad y cumplimiento.
        </p>

        <p className="mt-4">
          Todos los procesos de negociación y adquisición de bienes o servicios
          se desarrollan bajo criterios objetivos de calidad, especialización,
          oportunidad, eficiencia y transparencia, garantizando igualdad de
          condiciones y respeto mutuo.
        </p>

        <p className="mt-4">
          Nuestros colaboradores deben actuar siempre con honestidad,
          profesionalismo y apego a la ley, protegiendo los intereses de la
          organización y fortaleciendo relaciones comerciales basadas en la
          confianza y el respeto.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Nuestra Gente
        </h4>

        <p>
          El talento humano es el activo más importante de nuestra organización.
          Por ello promovemos un entorno laboral basado en el respeto, la
          dignidad, la igualdad de oportunidades y el crecimiento integral de
          cada colaborador.
        </p>

        <p className="mt-4">
          Creemos en el desarrollo profesional, personal y humano de nuestro
          equipo, fomentando una cultura de aprendizaje continuo, bienestar,
          trabajo colaborativo y reconocimiento al mérito.
        </p>

        <p className="mt-4">
          Rechazamos cualquier tipo de discriminación, acoso o conducta que
          atente contra la integridad y la libertad de las personas,
          garantizando espacios laborales seguros, inclusivos y orientados al
          crecimiento colectivo.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          El Conocimiento
        </h4>

        <p>
          El conocimiento es uno de los pilares fundamentales de nuestra
          organización y la base de nuestra ventaja competitiva. La actualización
          permanente, la innovación y la mejora continua nos permiten ofrecer
          soluciones estratégicas y diferenciadoras a nuestros clientes.
        </p>

        <p className="mt-4">
          Impulsamos una cultura empresarial orientada al aprendizaje constante,
          la evolución tecnológica y la excelencia profesional, entendiendo que
          el crecimiento de nuestro equipo fortalece el crecimiento de toda la
          organización.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          La Confianza
        </h4>

        <p>
          La confianza es el valor que fortalece nuestras relaciones internas y
          externas. Actuamos con coherencia, transparencia y responsabilidad en
          cada proceso, generando credibilidad y construyendo vínculos sólidos
          con clientes, colaboradores, aliados y proveedores.
        </p>

        <p className="mt-4">
          Creemos que la confianza se construye a través del cumplimiento, el
          respeto y la honestidad, y que representa uno de los activos más
          valiosos de nuestra organización.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Relaciones con Autoridades y Comunidad
        </h4>

        <p>
          Todos los integrantes de la organización deben actuar en estricto
          cumplimiento de las leyes, normas y regulaciones aplicables a nuestras
          actividades.
        </p>

        <p className="mt-4">
          Mantenemos relaciones institucionales transparentes, respetuosas y
          responsables con entidades gubernamentales, organismos de control y
          comunidades, actuando siempre conforme a derecho y defendiendo los
          principios éticos de la organización.
        </p>

        <p className="mt-4">
          Asimismo, promovemos conductas responsables que contribuyan a una
          convivencia sana, al fortalecimiento de la confianza social y a la
          protección de la reputación y prestigio de nuestra compañía.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Manejo de la Información
        </h4>

        <p>
          La información es uno de los activos más sensibles y valiosos de
          nuestra organización y de nuestros clientes. Por ello, todos los
          colaboradores tienen la responsabilidad de protegerla con absoluta
          confidencialidad, integridad y profesionalismo.
        </p>

        <p className="mt-4">
          Está estrictamente prohibido alterar registros, falsear información o
          utilizar datos con fines indebidos o personales. Toda la información
          contable, tributaria, administrativa y estratégica debe ser manejada
          bajo criterios de seguridad, trazabilidad y cumplimiento normativo.
        </p>

        <p className="mt-4">
          Las personas con acceso a información reservada o confidencial deberán
          garantizar su adecuada protección, evitando cualquier divulgación no
          autorizada y reportando inmediatamente cualquier incidente que
          comprometa su seguridad.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Protección de Activos
        </h4>

        <p>
          Todos los colaboradores son responsables del cuidado y uso adecuado de
          los activos físicos, tecnológicos y financieros de la organización.
        </p>

        <p className="mt-4">
          Los recursos de la empresa deben utilizarse exclusivamente para el
          desarrollo de las funciones laborales y en beneficio de la
          organización, actuando siempre con responsabilidad, eficiencia y
          compromiso con el patrimonio empresarial.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Salud Ocupacional y Seguridad
        </h4>

        <p>
          La seguridad y el bienestar de nuestros colaboradores son prioridades
          fundamentales para nuestra organización. Promovemos ambientes de
          trabajo seguros, saludables y adecuados para el desarrollo profesional
          y humano de cada integrante del equipo.
        </p>

        <p className="mt-4">
          Trabajamos permanentemente en el fortalecimiento de una cultura de
          prevención, autocuidado y cumplimiento de las normas de seguridad e
          higiene, entendiendo que ningún objetivo empresarial está por encima
          de la integridad y bienestar de las personas.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold text-black">
          Compromiso Ético
        </h4>

        <p>
          Este Código de Ética es una guía de comportamiento que fortalece
          nuestra cultura organizacional y refleja el compromiso de actuar
          siempre con integridad, responsabilidad y respeto.
        </p>

        <p className="mt-4">
          Todos los colaboradores de Grupo Análisis &amp; Consultorías deben
          conocer, aplicar y promover estos principios en cada una de sus
          actuaciones. Las conductas que incumplan este código podrán dar lugar
          a medidas disciplinarias de acuerdo con la gravedad de la falta y las
          disposiciones legales aplicables.
        </p>

        <p className="mt-4">
          Creemos que vivir con ética es construir confianza, proteger nuestra
          reputación y generar valor para nuestros clientes, colaboradores,
          aliados y la sociedad. La integridad no es solamente un principio
          corporativo; es la base sobre la cual construimos nuestro presente y
          proyectamos nuestro futuro.
        </p>
      </div>

    </div>
  ),
},
];

export default function NosotrosPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 h-[1100px] w-[1100px] -translate-x-1/2 rounded-full bg-[#c96a1b]/10 blur-[180px]" />
        <div className="absolute bottom-[-25%] right-[-10%] h-[700px] w-[700px] rounded-full bg-white/[0.03] blur-[160px]" />
      </div>

      <section className="relative z-10 px-6 pt-44 pb-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Nosotros · Grupo A&C
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
              Más que una firma contable, una arquitectura de confianza.
            </h1>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-white/70">
              Integramos experiencia, estrategia, tecnología y conocimiento para
              ayudar a empresas y personas a tomar mejores decisiones, proteger
              su patrimonio y avanzar con tranquilidad hacia el futuro.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <GlassCard className="min-h-[420px] overflow-hidden">
              <div className="relative flex min-h-[420px] md:min-h-[380px] items-end overflow-hidden rounded-[2rem] bg-black p-8">
                <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 h-full w-full object-cover opacity-80"
>
                  <source src="/videos/intelligence.mp4" type="video/mp4" />
                  <div className="absolute top-4 left-4 z-50 bg-red-500 px-2 py-1 text-xs">
  VIDEO TEST
</div>
                </video>

                <div className="absolute inset-0 bg-gradient-to-br from-[#c96a1b]/10 via-black/30 to-black/70"/>

                <div className="relative z-10">
                  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/50">
                    Desde 2006
                  </p>
                  <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-5xl">
                    Tranquilidad, respaldo y crecimiento para decisiones de alto
                    impacto.
                  </h2>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
              {["20+ años", "SADI", "2030", "Colombia"].map((item, index) => (
                <GlassCard
  key={item}
  className="
    flex
    min-h-[222px]
    flex-col
    justify-between
    border
    border-black/10
    bg-white/70
    shadow-[0_15px_50px_rgba(0,0,0,0.06)]
    hover:border-[#c96a1b]/30
    hover:bg-white/[0.05]
  "
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                    0{index + 1}
                  </p>

                  <h3 className="text-4xl font-semibold tracking-[-0.05em]">
                    {item}
                  </h3>

                  <p className="text-sm leading-7 text-white/70">
                    {index === 0 &&
                      "Experiencia construyendo confianza empresarial."}
                    {index === 1 &&
                      "Tecnología propia para información en tiempo real."}
                    {index === 2 &&
                      "Meta de expansión, innovación y liderazgo."}
                    {index === 3 &&
                      "Origen local con visión nacional e internacional."}
                  </p>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 border-b border-black/30 pb-8">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Arquitectura institucional
              </p>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Lee solo lo que necesitas. La profundidad aparece cuando decides
                abrirla.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">

            {sections.map((section, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
              key={section.title}
             className="
overflow-hidden
rounded-[2rem]
border
border-black/10
bg-white/70
shadow-[0_15px_50px_rgba(0,0,0,0.06)]
backdrop-blur-xl
transition-all
duration-500
hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]
"
              >
                    
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left md:px-10"
                    >
                      <div className="grid flex-1 gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
  <div>
    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
      {section.eyebrow}
    </p>

    <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
      {section.title}
    </h3>
  </div>

  {"preview" in section && (
    <p className="hidden max-w-2xl text-sm font-light leading-[1.7] text-black/45 md:block">
      {section.preview}
    </p>
  )}
</div>

                      <span
  className={`
    text-2xl
    text-black/40
    transition-all
    duration-500
    ${isOpen ? "rotate-45" : "rotate-0"}
  `}
>
  +
</span>
                    </button>

                    <div
                      className={`
                        grid transition-all duration-500 ease-out
                        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-black/10 px-6 py-8 md:px-10">
                          <div className="max-w-5xl text-base font-light leading-[1.95] text-black/70 md:text-lg">
                           {section.content}
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}