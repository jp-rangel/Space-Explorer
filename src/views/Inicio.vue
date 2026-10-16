<script setup>
const topics = [
  {
    number: '01',
    title: 'Estado de las misiones',
    description: 'Aprende a mostrar contenido según una condición.',
    route: '/condicionales',
    tag: 'v-if / v-else',
    symbol: '◉',
  },
  {
    number: '02',
    title: 'Información planetaria',
    description: 'Controla la visibilidad de los elementos.',
    route: '/v-show',
    tag: 'v-show',
    symbol: '◌',
  },
  {
    number: '03',
    title: 'Catálogo celestial',
    description: 'Genera listas dinámicas a partir de datos.',
    route: '/v-for',
    tag: 'v-for',
    symbol: '☷',
  },
  {
    number: '04',
    title: 'Registro de cuerpos celestes',
    description: 'Identifica de forma única cada elemento.',
    route: '/v-bind-key',
    tag: ':key',
    symbol: '✳',
  },
]
</script>

<template>
  <section class="hero">
    <div class="hero-copy">
      <span class="page-label">CENTRO DE EXPLORACIÓN</span>

      <h1 class="page-title">
        Tu próximo destino<br />
        está en el código.
      </h1>

      <p class="page-description">
        Explora el universo de Vue 3 a través de misiones interactivas.
        Descubre cómo funcionan sus directivas y aprende experimentando.
      </p>

      <RouterLink to="/condicionales" class="primary-button hero-button">
        Comenzar exploración <span>→</span>
      </RouterLink>
    </div>

    <div class="planet-scene" aria-label="Ilustración de un planeta">
      <div class="orbit orbit-one"></div>
      <div class="orbit orbit-two"></div>
      <div class="planet">
        <div class="planet-shadow"></div>
        <div class="planet-band band-one"></div>
        <div class="planet-band band-two"></div>
      </div>
      <span class="star star-one">✦</span>
      <span class="star star-two">✧</span>
      <span class="star star-three">·</span>
      <span class="planet-caption">SECTOR 001 · SISTEMA SOLAR</span>
    </div>
  </section>

  <section class="topics-section">
    <div class="section-heading">
      <div>
        <span class="page-label">TU RUTA DE APRENDIZAJE</span>
        <h2>Selecciona una misión</h2>
      </div>
      <span class="topic-count">04 MISIONES</span>
    </div>

    <div class="topic-grid">
      <RouterLink
        v-for="topic in topics"
        :key="topic.number"
        :to="topic.route"
        class="topic-card"
      >
        <div class="topic-card-top">
          <span class="topic-symbol">{{ topic.symbol }}</span>
          <span class="topic-number">{{ topic.number }}</span>
        </div>

        <span class="topic-tag">{{ topic.tag }}</span>
        <h3>{{ topic.title }}</h3>
        <p>{{ topic.description }}</p>

        <span class="topic-link">Explorar misión →</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 35px;
  min-height: 350px;
}

.hero-copy {
  padding: 12px 0;
}

.hero-button {
  margin-top: 14px;
  gap: 14px;
}

.planet-scene {
  position: relative;
  min-height: 320px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 22px;
  background: linear-gradient(145deg, #edf4ff, #f9fbff);
}

.planet {
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  background: linear-gradient(135deg, #8ebaf8, #497bd2 65%, #294c9b);
  box-shadow: inset -18px -10px 35px #183e84, 0 12px 35px #7da4e94a;
}

.planet-shadow {
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 35%, #203f82a8);
}

.planet-band {
  position: absolute;
  left: -12%;
  width: 125%;
  border-radius: 50%;
  transform: rotate(-28deg);
}

.band-one {
  top: 30%;
  height: 24px;
  background: #d2e4ff80;
}

.band-two {
  top: 65%;
  height: 14px;
  background: #244d9b70;
}

.orbit {
  position: absolute;
  width: 245px;
  height: 90px;
  border: 1px solid #7da4e9a0;
  border-radius: 50%;
  transform: rotate(-28deg);
}

.orbit-two {
  width: 290px;
  height: 125px;
  transform: rotate(38deg);
  border-color: #b3c9ee;
}

.star {
  position: absolute;
  color: #477ee8;
}

.star-one {
  top: 19%;
  left: 22%;
  font-size: 22px;
}

.star-two {
  top: 26%;
  right: 20%;
  font-size: 28px;
}

.star-three {
  bottom: 25%;
  left: 19%;
  font-size: 34px;
}

.planet-caption {
  position: absolute;
  bottom: 18px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.4px;
  color: #7185a6;
}

.topics-section {
  margin-top: 65px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 8px 0 0;
  font-family: 'Space Grotesk', sans-serif;
  color: #172b4d;
  font-size: 25px;
}

.topic-count {
  color: #8290a5;
  font-size: 11px;
  letter-spacing: 1px;
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.topic-card {
  padding: 24px;
  background: white;
  border: 1px solid #e4eaf3;
  border-radius: 15px;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.topic-card:hover {
  transform: translateY(-3px);
  border-color: #a8c5f6;
  box-shadow: 0 10px 28px #294c9b0c;
}

.topic-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}

.topic-symbol {
  color: #477ee8;
  font-size: 27px;
}

.topic-number {
  color: #a3afc1;
  font-size: 12px;
}

.topic-tag {
  padding: 5px 9px;
  background: #edf3ff;
  color: #3566bd;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 700;
}

.topic-card h3 {
  margin: 14px 0 8px;
  color: #25334a;
  font-size: 17px;
}

.topic-card p {
  min-height: 44px;
  color: #718096;
  font-size: 13px;
  line-height: 1.7;
}

.topic-link {
  display: inline-block;
  margin-top: 8px;
  color: #356fe0;
  font-size: 13px;
  font-weight: 700;
}

@media (max-width: 700px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .planet-scene {
    min-height: 270px;
  }

  .topic-grid {
    grid-template-columns: 1fr;
  }

  .topics-section {
    margin-top: 45px;
  }
}
</style>