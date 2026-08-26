export type ProjectStatus = "En Producción" | "Beta" | "Demo";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  timeline: string;
  stack: string[];
  status: ProjectStatus;
  url: string;
  isFlagship?: boolean;
  features?: string[];
  impact?: string;
}

export const projects: Project[] = [
  {
    id: "aomori-store",
    title: "Aomori Store",
    shortDescription:
      "Plataforma e-commerce + panel de administración completo para un emprendimiento de merchandising de anime activo en producción.",
    longDescription:
      "Desarrollé de forma integral la plataforma web de Aomori Store, mi emprendimiento de merchandising de anime. El sistema incluye el catálogo público con experiencia de compra y un panel de administración completo: gestión de productos, ventas, compras, categorías, reseñas y participación en ferias. El stock se sincroniza entre las ventas online y las presenciales cargadas por el equipo. Además, integré un tablero Kanban con vista dual para la gestión de tareas internas.",
    role: "Fullstack Developer & Co-fundador",
    timeline: "Mayo 2026 – Presente",
    stack: ["Next.js", "TypeScript", "Firebase"],
    status: "En Producción",
    url: "https://www.aomoristore.com.ar/",
    isFlagship: true,
    features: [
      "Catálogo público con filtros y búsqueda",
      "Panel de administración completo",
      "Gestión de stock sincronizado (online + ferias)",
      "Tablero Kanban con vista dual para el equipo",
      "Módulo de reseñas y registro de ventas",
    ],
    impact:
      "Negocio activo en producción desde mayo 2025, gestionando ventas online y presenciales en ferias.",
  },
  {
    id: "soporte-nutricional",
    title: "Soporte Nutricional",
    shortDescription:
      "App de gestión de pacientes con alimentación enteral y parenteral, con cálculo automático de requerimientos nutricionales.",
    longDescription:
      "A pedido de una Licenciada en Nutrición, relevé su flujo real de trabajo y diseñé una solución que elimina los cálculos manuales. La app permite cargar fórmulas nutricionales con valores por ml, calcular automáticamente los requerimientos de proteína y kcal según el peso del paciente, y registrar la evolución clínica de cada caso. El foco estuvo en la precisión clínica y la simplicidad de uso para la profesional.",
    role: "Fullstack Developer (Freelance)",
    timeline: "Marzo 2026 – Julio 2026",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    status: "Beta",
    url: "https://nutrition-demo-alpha.vercel.app",
    features: [
      "Carga de fórmulas nutricionales por ml",
      "Cálculo automático de proteínas y kcal por peso",
      "Registro de evolución de pacientes",
      "Gestión centralizada de historial clínico",
    ],
    impact: "Solución clínica entregada, en proceso de adopción completa por la profesional.",
  },
  {
    id: "routecard",
    title: "RouteCard",
    shortDescription:
      "PWA con soporte offline, georreferenciación y roles para digitalizar hojas de ruta y gestión logística de choferes.",
    longDescription:
      "A pedido de una empresa de logística, relevé los requerimientos del flujo de trabajo en campo y diseñé el análisis funcional completo. Desarrollé una PWA con Service Workers para garantizar disponibilidad offline total. El sistema incluye panel administrativo y vista de chofer con React Router DOM, georreferenciación de rutas via PostGIS, adjunción de comprobantes digitales a través de Cloudinary y backend propio en Node.js + Express con PostgreSQL. El objetivo fue eliminar la pérdida de documentación física y facilitar la facturación.",
    role: "Fullstack Developer (Freelance)",
    timeline: "Diciembre 2025 – Marzo 2026",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "PostGIS",
      "Cloudinary",
      "PWA",
    ],
    status: "Demo",
    url: "https://routecard-pwa.vercel.app/",
    features: [
      "Soporte offline completo con Service Workers",
      "Panel administrativo + vista de chofer (roles)",
      "Georreferenciación de rutas con PostGIS",
      "Adjunción de comprobantes via Cloudinary",
      "Backend propio en Node.js + Express",
    ],
    impact:
      "Un chofer ya lo utiliza con resultado positivo; en etapa de escalado a toda la flota.",
  },
  {
    id: "recycleflow",
    title: "RecycleFlow",
    shortDescription:
      "Sistema ERP privado para empresa de reciclaje: compras, stock, ventas, reportes y auditoría, desarrollado en equipo de tres.",
    longDescription:
      "Desarrollé en un equipo de tres integrantes un sistema de gestión integral para una empresa de compra-venta de materiales reciclables y productos de embalaje. El sistema resolvió la falta total de trazabilidad operativa, centralizando el flujo completo: compras, control de stock, ventas y generación de reportes. Incorporé además módulos de seguridad con roles de usuario y auditoría de operaciones para garantizar la integridad de los datos.",
    role: "Fullstack Developer (Equipo de 3)",
    timeline: "Mayo 2025 – Diciembre 2025",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    status: "Demo",
    url: "https://recycleflow-erp-demo-web.vercel.app/",
    features: [
      "Gestión de compras y proveedores",
      "Control de stock en tiempo real",
      "Módulo de ventas y facturación",
      "Reportes operativos exportables",
      "Sistema de roles y auditoría de operaciones",
    ],
    impact: "Sistema completado y funcional; disponible como demo pública del ERP.",
  },
];

export const flagshipProject = projects.find((p) => p.isFlagship)!;
export const otherProjects = projects.filter((p) => !p.isFlagship);
