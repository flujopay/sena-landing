"use client";

import { ReactNode, useState } from "react";

// ── tiny helpers ──────────────────────────────────────────────
type BadgeColor = "blue" | "green" | "purple" | "orange" | "gray" | "indigo";
const Badge = ({
  children,
  color = "blue",
}: {
  children: ReactNode;
  color?: BadgeColor;
}) => {
  const map: Record<BadgeColor, string> = {
    blue: "bg-[#2270D0]/10 text-[#2270D0]",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
    orange: "bg-[#f6793a]/10 text-[#f6793a]",
    gray: "bg-gray-100 text-gray-600",
    indigo: "bg-[#2270D0]/10 text-[#2270D0]",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${map[color]}`}
    >
      {children}
    </span>
  );
};

const InfoBox = ({
  type = "note",
  children,
}: {
  type?: "note" | "warning" | "success";
  children: ReactNode;
}) => {
  const map = {
    note: "bg-blue-50 border-[#2270D0] text-[#2270D0]",
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",
    success: "bg-green-50 border-green-400 text-green-800",
  };
  const icons = { note: "💡", warning: "⚠️", success: "✅" };
  return (
    <div
      className={`flex gap-3 border-l-4 rounded-r-lg p-4 my-4 text-sm ${map[type]}`}
    >
      <span className="text-lg shrink-0">{icons[type]}</span>
      <p className="m-0">{children}</p>
    </div>
  );
};

const SectionHeader = ({
  num,
  title,
  subtitle,
}: {
  num: number;
  title: string;
  subtitle?: string;
}) => (
  <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-200">
    <div className="w-11 h-11 rounded-xl bg-[#2270D0] text-white flex items-center justify-center text-lg font-bold shrink-0">
      {num}
    </div>
    <div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
    </div>
  </div>
);

const H3 = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h3 id={id} className="text-base font-semibold text-gray-900 mt-8 mb-3 pl-3 border-l-4 border-[#2270D0]">
    {children}
  </h3>
);

const H4 = ({ children }: { children: ReactNode }) => (
  <h4 className="text-xs font-bold text-[#2270D0] uppercase tracking-wider mt-5 mb-2">
    {children}
  </h4>
);

const Table = ({ heads, rows }: { heads: string[]; rows: ReactNode[][] }) => (
  <div className="overflow-x-auto my-4 rounded-lg border border-gray-200">
    <table className="w-full text-sm">
      <thead>
        <tr>
          {heads.map((h, i) => (
            <th
              key={i}
              className="bg-gray-800 text-white text-left px-4 py-3 text-xs uppercase tracking-wide font-semibold"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            {row.map((cell, j) => (
              <td
                key={j}
                className="px-4 py-2.5 border-b border-gray-100 text-gray-700 align-top"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PropsTable = ({ rows }: { rows: [string, string, string][] }) => (
  <div className="overflow-x-auto my-3 rounded-lg border border-gray-200">
    <table className="w-full text-sm">
      <thead>
        <tr>
          {["Prop", "Tipo", "Descripción"].map((h, i) => (
            <th
              key={i}
              className="bg-[#2270D0]/10 text-[#2270D0] text-left px-3 py-2 text-xs uppercase tracking-wide font-semibold"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([prop, type, desc], i) => (
          <tr key={i} className="border-b border-gray-100">
            <td className="px-3 py-2 font-mono text-xs text-[#2270D0]">
              {prop}
            </td>
            <td className="px-3 py-2 text-gray-500 font-mono text-xs">
              {type}
            </td>
            <td className="px-3 py-2 text-gray-700">{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CodeBlock = ({ children }: { children: ReactNode }) => (
  <pre className="bg-gray-900 text-cyan-300 rounded-xl p-5 text-xs font-mono leading-relaxed overflow-x-auto my-4">
    {children}
  </pre>
);

const Card = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => (
  <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 hover:border-[#2270D0]/40 hover:shadow-sm transition-all">
    <div className="w-9 h-9 bg-[#2270D0]/10 rounded-lg flex items-center justify-center text-xl mb-3">
      {icon}
    </div>
    <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const CardGrid = ({
  items,
}: {
  items: { icon: string; title: string; desc: string }[];
}) => (
  <div className="grid grid-cols-2 gap-3 my-4">
    {items.map((it, i) => (
      <Card key={i} {...it} />
    ))}
  </div>
);

const DocList = ({ items }: { items: ReactNode[] }) => (
  <ul className="my-3 space-y-1">
    {items.map((it, i) => (
      <li
        key={i}
        className="flex gap-2 text-sm text-gray-700 py-1.5 border-b border-gray-100 last:border-0"
      >
        <span className="text-[#2270D0] mt-0.5 shrink-0">▸</span>
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const TwoCol = ({ left, right }: { left: ReactNode; right: ReactNode }) => (
  <div className="grid grid-cols-2 gap-4 my-4">
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
      {left}
    </div>
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
      {right}
    </div>
  </div>
);

const Divider = () => <hr className="border-t-2 border-gray-100 my-12" />;

const Inline = ({ children }: { children: ReactNode }) => (
  <code className="bg-[#2270D0]/10 text-[#2270D0] px-1.5 py-0.5 rounded text-xs font-mono">
    {children}
  </code>
);

// ── TOC ───────────────────────────────────────────────────────
const tocSections = [
  {
    label: "Arquitectura",
    items: [
      "1. Introducción",
      "2. Stack Tecnológico",
      "3. Estructura del Proyecto",
      "4. Capa de API y Peticiones",
    ],
  },
  {
    label: "Componentes UI",
    items: [
      "5. Assets e Íconos",
      "6. Componentes de Interfaz",
      "   Header",
      "   Modal",
      "   Selectores",
      "   Tablas Avanzadas",
      "   Toast — Notificaciones",
    ],
  },
  {
    label: "Estado Global",
    items: [
      "7. Context API vs Zustand",
      "8. Contextos Principales",
      "9. Stores de Zustand",
    ],
  },
  {
    label: "Módulos de Negocio",
    items: [
      "10. Autenticación",
      "11. XCollect — Cobros",
      "12. XPay — Pagos",
      "13. Tools — Herramientas",
      "14. Config — Configuración",
    ],
  },
  {
    label: "Calidad y Evolución",
    items: [
      "15. Internacionalización",
      "16. Seguridad",
      "17. Utilidades y Helpers",
      "18. Tests Automatizados",
      "19. Roadmap Técnico",
    ],
  },
];

// ── SECTIONS ──────────────────────────────────────────────────
const sections = [
  {
    id: "intro",
    num: 1,
    title: "Introducción",
    subtitle: "Visión general del proyecto frontend de Sena",
    content: () => (
      <>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Sena es una plataforma web diseñada para optimizar la gestión
          financiera y operativa de empresas en Latinoamérica. Su frontend fue
          construido con un enfoque en rendimiento, personalización y
          escalabilidad, permitiendo adaptarse a las necesidades de cada cliente
          y región.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          La interfaz es completamente responsiva, soporta múltiples idiomas y
          variantes regionales, y está preparada para operar con grandes
          volúmenes de datos sin sacrificar la experiencia del usuario.
        </p>
        <InfoBox type="note">
          El proyecto no utiliza librerías de UI genéricas como Material UI o
          Ant Design. Esto permite customizar cada componente de acuerdo a los
          requerimientos específicos del producto, aprovechando inteligencia
          artificial para acelerar la lógica de componentes comunes y dedicando
          el tiempo del equipo a la calidad visual de cada pieza.
        </InfoBox>
      </>
    ),
  },
  {
    id: "stack",
    num: 2,
    title: "Stack Tecnológico",
    subtitle: "Herramientas y librerías que conforman la base del proyecto",
    content: () => (
      <Table
        heads={["Capa", "Tecnología", "Propósito"]}
        rows={[
          [
            "Framework principal",
            <Inline>React + Vite + TypeScript</Inline>,
            "Base del proyecto con tipado fuerte y compilación optimizada",
          ],
          [
            "Peticiones HTTP",
            <Inline>Axios</Inline>,
            "Comunicación con APIs con soporte de interceptores",
          ],
          [
            "Estado remoto",
            <Inline>React Query</Inline>,
            "Cacheo, revalidación y manejo de estados de peticiones",
          ],
          [
            "Estilos",
            <Inline>Tailwind CSS + CSS nativo</Inline>,
            "Estilizado flexible y completamente personalizable",
          ],
          [
            "Estado global",
            <Inline>Context API + Zustand</Inline>,
            "Manejo de estado según complejidad y frecuencia de cambio",
          ],
          [
            "Enrutamiento",
            <Inline>React Router DOM v6</Inline>,
            "Rutas protegidas, públicas y navegación declarativa",
          ],
          [
            "Formularios",
            <Inline>React Hook Form</Inline>,
            "Validación y manejo de formularios de alto rendimiento",
          ],
          [
            "Internacionalización",
            <Inline>i18n</Inline>,
            "Traducciones por idioma y variante regional",
          ],
        ]}
      />
    ),
  },
  {
    id: "structure",
    num: 3,
    title: "Estructura del Proyecto",
    subtitle: "Arquitectura híbrida: feature + type",
    content: () => (
      <>
        <p className="text-sm text-gray-700 mb-4">
          El proyecto sigue una arquitectura híbrida que combina organización
          por funcionalidad (feature) y por tipo.
        </p>
        <CodeBlock>{`src/
 ├─ api/           → Configuración de instancias Axios e interceptores
 ├─ assets/        → Imágenes e íconos SVG exportados como componentes
 ├─ components/    → Componentes reutilizables de UI
 ├─ config/        → Variables de entorno y tipos de configuración
 ├─ context/       → Contextos de React para estado global
 ├─ features/      → Módulos de negocio (XCollect, XPay, Tools, Config…)
 ├─ globalHooks/   → Hooks globales reutilizables entre módulos
 ├─ locales/       → Archivos de traducción por país y región
 ├─ router/        → Configuración de rutas protegidas y públicas
 ├─ stores/        → Stores de Zustand para estado reactivo global
 ├─ types/         → Definiciones de tipos TypeScript compartidos
 └─ utils/         → Funciones auxiliares, helpers y skeletons`}</CodeBlock>
        <TwoCol
          left={
            <>
              <H4>🔒 Rutas protegidas</H4>
              <DocList
                items={[
                  "Dashboard",
                  "XCollect (Cobros)",
                  "XPay (Pagos)",
                  "Tools (Herramientas)",
                  "Config (Configuración)",
                ]}
              />
            </>
          }
          right={
            <>
              <H4>🌐 Rutas públicas</H4>
              <DocList items={["Login", "Signup / Registro", "Onboarding"]} />
            </>
          }
        />
      </>
    ),
  },
  {
    id: "api",
    num: 4,
    title: "Capa de API y Peticiones",
    subtitle: "Axios, interceptores y React Query",
    content: () => (
      <>
        <H3>Configuración de Axios</H3>
        <p className="text-sm text-gray-700 mb-3">
          <strong>config.tsx</strong> centraliza y exporta las URLs base de cada
          API. <strong>index.tsx</strong> configura los interceptores de
          respuesta:
        </p>
        <DocList
          items={[
            "Si la respuesta es exitosa, la retorna normalmente al componente que la solicitó.",
            <span>
              Si ocurre un error <Inline>403</Inline>, limpia el almacenamiento
              local y redirige automáticamente al login.
            </span>,
            <span>
              Otros errores se propagan con <Inline>Promise.reject</Inline> para
              ser manejados individualmente.
            </span>,
          ]}
        />
        <H3>React Query — Estado de peticiones</H3>
        <CardGrid
          items={[
            {
              icon: "⚡",
              title: "Cacheo inteligente",
              desc: "Las respuestas se almacenan en caché y se reutilizan sin llamadas innecesarias.",
            },
            {
              icon: "🔄",
              title: "Revalidación automática",
              desc: "Los datos se actualizan por tiempo, al cambiar de pestaña, etc.",
            },
            {
              icon: "🎯",
              title: "Estados declarativos",
              desc: "Cada petición expone isLoading, isError e isSuccess.",
            },
            {
              icon: "🔷",
              title: "Tipado fuerte",
              desc: "Todas las peticiones se tipean con TypeScript para seguridad en tiempo de compilación.",
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "assets",
    num: 5,
    title: "Assets e Íconos",
    subtitle: "Gestión de imágenes, íconos SVG y recursos estáticos",
    content: () => (
      <>
        <H3>Estructura de assets</H3>
        <p className="text-sm text-gray-700 mb-3">
          Todos los recursos estáticos se centralizan en la carpeta{" "}
          <Inline>src/assets/</Inline> y se exportan como módulos TypeScript
          para garantizar tipado y trazabilidad.
        </p>
        <Table
          heads={["Tipo", "Ubicación", "Uso"]}
          rows={[
            [<Inline>images/</Inline>, "Imágenes PNG, JPG, WebP", "Logos, ilustraciones y fondos"],
            [<Inline>icons/</Inline>, "SVGs exportados como componentes React", "Íconos de interfaz y acciones"],
            [<Inline>fonts/</Inline>, "Tipografías locales", "Consistencia tipográfica sin CDN externo"],
          ]}
        />
        <H3>Íconos SVG como componentes</H3>
        <DocList items={[
          "Cada ícono SVG se convierte en un componente React con props de tamaño y color.",
          "Permite cambiar color dinámicamente desde el código sin CSS adicional.",
          "El tamaño se controla mediante props width y height.",
          "Se agrupan por categoría: navegación, acciones, estados, finanzas.",
        ]} />
        <InfoBox type="note">
          Los íconos no dependen de ninguna librería externa (FontAwesome, Heroicons, etc.). Esto garantiza control total sobre el set de íconos, tamaño del bundle y coherencia visual con el diseño de Sena.
        </InfoBox>
      </>
    ),
  },
  {
    id: "components",
    num: 6,
    title: "Componentes de Interfaz",
    subtitle: "Biblioteca de componentes reutilizables de Sena",
    content: () => (
      <>
        <H3 id="s6-header">Header</H3>
        <DocList
          items={[
            "Muestra el logo y nombre de la plataforma.",
            "Incluye menú de navegación principal y accesos rápidos.",
            "Muestra información del usuario autenticado (nombre, avatar).",
            "Gestiona diseño responsivo para escritorio y móvil.",
            "Permanece fija en la parte superior en todo momento.",
          ]}
        />
        <H3 id="s6-modal">Modal</H3>
        <TwoCol
          left={
            <>
              <H4>Modal Bloqueante</H4>
              <p className="text-xs text-gray-600">
                El fondo queda bloqueado. El usuario debe cerrar el modal para
                continuar interactuando.
              </p>
            </>
          }
          right={
            <>
              <H4>Modal Flotante</H4>
              <p className="text-xs text-gray-600">
                No bloquea la interacción. Soporta posicionamiento
                personalizado.
              </p>
            </>
          }
        />
        <PropsTable
          rows={[
            ["isOpen", "boolean", "Controla la visibilidad del modal"],
            ["onClose", "() => void", "Función al cerrar el modal"],
            ["title", "string | JSX.Element", "Título del modal"],
            ["width / height", "string", "Dimensiones (default: 500px / auto)"],
            ["footerButtons", "ReactNode", "Botones de acción en el pie"],
            ["nonBlocking", "boolean", "Activa el modo flotante"],
            [
              "position",
              "{top,right,bottom,left}",
              "Posición para modal flotante",
            ],
            [
              "closeOnOutsideClick",
              "boolean",
              "Cierra al hacer clic fuera (default: true)",
            ],
          ]}
        />
        <H3 id="s6-selectores">Selectores</H3>
        <Table
          heads={["Componente", "Descripción", "Uso"]}
          rows={[
            [
              <Inline>FloatLabelSelect</Inline>,
              "Etiqueta flotante animada. El más utilizado.",
              "Formularios principales",
            ],
            [
              <Inline>CustomSelect</Inline>,
              "Selector base con opciones simples.",
              "Filtros y configuración",
            ],
            [
              <Inline>CustomMultipleSelect</Inline>,
              "Selección múltiple.",
              "Filtros avanzados",
            ],
            [
              <Inline>HierarchicalSelect</Inline>,
              "Selector jerárquico multinivel.",
              "Área → Centro de Costo → Cuenta",
            ],
            [
              <Inline>MultiSelectTags</Inline>,
              "Selección múltiple con etiquetas.",
              "Etiquetado y categorización",
            ],
          ]}
        />
        <H3 id="s6-tablas">Tablas Avanzadas</H3>
        <CardGrid
          items={[
            {
              icon: "🔍",
              title: "Filtrado y búsqueda",
              desc: "Filtros por texto, número, fecha y estado.",
            },
            {
              icon: "↕️",
              title: "Ordenamiento",
              desc: "Por columna mediante dropdown configurable.",
            },
            {
              icon: "📄",
              title: "Paginación",
              desc: "15, 20, 30 o 100 registros por página.",
            },
            {
              icon: "⚙️",
              title: "Columnas configurables",
              desc: "Reordenamiento y ocultamiento por el usuario.",
            },
            {
              icon: "💾",
              title: "Persistencia",
              desc: "Preferencias conservadas entre sesiones.",
            },
            {
              icon: "⚡",
              title: "Tiempo real",
              desc: "Datos actualizados via WebSockets.",
            },
          ]}
        />
        <H4>Subcomponentes</H4>
        <Table
          heads={["Componente", "Función"]}
          rows={[
            [
              <Inline>ButtonActions</Inline>,
              "Acciones por fila: editar, eliminar, ver detalle",
            ],
            [<Inline>DateFilterTable</Inline>, "Filtro por rango de fechas"],
            [
              <Inline>EditColumns</Inline>,
              "Panel de columnas visibles/ocultas",
            ],
            [<Inline>OrderDropdownTable</Inline>, "Ordenamiento por columna"],
            [
              <Inline>Pagination</Inline>,
              "Control de páginas y registros por página",
            ],
            [
              <Inline>SendColumnsByEmail</Inline>,
              "Envío de columnas por email",
            ],
            [
              <Inline>StatusFilterTable</Inline>,
              "Filtro por estado con valores predefinidos",
            ],
            [
              <Inline>StringFilterTable</Inline>,
              "Filtro de texto libre por columna",
            ],
          ]}
        />
        <H3 id="s6-toast">Toast — Notificaciones</H3>
        <div className="flex gap-2 flex-wrap my-3">
          <Badge color="green">éxito</Badge>
          <Badge color="orange">advertencia</Badge>
          <Badge color="gray">error</Badge>
          <Badge color="blue">información</Badge>
        </div>
        <DocList
          items={[
            "Desaparece automáticamente tras el tiempo configurado.",
            "Puede cerrarse manualmente con botón de cierre.",
            "Soporta múltiples toasts simultáneos o en secuencia.",
            "Animaciones de entrada y salida.",
          ]}
        />
      </>
    ),
  },
  {
    id: "state",
    num: 7,
    title: "Gestión de Estado Global",
    subtitle: "Context API vs Zustand",
    content: () => (
      <>
        <TwoCol
          left={
            <>
              <H4>✅ Context API de React</H4>
              <p className="text-xs text-gray-600 mb-3">
                Para estado que cambia con poca frecuencia.
              </p>
              <p className="text-xs font-semibold text-green-700 mb-1">
                Ventajas
              </p>
              <DocList
                items={[
                  "Nativo de React, sin dependencias",
                  "Ideal para usuario, idioma, tema",
                  "Integración directa con React",
                ]}
              />
              <p className="text-xs font-semibold text-yellow-700 mt-3 mb-1">
                Limitaciones
              </p>
              <DocList
                items={[
                  "Re-renderiza todos los consumidores",
                  "No optimizado para estados frecuentes",
                  "Difícil de escalar en contextos grandes",
                ]}
              />
            </>
          }
          right={
            <>
              <H4>⚡ Zustand Store</H4>
              <p className="text-xs text-gray-600 mb-3">
                Para estados de alta frecuencia de cambio.
              </p>
              <p className="text-xs font-semibold text-green-700 mb-1">
                Ventajas
              </p>
              <DocList
                items={[
                  "Suscripción selectiva por componente",
                  "Optimizado para datos frecuentes",
                  "Soporta middlewares y persistencia",
                  "API simple y escalable",
                ]}
              />
              <p className="text-xs font-semibold text-yellow-700 mt-3 mb-1">
                Limitaciones
              </p>
              <DocList
                items={[
                  "Requiere dependencia externa",
                  "Menos integrado con el ciclo de React",
                ]}
              />
            </>
          }
        />
        <InfoBox type="note">
          La estrategia es migrar progresivamente los contextos más críticos
          hacia Zustand, de forma incremental y sin comprometer la estabilidad
          del sistema.
        </InfoBox>
      </>
    ),
  },
  {
    id: "contexts",
    num: 8,
    title: "Contextos Principales",
    subtitle: "Estado global compartido mediante Context API",
    content: () => (
      <>
        <H3>8.1 UserContext</H3>
        <DocList
          items={[
            "Centraliza datos del usuario: nombre, email, avatar, roles, permisos y empresa seleccionada.",
            "Controla el inicio y cierre de sesión desde cualquier componente.",
            "Permite proteger rutas según el rol del usuario.",
            "Toda la aplicación opera en el contexto de la empresa seleccionada y el usuario logueado.",
          ]}
        />
        <H3>8.2 GlobalTypesItemsContext</H3>
        <p className="text-sm text-gray-700 mb-3">
          Provee todas las listas y variables globales usadas en selectores,
          filtros y formularios.
        </p>
        <Table
          heads={["Variable", "Contenido"]}
          rows={[
            [
              <Inline>list_countries / list_phone_code</Inline>,
              "Listados de países y códigos telefónicos",
            ],
            [
              <Inline>list_currencies / list_banks</Inline>,
              "Monedas y bancos disponibles",
            ],
            [
              <Inline>list_cost_centers</Inline>,
              "Centros de costo de la empresa",
            ],
            [
              <Inline>list_accounting_accounts</Inline>,
              "Cuentas contables disponibles",
            ],
            [
              <Inline>list_stage / list_sub_stage</Inline>,
              "Etapas y subestapas de gestión",
            ],
            [
              <Inline>configuration_company_json</Inline>,
              "Configuración de empresa en JSON",
            ],
            [
              <Inline>configuration_invoice_json</Inline>,
              "Configuración de facturas emitidas",
            ],
            [
              <Inline>configuration_invoice_received_json</Inline>,
              "Configuración de facturas recibidas",
            ],
            [
              <Inline>configuration_provider_json</Inline>,
              "Configuración de proveedores",
            ],
          ]}
        />
        <H3>8.3 TableColumnsContext</H3>
        <p className="text-sm text-gray-700 mb-3">
          Centraliza columnas, filtros y visibilidad por defecto para todas las
          tablas.
        </p>
        <div className="flex flex-wrap gap-2 my-3">
          {[
            "Clientes",
            "Proveedores",
            "Conciliaciones",
            "Contactos",
            "Aprobaciones",
            "Nóminas",
            "Anticipos",
            "CRM",
            "Conciliador",
          ].map((m) => (
            <Badge key={m} color="blue">
              {m}
            </Badge>
          ))}
        </div>
        <H3>8.4 Otros contextos</H3>
        <Table
          heads={["Contexto", "Responsabilidad"]}
          rows={[
            [
              "MenuItemsContext",
              "Ítems del menú dinámicos según rol del usuario",
            ],
            ["CurrencyContext", "Moneda seleccionada (soles, dólares, pesos…)"],
            [
              "DashboardContext",
              "Estado del panel principal y widgets visibles",
            ],
            ["OnboardingContext", "Avance y datos del proceso de onboarding"],
            [
              "WhatsappContext",
              "Estado de conexión, mensajes y contactos WhatsApp",
            ],
          ]}
        />
      </>
    ),
  },
  {
    id: "stores",
    num: 9,
    title: "Stores de Zustand",
    subtitle: "Estado global reactivo para datos de alta frecuencia",
    content: () => (
      <Table
        heads={["Store", "Propósito", "Datos principales"]}
        rows={[
          [
            <Inline>crmStore</Inline>,
            "Estado global del CRM",
            "Clientes, conversaciones, mensajes, paneles",
          ],
          [
            <Inline>currencyStore</Inline>,
            "Moneda seleccionada globalmente",
            "Moneda activa (PEN, CLP, USD…)",
          ],
          [
            <Inline>invoicesStore</Inline>,
            "Estado de facturas",
            "Listas, acciones de agregar/actualizar/filtrar",
          ],
          [
            <Inline>timeZoneAccountStore</Inline>,
            "Zona horaria de la cuenta",
            "Zona activa para mostrar fechas correctas",
          ],
          [
            <Inline>toastStore</Inline>,
            "Notificaciones toast globales",
            "Lista de toasts activos y acciones",
          ],
          [
            <Inline>whatsappStore</Inline>,
            "Integración WhatsApp",
            "Conexión, mensajes, contactos",
          ],
        ]}
      />
    ),
  },
  {
    id: "auth",
    num: 10,
    title: "Autenticación",
    subtitle: "Login, Signup y Onboarding",
    content: () => (
      <>
        <H3>10.1 Login</H3>
        <p className="text-sm text-gray-700 mb-3">
          Esquema de <strong>token + refresh token</strong> para validar la
          identidad del usuario.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 my-3">
          <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
            <li>El usuario ingresa email y contraseña.</li>
            <li>Se validan los datos con React Hook Form antes de enviar.</li>
            <li>Se realiza la petición de autenticación al backend.</li>
            <li>
              Si es exitoso → se actualiza UserContext, se guardan tokens y se
              redirige.
            </li>
            <li>
              Si hay error → mensaje claro (credenciales incorrectas, usuario
              inactivo, etc.).
            </li>
          </ol>
        </div>
        <H3>10.2 Signup — Registro</H3>
        <Table
          heads={["Componente", "Descripción"]}
          rows={[
            [
              <Inline>SignupComponent</Inline>,
              "Registro estándar con campos básicos y validación",
            ],
            [
              <Inline>SignupNewComponent</Inline>,
              "Registro extendido multi-paso con UI dinámica",
            ],
            [
              <Inline>CXCSignupComponent</Inline>,
              "Registro específico para clientes del módulo de cobros",
            ],
            [
              <Inline>CXPSignupComponent</Inline>,
              "Registro específico para clientes del módulo de pagos",
            ],
          ]}
        />
        <H3>10.3 Onboarding</H3>
        <p className="text-sm text-gray-700">
          Proceso guiado de configuración inicial (Step1–Step8) con validación
          progresiva, selector de calendario y configuración de SII/SUNAT. El
          estado se gestiona mediante <Inline>OnboardingContext</Inline>.
        </p>
      </>
    ),
  },
  {
    id: "xcollect",
    num: 11,
    title: "XCollect — Módulo de Cobros",
    subtitle: "Gestión de cuentas por cobrar, facturas y conciliaciones",
    content: () => (
      <>
        <H3>11.1 Facturas Emitidas</H3>
        <DocList
          items={[
            "Soporte para facturas SII (Chile) y SUNAT (Perú) con generación de PDF.",
            "Vista individual: Identificación, Caracterización, Gestión, Pagos, Conciliaciones.",
            "Gestión de notas y cambios de estado con historial.",
          ]}
        />
        <H3>11.2 Conciliaciones</H3>
        <DocList
          items={[
            "Conciliador visual para emparejar facturas con pagos.",
            "Acciones de aprobación, rechazo y anulación.",
            "Gestión de compromisos de pago por cliente.",
            "Hooks dedicados por tipo de tabla: facturas, pagos y compromisos.",
          ]}
        />
        <H3>11.3 Pagos Recibidos y Contactos</H3>
        <DocList
          items={[
            "Gestión de pagos recibidos con vista individual detallada.",
            "Gestión de contactos comerciales con tabla de emails y teléfonos.",
          ]}
        />
      </>
    ),
  },
  {
    id: "xpay",
    num: 12,
    title: "XPay — Módulo de Pagos",
    subtitle: "Gestión de cuentas por pagar, aprobaciones y contabilización",
    content: () => (
      <>
        <H3>12.1 Motor de Registros Contables</H3>
        <Table
          heads={["Registro", "Descripción", "Condición"]}
          rows={[
            [
              <Badge color="blue">C1</Badge>,
              "Registro contable de primer nivel",
              "Siempre disponible para documentos válidos",
            ],
            [
              <Badge color="purple">C2</Badge>,
              "Registro contable de segundo nivel",
              "Según tipo y estado del documento",
            ],
            [
              <Badge color="green">C3</Badge>,
              "Registro contable de tercer nivel",
              "Solo cuando el documento cumple todas las condiciones de negocio",
            ],
          ]}
        />
        <DocList
          items={[
            "Soporta facturas, anticipos y boletas de honorarios en un flujo unificado.",
            "C3 evita asientos con información no consolidada.",
            "Trazabilidad completa entre documento origen y registro generado.",
            "Permite operación masiva sobre múltiples documentos.",
          ]}
        />
        <H3>12.2 Clasificación Contable en 3 Niveles</H3>
        <div className="flex items-center gap-3 flex-wrap justify-center my-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
          {[
            {
              color: "border-[#2270D0] bg-[#2270D0]/10",
              label: "Nivel 1",
              title: "Área de Negocio",
              tc: "text-[#2270D0]",
            },
            {
              color: "border-green-400 bg-green-50",
              label: "Nivel 2",
              title: "Centro de Costo",
              tc: "text-green-600",
            },
            {
              color: "border-orange-400 bg-orange-50",
              label: "Nivel 3",
              title: "Cuenta Contable",
              tc: "text-orange-600",
            },
          ].map((n, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`border-2 ${n.color} rounded-xl px-5 py-3 text-center`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-wider ${n.tc} mb-1`}
                >
                  {n.label}
                </div>
                <div className="text-sm font-bold text-gray-900">{n.title}</div>
              </div>
              {i < 2 && <span className="text-gray-400 text-xl">→</span>}
            </div>
          ))}
        </div>
        <H3>12.3 Aprobaciones</H3>
        <DocList
          items={[
            "Constructor visual del flujo con diagrama interactivo (FlowBuilder, FlowDiagram).",
            "Configuración de nominados por etapa.",
            "Panel lateral para edición de detalles.",
            "Vista detallada con flujo, documentos adjuntos e información de pago.",
          ]}
        />
        <H3>12.4 Anticipos, Proveedores y Nóminas</H3>
        <DocList
          items={[
            "Anticipos integrados al flujo contable con trazabilidad entre documento origen y registro.",
            "Proveedores con información de empresa, anticipos asociados y contactos.",
            "Nóminas con vista individual y hooks específicos del módulo.",
          ]}
        />
      </>
    ),
  },
  {
    id: "tools",
    num: 13,
    title: "Tools — Herramientas Avanzadas",
    subtitle: "Automatización, CRM, campañas e importaciones",
    content: () => (
      <>
        <H3>13.1 CRM Multicanal</H3>
        <Table
          heads={["Canal", "Componentes principales"]}
          rows={[
            [
              "📱 WhatsApp",
              "Mensajería directa, gestión de contactos y estado de conexión",
            ],
            ["📧 Email", "Editor de bandeja, historial, panel de gestión"],
            ["💬 SMS", "Envío y recepción de mensajes de texto"],
            [
              "📞 Llamadas",
              "Panel, historial y gestión de contactos telefónicos",
            ],
            [
              "🗨️ Chat interno",
              "FlujoChat para comunicación interna del equipo",
            ],
          ]}
        />
        <H3>13.2 Campañas</H3>
        <DocList
          items={[
            "Editor de texto enriquecido con TipTap.",
            "Variables dinámicas: texto, número, fecha y selector.",
            "Gestión de plantillas, visualización de campañas ejecutadas.",
            "Configuración de tipografía y estilos de contenido.",
          ]}
        />
        <H3>13.3 Otros submódulos</H3>
        <Table
          heads={["Módulo", "Descripción"]}
          rows={[
            [
              "Automatizaciones",
              "Configuración de procesos automáticos para reducir tareas manuales",
            ],
            [
              "Flujos",
              "Flujos configurables con ajustes de aprobaciones y nóminas",
            ],
            [
              "Importaciones/Exportaciones",
              "Gestión masiva de datos con exportaciones personalizadas",
            ],
            [
              "Propiedades Personalizables",
              "Campos y atributos adaptables por empresa",
            ],
            [
              "Plantillas",
              "Plantillas reutilizables para comunicaciones y procesos",
            ],
          ]}
        />
      </>
    ),
  },
  {
    id: "config",
    num: 14,
    title: "Config — Configuración",
    subtitle: "Administración central de empresa, usuarios e integraciones",
    content: () => (
      <>
        <Table
          heads={["Submódulo", "Contenido"]}
          rows={[
            [
              "Empresa",
              "Información básica, cuenta, marca (logo, colores) y procesos internos",
            ],
            [
              "Cuentas Bancarias",
              "Lista de cuentas con CRUD completo; reutilizado en aprobaciones y pagos",
            ],
            [
              "Integraciones",
              "SII (Chile), SUNAT (Perú), Google, Microsoft y Email",
            ],
            [
              "Permisos y Roles",
              "Usuarios, grupos, roles granulares y módulo de auditoría",
            ],
            [
              "Suscripción",
              "Plan actual, cambio de plan, método de pago y comprobantes",
            ],
            ["Seguridad", "Contraseñas, autenticación y parámetros de acceso"],
            [
              "Notificaciones",
              "Preferencias de notificaciones de la aplicación",
            ],
            ["Facturación", "Datos de facturación de la empresa"],
          ]}
        />
      </>
    ),
  },
  {
    id: "i18n",
    num: 15,
    title: "Internacionalización",
    subtitle: "Soporte multipaís y multidioma",
    content: () => (
      <Table
        heads={["Región", "Ruta", "Descripción"]}
        rows={[
          [
            "Español general",
            <Inline>es/translation.json</Inline>,
            "Base en español neutro para todos los mercados",
          ],
          [
            "🇨🇱 Chile",
            <Inline>es/CL/translation.json</Inline>,
            "Adaptado al español chileno",
          ],
          [
            "🇲🇽 México",
            <Inline>es/MX/translation.json</Inline>,
            "Adaptado al español mexicano",
          ],
          [
            "🇵🇪 Perú",
            <Inline>es/PE/translation.json</Inline>,
            "Adaptado al español peruano",
          ],
          [
            "🇺🇸 Inglés",
            <Inline>en/translation.json</Inline>,
            "Soporte en inglés",
          ],
        ]}
      />
    ),
  },
  {
    id: "security",
    num: 16,
    title: "Seguridad y Autenticación",
    subtitle: "Mecanismos de protección de la plataforma",
    content: () => (
      <CardGrid
        items={[
          {
            icon: "🔑",
            title: "Token + Refresh Token",
            desc: "Autenticación con doble token para validar identidad en cada sesión.",
          },
          {
            icon: "🛡️",
            title: "Interceptores Axios",
            desc: "Detectan sesiones vencidas (401) y accesos no autorizados (403).",
          },
          {
            icon: "🚧",
            title: "Rutas protegidas",
            desc: "Validan permisos antes de renderizar cualquier módulo.",
          },
          {
            icon: "👤",
            title: "Control por rol",
            desc: "Visibilidad de módulos y acciones según el tipo de usuario.",
          },
          {
            icon: "🤖",
            title: "Google reCAPTCHA",
            desc: "Protección de formularios críticos contra bots y spam.",
          },
          {
            icon: "🔍",
            title: "ErrorBoundary + Sentry",
            desc: "Captura errores sin interrumpir la UX, con reporte automático.",
          },
        ]}
      />
    ),
  },
  {
    id: "utils",
    num: 17,
    title: "Utilidades y Helpers",
    subtitle: "Funciones transversales del proyecto",
    content: () => (
      <Table
        heads={["Función", "Descripción"]}
        rows={[
          [
            <Inline>formatCurrency</Inline>,
            "Formatea números como moneda según código y región. Soporta K, M, B.",
          ],
          [
            <Inline>formatDate</Inline>,
            "Fechas con soporte UTC y zonas horarias usando dayjs.",
          ],
          [
            <Inline>exportToExcel</Inline>,
            "Exporta datos tabulares a .xlsx con columnas configurables.",
          ],
          [
            <Inline>cn</Inline>,
            "Combina clases CSS con clsx y tailwind-merge.",
          ],
          [
            <Inline>timeAgo</Inline>,
            "Tiempo transcurrido: 'hace 2 días', 'hace 1 mes'.",
          ],
          [
            <Inline>capitalizePhrase</Inline>,
            "Capitaliza frases respetando siglas y excepciones.",
          ],
          [
            <Inline>generateUniqueCode</Inline>,
            "Códigos únicos con prefijo, timestamp y número aleatorio.",
          ],
          [
            <Inline>checkEmptyValue</Inline>,
            "Retorna valor o cadena vacía si es null.",
          ],
          [
            <Inline>scrollToContent</Inline>,
            "Scroll a elemento con resaltado temporal.",
          ],
          [
            <Inline>goBack / goForward</Inline>,
            "Navegación en el historial del navegador.",
          ],
        ]}
      />
    ),
  },
  {
    id: "tests",
    num: 18,
    title: "Tests Automatizados",
    subtitle: "Estrategia de calidad con Playwright",
    content: () => (
      <>
        <Table
          heads={["Archivo", "Descripción"]}
          rows={[
            [
              <Inline>example.spec.ts</Inline>,
              "Referencia de estructura base para nuevos tests",
            ],
            [
              <Inline>login.spec.ts</Inline>,
              "Credenciales válidas/inválidas, redirección y mensajes de error",
            ],
            [
              <Inline>signup.spec.ts</Inline>,
              "Validación de campos, proceso exitoso y manejo de errores",
            ],
          ]}
        />
        <InfoBox type="success">
          El plan es expandir progresivamente la cobertura hacia todos los
          flujos críticos, integrado en el pipeline de CI/CD.
        </InfoBox>
      </>
    ),
  },
  {
    id: "roadmap",
    num: 19,
    title: "Roadmap Técnico",
    subtitle: "Evolución planificada de la plataforma",
    content: () => (
      <div className="space-y-5 mt-2">
        {[
          {
            title: "Traducciones automatizadas con IA",
            desc: "Archivo base como diccionario global para generar traducciones automáticamente. Eliminará el esfuerzo manual al incorporar nuevas funcionalidades.",
          },
          {
            title: "Migración de contextos a Zustand",
            desc: "Migración incremental de UserContext, TableContext y GlobalTypesContext, mejorando rendimiento sin comprometer la estabilidad.",
          },
          {
            title: "Configuración de tablas desde el backend",
            desc: "Toda la configuración de tablas (columnas, filtros, orden) provendrá del backend, eliminando duplicidad de lógica entre módulos.",
          },
          {
            title: "Suite de tests E2E completa",
            desc: "Plan de testing automatizado con Playwright para todos los flujos críticos, integrado en CI/CD.",
          },
          {
            title: "Estandarización del manejo de errores",
            desc: "Interceptor global de errores y migración a React Query, con estructura estandarizada en el backend.",
          },
          {
            title: "Seguridad de entornos de desarrollo",
            desc: "Criterios mínimos: antivirus, políticas de contraseñas seguras y revisiones periódicas de los entornos.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-9 h-9 rounded-full bg-[#2270D0] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
              {i + 1}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

// ── MAIN COMPONENT ────────────────────────────────────────────
export const DocsPage = () => {
  const [active, setActive] = useState("intro");
  const [activeItem, setActiveItem] = useState("1. Introducción");

  const current = sections.find((s) => s.id === active) || sections[0];
  const currentIdx = sections.findIndex((s) => s.id === active);

  const subItemAnchors: Record<string, string> = {
    "Header": "s6-header",
    "Modal": "s6-modal",
    "Selectores": "s6-selectores",
    "Tablas Avanzadas": "s6-tablas",
    "Toast — Notificaciones": "s6-toast",
  };

  const HEADER_OFFSET = 72 + 32; // sticky header + padding

  const scrollToAnchor = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleTocClick = (item: string) => {
    const trimmed = item.trim();
    const isSubItem = item.startsWith("   ");
    const anchor = subItemAnchors[trimmed];

    let matched;
    if (isSubItem && anchor) {
      const secNum = parseInt(anchor.replace("s", "").split("-")[0]);
      matched = sections.find((s) => s.num === secNum);
    } else {
      const sNum = trimmed.split(".")[0];
      matched = sections.find((s) => s.num === parseInt(sNum));
    }
    if (!matched) return;

    const sectionChanged = matched.id !== active;
    setActive(matched.id);
    setActiveItem(item);

    if (anchor) {
      // Sub-item: if section changes wait for render, then scroll to anchor with header offset
      setTimeout(() => scrollToAnchor(anchor), sectionChanged ? 120 : 0);
    } else {
      // Regular section: snap to top instantly
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto flex">
        {/* SIDEBAR */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto bg-white border-r border-gray-200 py-6">
          {tocSections.map((sec) => (
            <div key={sec.label} className="mb-4 px-4">
              <p className="text-xs font-bold text-[#2270D0] uppercase tracking-wider mb-2">
                {sec.label}
              </p>
              {sec.items.map((item) => {
                const isSubItem = item.startsWith("   ");
                return (
                  <button
                    key={item}
                    onClick={() => handleTocClick(item)}
                    className={`w-full text-left text-xs py-1.5 rounded-lg transition-colors ${
                      isSubItem ? "pl-5 pr-2" : "px-2"
                    } ${
                      activeItem === item
                        ? "bg-[#2270D0]/10 text-[#2270D0] font-semibold"
                        : isSubItem
                        ? "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.trim()}
                  </button>
                );
              })}
            </div>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0 p-8 max-w-3xl">
          {/* Cover card */}
          {active === "intro" && (
            <div className="mb-8 rounded-2xl bg-linear-to-br from-gray-900 via-[#0f2a5e] to-gray-900 text-white p-8">
              <div className="inline-block bg-[#2270D0]/20 border border-[#2270D0]/40 text-blue-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Documentación Técnica · v2.0
              </div>
              <h1 className="text-4xl font-bold mb-2 bg-linear-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Sena
              </h1>
              <p className="text-blue-100 text-lg font-light mb-6">
                Frontend Documentation
              </p>
              <div className="flex gap-6 flex-wrap">
                {[
                  ["Versión", "2.0"],
                  ["Audiencia", "Clientes & Stakeholders"],
                  ["Framework", "React + Vite + TS"],
                  ["Año", "2025"],
                ].map(([l, v]) => (
                  <div key={l}>
                    <div className="text-xs text-blue-300 uppercase tracking-wider mb-0.5">
                      {l}
                    </div>
                    <div className="text-sm font-medium text-white">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <SectionHeader
            num={current.num}
            title={current.title}
            subtitle={current.subtitle}
          />
          <current.content />

          {/* PREV / NEXT */}
          <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                if (currentIdx > 0) {
                  const prev = sections[currentIdx - 1];
                  setActive(prev.id);
                  setActiveItem(`${prev.num}. ${prev.title}`);
                  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
                }
              }}
              disabled={currentIdx === 0}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#2270D0] disabled:opacity-30 transition-colors"
            >
              ← {currentIdx > 0 ? sections[currentIdx - 1].title : ""}
            </button>
            <button
              onClick={() => {
                if (currentIdx < sections.length - 1) {
                  const next = sections[currentIdx + 1];
                  setActive(next.id);
                  setActiveItem(`${next.num}. ${next.title}`);
                  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
                }
              }}
              disabled={currentIdx === sections.length - 1}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#2270D0] disabled:opacity-30 transition-colors"
            >
              {currentIdx < sections.length - 1
                ? sections[currentIdx + 1].title
                : ""}{" "}
              →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocsPage;
