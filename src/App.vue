<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 150px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #4ADBD1 !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #F4A338 !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #fff !important
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #fff !important
.banner-principal .tarjeta
  background-color: transparent !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #12263F !important
.banner-principal-decorativo-1
  animation: float1 2s ease-in-out infinite alternate !important
  top: 24% !important
  right: 56% !important
.banner-principal-decorativo-2
  animation: float1 3s ease-in-out infinite alternate !important
  top: 16% !important
  right: 42% !important
.banner-principal-decorativo-3
  animation: float1 2s ease-in-out infinite alternate !important
  top: 15% !important
  right: 23% !important
.banner-principal-decorativo-4
  animation: float1 2s ease-in-out infinite alternate !important
  top: 31% !important
  right: 16% !important
.banner-principal-decorativo-5
  animation: float1 2s ease-in-out infinite alternate !important
  top: 70% !important
  right: 21% !important
.titulo-principal.color-acento-contenido .titulo-principal__numero
  background-color: #94E435 !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding-bottom: 0px !important
  padding-top: 6rem !important
.banner-principal__info
  padding-right: 4rem
@media screen and (max-width: 992px)
  .cont_responsive1
    right: 0 !important
    width: 100% !important
  .cont_responsive2
    left: 0 !important
    width: 100% !important
  .cont_gradiente_1
    margin-top: 0px !important
.cajon.color-acento-botones:before
  background-color: #EFD198 !important
.cajon.color-acento-contenido:before
  background-color: #4ADBD1 !important
</style>
