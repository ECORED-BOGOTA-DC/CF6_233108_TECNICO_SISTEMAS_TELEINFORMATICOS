<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") La implementación de una red de datos en una organización es esencial para garantizar su óptimo funcionamiento y eficiencia en la era digital. Esta red, utilizada para identificar la conectividad de los sistemas, detectar fallos, facilitar las redes de acceso y gestionar datos, se conforma mediante la interconexión de dispositivos y sistemas tecnológicos. Al crear una infraestructura robusta y segura, la organización logra establecer una base sólida que permite una comunicación fluida y confiable, así como un manejo eficiente de la información vital para la toma de decisiones estratégicas. A continuación, veamos al respecto un mapa que resume esto:

    .row.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Imagen que resume a través de un mapa conceptual los temas abordados en este componente formativo, para este caso los temas desarrollados son:<br>La identificación de la conectividad de la red, donde se aprecia cómo está funcionando una red de datos; la detección de fallas, incluyendo procedimientos que deben incorporarse para solucionarlas; las redes de acceso que pretenden encontrar los estándares de acceso a las redes internas de las organizaciones; por último, la gestión de datos que explica cómo se manejan los inventarios y cuáles son los reportes de los dispositivos de red.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
