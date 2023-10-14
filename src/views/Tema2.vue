<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Detección de fallas en la operación de la red
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up" style="background-color:#12263F;")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 La resolución de problemas es un proceso complejo que se aprende mejor con la experiencia. A continuación, se examina brevemente cómo se resuelven los problemas para ver cómo encajan las herramientas descritas, en el proceso. Aunque cada problema es diferente, un paso clave es la recopilación de información.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Está claro que la mejor manera de abordar la resolución de problemas es evitarla. Si no se presentan problemas, no habrá nada que corregir. Las buenas prácticas de ingeniería, la redundancia, la documentación y la formación pueden ayudar. Pero independientemente de lo bien diseñado que esté el sistema, las cosas se rompen. Se puede evitar la resolución de problemas, pero no se puede escapar de ella.
        .row.mt-4
          .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/9.svg")
          .col(data-aos="fade-left" style="place-self:center;")
            p.mb-0 Puede parecer innecesario decirlo, pero hay que buscar primero las soluciones rápidas. A menudo, lo primero que se intenta es reiniciar el sistema. Muchos problemas pueden resolverse de este modo. Si el problema es realmente una casualidad, reiniciar el sistema puede resolver el problema, y es posible que no se vuelva a ver. 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/2.png")
    
    p.mt-5.fw-bold.text-center(data-aos="zoom-in") Es importante tener en cuenta los diferentes niveles en el restablecimiento de un sistema:

    .row.mt-5.justify-content-center
      .col-lg-4.mb-4.md-lg-0.col-md-8
        .crd_hover_txt(data-aos='flip-up')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema2/3.png' alt="")
          .crd_hover_txt--body(style="background-color:rgba(85,115,198,.96);")
            h5.mb-3.text-white.text-center Para el #[em.text-white software]
            p.mt-4.text-white.mb-0 Se puede simplemente reiniciar el programa, o enviar una señal al programa para que recargue su archivo de inicialización. Desde el punto de vista de los usuarios, este es el enfoque menos perturbador. 
      .col-lg-4.mb-4.md-lg-0.col-md-8
        .crd_hover_txt(data-aos='flip-up')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema2/4.png' alt="")
          .crd_hover_txt--body(style="background-color:rgba(74,219,209,.96);")
            h5.mb-3.text-center Reiniciar el sistema operativo
            p.mt-4.mb-0 Pero sin cortar la corriente, es decir, hacer un reinicio en caliente. 
      .col-lg-4.mb-4.md-lg-0.col-md-8
        .crd_hover_txt(data-aos='flip-up')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema2/5.png' alt="")
          .crd_hover_txt--body(style="background-color:rgba(85,115,198,.96);")
            h5.mb-3.text-white.text-center Reinicio en frío
            p.mt-4.text-white.mb-0 Se puede intentar un reinicio en frío, desconectando la alimentación.
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema2/6.png")
      .col-lg-8(data-aos="fade-left")
        p Sin embargo, hay que considerar algunos peligros al reiniciar un sistema. Por ejemplo, es posible hacer inadvertidamente cambios en un sistema para que no pueda reiniciarse. Si se identifica lo que se ha hecho a tiempo, se puede corregir el problema. Pero una vez apagado el sistema, puede ser demasiado tarde. Sin un disco de arranque de respaldo, se tendrá que reconstruir el sistema. Afortunadamente, estas son circunstancias poco frecuentes y suelen ocurrir sólo cuando se han realizado cambios importantes en un sistema.
        .cajon.mt-4.p-4.color-acento-contenido(style="background-color:#E8FFFD;" data-aos="flip-up")
          p.mb-0 Al realizar cambios en un sistema, es importante recordar que el mantenimiento programado puede implicar el reinicio del sistema. Es posible que se quiera probar los cambios efectuados, incluyendo su impacto en un reinicio del sistema, antes de dicho mantenimiento para asegurar que no hay problemas. De lo contrario, el sistema puede fallar cuando se reinicie durante el mantenimiento programado. Si esto ocurre, se enfrentará la difícil tarea de decidir cuál de los diferentes cambios está causando problemas.
    
    p.mt-5(data-aos="fade-right") Sin duda, vale la pena intentar reiniciar el sistema una vez, hacerlo más de una vez es otra cosa. Con algunos sistemas, esto se convierte en una forma de vida. Un sistema operativo que no proporciona una protección adecuada de la memoria se atascará con frecuencia, de modo que reiniciar es la única opción. A veces, es posible que se quiera cojeando reiniciar el sistema de vez en cuando en lugar de lidiar con el problema. Sin embargo, normalmente, cuando el reinicio se convierte en una forma de vida, es el momento de tomar medidas más decisivas.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up" style="background-color:#5573C6;")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Intercambiar componentes y reinstalar el #[em software] suele ser lo siguiente que hay que intentar. Con los componentes de repuesto, esto a menudo puede resolver los problemas inmediatamente. Incluso sin repuestos, cambiar los componentes para ver si el problema sigue al equipo puede ser una primera prueba sencilla. Reinstalar el #[em software] puede ser mucho más problemático. A menudo puede dar lugar a errores de configuración que empeoren los problemas. La versión antigua e instalada del #[em software] puede hacer imposible una instalación nueva y limpia. Pero si la instalación es sencilla o se sabe exactamente cómo configurar el #[em software], puede ser una solución relativamente rápida.
    
    p.mt-5(data-aos="fade-right") Aunque estos enfoques suelen funcionar, no pueden ser considerados como solución de problemas. Agotadas las soluciones rápidas, es hora de entender el problema, si es posible. Los problemas que no se entienden no suelen solucionarse, sólo se posponen.  Las siguientes son algunas recomendaciones de aproximación al análisis de fallas: 

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Identificar cambios recientes") La mayoría de los problemas están relacionados con cambios en un sistema que funciona. Si se cambian temporalmente las cosas y el problema desaparece, se habrá confirmado el diagnóstico. #[br] Incluso una instalación nueva puede y debe crecer, las piezas se pueden instalar y probar, y añadir nuevas piezas de forma gradual. 
          p.text-small(numero="2" titulo="Cambiar y probar") Cambiar sólo una cosa a la vez y probar a fondo después de cada cambio. Recomendable en caso de fallos rutinarios, pero no aplica en fallo del sistema.  A menudo es mejor hacer una nota de los cambios adicionales que se han hecho y avanzar con la solución de problemas.
          p.text-small(numero="3" titulo="Descomponer el problema") Por lo general, puede centrarse mejor si se divide el problema en partes. Esta técnica, aplicable a todo tipo de soluciones de problemas, es conocida con varios nombres: descomposición del problema, divide y vencerás, búsqueda binaria.
      .col-lg-4(data-aos="fade-right")
        figure.col-7.col-md-6.col-lg-12.m-auto
          img(src="@/assets/curso/tema2/8.png")
    
    h4.mt-5.mb-4.p-3.pe-5.mb-0(data-aos="zoom-in" style="background-color:#4ADBD1;max-width:fit-content;border-radius:0px 25px 0px 0px;") Fallos del sistema

    .mt-5(style="position:relative;")
      figure.d-none.d-md-block
        img(src="@/assets/curso/tema2/10.svg" style="max-width:170px;max-height:190px;display:inline;position:absolute;right:-105px;top:50%;")
      .bloque-texto-g.color-secundario.bloque_2_1.p-4(data-aos="flip-up" style="background-color:transparent;")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/9.png')})`}"
        )
        .bloque-texto-g__texto.p-4(style="background-color:#F8F8F8;border-radius:0px 30px 0px 30px;")
          p.mb-0 La resolución de problemas abordada hasta ahora puede considerarse, a grandes rasgos, como una forma de tratar los fallos normales (aunque no haya nada terriblemente normal en ellos). Una segunda clase general de problemas se conoce como fallos del sistema. Los fallos del sistema son problemas que se derivan de la interacción de las partes de un sistema complejo de forma inesperada. Suelen producirse cuando dos o más subsistemas fallan casi al mismo tiempo y de forma interactiva. Sin embargo, los fallos del sistema pueden producirse por la interacción de los subsistemas sin que haya un fallo ostensible en ninguno de ellos.
      
      .row.mt-4
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col(data-aos="fade-left" style="place-self:center;")
          p.mb-0 Los fallos del sistema son más perniciosos en sistemas con un estrecho acoplamiento entre subsistemas y subsistemas que están vinculados de forma no lineal o no evidente. Depurar un fallo del sistema puede ser extremadamente difícil. Muchos de los enfoques más estándar simplemente no funcionan. La estrategia de descomponer el sistema en subsistemas se vuelve difícil, porque los síntomas desvían los esfuerzos. Además, en casos extremos, cada subsistema puede estar funcionando correctamente y el problema se debe exclusivamente a las interacciones inesperadas.
    
    p.mt-4(data-aos="fade-right") En caso de fallo en el sistema, el mejor enfoque, cuando sea factible, es sustituir los subsistemas completos. El objetivo no debe ser buscar un sistema que vuelva a funcionar, sino buscar cambios en los síntomas. Estos cambios indican que puede haberse encontrado uno de los subsistemas implicados. (A la inversa, si se está trabajando con un problema y los síntomas cambian cuando se sustituye un subsistema, esto es un fuerte indicio de un fallo del sistema).

    .col-xl-10.m-auto.mt-5
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/11.svg")
        .col(style="place-self:center;" data-aos="fade-left")
          .p-3.text-white.cont_arrow1(style="background-color:#12263F;")
            p.mb-0 Lamentablemente, si el problema se deriva de una interacción inesperada de sistemas que no fallan, ni siquiera este enfoque funcionará. Se trata de problemas extremadamente difíciles de diagnosticar. Cada problema debe ser tratado como un problema único y especial. Pero, de nuevo, un primer paso importante es la recopilación de información.





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
<style lang="sass">
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  border-radius: 10px
.crd_hover_txt .crd_hover_txt--body
  position: absolute
  padding: 1.5rem
  width: 100%
  bottom: 0
  transition: all .5s ease-in-out
  transform: translateY(calc(100% - 3.85rem))
  background-color: #fff7e6
.crd_hover_txt:hover .crd_hover_txt--body
  transition: all .5s ease-in-out
  transform: translateY(0)
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #E8FFFD
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #4ADBD1
  color: initial
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
.bloque_2_1 .bloque-texto-g__img
   background-position: 16%
</style>
