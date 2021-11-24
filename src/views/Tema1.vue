<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Postventa

    .row.justify-content-center.mb-4
      .col-lg-6
        figure.mb-4
          img(src='@/assets/curso/tema1/img01.png') 
      .col-lg-6.d-flex.align-items-center
        div
          p.mb-4 Pero ¿Qué es la postventa?, de acuerdo con Sale Forje (2018) <b>“es la parte de la atención al cliente que reúne todas las estrategias pensadas para mejorar la experiencia después de la compra y mantener una relación duradera con los clientes, siempre correspondiendo a sus expectativas y necesidades”</b>. 
          p.mb-0 El servicio postventa para Pérez (2013) es <b>“el conjunto de mecanismos y tareas que emplea la organización para, una vez efectuada la venta, lograr la satisfacción total del cliente con el objetivo de que se repita la compra, recomiende la marca o el producto, entre otras”</b> (p. 184) 
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.px-5.p-4          
          p.mb-0.mx-4 Es recomendable que el vendedor le de claridad al cliente, sobre todo cuando se hacen ventas por transacciones, “todos los detalles sobre el servicio, los pagos, transportes y organización” (Artal, 2010, p. 326)
    
    p.mb-5 Como actividades de postventa o seguimiento a la venta, Artal (2010) señala:

    ol.lista-ol--cuadro.lista-ol--separador.t1.mb-5
      li 
        .lista-ol--cuadro__vineta
          span 1
        | La atención en los cobros.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | La gestión de impagados.
      li 
        .lista-ol--cuadro__vineta
          span 3
        | El cumplimiento correcto de la entrega de pedidos.
      li 
        .lista-ol--cuadro__vineta
          span 4
        | La solución de las quejas. 
      li 
        .lista-ol--cuadro__vineta
          span 5
        | Las reclamaciones. 
      li 
        .lista-ol--cuadro__vineta
          span 6
        | Los servicios de reparación y mantenimiento (p. 327).

    p.mb-5 Las ventajas e inconvenientes del servicio postventa de acuerdo con Pérez (2013) son, ver tabla 1:

    .row.justify-content-center.mb-0
      .col-lg-10
        div.BorTit.mb-3
          p.mb-0 <b>Tabla 1</b>
          i.mb-0 Ventajas e inconvenientes del servicio postventa en la empresa
        .tabla-b.color-acento-contenido.mb-5
          table
            caption Nota. Adaptado de Pérez (2013).
            thead
              tr
                th.text-center Usuario
                th.text-center Cliente              
            tbody
              tr
                td Produce una mayor satisfacción del cliente
                td Implica ciertos gastos
              tr
                td Mejora la imagen de la empresa y del producto
                td Necesita de control
              tr
                td Mejora el conocimiento directo del mercado
                td Produce un posible aumento del número de reclamaciones
              tr
                td Implica la posible fidelización del cliente
                td Supone mayores exigencias de servicio y calidad
              tr
                td Supone un probable incremento de las ventas     
                td Provoca mayores necesidades de personal             

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Etapas de la postventa

    .row.justify-content-center.mb-4
      .col-lg-7.d-flex.align-items-center
        div.mb-4
          p.mb-4 La venta debe verse como un ciclo dinámico con el cliente, de tal manera que la venta que se la haga hoy debe hacérsela mañana y así sucesivamente, en los productos de consumo masivo esto es vital con los mismos productos, pero con productos y servicios que no son de compra consuetudinaria se le puede vender productos y servicios complementarios. Por ejemplo, la persona que compra un vehículo familiar se le puede vender repuestos, garantías de mantenimiento, reparaciones u otros.    
          p.mb-0 Para lograr que el cliente regrese se debe montar un programa de fidelización que según Escamilla (2020) “consiste en desarrollar una relación positiva entre los consumidores y la empresa, para que regresen a comprar tus productos o servicios”. La postventa debe seguir unas etapas y acciones que lleve al cliente a regresar al negocio, esto es:
      .col-lg-5.d-flex.align-items-center
        figure.mb-4
          img(src='@/assets/curso/tema1/img02.png') 


    div.t1-info
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/img27.svg', alt='Texto que describa la imagen')          

        
        .tarjeta.color-acento-botones--borde.p-3(x="21%" y="12%" numero=" ")
          p.mb-3 <b>Atraer</b>
          p.mb-4 Con estas acciones se puede atraer nuevos clientes:
          ol.lista-ol.w-100
            li.mb-0
              span.text-bold a.
              | Repartir volantes. Folletos o material P.O.P. que sirve para promocionar o dar a conocer algo. Acción muy económica acercarse al público objetivo y con volantes dar a conocer el negocio.
            li.mb-0
              span.text-bold b. 
              | Ofrecer muestras gratis. Producto en dimensiones mas pequeñas para que el cliente conozca sus beneficios y atributos. En caso de un producto la muestra es efectiva para dar a conocerlo, en el caso de un servicio, se puede ofrecer una prueba
            li.mb-0
              span.text-bold c. 
              | Entregar descuentos. Es realizar disminuciones en el precio o servicio. Promociones especiales por 20 o 30 días para dar tiempo a que visiten el negocio
            li.mb-0
              span.text-bold d. 
              | Asistir a encuentros de negocios. Asistir a eventos, ferias y exposiciones a través de Cámaras de Comercio, vinculaciones a gremios
            li.mb-0
              span.text-bold e. 
              | Buscar referencias. Se refiere a personas o empresas que pertenecen a un mismo tipo o clase de organización o asociación. Con la unión a gremios o CC, incluso con clientes que hayan conocido y probado el producto solicitar recomendaciones
            li.mb-0
              span.text-bold f. 
              | Crear un guion de 30 segundos. Escribir lo que se va a decir o sustentar.  Definir la comunicación que se le quiere dar a los clientes, medios de comunicación e incluso posibles inversionistas
            li.mb-0
              span.text-bold g. 
              | Dar a conocer el negocio. Se puede hacer por medio de redes sociales, emails, llamadas a amigos y conocidos, compartir información de objeto del negocio y su propuesta de valor
            li.mb-0
              span.text-bold h. 
              | Aprovechar las redes sociales. Estructuras compuestas por personas en internet. Busca presencia en la web, crea blogs, anuncios en Instagram, Facebook, Twitter.
            li.mb-0
              span.text-bold i. 
              | Intercambiar tarjetas de presentación. Son pequeñas impresiones en papel que da información comercial de una persona o entidad. Aunque un poco obsoleto, pero sigue siendo efectiva, es una manera recordación cuando se presente la necesidad.
        .tarjeta.color-acento-botones--borde.p-3(x="21%" y="37%" numero=" ")
          p.mb-3 <b>Captar </b>
          p.mb-4 Con estas acciones se puede atraer nuevos clientes:
          ol.lista-ol.w-100
            li.mb-0
              span.text-bold a. 
              p.mb-0 <b>Blog corporativo.</b> Es un sitio web donde se publica información o contenido del interés de los propietarios. La forma de presentarse la empresa con contenidos atractivos de su propuesta de valor
            li.mb-0
              span.text-bold b. 
              p.mb-0 <b>Redes sociales.</b> Son estructuras que se desarrollan en la internet y persiguen fines comunes. Esta con contenidos en las principales redes sociales que comparten su público objetivo
            li.mb-0
              span.text-bold c. 
              p.mb-0 <b>Dar muestras gratis.</b> Producto en dimensiones más pequeñas para que el cliente conozca sus beneficios y atributos.
            li.mb-0
              span.text-bold d. 
              p.mb-0 En todas las etapas de la postventa dar muestras gratis es relevante y cumple una función más acentuada en la medida en que pasan las etapas. Puede servir para obtener datos del cliente o que continúe comprando.
            li.mb-0
              span.text-bold e. 
              p.mb-0 <b>Correo electrónico.</b> Es un servicio de internet que permite enviar mensajes a personas u organizaciones. La utilización del correo en esta etapa debe procurar la personalización del cliente, dirigirse de manera personalizada y puntual a lo que necesita el cliente.
            li.mb-0
              span.text-bold f. 
              p.mb-0 <b>Crear programas de fidelización.</b> Es un programa que realiza la empresa y ofrece premios por comprar. Crear membresías, cupones con descuento, mimos exclusivos, entre otros.
            li.mb-0
              span.text-bold g. 
              p.mb-0 <b>Crear comunidades virtuales.</b> Son aquellas personas que se unen a través de internet en grupo con intereses similares. h. Crear grupos en Facebook haciendo Lives, Canales en YouTube. 
        .tarjeta.color-acento-botones--borde.p-3(x="21%" y="62.5%" numero=" ")
          p.mb-3 <b>Fidelizar </b>
          p.mb-4 Estas acciones logran una relación duradera con los clientes en el tiempo:
          ol.lista-ol.w-100
            li.mb-0
              span.text-bold a. 
              p.mb-0 <b>Tarjetas de fidelización.</b> Se trata de premiar el consumo con premios. Este tipo de tarjetas ofrecen a los titulares una serie de ventajas adicionales como descuentos, puntos canjeables por regalos e incluso la devolución de un tanto por ciento de sus compras.
            li.mb-0
              span.text-bold b. 
              p.mb-0 <b>Cupones descuento.</b> Donde el usuario puede recortar un cupón y obtendrá una rebaja en el precio de algún producto o servicio del establecimiento.
            li.mb-0
              span.text-bold c. 
              p.mb-0 <b>Regalos.</b> El cliente recibe un regalo, vinculado o no a la actividad de la empresa, éste es ofrecido bien en agradecimiento a la compra o uso de un producto o servicio del establecimiento.
            li.mb-0
              span.text-bold d. 
              p.mb-0 <b>Puntos por compra.</b> Son promociones que dan entidades comerciales y financieras por la compra de sus productos y servicios. Permiten obtener una serie de beneficios en tiempo real.  Como la estrategia de los Almacenes Éxito “Puntos Colombia”. Cada punto obtenido equivale a 7 pesos y el cliente puede llevarlo como pago de su compra.
            li.mb-0
              span.text-bold e. 
              p.mb-0 <b>Gestionar clientes a través de Apps</b>, la cual es una aplicación en el móvil para interactuar con los clientes. A este tipo de aplicaciones, se les puede añadir diferentes funcionalidades, como por ejemplo una función donde tengamos dentro de la App para buscar clientes, y poder así, tenerlo todo ordenado y clasificado según categorías o intereses.
            li.mb-0
              span.text-bold f. 
              p.mb-0 <b>Comunicación personalizada.</b> Envío directo al cliente de ofertas con descuento exclusivo personalizados.
            li.mb-0
              span.text-bold g. 
              p.mb-0 <b>Regalos.</b> En ocasiones dar un regalo al cliente por su volumen de compra, generalmente en fechas especiales
            li.mb-0
              span.text-bold h. 
              p.mb-0 <b>C.R.M.</b> (Customer Relationship Management). Gestión de la relación con el cliente. Es una serie de actividades dirigidas al cliente como una estrategia de fidelización y de relación con el cliente a largo plazo apoyadas en tecnologías. Es montado para tener comunicaciones más fluidas y directas con los clientes
            li.mb-0
              span.text-bold i. 
              p.mb-0 <b>Club de clientes.</b> También conocidos como Clubes de fidelización son aquellos que premian a los clientes por sus compras repetidas. Puede ser por gustos, hábitos o labores que se realicen en la casa.

        .tarjeta.color-acento-botones--borde.p-3(x="21%" y="88%" numero=" ")
          p.mb-3 <b>Retener </b>
          p.mb-4 Retener clientes es la labor del día a día del asesor comercial, cada vez que un cliente visita el punto de venta o realiza una compra por otro medio, la empresa debe asegurarse que la experiencia de ese cliente sea única. Un cliente puede o no repetir la compra porque no tiene otro lugar donde comprar, en cuanto tenga otra opción deja de comprar. Es por eso que la empresa debe hacer esfuerzos por mantener esa relación por largo plazo. 
        

    //.row.justify-content-center.mb-5
      .col-lg-10
        .t1.tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-1
            .col-3.col-sm-2.col-lg-1.px-2.border
              img(src="@/assets/curso/tema1/img03.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Infografía
                  p.text-small.texto-blanco Etapas de la posventa
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Etapas-postventa.pdf')" target="_blank")
                    span(style="color:black !important") Descargar
                    i.fas.fa-file-download(style="color:black !important")

    p.mb-0 Por tanto, el vendedor debe tener en cuenta estas etapas y la empresa considerar llevar a cabo programas de atención de servicio al cliente y servicio de postventa, para las <i>MiPymes</i> se debe considerar unir estos programas en la medida de sus recursos. 

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Elementos de la postventa

    p.mb-5 La postventa incluye una serie de acciones cuya finalidad es la satisfacción del cliente, que quede encantado y regrese, estas acciones de acuerdo con Ramírez (2018) la acompañan elementos o partes que deben estar presentes en la postventa. El cliente debe sentir que la empresa lo comprende, le da solución a sus quejas y atiende sus dudas. Por tanto, los tres elementos que hacen parte de la postventa, al respecto Ramírez (2018) considera:
    
    SlyderA.mb-5
      .row.justify-content-center
        .col-lg-10
          .row.justify-content-center
            .col-lg-4.d-flex
              div.t1-div1.p-5
                figure.mb-4
                  img(src='@/assets/curso/tema1/img04.svg') 
                h4 La atención al cliente
                p.mb-0 Por este medio se le comunica los beneficios y ventajas del producto o servicio y se recibe las quejas, peticiones y se les da solución a los clientes.
            .col-lg-4.d-flex
              div.t1-div1.p-5
                figure.mb-4
                  img(src='@/assets/curso/tema1/img05.svg') 
                h4 El seguimiento de la venta
                p.mb-0 Los vendedores deben estar pendientes de cómo se recibió la mercancía, o que los clientes retroalimenten de su experiencia en la compra.
            .col-lg-4.d-flex
              div.t1-div1.p-5
                figure.mb-4
                  img(src='@/assets/curso/tema1/img06.svg') 
                h4 Las devoluciones
                p.mb-0 Debe ir unida a la garantía que ofrece el producto o a las políticas de la empresa al respecto. 
    
      .row.justify-content-center
        .col-lg-8
          .row.justify-content-start
            .col-lg-4.d-flex
              div.t1-div1.p-5
                figure.mb-4
                  img(src='@/assets/curso/tema1/img07.svg') 
                h4 La recompra
                p.mb-0 Finalidad de lo anterior es que el cliente regrese y continúe haciéndolo. 

    p.mb-0 Cualquier acción que respecto a un programa de postventa tenga la empresa debe tener en cuenta estos elementos anteriormente mencionados que componen la postventa.
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Proceso de calidad del servicio postventa
    p.mb-4 Lo importante de llevar un servicio postventa es ver qué efectos tiene en los clientes los esfuerzos que realiza la empresa con el fin de lograr fidelizarlos, eso es la calidad que perciben los clientes. Para Kotler & Armstrong (2012) la calidad es el “Grado en el que el desempeño percibido de un producto coincide con las expectativas del consumidor” (p. 41). 
    p.mb-5 Para que la empresa gestione la calidad en el servicio postventa Pérez (2013) propone el siguiente proceso, ver figura 1:

    .row.justify-content-center.mb-5 
      .col-lg-10
        div.BorTit.mb-3
          p.mb-0 <b>Figura 1</b>
          i.mb-0 Proceso para la gestión de la calidad del servicio postventa
        figure
          img(src='@/assets/curso/tema1/img08.svg') 

    h3 Planificación de la actividad postventa
    p.mb-5 Se debe decidir qué hacer, cómo hacerlo y con qué hacerlo en referencia al proceso del servicio de la postventa. Tener en cuenta características como objetivo, la duración del proyecto, personas responsables e intervinientes del proceso, los recursos con que va a contar, las actividades a realizar y con que indicadores se va a medir la actividad. Ejemplos que según Pérez (2013) sugiere, ver tabla 2:
    
    div.BorTit.mb-3
      p.mb-0 <b>Tabla 2</b>
      i.mb-0 Ejemplo planificación de la actividad postventa
    .tabla-a.color-acento-contenido.mb-5 
      table       
        caption Nota. Adaptado de Pérez (2013). 
        thead
          tr
            th(colspan=7) Planificación de la actividad            
        tbody          
          tr
            th Objetivo
            th Actividad
            th Tarea
            th Responsable
            th Duración
            th Presupuesto
            th Indicador         
            
          tr
            td(rowspan=3) Implantar el servicio de postventa
            td.text-center Instalación
            td Visitar tres (3) clientes para instalar equipos.
            td.text-center Nombre
            td.text-center 6 horas
            td.text-center $150.000
            td Tiempo de respuesta
          tr
            td.text-center Mantenimiento
            td Cambiar repuestos a equipo de cliente.
            td.text-center Nombre
            td.text-center  2 horas
            td.text-center $100.000
            td Cumplimiento   
          tr
            td.text-center Reparación
            td Visitar cliente reparación equipo.
            td.text-center Nombre
            td.text-center  4 horas
            td.text-center $250.000
            td Tiempo de respuesta          

    p.mb-5 Los siguientes son indicadores que se utilizan con frecuencia, la empresa según la actividad puede aportar otros, ver tabla 3.
    .row.justify-content-center
      .col-lg-8 
        div.BorTit.mb-3
          p.mb-0 <b>Tabla 3</b>
          i.mb-0 Indicadores del servicio postventa
        .tabla-a.color-acento-contenido.mb-5 
          table       
            caption Nota. Adaptado de Pérez (2013).
            thead
              tr
                th Tipo de servicio      
                th Indicadores      
            tbody          
              tr
                th Instalación
                td   
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Tiempo de respuesta
                    li 
                      i.lista-ul__vineta
                      | Número de quejas
                    li 
                      i.lista-ul__vineta
                      | Indicadores financieros
              tr
                th Mantenimiento
                td   
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Cumplimiento del plan
                    li 
                        i.lista-ul__vineta
                        | Tiempo de respuesta
                    li 
                        i.lista-ul__vineta
                        | Número de quejas
                    li 
                        i.lista-ul__vineta
                        | Indicadores financieros
              tr
                th Reparación
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Tiempo de respuesta
                    li 
                      i.lista-ul__vineta
                      | Porcentaje de casos solucionados
                    li 
                      i.lista-ul__vineta
                      | Porcentaje de averías técnicas solucionadas
                    li 
                      i.lista-ul__vineta
                      | Índice de devoluciones
                    li 
                      i.lista-ul__vineta
                      | Valor (económico) de las devoluciones
                    li 
                      i.lista-ul__vineta
                      | Número de quejas
                    li 
                      i.lista-ul__vineta
                      | Tasa de fallos (Caos no solucionados)
                    li 
                      i.lista-ul__vineta
                      | Indicadores financieros
              tr
                th Manejo de quejas
                td   
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Tiempo de respuesta
                    li 
                      i.lista-ul__vineta
                      | Índice de solución
                    li 
                      i.lista-ul__vineta
                      | Valor (económico) de la inconformidad 
              tr
                th Adiestramiento al cliente
                td           
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Averías por una mala operación 
                    li 
                      i.lista-ul__vineta
                      | Reclamaciones originadas por desconocimiento del cliente             
                
    h3 Implementación de la actividad postventa
    p.mb-5 En esta etapa de la postventa la empresa llevará a cabo lo planificado, para a esto tendrá en cuenta de acuerdo con Pérez (2013):
    .row.justify-content-center.mb-5
      .col-lg-10.t1-1-3-linea-tiempo1
        LineaTiempoD
          .row.justify-content-center( numero="1" titulo="Capacitación al equipo de postventa")
            .col-lg-2.col-md-3.col-sm-3.col-4
              figure.mb-4
                img(src='@/assets/curso/tema1/img09.svg') 
            .col-lg-8.d-flex.align-items-center
              p.mb-4 Al igual que el equipo de atención al cliente, este equipo deber ser entrenado en las tareas a realizar con respecto a los elementos o partes de la posventa, cada una de las etapas, además de los protocoles de atención y comunicación de la organización. 
          .row.justify-content-center(numero="2" titulo="Alistar los recursos que en cada actividad se necesitan")
            .col-lg-2.col-md-3.col-sm-3.col-4
              figure.mb-4
                img(src='@/assets/curso/tema1/img10.svg') 
            .col-lg-8.d-flex.align-items-center
              p.mb-4 De acuerdo con lo expuesto en la panificación, revisar los recursos humanos, técnicos y financieros que son necesarios para llevar a cabo el plan.
          .row.justify-content-center(numero="3" titulo="Realizar el plan")
            .col-lg-2.col-md-3.col-sm-3.col-4
              figure.mb-4
                img(src='@/assets/curso/tema1/img11.svg') 
            .col-lg-8.d-flex.align-items-center
              p.mb-4 Es el momento de llevar a cabo la operación en cada uno de sus componentes. 
          .row.justify-content-center(numero="4" titulo="Realizar los informes de servicio") 
            .col-lg-2.col-md-3.col-sm-3.col-4
              figure.mb-4
                img(src='@/assets/curso/tema1/img12.svg') 
            .col-lg-8.d-flex.align-items-center
              p.mb-4 La manera de tener la información necesaria para dar explicación del cumplimiento de los indicadores de gestión de la actividad de postventa.

    h3 Control de la actividad postventa
    p.mb-5 Una manera de controlar las actividades de postventa incluyendo el resultado final, es según Pérez (2013):
    
    ol.lista-ol--cuadro.lista-ol--separador.t1.mb-5
      li 
        .lista-ol--cuadro__vineta
          span 1
        | Seguir los indicadores en la planificación. Mirar que el indicador que se propuso coincide con el resultado final, y a partir de ahí tomar acciones de mejora.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Registrar el procedimiento en una lista de chequeo que lo pueda comprar a como se registra el protocolo. 
      li 
        .lista-ol--cuadro__vineta
          span 3
        | Registrar medidas tomadas.
      li 
        .lista-ol--cuadro__vineta
          span 4
        | Corregir lo que no esté según los procedimientos de la empresa .

    h3 Mejora de la actividad postventa
    p.mb-5 Las acciones de mejora en la postventa van ligadas a lo planificado y lo ejecutado, y a los PQR de los clientes. La empresa debe redefinir las fallas en algunos de los procesos, esta labor bien realizada eleva la calidad en la prestación de servicio de postventa. 
    Separador

    .row.justify-content-center
      .col-lg-5.d-flex.align-items-center
        h4.mb-4  Un ejemplo de una situación de mejora puede ser que el 10% de los clientes, se queje que los mantenimientos no se están cumpliendo, en este caso debe identificar que ocasiona esa situación y darle solución.
      .col-lg-4 
        figure
          img(src='@/assets/curso/tema1/img13.png') 
    
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Procedimiento para estructurar un servicio postventa
    p.mb-4 A continuación, se presentan unas actividades que corresponden a un servicio postventa, cada una de ellas tiene una serie de actividades con secuencias definidas para realizarlas de manera correcta, e incluso a su interior demanda otras actividades. 
    
    .row.justify-content-center.mb-4
      .col-lg-6
        p.mb-4 El servicio postventa tiene una funcionalidad muy parecida al servicio al cliente y se deben trabajar en conjunto, puesto que tienen alto grado de dependencia la una de la otra. Las grandes organizaciones montan estos servicios por separados, pero las <i>MiPymes</i> puede integrar estos servicios o subcontratarlos. 
      .col-lg-6
        h4.mb-4 Pero ¿cómo estructurar un servicio postventas? De acuerdo con Pérez (2013) señala lo siguiente tanto en su estructura como en sus funciones:
    
    h3 Recepción y atención de incidencias
    p.mb-4 Es el lugar donde el cliente pondrá su solicitud, queja o reclamo y el empleado siguiendo unos procedimientos dará las respuestas y tratamiento adecuado siguiendo la gestión de calidad de la empresa.
    p.mb-5 Las funciones relativas a esta estructura corresponden a:
    .tarjeta--container.row.mb-5 
      .col-lg.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/img14.svg', alt='Texto que describa la imagen')
          
        h3.texto-blanco Atención a las incidencias
        p.texto-blanco Una persona con perfil comunicativo y protocolos para atender y recoger las solicitudes del cliente.
      
      .col-lg.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/img15.svg', alt='Texto que describa la imagen')
          
        h3 Distribución de las incidencias
        p Una persona que canalice las incidencias donde corresponda, si el problema es de facturas, lo escalara a facturación, si es daños, lo escalara a reparaciones y así sucesivamente.
      
      .col-lg.tarjeta.color-acento-contenido.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/img16.svg', alt='Texto que describa la imagen')
          
        h3.texto-blanco Gestión de las incidencias
        p.texto-blanco La persona encargada debe tener capacidad dependiendo de la solicitud de dar solución desde su rol, pero si el caso tiene mayor complejidad, escalarlo a la unidad correspondiente. Debe estar atento a si se le solucionó el problema y en lo posible hacer seguimiento para conocer si su solicitud o problema tuvo solución.
        
    h3 Servicio de asistencia técnica
    p.mb-5 Al primer proceso debe estar en sintonía con un servicio de asistencia técnica especializados en el producto o servicio para realizar mantenimientos, reparaciones. Dependiendo el producto, el fabricante puede proveer el apoyo técnico a través de la garantía. Este servicio puede prestarse de diversas maneras:
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Autoreparación asistida" :icono="require('@/assets/curso/tema1/img17.svg')")
        .row.justify-content-center
          .col-lg-4.d-flex.align-items-center
            div.mb-4
              h4 Autoreparación asistida
              p.mb-0 Ayudar al cliente a realizar la reparación apoyado por un técnico de manera telefónica, virtual, mensajes, entre otras.
          .col-lg-3
            figure.mb-4
              img(src='@/assets/curso/tema1/img20.png', alt='Texto que describa la imagen')
          
      .py-4.py-md-5(titulo="Reparación en el sitio del cliente" :icono="require('@/assets/curso/tema1/img18.svg')")
        .row.justify-content-center
          .col-lg-4.d-flex.align-items-center
            div.mb-4
              h4 Reparación en el sitio del cliente
              p.mb-0 El técnico debe trasladarse al sitio donde se encuentre el producto o servicio.            
          .col-lg-3
            figure.mb-4
              img(src='@/assets/curso/tema1/img21.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Reparación en el taller" :icono="require('@/assets/curso/tema1/img19.svg')")
        .row.justify-content-center
          .col-lg-4.d-flex.align-items-center
            div.mb-4
              h4 Reparación en el taller
              p.mb-0 El cliente lleva el producto a reparación al sitio donde compró o donde se le indique para el cumplimiento de la garantía o si no la tiene pagar por el servicio.            
          .col-lg-3
            figure.mb-4
              img(src='@/assets/curso/tema1/img22.png', alt='Texto que describa la imagen')

    h3 Otros servicios implicados en la postventa
    p.mb-5 Servicios que son un apoyo a la labor de la postventa y que dependen de otros departamentos de la organización como transporte, almacén y el seguimiento al finalizar la prestación del servicio postventa.

    h3 Caso práctico: Procedimiento para estructurar un servicio postventa
    p.mb-5 La empresa <i>Computer Working</i> se dedica a la venta de computadores de mesa, todo en uno y portátiles. Una de las funciones de su servicio postventa es el mantenimiento y reparación de los computadores. En una incidencia, estos serían los posibles desarrollos:

    .row.justify-content-center
      .col-lg-3.d-flex
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img23.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(style="background-color:#F8DE63; height:100%")
              div
                h4.mb-1 Recepción y atención de incidencias
                ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Atención de la llamada: se recibe la llamada de un cliente con problemas en su computador que aún tiene garantía. 
                    li 
                      i.lista-ul__vineta
                      | Gestión de la llamada: se le pide ciertas instrucciones, como si esta instalado a la energía, si la batería está cargada, entre otras
      .col-lg-3.d-flex
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img24.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(style="background-color:#F8DE63; height:100%")
              div
                h4.mb-1 Gestión de la llamada.
                ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Si no está enchufado y lo enchufa y enciende correctamente, fin de la llamada.                   
                    li 
                      i.lista-ul__vineta
                      | Si estaba encendido y no funciona, entonces se reporta al Servicio de Asistencia Técnica.
      .col-lg-3.d-flex
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img25.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(style="background-color:#F8DE63; height:100%")
              div
                h4.mb-1 Servicio de Asistencia Técnica
                ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | El Servicio de Asistencia Técnica reconoce fallos amparados en la garantía y recomienda un cambio de computador.                   
                    li 
                      i.lista-ul__vineta
                      | Se registra el dictamen de la incidencia y se pasa a recoger el computador al sitio donde se encuentra el cliente o recibe el PC en el punto de venta.
      .col-lg-3.d-flex
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img25.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center(style="background-color:#F8DE63; height:100%")
              div
                h4.mb-1 Gestión final
                ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Se realiza el cambio del PC averiado por uno nuevo.
                    li 
                      i.lista-ul__vineta
                      | Se llama posteriormente a preguntar cómo se siente con el servicio prestado y su nuevo PC.

    Separador

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
