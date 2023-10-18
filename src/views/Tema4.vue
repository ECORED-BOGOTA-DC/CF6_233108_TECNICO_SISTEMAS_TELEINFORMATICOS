<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión de la red de datos
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema4/1.png", alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p SNMP es un protocolo de gestión que permite que un programa de gestión se comunique, configure o controle dispositivos remotos que tienen agentes SNMP incorporados. La idea básica de SNMP es tener un programa o agente que se ejecuta en el sistema remoto con el que se puede comunicar a través de la red. Este agente puede entonces monitorizar los sistemas y recoger información. El #[em software] de una estación de gestión envía mensajes al agente remoto solicitando información o indicándole que realice alguna tarea específica. Aunque la comunicación suele ser iniciada por la estación de gestión, en determinadas condiciones el agente puede enviar un mensaje no solicitado o una trampa a la estación de gestión.
    
    .row.mt-5
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.svg", alt='Imágen decorativa')
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 SNMP proporciona un marco para la gestión de redes. Aunque SNMP no es el único protocolo de gestión ni, posiblemente, el mejor, es casi universal. Ocupa poco espacio, se puede implementar con bastante rapidez, es extensible, está bien documentado y es un estándar abierto. Reside en el nivel de aplicación del conjunto de protocolos TCP/IP. Por otro lado, SNMP, especialmente la versión 1, no es un protocolo seguro; no es adecuado para aplicaciones en tiempo real y puede devolver una cantidad abrumadora de información.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p SNMP es un protocolo en evolución con una confusa colección de abreviaturas que designan las distintas versiones. Aquí sólo se mencionan las versiones principales. Entender las principales distinciones entre las versiones puede ser importante, porque hay algunas cosas que no se pueden hacer con las versiones anteriores y debido a las diferencias en la seguridad proporcionada por las diferentes versiones. Sin embargo, la versión original, SNMPv1. En general, las versiones posteriores son compatibles con las anteriores, por lo que las diferencias entre versiones no deberían causar demasiados problemas operativos.
        .p-4.mt-4.cajon.color-acento-botones(style="background-color:#FFFAD8;" data-aos="zoom-in")
          p.mb-0 La segunda versión tiene varias variantes que compiten entre sí. SNMPv2 Classic ha sido sustituido por SNMPv2 basado en la comunidad o SNMPv2c. Dos superconjuntos más seguros de SNMPv2c son SNMPv2u y SNMPv2*. SNMPv2c es la más común de las segundas versiones y es a la que se suele hacer referencia cuando se habla de SNMPv2. SNMPv2 no se ha adoptado de forma generalizada, pero su uso está creciendo. SNMP-NG o SNMPv3 intenta resolver las diferencias entre SNMPv2u y SNMPv2*. Es demasiado pronto para predecir el éxito de SNMPv3, pero también parece estar creciendo en popularidad.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema4/2.png", alt='Imágen decorativa')
    
    p.mt-5(data-aos="fade-right") Aunque suele haber razones legítimas para la elección de los términos, la nomenclatura utilizada para describir SNMP puede resultar confusa. Por ejemplo, los parámetros que se monitorizan se denominan con frecuencia objetos, aunque variables podría haber sido una mejor opción y se utiliza a veces. Básicamente, los objetos pueden ser considerados como estructuras de datos.
    p.mt-4(data-aos="fade-left") A veces, la nomenclatura especializada no parece merecer la pena. Por ejemplo, SNMP utiliza cadenas de comunidad para controlar el acceso. Para acceder a un dispositivo, hay que dar la cadena de comunidad, lo que suena muy parecido a una contraseña.  La principal diferencia es la forma en que se utilizan las cadenas de comunidad. Las mismas cadenas de comunidad suelen ser compartidas por un grupo o comunidad de dispositivos, algo que está mal visto con las contraseñas. Su propósito es más bien agrupar lógicamente los dispositivos que proporcionar seguridad.
    p.mt-4(data-aos="fade-right") Un gestor SNMP, #[em software] en una plataforma de gestión central, se comunica con un agente SNMP, #[em software] ubicado en el dispositivo gestionado, a través de mensajes SNMP. Con SNMPv1 hay cinco tipos de mensajes. GET_REQUEST, GET_NEXT_REQUEST y SET_REQUEST son enviados por el gestor al agente para solicitar una acción. En los dos primeros casos, se pide al agente que proporcione información, como el valor de un objeto. El mensaje SET_REQUEST pide al agente que cambie el valor de un objeto.

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema4/3.png", alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Los mensajes restantes, GET_RESPONSE y TRAP, se originan en el agente. El agente responde a los tres primeros mensajes con el mensaje GET_RESPONSE. En cada caso, el intercambio es iniciado por el gestor. Con el mensaje TRAP, la acción es iniciada por el agente. Al igual que una interrupción de #[em hardware] en un computador, el mensaje TRAP es la forma que tiene el agente de llamar la atención del gestor. Las trampas juegan un papel esencial en la gestión de la red, ya que alertan de los problemas que necesitan atención. Saber que un dispositivo está caído es, por supuesto, el primer paso para corregir el problema. Y siempre es útil poder decirle a un usuario descontento que se es consciente del problema y se está trabajando en él. Las trampas son lo más parecido a un procesamiento en tiempo real de SNMP. Desafortunadamente, para muchos problemas de red (como un sistema colapsado) los traps pueden no ser enviados. Incluso cuando se envían traps, podrían ser descartados por un #[em router] ocupado. UDP es el protocolo de transporte, por lo que no hay detección de errores por paquetes perdidos. La siguiente figura 19 resume la dirección que toman los mensajes cuando viajan entre el gestor y el agente.
    
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 19.
        span Mensaje SMNP
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema4/4.svg", alt='Imágen decorativa')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de Network Troubleshooting Tools: Help for Network Administrators, por J. D. Sloan, 2001, O'Reilly Media, Inc.
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up" style="background-color:#5573C6;")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para que una estación de gestión envíe un paquete, debe conocer la dirección IP del agente, la cadena de comunidad adecuada o la contraseña utilizada por el agente, y el nombre del identificador de la variable u objeto referenciado. Lamentablemente, SNMPv1 es muy relajado en cuanto a las cadenas de comunidad. Éstas se envían en texto claro y pueden ser fácilmente capturadas por un rastreador de paquetes. Uno de los factores que motivaron la creación de SNMPv2 fue proporcionar una mayor seguridad. Sin embargo, hay que tener en cuenta que SNMPv2c utiliza cadenas de comunidad en texto plano.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        .cajon.p-4.color-acento-contenido(style="background-color:#E8FFFD;" data-aos="flip-up")
          p.mb-0 Otra ventaja de SNMPv2 es que se han añadido dos mensajes adicionales. GET_BULK_REQUEST solicitará varios datos con una sola consulta, mientras que GET_REQUEST genera una solicitud independiente para cada dato. Esto puede mejorar considerablemente el rendimiento. El otro mensaje nuevo, INFORM_REQUEST, permite a un gestor enviar información no solicitada a otro.
        p.mt-4 En conjunto, los objetos son variables definidas en la Base de Información de Gestión (MIB). Desgraciadamente, MIB es un término demasiado usado que significa cosas ligeramente diferentes en distintos contextos. Existen algunas reglas formales para tratar con las MIB: los formatos de las MIB se definen en la Estructura de la Información de Gestión (SMI), las reglas de sintaxis para las entradas de las MIB se describen en la Notación de Sintaxis Abstracta Uno (ASN.1), y la forma de codificar la sintaxis viene dada por las Reglas Básicas de Codificación (BER). A menos que esté planeando profundizar en la implementación de SNMP o decodificar vertederos hexadecimales, puede posponer el aprendizaje de SMI, ASN.1 y BER. Y debido a la complejidad de estas reglas, se recomienda no mirar los volcados hexadecimales.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema4/6.png", alt='Imágen decorativa')
    
    .row.mt-4
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.svg", alt='Imágen decorativa')
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Los objetos reales que se manipulan se identifican mediante un identificador de objeto (OID) único y autorizado. Cada OID es, en realidad, una secuencia de números enteros separados por puntos decimales, lo que a veces se denomina notación de puntos. Por ejemplo, el OID de la descripción de un sistema es 1.3.6.1.2.1.1. Este OID surge de la organización estandarizada de todos estos objetos, parte de la cual se muestra en la Figura 20. Los objetos reales son las hojas del árbol. Para eliminar cualquier posibilidad de ambigüedad entre los objetos, éstos se nombran dando su ruta completa desde la raíz del árbol hasta la hoja.
  
    .col-xl-6.col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-down")
        h5 Figura 20.
        span Estructura de un OID
    .col-xl-10.m-auto.mt-5
      .row
        .col-2.d-none.d-lg-block
          figure(data-aos="fade-right")
            img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;", alt='Imágen decorativa')
        .col
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema4/7.svg", alt='Imágen decorativa')
          figcaption.text-small.fw-normal.mt-4.text-center(style="color:#727997;background-color:transparent;") Nota. Tomada de Network Troubleshooting Tools: Help for Network Administrators, por J. D. Sloan, 2001, O'Reilly Media, Inc.
        .col-auto.d-none.d-lg-block(style="place-self:end;")
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.svg", alt='Imágen decorativa')
    
    p.mt-5(data-aos="fade-right") Como se puede ver en la figura, los nodos reciben tanto nombres como números. Así, el OID también puede darse especificando los nombres de cada nodo o descriptor de objeto. Por ejemplo, iso.org.dod.internet.mgmt.mib-2.system.sysDescr es el descriptor de objeto que corresponde al identificador de objeto 1.3.6.1.2.1.1. Los nombres numéricos más concisos se utilizan dentro de los agentes y dentro de los mensajes. Los nombres no numéricos se utilizan en la estación de gestión para comodidad de los usuarios. Los objetos se codifican directamente en los agentes y se manipulan mediante descriptores de objetos. Aunque las estaciones de gestión pueden manejar mecánicamente los descriptores de objetos, deben recibir explícitamente los mapeos entre los descriptores de objetos y los identificadores de objetos si se quiere llamar a los objetos por su nombre. Esta es una de las funciones de los archivos MIB que se envían con los dispositivos y se cargan en la estación de gestión. Estos archivos también indican a la estación de gestión qué identificadores son válidos.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_4_1 4.1 Gestión de inventarios de los elementos de la red
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up" style="background-color:#5573C6;")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para hacer frente a los rápidos avances tecnológicos, las empresas suelen realizar cambios en su infraestructura de red, lo que puede crear muchos problemas. El seguimiento y la recopilación de datos de forma manual es un proceso que requiere mucho tiempo y que a menudo lleva a pasar por alto dispositivos, a introducir datos de forma incorrecta y a cometer errores de compilación. Por ello, toda empresa necesita una herramienta de gestión de inventario de red para organizar y gestionar las configuraciones de red. Cuando se trata de gestionar los dispositivos de red y organizar los activos de red para hacer un seguimiento de las configuraciones, un #[em software] de gestión de inventario de red es vital.
    
    p.mt-5.text-center.fw-bold(data-aos="fade-right") Echemos un vistazo a los diferentes componentes que conforman el sistema de gestión de inventario de red integral:

    AcordionA.mt-4.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-xl-11.m-auto(titulo="Gestión de dispositivos con la herramienta de gestión del inventario de la red")
        p El primer paso para gestionar los dispositivos es descubrirlos. Una vez descubiertos los dispositivos en la herramienta de inventario de red, aparecen en el inventario junto con datos como los números de serie, los detalles del puerto, las direcciones IP, los proveedores, etc. El #[em software] de inventario de red también actualiza la información de los dispositivos cada vez que cambian, lo que facilita la gestión y organización de los mismos. Además, se ofrece una solución de inventario de red en la que se proporcionan más de diez filtros basados en el proveedor, la serie, etc. para identificar rápidamente un dispositivo en un inventario de red. Por ejemplo, si se quiere buscar un conmutador Cisco en el inventario de red, se pueden utilizar los filtros "Proveedor" y "Tipo", y sólo aparecerán en el inventario los conmutadores que pertenezcan al proveedor "Cisco".
        p.mt-3 Un sistema de inventario de red también proporciona más de diez filtros basados en el proveedor, la serie, etc., para identificar rápidamente un dispositivo entre más de mil dispositivos de red. Por ejemplo, si quiere buscar un switch Cisco, puede utilizar los filtros "Proveedor" y "Tipo" y sólo los switches que pertenezcan al proveedor "Cisco" aparecerán en el inventario.
      .row.col-xl-11.m-auto(titulo="Grupos dinámicos con sistema de gestión de inventario de red")
        p La gestión del inventario de dispositivos de red de Network Inventory Tool ofrece la opción de crear varios grupos en los que los usuarios pueden añadir varios dispositivos y supervisar el estado de cada uno de ellos en ese grupo. Estos grupos pueden crearse en función de varios criterios: estado de las copias de seguridad, estado de cumplimiento, conflictos de configuración en el arranque, entre otros. Siempre que haya un cambio en cualquiera de estos estados operativos, este cambio se reflejará en los grupos. Por ejemplo, un dispositivo que se encuentre en el grupo "conflicto de arranque-arranque" pasará automáticamente al grupo "sincronización de arranque-arranque" después de que se sincronice con la configuración de arranque. Asimismo, todos los grupos se irán actualizando dinámicamente en función de los cambios realizados en los dispositivos. Esto ayuda a los usuarios a ahorrar tiempo mientras compilan y actualizan la información de los dispositivos.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_4_2 4.2 Documentación de configuración de la red
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        .p-4.mt-4.cajon.color-primario(style="background-color:#F2F6FE;" data-aos="zoom-in")
          p.mb-0 Puede que todo en su red funcione, pero su uso puede seguir siendo una experiencia frustrante. A menudo, un sistema de bajo rendimiento es peor que un sistema roto. Como usuario de un sistema roto, sabe cuándo debe rendirse y buscar otra cosa que hacer. Y como administrador, suele ser mucho más fácil identificar un componente que no funciona en absoluto que uno que sigue funcionando, pero con un rendimiento deficiente.
        p.mt-4 El rendimiento de la red dependerá de muchas cosas: de las aplicaciones que se estén utilizando y de cómo estén configuradas, de los hosts que ejecutan estas aplicaciones, de los dispositivos de red, de la estructura y el diseño de la red en su conjunto y de cómo estas piezas interactúan entre sí. Los problemas pueden surgir de la interacción de estas piezas, o un problema con una de las piezas puede parecer un problema con otra pieza. Una aplicación mal configurada o diseñada puede aumentar significativamente la cantidad de tráfico en una red. Por ejemplo, la versión 1.1 del protocolo HTTP proporciona conexiones persistentes que pueden reducir significativamente el tráfico. Es poco probable que el hecho de no utilizar esta característica en particular sea un problema decisivo. Lo que quiero decir es que, si sólo se mira el tráfico en una red sin tener en cuenta las configuraciones de #[em software], puede parecer que se tiene un problema de capacidad de #[em hardware] cuando un simple cambio de #[em software] podría disminuir el problema y, como mínimo, ganar un poco más de tiempo.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema4/10.png", alt='Imágen decorativa')
    
    .p-4.mt-4.cajon.color-acento-botones(style="background-color:#FFFAD8;" data-aos="zoom-in")
      p.mb-0 De las cuestiones relacionadas con la medición del tráfico de red, las más importantes son qué medir, con qué frecuencia y dónde. Aunque no hay respuestas sencillas a ninguna de estas preguntas, qué medir es probablemente la más difícil de las tres. Es muy fácil acabar con tantos datos que no se tenga tiempo para analizarlos. O puede que se recojan datos que no se ajusten a las necesidades o que estén en un formato inutilizable. 
    
    .col-xl-10.m-auto.mt-5
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema4/11.svg", alt='Imágen decorativa')
        .col(style="place-self:center;" data-aos="fade-left")
          .p-3.cont_arrow1(style="background-color:#12263F;")
            p.fw-bold.mb-0(style="color:#4ADBD1;") Importante
            ul.lista-ul.mb-0.ps-3
              li.d-flex.mb-0.text-white
                i.lista-ul__vineta(style="color:#4ADBD1 !important;")
                | Tomarse el tiempo necesario para pensar cómo se van a utilizar los datos antes de empezar. 
              li.d-flex.mb-0.text-white
                i.lista-ul__vineta(style="color:#4ADBD1 !important;")
                | Dirigirse a los objetivos en la medida de lo posible. 
              li.d-flex.mb-0.text-white
                i.lista-ul__vineta(style="color:#4ADBD1 !important;")
                | Tener en cuenta que, incluso con la planificación más cuidadosa, cuando se enfrenta un problema nuevo e inusual, probablemente se aparecerá algo que se desearía haber medido.

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        .cajon.p-4.color-acento-contenido(style="background-color:#E8FFFD;" data-aos="flip-up")
          p.mb-0 Si se trata de analizar el rendimiento del sistema a lo largo del tiempo, los datos de un solo momento tendrán poco valor, haciéndose necesario recopilar datos periódicamente. La frecuencia con la que se recoja dependerá de la granularidad o frecuencia de los eventos que se quieran observar. Para muchas tareas, el enfoque ideal es aquel que condensa periódica y eventualmente descarta los datos más antiguos.
        p.mt-4 A menos que la red sea realmente inusual, el nivel de uso variará según la hora del día, el día de la semana y la época del año. La mayoría de los problemas relacionados con el rendimiento serán más graves en las horas de mayor actividad. En telefonía, la hora en la que el tráfico es más intenso se conoce como la hora de mayor afluencia, y la planificación se centra en ese momento. En una red de datos, por ejemplo, la hora de mayor actividad puede ser la primera de la mañana, cuando todo el mundo se conecta y comprueba su correo electrónico, o puede ser al mediodía, cuando todo el mundo navega por la web durante la hora del almuerzo.
        p.mt-4 Conocer los patrones de uso puede simplificar la recogida de datos, ya que tendrá que hacer poca recogida cuando la red esté infrautilizada. Los cambios en los patrones de uso pueden indicar cambios fundamentales en la red que deberá identificar y explicarse. Por último, saber cuándo la red está menos ocupada debería dar una idea de los momentos más convenientes para hacer el mantenimiento.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema4/12.png", alt='Imágen decorativa')
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Herramientas de supervisión de hosts

  
    .bloque-texto-g.color-secundario.bloque_1_1.p-4(data-aos="flip-up" style="background-color:transparent;")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4.mt-3.mb-3(style="background-color:#F8F8F8;border-radius:0px 30px 0px 30px;")
        p.mb-0 Aunque es fácil pasarlo por alto, cualquier herramienta que registre el tráfico es una especie de herramienta de monitorización del host. Por lo general, no son demasiado útiles a posteriori, pero es posible reconstruir alguna información a partir de ellas. Un mejor enfoque es configurar el #[em software] para que recoja lo necesario, sin olvidar aplicaciones, como los servidores web, que recogen datos. Las herramientas de contabilidad y de seguridad ofrecen otras posibilidades. Herramientas como #[em ipfw, ipchains y tcpwrappers] soportan el registro.

    p.mt-5(data-aos="fade-right") Las herramientas de monitorización de host pueden ser esenciales para diagnosticar problemas relacionados con el rendimiento del host, pero dan muy poca información sobre el rendimiento de la red en su conjunto. Por supuesto, si se cuenta con esta información para cada host, se tendrán los datos necesarios para construir una imagen completa. 

    .row.mt-5.justify-content-center
      .col-lg.mb-4.mb-lg-0.pe-lg-0.col-md-9(data-aos="fade-right")
        .h-100.p-4.p-lg-5.text-white(style="background-color:#373F51;border-radius:15px 0px 0px 15px;")
          figure.text-center
            img(src="@/assets/curso/tema4/14.png" style="display:inline;max-width:150px;", alt='Imágen decorativa')
          h5.mt-3.text-center Herramientas de control de puntos
          p.mt-3.mb-0 Una herramienta de monitorización de puntos pone su interfaz de red en modo promiscuo y le permite recoger información sobre todo el tráfico visto en la interfaz del computador. La principal limitación de la monitorización de puntos es que sólo ofrece una visión local de la red. Si el objetivo es el rendimiento del host, esto es probablemente todo lo que se necesita. O, si se está en una red de medios compartidos como un hub, se verá todo el tráfico local. Pero, si se está en una red conmutada, normalmente se podrá ver sólo el tráfico hacia o desde el host o el tráfico de difusión. Y a medida que más y más redes cambien a conmutadores para ser más eficientes, este problema empeorará.
      .col-lg.mb-4.mb-lg-0.ps-lg-0.col-md-9(data-aos="fade-left")
        .h-100.p-4.p-lg-5.text-white(style="background-color:#5371BC;border-radius:0px 15px 15px 0px;")
          figure.text-center
            img(src="@/assets/curso/tema4/15.png" style="display:inline;max-width:150px;", alt='Imágen decorativa')
          h5.mt-3.text-center Herramientas de supervisión de la red
          p.mt-3.mb-0 No debería sorprender que SNMP se pueda utilizar para recopilar información sobre el rendimiento. Utilizar las estadísticas en bruto recogidas con una herramienta como NET SNMP o incluso los stripcharts de tkined está bien si sólo se requieren unos pocos datos, pero en la práctica se necesitarán querrás herramientas diseñadas para tratar específicamente los datos de rendimiento. La herramienta a utilizar dependerá de lo que se quiera hacer. Una de las mejores opciones de esta familia de herramientas es mrtg.  A continuación, se destacan sus principales características:  
    
    .tarjeta.tarjeta--azul.p-4.p-lg-5.mt-5.cont_slyder2(data-aos="flip-up")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-8(style="place-self:center;")
            h5(style="color:#5573C6;") Diseño
            p Utiliza SNMP para recopilar estadísticas de los equipos de red y #[strong crea gráficos accesibles desde la web] de las estadísticas. Ejecutada periódicamente, proporciona una imagen del tráfico a lo largo del tiempo. Es ideal para identificar el tráfico en horas punta, todo lo que hay que hacer es escudriñar el gráfico en busca de los mayores picos.
          .col-md-6.col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/17.png', alt='Imágen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-8(style="place-self:center;")
            h5(style="color:#5573C6;") Usos
            p Principalmente utilizada para graficar el tráfico a través de las #[strong interfaces de los #[em routers]] pero puede ser configurada para otros usos: 
            ul.lista-ul.ps-3.mt-3
              li.d-flex
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                div Recuperar y graficar la cantidad de espacio libre en la unidad de disco a lo largo del tiempo para un sistema que ejecute snmpd. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                div Medición remota, utilizando el comando GET de SNMP para recoger la información. 
          .col-md-6.col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/18.png', alt='Imágen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-8(style="place-self:center;")
            h5(style="color:#5573C6;") Funcionalidad
            ul.lista-ul.ps-3.mt-3
              li.d-flex
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                div Ejecutada regularmente por cron, normalmente cada cinco minutos, puede hacerlo como un programa independiente, o cambiarse el intervalo de muestreo.  
              li.d-flex
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                div Genera gráficos de tráfico en formato GIF y páginas HTML, que son puestos a disposición por un servidor web que se ejecuta en el mismo equipo o trasladados a otro equipo para su visualización. 
          .col-md-6.col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/19.png', alt='Imágen decorativa')
          





      
</template>

<script>
export default {
  name: 'Tema4',
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
.acordion1 .tarjeta.tarjeta--azul
  background-color: #D0DDEB
.acordion1 .tarjeta.tarjeta--azul.acordion__activo
  background: url(../assets/curso/tema4/9.png)
  background-size: cover
  background-position: right
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
.cont_slyder2
  background: url(../assets/curso/tema1/40.png)
  background-size: cover
  background-position: center
.cont_slyder2 .slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #5573C6
  opacity: 1
  background-image: url(../assets/curso/tema4/arrow_white.svg)
.cont_slyder2 .slyder-a__bullets__item--active
  background-color: #4ADBD1 !important
  border-color: #4ADBD1 !important
.cont_slyder2 .slyder-a__bullets__item
  background-color: #BAECE9
</style>
