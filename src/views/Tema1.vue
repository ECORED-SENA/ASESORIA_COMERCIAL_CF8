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
          p.mb-4 Pero ¿qué es la postventa?, de acuerdo con Sale Forje (2018) <b>“es la parte de la atención al cliente que reúne todas las estrategias pensadas para mejorar la experiencia después de la compra y mantener una relación duradera con los clientes, siempre correspondiendo a sus expectativas y necesidades”</b>. 
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

    .row.justify-content-center.mb-5
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

    p.mb-0 Por tanto, el vendedor debe tener en cuenta estas etapas y la empresa considerar llevar a cabo programas de atención de servicio al cliente y servicio de postventa, para las MiPymes se debe considerar unir estos programas en la medida de sus recursos. 

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
                p.mb-0 Debe ir unidad a la garantía que ofrece el producto o a las políticas de la empresa al respecto. 
    
      .row.justify-content-center
        .col-lg-10
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
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Procedimiento para estructurar un servicio postventa
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
