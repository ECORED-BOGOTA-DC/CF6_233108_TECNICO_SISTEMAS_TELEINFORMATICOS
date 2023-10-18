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
        img(src="@/assets/curso/tema1/2.png", alt='Imágen decorativa')
      .col-lg-10.m-auto(data-aos="zoom-in-up")
        .p-4.cont_gradiente_1(style="box-shadow:0px 0px 10px rgba(0,0,0,.2);background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%);margin-top:-120px;border-radius:15px;")
          p.mb-0 Al intentar ofrecer una visión general de una red computacional típica, se tendría una imagen como la que se presenta en la Figura 1, que incluye ejemplos de redes de área local (de dos tipos: LAN 1 y LAN 2), personal y amplia. Sin llegar a una descripción completa de los diferentes componentes que constituyen una red de área local, es importante señalar que la mayoría de las LAN incluyen el siguiente #[em hardware]:
      .col-xl-8.col-lg-10.mt-5.m-auto
        .p-2(style="background-color:#4ADBD1;border-radius:15px;" data-aos="fade-right")
          .p-3(style="background-color:#4ADBD1;border-radius:15px;border:2px #fff solid;")
            p.mb-0 #[strong Estaciones de trabajo:] computadores personales/microcomputadores (computadores de mesa, portátiles, netbooks, handhelds, etc.) donde residen los usuarios.
    .col-xl-8.col-lg-10.mt-4.m-auto
      .p-2(style="background-color:#F0DCC0;border-radius:15px;" data-aos="fade-left")
        .p-3(style="background-color:#F0DCC0;border-radius:15px;border:2px #fff solid;")
          p.mb-0 #[strong Servidores:] computadores que almacenan el #[em software] de red y los archivos compartidos o privados de los usuarios.
      .p-2.mt-4(style="background-color:#5573C6;border-radius:15px;" data-aos="fade-right")
        .p-3(style="background-color:#5573C6;border-radius:15px;border:2px #fff solid;")
          p.mb-0.text-white #[strong Conmutadores:] puntos de recogida de los cables que interconectan los puestos de trabajo.
      .p-2.mt-4(style="background-color:#F4A338;border-radius:15px;" data-aos="fade-left")
        .p-3(style="background-color:#F4A338;border-radius:15px;border:2px #fff solid;")
          p.mb-0 #[strong #[em Routers]:] dispositivos de conexión entre las redes de área local y las redes de área amplia.

    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 1.
        span Interconexión de varias redes
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imagen que ilustra la conexión entre varias redes, esto es:<br>El usuario A se conecta a través del moden WAN 1 con el Routers donde pasa al WAN 2 y de allí se comunica con la torre que emite la señal, pero desde el WAN 1 también se da señal a través de los Roters y esta al LAN 1 que se comunica con diversos elementos como son portatil, torre de computador de escritorio al Swith que a su vez conecta con el LAN 2 que de igual manera se comunica con otros aparatos utilizados por el usuario.')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/4.svg", alt='Imágen decorativa')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
    .col-xl-10.m-auto.mt-5
      p.fw-bold(data-aos="fade-right") También existen muchos tipos de redes de área amplia y aunque se utilizan distintas tecnologías para soportar dicho tipo de redes, todas incluyen dentro de sus componentes:
    
    .cont_1_2.mt-5
      .col-xl-10.m-auto
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/7.svg", alt='Imágen decorativa')
    
    br
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/8.svg", alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        p Para ver cómo funcionan conjuntamente las redes de área local y las redes de área amplia, considere al Usuario A (en la esquina superior izquierda de la Figura 1), que desea recuperar una página web del servidor web mostrado en la esquina inferior derecha. Para ello, el computador del usuario A debe contar con el #[em hardware] y el #[em software] necesarios para comunicarse con la primera red de área amplia que encuentra, la WAN 1, el proveedor de servicios de Internet del usuario A. Suponiendo que el computador del usuario A esté conectado a esta red de área amplia a través de una línea telefónica DSL, el usuario A necesita algún tipo de módem. Además, si esta red de área amplia forma parte de Internet, el computador del usuario A necesita un #[em software] que hable de Internet: TCP/IP (#[em Transmission Control Protocol/Internet Protocol]). 
        p.mt-4 Obsérvese que no existe una conexión directa entre la WAN 1, donde reside el usuario A, y la LAN 2, donde reside el servidor web. Para asegurar que la solicitud de la página web del usuario A llegue a su destinatario (el servidor web), el #[em software] del usuario A adjunta la información de la dirección apropiada que la WAN 1 utiliza para dirigir la solicitud del usuario Al #[em router] que conecta la WAN 1 con la LAN 1. Una vez que la solicitud está en la LAN 1, el dispositivo tipo #[em switch] que conecta la LAN 1 y la LAN 2 utiliza la información de dirección para pasar la solicitud a la LAN 2. La información de dirección adicional entonces dirige la solicitud de la página web del usuario A al servidor web, cuyo #[em software] acepta la solicitud.
    
    .p-4.mt-4.cajon.color-acento-botones(style="background-color:#FFFAD8;" data-aos="zoom-in")
      p.mb-0 En condiciones normales de tráfico, este procedimiento puede durar sólo una fracción de segundo. Cuando se empieza a comprender todos los pasos que hay que dar y el gran número de transformaciones que debe sufrir una simple petición de página web, el hecho de que sólo se tarde una fracción de segundo en entregarla es sorprendente.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1 Identificar el estado de la conectividad
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.svg", alt='Imágen decorativa')
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 El  diseño de red más común hoy en día, el de microcomputador a red de área local, se encuentra prácticamente en todos los entornos empresariales y académicos, incluso en muchos hogares. El microcomputador -conocido comúnmente como computador personal, PC, computador de sobremesa, computador portátil, notebook, netbook o estación de trabajo- comenzó a surgir a finales de los años 70 y principios de los 80. (En aras de la coherencia, utilizaremos el antiguo término "microcomputador" para referirnos a cualquier tipo de computador basado en un microprocesador, una unidad de disco y una memoria). 
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La LAN es una herramienta excelente para proporcionar una puerta de entrada a otras redes, #[em software] y periféricos. En algunas LAN, el conjunto de datos que acompaña al #[em software] de aplicación reside en un computador central llamado servidor. Utilizando microcomputadores conectados a una LAN, los usuarios finales pueden solicitar y descargar el conjunto de datos, y luego ejecutar la aplicación en sus computadores. Si los usuarios desean imprimir documentos en una impresora de red de alta calidad, la LAN contiene el #[em software] de red necesario para dirigir sus solicitudes de impresión a la impresora adecuada. Si los usuarios desean acceder a su correo electrónico desde el servidor de correo electrónico corporativo, la red de área local proporciona una conexión rápida y estable entre las estaciones de trabajo de los usuarios y el servidor de correo electrónico.   Si un usuario desea acceder a Internet, la red de área local proporciona una puerta de enlace eficaz con el mundo exterior. La siguiente figura muestra un diagrama de este tipo de distribución de microcomputador a red de área local.
      .col-lg-5(data-aos="fade-left")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/10.png", alt='Imágen decorativa')
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 2.
        span Una conexión de micro computación
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/11.svg", alt='Imagen que muestra una conexión a un micro computador, esta se explica de manera detalladas posterior la imagen')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
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
              img(src="@/assets/curso/tema1/13.svg", alt='Imágen decorativa')
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
          img(src="@/assets/curso/tema1/14.png", alt='Imágen decorativa')
    
    .cajon.mt-5.p-4.color-acento-contenido(style="background-color:#E8FFFD;" data-aos="flip-up")
      p.mb-0 Para comunicarse con Internet mediante una conexión telefónica, DSL o de módem por cable, el computador del usuario debe conectarse a otro computador que ya esté comunicando con Internet. La forma más fácil de establecer esta conexión es a través de los servicios de un proveedor de servicios de Internet (ISP). En este caso, el computador del usuario debe tener el #[em software] necesario para comunicarse con la red. Internet "habla" sólo TCP/IP, por lo que los usuarios deben utilizar un #[em software] que soporte los protocolos TCP e IP. Una vez que el computador del usuario habla TCP/IP, se puede establecer una conexión con Internet.  Ver figura a continuación que con un esquema típico de microcomputador a Internet.
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 3.
        span Envío de datos a través de DSL
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/15.svg", alt='Esquema gráfico que muestra la conexión de un microcomputador a internet.')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Disposición de la red de área local a la red de área local

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Dado que la red de área local es un estándar en los entornos empresariales y académicos, no debería sorprender que muchas organizaciones necesiten los servicios de varias redes de área local y que sea necesario que estas LAN se comuniquen entre sí. Por ejemplo, una empresa puede querer que la red de área local que soporta su departamento de investigación comparta una costosa impresora láser en color con la red de área local de su departamento de marketing. Afortunadamente, es posible conectar dos redes de área local para que puedan compartir periféricos y #[em software]. Los dispositivos que suelen conectar dos o más redes de área local son el conmutador y el #[em router].
        .p-4.mt-4.cajon.color-acento-botones(style="background-color:#FFFAD8;" data-aos="zoom-in")
          p.mb-0 En algunos casos, puede ser más importante evitar que los datos fluyan entre las redes de área local que permitir que los datos fluyan de una red a otra. Por ejemplo, algunas empresas tienen razones políticas para soportar múltiples redes: cada división puede querer que su propia red funcione como quiera. Además, puede haber razones de seguridad para limitar el flujo de tráfico entre redes; o permitir que los datos destinados a una red concreta atraviesen otras redes simplemente puede generar demasiado tráfico de red. Los dispositivos que conectan las redes de área local también pueden ayudar a gestionar este tipo de servicios. Por ejemplo, el conmutador puede filtrar el tráfico no destinado a la red vecina, minimizando así la cantidad total de flujo de tráfico. La siguiente figura muestra un ejemplo de dos LAN conectadas por un switch.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-lg-12.col-md-6
          img(src="@/assets/curso/tema1/16.png", alt='Imágen decorativa')
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 4.
        span Conexión de dos LAN
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/17.svg", alt='Imagen que ilustra la estructura de la conexión de dos LAN, esto es: el LAN A donde desde la torre pantalla de un computador de escritorio ingresan al Hub, luego al Switch, luego nuevamente a un Hub y de este nuevamente a torres y pantallas del LAN B.')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Diseños de redes de área personal para estaciones de trabajo

    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/18.png", alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        p La red de área personal se creó a finales de los años 90 y es una de las formas más recientes de redes informáticas. Mediante transmisiones inalámbricas con dispositivos como los asistentes digitales personales (PDA), los computadores portátiles y los reproductores de música portátiles, una persona puede transferir voz, datos y música desde dispositivos portátiles a otros dispositivos como estaciones de trabajo con microcomputadores (Ver Figura 5). Asimismo, un usuario puede descargar datos desde una estación de trabajo a uno de estos dispositivos portátiles. Por ejemplo, un usuario puede utilizar una PDA para tomar notas durante una reunión. Una vez terminada la reunión, el usuario puede transmitir las notas a través de una conexión inalámbrica desde la PDA a su estación de trabajo. La estación de trabajo ejecuta entonces un procesador de textos para limpiar las notas, y las notas formateadas se cargan en una red de área local para su difusión corporativa. Otro ejemplo es la conexión de manos libres con #[em Bluetooth] que la gente utiliza para poder conversar con su celular sin tener que colocarlo en la oreja. También es muy común transferir fotos y vídeos digitales de las cámaras a los microcomputadores mediante señales inalámbricas de corto alcance.

    .cont_1_3.p-4.p-lg-5.mt-4
      .col-xl-6.col-lg-8.m-auto
        .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
          h5 Figura 5.
          span Transferencia de datos a través de una conexión inalámbrica
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/19.svg", alt='Imagen que ilustra a un usuario con una conexión inhalambrica que emite una señal a la torre local de trabajo de su computador.')
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
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/20.svg", alt='La imagen muestra estación de trabajo de microcomputador conectada a una red de área local debe conectarse primero a un dispositivo como un conmutador, dispositivo que conecta múltiples estaciones de trabajo y pasa la señal de transmisión de cualquier estación de trabajo a otras estaciones de trabajo.')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Disposición de la red de área local a la red de área amplia

    p(data-aos="fade-right") Si un usuario que trabaja en un microcomputador conectado a una red de área local desea acceder a Internet (una red de área amplia), la red de área local del usuario debe tener una conexión con Internet. Para conectar estas dos redes se utiliza un dispositivo llamado #[em router], que convierte los datos de la red de área local en datos de la red de área amplia. También realiza funciones de seguridad y debe estar debidamente programado para aceptar o rechazar determinados tipos de paquetes de datos entrantes y salientes. La siguiente figura muestra una red de área local conectada a una red de área amplia a través de un #[em router].

    .cont_1_3.p-4.p-lg-5.mt-4
      .col-xl-6.col-lg-8.m-auto
        .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
          h5 Figura 7.
          span Red WAN
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/21.svg", alt='Imagen que muestra un servicio de datos bidireccional que requiere instalación de una antena parabólica de estación terrestre para cada una de las sedes corporativas.')
        figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Disposición de la red de área amplia a la red de área amplia

    .cont_1_4.mt-5(style="position:relative;", alt='Imágen decorativa')
      figure.d-none.d-md-block
        img(src="@/assets/curso/tema1/23.svg" style="max-width:170px;max-height:170px;display:inline;position:absolute;right:-105px;top:35%;", alt='Imágen decorativa')
      .bloque-texto-g.color-secundario.bloque_1_1.p-4(data-aos="flip-up" style="background-color:transparent;")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/22.png')})`}"
        )
        .bloque-texto-g__texto.p-4(style="background-color:#F8F8F8;border-radius:30px 0px 30px;")
          p.mb-0 Internet no es una red única, sino un conjunto de miles de redes. Para recorrer cualquier distancia a través de Internet, un paquete de datos pasará sin duda por múltiples redes de área amplia. Para conectar una red de área amplia con otra red de área amplia se necesitan dispositivos especiales que puedan enrutar el tráfico de datos de forma rápida y eficaz. Estos dispositivos son los #[em routers] de alta velocidad. Una vez que el paquete de datos entra en el #[em router] de alta velocidad, se extrae una dirección en la capa de red (la dirección IP), se toma una decisión de enrutamiento y el paquete de datos se envía al siguiente segmento de la red de área amplia. A medida que el paquete de datos viaja por Internet, un #[em router] tras otro toma una decisión de enrutamiento, moviendo los datos hacia su destino final. 
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;")  Diseños de redes de sensores a área local

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Otra disposición habitual en la vida cotidiana es la de sensor a red de área local. En este tipo de disposición, la acción de una persona u objeto activa un sensor -por ejemplo, un semáforo de giro a la izquierda en un cruce que está conectado a una red. En muchos carriles de giro a la izquierda, un semáforo de giro a la izquierda aparecerá si y sólo si uno o más vehículos están en el carril de giro a la izquierda. Un sensor incrustado en la calzada detecta el movimiento de un automóvil en el carril superior y activa el mecanismo de giro a la izquierda en la caja de control de señales de tráfico al lado de la carretera. Si esta caja de control de señales de tráfico está conectada a un sistema de control de tráfico mayor, el sensor se conecta a una red de área local.
        .p-4.mt-4.cajon.color-acento-botones(style="background-color:#FFFAD8;" data-aos="zoom-in")
          p.mb-0 Otro ejemplo de disposición de sensores a redes de área local se encuentra en los entornos de fabricación. Las líneas de ensamblaje, los dispositivos de control robótico, los controles de temperatura de los hornos y los equipos de análisis químico utilizan a menudo sensores conectados a computadores de recogida de datos que controlan los movimientos y las operaciones, hacen sonar las alarmas y calculan los resultados experimentales o de control de calidad. La siguiente figura muestra un diagrama de la disposición típica de una red de sensores a área local en un entorno de fabricación.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-lg-12.col-md-6
          img(src="@/assets/curso/tema1/24.png", alt='Imágen decorativa')
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 8.
        span Red de sensores
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/25.svg", alt='Imágen decorativa')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Trazado de satélites y microondas

    p(data-aos="fade-right") Los trazados por satélite y microondas son tecnologías en continua evolución que se utilizan en diversas aplicaciones. Si la distancia entre dos redes es grande y el tendido de un cable entre ellas sería difícil (si no imposible), los sistemas de transmisión por satélite y microondas pueden ser una forma muy eficaz de conectar las dos redes o sistemas informáticos. Algunos ejemplos de estas aplicaciones son la televisión digital por satélite, la meteorología, las operaciones de inteligencia, la telefonía marítima móvil, los sistemas de navegación GPS, el correo electrónico inalámbrico, los sistemas de telefonía móvil mundial y las videoconferencias. La siguiente figura muestra el diagrama de un sistema de satélite típico.
    
    .cont_1_3.p-4.p-lg-5.mt-4
      .col-xl-6.col-lg-8.m-auto
        .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
          h5 Figura 9.
          span Red satelital de TV
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/26.svg", alt='Imágen decorativa')
        figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Diseños de redes móviles

    p(data-aos="fade-right") Una de las áreas de crecimiento más explosivo en los últimos años ha sido la de las redes de telefonía móvil. La Figura 10 muestra un ejemplo de una PDA de mano que, además de hacer llamadas telefónicas, puede transmitir y recibir datos. La PDA tiene un módem instalado, que transmite los datos de la PDA a través de la red de telefonía celular hasta el centro de conmutación de teléfonos celulares. El centro de conmutación transfiere entonces los datos de la PDA a través de la red telefónica pública o mediante una conexión a Internet. Muchos de los nuevos dispositivos de mano han combinado las capacidades de acceso a los datos con un teléfono móvil y pueden transferir los datos a través de las conexiones de telefonía móvil.

    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 10.
        span Ejemplo de una red móvil
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/27.svg", alt='Imágen decorativa')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')

    Separador

    .titulo-segundo(data-aos="zoom-in-right") 
      h2#t_1_2 1.2 Protocolos de infraestructura
    
    .cont_1_1
      figure.mb-4.mb-lg-0(data-aos="zoom-in-down")
        img(src="@/assets/curso/tema1/28.png", alt='Imágen decorativa')
      .col-lg-10.m-auto(data-aos="zoom-in-up")
        .p-4.cont_gradiente_1(style="box-shadow:0px 0px 10px rgba(0,0,0,.2);background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%);margin-top:-100px;border-radius:15px;")
          p.mb-0 A continuación, se presenta la descripción de algunos protocolos de transmisión de datos que se usan en las redes, con el objetivo de dar un concepto que permita la apropiación de soluciones a problemas que se puedan presentar en redes de comunicaciones.
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") #[em Bluetooth]

    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/29.png", alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        p El protocolo #[em Bluetooth], llamado así por el cruzado vikingo Harald Bluetooth, que unificó Dinamarca y Noruega en el siglo X, es una tecnología inalámbrica que utiliza radiofrecuencias de baja potencia y corto alcance para comunicarse entre dos o más dispositivos. En concreto, #[em Bluetooth] utiliza la banda ISM (Indus- trial, Scientific, Medical) de 2,45 GHz y suele limitarse a distancias de entre 10 cm y 10 metros (que corresponden a unas 4 pulgadas y 30 pies, respectivamente). 
        .p-4.mt-4.cajon.color-acento-botones(style="background-color:#FFFAD8;" data-aos="zoom-in")
          p.mb-0 A diferencia de los infrarrojos, #[em Bluetooth] es capaz de transmitir a través de objetos no metálicos. Así, un dispositivo que transmite señales #[em Bluetooth] puede llevarse en un bolsillo, un bolso o un maletín. Además, con #[em Bluetooth] es posible transferir datos a velocidades razonablemente altas. El primer estándar #[em Bluetooth] era capaz de transferir datos a una velocidad de aproximadamente 700 kbps. El segundo estándar aumentó la velocidad de datos a algo más de 2 Mbps.
    
    p.mt-5(data-aos="fade-right") #[em Bluetooth] también puede comunicar entre varios dispositivos. Por ejemplo, en un entorno de oficina con muchos computadores, impresoras, faxes y fotocopiadoras, con #[em Bluetooth], cada dispositivo puede enviar señales a otros dispositivos o a un único punto, por ejemplo, para indicar instrucciones de servicio como "no hay papel" o "hay poco tóner". Una red pequeña como ésta, con ocho o menos dispositivos, se llama piconet. Se pueden interconectar varias piconets para formar una scatternet.
    p.mt-4(data-aos="fade-left") El aspecto más interesante de #[em Bluetooth] es la lista de aplicaciones que se benefician de esta tecnología de transmisión de corto alcance. Entre estas aplicaciones se encuentran:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.p-lg-4(style="background-color:#F6F6F6;border-radius:20px;box-shadow:0px 2px 8px rgba(0,0,0,.12);" data-aos="zoom-in")
          figure.text-center
            img(src="@/assets/curso/tema1/30.png" style="max-width:160px;display:inline;", alt='Imágen decorativa')
          p.mt-2.mb-0 Transmisión inalámbrica entre un reproductor de música portátil y unos auriculares.
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.p-lg-4(style="background-color:#F6F6F6;border-radius:20px;box-shadow:0px 2px 8px rgba(0,0,0,.12);" data-aos="zoom-in")
          figure.text-center
            img(src="@/assets/curso/tema1/31.png" style="max-width:160px;display:inline;", alt='Imágen decorativa')
          p.mt-2.mb-0 Transmisiones entre un asistente digital personal (PDA) y otro computador.
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.p-lg-4(style="background-color:#F6F6F6;border-radius:20px;box-shadow:0px 2px 8px rgba(0,0,0,.12);" data-aos="zoom-in")
          figure.text-center
            img(src="@/assets/curso/tema1/32.png" style="max-width:160px;display:inline;", alt='Imágen decorativa')
          p.mt-2.mb-0 Transmisiones entre dispositivos periféricos y un computador.
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.p-lg-4(style="background-color:#F6F6F6;border-radius:20px;box-shadow:0px 2px 8px rgba(0,0,0,.12);" data-aos="zoom-in")
          figure.text-center
            img(src="@/assets/curso/tema1/33.png" style="max-width:160px;display:inline;", alt='Imágen decorativa')
          p.mt-2.mb-0 Transmisiones inalámbricas entre un PDA y un automóvil, la casa o el lugar de trabajo.
    
    br
    p.mt-5.fw-bold.text-center(data-aos="zoom-in") Para apreciar el poder potencial de la tecnología #[em Bluetooth], considere los siguientes ejemplos más descriptivos: 

    .cont_1_5
      SlyderF.mt-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-contenido.p-4(style="background-color:#4ADBD1;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/35.png', alt='Imágen decorativa')
          p Puede sincronizar automáticamente todos los mensajes de correo electrónico entre su PDA y su computador de sobremesa/portátil.
        .tarjeta.color-acento-contenido.p-4(style="background-color:#5573C6;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/36.png', alt='Imágen decorativa')
          p.text-white Cuando se acerque a su carro, su PDA le dirá que desbloquee sus puertas y cambie la radio a su emisora favorita.
        .tarjeta.color-acento-contenido.p-4(style="background-color:#4ADBD1;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/37.png', alt='Imágen decorativa')
          p Al llegar a su casa, su PDA le dirá que desbloquee la puerta principal, encienda las luces y un sistema de entretenimiento.
        .tarjeta.color-acento-contenido.p-4(style="background-color:#5573C6;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/38.png', alt='Imágen decorativa')
          p.text-white Sentado en una reunión de negocios, su PDA/portátil transmitirá de forma inalámbrica su presentación de diapositivas a un proyector y sus notas a la PDA/portátil de cada participante.
    
    .row.mt-5
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.svg", alt='Imágen decorativa')
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 A pesar de contar con un gran apoyo, el impacto de #[em Bluetooth] en el mercado ha sido relativamente lento. La tecnología #[em Bluetooth] actual sigue teniendo problemas para conseguir que varios dispositivos (más de dos) sincronicen los datos entre sí. La corta distancia de transmisión de 10 metros (30 pies) también es vista por muchos como un detrimento. Aunque es posible (en condiciones especiales) transmitir señales #[em Bluetooth] hasta 100 metros (328 pies), esto requerirá baterías más potentes para los dispositivos transmisores y podría aumentar el problema de las interferencias. No obstante, #[em Bluetooth] es una tecnología que sin duda hay que vigilar y comprender.
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Redes de área local inalámbricas

    p(data-aos="fade-right") Observe en el siguiente esquema los principales estándares de red de área local inalámbrica desarrollados, conocidos actualmente como Wi-Fi: 

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/39.png", alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="1997") IEE 802.11 #[br] Primer estándar de red de área local inalámbrica, capaz de soportar velocidades de datos de hasta 2 Mbps, y permitir que estaciones de trabajo que se encuentran a cientos de metros de distancia se comuniquen con un punto de acceso (conexión con la parte cableada de la red de área local).
          p.text-small(numero="2" titulo="1999") IEEE 802.11b #[br] Protocolo de 11 Mbps, transmite datos en la gama de frecuencias de 2,4 GHz.
          p.text-small(numero="3" titulo="1999") IEEE 802.11a #[br] Transmite datos a velocidades de hasta 54 Mbps (54 Mbps teóricos, pero en realidad, la mitad) utilizando frecuencias en la gama de 5 GHz.
          p.text-small(numero="4" titulo="2003") IEEE 802.11g #[br] También transmite datos a velocidades de hasta 54 Mbps (en teoría), pero utiliza las mismas frecuencias (2,4 GHz) que 802.11b. #[br] Dado que 802.11b y 802.11g comparten el mismo rango de frecuencias, 802.11g resulta más atractivo que 802.11a para aquellos usuarios que ya tienen instalado 802.11b y quieren actualizar su sistema.
          p.text-small(numero="5" titulo="2009") IEEE 802.11n #[br] Capaz de soportar una señal de 100 Mbps entre dispositivos inalámbricos, utilizando múltiples antenas para soportar múltiples flujos de datos independientes. 
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Óptica del espacio libre, banda ultraancha, infrarrojos y ZigBee

    p(data-aos="fade-right") Otras cuatro tecnologías inalámbricas que merece la pena mencionar son la óptica del espacio libre, la banda ultraancha, los infrarrojos y las transmisiones ZigBee. A continuación, se presentan sus principales características:

    .tarjeta.tarjeta--azul.p-4.mt-4.pb-2.cont_slyder1(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.m-0.m-auto.bg-white.p-4(style="border-radius:25px;")
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/41.png', alt='Imágen decorativa')
          .col-md-6(style="place-self:center;")
            h5(style="color:#5573C6;") Óptica del espacio libre
            p Utiliza láseres para transmitir datos entre dos edificios a distancias cortas.  Las velocidades de transferencia de datos pueden llegar a 1,25 Gbps.  Sin embargo, el movimiento de los edificios, la absorción por parte de las moléculas de agua suspendidas en el aire y las obstrucciones temporales, como los pájaros que bloquean el haz, pueden reducir la velocidad de transmisión efectiva.  No obstante, es una solución interesante para aplicaciones de alta velocidad con cables no conductores.
        .row.m-0.m-auto.bg-white.p-4(style="border-radius:25px;")
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/42.png', alt='Imágen decorativa')
          .col-md-6(style="place-self:center;")
            h5(style="color:#5573C6;") Banda ultraancha
            p Transmiten datos en una amplia gama de frecuencias en lugar de limitar las transmisiones a una banda estrecha y fija de frecuencias. Lo interesante de transmitir en una amplia gama de frecuencias es que algunas de ellas son utilizadas por otras fuentes, como los sistemas de telefonía móvil.  A pesar de posibles problemas de interferencias con señales de otras fuentes, esta tecnología soporta velocidades de hasta 100 Mbps, aunque en distancias pequeñas como las de redes de área local inalámbricas.
        .row.m-0.m-auto.bg-white.p-4(style="border-radius:25px;")
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/43.png', alt='Imágen decorativa')
          .col-md-6(style="place-self:center;")
            h5(style="color:#5573C6;") Infrarrojos
            p Transmisión por radio que utiliza un rayo de luz enfocado en la gama de frecuencias infrarrojas (1012-1014 MHz). Funciona de forma muy parecida a los mandos a distancia de los televisores, se envía desde el transmisor hasta el receptor a través de una transmisión con visibilidad directa. Transmisor y el receptor deben estar a poca distancia, y las velocidades de transferencia de datos no suelen ser superiores a 4 Mbps. 
        .row.m-0.m-auto.bg-white.p-4(style="border-radius:25px;")
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/44.png', alt='Imágen decorativa')
          .col-md-6(style="place-self:center;")
            h5(style="color:#5573C6;") ZigBee
            p Tecnología inalámbrica relativamente nueva respaldada por el estándar IEEE 802.15.4, diseñada para la transmisión de datos entre dispositivos más pequeños, a menudo integrados, que requieren bajas velocidades de transferencia (20-250 Kbps).  Funciona en la banda de radio ISM y requiere muy poco soporte de #[em software] y poca energía. Los dispositivos con ZigBee no necesitan comunicarse constantemente con otros dispositivos, cuando no transmite una señal a un receptor, el dispositivo puede ponerse en reposo.  
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Medios de comunicación dirigidos: ejemplos

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        .p-4.mt-4.cajon.color-primario(style="background-color:#F2F6FE;" data-aos="zoom-in")
          p.mb-0 Consideremos el cableado de una red de área local. La Figura 11 muestra una situación común en la que una estación de trabajo de microcomputador conectada a una red de área local debe conectarse primero a un dispositivo como un conmutador, dispositivo que conecta múltiples estaciones de trabajo y pasa la señal de transmisión de cualquier estación de trabajo a otras estaciones de trabajo. En las instalaciones típicas, es bastante improbable que el cable que sale de la estación de trabajo vaya directamente al conmutador. En su lugar, el cable que sale de la parte trasera del microcomputador se conecta primero a un conector de pared en la habitación donde se encuentra el microcomputador. Esta toma de pared es un dispositivo pasivo, un simple punto de conexión entre dos tramos de cable que no regenera la señal en el cable.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-lg-12.col-md-6
          img(src="@/assets/curso/tema1/45.png", alt='Imágen decorativa')
    
    .cont_1_3.p-4.p-lg-5.mt-5
      .col-xl-6.col-lg-8.m-auto
        .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
          h5 Figura 11.
          span Cableado con una estación de trabajo y una red de área local
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/46.svg", alt='Imágen decorativa')
        figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
    
    p.mt-5.fw-bold.text-center(data-aos="zoom-in") Al seleccionar el medio apropiado para la conexión, dos aspectos cruciales deben considerarse:

    TabsB.color-primario.mt-4(data-aos="zoom-in")
      .py-4.py-md-5(titulo="La distancia del cable" :icono="require('@/assets/curso/tema1/47.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-5(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/48.png', alt='Imágen decorativa')
          .col-md-6.col-lg-7(style="place-self:center;")
            p Considerar la distancia total desde la parte trasera del microcomputador hasta el conmutador, que en caso de ser inferior a 100 metros (328 pies), pensar en el uso de un par trenzado para conectar el microcomputador al conmutador. Si el cable no pasa por un entorno ruidoso, pudiera usarse par #[strong trenzado] no apantallado, el cable menos costoso y más fácil con el que se puede trabajar. 
      .py-4.py-md-5(titulo="La velocidad de datos" :icono="require('@/assets/curso/tema1/49.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-5(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/50.png', alt='Imágen decorativa')
          .col-md-6.col-lg-7(style="place-self:center;")
            p Si la velocidad de datos de la conexión no supera los 1000 Mbps, debería ser posible soportar la conexión utilizando cuatro pares de Categoría 5e o Categoría 6.  Para velocidades superiores a 1000 Mbps, se puede considerar alternativas al par trenzado. El cable de fibra óptica es una buena opción para velocidades de transmisión de datos superiores a 1000 Mbps, pero será más caro que una conexión de par trenzado. Además, como el cable de fibra óptica es un cable unidireccional y el flujo de datos entre una estación de trabajo y un conmutador es bidireccional, serían necesarios dos cables de fibra óptica.
    
    .cont_1_6.mt-5.pt-4.pb-4
      p.fw-bold.text-center(data-aos="zoom-in") Consideremos los siguientes ejemplos:
      .row.mt-4
        .col-auto(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/52.svg", alt='Imágen decorativa')
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 Si la velocidad de datos entre la estación de trabajo del microcomputador y el conmutador es de 100 Mbps o menos, el par trenzado no apantallado de categoría 5e o 6 sería una opción aceptable (la categoría 7 sería un gasto innecesario en este momento). El cable de fibra óptica también sería una opción razonable, ya que se podría adaptar a mayores velocidades de transmisión en el futuro. 
      .col-xl-8.col-lg-10.mt-4.m-auto
        ul.lista-ul--separador(data-aos="flip-up")
          li.d-flex
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            div ¿Qué pasa con el cableado de la conexión entre el conmutador y el siguiente punto de la red de área local (normalmente otro conmutador)? Si la distancia entre los dos conmutadores supera los 100 metros de longitud o si el cable atraviesa un entorno ruidoso, como una sala de máquinas de calefacción y refrigeración, debería considerarse la posibilidad de utilizar un cable que no sea de par trenzado. En estas circunstancias, debería considerar un buen cable coaxial o, incluso mejor, un cable de fibra óptica para conectar los dos conmutadores. 
          li.d-flex
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            div ¿Por qué debería considerar el cable de fibra óptica más caro? La diferencia de precio entre el cable coaxial y el de fibra óptica es mucho menor que las diferencias de rendimiento. Por lo tanto, tiene sentido seleccionar el mejor cableado e instalar cable de fibra óptica.
      .row.mt-5
        .col-auto(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/53.svg", alt='Imágen decorativa')
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 Una empresa tiene dos edificios separados por aproximadamente 1 milla, y desea transmitir datos entre los dos edificios de forma rutinaria a velocidades de hasta 100 Mbps. 
      .col-xl-8.col-lg-10.mt-4.m-auto
        ul.lista-ul--separador(data-aos="flip-up")
          li.d-flex
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            div ¿Qué tipo de medio de interconexión sería recomendable? Antes de considerar cualquier forma de medio conducido, tenemos que hacer la pregunta: ¿La propiedad entre los dos edificios es de la empresa? Supongamos que no lo es (el caso más probable). La empresa podría considerar la posibilidad de utilizar una forma de transmisión inalámbrica, como las microondas terrestres o la óptica en el espacio libre (suponiendo que no haya estructuras intermedias), o ponerse en contacto con una compañía telefónica y preguntar si existe un servicio de transmisión de datos de 100 Mbps que interconecte los dos edificios.  Si la propiedad entre los dos edificios es de la empresa, la elección de un medio conducido sigue siendo difícil.
          li.d-flex
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            div ¿Qué medio de conducción es capaz de soportar 100 Mbps durante 1 milla? El cable de fibra óptica cumplirá esos requisitos, pero ¿cómo va a instalar la empresa el cable: subterráneo en algún tipo de tubería o túnel, ¿o aéreo en algún tipo de poste telefónico? Ambas soluciones serían bastante caras, a no ser que ya exista una infraestructura que soporte los nuevos cables de fibra óptica. Instalar el cable dentro de un edificio es más fácil que intentar instalarlo entre edificios, pero ninguna de las dos tareas es sencilla. Dado que la instalación de un medio es costosa y a largo plazo, es esencial una cuidadosa planificación y toma de decisiones antes de iniciar el proyecto.
    
    p.mt-5.text-center.fw-bold(data-aos="zoom-in") Revisemos ahora cada uno de los criterios de selección de medios aplicados a esta solución de dos edificios:

    .mt-5(style="position:relative;")
      figure.d-none.d-md-block
        img(src="@/assets/curso/tema1/54.svg" style="max-width:170px;max-height:170px;display:inline;position:absolute;right:-105px;top:15%;", alt='Imágen decorativa')
      figure.d-none.d-md-block
        img(src="@/assets/curso/tema1/55.svg" style="max-width:170px;max-height:170px;display:inline;position:absolute;left:-105px;top:50%;", alt='Imágen decorativa')
      .col-xl-10.m-auto
        .row.m-0(data-aos="zoom-in")
          .col-auto.pe-0
            .h-100.p-3.d-flex.align-content-center.align-items-center.text-center.flex-wrap(style="background-color:#5573C6;box-shadow:0px 2px 7px rgba(0,0,0,.2)")
              span.text-white.fw-bold(style="font-size:37px;") 01
          .col.ps-0
            .h-100.p-3.d-flex.align-content-center.flex-wrap(style="background-color:#F8F8F8;box-shadow:0px 2px 7px rgba(0,0,0,.15);border-radius:0px 10px 10px 0px;")
              p.mb-0 #[strong Coste:] la fibra óptica es la opción de medio conducido más cara, pero merece la pena, dados los requisitos del problema. Alguna forma de conexión inalámbrica podría ser una buena alternativa, junto con el contacto con la compañía telefónica local para sus soluciones sugeridas.
        .row.m-0.mt-4(data-aos="zoom-in")
          .col-auto.pe-0
            .h-100.p-3.d-flex.align-content-center.align-items-center.text-center.flex-wrap(style="background-color:#4ADBD1;box-shadow:0px 2px 7px rgba(0,0,0,.2)")
              span.fw-bold(style="font-size:37px;") 02
          .col.ps-0
            .h-100.p-3.d-flex.align-content-center.flex-wrap(style="background-color:#F8F8F8;box-shadow:0px 2px 7px rgba(0,0,0,.15);border-radius:0px 10px 10px 0px;")
              p.mb-0 #[strong Velocidad:] la fibra óptica, el par trenzado y el cable coaxial cumplirán los requisitos de velocidad necesarios, pero también lo harán las microondas y la óptica en el espacio libre.
        .row.m-0.mt-4(data-aos="zoom-in")
          .col-auto.pe-0
            .h-100.p-3.d-flex.align-content-center.align-items-center.text-center.flex-wrap(style="background-color:#5573C6;box-shadow:0px 2px 7px rgba(0,0,0,.2)")
              span.text-white.fw-bold(style="font-size:37px;") 03
          .col.ps-0
            .h-100.p-3.d-flex.align-content-center.flex-wrap(style="background-color:#F8F8F8;box-shadow:0px 2px 7px rgba(0,0,0,.15);border-radius:0px 10px 10px 0px;")
              p.mb-0 #[strong Ampliación y distancia:] la distancia de una milla elimina la consideración del par trenzado y el cable coaxial. El derecho de paso es sin duda un problema en este caso. Si no tiene derecho de paso, no puede instalar su propio cable.
        .row.m-0.mt-4(data-aos="zoom-in")
          .col-auto.pe-0
            .h-100.p-3.d-flex.align-content-center.align-items-center.text-center.flex-wrap(style="background-color:#4ADBD1;box-shadow:0px 2px 7px rgba(0,0,0,.2)")
              span.fw-bold(style="font-size:37px;") 04
          .col.ps-0
            .h-100.p-3.d-flex.align-content-center.flex-wrap(style="background-color:#F8F8F8;box-shadow:0px 2px 7px rgba(0,0,0,.15);border-radius:0px 10px 10px 0px;")
              p.mb-0 #[strong Entorno:] el cable de fibra óptica no debería verse afectado por el entorno. Si se aplica una solución inalámbrica, la línea de visión y el clima podrían ser dos impedimentos serios.
        .row.m-0.mt-4(data-aos="zoom-in")
          .col-auto.pe-0
            .h-100.p-3.d-flex.align-content-center.align-items-center.text-center.flex-wrap(style="background-color:#5573C6;box-shadow:0px 2px 7px rgba(0,0,0,.2)")
              span.text-white.fw-bold(style="font-size:37px;") 05
          .col.ps-0
            .h-100.p-3.d-flex.align-content-center.flex-wrap(style="background-color:#F8F8F8;box-shadow:0px 2px 7px rgba(0,0,0,.15);border-radius:0px 10px 10px 0px;")
              p.mb-0 #[strong Seguridad:] un sistema de fibra óptica debe estar protegido contra las escuchas telefónicas.
    
    .col-xl-10.m-auto.mt-4
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/56.svg", alt='Imágen decorativa')
        .col(style="place-self:center;" data-aos="fade-left")
          .p-3.text-white.cont_arrow1(style="background-color:#12263F;")
            p.mb-0 En conclusión, a menudo no es posible tender un cable entre dos edificios por cuestiones de derecho de paso o por restricciones de distancia máxima. Cuando los medios conducidos no son viables, deben considerarse varias opciones inalámbricas. Incluso si los medios conducidos son viables, una solución inalámbrica puede resultar más económica a largo plazo.
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Medios inalámbricos en acción: ejemplos

    .cont_1_4.mt-5(style="position:relative;")
      figure.d-none.d-md-block
        img(src="@/assets/curso/tema1/23.svg" style="max-width:170px;max-height:170px;display:inline;position:absolute;right:-105px;top:35%;", alt='Imágen decorativa')
      .bloque-texto-g.color-secundario.bloque_1_1.p-4(data-aos="flip-up" style="background-color:transparent;")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/57.png')})`}"
        )
        .bloque-texto-g__texto.p-4(style="background-color:#F8F8F8;border-radius:30px 0px 30px;")
          p.mb-0 Una con un par de computadores, cada uno en una habitación diferente. Cada computador tiene una impresora de chorro de tinta bastante barata y sólo uno de ellos tiene acceso a Internet. Se desea conectar ambos computadores a la red y comprar una buena impresora láser para que la compartan ambos equipos. Para ello, se tendrán que interconectar los computadores, pero tirar cables por las paredes y el suelo no parece una opción atractiva. ¿Y qué hay de la conexión inalámbrica? Se puede comprar tarjetas de interfaz de red inalámbrica que utilicen uno de los protocolos IEEE 802.11 y crear una red de área local sin cables. 
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Red de área local sin cables

    .cont_1_4.mt-5(style="position:relative;")
      figure.d-none.d-md-block
        img(src="@/assets/curso/tema1/23.svg" style="max-width:170px;max-height:170px;display:inline;position:absolute;left:-105px;top:15%;transform:rotate(180deg);", alt='Imágen decorativa')
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.bloque_1_1.p-4(data-aos="flip-up" style="background-color:transparent;")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/58.png')})`}"
        )
        .bloque-texto-g__texto.p-4(style="background-color:#F8F8F8;border-radius:0px 30px 0px 30px;")
          p.mb-0 También puede considerarse la posibilidad de sustituir dispositivos actuales, como impresoras y escáneres, por otros habilitados para Wi-Fi. 
          |
          br
          br
          | Al utilizar Wi-Fi, se reduce la dependencia de los cables desde las estaciones de trabajo hasta los periféricos y, por tanto, aumenta la flexibilidad a la hora de ubicar los equipos.
    
    .row.mt-5
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.svg", alt='Imágen decorativa')
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 En otro ejemplo, tenemos a DataMining Corporation, una gran organización con oficina principal en Chicago y una segunda oficina en Los Ángeles. DataMining recoge datos de las tiendas de alimentación de cada compra realizada por cada cliente. A partir de estos datos, la empresa extrae las tendencias de gasto y vende esta información a otras empresas que comercializan bienes de consumo. Los datos se recogen en la oficina de Chicago y se transmiten a la de Los Ángeles, donde se almacenan y se recuperan posteriormente. Por lo tanto, es necesario transmitir grandes cantidades de datos entre las dos sedes de forma continua.
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/59.svg", alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        p Actualmente, DataMining alquila un servicio telefónico entre Chicago y Los Ángeles, pero las facturas telefónicas son elevadas. La empresa está intentando reducir los costes y está considerando alternativas a los servicios telefónicos alquilados. DataMining ha descubierto que varias empresas pueden proporcionar varios niveles de servicios de comunicación por satélite. Por ejemplo, Hughes Network Systems puede ofrecer servicios de interconexión de redes de área local, transferencias de imágenes multimedia, conexiones de voz interactivas, transferencias de datos interactivas y por lotes, y servicios de transmisión de vídeo y datos. Dado que DataMining está interesado principalmente en las transmisiones de datos bidireccionales, está considerando un servicio de comunicaciones de datos bidireccional ofrecido por Hughes a través de un sistema de satélite VSAT. Como se muestra en la siguiente figura 12, este servicio de datos bidireccional requeriría la instalación de una antena parabólica de estación terrestre individual en cada una de las sedes corporativas de DataMining.

    .cont_1_3.p-4.p-lg-5.mt-4
      .col-xl-6.col-lg-8.m-auto
        .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
          h5 Figura 12.
          span Solución satelital VSAT para DataMining
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/60.svg", alt='Imágen decorativa')
        figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
    
    p.mt-5(data-aos="fade-right") Cada estación terrestre se compone de dos piezas: una unidad interior y una unidad exterior. La unidad exterior consiste en la antena parabólica y suele montarse en el tejado del edificio. El tamaño de la antena parabólica depende de la velocidad de transmisión de datos que se utilice y de la cobertura del satélite que se necesite. La unidad exterior está conectada a la unidad interior a través de un único cable de interconexión. La unidad interior dispone de uno o varios puertos a los que se pueden conectar los equipos informáticos de la empresa.
    .p-4.mt-4.cajon.color-acento-botones(style="background-color:#FFFAD8;" data-aos="zoom-in")
      p.mb-0 El mantenimiento y la asistencia de este servicio VSAT son proporcionados por la compañía de satélites las 24 horas del día, los 7 días de la semana, e incluyen la configuración de los equipos, los informes sobre el estado del sistema, la asignación del ancho de banda, la descarga de cualquier #[em software] necesario y el envío de personal de campo si es necesario.
    p.mt-4.fw-bold(data-aos="fade-left") DataMining Corporation ha decidido instalar el sistema de satélite VSAT. Para resumir, consideremos cada uno de los criterios de selección de medios aplicados a la solución VSAT:
    
    .mt-5(style="position:relative;")
      figure.d-none.d-md-block
        img(src="@/assets/curso/tema1/54.svg" style="max-width:170px;max-height:170px;display:inline;position:absolute;left:-105px;top:10%;transform:rotate(180deg);", alt='Imágen decorativa')
      figure.d-none.d-md-block
        img(src="@/assets/curso/tema1/55.svg" style="max-width:170px;max-height:170px;display:inline;position:absolute;right:-105px;top:60%;transform:rotate(180deg);", alt='Imágen decorativa')
      .col-xl-10.m-auto
        figure(data-aos="zoom-in-up")
          img.d-none.d-lg-block(src="@/assets/curso/tema1/61.svg", alt='Imágen decorativa')
          img.d-lg-none.d-block(src="@/assets/curso/tema1/62.svg", alt='Imágen decorativa')
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/63.png", alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        p Una segunda compañía, la American Insurance Company, tiene dos oficinas, ambas situadas en Peoria, Illinois. La primera recoge todos los pagos de las primas y la segunda, contiene el equipo principal de procesamiento de datos. American Insurance necesita transferir la información de las primas recogidas al centro de procesamiento de datos cada noche. Las dos oficinas están a unos tres kilómetros de distancia, pero no es posible pasar el cable propio de la empresa por una propiedad pública y otra privada. Algún tipo de sistema telefónico podría ser una solución razonable, pero American Insurance está interesada en invertir en su propio sistema y quiere evitar los gastos telefónicos mensuales recurrentes, ya que éstos superarían en algún momento el coste de la instalación de su propio sistema.
        .p-4.mt-4.cajon.color-primario(style="background-color:#F2F6FE;" data-aos="zoom-in")
          p.mb-0 ProNet es una empresa que ofrece sistemas privados de microondas terrestres que pueden transferir voz privada, datos de red de área local, videoconferencias e imágenes de alta resolución entre sitios remotos con una distancia de hasta 30 kilómetros. La Figura 13 muestra una configuración típica de comunicación por microondas, tal y como se dispondría entre las dos oficinas contiguas de American Insurance.
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 13.
        span Comunicación por microondas entre los edificios corporativos de American Insurance
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/64.svg", alt='Imágen decorativa')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de #[em Data Communication and Computer Networks: A Business User's Approach], por J. West, 2022, Cengage Learning
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
    p.mt-5.fw-bold.text-center(data-aos="zoom-in") Consideremos cada uno de los criterios de selección de medios aplicados a la solución de microondas terrestre ProNet:

    .col-xl-12.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/65.svg", alt='Imágen decorativa')
        .col.ps-md-5
          .row.m-0.p-4.ps-0(style="background-color:#F2F9FF;border-radius:25px 25px 0px 0px;" data-aos="zoom-in-up")
            .col-auto.ps-0(style="place-self:center;")
               div(style="max-width:fit-content;border-radius:100px;padding:1rem 1.1rem;background-color:#5573C6;margin-left:-30px;")
                i.fas.fa-check.text-white(style="font-size:25px;")
            .col(style="place-self:center;")
              p.mb-0 #[strong Coste:] el sistema ProNet es caro al principio, cuando se adquiere el equipo, pero después American sólo tiene que pagar el mantenimiento.
          .row.m-0.p-4.ps-0(style="background-color:#E6F3FF;" data-aos="zoom-in-up")
            .col-auto.ps-0(style="place-self:center;")
               div(style="max-width:fit-content;border-radius:100px;padding:1rem 1.1rem;background-color:#4ADBD1;margin-left:-30px;")
                i.fas.fa-check(style="font-size:25px;")
            .col(style="place-self:center;")
              p.mb-0 #[strong Velocidad:] el sistema ProNet puede soportar las tasas de transferencia de datos requeridas por American Insurance.
          .row.m-0.p-4.ps-0(style="background-color:#F2F9FF;" data-aos="zoom-in-up")
            .col-auto.ps-0(style="place-self:center;")
               div(style="max-width:fit-content;border-radius:100px;padding:1rem 1.1rem;background-color:#5573C6;margin-left:-30px;")
                i.fas.fa-check.text-white(style="font-size:25px;")
            .col(style="place-self:center;")
              p.mb-0 #[strong Ampliación y distancia:] el sistema de microondas terrestre puede transmitir hasta 15 millas. Los dos edificios de la empresa están a tres kilómetros de distancia. El derecho de paso no es un problema en este caso.
          .row.m-0.p-4.ps-0(style="background-color:#E6F3FF;" data-aos="zoom-in-up")
            .col-auto.ps-0(style="place-self:center;")
               div(style="max-width:fit-content;border-radius:100px;padding:1rem 1.1rem;background-color:#4ADBD1;margin-left:-30px;")
                i.fas.fa-check(style="font-size:25px;")
            .col(style="place-self:center;")
              p.mb-0 #[strong Entorno:] los sistemas de microondas pueden verse afectados por fuerzas electromagnéticas intensas y por las inclemencias del tiempo. Sin embargo, ProNet afirma que su sistema no se ve afectado por la niebla o la nieve, y que ofrece una fiabilidad y disponibilidad del servicio del 99,97%
          .row.m-0.p-4.ps-0(style="background-color:#F2F9FF;border-radius:0px 0px 25px 25px;" data-aos="zoom-in-up")
            .col-auto.ps-0(style="place-self:center;")
               div(style="max-width:fit-content;border-radius:100px;padding:1rem 1.1rem;background-color:#5573C6;margin-left:-30px;")
                i.fas.fa-check.text-white(style="font-size:25px;")
            .col(style="place-self:center;")
              p.mb-0 #[strong Seguridad:] los sistemas de microondas terrestres pueden ser interceptados, pero el flujo de datos puede ser encriptado.
        .col-auto.d-none.d-lg-block(style="place-self:center;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/66.svg", alt='Imágen decorativa')
    
    .col-xl-10.m-auto.mt-5
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/67.svg", alt='Imágen decorativa')
        .col(style="place-self:center;" data-aos="fade-left")
          .p-4.p-lg-5.text-white.cont_arrow1(style="background-color:#12263F;")
            p.mb-0 American Insurance considerará seriamente la posibilidad de utilizar el sistema de microondas terrestre de ProNet, ya que se compara favorablemente con otros sistemas y satisface los objetivos de la empresa de propiedad privada, altas tasas de transferencia y bajos costes recurrentes.

          



      
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
.cont_1_5, .cont_1_5 *
  position: relative
.cont_1_5:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/34.svg)
  background-size: cover
  background-position: center
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #E8FFFD
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #4ADBD1
  color: initial
.cont_slyder1
  background: url(../assets/curso/tema1/40.png)
  background-size: cover
  background-position: center
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #DEE4F0
  opacity: 1
.slyder-a__bullets__item--active
  background-color: #373F51 !important
  border-color: #373F51 !important
.slyder-a__bullets__item
  background-color: #E3E9EF
.cont_1_6, .cont_1_6 *
  position: relative
.cont_1_6:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/51.png)
  background-size: cover
  background-position: top
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #b0c0d2
</style>
