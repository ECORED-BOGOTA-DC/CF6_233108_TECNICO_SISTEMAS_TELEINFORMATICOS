<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Red de computación

    .cont_1_1
      figure.mb-4.mb-lg-0(data-aos="zoom-in-down")
        img(src="@/assets/curso/tema1/2.png")
      .col-lg-10.m-auto(data-aos="zoom-in-up")
        .p-4.cont_gradiente_1(style="box-shadow:0px 0px 10px rgba(0,0,0,.2);background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%);margin-top:-120px;border-radius:15px;")
          p.mb-0 Al intentar ofrecer una visión general de una red computacional típica, se tendría una imagen como la que se presenta en la Figura 1, que incluye ejemplos de redes de área local (de dos tipos: LAN 1 y LAN 2), personal y amplia. Sin llegar a una descripción completa de los diferentes componentes que constituyen una red de área local, es importante señalar que la mayoría de las LAN incluyen el siguiente hardware:
      .col-xl-8.col-lg-10.mt-5.m-auto
        .p-2(style="background-color:#4ADBD1;border-radius:15px;" data-aos="fade-right")
          .p-3(style="background-color:#4ADBD1;border-radius:15px;border:2px #fff solid;")
            p.mb-0 #[strong Estaciones de trabajo:] computadores personales/microcomputadores (computadores de mesa, portátiles, netbooks, handhelds, etc.) donde residen los usuarios.
    .col-xl-8.col-lg-10.mt-4.m-auto
      .p-2(style="background-color:#F0DCC0;border-radius:15px;" data-aos="fade-left")
        .p-3(style="background-color:#F0DCC0;border-radius:15px;border:2px #fff solid;")
          p.mb-0 #[strong Servidores:] computadores que almacenan el software de red y los archivos compartidos o privados de los usuarios.
      .p-2.mt-4(style="background-color:#5573C6;border-radius:15px;" data-aos="fade-right")
        .p-3(style="background-color:#5573C6;border-radius:15px;border:2px #fff solid;")
          p.mb-0.text-white #[strong Conmutadores:] puntos de recogida de los cables que interconectan los puestos de trabajo.
      .p-2.mt-4(style="background-color:#F4A338;border-radius:15px;" data-aos="fade-left")
        .p-3(style="background-color:#F4A338;border-radius:15px;border:2px #fff solid;")
          p.mb-0 #[strong Routers:] dispositivos de conexión entre las redes de área local y las redes de área amplia.
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 1.
        span Interconexión de varias redes
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;")
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/4.svg")
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg")
    
    .col-xl-10.m-auto.mt-5
      p.fw-bold(data-aos="fade-right") También existen muchos tipos de redes de área amplia y aunque se utilizan distintas tecnologías para soportar dicho tipo de redes, todas incluyen dentro de sus componentes:
    
    .cont_1_2.mt-5
      .col-xl-10.m-auto
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/7.svg")
    
    br
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/8.svg")
      .col-lg-8(data-aos="fade-left")
        p Para ver cómo funcionan conjuntamente las redes de área local y las redes de área amplia, considere al Usuario A (en la esquina superior izquierda de la Figura 1, que desea recuperar una página web del servidor web mostrado en la esquina inferior derecha. Para ello, el computador del usuario A debe contar con el hardware y el software necesarios para comunicarse con la primera red de área amplia que encuentra, la WAN 1, el proveedor de servicios de Internet del usuario A. Suponiendo que el computador del usuario A esté conectado a esta red de área amplia a través de una línea telefónica DSL, el usuario A necesita algún tipo de módem. Además, si esta red de área amplia forma parte de Internet, el computador del usuario A necesita un software que hable de Internet: TCP/IP (#[em Transmission Control Protocol/Internet Protocol]). 
        p.mt-4 Obsérvese que no existe una conexión directa entre la WAN 1, donde reside el usuario A, y la LAN 2, donde reside el servidor web. Para asegurar que la solicitud de la página web del usuario A llegue a su destinatario (el servidor web), el software del usuario A adjunta la información de la dirección apropiada que la WAN 1 utiliza para dirigir la solicitud del usuario Al router que conecta la WAN 1 con la LAN 1. Una vez que la solicitud está en la LAN 1, el dispositivo tipo #[em switch] que conecta la LAN 1 y la LAN 2 utiliza la información de dirección para pasar la solicitud a la LAN 2. La información de dirección adicional entonces dirige la solicitud de la página web del usuario A al servidor web, cuyo software acepta la solicitud.
    
    .p-4.mt-4.cajon.color-acento-botones(style="background-color:#FFFAD8;" data-aos="zoom-in")
      p.mb-0 En condiciones normales de tráfico, este procedimiento puede durar sólo una fracción de segundo. Cuando se empieza a comprender todos los pasos que hay que dar y el gran número de transformaciones que debe sufrir una simple petición de página web, el hecho de que sólo se tarde una fracción de segundo en entregarla es sorprendente.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1 Identificar el estado de la conectividad
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.svg")
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 El  diseño de red más común hoy en día, el de microcomputador a red de área local, se encuentra prácticamente en todos los entornos empresariales y académicos, incluso en muchos hogares. El microcomputador -conocido comúnmente como computador personal, PC, computador de sobremesa, computador portátil, notebook, netbook o estación de trabajo- comenzó a surgir a finales de los años 70 y principios de los 80. (En aras de la coherencia, utilizaremos el antiguo término "microcomputador" para referirnos a cualquier tipo de computador basado en un microprocesador, una unidad de disco y una memoria). 





      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
<style lang="sass">
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 75%
  bottom: 0
  background: url(../assets/curso/tema1/1.png)
  background-size: cover
  background-position: bottom
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/6.png)
  background-size: cover
  background-position: bottom
</style>
