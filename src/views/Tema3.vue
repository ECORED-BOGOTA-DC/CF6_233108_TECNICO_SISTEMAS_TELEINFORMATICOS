<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Redes de acceso

    .cont_3_1
      figure.mb-4.mb-lg-0(data-aos="zoom-in-down")
        img(src="@/assets/curso/tema3/1.png", alt='Imágen decorativa')
      .col-lg-10.m-auto(data-aos="zoom-in-up")
        .p-4.cont_gradiente_1(style="box-shadow:0px 0px 10px rgba(0,0,0,.2);background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%);margin-top:-100px;border-radius:15px;")
          p.mb-0 Una red de área local, se limita normalmente a un solo edificio o conjunto de edificios que están muy cerca, pero, ¿qué ocurre cuando una red se expande a un área metropolitana, a un estado o a todo el país? Una red que se expande a un área metropolitana y que presenta altas velocidades de datos, alta fiabilidad y baja pérdida de datos se denomina red de área metropolitana (MAN).
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema3/2.png", alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        p #[strong(style="color:#5573C6;") ¿Qué ocurre cuando una red es más grande que un área metropolitana?] Una red que se expande más allá de un área metropolitana es una red de área amplia. Las redes de área amplia comparten algunas características con las redes de área local: Interconectan computadores, utilizan algún tipo de medio para la interconexión y soportan aplicaciones de red. Pero hay diferencias. Las redes de área local no realizan el enrutamiento. En su lugar, los conmutadores reenvían las tramas al destino local adecuado, mientras que los #[em routers] enrutan los paquetes de una red de área amplia a otra. Las redes de área amplia pueden interconectar un gran número de estaciones de trabajo (dispositivos), de manera que cualquier estación de trabajo puede transferir datos a cualquier otra estación de trabajo. Como su nombre indica, las redes de área amplia pueden cubrir grandes distancias geográficas, incluida toda la Tierra.
        .cajon.mt-4.p-4.color-acento-contenido(style="background-color:#E8FFFD;" data-aos="flip-up")
          p.mb-0 Debido a las diferencias entre las redes de área local y las redes de área metropolitana y de área amplia, estas dos últimas formas de red merecen su propia discusión. A continuación, un análisis de las redes de área metropolitana, para avanzar con terminología básica de las redes de área amplia. Se examinará las diferencias entre las redes de área amplia con conmutación de circuitos y con conmutación de paquetes. Y se ofrecerá una breve introducción al enrutamiento, ya que las redes de área amplia utilizan el enrutamiento para transferir datos.
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Fundamentos de la red de área metropolitana

    p(data-aos="fade-right") Muchas de las mismas tecnologías y protocolos de comunicación que se encuentran en las redes de área local (y en las de área amplia) se utilizan para crear redes de área metropolitana. Sin embargo, las MAN suelen ser únicas en cuanto a topología y características de funcionamiento, veamos algunas de ellas destacadas en la siguiente infografía:

    .cont_3_2.mt-4.pt-4.pb-4(style="position:relative;")
      figure.d-none.d-lg-block
        img(src="@/assets/curso/tema3/3.svg" style="max-width:220px;position:absolute;display:inline;left:0;top:130px;", alt='Imágen decorativa')
      figure.d-none.d-lg-block
        img(src="@/assets/curso/tema3/5.svg" style="max-width:220px;position:absolute;display:inline;right:0;top:130px;", alt='Imágen decorativa')
      .col-xl-8.m-auto(data-aos="zoom-in-up")
        figure
          img(src="@/assets/curso/tema3/4.svg", alt='Imágen decorativa')
    
    p.mt-5.fw-bold.text-center(data-aos="zoom-in" style="color:#5573C6;") Aunque estas características no son tan diferentes de las de muchas redes de área local, hay algunas que distinguen a las MAN de las LAN:

    ul.lista-ul--separador.mt-4(data-aos="flip-up")
      li.d-flex
        i.fas.fa-check-circle(style="color:#4ADBD1;")
        div #[strong La primera característica] es que las MAN cubren distancias mucho mayores que las LAN. Como su nombre indica, las redes de área metropolitana son capaces de dar soporte a áreas metropolitanas enteras, como Nueva York, Chicago y Los Ángeles. Las redes de área local rara vez se extienden más allá de las paredes de un solo edificio, por lo que son más pequeñas que las MAN.
      li.d-flex
        i.fas.fa-check-circle(style="color:#4ADBD1;")
        div #[strong Una segunda característica] que distingue a las MAN de las LAN (pero no necesariamente de las WAN) es que la mayoría de las MAN pueden recuperarse muy rápidamente de un fallo de enlace o de conmutador/enrutador. Las MAN están diseñadas con circuitos altamente redundantes para que, en caso de fallo de un componente, la red pueda redirigir rápidamente el tráfico fuera del componente que ha fallado. Esta capacidad de redireccionamiento en caso de fallo se denomina <i>failover</i>, y la velocidad a la que se realiza el <i>failover</i> es el tiempo de <i>failover</i>. Aunque no todas las MAN tienen tiempos de conmutación por error bajos, conseguirlos es sin duda el objetivo de cualquier empresa que ofrezca un servicio MAN.
      li.d-flex
        i.fas.fa-check-circle(style="color:#4ADBD1;")
        div #[strong Una tercera característica] que distingue a muchas MAN de las LAN y las WAN es que algunas topologías MAN se basan en un anillo. La MAN en anillo es única porque es un anillo tanto lógica como físicamente. Así, no solo se transmiten los datos en forma de anillo, sino que también los #[em routers] y <i>switches</i> de la red están interconectados en forma de anillo (Figura 14).
    
          .col-xl-6.col-lg-8.mt-5.m-auto
            .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
              h5 Figura 14.
              span Anillo físico de fibra óptica
          .col-xl-10.m-auto.mt-5
            .row
              .col-2.d-none.d-lg-block
                figure(data-aos="fade-right")
                  img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
              .col
                figure(data-aos="zoom-in-up")
                  img(src="@/assets/curso/tema3/6.svg", alt='Figura que muestra una configuración típica de anillo físico de fibra óptica.')
                figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
              .col-auto.d-none.d-lg-block(style="place-self:end;")
                figure(data-aos="fade-left")
                  img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
      li.d-flex(data-aos="fade-right")
        i.fas.fa-check-circle(style="color:#4ADBD1;")
        div #[strong Por último], una característica que está empezando a aparecer en las MAN, pero que no tienen actualmente ni las LAN ni las WAN, es la capacidad de un usuario de asignar dinámicamente más ancho de banda bajo demanda. Supongamos que usted trabaja para una empresa y tiene una conexión MAN entre su oficina corporativa y un proveedor de servicios de Internet. Usted prevé, quizás porque está a punto de presentar una nueva oferta de servicio al cliente, que la demanda en el enlace MAN crecerá sustancialmente en los próximos días. Por lo tanto, realiza una llamada telefónica -o, en algunos casos, accede a una página web- y solicita que se aumente el ancho de banda de su conexión MAN en una cantidad determinada. El proveedor de servicios MAN recibe su solicitud, aumenta inmediatamente su ancho de banda y le factura en consecuencia. Es posible que en el futuro todas las redes -locales, metropolitanas y de área amplia- dispongan de esta potente función. Por ahora, solo la ofrecen algunos proveedores de servicios MAN.
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") SONET vs. Ethernet

    .mt-5(style="position:relative;")
      .bloque-texto-g.color-secundario.bloque_1_1.p-4(data-aos="flip-up" style="background-color:transparent;")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/7.png')})`}"
        )
        .bloque-texto-g__texto.p-4(style="background-color:#F8F8F8;border-radius:0px 30px 0px 30px;")
          p.mb-0 Casi todas las MAN se basan en una de las dos formas básicas de tecnología de soporte: SONET o Ethernet. SONET, es una técnica de multiplexación sincrónica por división de tiempo que es capaz de enviar datos a una velocidad de cientos de millones de bits por segundo. La topología de la red es un anillo, pero este anillo se compone en realidad de múltiples anillos que permiten a la red proporcionar una copia de seguridad en caso de fallo de un segmento (Figura 15). Esta es una de las características de los anillos SONET que les permite tener un tiempo de conmutación por error muy bajo. En la actualidad, muchas MAN se apoyan en la tecnología de anillos SONET.
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 15.
        span Anillo SONET
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema3/8.svg", alt='Figura que muestra una configuración típica de anillo SONET.')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
    .col-xl-10.m-auto.mt-5
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/9.svg", alt='Imágen decorativa')
        .col(style="place-self:center;" data-aos="fade-left")
          .p-3.text-white.cont_arrow1(style="background-color:#12263F;")
            p.mb-0 Lamentablemente, SONET tiene una serie de desventajas. Es una tecnología compleja y bastante cara que no puede aprovisionarse dinámicamente. Además, SONET se diseñó para soportar múltiples flujos de canales de voz (como múltiples T-1, que transmiten a 1,544 Mbps) y, por lo tanto, no se adapta bien a los trozos de 1-Mbps, 10-Mbps, 100-Mbps y 1000-Mbps que se suelen utilizar en las transmisiones de datos. Estas deficiencias han reavivado el interés por una tecnología más antigua que SONET, pero recién llegada al campo de las redes de área metropolitana: Ethernet.
    
    p.mt-5(data-aos="fade-right") Las MAN de Ethernet son menos costosas que los sistemas SONET, se comprenden bien, son fácilmente escalables de 10 Mbps a 100 Mbps y de 1000 Mbps a 10 Gbps, y son la mejor tecnología para transportar tráfico IP (el tipo de tráfico que circula por Internet). Una desventaja que afecta a algunas versiones de Ethernet en la MAN es el mayor tiempo de conmutación por error. Las MAN de Ethernet que utilizan el protocolo Spanning Tree para reconfigurar una red alterada no se recuperan tan rápidamente como los anillos SONET y pueden dejar a los clientes sin servicio hasta 10 segundos. Los anillos SONET suelen tener un tiempo de conmutación por error de 50 milisegundos o menos.

    .row.mt-4
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.svg", alt='Imágen decorativa')
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Para mejorar los tiempos de conmutación por error de las MAN basadas en Ethernet, muchas redes utilizan ahora el protocolo Rapid Spanning Tree, que puede reducir el tiempo de conmutación por error a tan solo 50 milisegundos. En cualquier caso, las MAN Ethernet tienen una serie de características atractivas y su popularidad está creciendo. La siguiente figura muestra un diseño típico de una topología Ethernet MAN. Obsérvese que la red tiene un diseño de malla con rutas redundantes entre los puntos finales.
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 16.
        span Topología estrella
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema3/10.svg", alt='Figura que muestra un diseño típico de una topología Ethernet MAN.')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')

    p.mt-5(data-aos="fade-right") Las MAN de Ethernet han dado lugar a un servicio más reciente cuya popularidad ha crecido en los últimos años: Metro Ethernet. Metro Ethernet es un servicio de transferencia de datos que puede conectar una empresa con otra (o varias) utilizando una conexión Ethernet estándar. Con Metro Ethernet, la empresa se conecta directamente a otra utilizando una conexión punto a punto o, por ejemplo, a otras dos empresas utilizando dos conexiones punto a punto, como se muestra en la Figura 17. También puede conectarse a varias compañías como si todas ellas formaran parte de una gran red de área local, como se muestra en la Figura 18. La primera conexión es lo mismo que tener una conexión privada entre dos puntos. Un ejemplo común de este tipo de conexión Metro Ethernet se encuentra cuando una empresa está conectada a un proveedor de servicios de Internet. Todo el tráfico de esta conexión se realiza entre solo dos lugares. Esta última conexión es un ejemplo de conexión multipunto a multipunto. Aquí, cualquier empresa puede hablar con una o varias (o todas) las empresas conectadas. Por lo tanto, una empresa necesita enviar solo un paquete para asegurarse de que varias empresas reciben estos datos.

    .cont_3_3.p-4.p-lg-5.mt-4
      .row
        .col-xl-6.mb-4.mb-lg-0
          .titulo-sexto.color-acento-botones(data-aos="zoom-in-up")
            h5 Figura 17.
            span Conexión entre dos puntos
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema3/11.svg", alt='Figura que muestra una conexión entre dos puntos, indicando que puede conectarse a otras dos empresas utilizando dos conexiones punto a punto.')
        .col-xl-6
          .titulo-sexto.color-acento-botones(data-aos="zoom-in-up")
            h5 Figura 18.
            span Conexión multipuntos
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema3/12.svg", alt='Figura que muestra una conexión entre multipuntos, indicando que puede conectarse a varias compañías como si todas ellas formaran parte de una gran red de área local.')
      figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
    
    p.mt-5(data-aos="fade-right") Un aspecto interesante de Metro Ethernet es que los usuarios del servicio pueden conectar sin problemas las redes de área local Ethernet de su empresa al servicio Metro Ethernet. Dado que todas las redes implicadas son Ethernet, no es necesario realizar conversiones de un formato a otro que requieren mucho tiempo y a veces son torpes. Así, una LAN corporativa que funciona a 100 Mbps puede conectarse sin problemas a un servicio Metro Ethernet que también funciona a 100 Mbps. No se puede decir lo mismo si se conecta una LAN de 100 Mbps a SONET, con velocidades que suelen empezar en 51,48 Mbps.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up" style="background-color:#373F51;")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Si miráramos bajo el capó de Metro Ethernet, veríamos que hay varias variedades. La primera se llama Ethernet pura. Pero como Ethernet se diseñó para redes de área local más pequeñas, la Ethernet pura no funciona bien en largas distancias con un gran número de usuarios sin la ayuda de protocolos complementarios (como el #[em Rapid Spanning Tree Protocol]). También hay Metro Ethernets en las que la Ethernet funciona sobre un segundo protocolo de enlace de datos, como SONET/SDH o MPLS. En estos casos, la trama de Ethernet está integrada en una trama SONET/SDH o en una trama MPLS. Metro Ethernet también se denomina #[em Carrier Ethernet].
    
    p.mt-4(data-aos="fade-right") Una empresa que tenga una conexión con Metro Ethernet puede crear un perfil de ancho de banda para esa conexión. Este perfil de ancho de banda describe varias características de la conexión, como las tasas de transferencia de datos básicas, las tasas de ráfagas básicas (una ráfaga, como recordará, es una gran oleada de datos que se transmite durante un corto período de tiempo), las tasas de transferencia de datos en exceso y las tasas de ráfagas en exceso. La red de área local Ethernet, no permite a los usuarios establecer sus propias tasas de transferencia de datos; simplemente deben aceptar la tasa correspondiente a la marca particular de Ethernet (como Ethernet de 100 Mbps) que hayan elegido. Esta característica de perfil de Metro Ethernet es una opción interesante y potente para las empresas que quieren adaptar una conexión a una aplicación concreta. Por ejemplo, si una empresa está lanzando una nueva aplicación web y espera un nivel variable de respuesta de los usuarios, el personal de la red de la empresa puede establecer una tasa de transferencia de datos básica para la respuesta media prevista y, a continuación, establecer una tasa de ráfaga excesiva para los períodos de máxima actividad.





</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 75%
  bottom: 0
  background: url(../assets/curso/tema1/1.png)
  background-size: cover
  background-position: bottom
.cont_3_2, .cont_3_2 *
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #F6F6F6
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #b0c0d2
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
.cont_3_3, .cont_3_3 *
  position: relative
.cont_3_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #FAFAFA
</style>
