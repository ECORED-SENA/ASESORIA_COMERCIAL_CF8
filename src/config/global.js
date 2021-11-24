export default {
  global: {
    componenteFormativo: 'La postventa',
    descripcionCurso:
      'Este componente estudia una etapa del proceso de la venta como es el servicio postventa, mediante el reconocimiento de las etapas para poder atraer, captar y fidelizar clientes, elementos constitutivos de postventa, proceso de calidad del servicio postventa garantizando el regreso del cliente, cómo estructurar un servicio postventa en la empresa, herramientas que son indispensables para prestar el servicio, su importancia y tipos de servicios. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Postventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Etapas de la postventa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos de la postventa',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Proceso de calidad del servicio postventa',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Procedimiento para estructurar un servicio postventa',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas postventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Importancia del servicio postventa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de servicios postventa',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Fases del servicio postventa',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Artal Castells, M. (2010). Dirección de ventas. Organización del departamento de ventas y gestión de vendedores. ESIC Alfaomega. 9ª edición. ',
    },
    {
      referencia:
        'Cuartin, A. (2020). ¿Qué son indicadores? Tipos y beneficios de utilizarlos.',
      link:
        'https://blog.lemontech.com/que-son-indicadores-y-cuantos-tipos-existen-ejemplos/',
    },
    {
      referencia:
        'Da Silva, D. (2020). ¿Qué es atención al cliente? Definición, elementos e importancia para las empresas en la actualidad.',
      link: 'https://www.zendesk.com.mx/blog/que-es-atencion-al-cliente/',
    },
    {
      referencia:
        'Da Silva, D. (2020). ¿Cómo captar clientes potenciales?: las 7 estrategias más sencillas.',
      link:
        'https://www.zendesk.com.mx/blog/estrategias-captar-clientes-potenciales/',
    },
    {
      referencia:
        'El viaje del cliente (2021). ¿Qué es el Servicio al Cliente? Definición y características.',
      link:
        'https://elviajedelcliente.com/academia/servicio-al-cliente-customer-service/',
    },
    {
      referencia:
        'Escamilla, G. (2020). Fidelización del cliente: concepto, importancia, consejos y métricas.',
      link: 'https://www.rdstation.com/co/blog/fidelizacion-del-cliente/',
    },
    {
      referencia:
        'Pérez Feijoo, H.; Pérez Hernández, Jorge M.; López González, L. y Caballero Bravo, C. (2013). Comunicación y atención al cliente. McGraw Hill Education.',
    },
    {
      referencia:
        'Kotler, P.  y Armstrong, G. (2012). Marketing. Editorial Pearson.',
    },
    {
      referencia: 'Ramírez, Al. (2018). ¿Qué elementos componen la postventa?',
      link: 'https://www.informabtl.com/que-elementos-componen-la-posventa/ ',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'El servicio al cliente, conocido también como servicio de atención al cliente es una herramienta de marketing, que se encarga de establecer puntos de contacto con los clientes, a través de diferentes canales, para establecer relaciones con ellos, antes, durante y después de la venta (Douglas, 2020).',
    },
    {
      termino: 'Calidad del servicio',
      significado:
        'La calidad es el. “Grado en el que el desempeño percibido de un producto coincide con las expectativas del consumidor (Kotler & Armstrong, 2012).',
    },
    {
      termino: 'Indicadores',
      significado:
        '“os indicadores son unidades de medición que permiten evaluar el rendimiento de los procesos internos de la firma, ya sea para medir la rentabilidad, productividad, calidad de servicio, gestión del tiempo, entre otros (Cuartin, A. 2020).',
    },
    {
      termino: 'Postventa',
      significado:
        'Es la parte de la atención al cliente que reúne todas las estrategias pensadas para mejorar la experiencia después de la compra y mantener una relación duradera con los clientes, siempre correspondiendo a sus expectativas y necesidades (Sale Forje, 2018).',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'El significado de servicio al cliente o customer service engloba elementos como el asesoramiento, los elementos tangibles (tienda física, <i>web</i>), la capacidad de respuesta, personalización, la fiabilidad o la calidad del producto, las condiciones de pago etc. En definitiva, las estrategias de servicio están relacionado con la atención global y facilidades que prestas a tus clientes (El viaje del cliente, 2021).',
    },
  ],
  complementario: [
    {
      texto:
        'Da Silva, D. (2020). ¿Cómo captar clientes potenciales?: las 7 estrategias más sencillas.',
      tipo: 'Página web',
      link:
        'https://www.zendesk.com.mx/blog/estrategias-captar-clientes-potenciales/',
    },
    {
      texto:
        'Sales Force Latinoamérica. (2018). Postventa: qué es y cómo realizarla.',
      tipo: 'Página web',
      link:
        'https://www.salesforce.com/mx/blog/2018/3/Postventa-que-es-y-como-hacer.html ',
    },
    {
      texto: 'Ramírez, A. (2018). ¿Qué elementos componen la posventa?',
      tipo: 'Página web',
      link: 'https://www.informabtl.com/que-elementos-componen-la-posventa/',
    },
    {
      texto:
        'Da Silva, D. (2020). ¿Qué es el seguimiento postventa? fases y tips para el mantenimiento de un cliente satisfecho.',
      tipo: 'Página web',
      link: 'https://www.zendesk.com.mx/blog/seguimiento-postventa/',
    },
    {
      texto:
        'Martínez Molera, L. (2021). Servicio posventa: qué es y cómo implementarlo con éxito.',
      tipo: 'Página web',
      link: 'https://blog.hubspot.es/service/servicio-post-venta ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Javier del Carmen Martínez Pérez',
        cargo: 'Instructor',
        centro: 'Centro de Comercio y Servicios - Regional Bolívar',
      },
      {
        nombre: 'Zenith Chinchilla Ruedas',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisión Metodológica y Pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe  ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
