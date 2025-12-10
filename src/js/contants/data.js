export const benefits = [
    {
        title: "Gestión centralizada con Unity Catalog",
        description: "Organiza y gestiona todos tus activos de datos en un único lugar, mejorando la trazabilidad y el control.",
        iconSVG: "./src/assets/icons/fabric.svg"
    },
    {
        title: "Automatización y despliegue con DAB",
        description: "Implementa CI/CD para tus proyectos de Databricks y automatiza el despliegue en diferentes entornos.",
        iconSVG: "./src/assets/icons/azure-devops.svg"
    },
    {
        title: "Gobernanza y seguridad de datos",
        description: ">Implementa políticas de seguridad, control de acceso y cumplimiento normativo para tus datos.",
        iconSVG: "./src/assets/icons/defender-cloud.svg"
    },
    {
        title: "Pipelines de datos confiables",
        description: "Diseña e implementa pipelines de datos robustos que garanticen la calidad y consistencia de la información",
        iconSVG: "./src/assets/icons/pipelines.svg"
    },
    {
        title: "Buenas prácticas empresariales",
        description: "Aprende las estrategias y patrones utilizados por las empresas líderes en la gestión de datos a gran escala.",
        iconSVG: "./src/assets/icons/azure-stack.svg"
    },
    {
        title: "Impacto en el negocio",
        description: "Traduce tus conocimientos técnicos en valor de negocio y mejora la toma de decisiones basada en datos.",
        iconSVG: "./src/assets/icons/trends.svg"
    }
];

export const topics = [
    {
        id: 1,
        title: "Módulo 1",
        description: "Comprende la estructura del Metastore, configura tus Catálogos y Esquemas en Databricks, y enlaza el storage de forma segura para crear tus primeras tablas Delta.",
        tags: ["Metastore", "Catálogos", "Esquemas"]
    },
    {
        id: 2,
        title: "Módulo 2",
        description: "Aplica el modelo de seguridad por defecto de UC. Implementa control de acceso granular (RBAC), row/column filtering y técnicas avanzadas como Data Masking para cumplir con normativas de datos (GDPR, CCPA).",
        tags: ["RBAC", "Column Masking", "Row Filtering"]
    },
    {
        id: 3,
        title: "Módulo 3",
        description: "Domina la estandarización de proyectos con DAB. Aprende a definir Jobs y Pipelines (DLT) usando YAML y automatiza el despliegue de tu código, transformando tu flujo de trabajo a nivel Senior.",
        tags: ["YAML Project Structure", "Jobs & DLT Deployment"]
    },
    {
        id: 4,
        title: "Módulo 4",
        description: "El módulo que lo une todo. Despliega un pipeline DLT que escribe datos gobernados por UC, usando la automatización de DAB. Implementa pruebas y la promoción de código entre Dev/Stage/Prod de manera segura y eficiente.",
        tags: ["DLT with UC", "End-to-End Pipeline"]
    }
];

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
];

export const featuresProfile = [
    {
        feature: "+5 Años de Experiencia",
        description: "Liderando proyectos en Data & Cloud.",
        iconSVG: "./src/assets/icons/suitcase.svg"
    },
    {
        feature: "Databricks Certificado",
        description: "Conocimiento validado por la plataforma.",
        iconSVG: "./src/assets/icons/databricks.svg"
    },
    {
        feature: "Proyectos Empresariales",
        description: "Implementaciones en compañías líderes.",
        iconSVG: "./src/assets/icons/project.svg"
    },
    {
        feature: "Enseñanza a la Comunidad",
        description: "Facilitador activo y creador de contenido de valor.",
        iconSVG: "./src/assets/icons/world.svg"
    }
]

export const testimonials = [
    {
        name: "Carlos Mendoza",
        role: "Ingeniero de Datos",
        photo: "https://randomuser.me/api/portraits/men/30.jpg",
        feedback: "El curso me permitió implementar Unity Catalog en mi empresa y mejorar significativamente nuestra gobernanza de datos. ¡Altamente recomendado!"
    },
    {
        name: "Laura Fernández",
        role: "Arquitecta Cloud",
        photo: "https://randomuser.me/api/portraits/women/43.jpg",
        feedback: "Los módulos sobre Databricks Assets Bundle fueron excelentes. Ahora automatizamos nuestros despliegues y hemos reducido errores en un 70%."
    },
    {
        name: "Miguel Torres",
        role: "Desarrollador de Software",
        photo: "https://randomuser.me/api/portraits/men/67.jpg",
        feedback: "El enfoque práctico del curso me permitió aplicar inmediatamente los conocimientos en mi trabajo. El proyecto final fue increíblemente útil."
    }
];

export const frequentlyQuestions = [
    {
        question: "¿Cuánto tiempo tengo acceso al curso?",
        answer: "ienes acceso de por vida al curso, incluyendo todas las actualizaciones futuras sin coste adicional. Podrás acceder al contenido las 24 horas del día, los 7 días de la semana."
    },
    {
        question: "¿Necesito experiencia previa con Databricks para tomar este curso?",
        answer: "No es estrictamente necesario, pero se recomienda tener conocimientos básicos de Databricks y manejo de datos para aprovechar al máximo el contenido del curso."
    },
    {
        question: "¿El curso incluye material adicional o recursos para profundizar en los temas?",
        answer: "Sí, el curso proporciona recursos adicionales, como documentación, enlaces a artículos relevantes y ejemplos de código para que los estudiantes puedan profundizar en los temas tratados."
    },
    {
        question: "¿Habrá soporte o tutorías disponibles durante el curso?",
        answer: "Sí, los estudiantes tendrán acceso a foros de discusión y sesiones de tutoría en vivo para resolver dudas y recibir orientación adicional durante el curso."
    },
    {
        question: "¿Puedo obtener un certificado al completar el curso?",
        answer: "Sí, al finalizar el curso recibirás un certificado de finalización que podrás compartir en tu perfil profesional y con potenciales empleadores."
    },
    {
        question: "¿Qué pasa si no estoy satisfecho con el curso?",
        answer: "Ofrecemos una garantía de devolución de dinero de 30 días. Si no estás satisfecho con el curso por cualquier motivo, puedes solicitar un reembolso completo dentro de los primeros 30 días después de la compra."
    }
];