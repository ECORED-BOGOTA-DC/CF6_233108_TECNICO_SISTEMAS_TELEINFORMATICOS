export default {
  global: {
    componenteFormativo: 'Conectividad de las redes en las organizaciones',
    descripcionCurso:
      'En este componente se aborda los conceptos de conectividad de una red de datos, cómo se hace detección de fallas sobre la red de acceso y cómo se desarrollan los procesos de gestión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Red de computación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificar el estado de la conectividad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Protocolos de infraestructura',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Detección de fallas en la operación de la red',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Redes de acceso',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de la red de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Gestión de inventarios de los elementos de la red',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Documentación de configuración de la red',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Red de computación',
      referencia:
        'Choi, K. W., & Nan, H. (2014). Editorial for Special Issue on “Challenges Pervasive Network and Applications for Internet of Things”. <em>Mobile Networks and Applications</em>, 19(3), 360-362.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_proquest_journals_1540737188',
    },
    {
      tema: 'Red de computación',
      referencia:
        'Salman, A. A., & Alisa, Z. T. (2019). Improving the Network Lifetime in Wireless Sensor Network for Internet of Thing Applications. <em>Al-Khwarizmi Engineering Journal</em>, 15(4), 79-90.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_beb12487a7a744a48c64ea26f314001d',
    },
  ],
  glosario: [
    {
      termino: 'AAA',
      significado:
        'Universal Serial Bus. Puerto de conexión serial de los computadores.',
    },
    {
      termino: 'CMOS',
      significado:
        'Complementary Metal-Oxide-Semiconductor. Semiconductor complementario de óxido metálico.',
    },
    {
      termino: 'CPU',
      significado: 'unidad central de procesamiento.',
    },
    {
      termino: 'DIMM',
      significado: 'módulo de memoria dual en línea.',
    },
    {
      termino: 'ENIAC',
      significado:
        'Electronic Numerical Integrator and Computer. Primer computador programable a gran escala.',
    },
    {
      termino: 'GNU',
      significado: 'General Public License. Licencia Pública General de GNU.',
    },
    {
      termino: 'DVI',
      significado:
        'Digital Video Interface. Puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'LCD',
      significado: 'pantalla de cristal líquido.',
    },
    {
      termino: 'HDMI',
      significado:
        'High-Definition Multimedia Interface. Puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'ITIL',
      significado: 'Information Technology Infrastructure Library',
    },
    {
      termino: 'ITSM',
      significado: 'gestión de servicios de TI',
    },
    {
      termino: 'RAM',
      significado: 'memoria de acceso aleatorio.',
    },
    {
      termino: 'SO',
      significado: 'sistema operativo.',
    },
    {
      termino: 'TDS',
      significado: 'hoja de datos técnicos.',
    },
    {
      termino: 'VGA',
      significado:
        'Video Graphics Array. Puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'USB',
      significado: 'listas de control de acceso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Liu, F., Liu, J., Yin, Y., Wang, W., Hu, D., Chen, P., & Niu, Q. (2020). Survey on WiFi‐based indoor positioning techniques. <em>IET communications</em>, 14(9), 1372-1383.',
      link: '',
    },
    {
      referencia:
        "Sloan, J. D. (2001). <em>Network Troubleshooting Tools: Help for Network Administrators</em>. O'Reilly Media, Inc.",
      link: '',
    },
    {
      referencia:
        "West, J. (2022). <em>Data Communication and Computer Networks: A Business User's Approach</em>. Cengage Learning.",
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Guadrón',
          cargo: 'Responsable Línea de Producción Distrito Capital',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joaquín Fernando Sánchez',
          cargo: 'Experto temático',
          centro: 'Regional Norte de Santander',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseñadora instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: '',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: '',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: '',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
