import { BlogPost } from "../types/blog";
import { AssetImageBlog } from "../utils/assets/imageBlog";
import { parseSpanishDate, slug } from "../utils/blog";

export const featuredPostId = 1;

export const blogPosts: BlogPost[] = [
  // {
  //   id: 1,
  //   slug: slug(
  //     "¿Cómo evitar fraudes en pagos? Elude facturas falsas y logra la protección de tu empresa",
  //   ),
  //   title:
  //     "¿Cómo evitar fraudes en pagos? Elude facturas falsas y logra la protección de tu empresa",
  //   intro:
  //     "Las facturas falsas pueden presentarse de diversas formas, ya que pueden derivarse de facturas ideológicamente falsas, que no corresponden a transacciones reales y se presentan para obtener financiamiento de empresas de factoring; corrupción interna por empleados que estén ejerciendo prácticas fraudulentas o redes de corrupción, es decir, que se amplía llegando a involucrar a inversionistas o fondos completos de inversión que terminan asumiendo pérdidas. ",
  //   date: "5 de marzo 2025",
  //   author: "Sena",
  //   tags: ["Prensa"],
  //   image: AssetImageBlog.blog_1_main.src,
  //   content: [
  //     {
  //       type: "quote",
  //       text: "El Servicio de Impuestos Internos (SII) detectó el uso de facturas falsas que habrían permitido una defraudación de más de $440 mil millones entre 2023 y 2024, produciendo que en este último año se bloquearan temporalmente las claves tributarias de al menos 27 mil RUT de empresas.",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Las facturas falsas pueden presentarse de diversas formas, ya que pueden derivarse de facturas ideológicamente falsas, que no corresponden a transacciones reales y se presentan para obtener financiamiento de empresas de factoring; corrupción interna por empleados que estén ejerciendo prácticas fraudulentas o redes de corrupción, es decir, que se amplía llegando a involucrar a inversionistas o fondos completos de inversión que terminan asumiendo pérdidas.",
  //         },
  //       ],
  //     },

  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Un informe sobre emisión de facturas, que fue publicado en septiembre del año pasado, dio a conocer que ",
  //         },
  //         {
  //           type: "bold",
  //           text: "las facturas fraudulentas han aumentado hasta en un 92% en 2024, alcanzando un monto superior a los $38 mil millones.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "quote",
  //       text: "“Este incremento en el país se debe a una mayor sofisticación de los esquemas fraudulentos, principalmente la evolución de las redes de fraude, como empresas de papel y patrones de comportamiento tributario agresivo en evasión de controles”, indica Giovanni Medrano Ríos, CEO de Sena.",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "También, son vulnerados sectores específicos con mayor frecuencia, tales como: industrias de construcción y servicios, lo que se debe por la complejidad de sus operaciones y la gestión de grandes montos de dinero que, junto con un ciclo económico negativo, genera desaceleración económica, desprotegiendo a las empresas, exponiéndolas a prácticas ilícitas.",
  //         },
  //         {
  //           type: "bold",
  //           text: " que, junto con un ciclo económico negativo, genera desaceleración económica, desprotegiendo a las empresas, exponiéndolas a prácticas ilícitas.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Para combatir estas malas  prácticas se necesita utilizar mecanismos más seguros como la digitalización de las aprobaciones y validación temprana de la información.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "La digitalización sugiere el uso de softwares que gestionen facturas posterior a su emisión, ",
  //         },
  //         {
  //           type: "text",
  //           text: "porque estos permiten automatizar la recepción, añadido clasificación y validación de estos documentos en tiempo real, reduciendo errores humanos y el riesgo de fraudes. Además,",
  //         },
  //         {
  //           type: "bold",
  //           text: "la integración  con sistemas ERP conecta los procesos de cuentas por pagar, ",
  //         },
  //         {
  //           type: "text",
  //           text: "garantizando que las facturas coincidan con órdenes de compra.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Por otro lado,",
  //         },
  //         {
  //           type: "bold",
  //           text: "la validación temprana, contiene la verificación de autenticidad",
  //         },
  //         {
  //           type: "text",
  //           text: "de los emisores mediante cruces automáticos con bases de datos de clientes propios y/o contra bases de datos oficiales, como el SII; en esta línea, la ",
  //         },
  //         {
  //           type: "bold",
  //           text: "trazabilidad con tecnología blockchain ",
  //         },
  //         {
  //           type: "text",
  //           text: "podría asegurar que las facturas no hayan sido alteradas desde su emisión ",
  //         },
  //         {
  //           type: "bold",
  //           text: "y la revisión cruzada ",
  //         },
  //         {
  //           type: "text",
  //           text: "para comparar facturas, contratos y órdenes de compra para identificar inconsistencias o emisiones no autorizadas.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "quote",
  //       text: "La implementación de estas prácticas preventivas no solo fortalece la transparencia y eficiencia en la gestión de facturas, sino que también refuerza la confianza entre las partes involucradas, contribuyendo a un ecosistema financiero más seguro y confiable”, finaliza Medrano.",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   slug: slug("Evita-retrasos-mejora-pagos-protege-tu- negocio-Sena"),
  //   title:
  //     "La digitalización de pagos y cobranzas: clave para la estabilidad financiera de las empresas peruanas.",
  //   intro:
  //     "En el Perú, los retrasos en los pagos de facturas no solo afectan la liquidez de las empresas, sino que generan una cadena de consecuencias que pueden impactar seriamente la sostenibilidad del negocio. Muchas veces, estos retrasos no se deben a la falta de fondos, sino a procesos internos mal integrados, sistemas dispersos y aprobaciones burocráticas.",
  //   date: "10 de marzo 2025",
  //   author: "Antonella Hernandez",
  //   tags: ["Prensa"],
  //   image: AssetImageBlog.blog_2_main.src,
  //   content: [
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "En el Perú, los retrasos en los pagos de facturas no solo afectan la liquidez de las empresas, sino que generan una cadena de consecuencias que pueden impactar seriamente la sostenibilidad del negocio. Muchas veces, estos retrasos no se deben a la falta de fondos, sino a procesos internos mal integrados, sistemas dispersos y aprobaciones burocráticas.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Este problema fue analizado por nuestro CEO, ",
  //         },
  //         {
  //           type: "bold",
  //           text: "Giovanni Medrano Ríos",
  //         },
  //         {
  //           type: "text",
  //           text: ", en una entrevista publicada en ",
  //         },
  //         {
  //           type: "link",
  //           text: "Ecommerce News Perú",
  //           href: "https://www.ecommercenews.pe/pagos-online/2025/la-digitalizacion-de-pagos-y-cobranzas-clave-para-la-estabilidad-financiera-de-las-empresas-peruanas.html/",
  //         },
  //         {
  //           type: "text",
  //           text: ", donde se abordó la importancia de adoptar tecnologías que digitalicen y automaticen los flujos de pagos y cobranzas.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "El verdadero costo de los retrasos en pagos",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Cuando una empresa no gestiona correctamente sus cuentas por pagar, puede enfrentar:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         [
  //           {
  //             type: "bold",
  //             text: "Sobrecarga operativa",
  //           },
  //           {
  //             type: "text",
  //             text: ": El manejo manual de facturas en múltiples plataformas eleva los tiempos, errores y riesgo de fraude.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "bold",
  //             text: "Relaciones comerciales deterioradas",
  //           },
  //           {
  //             type: "text",
  //             text: ": El incumplimiento constante debilita la confianza de proveedores y afecta futuras condiciones comerciales.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "bold",
  //             text: "Problemas legales y reputacionales",
  //           },
  //           {
  //             type: "text",
  //             text: ": En casos extremos, los impagos pueden escalar a acciones judiciales o perjudicar la imagen empresarial.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "bold",
  //             text: "Pérdida de visibilidad",
  //           },
  //           {
  //             type: "text",
  //             text: ": La falta de centralización impide anticipar salidas de caja y coordinar pagos a tiempo.",
  //           },
  //         ],
  //       ],
  //     },
  //     {
  //       type: "image",
  //       link: "https://drive.google.com/uc?export=view&id=18qzaPCpuuCAQywXfb8IxMCZmwX7IJy75",
  //     },
  //     {
  //       type: "subtitle",
  //       text: "¿Cómo puede ayudar la digitalización?",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Para evitar este tipo de escenarios, es fundamental que las empresas modernicen su cadena de pagos. Desde Sena, recomendamos:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "1. Visibilidad en tiempo real",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Involucrar a todas las áreas clave (Finanzas, Compras, Tesorería) en un sistema que centralice la información y reduzca errores o fraudes.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "2. Aprobaciones digitales ágiles",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Implementar flujos de validación seguros que reduzcan la burocracia, sin perder control sobre las decisiones financieras.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "3. Integración de procesos",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Concentrar en una única plataforma todo el ciclo: recepción, revisión, aprobación y pago de facturas.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "4. Alertas y automatización",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Activar recordatorios de vencimientos y pagos pendientes para evitar retrasos innecesarios.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "quote",
  //       text: "“Muchas veces el problema no es la falta de dinero, sino la falta de control. Con herramientas como Sena, las empresas pueden anticiparse a los retrasos, gestionar sus flujos de pago con precisión y reducir el desgaste operativo”, comentó Medrano.",
  //     },
  //     {
  //       type: "subtitle",
  //       text: "📎 Lee la nota completa en Ecommerce News",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Para conocer más sobre este enfoque, te invitamos a revisar la publicación original en ",
  //         },
  //         {
  //           type: "link",
  //           text: "Ecommerce News Perú",
  //           href: "https://www.ecommercenews.pe/pagos-online/2025/la-digitalizacion-de-pagos-y-cobranzas-clave-para-la-estabilidad-financiera-de-las-empresas-peruanas.html/",
  //         },
  //         {
  //           type: "text",
  //           text: ", donde compartimos nuestra visión sobre cómo la tecnología puede transformar las finanzas empresariales.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   slug: slug(
  //     "crisis silenciosa de empresas peruanas, digitalizacion financiera, automatiza",
  //   ),
  //   title:
  //     "La crisis silenciosa de las empresas peruanas:  la clave está en la digitalización de pagos y cobranzas",
  //   intro:
  //     "Aunque Perú ha registrado un crecimiento notable en el uso de herramientas digitales para transacciones, muchas empresas aún enfrentan un gran obstáculo: la falta de digitalización en sus procesos financieros internos. Esta brecha no solo pone en riesgo su liquidez, sino que también debilita su capacidad para tomar decisiones estratégicas, prevenir moras y sostener relaciones comerciales sanas.",
  //   date: "20 de marzo 2025",
  //   author: "Fernanda Hurtado",
  //   tags: ["Prensa"],
  //   image: AssetImageBlog.blog_3_main.src,
  //   content: [
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Aunque Perú ha registrado un crecimiento notable en el uso de herramientas digitales para transacciones, muchas empresas aún enfrentan un gran obstáculo: la falta de digitalización en sus procesos financieros internos. Esta brecha no solo pone en riesgo su liquidez, sino que también debilita su capacidad para tomar decisiones estratégicas, prevenir moras y sostener relaciones comerciales sanas.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "De acuerdo con el Banco Central de Reserva del Perú (BCRP), en el primer semestre del 2024 se registraron ",
  //         },
  //         {
  //           type: "bold",
  //           text: "688 millones de transacciones digitales.",
  //         },
  //         {
  //           type: "text",
  //           text: ". Sin embargo, muchas compañías aún operan con baja visibilidad de su flujo de caja y del comportamiento financiero de sus clientes y proveedores, lo cual genera vulnerabilidades críticas.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Los datos son claros: la tasa de morosidad en sectores como ",
  //         },
  //         {
  //           type: "bold",
  //           text: "construcción (13,4%), alojamiento y restaurantes (8,6%), y comercio (8,1%)",
  //         },
  //         {
  //           type: "text",
  //           text: " muestra que esta no es solo una amenaza para las pymes. Incluso las grandes empresas enfrentan efectos negativos cuando los pagos no fluyen: se frena la inversión, se pierde capacidad operativa y se arriesga la estabilidad del ecosistema económico completo.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "quote",
  //       text: "“Miles de empresas cierran cada año no solo por falta de ventas, sino porque no logran gestionar adecuadamente su flujo de caja”, señaló Giovanni Medrano Ríos, CEO de Sena, en una reciente cobertura de medios.",
  //     },
  //     {
  //       type: "subtitle",
  //       text: "Sena: la red financiera que cambia el juego",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Frente a esta realidad, ",
  //         },
  //         {
  //           type: "bold",
  //           text: "Sena",
  //         },
  //         {
  //           type: "text",
  //           text: " propone una transformación estructural: la creación de la primera ",
  //         },
  //         {
  //           type: "bold",
  //           text: "red financiera empresarial del país",
  //         },
  //         {
  //           type: "text",
  //           text: ", enfocada en digitalizar y automatizar cuentas por cobrar y por pagar, con información en tiempo real.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Esta red: ",
  //         },
  //       ],
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         [
  //           {
  //             type: "text",
  //             text: "Conecta empresas entre sí para facilitar relaciones comerciales más seguras.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "Entrega visibilidad financiera y control de flujo de caja.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "Automatiza tareas operativas y minimiza riesgos de mora.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "Integra recordatorios inteligentes y portales de autogestión para acelerar pagos.",
  //           },
  //         ],
  //       ],
  //     },
  //     {
  //       type: "quote",
  //       text: "“Nuestra solución no solo ayuda a cobrar mejor, también permite pagar mejor. Genera orden, previsión y confianza en toda la cadena empresarial”, explica Giovanni Medrano.",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Este enfoque innovador de Sena ha sido destacado recientemente en diversos medios especializados. Revisa los artículos originales aquí:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         [
  //           {
  //             type: "link",
  //             text: "Revista Economía",
  //             href: "https://www.revistaeconomia.com/la-crisis-silenciosa-de-las-empresas-peruanas-la-clave-esta-en-la-digitalizacion-de-pagos-y-cobranzas-2/",
  //           },
  //         ],
  //         [
  //           {
  //             type: "link",
  //             text: "Lima al Día",
  //             href: "https://limaaldia.pe/la-crisis-silenciosa-de-las-empresas-peruanas-la-clave-esta-en-la-digitalizacion-de-pagos-y-cobranzas/",
  //           },
  //         ],
  //         [
  //           {
  //             type: "link",
  //             text: "Altavoz.pe",
  //             href: "https://www.altavoz.pe/economia/la-crisis-silenciosa-de-las-empresas-peruanas-la-clave-esta-en-la-digitalizacion-de-pagos-y-cobranzas/",
  //           },
  //         ],
  //       ],
  //     },
  //   ],
  // },
  {
    id: 4,
    slug: slug(
      "omnicanalidad e inteligencia artificial para optimizar tu cobranza",
    ),
    title:
      "Cómo Sena combina omnicanalidad e inteligencia artificial para optimizar tu cobranza",
    intro:
      "Gestionar cuentas por cobrar no tiene por qué ser una tarea lenta ni desgastante. Con Sena, las empresas pueden reducir la morosidad y mejorar su flujo de caja usando herramientas que combinan automatización, contacto inteligente y tecnología de vanguardia. ",
    date: "20 de marzo 2025",
    author: "Fernanda Hurtado",
    tags: ["Sena", "IA"],
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcp5aWPPhubM2pDplaKNFiNYuvmmg9kzjXOSUp7OsvqX577TfFJPQ9K7U-Q4iQVjtm2bS6csBdUAJJOhrD4fO7KUeUEL5TZC9klvgQ5_kQQE9uzqYHNPj2CgzsvINDGQeW_bzzEWQ?key=Z63nbao0Z_MUHrbOnmsjiw",
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Gestionar cuentas por cobrar no tiene por qué ser una tarea lenta ni desgastante. Con Sena, las empresas pueden reducir la morosidad y mejorar su flujo de caja usando herramientas que combinan automatización, contacto inteligente y tecnología de vanguardia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "No se trata solo de enviar recordatorios. Se trata de hacerlo bien. ",
          },
        ],
      },
      { type: "title", text: "¿Qué hace diferente a Sena? " },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena es mucho más que un ",
          },
          {
            type: "bold",
            text: "software contable. ",
          },
          {
            type: "text",
            text: "Es un ",
          },
          {
            type: "link",
            text: "software para empresas ",
            href: "",
          },
          {
            type: "text",
            text: "que conecta tus sistemas de facturación, tus canales de comunicación y tus equipos de finanzas en un solo lugar. Todo, sin fricciones. ",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Gracias a su enfoque omnicanal, puedes contactar a tus clientes vía correo, WhatsApp, SMS o incluso desde un ",
          },
          {
            type: "bold",
            text: "CRM ",
          },
          {
            type: "text",
            text: "integrado, dependiendo de cómo prefieran comunicarse. Así, los recordatorios de pago dejan de ser correos perdidos y se convierten en conversaciones reales. ",
          },
        ],
      },
      {
        type: "title",
        text: "IA aplicada a la cobranza (sin complicarte la vida) ",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena utiliza ",
          },
          {
            type: "bold",
            text: " inteligencia artificial ",
          },
          {
            type: "text",
            text: "para analizar patrones de pago y ayudarte a definir el mejor tipo de contacto para cada cliente. No necesitas ser técnico: solo verás sugerencias claras que aumentan la probabilidad de cobro sin afectar la relación comercial. ",
          },
        ],
      },
      {
        type: "quote",
        text: "“Muchas veces el problema no es el cliente, sino el canal. Sena adapta el mensaje y la vía según el comportamiento de cada pagador”, explica Sebastián Gajardo, Product Manager de Sena.",
      },
      { type: "title", text: "Integración real con tu operación " },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "¿Ya usas un ERP o un sistema de facturación? No hay problema. Sena se conecta fácilmente con tus herramientas actuales, transformándose en un software de gestión que potencia tus procesos sin exigir que cambies lo que ya funciona. ",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿El resultado? Menos correos sin respuesta, más pagos realizados y un equipo financiero con más tiempo para lo importante. ",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: slug(
      "Sena: Optimiza la gestión financiera con cobranzas digitalizadas eficaces",
    ),
    title:
      "Sena: Optimiza la gestión financiera con cobranzas digitalizadas eficaces",
    intro:
      "En el mundo empresarial moderno, gestionar las cuentas por cobrar y pagar de manera eficiente es fundamental para mantener un flujo de efectivo saludable. Sin embargo, muchas empresas aún enfrentan desafíos con la automatización y organización de estos procesos clave. Ahí es donde entra Sena.",
    date: "24 de abril 2025 ",
    author: "Antonella Hernandez",
    tags: ["Cobranza"],
    image: AssetImageBlog.blog_5_main.src,
    content: [
      {
        type: "title",
        text: "Sena: Optimiza la gestión financiera con cobranzas digitalizadas eficaces ",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En el mundo empresarial moderno, gestionar las cuentas por cobrar y pagar de manera eficiente es fundamental para mantener un flujo de efectivo saludable. Sin embargo, muchas empresas aún enfrentan desafíos con la automatización y organización de estos procesos clave. Ahí es donde entra ",
          },
          {
            type: "bold",
            text: "Sena. ",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Sena ",
          },
          {
            type: "text",
            text: "es un ",
          },
          {
            type: "bold",
            text: "software de cobranzas y pagos ",
          },
          { type: "text", text: "diseñado específicamente para " },
          {
            type: "bold",
            text: "automatizar, controlar y optimizar la gestión financiera de tu empresa. ",
          },
          { type: "text", text: "Nuestra plataforma te brinda " },
          {
            type: "bold",
            text: "total control y visibilidad en tiempo real ",
          },
          {
            type: "text",
            text: "sobre todas tus cuentas por cobrar y pagar, lo que te permite gestionar tu flujo de efectivo de manera eficiente y sin esfuerzo. Con ",
          },
          {
            type: "bold",
            text: "Sena, ",
          },
          {
            type: "text",
            text: "podrás olvidarte de los procesos manuales y de los sistemas desorganizados que consumen tiempo, recursos y que además te pueden hacer incurrir en fraudes o errores.",
          },
        ],
      },
      { type: "subtitle", text: "¿Qué hace Sena por tu empresa?" },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La gestión de las cobranzas y los pagos es uno de los aspectos más críticos de cualquier negocio. Un retraso en los cobros o un error en los pagos puede generar consecuencias financieras importantes. ",
          },
          { type: "bold", text: "Sena " },
          {
            type: "text",
            text: "te ofrece una solución integral que no solo te ayuda a mantener tus cuentas en orden, sino que también te permite ",
          },
          { type: "bold", text: "optimizar cada etapa del proceso." },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "Con nuestra plataforma, puedes " },
          {
            type: "bold",
            text: "digitalizar la gestión de tus cobranzas y agilizar los pagos ",
          },
          {
            type: "text",
            text: "de manera eficiente, lo que se traduce en una ",
          },
          {
            type: "bold",
            text: "mejor administración del flujo de efectivo. ",
          },
          {
            type: "text",
            text: "Además, al centralizar todas tus operaciones en un solo sistema, podrás obtener una visión clara y detallada de la situación financiera de tu empresa en ",
          },
          { type: "bold", text: "tiempo real." },
        ],
      },
      { type: "subtitle", text: "Automatización de Cobranzas y Pagos " },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena digitalizalos procesos de cobranzas y pagos, eliminando la necesidad de realizar tareas repetitivas manualmente. Al integrar nuestras soluciones a tu sistema contable y financiero podrás: ",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Envíos de recordatorios de pago y facturación digitalizada.",
            },
          ],
          [
            {
              type: "bold",
              text: "Generación de informes y alertas ",
            },
            {
              type: "text",
              text: "para que puedas conocer el estado de tus cuentas por cobrar y pagar de manera continua.",
            },
          ],
          [
            {
              type: "bold",
              text: "Notificaciones personalizadas ",
            },
            {
              type: "text",
              text: "que se envían automáticamente a tus clientes y proveedores, asegurando que no se pierda ninguna deuda ni pago importante. ",
            },
          ],
        ],
      },
      {
        type: "image",
        link: "https://drive.usercontent.google.com/download?id=10UG2cGHXGtokTERXu_WJ2fZNiK3MlwkT&export=view&authuser=0" /* '/images/blog/blog5/1.jpg' */,
      },
      { type: "subtitle", text: "Visibilidad y Control en Tiempo Real " },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La visibilidad es crucial para tomar decisiones acertadas y oportunas en tu negocio. Con ",
          },
          { type: "bold", text: "Sena, " },
          { type: "text", text: "obtienes " },
          { type: "bold", text: "informes en tiempo real " },
          {
            type: "text",
            text: "que te permiten conocer el estado exacto de tus cuentas, desde las más recientes hasta las más antiguas. Puedes ver:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "El saldo pendiente de cada factura.",
            },
          ],
          [
            {
              type: "bold",
              text: "El historial de pagos y cobranzas.",
            },
          ],
          [
            {
              type: "bold",
              text: "El rendimiento de las acciones de cobranza ",
            },
            {
              type: "text",
              text: "que estás ejecutando.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Esto te da un control total sobre el proceso, lo que te permite tomar decisiones informadas sobre cómo priorizar tus esfuerzos de cobranza o pagos en el momento adecuado. ",
          },
        ],
      },
      { type: "subtitle", text: "¿Qué puedes lograr con Sena? " },
      {
        type: "paragraph",
        fragments: [
          { type: "bold", text: "Sena " },
          {
            type: "text",
            text: "está diseñado para ayudar a las empresas a gestionar su flujo de efectivo de manera más eficiente, independientemente del tamaño o la industria. Con nuestra plataforma, podrás: ",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Reducir  hasta un 30% tus días de cobro (DSO), gracias a recordatorios oportunos y seguimientos automáticos, asegurando que el flujo de caja se mantenga constante.",
          "Recupera hasta el 80% de tus facturas atrasadas en un promedio de 60 días. Optimiza tus procesos financieros,centralizando todas tus cuentas por cobrar y pagar en un solo lugar, lo que mejora la productividad de tu equipo y la efectividad del departamento financiero.",
          "Disminuye en un 50% el ciclo de aprobación de facturas con trazabilidad total y aprobaciones más ágiles ",
          "Mejorar la recuperación de deuda: nuestra plataforma te permite realizar seguimientos a clientes morosos, lo que aumenta la tasa de éxito en la cobranza.",
          [
            {
              type: "bold",
              text: "Tener total visibilidad en tiempo real: ",
            },
            {
              type: "bold",
              text: "te brindamos información clara, precisa y actualizada sobre el estado de todas tus operaciones financieras. ",
            },
          ],
        ],
      },
      {
        type: "image",
        link: "https://drive.usercontent.google.com/download?id=1AbVUB1GEX-sHhsNlZUlfaf-ahtkN4yIr&export=view&authuser=0" /* '/images/blog/blog5/2.jpg' */,
      },
      { type: "subtitle", text: "Experiencia y Respaldo de RECSA " },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena no es solo una herramienta avanzada de gestión financiera, sino que también cuenta con el respaldo de ",
          },
          {
            type: "link",
            text: "RECSA: ",
            href: "https://recsa.com",
          },
          {
            type: "text",
            text: "Líder en cobranzas con más de 35 años de experiencia en Latam, presente en 15 países. ",
          },
        ],
      },
      {
        type: "list",
        items: [
          "14 millones de correos electrónicos enviados al mes ",
          "60 millones de llamadas de robots avanzados al mes ",
          "70 millones de llamadas de agentes de call center al mes",
          "2 millones de SMS y WhatsApp enviados al mes ",
          "146 millones de gestiones en total al mes ",
        ],
      },
      /*   { type: 'image', link: '/images/blog/blog5/3.jpg' }, */
      { type: "subtitle", text: "¿Por qué elegir Sena? " },
      {
        type: "list",
        items: [
          [
            { type: "bold", text: "Ahorro de tiempo y recursos: " },
            {
              type: "text",
              text: "Al digitalizar procesos, automatizar  recordatorios y centralizar procesos, ",
            },
            { type: "bold", text: "Sena " },
            {
              type: "text",
              text: "te ayuda a optimizar los recursos de tu empresa, permitiendo que tu equipo se enfoque en actividades más estratégicas. ",
            },
          ],
          [
            {
              type: "bold",
              text: "Simplificación del proceso financiero: ",
            },
            { type: "text", text: "Con nuestra plataforma, " },
            {
              type: "bold",
              text: "gestionar tus cuentas por cobrar y pagar nunca fue tan fácil. ",
            },
            {
              type: "text",
              text: "Todo está al alcance de un clic, con una interfaz intuitiva y fácil de usar. ",
            },
          ],
          [
            {
              type: "bold",
              text: "Control total de tus cobros y pagos en una sola plataforma:  Elimina  la complejidad de sistemas desconectados y logrando total transparencia de tu flujo de caja. ",
            },
          ],
        ],
      },
      { type: "subtitle", text: "La tecnología que tu empresa necesita" },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "En " },
          { type: "bold", text: "Sena, " },
          {
            type: "text",
            text: "entendemos que cada empresa tiene necesidades diferentes. Por eso, nuestras soluciones están diseñadas para ser ",
          },
          { type: "bold", text: "flexibles y escalables, " },
          {
            type: "text",
            text: "adaptándose a la medida de cada cliente. Ya sea que estés comenzando o buscando mejorar los procesos de cobranzas y pagos de tu empresa, ",
          },
          { type: "bold", text: "Sena " },
          {
            type: "text",
            text: "te proporciona las herramientas que necesitas para mejorar tu eficiencia financiera y asegurarte de que tu flujo de efectivo siempre esté optimizado. ",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "bold", text: "Sena " },
          { type: "text", text: "te ofrece una " },
          {
            type: "bold",
            text: "gestión integral de cobranzas y pagos ",
          },
          {
            type: "text",
            text: "para optimizar tus operaciones financieras. Si estás buscando una forma fácil y eficiente de controlar y automatizar el proceso de cobro y pago de tus facturas, Sena es la solución ideal para tu empresa! ",
          },
        ],
      },
      /*  { type: 'image', link: '/images/blog/blog5/4.jpg' }, */
    ],
  },
  {
    id: 6,
    slug: slug("¿Tienes una factura impaga? Sena la recupera por ti"),
    title: "¿Tienes una factura impaga? Sena la recupera por ti",
    intro:
      "Cuando una factura vence y el pago no llega, no solo se retrasa un ingreso: se altera toda la operación financiera de tu empresa. En Sena, te ofrecemos una solución eficaz y sin riesgos, es el servicio de 'Recupera Plus'.",
    date: "25 de abril 2025",
    author: "Fernanda Hurtado",
    tags: ["Cobranza", "Sena"],
    image: AssetImageBlog.blog_6_main.src,
    content: [
      {
        type: "title",
        text: "¿Tienes una factura impaga? Sena la recupera por ti",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cuando una factura vence y el pago no llega, no solo se retrasa un ingreso: se altera toda la operación financiera de tu empresa. En ",
          },
          { type: "bold", text: "Sena, " },
          {
            type: "text",
            text: "te ofrecemos una solución eficaz y sin riesgos, es el servicio de “Recupera Plus”. ",
          },
          {
            type: "bold",
            text: "Nosotros  recuperamos pagos vencidos sin que tengas que adelantar dinero ni ceder o perder dinero de tus facturas impagas. ",
          },
          { type: "text", text: "Y lo más importante: " },
          {
            type: "bold",
            text: "solo tiene costo si el pago se concreta. ",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Así de simple. Tú nos confirmas las facturas impagas que tengas y nosotros activamos el proceso de recuperación y, si el cliente paga, recuperas lo que te corresponde. Si no se cobra, no tienes que pagar por el intento.",
          },
        ],
      },
      { type: "subtitle", text: "No es factoring. Es Sena" },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "A diferencia del " },
          { type: "bold", text: "factoring financiero, " },
          { type: "text", text: "el " },
          { type: "bold", text: "factoring con recursos " },
          { type: "text", text: "o los servicios de " },
          { type: "bold", text: "factoring online, " },
          {
            type: "text",
            text: "en Sena no compramos tus facturas ni te adelantamos dinero. No estás contratando una empresa que financia tu cartera, sino un equipo que ",
          },
          {
            type: "bold",
            text: "gestiona y ejecuta la recuperación de tus pagos vencidos, ",
          },
          { type: "text", text: "manteniéndote siempre en control." },
        ],
      },
      {
        type: "list",
        items: [
          "No cedes tus derechos.",
          "No comprometes tu relación con el cliente.",
          "No pagas por adelantado.",
          "Solo tiene costo si recuperas tu dinero.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "Otras " },
          { type: "bold", text: "factoring companies " },
          { type: "text", text: "o " },
          { type: "bold", text: "freight factoring companies " },
          {
            type: "text",
            text: "te ofrecen liquidez inmediata con descuentos, intereses o cesión de documentos. En cambio, Sena es una alternativa al factoring te permite mantener la propiedad total sobre tus facturas y cobrar exactamente lo que te deben. ",
          },
        ],
      },
      {
        type: "image",
        link: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc709NrLvnJSDVR39oh82sue9wENpR1rmX7GPnZd4ULBZmUfoYMoD_5z6SzytDkudGGwiYSImsHcDYyy3CY-6ZWrMnmOS2E9l_ipBTpucny4KskH_U-l_IjsEdt47KDeKmAvfC1PwD50BEhbxR_mVU?key=zNxDjqMGOyLpRYie3ixLSQ",
      },
      {
        type: "subtitle",
        text: "¿Cómo funciona el servicio de Sena 'Recupera Plus'?",
      },
      {
        type: "list",
        items: [
          [
            {
              type: "text",
              text: "Dejas tus datos en el formulario: ",
            },
            // {
            //   type: "link",
            //   text: "https://sena.com/recuperacion-de-deudas",
            //   href: "https://sena.com/recuperacion-de-deudas",
            // },
          ],
          "Nos contactaremos contigo para definir las facturas impagas, montos y todos los detalles del servicio. Una vez aclarados todos los puntos, te solicitaremos el envío de las facturas impagas en nuestra plataforma.",
          "Iniciamos la gestión de cobranza con tecnología y respaldo profesional.",
          "Hacemos el seguimiento, contacto y recuperación con tu cliente.",
          "Una vez que el pago se realiza, tú recibes el monto recuperado.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Todo el proceso es digital, transparente y respaldado por más de ",
          },
          {
            type: "bold",
            text: "35 años de experiencia en cobranzas empresariales, ",
          },
          { type: "text", text: "junto con el respaldo de " },
          {
            type: "link",
            text: "RECSA, ",
            href: "https://recsa.com",
          },
          {
            type: "text",
            text: "una de las redes más sólidas en el rubro. ",
          },
        ],
      },

      {
        type: "subtitle",
        text: "Beneficios reales frente al factoring tradicional",
      },
      {
        type: "list",
        items: [
          "No dependas de adelantos.",
          "No pierdes valor de tu factura.",
          "No te endeudas ni comprometes activos.",
          "Mantienes visibilidad y control total.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "Ya no necesitas recurrir al " },
          { type: "bold", text: "factoring de empresas " },
          {
            type: "text",
            text: "para resolver tu flujo de caja. Si lo que buscas es ",
          },
          { type: "bold", text: "recuperar lo que te deben, " },
          {
            type: "text",
            text: "Sena es la opción más segura, transparente y efectiva.",
          },
        ],
      },
      {
        type: "image",
        link: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfmGfizTCfMLWe61w4nQReFvAoUzdRrRqWhPpAhtFN8HwQZrTOk6rub26oBztIyimFmM2XadBviE7u1Fx1RenmaJTGEMCvX_buUGniR-QcS42XQFbi4W3j4Nhfd9cOGbL2LD25c0H8Xn5vCN7texNs?key=zNxDjqMGOyLpRYie3ixLSQ",
      },
      { type: "subtitle", text: "Cobra lo que te deben sin ceder nada" },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En Sena, creemos que recuperar un pago no debería representar un nuevo gasto. Por eso, ",
          },
          {
            type: "text",
            text: "nuestro servicio solo tiene costo si se logra el cobro. ",
          },
          {
            type: "text",
            text: "Sin letras pequeñas. Sin sorpresas. ",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Recupera tus pagos. Gana control. Optimiza tus finanzas. Todo con Sena.",
          },
        ],
      },
      { type: "image", link: AssetImageBlog.blog_6_3.src },
    ],
  },
  {
    id: 7,
    slug: slug("Recupera ese dinero con Sena sin factoring"),
    title:
      "¿Tu cliente aún no paga? Recupera ese dinero con Sena, sin Factoring ni adelantos de dinero",
    intro:
      "Tener facturas vencidas no sólo genera estrés, también frena tu crecimiento. En Sena entendemos el impacto que tiene una cuenta por cobrar sin resolver, y por eso diseñamos una solución concreta: recuperamos tus pagos vencidos de forma profesional, sin que adelantes dinero y sin que cedas tus derechos o pierdas dinero.",
    date: "26 de abril 2025",
    author: "Fernanda Hurtado",
    tags: ["Sena", "Cobranza", "Educación Financiera"],
    image: AssetImageBlog.blog_7_main.src,
    content: [
      {
        type: "title",
        text: "¿Tu cliente aún no paga? Recupera ese dinero con Sena, sin Factoring ni adelantos de dinero",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Tener facturas vencidas no sólo genera estrés, también frena tu crecimiento. En Sena entendemos el impacto que tiene una cuenta por cobrar sin resolver, y por eso diseñamos una solución concreta: recuperamos tus pagos vencidos de forma profesional, sin que adelantes dinero y sin que cedas tus derechos o pierdas dinero.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La mejor parte: solo tiene costo si el pago se recupera. ",
          },
          {
            type: "bold",
            text: "Si no cobras, no nos pagas.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "No hacemos factoring, hacemos que te paguen",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "A diferencia del factoring, en Sena con el servicio ",
          },
          // {
          //   type: "link",
          //   text: "“Recupera Plus” ",
          //   href: "/recuperacion-de-deudas",
          // },
          {
            type: "text",
            text: "no compramos tus facturas ni te damos préstamos. Tampoco pierdes valor al ceder tu cartera. Tu factura sigue siendo tuya, y nosotros nos encargamos de recuperarla directamente con tu cliente.",
          },
        ],
      },
      {
        type: "list",
        items: [
          "No hay intereses ni descuentos.",
          "No hay pagos por adelantado.",
          "No corres riesgos financieros.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Mientras el factoring financiero y el factoring online están pensados para adelantar liquidez a cambio de una factura, nosotros nos enfocamos en lo esencial: que te paguen lo que ya te deben.",
          },
        ],
      },
      {
        type: "image",
        link: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfSdjWiLw2HnwccLjaJ1-Ps3SonCHVFWLzXB-zCo1U2T04NSBJ_B_hSC6Hsu4fMezwTDyCfmLyDHblGvW64ll-OEwviwNmWsyoympvetH8pj0WsdD3drd814206dNNn8_o8O_Zp42usY4MsCSUKTjI?key=vXGcwwMqEuun1PDHDhkzYg",
      },
      { type: "subtitle", text: "¿Cómo funciona Sena Recupera?" },
      {
        type: "list",
        items: [
          [
            {
              type: "text",
              text: "Dejas tus datos en el formulario: ",
            },
            // {
            //   type: "link",
            //   text: "https://sena.com/recuperacion-de-deudas",
            //   href: "https://sena.com/recuperacion-de-deudas",
            // },
          ],
          "Nos contactaremos contigo para definir las facturas impagas, montos y todos los detalles del servicio. Una vez aclarado todos los puntos, te solicitaremos el envío de las facturas impagas en nuestra plataforma.",
          "Iniciamos la gestión de cobranza con tecnología y respaldo profesional.",
          "Hacemos el seguimiento, contacto y recuperación con tu cliente.",
          "Una vez que el pago se realiza, tú recibes el monto recuperado.",
        ],
      },
      {
        type: "image",
        link: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfCtEpx6DiPF9q6tXNI0OXsFdzxiQtECBkpliJNXPqgAtKNnUasDhAzBpAg2DJIMpkTokNEvJsWgrT3bnJVAN-WoUOxz1N32Dnu8Wk5caEs3Ma20rzLa_dkx_9H_0O878XaRABaDW5rY87zl-WrLA?key=vXGcwwMqEuun1PDHDhkzYg",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Es rápido y transparente. Además, todo está respaldado por ",
          },
          {
            type: "bold",
            text: "más de 35 años de experiencia en recuperación de pagos empresariales, ",
          },
          {
            type: "text",
            text: "junto con el respaldo de RECSA, lo que nos permite garantizar resultados reales.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Una solución moderna, sin los límites del factoring tradicional",
      },
      {
        type: "list",
        items: [
          "No pierdes margen en descuentos.",
          "No afectas tu relación con los clientes.",
          "No tienes que esperar semanas.",
          "Solo actúas cuando lo necesitas.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Ya sea que estés considerando opciones de factoring empresas, freight factoring companies, o soluciones de factoraje financiero, Sena es la alternativa sin letra chica: recuperamos tu factura cuando nadie más puede, sin que pongas nada por adelantado.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Tu factura sigue siendo tuya. Nosotros solo hacemos que te la paguen.",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena es la forma más eficiente de recuperar pagos vencidos. Sin complicaciones, sin papeleo innecesario y sin poner en riesgo tus finanzas. Solo si recuperas tu dinero, nuestro trabajo se da por hecho.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Recupera Plus: la manera más inteligente de cobrar lo que te deben.",
          },
        ],
      },
      /*  { type: 'image', link: '/images/blog/blog7/3.jpg' }, */
    ],
  },
  // {
  //   id: 8,
  //   slug: slug(
  //     "¿Cómo evitar fraudes en pagos? Protege tu empresa y evita facturas falsas",
  //   ),
  //   title:
  //     "¿Cómo evitar fraudes en pagos? Protege tu empresa y evita facturas falsas",
  //   intro:
  //     "En los últimos años, el fraude con facturas falsas se ha convertido en una amenaza real para miles de empresas en el país. Solo entre 2023 y 2024, el Servicio de Impuestos Internos (SII) en Chile detectó un esquema que habría permitido defraudar más de $440 mil millones, afectando a más de 27 mil empresas.",
  //   date: "26 de abril 2025",
  //   author: "Antonella Hernandez",
  //   tags: ["Sena", "Educación Financiera"],
  //   image: AssetImageBlog.blog_1_main.src,
  //   content: [
  //     {
  //       type: "title",
  //       text: "¿Cómo evitar fraudes en pagos? Protege tu empresa y evita facturas falsas",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "En los últimos años, el fraude con facturas falsas se ha convertido en una amenaza real para miles de empresas en el país. Solo entre 2023 y 2024, el Servicio de Impuestos Internos (SII) en Chile detectó un esquema que habría permitido defraudar más de $440 mil millones. Como resultado, más de 27 mil empresas vieron bloqueadas sus claves tributarias. ¿La causa? Facturas que no correspondían a transacciones reales. ",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Por otro lado, en Perú; la Policía Nacional del Perú (PNP), en el último año se registraron más de 31,000 denuncias por estafas, reflejando un preocupante aumento en modalidades delictivas como aplicaciones de pago fraudulentas, facturación falsa y esquemas de inversión engañosos. Estas prácticas no solo afectan la economía del país, sino que ponen en riesgo la estabilidad financiera de negocios y consumidores. ",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Si nos enfocamos en las facturas falsas,  estas se presentan de diversas formas, ya que pueden derivarse de facturas ideológicamente falsas, que no corresponden a transacciones reales y se presentan para obtener financiamiento de empresas de factoring; corrupción interna por empleados que estén ejerciendo prácticas fraudulentas o redes de corrupción, es decir, que se amplía llegando a involucrar a inversionistas o fondos completos de inversión que terminan asumiendo pérdidas. ",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Este tipo de fraude puede darse de varias formas: desde documentos emitidos con información falsa para obtener financiamiento, hasta redes organizadas que involucran a empleados, empresas de papel e incluso fondos de inversión. Las industrias más golpeadas han sido la construcción y los servicios, sectores que por su complejidad y volumen de operaciones son especialmente vulnerables. ",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "¿Por qué está aumentando este problema?",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Según un informe reciente, el uso de facturas fraudulentas ha crecido un 92 % solo en 2024. La razón principal: la evolución de los esquemas de fraude, cada vez más sofisticados. Esto incluye el uso de empresas falsas, patrones de comportamiento tributario sospechosos y sistemas poco protegidos frente a irregularidades. ",
  //         },
  //       ],
  //     },
  //     {
  //       type: "quote",
  //       text: "“Este crecimiento se debe a una mayor sofisticación de las redes de fraude y a la falta de controles adecuados en muchas empresas”, explica Giovanni Medrano Ríos, CEO de Sena. ",
  //     },
  //     {
  //       type: "image",
  //       link: "https://drive.usercontent.google.com/download?id=1XWdL7JSRCJMVqsYhUp808aDV32qMQyCG&export=view&authuser=0",
  //     },
  //     {
  //       type: "subtitle",
  //       text: "¿Cómo proteger tu empresa? Del caos al control",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Hoy más que nunca, la innovación financiera para anticiparse al riesgo y proteger tu empresa del fraude y la morosidad  es clave, ya que la tecnología y los datos están transformando la gestión del riesgo y fraude, para tomar control y acción temprana. Es por eso que ",
  //         },
  //         { type: "link", text: "Sena ", href: "/" },
  //         {
  //           type: "text",
  //           text: "contribuye a esto, digitalizando el proceso de pagos y cobros con verdadera trazabilidad e identificación para evitar caer en estas trampas. Herramientas como Sena permiten: ",
  //         },
  //       ],
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         "Validar la autenticidad de las facturas en tiempo real.",
  //         "Automatizar la recepción y validación de documentos.",
  //         "Conectar el flujo de pagos con tus sistemas de gestión (ERP).",
  //         "Comparar facturas con órdenes de compra y contratos para detectar inconsistencias.",
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Además, se pueden implementar tecnologías como blockchain para asegurar que las facturas no hayan sido alteradas desde su emisión, y sistemas de validación cruzada con bases oficiales como la del SII ( Chile) o Sunal (Perú).",
  //         },
  //       ],
  //     },
  //     {
  //       type: "image",
  //       link: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeaEcLziniDmnE-gJtWsGxEFE4eiS1t5stVz6J4cVIHIpmxAgthTT7BTU9SA4bNYjuSJX_PfEQkEHFweQgb0jKJFRCU5RBLWumM6BfnuWJXnvkTBCoPpGD9qUZ9_PdwYGxVv1R46mRudJoFY-hI_j4?key=mLWCzQYgIU_v3wO2OcOsnw",
  //     },
  //     {
  //       type: "subtitle",
  //       text: "🔒 La prevención es el mejor escudo ",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Digitalizar tus procesos no solo mejora la eficiencia, también fortalece la confianza con tus clientes y proveedores. ",
  //         },
  //         {
  //           type: "bold",
  //           text: "Estás protegiendo tu empresa y contribuyendo a un ecosistema financiero más seguro para todos. ",
  //         },
  //       ],
  //     },
  //     {
  //       type: "quote",
  //       text: "“La implementación de estas prácticas no solo mejora la transparencia, también genera seguridad y respaldo en todas las etapas del proceso”, agrega Medrano.",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Toda esta información y mucho más se desarrollará en el conversatorio ",
  //         },
  //         { type: "bold", text: "“B2B Risk & Innovation Day“, " },
  //         { type: "text", text: "organizado por " },
  //         { type: "bold", text: "Ciclo de Riesgo Chile,  " },
  //         { type: "text", text: "a realizarse en  la " },
  //         { type: "bold", text: "V Región Viña del Mar, Chile. " },
  //         {
  //           type: "text",
  //           text: "En la cual se abordarán distintos temas más allá de la cobranza, abarcando todo el mundo de servicios BPO. Este evento está orientado a un público de diferentes industrias. ",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   slug: slug("como evitar fraudes en los pagos que recibe su empresa"),
  //   title:
  //     "¿Cómo evitar fraudes en pagos? La digitalización como escudo ante facturas falsas",
  //   intro:
  //     "Los fraudes financieros están en aumento, y uno de los más peligrosos para las empresas es el uso de facturas falsas. Solo en el periodo 2023-2024, el Servicio de Impuestos Internos (SII) detectó una defraudación de más de $440 mil millones en Chile. Como consecuencia, se bloquearon las claves tributarias de más de 27 mil empresas. ¿Qué pueden hacer las organizaciones para no formar parte de estas cifras?",
  //   date: "06 de junio 2025",
  //   author: "Antonella Hernandez",
  //   tags: ["Prensa"],
  //   image: AssetImageBlog.blog_9_main.src,
  //   content: [
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Los fraudes financieros están en aumento, y uno de los más peligrosos para las empresas es el uso de ",
  //         },
  //         { type: "bold", text: "facturas falsas. " },
  //         {
  //           type: "text",
  //           text: "Solo en el periodo 2023-2024, el Servicio de Impuestos Internos (SII) detectó una defraudación de más de $440 mil millones en Chile. Como consecuencia, se bloquearon las claves tributarias de más de 27 mil empresas. ¿Qué pueden hacer las organizaciones para no formar parte de estas cifras?",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Este tema fue analizado por nuestro CEO, Giovanni Medrano Ríos, en una reciente nota publicada por ",
  //         },
  //         {
  //           type: "link",
  //           text: "Serperuano.com",
  //           href: "https://www.serperuano.com/2025/04/como-evitar-fraudes-en-pagos-evita-facturas-falsas-y-logra-la-proteccion-de-tu-empresa/",
  //         },
  //         {
  //           type: "text",
  //           text: " donde se abordaron los mecanismos más eficaces para evitar caer en redes de fraude fiscal.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "🧾 ¿Cómo se presentan las facturas falsas?",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Los esquemas fraudulentos se han vuelto más sofisticados. Ya no solo se trata de empresas “fantasma”, sino de redes más complejas que incluyen:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         [
  //           {
  //             type: "bold",
  //             text: "Facturas ideológicamente falsas, ",
  //           },
  //           {
  //             type: "text",
  //             text: "sin transacción real de por medio.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "bold",
  //             text: "Corrupción interna ",
  //           },
  //           {
  //             type: "text",
  //             text: "de empleados vinculados a prácticas ilícitas.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "bold",
  //             text: "Inversionistas afectados ",
  //           },
  //           {
  //             type: "text",
  //             text: "que terminan asumiendo pérdidas sin saberlo.",
  //           },
  //         ],
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "En sectores como construcción y servicios, donde hay operaciones complejas y grandes flujos de dinero, el riesgo es aún mayor.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "image",
  //       link: AssetImageBlog.blog_9_main.src,
  //     },
  //     {
  //       type: "subtitle",
  //       text: "Estrategias para prevenir fraudes en facturación",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Desde Sena, identificamos dos pilares clave para protegerse:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "1. Digitalización del proceso de cuentas por pagar",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Implementar soluciones que automaticen la recepción y validación de facturas permite:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         [
  //           {
  //             type: "text",
  //             text: "Reducir errores humanos.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "Validar datos en tiempo real.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "Integrar el flujo con sistemas ERP y órdenes de compra.",
  //           },
  //         ],
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "2. Validación temprana de emisores",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Implementar soluciones que automaticen la recepción y validación de facturas permite:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         [
  //           {
  //             type: "text",
  //             text: "La ",
  //           },
  //           {
  //             type: "bold",
  //             text: "autenticidad ",
  //           },
  //           {
  //             type: "text",
  //             text: "de la factura.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "La ",
  //           },
  //           {
  //             type: "bold",
  //             text: "trazabilidad ",
  //           },
  //           {
  //             type: "text",
  //             text: "del documento.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "La ",
  //           },
  //           {
  //             type: "bold",
  //             text: "detección inmediata de inconsistencias",
  //           },
  //         ],
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "📎 Lee la nota completa",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         { type: "text", text: "Puedes leer la publicación completa en " },
  //         {
  //           type: "link",
  //           text: "Serperuano.com",
  //           href: "https://www.serperuano.com/2025/04/como-evitar-fraudes-en-pagos-evita-facturas-falsas-y-logra-la-proteccion-de-tu-empresa/",
  //         },
  //         {
  //           type: "text",
  //           text: ", donde exploramos más a fondo los riesgos y soluciones frente al uso de facturas fraudulentas.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   slug: slug("Consecuencias de pagar facturas fuera de fecha"),
  //   title: "¿Cuáles son las consecuencias de pagar facturas fuera de fecha?",
  //   intro:
  //     "La demora en el pago de facturas se ha convertido en un desafío común para muchos negocios en el Perú. Más allá de la falta de liquidez por ventas o cobros pendientes, existen factores internos que suelen alargar el proceso de pago, como la alta burocracia en aprobaciones, la participación de múltiples roles y la dispersión de información en diferentes plataformas.",
  //   date: "05 de junio 2025",
  //   author: "Antonella Hernandez",
  //   tags: ["Prensa"],
  //   image: AssetImageBlog.blog_10_main.src,
  //   content: [
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "La demora en el pago de facturas se ha convertido en un desafío común para muchos negocios en el Perú. Más allá de la falta de liquidez por ventas o cobros pendientes, existen factores internos que suelen alargar el proceso de pago, como la alta burocracia en aprobaciones, la participación de múltiples roles y la dispersión de información en diferentes plataformas.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Esta situación no sólo genera complicaciones en el flujo de caja interno, sino que también entorpece el de los proveedores, generando inconvenientes en la cadena comercial y afectando directamente la operatividad. Así, los negocios terminan expuestos a riesgos judiciales, cobranza coactiva, deterioro de relaciones y daños reputacionales, difíciles de revertir en una economía cada vez más interconectada.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "image",
  //       link: AssetImageBlog.blog_10_1.src,
  //     },
  //     {
  //       type: "quote",
  //       text: "“Frecuentemente, los retrasos en los pagos de facturas entre empresas no se deben siempre a la imposibilidad de pagar, sino a la carencia de procesos integrados y digitalizados que permitan un manejo fluido y seguro de la información. Esto puede provocar un efecto dominó: desde la sobrecarga operativa hasta el deterioro de las relaciones comerciales”, comenta Giovanni Medrano Ríos, CEO de Sena.",
  //     },
  //     {
  //       type: "quote",
  //       text: "“Por ello, la visibilidad total del proceso, la capacidad de aprobar facturas de manera informada y la posibilidad de integrar todas las etapas de la cadena de pagos son factores críticos para cualquier compañía moderna”, añade.",
  //     },
  //     {
  //       type: "image",
  //       link: AssetImageBlog.blog_10_main.src,
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Aunque pocos casos escalan a instancias legales, existen consecuencias puntuales que las empresas deben tener en cuenta cuando no gestionan adecuadamente sus cuentas por pagar:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "- Sobrecarga de recursos y costos operativos: ",
  //         },
  //         {
  //           type: "text",
  //           text: "Manejar manualmente facturas y aprobaciones en distintas plataformas eleva el tiempo invertido, el riesgo de errores y fraudes.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         { type: "bold", text: "- Deterioro de la relación con proveedores:" },
  //         {
  //           type: "text",
  //           text: "Los retrasos continuados pueden debilitar la confianza y provocar condiciones de pago menos favorables en el futuro.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         { type: "bold", text: "- Riesgos legales o reputacionales: " },
  //         {
  //           type: "text",
  //           text: "En situaciones extremas de mora o incumplimiento, pueden surgir acciones judiciales, embargos o un impacto negativo en la imagen de la empresa.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         { type: "bold", text: "- Pérdida de visibilidad y control:" },
  //         {
  //           type: "text",
  //           text: "Sin un sistema que unifique la información, se vuelve complejo anticipar salidas de caja y coordinar pagos de manera oportuna.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Para contrarrestar estos problemas, la adopción de herramientas tecnológicas se vuelve imprescindible. Según el vocero de Sena, la mayoría de las compañías podrían revertir esta situación mediante:",
  //         },
  //       ],
  //     },

  //     {
  //       type: "paragraph",
  //       fragments: [
  //         { type: "bold", text: "1. Visibilidad integral de las facturas:  " },
  //         {
  //           type: "text",
  //           text: "Permitir a todas las áreas involucradas –desde Finanzas hasta Compras– acceder a la información en tiempo real para evitar fraudes, duplicidad de datos o confusiones.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         { type: "bold", text: "2. Aprobaciones rápidas y seguras: " },
  //         {
  //           type: "text",
  //           text: "Contar con flujos de aprobación digitales que reduzcan la burocracia sin sacrificar el control; cada responsable puede supervisar y validar pagos con confianza.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "3. Digitalización e integración de procesos: ",
  //         },
  //         {
  //           type: "text",
  //           text: "Agrupar en una sola plataforma las etapas de recepción, revisión, confirmación y pago de facturas, evitando la dispersión en múltiples sistemas.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         { type: "bold", text: "4. Alertas y recordatorios automáticos: " },
  //         {
  //           type: "text",
  //           text: "Mantener un sistema de seguimiento constante de los plazos de vencimiento y enviar notificaciones cuando sea necesario, contribuyendo a una mayor tasa de pago puntual.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 11,
    slug: slug("Sena nacio para transformar las finanzas de las empresas"),
    title: "¿Por qué Sena nació para transformar las finanzas de las empresas?",
    intro:
      "En Sena no solo creamos una herramienta financiera. Creamos una solución pensada en la realidad de quienes llevan adelante sus negocios todos los días. Nacimos con un propósito claro: ordenar, simplificar y dar control a las finanzas de las empresas que más lo necesitan.",
    date: "11 de junio 2025",
    author: "Fernanda Hurtado",
    tags: ["Sena", "Blog"],
    image: AssetImageBlog.blog_11_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En Sena no solo creamos una herramienta financiera. Creamos una solución pensada en la realidad de quienes llevan adelante sus negocios todos los días. Nacimos con un propósito claro: ",
          },
          {
            type: "bold",
            text: "ordenar, simplificar y dar control a las finanzas de las empresas que más lo necesitan.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [{ type: "bold", text: "El problema que nadie resolvía" }],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Durante años, las pymes y comerciantes han enfrentado los mismos retos:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "👉 Facturas que no se pagan a tiempo" },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 Cobranzas manuales, desordenadas y difíciles de rastrear",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "👉 Pagos que se olvidan o se acumulan" },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 Falta de información clara para tomar decisiones",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Y, sobre todo, una sensación constante de estar apagando incendios en lugar de construir con tranquilidad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "bold", text: "Escuchamos de cerca a comerciantes y pymes" },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena nació tras cientos de conversaciones con personas que día a día luchan por mantener su negocio a flote. Nos contaron lo difícil que es tener claridad sobre lo que entra y lo que sale, y cómo eso afecta todo: desde el crecimiento hasta el descanso mental.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Ese fue nuestro punto de partida: crear algo útil, simple y poderoso.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [{ type: "bold", text: "Pensado desde la operación real" }],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena fue diseñado para adaptarse al ritmo real de las empresas.",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Se conecta con herramientas que ya usan.",
          "Es fácil de implementar y de entender.",
          "Ofrece visibilidad en tiempo real del flujo de pagos.",
          "Reduce el desorden, elimina tareas repetitivas y permite planificar.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "En otras palabras: " },
          {
            type: "bold",
            text: "menos esfuerzo operativo, más control financiero.",
          },
        ],
      },
      {
        type: "image",
        link: AssetImageBlog.blog_11_main.src,
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "No es solo tecnología, es una nueva forma de trabajar",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cuando una empresa tiene claridad sobre sus pagos y cobranzas, todo cambia:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [{ type: "text", text: "✅ Se toman mejores decisiones" }],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "✅ Se gana tiempo para lo importante" },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "✅ Se deja atrás el caos y el estrés financiero",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena no es solo una plataforma. Es una nueva forma de relacionarse con el dinero que entra y sale del negocio.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "bold", text: "Lo que viene: más control, menos fricción" },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Seguimos construyendo junto a nuestros usuarios. Cada mejora que lanzamos nace de la experiencia real de quienes usan Sena todos los días.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "Porque creemos que " },
          {
            type: "bold",
            text: "las empresas no deberían perder dinero ni energía por falta de visibilidad o desorden.",
          },
        ],
      },
      //*! aca abajo no */
    ],
  },
  // {
  //   id: 12,
  //   slug: slug("que pasa con los acreedores cuando una empresa quiebra"),
  //   title:
  //     "¿Qué pasa con los acreedores cuando una empresa quiebra? Nuestra participación en Revista Economía?",
  //   intro:
  //     "Cuando una empresa atraviesa una crisis financiera y entra en quiebra, no solo se afecta su operación interna: los efectos se extienden a toda su cadena de valor. En especial, a los acreedores.",
  //   date: "24 de junio 2025",
  //   author: "Fernanda Hurtado",
  //   tags: ["Prensa"],
  //   image: AssetImageBlog.blog_12_main.src,
  //   content: [
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Cuando una empresa atraviesa una crisis financiera y entra en quiebra, no solo se afecta su operación interna: los efectos se extienden a toda su cadena de valor. En especial, a los acreedores. ",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         { type: "text", text: "En una reciente entrevista para  " },
  //         {
  //           type: "link",
  //           text: "Revista Economía",
  //           href: "https://www.revistaeconomia.com/quiebre-de-empresas-en-peru-como-repercute-en-los-acreedores-y-cadena-completa/",
  //         },
  //         {
  //           type: "text",
  //           text: " Giovanni Medrano Ríos, CEO de Sena, abordó las implicancias que tiene la quiebra de una empresa en la recuperación de pagos por parte de los acreedores y qué estrategias deben aplicarse para reducir el riesgo de incobrabilidad.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "🔍 ¿Qué sucede legalmente cuando una empresa quiebra?",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Según la Ley General del Sistema Concursal (Ley N° 27809), existen dos tipos de procedimientos:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         [
  //           {
  //             type: "bold",
  //             text: "Concurso ordinario",
  //           },
  //           {
  //             type: "text",
  //             text: ", cuando una empresa ya se encuentra en situación de insolvencia.",
  //           },
  //         ],
  //         [
  //           {
  //             type: "bold",
  //             text: "Concurso preventivo",
  //           },
  //           {
  //             type: "text",
  //             text: ", cuando prevé problemas financieros y busca llegar a acuerdos anticipados con sus acreedores.",
  //           },
  //         ],
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "En ambos casos, los acreedores deben suspender sus acciones individuales y canalizar sus reclamos a través del proceso concursal.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "image",
  //       link: AssetImageBlog.blog_12_main.src,
  //     },
  //     {
  //       type: "subtitle",
  //       text: "🛑 ¿Cómo anticiparse como acreedor?",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Giovanni Medrano explicó que antes de que una empresa llegue a la quiebra, suele haber señales claras:",
  //         },
  //       ],
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         [
  //           {
  //             type: "text",
  //             text: "Morosidades crecientes",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "Cambios bruscos en la administración",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "Pedidos inusuales de crédito o ampliación de plazos",
  //           },
  //         ],
  //         [
  //           {
  //             type: "text",
  //             text: "Falta de comunicación o transparencia financiera",
  //           },
  //         ],
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Detectar estas señales a tiempo puede marcar la diferencia entre recuperar tu dinero o perderlo completamente.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "✅ Recomendaciones clave de Sena para acreedores",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "1. Prevención desde antes de la venta",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Evalúa la solvencia del cliente, diversifica tu cartera, exige garantías y monitorea el comportamiento de pago.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "2. Reaccionar ante señales de alerta",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Ajusta las condiciones comerciales a tiempo: solicita pagos anticipados o reduce líneas de crédito.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "3. Formaliza siempre los acuerdos",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Antes de refinanciar o dar facilidades, asegúrate de comprender la situación del deudor y respáldate legalmente.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "4. Consulta con expertos",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "La asesoría profesional en cobranza puede evitar acuerdos perjudiciales y maximizar tus posibilidades de recuperación.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "subtitle",
  //       text: "📰 ¿Quieres leer el artículo completo?",
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Te invitamos a revisar la publicación original en ",
  //         },
  //         {
  //           type: "link",
  //           text: "Revista Economía",
  //           href: "https://www.revistaeconomia.com/quiebre-de-empresas-en-peru-como-repercute-en-los-acreedores-y-cadena-completa/",
  //         },
  //         {
  //           type: "text",
  //           text: ", donde compartimos nuestra visión sobre cómo proteger la salud financiera de tu negocio frente a la quiebra de clientes o aliados estratégicos.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 13,
    slug: slug(
      "retrasos en pagos: el drama silencioso que asfixia a las pymes peruanas",
    ),
    title:
      "Retrasos en pagos: el drama silencioso que asfixia a las pymes peruanas",
    intro:
      "Las pequeñas y medianas empresas (pymes) conforman más del 99% del tejido empresarial del Perú. Sin embargo, siguen siendo las principales víctimas de un problema crónico que rara vez se discute abiertamente: los retrasos en pagos.",
    date: "26 de junio 2025",
    author: "Fernanda Hurtado",
    tags: ["Prensa"],
    image: AssetImageBlog.blog_13_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Las pequeñas y medianas empresas (pymes) conforman más del 99% del tejido empresarial del Perú. Sin embargo, siguen siendo las principales víctimas de un problema crónico que rara vez se discute abiertamente:  ",
          },
          {
            type: "bold",
            text: "los retrasos en pagos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En sectores como construcción y comercio, la ",
          },
          {
            type: "bold",
            text: "morosidad supera el 13% y 8% respectivamente",
          },
          {
            type: "text",
            text: "según datos del Instituto de Economía y Desarrollo Empresarial (IEDEP) de la Cámara de Comercio de Lima. Pero más allá de las cifras, se esconde una realidad angustiante para miles de emprendedores que operan con liquidez limitada, alta incertidumbre y pagos vencidos que nunca llegan a tiempo.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "“Cobrar” no debería ser un tabú",
      },
      {
        type: "quote",
        text: "“Aunque legalmente el plazo de pago es de 30 días, muchas pymes reciben su dinero después de 60, 90 o incluso 120 días. Esto se da especialmente en sectores como construcción, donde el retraso ya es una norma no escrita. Las pequeñas empresas temen perder contratos si exigen sus pagos a tiempo. En Perú, hablar de cobranzas aún es visto como algo negativo”, comenta Juan Córdova, Subgerente de Venta B2B en Sena, en entrevista para PQS.pe.",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Este desequilibrio entre grandes clientes y proveedores más pequeños genera consecuencias devastadoras: ",
          },
          {
            type: "bold",
            text: "más de 100,000 pymes cierran cada año en Perú",
          },
          {
            type: "text",
            text: ", y hasta el 40% de estos cierres están vinculados a problemas de flujo de caja.",
          },
        ],
      },
      {
        type: "image",
        link: AssetImageBlog.blog_13_main.src,
      },
      {
        type: "subtitle",
        text: "¿Cómo cambiar esta realidad?",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Desde Sena, promovemos una nueva visión de la cobranza: ",
          },
          {
            type: "bold",
            text: "cobrar bien, a tiempo y sin conflicto",
          },
          {
            type: "text",
            text: ". Para ello, es fundamental:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Profesionalizar los procesos de cobro",
            },
          ],
          [
            {
              type: "bold",
              text: "Utilizar herramientas tecnológicas",
            },
            {
              type: "text",
              text: " que automaticen y gestionen la cobranza sin fricciones",
            },
          ],
          [
            {
              type: "bold",
              text: "Cambiar la mentalidad del emprendedor",
            },
            {
              type: "text",
              text: ": exigir el cumplimiento de pago no es agresivo, es saludable para el negocio",
            },
          ],
        ],
      },
      {
        type: "quote",
        text: "“Nuestra misión es romper el círculo vicioso que atrapa a las pymes y convertir la cobranza en una palanca de crecimiento, no en un obstáculo”, añade Córdova.",
      },
      {
        type: "subtitle",
        text: "🧾 ¿Y el marco legal?",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Aunque existen mecanismos como la cobranza judicial o coactiva, estos son procesos costosos, lentos y poco accesibles para una pyme. La tan mencionada ",
          },
          {
            type: "bold",
            text: "Ley de Pronto Pago",
          },
          {
            type: "text",
            text: ", similar a la implementada en Chile, aún sigue en discusión en Perú sin avances concretos.",
          },
        ],
      },
      {
        type: "quote",
        text: "“El Estado tiene la responsabilidad de establecer reglas claras, sancionar el incumplimiento de pagos y fomentar la digitalización. Y el sistema financiero también puede contribuir ofreciendo factoring accesible y justo”, concluye Córdova.",
      },
      {
        type: "subtitle",
        text: "📎 Lee la nota completa",
      },
      {
        type: "paragraph",
        fragments: [
          { type: "text", text: "Puedes acceder al artículo original en " },
          {
            type: "link",
            text: "PQS.pe",
            href: "https://pqs.pe/emprendimiento/retrasos-en-pagos-el-drama-silencioso-que-asfixia-a-las-pymes/",
          },
          {
            type: "text",
            text: ", donde profundizamos en cómo este problema silencioso sigue afectando a miles de negocios peruanos y qué medidas se pueden tomar desde el sector público y privado.",
          },
        ],
      },
    ],
  },
  {
    id: 14,
    slug: slug(
      "tu flujo de caja está amenazado por clientes morosos, automatizar tu proceso de cobranza puede ser la solución",
    ),
    title:
      "¿Tu flujo de caja está en riesgo? Descubre cómo reducir la morosidad con automatización inteligente",
    intro:
      "En las empresas B2B, el flujo de caja puede verse afectado incluso cuando las ventas van bien. ¿La razón? La morosidad silenciosa: clientes que postergan pagos, olvidan sus compromisos o simplemente no responden. Y mientras tanto, tu empresa sigue operando con ingresos pendientes que nunca llegan. Este desequilibrio se convierte en un cuello de botella para crecer, invertir y proyectar tu negocio con solidez.",
    date: "22 de julio 2025",
    author: "Antonella Hernandez",
    tags: ["Blog"],
    image: AssetImageBlog.blog_14_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En las empresas B2B, el flujo de caja puede verse afectado incluso cuando las ventas van bien. ¿La razón? La morosidad silenciosa: clientes que postergan pagos, olvidan sus compromisos o simplemente no responden. Y mientras tanto, tu empresa sigue operando con ingresos pendientes que nunca llegan. Este desequilibrio se convierte en un cuello de botella para crecer, invertir y proyectar tu negocio con solidez.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La pregunta clave es: ",
          },
          {
            type: "bold",
            text: "¿estás gestionando tus cuentas por cobrar de forma estratégica o reactiva?",
          },
          {
            type: "text",
            text: " Si aún dependes de Excel, recordatorios manuales o correos improvisados, tu sistema está fallando. Hoy, el diferencial competitivo está en la eficiencia, y eso significa automatizar. En Sena, ayudamos a empresas a digitalizar completamente su gestión de cuentas por cobrar, con recordatorios automáticos, trazabilidad en tiempo real y reportes que te permiten tomar decisiones con data, no con intuición.",
          },
        ],
      },
      {
        type: "image",
        link: AssetImageBlog.blog_14_main.src,
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Pero automatizar no solo es eficiencia. Es prevención. Las empresas que usan Sena han logrado reducir su morosidad hasta en un 35% en los primeros 90 días. ¿Cómo? Aplicando flujos inteligentes de comunicación vía WhatsApp, email o llamadas automáticas, activados según el comportamiento de pago de cada cliente. No todos pagan igual, y por eso no todos deberían recibir el mismo seguimiento.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Ahora bien, ¿qué pasa si tu cartera ya está vencida y sabes que tienes dinero por recuperar, pero no cuentas con el equipo ni los procesos para hacerlo? No necesitas construir un área de cobranzas desde cero. Para eso está ",
          },
          {
            type: "bold",
            text: "Recupera Plus",
          },
          {
            type: "text",
            text: ": nuestro servicio especializado en ",
          },
          {
            type: "bold",
            text: "recuperar deudas activas",
          },
          {
            type: "text",
            text: " de forma profesional, sin afectar la relación con tus clientes y sin que tú muevas un dedo. Nosotros lo hacemos por ti con procesos efectivos y éticos, enfocados en recuperar sin conflicto.",
          },
        ],
      },
      // {
      //     type: 'paragraph',
      //     fragments: [
      //         {
      //             type: 'text',
      //             text: '¿Quieres saber cuánto podrías estar dejando en la mesa? Usa nuestra ',
      //         },
      //         {
      //             type: 'bold',
      //             text: 'Calculadora de Recuperación',
      //         },
      //         {
      //             type: 'text',
      //             text: ' y descubre el potencial que podrías volver a inyectar a tu flujo de caja este mes.',
      //         },
      //     ],
      // },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Conclusión clara y potente:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 No necesitas más planillas, más excusas ni más meses con ingresos retenidos. Necesitas estructura, visibilidad y seguimiento. Automatiza tu cobranza con Sena, y empieza a recuperar lo que es tuyo.",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    slug: slug(
      "Descubre por qué tus clientes no pagan a tiempo, cómo eso afecta tu negocio y qué solución existe para recuperar el control ",
    ),
    title:
      "Clientes que no pagan a tiempo: causas, impacto y solución definitiva para empresas B2B",
    intro:
      "En todo negocio B2B existe un momento incómodo que se repite: un cliente no paga a tiempo. Y no hablamos de uno o dos días, sino semanas o incluso meses sin respuesta. El área de ventas se frustra, finanzas pierde visibilidad y dirección comienza a sentir la presión en la caja. Pero, ¿por qué ocurre esto con tanta frecuencia? Y más importante aún: ¿cómo puedes solucionarlo sin desgastar la relación comercial?",
    date: "24 de julio 2025",
    author: "Fernanda Hurtado",
    tags: ["Blog"],
    image: AssetImageBlog.blog_15_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En todo negocio B2B existe un momento incómodo que se repite: un cliente no paga a tiempo. Y no hablamos de uno o dos días, sino semanas o incluso meses sin respuesta. El área de ventas se frustra, finanzas pierde visibilidad y dirección comienza a sentir la presión en la caja. Pero, ¿por qué ocurre esto con tanta frecuencia? Y más importante aún: ¿cómo puedes solucionarlo sin desgastar la relación comercial?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Las verdaderas causas detrás de los impagos",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En Sena, después de analizar cientos de casos, identificamos que el impago no siempre es por falta de dinero. A menudo responde a tres causas principales:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "1. ",
          },
          {
            type: "bold",
            text: "Desorganización del cliente",
          },
          {
            type: "text",
            text: ": No tienen procesos internos claros, se les pasan los vencimientos, no priorizan los pagos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "2. ",
          },
          {
            type: "bold",
            text: "Falta de seguimiento por parte de la empresa",
          },
          {
            type: "text",
            text: ": Si no recuerdas, no cobras. Muchos negocios pierden dinero simplemente por no hacer seguimiento automatizado.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "3. ",
          },
          {
            type: "bold",
            text: "Falta de estructura en la cobranza",
          },
          {
            type: "text",
            text: ": Correo por aquí, una llamada por allá, pero sin trazabilidad ni estrategia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Estas causas, que parecen menores, se traducen en cientos de miles de soles retenidos cada año. Mientras tanto, tú sigues operando, pagando planilla y proveedores con dinero que aún no ha ingresado.",
          },
        ],
      },
      {
        type: "image",
        link: AssetImageBlog.blog_15_main.src,
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "El impacto financiero es más grande de lo que crees",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La morosidad no solo afecta tu flujo de caja. Tiene un efecto dominó en toda tu operación: retrasas pagos a proveedores, reduces inversiones, pierdes oportunidades comerciales y tu equipo pierde tiempo persiguiendo deudas en lugar de vender o innovar.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Por eso es clave tener una gestión robusta de cobranza desde el primer día. Si tu empresa aún gestiona sus cuentas por cobrar en Excel o de forma manual, estás expuesto a errores, olvidos y falta de seguimiento. Con Sena puedes automatizar recordatorios, visualizar todo el historial de cobranza y actuar con tiempo, no con urgencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Y si ya sabes que tienes clientes morosos, pero no tienes equipo para cobrar?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cuando ya tienes una cartera vencida y ningún área interna puede tomar acción —ya sea por falta de tiempo, recursos o experiencia— lo peor que puedes hacer es dejar que el problema crezca. En vez de eso, delega. Con ",
          },
          {
            type: "bold",
            text: "Recupera Plus",
          },
          {
            type: "text",
            text: ", nosotros recuperamos esa deuda por ti. Sin confrontaciones, sin procesos invasivos, y cuidando la relación comercial.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Recupera Plus es ideal para empresas que ya saben cuánto les deben, pero no tienen la estructura ni el tiempo para convertir eso en dinero en caja. Nuestro equipo profesional se encarga de todo, con tecnología, trazabilidad y comunicación efectiva.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Toma acción hoy: no normalices la morosidad",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cada día que pasa sin cobrar una deuda es dinero que podrías estar reinvirtiendo en tu empresa. La solución existe, y comienza por dejar atrás los procesos manuales. Automatiza tu cobranza, digitaliza tus cuentas por cobrar y, si ya estás en una etapa avanzada del problema, actívalo con Recupera Plus.",
          },
        ],
      },
      // {
      //     type: 'paragraph',
      //     fragments: [
      //         {
      //             type: 'text',
      //             text: 'Usa también nuestra Calculadora de Recuperación para estimar cuánto podrías recuperar este mes. Elige dejar de perder.',
      //         },
      //     ],
      // },
    ],
  },
  {
    id: 16,
    slug: slug(
      "La educación financiera en empresas B2B es clave para cobrar mejor y crecer con estabilidad",
    ),
    title:
      "Educación financiera para empresas B2B: el primer paso para cobrar mejor y crecer con estabilidad",
    intro:
      "En el mundo de los negocios B2B, el éxito no depende únicamente de vender más. Depende de cobrar mejor. Y para lograrlo, el primer paso no está en contratar a un equipo más grande ni en perseguir a los clientes, sino en algo mucho más profundo: educación financiera.",
    date: "01 de agosto 2025",
    author: "Antonella Hernandez",
    tags: ["Blog"],
    image: AssetImageBlog.blog_16_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En el mundo de los negocios B2B, el éxito no depende únicamente de vender más. Depende de cobrar mejor. Y para lograrlo, el primer paso no está en contratar a un equipo más grande ni en perseguir a los clientes, sino en algo mucho más profundo: ",
          },
          {
            type: "bold",
            text: "educación financiera",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cuando una empresa entiende cómo fluye su dinero, cómo se comportan sus cuentas por cobrar y qué tan eficiente es su sistema de cobranza, comienza a operar con una nueva mentalidad. Ya no se trata de sobrevivir mes a mes esperando que el cliente pague, sino de proyectar el crecimiento con base en data, procesos y control. Esa es la diferencia entre una empresa reactiva y una financieramente saludable.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Uno de los errores más comunes que encontramos en empresas que facturan bien, pero tienen problemas de liquidez, es la falta de estructura en el seguimiento de cobranzas. ¿Te suena familiar?: recordatorios manuales, Excel compartidos entre áreas, correos sin respuesta, pagos que se caen entre los cracks. No es casualidad que el dinero no llegue: ",
          },
          {
            type: "bold",
            text: "es el sistema el que está roto.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Por eso, el punto de partida para fortalecer la salud financiera de tu negocio es profesionalizar tu proceso de cobranza. Y eso comienza por digitalizar tu gestión de cuentas por cobrar. Esto no es solo implementar un software, es un cambio de enfoque: automatizar recordatorios, integrar canales de contacto (como WhatsApp, email o llamadas programadas), generar reportes de riesgo por cliente y tener visibilidad total de tu cartera en tiempo real.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Una empresa que domina sus cuentas por cobrar no solo recupera más rápido su dinero, sino que puede planificar con más seguridad, invertir con más precisión y operar con menos estrés. Porque no se trata solo de cobrar por cobrar. Se trata de ordenar las finanzas de tu empresa desde la raíz.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Además, digitalizar tu cobranza no significa perder el toque humano. Todo lo contrario: al automatizar tareas operativas, liberas a tu equipo para que pueda enfocarse en relaciones estratégicas y resolución de casos complejos. Mientras la tecnología trabaja por ti, tu equipo toma decisiones con información clara y actualizada.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Conclusión",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La educación financiera no es solo teoría contable. Es tomar decisiones reales que impactan tu rentabilidad. Si aún estás gestionando tu cobranza con métodos improvisados, estás dejando pasar oportunidades valiosas. Empieza por lo esencial: ordena tu flujo, entiende tu cartera y actúa con visión.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena puede ayudarte a digitalizar y profesionalizar tu gestión de cuentas por cobrar, sin fricciones, sin complicaciones, y con resultados visibles en semanas.",
          },
        ],
      },
    ],
  },
  {
    id: 17,
    slug: slug(
      "Profesionalizar tu cobranza no significa ser agresivo. Descubre cómo digitalizar tu proceso y recuperar tus cuentas vencidas",
    ),
    title:
      "Cómo profesionalizar tu cobranza sin perder clientes: estrategias probadas para empresas B2B",
    intro:
      "Muchas empresas temen profesionalizar su proceso de cobranza por miedo a “espantar” a sus clientes. La realidad es todo lo contrario: un proceso profesional transmite orden, seriedad y respeto. No hay nada más dañino que perseguir a un cliente sin estructura, sin consistencia y sin tacto. Eso es lo que realmente deteriora relaciones.",
    date: "04 de agosto 2025",
    author: "Fernanda Hurtado",
    tags: ["Blog"],
    image: AssetImageBlog.blog_17_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Muchas empresas temen profesionalizar su proceso de cobranza por miedo a “espantar” a sus clientes. La realidad es todo lo contrario: un proceso profesional transmite orden, seriedad y respeto. No hay nada más dañino que perseguir a un cliente sin estructura, sin consistencia y sin tacto. Eso es lo que realmente deteriora relaciones.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En el mundo B2B, cobrar de forma efectiva ",
          },
          {
            type: "bold",
            text: "no se trata de insistir más, sino de hacerlo mejor",
          },
          {
            type: "text",
            text: ". Y para lograrlo, necesitas aplicar dos enfoques clave en el momento correcto: digitalizar tus ",
          },
          {
            type: "bold",
            text: "cuentas por cobrar",
          },
          {
            type: "text",
            text: " para hacer seguimiento automatizado, y escalar a un servicio de recuperación especializada como ",
          },
          {
            type: "bold",
            text: "Recupera Plus",
          },
          {
            type: "text",
            text: " cuando ya tienes deudas activas que no logras resolver por tu cuenta.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Paso 1: Digitaliza tu cobranza antes de que el problema escale",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Si tu empresa todavía depende de hojas de Excel para controlar las cobranzas, estás a un paso del caos. A medida que crece tu base de clientes, aumenta también el riesgo de olvido, duplicidad o errores humanos. El primer gran paso para profesionalizar tu proceso es implementar un sistema que te brinde trazabilidad, alertas automatizadas y seguimiento inteligente.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Con Sena, puedes digitalizar tu gestión de cuentas por cobrar, automatizando recordatorios por WhatsApp, correo o llamada, generando reportes de riesgo por cliente y organizando todo el proceso en una sola plataforma. Así, reduces la morosidad sin esfuerzo operativo, y mantienes la relación comercial intacta, porque el cliente se siente acompañado, no presionado.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Además, cuando tu equipo de finanzas trabaja con visibilidad y control, puede tomar decisiones más estratégicas: segmentar clientes según comportamiento de pago, priorizar acciones y anticiparse a escenarios de riesgo.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Paso 2: Si la deuda ya existe, actúa sin perder tiempo",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Ahora bien, hay otro escenario común: empresas que ya tienen ",
          },
          {
            type: "bold",
            text: "cartera vencida",
          },
          {
            type: "text",
            text: ", saben que sus clientes les deben, pero no cuentan con el equipo, tiempo ni procesos para recuperar ese dinero. Aquí ya no basta con enviar recordatorios: se necesita una acción más estructurada.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Para estos casos, Sena ofrece ",
          },
          {
            type: "bold",
            text: "Recupera Plus",
          },
          {
            type: "text",
            text: ", un servicio diseñado específicamente para ",
          },
          {
            type: "bold",
            text: "empresas que ya identificaron su deuda activa",
          },
          {
            type: "text",
            text: ", pero necesitan apoyo externo para cobrar. Nosotros asumimos el proceso completo, con comunicaciones profesionales, protocolos éticos y trazabilidad de cada contacto, para que tú puedas recuperar el dinero sin desgastar tu operación ni poner en riesgo la relación comercial.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "No se trata de una cobranza invasiva ni agresiva. Es una recuperación bien hecha, desde la empatía, la tecnología y la experiencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Qué logras al profesionalizar tu cobranza?",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Reduces tu morosidad sin desgastar relaciones.",
          "Ordenas tu flujo de caja y proyectas con más certeza.",
          "Libertas a tu equipo financiero de tareas operativas improductivas.",
          "Cuidas tu marca, tu reputación y tu base de clientes.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Conclusión",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Profesionalizar tu proceso de cobranza no solo te permite cobrar más rápido, sino mejor. Ya sea implementando un sistema automatizado para tus cuentas por cobrar o activando un plan de recuperación con Recupera Plus, el objetivo es el mismo: ",
          },
          {
            type: "bold",
            text: "recuperar tu dinero sin perder a tus clientes.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "No sigas normalizando los pagos vencidos. Elige eficiencia, elige orden, elige Sena.",
          },
        ],
      },
    ],
  },
  {
    id: 18,
    slug: "si-no-haces-seguimiento-no-cobras-como-Sena-profesionaliza-el-seguimiento-y-recupera-tu-dinero",
    title:
      "Si no haces seguimiento, no cobras: cómo Sena profesionaliza el seguimiento y recupera tu dinero",
    intro:
      "Hiciste el cálculo. Ahora sabes cuánto dinero tienes atrapado en tu cartera vencida. ¿Y ahora qué?\n\nEl mayor error que cometen las empresas con deudas activas no es no saber cuánto les deben —ese paso ya lo diste—, sino **no hacer seguimiento constante, estratégico y profesional para recuperar ese dinero**. No basta con una llamada. No basta con reenviar la factura. Si no hay estructura, el cliente posterga, ignora… y tú sigues perdiendo.",
    date: "07 de agosto 2025",
    author: "Antonella Hernandez",
    tags: ["Blog"],
    image: AssetImageBlog.blog_18_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Hiciste el cálculo. Ahora sabes cuánto dinero tienes atrapado en tu cartera vencida. ¿Y ahora qué?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El mayor error que cometen las empresas con deudas activas no es no saber cuánto les deben —ese paso ya lo diste—, sino ",
          },
          {
            type: "bold",
            text: "no hacer seguimiento constante, estratégico y profesional para recuperar ese dinero",
          },
          {
            type: "text",
            text: ". No basta con una llamada. No basta con reenviar la factura. Si no hay estructura, el cliente posterga, ignora… y tú sigues perdiendo.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "El seguimiento es el corazón de toda recuperación efectiva",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Hacer seguimiento no es perseguir. Es tener un ",
          },
          {
            type: "bold",
            text: "sistema estructurado",
          },
          {
            type: "text",
            text: ", donde cada cliente moroso reciba comunicaciones oportunas, por el canal adecuado, con el mensaje correcto y la frecuencia ideal. Suena simple, pero requiere tiempo, estrategia y experiencia. Por eso muchas empresas, incluso sabiendo que tienen deudas por recuperar, no logran hacerlo solas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Ahí es donde entra ",
          },
          {
            type: "bold",
            text: "Recupera Plus",
          },
          {
            type: "text",
            text: ": nuestro servicio especializado en ",
          },
          {
            type: "bold",
            text: "recuperación de deudas activas",
          },
          {
            type: "text",
            text: ", diseñado para empresas que no tienen un equipo interno de cobranza ni procesos profesionales para gestionarlo.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Cómo lo hacemos?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Con Recupera Plus, Sena se encarga de todo el seguimiento por ti. Diseñamos flujos inteligentes que combinan llamadas, emails y WhatsApps según el comportamiento del cliente. Cada acción queda registrada, cada avance se reporta, y tú tienes visibilidad completa del proceso. Nuestro enfoque es ético, profesional y centrado en resultados.",
          },
        ],
      },
      {
        type: "image",
        link: AssetImageBlog.blog_18_main.src,
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Recuperamos sin fricciones, sin amenazas y sin poner en riesgo la relación comercial. Porque entendemos que detrás de cada cliente hay una oportunidad de negocio… pero también una obligación pendiente.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Qué pasa si no haces nada?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Lo que pasa todos los meses: ese dinero sigue fuera de tu caja. Mientras tú te enfocas en operar, vender y pagar tus propias obligaciones, estás financiando a clientes que simplemente no respondieron a tiempo… y a los que nadie les volvió a escribir.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "El seguimiento lo es todo. Y si tú no lo haces, nadie lo hará por ti.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Conclusión: haz que ese número se convierta en recuperación real",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Deja que Sena se encargue del seguimiento profesional y empieza a recuperar lo que ya sabes que te pertenece.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 Solicita una evaluación gratuita de tu cartera y conoce cómo podemos ayudarte a cobrar sin tener que perseguir a nadie.",
          },
        ],
      },
    ],
  },
  // {
  //   id: 19,
  //   slug: "descubre-cuanton-dinero-estas-dejando-en-la-mesa-por-no-cobrar-tus-deudas-activas",
  //   title:
  //     "¿Sabes cuánto dinero podrías recuperar este mes? Conoce la nueva Calculadora Sena Recupera",
  //   intro:
  //     "Si sabes que te deben, pero no sabes cuánto podrías recuperar ni cómo empezar… no estás solo. Muchas empresas enfrentan este mismo escenario: tienen una cartera vencida, saben que hay dinero pendiente, pero no tienen visibilidad, estrategia ni recursos para hacer algo al respecto. Mientras tanto, ese capital sigue estancado, afectando el flujo de caja, frenando inversiones y desgastando al equipo.",
  //   date: "14 de agosto 2025",
  //   author: "Antonella Hernandez",
  //   tags: ["Blog"],
  //   image: AssetImageBlog.blog_19_main.src,
  //   content: [
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Si sabes que te deben, pero no sabes cuánto podrías recuperar ni cómo empezar… no estás solo. Muchas empresas enfrentan este mismo escenario: tienen una ",
  //         },
  //         {
  //           type: "bold",
  //           text: "cartera vencida",
  //         },
  //         {
  //           type: "text",
  //           text: ", saben que hay dinero pendiente, pero no tienen visibilidad, estrategia ni recursos para hacer algo al respecto. Mientras tanto, ese capital sigue estancado, afectando el flujo de caja, frenando inversiones y desgastando al equipo.",
  //         },
  //       ],
  //     },
  // {
  //   type: "paragraph",
  //   fragments: [
  //     {
  //       type: "text",
  //       text: "Para cambiar esta realidad, creamos la ",
  //     },
  //     {
  //       type: "link",
  //       text: "Calculadora Sena Recupera",
  //       href: "https://sena.com/calculadora/steps",
  //     },
  //     {
  //       type: "text",
  //       text: ": una herramienta gratuita, rápida y precisa que te permite estimar cuánta plata podrías recuperar en el corto plazo. Solo necesitas ingresar dos datos: el total de deuda y el número de clientes morosos. El sistema te dará una proyección clara, basada en métricas reales de recuperación.",
  //     },
  //   ],
  // },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "¿Por qué es tan importante saber tu potencial de recuperación?",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Porque lo que no se ve, no se gestiona. Si no tienes claridad sobre lo que puedes recuperar, lo más probable es que sigas postergando decisiones importantes: contratar un equipo, tercerizar la cobranza, o simplemente tomar acción. El resultado es el mismo: el tiempo sigue pasando, y la deuda sigue creciendo.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Con nuestra calculadora, el problema toma forma. Ya no es una sensación, es un número. Y con ese número en la mano, puedes decidir si estás dispuesto a dejarlo ir... o a recuperarlo con ayuda de expertos.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "¿Y qué pasa si no tienes un equipo de cobranza?",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Ahí entra nuestro servicio ",
  //         },
  //         {
  //           type: "link",
  //           text: "Recupera Plus",
  //           href: "",
  //         },
  //         {
  //           type: "text",
  //           text: ". Está diseñado específicamente para ",
  //         },
  //         {
  //           type: "bold",
  //           text: "empresas que ya identificaron una deuda activa, pero no cuentan con procesos avanzados ni equipo especializado para cobrar",
  //         },
  //         {
  //           type: "text",
  //           text: ".",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "Con Recupera Plus, Sena se convierte en tu equipo de cobranza externalizado. Aplicamos flujos efectivos de recuperación, sin agredir la relación comercial, con trazabilidad total y comunicaciones éticas. Tú solo tienes que compartir tu cartera vencida y nosotros nos encargamos del resto. Sin contratar personal adicional. Sin implementar herramientas complejas. Sin fricción.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "Una decisión simple, un impacto directo",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "text",
  //           text: "La mayoría de empresas que usan nuestra calculadora descubren que tienen entre ",
  //         },
  //         {
  //           type: "bold",
  //           text: "S/20,000 y S/80,000 retenidos",
  //         },
  //         {
  //           type: "text",
  //           text: " que podrían volver a su caja en pocas semanas. Y una vez que toman acción, ese dinero se convierte en inversión, liquidez y crecimiento.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "paragraph",
  //       fragments: [
  //         {
  //           type: "bold",
  //           text: "¿Cuánto podrías recuperar tú?",
  //         },
  //       ],
  //     },
  // {
  //   type: "paragraph",
  //   fragments: [
  //     {
  //       type: "text",
  //       text: "Haz la prueba ahora con la ",
  //     },
  //     {
  //       type: "link",
  //       text: "Calculadora Sena Recupera",
  //       href: "https://sena.com/recuperacion-de-deudas",
  //     },
  //     {
  //       type: "text",
  //       text: ". Solo te tomará 30 segundos.",
  //     },
  //   ],
  // },
  //   ],
  // },
  {
    id: 20,
    slug: "descubre-como-salir-de-infocorp-consultar-tus-deudas-y-limpiar-tu-historial-financiero-para-recuperar-acceso-a-credito",
    title: "¿Cómo salir de Infocorp y limpiar tu historial crediticio? ",
    intro:
      "Estar en Infocorp representa una de las mayores preocupaciones para personas y pymes que buscan acceder a créditos, financiamiento o cerrar contratos importantes. Un historial negativo puede convertirse en un obstáculo significativo, pero no es permanente. Con los pasos adecuados, es posible salir de Infocorp, limpiar tu historial crediticio y recuperar la confianza financiera. En este artículo explicaremos cómo funciona este sistema, qué acciones tomar y qué alternativas existen para evitar reincidencias.",
    date: "17 de septiembre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog"],
    image: AssetImageBlog.blog_20_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Estar en Infocorp representa una de las mayores preocupaciones para personas y pymes que buscan acceder a créditos, financiamiento o cerrar contratos importantes. Un historial negativo puede convertirse en un obstáculo significativo, pero no es permanente. Con los pasos adecuados, es posible salir de Infocorp, limpiar tu historial crediticio y recuperar la confianza financiera. En este artículo explicaremos cómo funciona este sistema, qué acciones tomar y qué alternativas existen para evitar reincidencias.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "¿Qué significa estar en Infocorp y por qué afecta tu crédito?",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Infocorp es una central de riesgo que opera en Perú y pertenece a Equifax. Es el nombre más conocido en ese país para referirse al registro de deudas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En otros países de Latinoamérica existen sistemas similares, pero con distintos nombres:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Chile → DICOM (Equifax Chile).",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Colombia → Datacrédito y TransUnion.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "México → Buró de Crédito y Círculo de Crédito.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Argentina → Veraz (Equifax Argentina).",
          },
        ],
      },
      {
        type: "subtitle",
        text: "👉 Entonces, cuando hablamos de “Infocorp” nos referimos específicamente al contexto peruano.",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Estar en Infocorp no siempre implica que seas un mal pagador, pero sí indica que existe información financiera relevante sobre ti o tu empresa. Infocorp, gestionado en Perú por ",
          },
          {
            type: "bold",
            text: "Equifax",
          },
          {
            type: "text",
            text: ", es una central de riesgo que recopila datos de deudas vencidas y obligaciones financieras de personas y compañías.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cuando apareces en este registro, tu reputación crediticia se ve comprometida. Para los bancos, proveedores o inversionistas, tu nombre en Infocorp puede ser interpretado como una alerta de riesgo. Esto puede traducirse en dificultades para obtener préstamos, líneas de crédito, leasing u otros productos financieros.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Además, muchas empresas B2B también consultan Infocorp antes de cerrar contratos. Si tienes una pyme y estás reportado, el acceso a nuevos clientes o socios podría verse afectado.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Cómo saber si tienes deuda en Infocorp",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El primer paso para mejorar tu situación es ",
          },
          {
            type: "bold",
            text: "verificar si realmente tienes deudas registradas",
          },
          {
            type: "text",
            text: ". Mucha gente ni siquiera sabe que está reportada hasta que un banco le niega un préstamo.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Para consultar tu estado en Infocorp:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "1. ",
          },
          {
            type: "bold",
            text: "Solicita tu reporte online en Equifax",
          },
          {
            type: "text",
            text: ": la plataforma ofrece versiones gratuitas y de pago con más detalle.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "2. ",
          },
          {
            type: "bold",
            text: "Consulta en la SBS (Superintendencia de Banca, Seguros y AFP)",
          },
          {
            type: "text",
            text: ": permite acceder a tu reporte crediticio consolidado.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "3. ",
          },
          {
            type: "bold",
            text: "Usa plataformas autorizadas",
          },
          {
            type: "text",
            text: ": existen servicios digitales que ofrecen reportes integrados de deudas y pagos atrasados.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Saber ",
          },
          {
            type: "bold",
            text: "cómo identificar si tienes deuda en Infocorp",
          },
          {
            type: "text",
            text: " es clave, porque solo con esa información podrás planear una estrategia de salida.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Pasos prácticos para salir de Infocorp",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Salir de Infocorp no ocurre de la noche a la mañana, pero con un plan ordenado sí es totalmente alcanzable.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "1. ",
          },
          {
            type: "bold",
            text: "Identifica las deudas vigentes",
          },
          {
            type: "text",
            text: ": revisa cada obligación y define cuáles están vencidas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "2. ",
          },
          {
            type: "bold",
            text: "Negocia o paga la deuda",
          },
          {
            type: "text",
            text: ": si puedes pagar, hazlo lo antes posible. Si no, acércate al acreedor para refinanciar o reestructurar.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "3. ",
          },
          {
            type: "bold",
            text: "Solicita constancia de pago",
          },
          {
            type: "text",
            text: ": cada vez que liquides una deuda, pide un documento que lo respalde.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "4. ",
          },
          {
            type: "bold",
            text: "Haz seguimiento a la actualización",
          },
          {
            type: "text",
            text: ": las entidades actualizan sus reportes periódicamente, pero conviene confirmar que tu historial quede limpio.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "5. ",
          },
          {
            type: "bold",
            text: "Mantén comunicación constante",
          },
          {
            type: "text",
            text: ": si hay errores o deudas ya canceladas que siguen apareciendo, reclama directamente a Infocorp o a la SBS.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Estrategias para limpiar tu historial crediticio",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La paciencia es importante, pero también existen ",
          },
          {
            type: "bold",
            text: "acciones que aceleran el proceso",
          },
          {
            type: "text",
            text: ":",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Presentar la constancia de pago directamente en Infocorp para que el registro se actualice con mayor rapidez.",
          "Solicitar a la entidad financiera que comunique el levantamiento de la deuda en el menor plazo posible.",
          "Revisar periódicamente tu historial crediticio para confirmar que la información sea correcta.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Además, no olvides que tu historial no solo se compone de deudas impagas: tener servicios o créditos en curso que pagues puntualmente ayuda a mejorar tu score y a demostrar que eres un cliente confiable.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Cómo evitar volver a caer en Infocorp",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Salir de Infocorp es un alivio, pero nadie quiere repetir la experiencia. Para mantener tu historial limpio, tanto a nivel personal como empresarial, conviene adoptar ciertas prácticas:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Llevar un control de tus obligaciones",
            },
            {
              type: "text",
              text: ": usa un calendario o recordatorios automáticos.",
            },
          ],
          [
            {
              type: "bold",
              text: "Separar las finanzas personales de las del negocio",
            },
            {
              type: "text",
              text: ": mezclar cuentas suele generar desorden.",
            },
          ],
          [
            {
              type: "bold",
              text: "No depender del Excel y WhatsApp",
            },
            {
              type: "text",
              text: ": si manejas una pyme, estos métodos se vuelven insuficientes con el tiempo.",
            },
          ],
          [
            {
              type: "bold",
              text: "Implementar un sistema de cobranza profesional:",
            },
            {
              type: "text",
              text: " evita retrasos y falta de liquidez en tu empresa.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Aquí es donde soluciones como ",
          },
          {
            type: "link",
            text: "Sena",
            href: "https://somossena.com/",
          },
          {
            type: "text",
            text: " marcan la diferencia. Esta plataforma SaaS permite:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Automatizar recordatorios de cobro y pagos.",
          "Centralizar comunicaciones en un solo dashboard.",
          "Monitorear indicadores como DSO o antigüedad de cartera en tiempo real.",
          "Reducir la carga operativa del equipo financiero con flujos inteligentes.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El resultado es simple: más liquidez, menos morosidad y menor riesgo de volver a ser reportado en Infocorp.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Caso práctico: una pyme que salió de Infocorp",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Imagina una empresa de servicios logísticos con más de 300 facturas al mes. Durante años manejó la cobranza con hojas de Excel y mensajes por WhatsApp. Poco a poco, la falta de control la llevó a acumular clientes morosos y deudas propias, hasta terminar en Infocorp.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "link",
            text: "Al implementar Sena",
            href: "",
          },
          {
            type: "text",
            text: ", logró:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "text",
              text: "Reducir en un 33% el ",
            },
            {
              type: "bold",
              text: "DSO (Days Sales Outstanding)",
            },
            {
              type: "text",
              text: ".",
            },
          ],
          "Recuperar flujo de caja perdido con recordatorios automáticos y segmentados.",
          "Evitar que nuevas facturas se atrasaran gracias a notificaciones preventivas.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En menos de seis meses, la pyme salió de Infocorp y recuperó su capacidad de financiamiento.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Recursos útiles para consultar y mantener tu historial limpio",
      },
      {
        type: "list",
        items: [
          "Superintendencia de Banca, Seguros y AFP (SBS) – Perú",
          "Infocorp Equifax",
          "Recuperación de créditos MYPE – Ministerio de Producción",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Estos portales ofrecen información oficial para revisar tu historial y conocer programas de apoyo financiero.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Reflexión final",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Estar en Infocorp no es el fin del mundo, pero sí una señal de alerta. Salir requiere disciplina y acción: consulta tu estado, negocia tus deudas, solicita constancias y mantén un seguimiento constante.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Lo más importante, sin embargo, es prevenir. Con una gestión financiera ordenada y herramientas profesionales como Sena, no solo puedes limpiar tu historial, sino también evitar volver a caer.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres que tu pyme crezca sin preocuparse por la morosidad? ",
          },
          {
            type: "link",
            text: "Descubre cómo Sena puede ayudarte a tener liquidez sin fricciones",
            href: "https://somossena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    id: 21,
    slug: "mejora-el-score-crediticio-de-tu-pyme-en-90-dias-con-estas-tacticas-efectivas-y-accede-a-mejores-oportunidades-financieras",
    title: "Score crediticio para pymes: 7 tácticas para subirlo en 90 días",
    intro:
      "El score crediticio se ha convertido en una de las métricas más influyentes a la hora de evaluar la solidez financiera de una empresa. Para una pyme, un puntaje bajo puede significar el cierre de puertas a nuevas oportunidades de crédito, proveedores desconfiados o incluso mayores tasas de interés. Sin embargo, mejorar este indicador no es una tarea imposible. Con disciplina, estrategia y acciones enfocadas, es posible subir el score crediticio de una pyme en tan solo 90 días.",
    date: "19 de septiembre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog"],
    image: AssetImageBlog.blog_21_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El score crediticio se ha convertido en una de las métricas más influyentes a la hora de evaluar la solidez financiera de una empresa. Para una pyme, un puntaje bajo puede significar el cierre de puertas a nuevas oportunidades de crédito, proveedores desconfiados o incluso mayores tasas de interés. Sin embargo, mejorar este indicador no es una tarea imposible. Con disciplina, estrategia y acciones enfocadas, es posible subir el score crediticio de una pyme en tan solo 90 días.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En este artículo se presentan siete tácticas prácticas para lograrlo.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "¿Qué es el score crediticio de una pyme y por qué importa?",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El score crediticio es una calificación que refleja el nivel de riesgo de una empresa. Se calcula con base en el historial de pagos, la cantidad de obligaciones vigentes y la capacidad de respuesta financiera.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En la práctica, este puntaje es consultado por bancos antes de otorgar préstamos, por proveedores al definir plazos de pago y hasta por aliados estratégicos antes de firmar un contrato. Un score bajo se interpreta como una alerta de incumplimiento, mientras que un score alto abre puertas a mejores condiciones de financiamiento y confianza comercial.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Diagnóstico inicial: conoce tu puntaje actual",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Antes de mejorar tu puntaje, es indispensable saber en qué punto estás. Para ello puedes:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Solicitar un reporte crediticio empresarial en centrales de riesgo como Equifax o TransUnion.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Revisar en la Superintendencia de Banca, Seguros y AFP (SBS) si operas en Perú.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Consultar con tu banco o institución financiera si ofrecen evaluaciones internas de tu empresa.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Este diagnóstico no solo muestra tu score actual, también detalla deudas vencidas, antigüedad de la cartera y patrones de pago. Con esta información, podrás definir prioridades claras.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "7 tácticas para mejorar el score crediticio en 90 días",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "1. Paga tus facturas y créditos a tiempo",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El factor que más pesa en la evaluación crediticia es la puntualidad de los pagos. Una factura vencida, aunque sea pequeña, puede arrastrar tu score hacia abajo. Programa alertas o automatiza recordatorios para evitar retrasos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "2. Renegocia deudas vencidas y busca acuerdos formales",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Si tu empresa atraviesa problemas de liquidez, no ignores la deuda. Contacta a la entidad acreedora y plantea una reestructuración. Los acuerdos de pago reflejados en el historial son mejor vistos que los impagos prolongados.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "3. Evita sobregirar tus líneas de crédito",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Tener acceso a financiamiento no significa usarlo al 100%. Lo ideal es mantener el uso de líneas de crédito por debajo del 50%. Esto muestra control y reduce el nivel de riesgo percibido por bancos y proveedores.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "link",
            text: "4. Centraliza tu gestión financiera",
            href: "",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El desorden es un enemigo silencioso. Muchas pymes dependen de Excel y WhatsApp para controlar pagos y cobranzas, lo cual genera errores. Implementar un ERP o una plataforma de cobranza inteligente permite tener una visión clara y ordenada de todas las cuentas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "5. Separa cuentas personales de las empresariales",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Uno de los errores más comunes es mezclar ingresos del negocio con gastos personales. Esta práctica distorsiona el flujo de caja y genera retrasos en pagos empresariales. Abrir cuentas exclusivas para la pyme aporta claridad y transparencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "6. Diversifica tus fuentes de financiamiento",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Depender de un solo banco o proveedor puede ser riesgoso. Abrir líneas de crédito en distintas instituciones muestra estabilidad y fortalece tu reputación financiera. Además, te da mayor flexibilidad para enfrentar imprevistos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "link",
            text: "7. Usa herramientas de cobranza como Sena",
            href: "http://www.somossena.com",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La liquidez depende en gran medida de que tus clientes paguen a tiempo. Con Sena, puedes:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Automatizar recordatorios de pago por correo, SMS o WhatsApp.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Segmentar clientes según nivel de morosidad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Obtener un dashboard en tiempo real con indicadores como DSO y antigüedad de cartera.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Reducir tareas manuales que consumen tiempo y aumentan el riesgo de errores.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un flujo de caja estable gracias a una gestión de cobranza profesional impacta directamente en la mejora del score crediticio.",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Cómo la cobranza impacta en tu historial financiero",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Muchas pymes creen que el score crediticio solo depende de pagar préstamos bancarios. En realidad, el puntaje refleja la salud financiera integral de la empresa, y la cobranza juega un rol clave.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un mal manejo de cuentas por cobrar provoca atrasos en el pago de proveedores, sobregiros y deudas acumuladas. Todo esto afecta el score. En cambio, cuando el flujo de caja es estable gracias a recordatorios automáticos y segmentación de clientes, la empresa gana liquidez y puede cumplir puntualmente con sus obligaciones.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Ejemplo real: Una pyme de servicios de consultoría redujo en 30% su DSO (días promedio de cobranza) al implementar Sena. En tres meses, pasó de un score “riesgoso” a “aceptable” y obtuvo la aprobación de una nueva línea de crédito para expandirse.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Recursos adicionales para monitorear tu score",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Equifax – Reportes crediticios",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Superintendencia de Banca, Seguros y AFP (SBS) – Perú",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "TransUnion – Informes empresariales",
          },
        ],
      },
      {
        type: "subtitle",
        text: "Consultar periódicamente tu score ayuda a detectar problemas antes de que se conviertan en obstáculos para el crecimiento.",
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El score crediticio pymes no es estático, puede mejorar rápidamente con disciplina y estrategias claras. Pagar puntualmente, renegociar deudas, mantener un control financiero ordenado y usar herramientas de cobranza profesional son pasos que marcan la diferencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Recuerda: tu score es el espejo de la salud de tu empresa. Un buen puntaje abre puertas a crédito, confianza y crecimiento sostenido.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres mejorar tu score crediticio y fortalecer el flujo de caja de tu pyme? ",
          },
          {
            type: "link",
            text: "Descubre cómo Sena puede ayudarte a crecer sin fricciones",
            href: "https://somossena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    id: 22,
    slug: "calcular-roi-en-15-minutos-descubre-cuanto-ahorras-al-automatizar-tu-cobranza",
    title:
      "Calcular ROI en 15 minutos: descubre cuánto ahorras al automatizar tu cobranza ",
    intro:
      "¿Vale la pena pagar por un software de cobranza? La mejor forma de responder no es con percepciones, sino con datos. En este artículo aprenderás a calcular ROI en solo 15 minutos y a descubrir cómo la automatización de procesos transforma la cobranza en un motor de ahorro y eficiencia.",
    date: "07 de octubre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog", "Visión Financiera", "Educación Financiera"],
    image: AssetImageBlog.blog_22_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "¿Vale la pena pagar por un software de cobranza? La mejor forma de responder no es con percepciones, sino con datos. En este artículo aprenderás a calcular ROI en solo 15 minutos y a descubrir cómo la automatización de procesos transforma la cobranza en un motor de ahorro y eficiencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Qué es el ROI y por qué es clave en decisiones financieras?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El ROI (Return on Investment o Retorno de la Inversión) es una métrica que permite saber si una inversión genera beneficios suficientes frente al dinero y tiempo invertidos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En el contexto de la gestión de cobranzas, el ROI responde a una pregunta crítica: ¿la automatización genera más valor que el costo del software?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Medir el ROI automatización cobranzas se ha vuelto indispensable para CFOs y gerentes que deben justificar presupuestos ante directorios o socios. No se trata solo de eficiencia, sino de demostrar con números que la inversión se traduce en mayor liquidez, menos costos y un flujo de caja más estable.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Cómo calcular ROI en tu empresa paso a paso",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La fórmula básica es:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "ROI = (Beneficio – Inversión) / Inversión x 100",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Ejemplo:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Inversión en software de cobranza: $1,000 mensuales.",
          "Beneficio estimado: $3,500 en reducción de cartera vencida y ahorro operativo.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "ROI = (3,500 – 1,000) / 1,000 x 100 = 250%",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Esto significa que por cada dólar invertido, la empresa recupera 2.5 adicionales.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Lo mejor: con las métricas adecuadas, calcular ROI puede tomar solo 15 minutos. Basta con identificar la inversión, medir los beneficios (ahorro en horas, reducción de morosidad, incremento en liquidez) y aplicar la fórmula.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Beneficios financieros de la automatización de cobranza",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un buen ROI no aparece por casualidad, sino porque la automatización impacta directamente en varios frentes:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Reducción del DSO: menos días de venta pendientes de cobro.",
          "Menor carga operativa: equipos que dejan tareas manuales para enfocarse en estrategia.",
          "Incremento en la tasa de recuperación: más facturas cobradas en menos tiempo.",
          "Flujo de caja más predecible: mayor liquidez para pagar proveedores o invertir.",
          "Eficiencia operativa: menor dependencia de Excel y procesos fragmentados.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cada uno de estos indicadores de ahorro y eficiencia entra en el cálculo del ROI, reforzando el valor de la automatización.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "La calculadora ROI de Sena",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena va más allá de la teoría. Su plataforma incluye una calculadora ROI diseñada para mostrar, en tiempo real, cuánto tiempo y dinero ahorra la empresa al automatizar la cobranza.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La herramienta considera:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Horas liberadas de tareas manuales.",
          "Reducción del DSO gracias a flujos automáticos.",
          "Incremento de la tasa de recuperación de facturas.",
          "Impacto directo en el flujo de caja.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El resultado es un informe claro y visual que facilita la toma de decisiones: el CFO no solo dice que la automatización es útil, lo demuestra con cifras.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Casos comunes donde calcular ROI cambia la decisión",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Un CFO frente al directorio: necesita justificar inversión en software frente a contratar más personal. El ROI demuestra que la automatización genera más valor con menos gasto fijo.",
          "Una pyme con liquidez ajustada: duda si pagar por una plataforma. El cálculo muestra que recuperar facturas atrasadas vale mucho más que el costo mensual.",
          "Una empresa en crecimiento: necesita escalar sin aumentar su equipo de cobranza. El ROI proyecta ahorros que permiten crecer sin contratar.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En todos estos escenarios, calcular ROI aporta la seguridad que los números entregan y ayuda a transformar dudas en decisiones estratégicas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La automatización de cobranza no debe verse como un gasto, sino como una inversión que se mide con datos. Calcular ROI permite comprobar en minutos si la decisión genera valor real para la empresa.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Con Sena, este proceso es aún más sencillo gracias a su calculadora de ROI: una herramienta que conecta indicadores como DSO, tasa de recuperación y flujo de caja con el impacto financiero directo de la automatización.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres comprobar en minutos cuánto puede ahorrar tu empresa? ",
          },
          {
            type: "link",
            text: "Prueba la calculadora ROI de Sena.",
            href: "https://somossena.com/calculadora",
          },
        ],
      },
    ],
  },
  {
    id: 23,
    slug: "descubre-que-software-de-cobranza-puede-ayudarte-a-automatizar-procesos-salir-del-excel-y-mejorar-la-liquidez-en-tu-pyme",
    title:
      "¿Qué software de cobranza me ayuda a automatizar las cobranzas en mi pyme?",
    intro:
      "Muchas pymes todavía dependen de hojas de Excel y recordatorios manuales para gestionar las cuentas por cobrar. Este enfoque no solo consume tiempo, también aumenta el riesgo de errores y afecta el flujo de caja. La buena noticia es que existen soluciones digitales pensadas para automatizar el proceso y mejorar la eficiencia. En este blog revisaremos qué software de cobranza puede ayudarte a salir del Excel, qué funciones debes buscar y cómo Sena se convierte en un aliado estratégico para crecer sin fricciones.",
    date: "09 de octubre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog", "Producto", "Servicio"],
    image: AssetImageBlog.blog_23_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Muchas pymes todavía dependen de hojas de Excel y recordatorios manuales para gestionar las cuentas por cobrar. Este enfoque no solo consume tiempo, también aumenta el riesgo de errores y afecta el ",
          },
          {
            type: "bold",
            text: "flujo de caja",
          },
          {
            type: "text",
            text: ". La buena noticia es que existen soluciones digitales pensadas para automatizar el proceso y mejorar la eficiencia. En este blog revisaremos qué ",
          },
          {
            type: "bold",
            text: "software de cobranza",
          },
          {
            type: "text",
            text: " puede ayudarte a salir del Excel, qué funciones debes buscar y cómo Sena se convierte en un aliado estratégico para crecer sin fricciones.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "El problema de depender de Excel para la cobranza",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Excel ha sido durante años la herramienta favorita de muchas empresas para llevar un control financiero básico. Sin embargo, cuando una pyme empieza a manejar cientos de facturas mensuales, el sistema se queda corto.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Los principales problemas son:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Falta de trazabilidad",
            },
            {
              type: "text",
              text: ": los recordatorios enviados por correo o WhatsApp no quedan registrados de forma ordenada.",
            },
          ],
          [
            {
              type: "bold",
              text: "Errores manuales",
            },
            {
              type: "text",
              text: ": copiar y pegar datos del ERP a una planilla es propenso a equivocaciones.",
            },
          ],
          [
            {
              type: "bold",
              text: "Pérdida de tiempo",
            },
            {
              type: "text",
              text: ": los equipos financieros gastan horas en tareas repetitivas.",
            },
          ],
          [
            {
              type: "bold",
              text: "Impacto en liquidez",
            },
            {
              type: "text",
              text: ": los atrasos aumentan y el ",
            },
            {
              type: "bold",
              text: "DSO",
            },
            {
              type: "text",
              text: " (días promedio de cobro) se eleva, poniendo presión en el flujo de caja.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En este contexto, la digitalización de la cobranza deja de ser una opción para convertirse en una necesidad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Qué es un software de cobranza y cómo funciona?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un ",
          },
          {
            type: "bold",
            text: "software de cobranza",
          },
          {
            type: "text",
            text: " es una plataforma digital, generalmente en la nube (SaaS), que centraliza, automatiza y monitorea los procesos de recuperación de pagos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "A diferencia de las herramientas tradicionales, este tipo de sistemas ofrece:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Automatización inteligente",
            },
            {
              type: "text",
              text: ": recordatorios automáticos antes y después del vencimiento.",
            },
          ],
          [
            {
              type: "bold",
              text: "Visibilidad total",
            },
            {
              type: "text",
              text: ": dashboards con métricas en tiempo real.",
            },
          ],
          [
            {
              type: "bold",
              text: "Escalabilidad",
            },
            {
              type: "text",
              text: ": permite manejar mayor volumen de facturas sin aumentar el equipo.",
            },
          ],
          [
            {
              type: "bold",
              text: "Integración",
            },
            {
              type: "text",
              text: ": conexión con ERP o CRM para sincronizar datos sin esfuerzo manual.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En resumen, pasa de un proceso manual y reactivo a una gestión proactiva, ordenada y enfocada en resultados.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Funciones clave de un software de cobranza para pymes",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cuando busques una solución para tu empresa, asegúrate de que incluya estas funcionalidades:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "1. ",
          },
          {
            type: "bold",
            text: "Automatización de recordatorios",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Correos, SMS o WhatsApp enviados según reglas de negocio, liberando al equipo de tareas repetitivas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "2. ",
          },
          {
            type: "bold",
            text: "Dashboards en tiempo real",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Métricas como DSO, antigüedad de cartera y ",
          },
          {
            type: "bold",
            text: "tasa de recuperación",
          },
          {
            type: "text",
            text: " disponibles al instante para tomar decisiones rápidas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "3. ",
          },
          {
            type: "bold",
            text: "Segmentación de clientes morosos",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Clasificación automática por riesgo y monto, lo que permite priorizar la gestión en cuentas críticas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "4. ",
          },
          {
            type: "bold",
            text: "Reportes y métricas exportables",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Información lista para auditorías y presentaciones gerenciales.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "5. ",
          },
          {
            type: "bold",
            text: "Historial de interacciones",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Registro de llamadas, correos y notas, aportando trazabilidad y respaldo ante disputas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Cómo elegir el software de cobranza adecuado",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "No todas las soluciones son iguales. Para una pyme que busca salir del Excel y digitalizarse, conviene evaluar los siguientes aspectos:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Escalabilidad",
            },
            {
              type: "text",
              text: ": que pueda crecer al ritmo de tu negocio.",
            },
          ],
          [
            {
              type: "bold",
              text: "Integración sencilla",
            },
            {
              type: "text",
              text: ": conexión con sistemas existentes sin procesos complejos.",
            },
          ],
          [
            {
              type: "bold",
              text: "Facilidad de uso",
            },
            {
              type: "text",
              text: ": una interfaz intuitiva para el equipo.",
            },
          ],
          [
            {
              type: "bold",
              text: "Soporte y seguridad",
            },
            {
              type: "text",
              text: ": respaldo ante dudas y cumplimiento de estándares de protección de datos.",
            },
          ],
          [
            {
              type: "bold",
              text: "Relación costo-beneficio",
            },
            {
              type: "text",
              text: ": medir el ",
            },
            {
              type: "bold",
              text: "ROI automatización cobranzas",
            },
            {
              type: "text",
              text: " frente a contratar más personal o mantener procesos manuales.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Caso Sena: automatización enfocada en resultados",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena no es solo un ",
          },
          {
            type: "bold",
            text: "software de cobranza",
          },
          {
            type: "text",
            text: ", es una plataforma SaaS que combina automatización tecnológica con ejecución profesional.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Lo que lo hace destacar frente a otras opciones:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Reducción comprobada del DSO",
            },
            {
              type: "text",
              text: " en hasta 33%.",
            },
          ],
          [
            {
              type: "bold",
              text: "Ahorro de tiempo operativo",
            },
            {
              type: "text",
              text: " gracias a flujos automáticos.",
            },
          ],
          [
            {
              type: "bold",
              text: "Dashboards con KPIs clave",
            },
            {
              type: "text",
              text: ": aging de cartera, top morosos, flujo de caja proyectado.",
            },
          ],
          [
            {
              type: "bold",
              text: "Bitácora completa de gestiones",
            },
            {
              type: "text",
              text: " con trazabilidad para auditorías.",
            },
          ],
          [
            {
              type: "bold",
              text: "Estrategias inteligentes de cobranza",
            },
            {
              type: "text",
              text: " configuradas según el perfil de cada cliente.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El resultado: menos morosidad, más liquidez y una gestión de cobranzas ordenada y profesional.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Depender de Excel para manejar las cuentas por cobrar es insostenible cuando una pyme busca crecer. Un ",
          },
          {
            type: "bold",
            text: "software de cobranza",
          },
          {
            type: "text",
            text: " ofrece automatización, visibilidad y control en tiempo real, liberando al equipo financiero de tareas manuales y garantizando liquidez.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena, además, convierte los datos en decisiones estratégicas al vigilar indicadores como DSO, tasa de recuperación y eficiencia operativa.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres salir del Excel y automatizar tu cobranza de manera profesional? ",
          },
          {
            type: "link",
            text: "Conoce Sena y transforma tu gestión financiera",
            href: "https://somossena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    id: 24,
    slug: "descubre-los-kpis-de-cobranza-mas-importantes-para-medir-la-efectividad-de-tu-gestion-y-mejorar-la-toma-de-decisiones",
    title:
      "¿Qué KPIs de cobranza debo revisar para saber si mi cobranza está funcionando?",
    intro:
      "Medir la efectividad de la cobranza no significa únicamente revisar cuánto dinero ingresa a caja. Para un CFO o controller, lo que realmente importa es analizar los KPIs de cobranza, es decir, los indicadores que muestran la eficiencia del proceso, anticipan riesgos y permiten justificar decisiones estratégicas ante la gerencia.",
    date: "14 de octubre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog", "Visión Financiera", "Educación Financiera"],
    image: AssetImageBlog.blog_24_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Medir la efectividad de la cobranza no significa únicamente revisar cuánto dinero ingresa a caja. Para un CFO o controller, lo que realmente importa es analizar los KPIs de cobranza, es decir, los indicadores que muestran la eficiencia del proceso, anticipan riesgos y permiten justificar decisiones estratégicas ante la gerencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "La importancia de los KPIs en la gestión de cobranza",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Una empresa puede emitir cientos de facturas, pero si estas no se convierten en liquidez oportuna, su operación corre riesgos. Los indicadores de cobranza ofrecen una radiografía clara de cómo se comporta la cartera, identificando patrones de pago, clientes morosos y posibles fugas de liquidez.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Medir KPIs no solo ayuda a saber si la estrategia de cobranza está funcionando, sino también a tomar decisiones de mejora: ajustar plazos, renegociar con clientes o reforzar políticas de crédito. En pocas palabras, los KPIs de cobranza conectan la gestión operativa con la salud financiera de la empresa.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Principales KPIs de cobranza que debes monitorear",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "1. DSO (Days Sales Outstanding)",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El DSO mide los días promedio que tarda la empresa en recuperar el dinero de sus ventas a crédito. Un DSO alto puede señalar problemas de flujo de caja o clientes que pagan tarde. Reducirlo es clave para mantener liquidez y operar sin depender de préstamos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "2. Aging de cartera",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Este indicador clasifica las cuentas por cobrar según su antigüedad: 30, 60, 90 días o más. El aging permite priorizar esfuerzos sobre las facturas más críticas y visualizar qué parte de la cartera corre mayor riesgo de incobrabilidad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "3. Tasa de recuperación",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Mide el porcentaje de facturas efectivamente cobradas sobre el total emitido. Una tasa baja revela ineficiencia en la cobranza y alerta sobre posibles pérdidas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "4. Promedio de días de mora",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Indica cuántos días adicionales, después de la fecha de vencimiento, tardan los clientes en pagar. Este KPI permite evaluar el comportamiento real de pago y sirve para diseñar recordatorios más efectivos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "5. Eficiencia operativa en cobranza",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "No basta con cobrar; importa cuánto cuesta hacerlo. Este KPI compara los recursos invertidos en cobranza (tiempo y personal) contra los montos recuperados. Un proceso eficiente debería minimizar costos y maximizar liquidez.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Cómo interpretar los indicadores de cobranza",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Los números por sí solos no cuentan toda la historia. Un DSO de 40 días puede ser excelente para una empresa industrial, pero preocupante para un negocio de servicios con plazos más cortos. Del mismo modo, un aging de cartera concentrado en deudas mayores a 90 días es una señal crítica de ineficiencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La clave es comparar los KPIs financieros de tu empresa con:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Promedios del sector.",
          "Tu propio historial de cobranza.",
          "Las metas fijadas en tus políticas de crédito.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Así podrás identificar si tu gestión de cuentas por cobrar va en la dirección correcta o si necesita ajustes inmediatos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Herramientas para medir KPIs en tiempo real",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El reto de muchos CFOs es que sus métricas de cobranza se calculan de manera manual en Excel, lo que genera retrasos y errores. Aquí es donde la tecnología cambia el juego.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Con plataformas como Sena puedes:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Acceder a dashboards en tiempo real con métricas como DSO, aging y tasa de recuperación.",
          "Centralizar todas las cuentas por cobrar en un solo sistema.",
          "Automatizar reportes y presentarlos fácilmente a la gerencia.",
          "Identificar tendencias antes de que se conviertan en problemas graves de liquidez.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Gracias a estas herramientas, los indicadores de cobranza dejan de ser estáticos y se convierten en información accionable.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Los KPIs de cobranza son mucho más que simples métricas: son la brújula que muestra si la empresa está convirtiendo ventas en liquidez real. Analizar el DSO, el aging de cartera, la tasa de recuperación y otros indicadores permite anticipar riesgos, optimizar procesos y justificar decisiones financieras.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres medir tus KPIs de cobranza en tiempo real y reducir la incertidumbre en tus finanzas? ",
          },
          {
            type: "link",
            text: "Descubre cómo Sena puede ayudarte a transformar tu gestión",
            href: "https://somossena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    id: 25,
    slug: "descubre-como-sena-mide-el-exito-de-sus-automatizaciones-con-KPIs-de-cobranza-clave-para-optimizar-liquidez-y-eficiencia",
    title:
      "¿Cómo mide Sena el éxito de sus automatizaciones? ¿Qué KPIs de automatización de cobranza vigilan?",
    intro:
      "Automatizar la cobranza no basta: lo que marca la diferencia es saber qué KPIs automatización cobranza se están cumpliendo. En Sena, el éxito se mide con indicadores concretos que muestran si la empresa cobra más rápido, mejora su flujo de caja y reduce la carga manual del equipo.",
    date: "16 de octubre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog", "Visión Financiera", "Educación Financiera"],
    image: AssetImageBlog.blog_25_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Automatizar la cobranza no basta: lo que marca la diferencia es saber qué KPIs automatización cobranza se están cumpliendo. En Sena, el éxito se mide con indicadores concretos que muestran si la empresa cobra más rápido, mejora su flujo de caja y reduce la carga manual del equipo.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Medir el éxito de la automatización: la filosofía Sena",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Muchas pymes creen que automatizar es sinónimo de éxito. Pero, sin indicadores de cobranza, no hay forma de saber si las acciones digitales están generando resultados reales.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena conecta cada flujo automatizado con métricas de cuentas por cobrar visibles en tiempo real. Así, el éxito no se mide por la cantidad de correos enviados, sino por cómo mejoran el DSO, el aging de cartera y la tasa de recuperación.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "KPIs automatización cobranza que Sena vigila",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "1. DSO (Days Sales Outstanding)",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Este indicador muestra cuántos días tarda en promedio una empresa en recuperar el dinero de sus ventas a crédito. Una reducción del DSO confirma que la automatización acelera la cobranza y libera liquidez.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "2. Aging de cartera",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena clasifica de forma automática las facturas según su antigüedad. Este KPI revela la proporción de facturas en 30, 60 o 90 días de mora y permite enfocar la gestión en clientes críticos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "3. Tasa de recuperación",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Más allá de la automatización, lo importante es cuántas facturas realmente se cobran. Este KPI muestra si las campañas digitales logran convertir deuda en liquidez efectiva.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "4. Flujo de caja proyectado",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La plataforma integra información de ERP y cuentas por cobrar para proyectar la liquidez disponible. Con esta visión, un CFO puede anticipar necesidades de financiamiento y planificar con datos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "5. Eficiencia operativa",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena mide el impacto de las automatizaciones en el tiempo y esfuerzo del equipo. Menos horas en tareas manuales significa más capacidad para trabajar en estrategias financieras de valor.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Cómo Sena conecta automatización y KPIs",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cada flujo programado —recordatorios por email, avisos vía WhatsApp o segmentaciones— queda vinculado a los KPIs automatización cobranza. Si los pagos llegan más rápido, baja el DSO; si se reducen las facturas de más de 90 días, mejora el aging de cartera; si aumentan los montos recuperados, sube la tasa de recuperación.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El resultado es simple: la automatización deja de ser una promesa abstracta y se convierte en datos claros y auditables.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Valor para CFOs y controllers",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Los gerentes financieros necesitan más que percepciones: requieren reportes confiables para tomar decisiones. Con Sena pueden:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Monitorear en tiempo real los indicadores de cobranza.",
          "Exportar reportes automáticos para auditorías.",
          "Analizar tendencias del flujo de caja.",
          "Demostrar mejoras en eficiencia operativa gracias a la automatización.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Esto convierte a los KPIs automatización cobranza en aliados estratégicos para justificar decisiones y mostrar resultados medibles a la gerencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Automatizar la cobranza solo tiene valor cuando se traduce en mejores indicadores financieros. Sena mide el éxito de sus flujos con KPIs claros: DSO, aging de cartera, tasa de recuperación, flujo de caja proyectado y eficiencia operativa.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres medir tus resultados con datos y no con suposiciones? ",
          },
          {
            type: "link",
            text: "Descubre cómo Sena transforma la cobranza con KPIs en tiempo real",
            href: "https://somossena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    id: 26,
    slug: "aprende-que-es-dso-como-calcularlo-y-estrategias-para-reducirlo-y-fortalecer-las-finanzas-de-tu-empresa",
    title: "¿Qué es DSO y cómo puedo reducirlo en mi empresa?",
    intro:
      "El DSO es una de las métricas financieras más influyentes para la salud de cualquier empresa, especialmente en pymes que dependen de un flujo de caja estable para crecer. Si no lo mides, puedes estar perdiendo liquidez sin darte cuenta. En este blog conocerás qué es, cómo calcularlo y las mejores estrategias para reducirlo de forma práctica.",
    date: "21 de octubre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog", "Cobranza"],
    image: AssetImageBlog.blog_26_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El ",
          },
          {
            type: "bold",
            text: "DSO",
          },
          {
            type: "text",
            text: " es una de las métricas financieras más influyentes para la salud de cualquier empresa, especialmente en pymes que dependen de un flujo de caja estable para crecer. Si no lo mides, puedes estar perdiendo liquidez sin darte cuenta. En este blog conocerás qué es, cómo calcularlo y las mejores estrategias para reducirlo de forma práctica.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Qué es DSO y por qué es tan importante?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El DSO, también conocido como Days Sales Outstanding o Días de Venta Pendientes de Cobro, mide el promedio de días que tarda una empresa en recuperar el dinero de sus ventas a crédito.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En términos simples, refleja ",
          },
          {
            type: "bold",
            text: "cuánto tiempo pasa desde que emites una factura hasta que recibes el pago",
          },
          {
            type: "text",
            text: ". Mientras más alto sea este número, más tardan tus clientes en pagar y más presión existe sobre tu liquidez.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Para las pymes, donde cada sol o peso cuenta, un DSO elevado puede significar problemas para cubrir sueldos, pagar proveedores o invertir en crecimiento. Por eso, los CFOs y responsables financieros lo consideran un ",
          },
          {
            type: "bold",
            text: "KPI clave",
          },
          {
            type: "text",
            text: " para evaluar la eficiencia en la gestión de cuentas por cobrar.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Cómo calcular el DSO en tu empresa",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El cálculo del DSO no es complejo. La fórmula más usada es:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "DSO = (Cuentas por cobrar / Ventas a crédito) x Número de días",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Ejemplo:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Imagina que tu pyme tiene ",
          },
          {
            type: "bold",
            text: "$150,000 en cuentas por cobrar",
          },
          {
            type: "text",
            text: " y unas ",
          },
          {
            type: "bold",
            text: "ventas a crédito de $450,000 en un trimestre (90 días)",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El cálculo sería:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "DSO = (150,000 / 450,000) x 90",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "DSO = 0.33 x 90 = ",
          },
          {
            type: "bold",
            text: "30 días",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Esto significa que, en promedio, tardas un mes en recuperar el dinero de tus facturas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un DSO bajo indica que tu proceso de cobranza es eficiente. En cambio, un DSO alto puede encender alarmas sobre atrasos en los pagos o una gestión desordenada.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Por qué un DSO alto es un problema para las finanzas?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un DSO elevado no solo refleja clientes que pagan tarde, también genera un efecto dominó en la salud financiera:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Falta de liquidez inmediata",
            },
            {
              type: "text",
              text: ": tus recursos están atrapados en cuentas por cobrar.",
            },
          ],
          [
            {
              type: "bold",
              text: "Mayor dependencia del crédito externo",
            },
            {
              type: "text",
              text: ": necesitas préstamos o líneas de crédito para cubrir gastos.",
            },
          ],
          [
            {
              type: "bold",
              text: "Menor capacidad de inversión",
            },
            {
              type: "text",
              text: ": sin flujo de caja, es difícil reinvertir en expansión o innovación.",
            },
          ],
          [
            {
              type: "bold",
              text: "Relaciones tensas con proveedores",
            },
            {
              type: "text",
              text: ": si no puedes pagarles a tiempo, tu reputación empresarial puede verse afectada.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En resumen, un DSO alto es una señal de que tu empresa financia a sus clientes más de lo que debería, poniendo en riesgo su estabilidad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Estrategias efectivas para reducir el DSO",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "1. Automatiza recordatorios de pago",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Enviar correos o mensajes manuales suele ser ineficiente. Al automatizar recordatorios previos y posteriores al vencimiento, tus clientes reciben avisos oportunos sin que tu equipo pierda tiempo.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "2. Implementa políticas de crédito claras",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "No todos los clientes deberían recibir los mismos plazos de pago. Define políticas diferenciadas según historial, tamaño de cliente y riesgo. Esto previene retrasos y reduce la exposición a morosidad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "3. Ofrece incentivos por pronto pago",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un pequeño descuento o beneficio adicional puede motivar a tus clientes a pagar antes. Aunque pierdas un margen mínimo, ganas liquidez y estabilidad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "4. Segmenta a tus clientes",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "No todos los clientes son iguales. Prioriza la gestión sobre quienes acumulan más deuda o tienen mayor riesgo de atraso. Una segmentación inteligente ayuda a concentrar esfuerzos en donde más importa.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "5. Centraliza la información de cobranzas",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Muchas empresas aún dependen de Excel, correos dispersos o WhatsApp. Esto genera errores y pérdida de trazabilidad. Un sistema centralizado permite ordenar, controlar y reducir los tiempos de cobro.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "6. Apóyate en la tecnología",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Plataformas como ",
          },
          {
            type: "bold",
            text: "Sena",
          },
          {
            type: "text",
            text: " ofrecen dashboards en tiempo real con métricas de cobranza, permiten automatizar campañas de recordatorios y segmentar clientes por riesgo. Con estas herramientas, el DSO puede reducirse hasta en un 33% en pocos meses.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "El rol de la tecnología en la gestión del DSO",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La digitalización ha transformado la manera en que las empresas gestionan sus cuentas por cobrar. Hoy en día, ya no basta con emitir facturas y esperar. Se requiere visibilidad total y procesos proactivos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Con Sena, por ejemplo, las pymes pueden:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Sincronizar automáticamente facturas desde el ERP.",
          "Configurar flujos de cobranza inteligentes que envían notificaciones según reglas de negocio.",
          "Tener un registro detallado de cada interacción con clientes.",
          "Acceder a reportes de DSO, antigüedad de cartera y top morosos en tiempo real.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Esto no solo ayuda a reducir el DSO, sino que convierte la cobranza en una ventaja competitiva: una empresa con liquidez puede negociar mejor con proveedores, invertir en nuevos proyectos y crecer con menos fricciones.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Buenas prácticas complementarias",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Además de las estrategias anteriores, conviene adoptar ciertas prácticas que refuercen el control del DSO:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Capacitar al equipo financiero",
            },
            {
              type: "text",
              text: " en métricas clave de cobranza.",
            },
          ],
          [
            {
              type: "bold",
              text: "Revisar periódicamente el DSO",
            },
            {
              type: "text",
              text: " para detectar tendencias.",
            },
          ],
          [
            {
              type: "bold",
              text: "Evitar concentrar ventas a crédito",
            },
            {
              type: "text",
              text: " en pocos clientes, diversificar reduce riesgos.",
            },
          ],
          [
            {
              type: "bold",
              text: "Comparar tu DSO con el promedio de tu industria",
            },
            {
              type: "text",
              text: ": esto te da un benchmark realista.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El ",
          },
          {
            type: "bold",
            text: "DSO",
          },
          {
            type: "text",
            text: " es mucho más que un número: es el reflejo de qué tan eficiente es tu empresa para transformar ventas en liquidez real. Reducirlo no solo significa cobrar más rápido, también implica fortalecer tu flujo de caja, generar confianza y abrir oportunidades de crecimiento.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Las empresas que ignoran este indicador corren el riesgo de quedarse sin capital para operar, mientras que aquellas que lo gestionan de forma inteligente ganan estabilidad y competitividad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres medir y reducir tu DSO sin complicaciones? ",
          },
          {
            type: "link",
            text: "Descubre cómo Sena puede ayudarte a optimizar tu cobranza",
            href: "https://somossena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    id: 27,
    slug: slug(
      "Conoce las diferencias entre CRM cobranza, ERP cobranza y SaaS financiero, y descubre que sistema de gestion es mejor para tu empresa",
    ),
    title: "¿Cuál es la diferencia entre CRM, ERP y SaaS para cobranza?",
    intro:
      "La gestión de cuentas por cobrar es uno de los grandes retos de cualquier pyme en crecimiento. Mientras algunas empresas confían en un CRM de cobranza, otras dependen de su ERP de cobranza, y muchas ya evalúan migrar hacia un SaaS financiero especializado. Pero, ¿cuál es la mejor opción para asegurar liquidez, automatización y control? En este artículo te mostraremos las diferencias más importantes y cómo elegir el sistema de gestión adecuado.",
    date: "28 de octubre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog", "Producto", "Servicio"],
    image: AssetImageBlog.blog_27_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La gestión de cuentas por cobrar es uno de los grandes retos de cualquier pyme en crecimiento. Mientras algunas empresas confían en un ",
          },
          {
            type: "bold",
            text: "CRM de cobranza",
          },
          {
            type: "text",
            text: ", otras dependen de su ",
          },
          {
            type: "bold",
            text: "ERP de cobranza",
          },
          {
            type: "text",
            text: ", y muchas ya evalúan migrar hacia un ",
          },
          {
            type: "bold",
            text: "SaaS financiero",
          },
          {
            type: "text",
            text: " especializado. Pero, ¿cuál es la mejor opción para asegurar liquidez, automatización y control? En este artículo te mostraremos las diferencias más importantes y cómo elegir el sistema de gestión adecuado.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Qué es un CRM de cobranza y qué ofrece?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un ",
          },
          {
            type: "bold",
            text: "CRM cobranza",
          },
          {
            type: "text",
            text: " está pensado para administrar la relación con los clientes, incluyendo recordatorios, seguimientos y comunicación. Su principal ventaja es que organiza interacciones y ayuda a no perder de vista las facturas pendientes.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sin embargo, el alcance de un CRM cobranza suele ser limitado cuando la empresa busca métricas avanzadas como DSO, aging de cartera o proyecciones de flujo de caja. Por ello, aunque es útil como primer paso, puede quedarse corto en empresas que buscan mayor control financiero.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "El rol del ERP en la gestión de cobranza",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El ",
          },
          {
            type: "bold",
            text: "ERP cobranza",
          },
          {
            type: "text",
            text: " centraliza procesos administrativos y financieros en un mismo sistema. Muchos ERPs incluyen módulos para cuentas por cobrar, lo que facilita la integración con facturación, inventario y contabilidad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Aun así, el ERP no siempre está diseñado con un enfoque especializado en cobranza. Suele carecer de funciones como segmentación de clientes morosos, reportes específicos de recuperación o flujos de recordatorios automatizados. Esto genera que las empresas terminen dependiendo de Excel para tareas críticas, reduciendo la eficiencia de la gestión.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "SaaS financiero: especialización y automatización",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El ",
          },
          {
            type: "bold",
            text: "SaaS financiero",
          },
          {
            type: "text",
            text: " surge como la respuesta moderna a los límites de un CRM o ERP. Estas plataformas, como Sena, están diseñadas específicamente para digitalizar la cobranza y ofrecer ",
          },
          {
            type: "bold",
            text: "automatización financiera",
          },
          {
            type: "text",
            text: " de extremo a extremo.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Algunas de sus ventajas son:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Automatización de recordatorios",
            },
            {
              type: "text",
              text: " multicanal (email, SMS, WhatsApp).",
            },
          ],
          [
            {
              type: "bold",
              text: "Dashboards en tiempo real",
            },
            {
              type: "text",
              text: " con indicadores clave.",
            },
          ],
          [
            {
              type: "bold",
              text: "Proyecciones de flujo de caja",
            },
            {
              type: "text",
              text: " basadas en comportamiento de pago.",
            },
          ],
          [
            {
              type: "bold",
              text: "Segmentación inteligente",
            },
            {
              type: "text",
              text: " de clientes y top morosos.",
            },
          ],
          [
            {
              type: "bold",
              text: "Reportes exportables",
            },
            {
              type: "text",
              text: " listos para auditorías y presentaciones gerenciales.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El SaaS convierte a la cobranza en una ventaja competitiva al reducir el DSO, mejorar la tasa de recuperación y liberar al equipo de tareas manuales.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Diferencias clave entre CRM, ERP y SaaS",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Para simplificar la comparación, podemos resumir las ",
          },
          {
            type: "bold",
            text: "diferencias CRM ERP SaaS",
          },
          {
            type: "text",
            text: " en tres puntos:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "1. ",
          },
          {
            type: "bold",
            text: "Enfoque:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "CRM: relación con clientes.",
          "ERP: procesos administrativos globales.",
          [
            {
              type: "text",
              text: "SaaS: especialización en ",
            },
            {
              type: "bold",
              text: "sistema de gestión de cobranza",
            },
            {
              type: "text",
              text: ".",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "1. ",
          },
          {
            type: "bold",
            text: "Nivel de automatización:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "CRM: básico.",
          "ERP: limitado.",
          "SaaS: avanzado, con automatización financiera y flujos inteligentes.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "1. ",
          },
          {
            type: "bold",
            text: "Visibilidad y métricas:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "CRM: seguimiento de interacciones.",
          "ERP: integración contable.",
          "SaaS: métricas financieras en tiempo real (DSO, aging, tasa de recuperación).",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Cómo elegir el sistema de gestión adecuado",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Al evaluar opciones, considera:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Tamaño y complejidad de tu pyme.",
          "Recursos disponibles para inversión.",
          "Necesidad de liquidez inmediata.",
          "Capacidad de tu equipo para manejar software especializado.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En muchos casos, comenzar con un ",
          },
          {
            type: "bold",
            text: "software de cobranza para pymes",
          },
          {
            type: "text",
            text: " especializado puede marcar la diferencia frente a depender solo de CRM o ERP. Una ",
          },
          {
            type: "bold",
            text: "plataforma de cobranza",
          },
          {
            type: "text",
            text: " SaaS no solo organiza datos, también transforma la operación en resultados financieros visibles.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Sena: el SaaS que combina automatización y resultados",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena se posiciona como un ",
          },
          {
            type: "bold",
            text: "software de cobranza",
          },
          {
            type: "text",
            text: " diseñado para pymes que buscan ir más allá de Excel o de módulos limitados en su ERP. Al centralizar gestiones y automatizar flujos, ofrece:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Menor DSO",
            },
            {
              type: "text",
              text: " en promedio hasta un 33%.",
            },
          ],
          [
            {
              type: "bold",
              text: "Flujo de caja más estable",
            },
            {
              type: "text",
              text: ".",
            },
          ],
          [
            {
              type: "bold",
              text: "KPIs claros en dashboards",
            },
            {
              type: "text",
              text: " en tiempo real.",
            },
          ],
          [
            {
              type: "bold",
              text: "Bitácora completa de gestiones",
            },
            {
              type: "text",
              text: " para trazabilidad.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En comparación con un CRM cobranza o un ERP cobranza, Sena integra lo mejor de ambos mundos, con la fuerza de un ",
          },
          {
            type: "bold",
            text: "SaaS financiero",
          },
          {
            type: "text",
            text: " especializado.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Elegir entre un CRM, un ERP o un SaaS puede parecer complejo, pero todo depende de la prioridad de la empresa. Si buscas un sistema de relación, el CRM es un primer paso; si prefieres integración administrativa, el ERP puede servir. Pero si lo que necesitas es control, liquidez y eficiencia, el camino está en un ",
          },
          {
            type: "bold",
            text: "SaaS financiero especializado en cobranzas",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres llevar tu cobranza a otro nivel con un software pensado para resultados? ",
          },
          {
            type: "link",
            text: "Descubre Sena y su plataforma de cobranza",
            href: "https://somossena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    id: 28,
    slug: slug(
      "Descubre las limitaciones de un ERP de cobranza y cuando conviene migrar a una plataforma especializada para mejorar tu liquidez",
    ),
    title:
      "¿Tu ERP de cobranza se queda corto? 7 señales de que necesitas una plataforma dedicada",
    intro:
      "Un ERP de cobranza puede centralizar procesos básicos de facturación y cuentas por cobrar, pero ¿realmente es suficiente para una pyme en crecimiento? Cuando el sistema no ofrece indicadores financieros claros ni herramientas de automatización, es probable que se esté quedando corto. En este blog te compartimos 7 señales para detectar esas limitaciones y cómo una plataforma especializada como Sena puede marcar la diferencia.",
    date: "30 de octubre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog"],
    image: AssetImageBlog.blog_28_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un ",
          },
          {
            type: "bold",
            text: "ERP de cobranza",
          },
          {
            type: "text",
            text: " puede centralizar procesos básicos de facturación y cuentas por cobrar, pero ¿realmente es suficiente para una pyme en crecimiento? Cuando el sistema no ofrece indicadores financieros claros ni herramientas de automatización, es probable que se esté quedando corto. En este blog te compartimos 7 señales para detectar esas limitaciones y cómo una plataforma especializada como Sena puede marcar la diferencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Qué es un ERP de cobranza y cómo funciona?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El ",
          },
          {
            type: "bold",
            text: "ERP",
          },
          {
            type: "text",
            text: " (Enterprise Resource Planning) es un ",
          },
          {
            type: "bold",
            text: "sistema de gestión empresarial",
          },
          {
            type: "text",
            text: " que centraliza procesos como contabilidad, inventario, compras y ventas. Cuando hablamos de ",
          },
          {
            type: "bold",
            text: "ERP cobranza",
          },
          {
            type: "text",
            text: ", nos referimos al módulo que gestiona las cuentas por cobrar: registra facturas, actualiza pagos y genera reportes administrativos básicos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En teoría, un ",
          },
          {
            type: "bold",
            text: "software ERP",
          },
          {
            type: "text",
            text: " permite integrar todas las áreas de la empresa en una sola plataforma. Sin embargo, al tratarse de una solución generalista, su módulo de cobranzas suele quedarse corto. Un ",
          },
          {
            type: "bold",
            text: "ERP qué es",
          },
          {
            type: "text",
            text: " y lo que promete no siempre coincide con lo que una empresa realmente necesita para asegurar liquidez, especialmente cuando enfrenta morosidad o falta de automatización financiera.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "7 señales de que tu ERP de cobranza no es suficiente",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "1. Dependencia de Excel para dar seguimiento",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Si tu equipo necesita exportar datos a hojas de cálculo para controlar atrasos, es una clara señal de que el ",
          },
          {
            type: "bold",
            text: "sistema ERP",
          },
          {
            type: "text",
            text: " no está resolviendo la gestión de cobranzas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "2. Falta de indicadores clave",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un ERP suele mostrar balances generales, pero rara vez ofrece KPIs como ",
          },
          {
            type: "bold",
            text: "DSO",
          },
          {
            type: "text",
            text: ", aging de cartera o tasa de recuperación. Sin esas métricas, se vuelve difícil medir la eficiencia real.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "3. Más tiempo en tareas manuales que en análisis",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un módulo de ",
          },
          {
            type: "bold",
            text: "ERP cobranza",
          },
          {
            type: "text",
            text: " no siempre automatiza recordatorios ni gestiona interacciones con clientes. Esto obliga al equipo a invertir horas en enviar correos o llamadas, reduciendo su eficiencia.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "4. No permite segmentar clientes morosos",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un ",
          },
          {
            type: "bold",
            text: "software ERP",
          },
          {
            type: "text",
            text: " trata a todos los clientes de la misma manera, sin segmentar por riesgo o antigüedad de deuda. Esta carencia retrasa las estrategias de cobranza.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "5. Carece de recordatorios multicanal",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Las plataformas modernas permiten enviar recordatorios por email, SMS o WhatsApp. El ",
          },
          {
            type: "bold",
            text: "ERP de cobranza",
          },
          {
            type: "text",
            text: " tradicional no incluye estas funciones, dejando la gestión en manos del equipo.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "6. No proyecta el flujo de caja",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un ERP puede mostrar cuánto tienes en cuentas por cobrar, pero no proyecta escenarios futuros ni analiza cómo los atrasos afectan la liquidez.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "7. Reportes limitados y poco prácticos",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Los informes del ",
          },
          {
            type: "bold",
            text: "software ERP",
          },
          {
            type: "text",
            text: " suelen ser rígidos y poco visuales. En cambio, un sistema especializado entrega dashboards en tiempo real y reportes exportables para gerencia o auditorías.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Limitaciones comunes del ERP en cobranzas",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La principal limitación es que un ",
          },
          {
            type: "bold",
            text: "ERP financiero",
          },
          {
            type: "text",
            text: " fue diseñado como herramienta administrativa global, no como un sistema de cobranza especializado. Esto genera:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Procesos poco ágiles.",
          "Escasa automatización financiera.",
          "Reportes genéricos que no responden a necesidades estratégicas.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Por eso, aunque el ",
          },
          {
            type: "bold",
            text: "ERP de cobranza",
          },
          {
            type: "text",
            text: " cumple con funciones básicas, no basta para empresas que buscan eficiencia y liquidez.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Cuándo dar el salto a un software especializado",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Si notas que tu ",
          },
          {
            type: "bold",
            text: "ERP",
          },
          {
            type: "text",
            text: " no responde a las demandas de crecimiento, es momento de considerar una ",
          },
          {
            type: "bold",
            text: "plataforma de cobranza",
          },
          {
            type: "text",
            text: " dedicada.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Las soluciones ",
          },
          {
            type: "bold",
            text: "SaaS de cobranza",
          },
          {
            type: "text",
            text: " están diseñadas específicamente para este fin. A diferencia de un ",
          },
          {
            type: "bold",
            text: "sistema ERP",
          },
          {
            type: "text",
            text: " tradicional, incluyen:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Dashboards en tiempo real.",
          "KPIs estratégicos como DSO, aging y tasa de recuperación.",
          "Flujos automáticos de recordatorios multicanal.",
          "Segmentación de clientes según riesgo.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En otras palabras, un ",
          },
          {
            type: "bold",
            text: "software de cobranza para pymes",
          },
          {
            type: "text",
            text: " especializado convierte datos dispersos en decisiones financieras inteligentes.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Sena: más allá del ERP de cobranza",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sena no reemplaza tu ",
          },
          {
            type: "bold",
            text: "ERP",
          },
          {
            type: "text",
            text: ", sino que lo complementa y lo supera en todo lo relacionado con cobranzas. Como ",
          },
          {
            type: "bold",
            text: "SaaS financiero",
          },
          {
            type: "text",
            text: ", ofrece:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Automatización financiera",
            },
            {
              type: "text",
              text: " completa con flujos de recordatorios.",
            },
          ],
          [
            {
              type: "bold",
              text: "KPIs de cobranza",
            },
            {
              type: "text",
              text: " visibles en dashboards en tiempo real.",
            },
          ],
          [
            {
              type: "bold",
              text: "Bitácora de gestiones",
            },
            {
              type: "text",
              text: " que aporta trazabilidad.",
            },
          ],
          [
            {
              type: "bold",
              text: "Proyecciones de flujo de caja",
            },
            {
              type: "text",
              text: " para anticipar decisiones.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Así, lo que antes era un módulo limitado dentro del ",
          },
          {
            type: "bold",
            text: "software ERP",
          },
          {
            type: "text",
            text: ", ahora se convierte en una herramienta estratégica que impacta directamente en la liquidez de la empresa.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El ",
          },
          {
            type: "bold",
            text: "ERP de cobranza",
          },
          {
            type: "text",
            text: " puede ser útil para registrar datos, pero no es suficiente para asegurar liquidez ni para gestionar clientes morosos de manera eficiente. Si tu empresa depende demasiado de Excel, carece de métricas financieras claras o tu equipo gasta más tiempo en tareas manuales que en análisis, es hora de dar el salto.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres complementar tu ERP con una solución especializada en cobranzas? ",
          },
          {
            type: "link",
            text: "Conoce Sena, la plataforma de cobranza SaaS diseñada para pymes en crecimiento",
            href: "https://somossena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    id: 29,
    slug: slug(
      "Aprende como manejar facturas vencidas, recuperar pagos y mantener buenas relaciones con tus clientes mediante tecnicas de cobranza efectivas",
    ),
    title: "¿Cómo puedo recuperar una factura vencida sin perder al cliente?",
    intro:
      "Las facturas vencidas son uno de los mayores dolores de cabeza para las pymes. No solo afectan la liquidez, también ponen en riesgo la relación con los clientes. Sin embargo, con un enfoque profesional y herramientas adecuadas, es posible recuperar una factura vencida sin dañar la confianza comercial. En este artículo veremos estrategias prácticas para el cobro de facturas vencidas, cuándo actuar y cómo una plataforma como Sena puede ayudarte a mantener el control.",
    date: "03 de noviembre 2025",
    author: "Antonella Hernandez",
    tags: ["Producto", "Servicio"],
    image: AssetImageBlog.blog_29_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Las facturas vencidas son uno de los mayores dolores de cabeza para las pymes. No solo afectan la liquidez, también ponen en riesgo la relación con los clientes. Sin embargo, con un enfoque profesional y herramientas adecuadas, es posible recuperar una factura vencida sin dañar la confianza comercial. En este artículo veremos estrategias prácticas para el cobro de facturas vencidas, cuándo actuar y cómo una plataforma como Sena puede ayudarte a mantener el control.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Por qué las facturas vencidas son un problema tan común?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En el mundo empresarial, la morosidad es casi inevitable. Una pyme puede ofrecer excelentes productos o servicios, pero si los clientes no cumplen a tiempo con el pago de facturas vencidas, la empresa se enfrenta a:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Problemas de flujo de caja.",
          "Dificultades para cubrir gastos fijos como nómina y proveedores.",
          "Aumento del DSO (días de venta pendientes de cobro).",
          "Tensión en la relación con los clientes.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La clave no está en evitar el riesgo al 100%, sino en implementar procesos de cobranza de facturas vencidas claros, ordenados y empáticos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Estrategias para recuperar una factura vencida",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "1. Comunicación proactiva y empática",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Un recordatorio amable antes del vencimiento puede evitar retrasos. Si ya pasó la fecha, es mejor mantener un tono cordial para no dañar la relación.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "2. Formaliza un plan de pagos",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En muchos casos, el cliente no paga por falta de liquidez. Proponer cuotas o renegociar plazos puede ser más efectivo que insistir en un único cobro inmediato.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "3. Usa la tecnología a tu favor",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Las plataformas modernas permiten cobrar facturas vencidas de forma más eficiente mediante:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Recordatorios automáticos multicanal.",
          "Segmentación de clientes según riesgo.",
          "Dashboards con métricas como aging de cartera.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "4. Establece políticas claras desde el inicio",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cuando los contratos especifican consecuencias por atraso, la gestión se simplifica. Además, la transparencia genera confianza y reduce conflictos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "5. Evalúa cuándo escalar el caso",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Si el cliente no responde después de varios intentos, puede ser necesario acudir a servicios externos. La decisión debe basarse en un análisis costo-beneficio.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Cómo cobrar una factura vencida sin perder al cliente",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Uno de los mayores retos es recuperar una factura sin perder al cliente. Para lograrlo:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Evita un tono agresivo o amenazante.",
          "Personaliza los mensajes de recordatorio.",
          "Ofrece soluciones antes que sanciones.",
          "Registra todas las interacciones para mantener coherencia en la comunicación.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Con estas prácticas, el pago de facturas vencidas deja de ser un conflicto y se convierte en una oportunidad para reforzar la confianza.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Recuperar facturas vencidas con una plataforma especializada",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Las herramientas digitales hacen la diferencia entre un proceso caótico y una gestión profesional. Con Sena puedes:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Automatizar campañas de cobranza.",
          "Acceder a reportes de cobranza de facturas vencidas en tiempo real.",
          "Clasificar clientes por antigüedad de deuda.",
          "Proyectar flujo de caja para anticipar problemas de liquidez.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "De esta manera, el seguimiento de facturas vencidas se convierte en un proceso ordenado, estratégico y menos desgastante para el equipo.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Las facturas vencidas no tienen por qué convertirse en una amenaza para la estabilidad de tu empresa. Con procesos claros, comunicación empática y herramientas adecuadas, es posible cobrar facturas vencidas sin deteriorar la relación con tus clientes.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres dejar atrás la incertidumbre y optimizar tu cobranza? ",
          },
          {
            type: "link",
            text: "Conoce Sena y su solución para la gestión de facturas vencidas",
            href: "https://somosena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    id: 30,
    slug: slug(
      "Descubre los riesgos de no cobrar una deuda a tiempo y como afectan el flujo de caja, la rentabilidad y las relaciones comerciales de tu empresa",
    ),
    title:
      "¿Qué pasa si no cobro una deuda a tiempo? Riesgos ocultos para tu pyme?",
    intro:
      "Retrasar la cobranza puede parecer un detalle menor, pero los riesgos de no cobrar una deuda se acumulan y terminan poniendo en jaque la estabilidad financiera de cualquier pyme. Con frecuencia, los dueños de negocio piensan que esperar un poco más no traerá consecuencias; sin embargo, lo que realmente ocurre es que el flujo de caja se deteriora, las pérdidas aumentan y las relaciones con los clientes se tensan.",
    date: "05 de noviembre 2025",
    author: "Antonella Hernandez",
    tags: ["Blog"],
    image: AssetImageBlog.blog_30_main.src,
    content: [
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Retrasar la cobranza puede parecer un detalle menor, pero los ",
          },
          {
            type: "bold",
            text: "riesgos de no cobrar una deuda",
          },
          {
            type: "text",
            text: " se acumulan y terminan poniendo en jaque la estabilidad financiera de cualquier pyme. Con frecuencia, los dueños de negocio piensan que esperar un poco más no traerá consecuencias; sin embargo, lo que realmente ocurre es que el flujo de caja se deteriora, las pérdidas aumentan y las relaciones con los clientes se tensan.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En este artículo se explicará en detalle qué sucede cuando una factura queda pendiente por mucho tiempo, cuáles son los efectos invisibles que se generan y cómo prevenirlos con una gestión más estratégica.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Riesgos de no cobrar una deuda: un problema más común de lo que parece",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En la mayoría de las pymes, la prioridad diaria se centra en vender más y atender clientes, pero no siempre en ",
          },
          {
            type: "bold",
            text: "cobrar deudas a tiempo",
          },
          {
            type: "text",
            text: ". Cuando se deja pasar una factura vencida, se instala un efecto dominó: la liquidez se reduce, las obligaciones internas se complican y la empresa comienza a depender de créditos externos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El riesgo mayor no está en una sola factura sin pagar, sino en la acumulación de atrasos. Las estadísticas muestran que mientras más tiempo transcurre, menor es la probabilidad de recuperación. Por lo tanto, lo que al inicio parece un simple retraso, termina convirtiéndose en un ",
          },
          {
            type: "bold",
            text: "problema estructural de flujo de caja afectado",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "¿Qué pasa si no cobro una deuda en mi pyme?",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Para comprender la magnitud del problema, conviene observar tres escenarios habituales que enfrentan las pequeñas y medianas empresas:",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "1. ",
          },
          {
            type: "bold",
            text: "Pérdidas financieras inevitables",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Cuando un pago no se recupera a tiempo, el dinero deja de estar disponible para el negocio. Aunque se insista en cobrar, la experiencia demuestra que mientras más antigua es la deuda, menor es la tasa de recuperación. En consecuencia, los ingresos proyectados nunca se concretan y las pérdidas se consolidan.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "2. ",
          },
          {
            type: "bold",
            text: "Deterioro del flujo de caja",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El retraso en el ingreso de efectivo afecta directamente la capacidad de la empresa para cubrir gastos fijos como salarios, impuestos o proveedores. Se produce, por lo tanto, un círculo vicioso: la falta de liquidez obliga a buscar financiamiento externo y este financiamiento incrementa los costos operativos.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "3. ",
          },
          {
            type: "bold",
            text: "Relaciones comerciales desgastadas",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La presión por el pago genera tensión entre empresa y cliente. Si la cobranza se maneja tarde y de forma improvisada, la confianza se erosiona. Lo que pudo resolverse con una comunicación proactiva se convierte en un conflicto difícil de gestionar.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Consecuencias de no cobrar una deuda: señales de alerta",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Quienes se preguntan ",
          },
          {
            type: "bold",
            text: "qué pasa si no cobro una deuda",
          },
          {
            type: "text",
            text: " deben identificar las señales tempranas que revelan una gestión de cobros deficiente:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Facturas vencidas que superan los 30 o 60 días sin seguimiento.",
          "Dependencia excesiva de Excel para registrar cuentas por cobrar.",
          "Ausencia de métricas clave como aging de cartera o DSO.",
          "Clientes que repiten patrones de atraso sin recibir una estrategia diferenciada.",
          "Equipo financiero saturado con tareas manuales y poco análisis estratégico.",
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Estas señales no deben ser ignoradas. Cada día que pasa, el costo oculto de la morosidad se acumula, afectando no solo el dinero disponible, sino también la capacidad de tomar decisiones estratégicas.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Riesgos financieros y operativos de la morosidad",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "El impacto de las ",
          },
          {
            type: "bold",
            text: "deudas no cobradas a tiempo",
          },
          {
            type: "text",
            text: " se manifiesta en distintos niveles:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Liquidez reducida:",
            },
            {
              type: "text",
              text: " los recursos que deberían estar en caja permanecen retenidos en cuentas incobrables.",
            },
          ],
          [
            {
              type: "bold",
              text: "Mayor riesgo de impago definitivo:",
            },
            {
              type: "text",
              text: " después de 90 días, las probabilidades de recuperar una deuda caen de forma significativa.",
            },
          ],
          [
            {
              type: "bold",
              text: "Incremento de costos administrativos:",
            },
            {
              type: "text",
              text: " más tiempo y esfuerzo se destinan a tareas de persecución de pagos.",
            },
          ],
          [
            {
              type: "bold",
              text: "Desconfianza del mercado:",
            },
            {
              type: "text",
              text: " proveedores y entidades financieras perciben mayor riesgo en una empresa con altos niveles de morosidad.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "En otras palabras, las ",
          },
          {
            type: "bold",
            text: "consecuencias de no cobrar una deuda",
          },
          {
            type: "text",
            text: " no se limitan al corto plazo; también afectan la reputación y la competitividad de la empresa en el mercado.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Cómo evitar los riesgos de no cobrar una deuda",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Aunque la morosidad nunca se elimina por completo, sí puede controlarse con prácticas adecuadas:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Políticas de crédito claras:",
            },
            {
              type: "text",
              text: " establecer plazos, penalidades y condiciones desde el inicio reduce la ambigüedad.",
            },
          ],
          [
            {
              type: "bold",
              text: "Recordatorios preventivos:",
            },
            {
              type: "text",
              text: " no esperar a que la factura venza para comunicarse con el cliente.",
            },
          ],
          [
            {
              type: "bold",
              text: "Planes de pago flexibles:",
            },
            {
              type: "text",
              text: " en lugar de perder al cliente, puede proponerse un esquema escalonado.",
            },
          ],
          [
            {
              type: "bold",
              text: "Uso de indicadores financieros:",
            },
            {
              type: "text",
              text: " medir el aging de cartera, el DSO y la tasa de recuperación facilita la toma de decisiones.",
            },
          ],
          [
            {
              type: "bold",
              text: "Automatización del proceso:",
            },
            {
              type: "text",
              text: " la tecnología permite enviar recordatorios automáticos, segmentar clientes y proyectar escenarios de liquidez.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Sin estas prácticas, los ",
          },
          {
            type: "bold",
            text: "riesgos de no cobrar una deuda",
          },
          {
            type: "text",
            text: " aumentan considerablemente, comprometiendo la salud de la empresa.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Sena: una solución frente a los riesgos de morosidad",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Para una pyme, depender únicamente de planillas o de un ERP genérico puede resultar insuficiente. Sena surge como un ",
          },
          {
            type: "bold",
            text: "SaaS especializado en cobranza",
          },
          {
            type: "text",
            text: ", diseñado para reducir la morosidad y evitar que las ",
          },
          {
            type: "bold",
            text: "deudas no cobradas a tiempo",
          },
          {
            type: "text",
            text: " afecten la estabilidad financiera.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Entre sus principales ventajas se destacan:",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Automatización completa de la cobranza",
            },
            {
              type: "text",
              text: " con recordatorios multicanal.",
            },
          ],
          [
            {
              type: "bold",
              text: "Dashboards en tiempo real",
            },
            {
              type: "text",
              text: " con KPIs estratégicos como DSO y aging de cartera.",
            },
          ],
          [
            {
              type: "bold",
              text: "Segmentación de clientes morosos",
            },
            {
              type: "text",
              text: " según riesgo y antigüedad.",
            },
          ],
          [
            {
              type: "bold",
              text: "Proyecciones claras de flujo de caja",
            },
            {
              type: "text",
              text: " que anticipan escenarios futuros.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Gracias a estas funciones, el seguimiento de cuentas por cobrar se transforma en un proceso estratégico y no reactivo. En lugar de descubrir demasiado tarde los efectos negativos, la empresa actúa de forma anticipada.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "bold",
            text: "Ejemplo práctico: dos pymes, dos realidades",
          },
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              type: "bold",
              text: "Pyme A:",
            },
            {
              type: "text",
              text: " deja pasar las facturas vencidas más de 60 días sin estrategia. Resultado: su flujo de caja se colapsa y debe recurrir a créditos externos costosos.",
            },
          ],
          [
            {
              type: "bold",
              text: "Pyme B:",
            },
            {
              type: "text",
              text: " implementa Sena, automatiza la cobranza y segmenta clientes por riesgo. Resultado: reduce su DSO en 30%, recupera liquidez y logra invertir en crecimiento.",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Este ejemplo muestra cómo las decisiones de cobranza marcan la diferencia entre sobrevivir con deudas acumuladas o crecer con estabilidad.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "Los ",
          },
          {
            type: "bold",
            text: "riesgos de no cobrar una deuda",
          },
          {
            type: "text",
            text: " son reales y profundos: pérdida de liquidez, desgaste en las relaciones comerciales, aumento de costos y daño a la reputación. Lo que comienza como un simple atraso se convierte en una amenaza para la continuidad del negocio si no se actúa con rapidez.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "La gestión de cuentas por cobrar no debe verse como un trámite administrativo, sino como una estrategia central para garantizar el futuro de la empresa.",
          },
        ],
      },
      {
        type: "paragraph",
        fragments: [
          {
            type: "text",
            text: "👉 ¿Quieres evitar que las facturas vencidas se conviertan en un problema para tu pyme? ",
          },
          {
            type: "link",
            text: "Conoce Sena y transforma tu cobranza en un proceso automatizado y estratégico",
            href: "https://somosena.com/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
];

export const getBlogPostsSorted = () => {
  return [...blogPosts].sort((a, b) => {
    const dateA = parseSpanishDate(a.date);
    const dateB = parseSpanishDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};

export const getFeaturedPost = () => {
  return blogPosts.find((post) => post.id === featuredPostId) || blogPosts[0];
};

export const getOtherPosts = () => {
  return blogPosts.filter((post) => post.id !== featuredPostId);
};
