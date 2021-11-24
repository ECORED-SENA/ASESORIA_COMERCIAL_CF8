<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Herramientas postventa

    .row.justify-content-center.mb-4
      .col-lg-5.d-flex.align-items-center
        p.mb-4 Para que la estructura del servicio postventa funcione de manera eficaz, Pérez (2013) propone que la empresa cuente con las siguientes herramientas para poder implantar una acción de postventa:
      .col-lg-5.d-flex.align-items-center
        figure.mb-4
          img(src='@/assets/curso/tema2/img01.png') 
    
    TabsA.color-acento-contenido
      .tarjeta.t2-TabsA.p-4(titulo="Base de datos de los clientes")
        .row.justify-content-center
          .col-lg-3.col-md-4.col-sm-5.col-6
            figure.mb-4
              img(src='@/assets/curso/tema2/img03.svg') 
          .col-lg-7.d-flex.align-items-center
            div
              h4 Bases de datos de clientes
              p.mb-0 Tener listado de los clientes con su información básica, especialmente el teléfono para realizar <i>Telemarketing</i>, y de esta manera comunicarse con los clientes vía telefónica.
      .tarjeta.t2-TabsA.p-4(titulo="Correspondencia")
        .row.justify-content-center
          .col-lg-3.col-md-4.col-sm-5.col-6
            figure.mb-4
              img(src='@/assets/curso/tema2/img02.svg') 
          .col-lg-7.d-flex.align-items-center
            div
              h4 Correspondencia
              p.mb-0 Puede utilizar cualquier medio, el usado comúnmente es el correo electrónico, donde pueda comunicar como van las incidencias u otros envíos como catálogos, revistas, u otras invitaciones.          
      .tarjeta.t2-TabsA.p-4(titulo="Página <i>web</i> y correo electrónico")
        .row.justify-content-center
          .col-lg-3.col-md-4.col-sm-5.col-6
            figure.mb-4
              img(src='@/assets/curso/tema2/img04.svg') 
          .col-lg-7.d-flex.align-items-center
            div
              h4 Pagina <i>web</i> y correo electrónico
              p.mb-0 Contar con una pagina <i>web</i> es hasta hoy el mejor modo más económico y rápido para comunicarse con el cliente. 
      .tarjeta.t2-TabsA.p-4(titulo="Visita personal")
        .row.justify-content-center
          .col-lg-3.col-md-4.col-sm-5.col-6
            figure.mb-4
              img(src='@/assets/curso/tema2/img05.svg') 
          .col-lg-7.d-flex.align-items-center
            div
              h4 Visita personal
              p.mb-0 Es el mejor servicio de postventa, pero también el más costoso.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Importancia del servicio postventa

    p.mb-4 Cuando un cliente compra un producto o servicio, está cubriendo una necesidad y obtenido una experiencia que de ser altamente satisfecha traería de vuelta a ese cliente en una recompra. Por tanto, tener un servicio postventa le permite a la empresa conocer esas experiencias y adoptar acciones de mejora que mantengan una relación duradera con el cliente y se cuantifique en rentabilidad.
    p.mb-5 Es por eso, que el servicio postventa tiene como propósito fidelizar clientes y que su compra sea más seguida, se debe procurar:
    
    ol.lista-ol--cuadro.lista-ol--separador.t1
      li 
        .lista-ol--cuadro__vineta
          span 1
        | La atención al cliente sea motivo de diferenciación. 
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Que los clientes estén satisfechos.
      li 
        .lista-ol--cuadro__vineta
          span 3
        | Que recomienden la empresa. 
      li 
        .lista-ol--cuadro__vineta
          span 4
        | Identificar reacciones de los clientes con los productos o servicios.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Tipos de servicios postventa
    p.mb-5 Entre los servicios postventas que debe adoptar la empresa, ya sea por aquellos productos de larga duración que tiene garantía de fabrica u otros de compras menos exigente, Martínez (2021) aporta los siguientes tipos de servicios postventas a adoptar por la empresa:
    
    .tarjeta--container.row.mb-5
      .col-md.t2.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema2/img07.svg', alt='Texto que describa la imagen')
          
        h1.text-center.texto-blanco Los servicios técnicos<br>que se llevan sobre<br>los productos
        p.texto-blanco <b>Instalación:</b> dependiendo del producto, se realiza por lo general en la vivienda del cliente<br><b>Mantenimiento:</b> ofrecer la revisión y puesta a punto por uso del producto, limpiezas, cambio de piezas, lubricación<br><b>Reparaciones:</b> sustituir piezas que no sirve y que no permite el funcionamiento del producto, si tiene aún garantía es sin ningún costo, pero deberá cancelar si venció la garantía. 
    
      
      .col-md.t2.tarjeta.color-acento-contenido.text-white.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema2/img08.svg', alt='Texto que describa la imagen')
          
        h1.text-center Los servicios que se prestan a quien adquiere<br>el producto o servicio
        p <b>Adiestramiento para el uso del producto:</b> orientaciones que ofrece la empresa al cliente para su uso eficaz.<br><b>Manejo de quejas y reclamaciones:</b> establecer canales de comunicación para que el cliente manifieste a la empresa sobre sus inconformidades. 
    
    p.mb-5 Los aportes que hace Pérez (2013) a los tipos de servicios son los siguientes, ver tabla 5:

    .row.justify-content-center.mb-5
      .col-lg-10
        div.BorTit.mb-3
          p.mb-0 <b>Tabla 5</b>
          i.mb-0 Tipos de servicio postventa en las empresas
        .tabla-b.color-acento-contenido
          table
            caption Nota. Pérez  (2013).
            thead
              tr
                th.text-center Usuario
                th.text-center Cliente              
            tbody
              tr(style="background-color:#F6F6F6")
                td <b>Promocionales</b>
                td Promover descuentos especiales a los clientes, tarjetas de puntos para realizar compras, llamadas de invitación a promociones y concursos.
              tr(style="background-color:#FFFFFF")
                td <b>Psicológicos</b>
                td Servicios ligados a la motivación del cliente, felicitaciones en el cumpleaños, llamar al cliente para preguntarle sobre la satisfacción de su compra.
              tr(style="background-color:#F6F6F6")
                td <b>De seguridad</b>
                td Dar garantías, devoluciones del dinero sino está satisfecho por su compra.
              tr(style="background-color:#FFFFFF")
                td <b>De mantenimiento </b>
                td Son los servicios de mantenimiento o de soporte técnico. Este servicio es muy agradecido por los clientes y sirve para fidelizar.

    p.mb-5 Luego de realizarse la venta de los productos y servicios, la empresa puede hacer distintas actividades dirigidas según Pérez (2013) a:       
    
    .row.justify-content-center
      .col-lg-8
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img06.svg', alt='Texto que describa la imagen')              

          .infografia.tarjeta.color-acento-botones.p-3(x="56%" y="19%" numero=" ")            
            p.mb-0 Luego de haber tomado la decisión de realizar la compra, mientras llega el producto, si toca entregar la mercancía en el domicilio, bien sea off-line u on-line informarle al cliente la trazabilidad del producto para la entrega
          .infografia.tarjeta.color-acento-botones.p-3(x="80%" y="50.3%" numero=" ")            
            p.mb-0 Este es el servicio más conocido por los clientes y adoptado por las empresas, puede incluir reparación hasta el cambio del producto. De ofrecer además la garantía extendida que incluye más tiempo y otros agregados.
          .infografia.tarjeta.color-acento-botones.p-3(x="62%" y="84%" numero=" ")            
            p.mb-0 Dependiendo el producto puede prestar apoyo técnico sobre cuidados o manejos del producto
          .infografia.tarjeta.color-acento-botones.p-3(x="24.5%" y="82.5%" numero=" ")            
            p.mb-0 Busca la manera que los clientes interactúen con la empresa sobre sus productos y servicios, bien a través de llamadas telefónicas o encuestas.
          .infografia.tarjeta.color-acento-botones.p-3(x="2%" y="55%" numero=" ")            
            p.mb-0 A todo cliente le gustan las ofertas y las promociones, y los clientes se sienten más comprometidos cuando se les comunican esas promociones por teléfono o email. 
          .infografia.tarjeta.color-acento-botones.p-3(x="20%" y="17.5%" numero=" ")            
            p.mb-0 Este es un tema que genera inconvenientes con los clientes cuando por cualquier razón procuran hacer devolución de los productos que compran, la empresa debe tener claras los términos y condiciones para realizar este servicio inverso, además comunicarlo.     

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Fases del servicio postventa
    p.mb-5 En el desarrollo del servicio postventa luego que el cliente ha realizado su compra, la empresa debe incorporar a sus protocolos acciones que dan fortaleza al seguimiento de clientes y este lo agradece. Al respecto Douglas (2020) sostiene aspectos a tener en cuenta.
    figure
      .video        
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/3Q8v2opknoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador

</template>

<script>
export default {
  name: 'Tema2',
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
