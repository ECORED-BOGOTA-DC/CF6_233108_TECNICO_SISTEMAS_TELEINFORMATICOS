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
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La LAN es una herramienta excelente para proporcionar una puerta de entrada a otras redes, software y periféricos. En algunas LAN, el conjunto de datos que acompaña al software de aplicación reside en un computador central llamado servidor. Utilizando microcomputadores conectados a una LAN, los usuarios finales pueden solicitar y descargar el conjunto de datos, y luego ejecutar la aplicación en sus computadores. Si los usuarios desean imprimir documentos en una impresora de red de alta calidad, la LAN contiene el software de red necesario para dirigir sus solicitudes de impresión a la impresora adecuada. Si los usuarios desean acceder a su correo electrónico desde el servidor de correo electrónico corporativo, la red de área local proporciona una conexión rápida y estable entre las estaciones de trabajo de los usuarios y el servidor de correo electrónico.   Si un usuario desea acceder a Internet, la red de área local proporciona una puerta de enlace eficaz con el mundo exterior. La siguiente figura muestra un diagrama de este tipo de distribución de microcomputador a red de área local.
      .col-lg-5(data-aos="fade-left")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/10.png")
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 2.
        span Una conexión de micro computación
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;")
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/11.svg")
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg")
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una forma común de distribución de microcomputadores a redes de área local en el mundo empresarial es el sistema #[span(style="color:#5573C6;") cliente/servidor], en donde un usuario de un microcomputador, o máquina cliente, emite una solicitud de algún tipo de datos o servicio. Puede ser una solicitud de un registro de base de datos de un servidor de base de datos o una solicitud para recuperar un mensaje de correo electrónico de un servidor de correo electrónico. Esta solicitud viaja por el sistema hasta un servidor que contiene un gran repositorio de datos y/o programas. El servidor completa la solicitud y devuelve los resultados al cliente, mostrándolos en el monitor. 
    
    p.mt-5(data-aos="fade-right") Un tipo de distribución de microcomputador a red de área local que sigue creciendo en popularidad es la distribución inalámbrica, en la que un usuario sentado en una estación de trabajo o en un computador portátil utiliza las comunicaciones inalámbricas para enviar y recibir datos hacia y desde un punto de acceso inalámbrico. Este punto de acceso está conectado a la red de área local y sirve básicamente de "puente" entre el dispositivo inalámbrico del usuario y la red cableada. Aunque esta configuración utiliza transmisiones de radiofrecuencia, seguimos considerándola una disposición de microcomputador a red de área local.

    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Disposición del microcomputador a Internet

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Con el crecimiento explosivo de Internet y el deseo de los usuarios de conectarse a la red desde casa, la #[strong disposición de microcomputadores a Internet] sigue creciendo de forma constante. Al principio, la mayoría de los usuarios domésticos se conectaban a Internet a través de una línea telefónica y un módem que permitía una velocidad máxima de transferencia de datos de aproximadamente 56.000 bits por segundo (56 kbps). 
        p.mt-4 Hoy en día, el módem de acceso telefónico ya no es la disposición más utilizada, la mayoría de los usuarios domésticos se conectan a Internet mediante una línea de abonado digital (DSL) o acceden a Internet a través de un servicio de módem por cable. 
        .row.mt-4
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/13.svg")
          .col(style="place-self:center;")
            .p-3.text-white.cont_arrow1(style="background-color:#12263F;")
              p.fw-bold.mb-0 Nota
              p.mb-0 Para comparar las distintas velocidades de transferencia de datos de los servicios y dispositivos, se utilizarán las siguientes convenciones:
              ul.lista-ul.mb-0.ps-3
                li.d-flex.mb-0
                  i.lista-ul__vineta(style="color:#4ADBD1 !important;")
                  | k (minúscula) = 1000, 
                li.d-flex.mb-0
                  i.lista-ul__vineta(style="color:#4ADBD1 !important;")
                  | b (minúscula) = bits, y 
                li.d-flex.mb-0
                  i.lista-ul__vineta(style="color:#4ADBD1 !important;")
                  |  B (mayúscula) = bytes.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-lg-12.col-md-6
          img(src="@/assets/curso/tema1/14.png")
    
    .cajon.mt-5.p-4.color-acento-contenido(style="background-color:#E8FFFD;" data-aos="flip-up")
      p.mb-0 Para comunicarse con Internet mediante una conexión telefónica, DSL o de módem por cable, el computador del usuario debe conectarse a otro computador que ya esté comunicando con Internet. La forma más fácil de establecer esta conexión es a través de los servicios de un proveedor de servicios de Internet (ISP). En este caso, el computador del usuario debe tener el software necesario para comunicarse con la red. Internet "habla" sólo TCP/IP, por lo que los usuarios deben utilizar un software que soporte los protocolos TCP e IP. Una vez que el computador del usuario habla TCP/IP, se puede establecer una conexión con Internet.  Ver figura a continuación que con un esquema típico de microcomputador a Internet.
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 3.
        span Envío de datos a través de DSL
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;")
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/15.svg")
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg")
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Disposición de la red de área local a la red de área local

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Dado que la red de área local es un estándar en los entornos empresariales y académicos, no debería sorprender que muchas organizaciones necesiten los servicios de varias redes de área local y que sea necesario que estas LAN se comuniquen entre sí. Por ejemplo, una empresa puede querer que la red de área local que soporta su departamento de investigación comparta una costosa impresora láser en color con la red de área local de su departamento de marketing. Afortunadamente, es posible conectar dos redes de área local para que puedan compartir periféricos y software. Los dispositivos que suelen conectar dos o más redes de área local son el conmutador y el router.
        .p-4.mt-4.cajon.color-acento-botones(style="background-color:#FFFAD8;" data-aos="zoom-in")
          p.mb-0 En algunos casos, puede ser más importante evitar que los datos fluyan entre las redes de área local que permitir que los datos fluyan de una red a otra. Por ejemplo, algunas empresas tienen razones políticas para soportar múltiples redes: cada división puede querer que su propia red funcione como quiera. Además, puede haber razones de seguridad para limitar el flujo de tráfico entre redes; o permitir que los datos destinados a una red concreta atraviesen otras redes simplemente puede generar demasiado tráfico de red. Los dispositivos que conectan las redes de área local también pueden ayudar a gestionar este tipo de servicios. Por ejemplo, el conmutador puede filtrar el tráfico no destinado a la red vecina, minimizando así la cantidad total de flujo de tráfico. La siguiente figura muestra un ejemplo de dos LAN conectadas por un switch.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-lg-12.col-md-6
          img(src="@/assets/curso/tema1/16.png")
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 4.
        span Conexión de dos LAN
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;")
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/17.svg")
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg")
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Diseños de redes de área personal para estaciones de trabajo

    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/18.png")
      .col-lg-8(data-aos="fade-left")
        p La red de área personal se creó a finales de los años 90 y es una de las formas más recientes de redes informáticas. Mediante transmisiones inalámbricas con dispositivos como los asistentes digitales personales (PDA), los computadores portátiles y los reproductores de música portátiles, una persona puede transferir voz, datos y música desde dispositivos portátiles a otros dispositivos como estaciones de trabajo con microcomputadores (Ver Figura 5). Asimismo, un usuario puede descargar datos desde una estación de trabajo a uno de estos dispositivos portátiles. Por ejemplo, un usuario puede utilizar una PDA para tomar notas durante una reunión. Una vez terminada la reunión, el usuario puede transmitir las notas a través de una conexión inalámbrica desde la PDA a su estación de trabajo. La estación de trabajo ejecuta entonces un procesador de textos para limpiar las notas, y las notas formateadas se cargan en una red de área local para su difusión corporativa. Otro ejemplo es la conexión de manos libres con Bluetooth que la gente utiliza para poder conversar con su celular sin tener que colocarlo en la oreja. También es muy común transferir fotos y vídeos digitales de las cámaras a los microcomputadores mediante señales inalámbricas de corto alcance.

    .cont_1_3.p-4.p-lg-5.mt-4
      .col-xl-6.col-lg-8.m-auto
        .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
          h5 Figura 5.
          span Transferencia de datos a través de una conexión inalámbrica
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/19.svg")
        figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Trazados de redes de área local a área metropolitana

    p(data-aos="fade-right") A finales del siglo XX apareció una nueva forma de red que interconectaba las empresas de un área metropolitana. Normalmente, esta interconexión utiliza únicamente enlaces de fibra óptica a velocidades extremadamente altas. Estas nuevas redes se denominan redes de área metropolitana. Una red de área metropolitana es una red de alta velocidad que interconecta múltiples sitios dentro de una región geográfica cercana, como una gran área urbana. Por ejemplo, las empresas que necesitan una conexión de alta velocidad con sus proveedores de servicios de Internet pueden utilizar una red de área metropolitana para la interconexión (Ver Figura 6). Las redes de área metropolitana son un cruce entre las redes de área local y las de área amplia, pueden transferir datos a velocidades de LAN rápidas, pero en regiones geográficas más amplias que las que suelen asociarse a una red de área local.

    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 6.
        span Empresas interconectadas en una WAN
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;")
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/20.svg")
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg")
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Disposición de la red de área local a la red de área amplia

    p(data-aos="fade-right") Si un usuario que trabaja en un microcomputador conectado a una red de área local desea acceder a Internet (una red de área amplia), la red de área local del usuario debe tener una conexión con Internet. Para conectar estas dos redes se utiliza un dispositivo llamado router, que convierte los datos de la red de área local en datos de la red de área amplia. También realiza funciones de seguridad y debe estar debidamente programado para aceptar o rechazar determinados tipos de paquetes de datos entrantes y salientes. La siguiente figura muestra una red de área local conectada a una red de área amplia a través de un router.

    .cont_1_3.p-4.p-lg-5.mt-4
      .col-xl-6.col-lg-8.m-auto
        .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
          h5 Figura 7.
          span Red WAN
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/21.svg")
        figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Disposición de la red de área amplia a la red de área amplia



      
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
.cont_arrow1
  position: relative
.cont_arrow1:before
  content: ''
  position: absolute
  width: 0
  height: 0
  top: 35%
  left: -20px
  border-top: 20px solid transparent
  border-bottom: 20px solid transparent
  border-right: 20px solid #12263F
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #FAFAFA
</style>
