
<script setup>
import { ref } from 'vue'

const planetas = ref([
  {
    nombre: 'Marte',
    tipo: 'Planeta rocoso',
    distancia: '225 millones de km',
    color: '#e88b70',
    simbolo: '♂',
  },
  {
    nombre: 'Júpiter',
    tipo: 'Gigante gaseoso',
    distancia: '778 millones de km',
    color: '#d9ad83',
    simbolo: '♃',
  },
  {
    nombre: 'Saturno',
    tipo: 'Gigante gaseoso',
    distancia: '1,430 millones de km',
    color: '#e3c778',
    simbolo: '♄',
  },
  {
    nombre: 'Neptuno',
    tipo: 'Gigante helado',
    distancia: '4,500 millones de km',
    color: '#7299ed',
    simbolo: '♆',
  },
])

const busqueda = ref('')
</script>

<template>
  <section>
    <span class="page-label">MISIÓN 03 · CATÁLOGO CELESTIAL</span>
    <h1 class="page-title">Explora los planetas.</h1>
    <p class="page-description">
      Utiliza v-for para recorrer una lista de datos y mostrar cada planeta
      automáticamente. Puedes buscar un planeta por su nombre.
    </p>

    <div class="catalog-toolbar">
      <div>
        <span class="catalog-label">ARCHIVO ASTRONÓMICO</span>
        <h2>Planetas registrados</h2>
      </div>

      <input
        v-model="busqueda"
        type="search"
        placeholder="Buscar planeta..."
        aria-label="Buscar planeta"
        class="search-input"
      />
    </div>

    <div class="planet-grid">
      <article
        v-for="planeta in planetas.filter(p =>
          p.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )"
        :key="planeta.nombre"
        class="planet-card"
      >
        <div class="planet-illustration">
          <div
            class="planet-ball"
            :style="{ background: planeta.color }"
          >
            <span>{{ planeta.simbolo }}</span>
          </div>
        </div>

        <div class="planet-info">
          <span class="planet-type">{{ planeta.tipo }}</span>
          <h3>{{ planeta.nombre }}</h3>
          <p>Distancia media al Sol</p>
          <strong>{{ planeta.distancia }}</strong>
        </div>
      </article>
    </div>

    <div
      v-if="planetas.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
      ).length === 0"
      class="empty-message"
    >
      No se encontraron planetas con ese nombre.
    </div>

    <div class="explanation-panel">
      <span class="page-label">¿CÓMO FUNCIONA?</span>
      <h2>Una lista, muchos elementos</h2>
      <p>
        La directiva <code>v-for</code> recorre el arreglo
        <code>planetas</code> y crea una tarjeta por cada objeto. Los datos
        se muestran mediante interpolación, por ejemplo,
        <code>planeta.nombre</code>.
      </p>
      <p>
        También se utiliza <code>:key="planeta.nombre"</code> para identificar
        cada tarjeta de forma única. El campo de búsqueda usa
        <code>v-model</code> para actualizar los resultados mientras escribes.
      </p>
    </div>

    <div class="next-mission">
      <RouterLink to="/v-show" class="back-link">
        ← Misión anterior
      </RouterLink>

      <RouterLink to="/v-bind-key" class="primary-button">
        Siguiente misión →
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.catalog-toolbar {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin: 38px 0 22px;
}

.catalog-label {
  color: #8290a5;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.3px;
}

.catalog-toolbar h2,
.explanation-panel h2 {
  margin: 7px 0 0;
  color: #172b4d;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 23px;
}

.search-input {
  width: min(260px, 100%);
  padding: 11px 14px;
  border: 1px solid #dce4f0;
  border-radius: 9px;
  outline: none;
  background: white;
  color: #25334a;
}

.search-input:focus {
  border-color: #477ee8;
  box-shadow: 0 0 0 3px #477ee81c;
}

.planet-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.planet-card {
  overflow: hidden;
  border: 1px solid #e4eaf3;
  border-radius: 15px;
  background: white;
  transition: transform 0.2s, box-shadow 0.2s;
}

.planet-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px #294c9b0c;
}

.planet-illustration {
  display: grid;
  min-height: 155px;
  place-items: center;
  background: linear-gradient(145deg, #edf4ff, #f9fbff);
}

.planet-ball {
  display: grid;
  width: 86px;
  height: 86px;
  place-items: center;
  border-radius: 50%;
  box-shadow: inset -12px -8px 20px #172b4d30,
    0 8px 20px #294c9b18;
}

.planet-ball span {
  color: #ffffffd9;
  font-size: 36px;
}

.planet-info {
  padding: 20px;
}

.planet-type {
  color: #477ee8;
  font-size: 11px;
  font-weight: 700;
}

.planet-info h3 {
  margin: 8px 0;
  color: #172b4d;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
}

.planet-info p {
  margin: 15px 0 5px;
  color: #8290a5;
  font-size: 12px;
}

.planet-info strong {
  color: #43536c;
  font-size: 13px;
}

.empty-message {
  margin-top: 20px;
  padding: 22px;
  border: 1px dashed #cbd7e8;
  border-radius: 12px;
  color: #66758c;
  text-align: center;
}

.explanation-panel {
  margin-top: 28px;
  padding: 25px;
  border: 1px solid #e4eaf3;
  border-radius: 15px;
  background: white;
}

.explanation-panel p {
  color: #66758c;
  font-size: 14px;
  line-height: 1.8;
}

.explanation-panel code {
  padding: 2px 5px;
  border-radius: 4px;
  background: #edf3ff;
  color: #285dbb;
}

.next-mission {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 28px;
}

.back-link {
  color: #61718a;
  font-size: 13px;
}

.back-link:hover {
  color: #356fe0;
}

@media (max-width: 650px) {
  .catalog-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .search-input {
    width: 100%;
  }

  .planet-grid {
    grid-template-columns: 1fr;
  }
}
</style>