export const benefits = [
    {
        title: "Gestión centralizada con Unity Catalog",
        description: "Organiza y gestiona todos tus activos de datos en un único lugar, mejorando la trazabilidad y el control.",
        iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                viewBox="0 0 24 24" class="text-white">
                                <rect width="8" height="8" x="3" y="3" rx="2" />
                                <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                                <rect width="8" height="8" x="13" y="13" rx="2" />
                            </svg>`
    },
    {
        title: "Automatización y despliegue con DAB",
        description: "Implementa CI/CD para tus proyectos de Databricks y automatiza el despliegue en diferentes entornos.",
        iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                class="text-white">
                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                            </svg>`
    },
    {
        title: "Gobernanza y seguridad de datos",
        description: ">Implementa políticas de seguridad, control de acceso y cumplimiento normativo para tus datos.",
        iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                class="text-white">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            </svg>`
    },
    {
        title: "Pipelines de datos confiables",
        description: "Diseña e implementa pipelines de datos robustos que garanticen la calidad y consistencia de la información",
        iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                     stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     class="text-white">
                      <pathd="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                       <circle cx="12" cy="12" r="3" />
                  </svg>`
    },
    {
        title: "Buenas prácticas empresariales",
        description: "Aprende las estrategias y patrones utilizados por las empresas líderes en la gestión de datos a gran escala.",
        iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                class="text-white">
                                <path d="M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3" />
                                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                            </svg>`
    },
    {
        title: "Impacto en el negocio",
        description: "Traduce tus conocimientos técnicos en valor de negocio y mejora la toma de decisiones basada en datos.",
        iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                class="text-white">
                                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                                <path d="m19 9-5 5-4-4-3 3" />
                            </svg>`
    }
];

export const topics = [
    {
        id:1,
        title: "Módulo 1",
        description: "Comprende la estructura del Metastore, configura tus Catálogos y Esquemas en Databricks, y enlaza el storage de forma segura para crear tus primeras tablas Delta.",
        tags: ["Metastore", "Catálogos", "Esquemas"]
    },
    {
        id:2,
        title: "Módulo 2",
        description: "Aplica el modelo de seguridad por defecto de UC. Implementa control de acceso granular (RBAC), *row/column filtering* y técnicas avanzadas como Data Masking para cumplir con normativas de datos (GDPR, CCPA).",
        tags: ["RBAC", "Column Masking", "Row Filtering"]
    },
    {
        id:3,
        title: "Módulo 3",
        description: "Domina la estandarización de proyectos con DAB. Aprende a definir Jobs y Pipelines (DLT) usando `YAML` y automatiza el despliegue de tu código, transformando tu flujo de trabajo a nivel Senior.",
        tags: ["YAML Project Structure", "Jobs & DLT Deployment"]
    },
    {
        id:4,
        title: "Módulo 4",
        description: "El módulo que lo une todo. Despliega un pipeline DLT que escribe datos gobernados por UC, usando la automatización de DAB. Implementa pruebas y la promoción de código entre Dev/Stage/Prod de manera segura y eficiente.",
        tags: ["DLT with UC", "End-to-End Pipeline"]
    }
]

export const publicObjective = [
    {
        title: "Ingenieros de Datos",
        description: "Profesionales que desean mejorar sus habilidades en gobernanza y automatización de datos."
    },
    {
        title: "Arquitectos Cloud",
        description: "Profesionales que diseñan soluciones de datos en la nube y necesitan implementar gobernanza."
    },
    {
        title: "Analistas de Datos",
        description: "Especialistas que buscan comprender mejor la infraestructura de datos y su gestión."
    },
    {
        title: "Desarrolladores de Software",
        description: "Programadores que trabajan con Databricks y desean optimizar sus flujos de trabajo."
    }
]