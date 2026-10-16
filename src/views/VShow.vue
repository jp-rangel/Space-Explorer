<script setup>
import { ref } from 'vue'

const mostrarDetalles = ref(true)
</script>

<template>
  <section>
    <span class="page-label">MISIÓN 02 · ARCHIVO ASTRONÓMICO</span>
    <h1 class="page-title">Información planetaria</h1>

    <p class="page-description">
      Los exploradores necesitan consultar datos de los planetas durante
      sus viajes. En esta misión podrás mostrar u ocultar información
      sin eliminar el elemento de la página.
    </p>

    <div class="planet-layout">
      <section class="panel planet-card">
        <div class="planet-illustration">
          <div class="saturn">
            <div class="saturn-ring"></div>
            <div class="saturn-body"></div>
          </div>
          <span class="planet-label">SATURNO · PLANETA 06</span>
        </div>

        <div class="planet-info">
          <span class="field-label">FICHA DEL PLANETA</span>
          <h2>Saturno</h2>

          <p class="planet-description">
            Un gigante gaseoso conocido por su espectacular sistema
            de anillos, compuesto principalmente por partículas de hielo
            y roca.
          </p>

          <button
            class="primary-button"
            @click="mostrarDetalles = !mostrarDetalles"
            :aria-expanded="mostrarDetalles"
            aria-controls="planet-details"
          >
            {{ mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles' }}
          </button>

          <div
            id="planet-details"
            v-show="mostrarDetalles"
            class="planet-details"
          >
            <h3>Datos de exploración</h3>

            <div class="detail-row">
              <span>Tipo</span>
              <strong>Gigante gaseoso</strong>
            </div>

            <div class="detail-row">
              <span>Diámetro</span>
              <strong>120,536 km aprox.</strong>
            </div>

            <div class="detail-row">
              <span>Duración del día</span>
              <strong>Unas 10.7 horas</strong>
            </div>

            <div class="detail-row">
              <span>Lunas confirmadas</span>
              <strong>Más de 270</strong>
            </div>
          </div>
        </div>
      </section>

      <aside class="panel explanation-panel">
        <span class="field-label">REGISTRO TÉCNICO</span>
        <h2>¿Cómo funciona?</h2>

        <p>
          La directiva <code>v-show</code> controla si un elemento es
          visible. Cuando su valor es verdadero, se muestra; cuando es
          falso, se oculta mediante CSS.
        </p>

        <div class="code-example">
          <span class="code-line">
            <span class="code-purple">v-show</span>=
            <span class="code-green">"mostrarDetalles"</span>
          </span>
        </div>

        <div class="visibility-status">
          <span class="status-dot" :class="{ hidden: !mostrarDetalles }"></span>
          <span>
            Detalles:
            <strong>{{ mostrarDetalles ? 'visibles' : 'ocultos' }}</strong>
          </span>
        </div>

        <p class="small-note">
          A diferencia de <code>v-if</code>, <code>v-show</code> mantiene
          el elemento en el DOM y cambia su propiedad CSS
          <code>display</code>.
        </p>
      </aside>
    </div>

    <div class="next-mission">
      <RouterLink to="/condicionales" class="back-link">
        ← Misión anterior
      </RouterLink>

      <RouterLink to="/v-for" class="primary-button">
        Siguiente misión →
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.planet-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
  margin-top: 32px;
  align-items: start;
}

.planet-card {
  padding: 0;
  overflow: hidden;
}

.planet-illustration {
  position: relative;
  min-height: 245px;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: linear-gradient(145deg, #edf4ff, #f9fbff);
}

.saturn {
  position: relative;
  width: 170px;
  height: 110px;
}

.saturn-ring {
  position: absolute;
  z-index: 1;
  top: 24px;
  left: -20px;
  width: 210px;
  height: 65px;
  border: 14px solid #c9ad82;
  border-left-color: #e0d1b6;
  border-right-color: #a88a64;
  border-radius: 50%;
  transform: rotate(-17deg);
}

.saturn-body {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 35px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f4dfb6, #c6a477 70%, #92744f);
  box-shadow: inset -12px -5px 20px #8b6b45a0;
}

.planet-label {
  position: absolute;
  bottom: 16px;
  color: #7185a6;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.planet-info {
  padding: 26px;
}

.field-label {
  color: #8795aa;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.planet-info h2,
.explanation-panel h2 {
  margin: 10px 0;
  color: #172b4d;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 23px;
}

.planet-description,
.explanation-panel p {
  color: #66758c;
  font-size: 13px;
  line-height: 1.8;
}

.planet-info button {
  margin-top: 12px;
}

.planet-details {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid #edf0f5;
}

.planet-details h3 {
  margin: 0 0 12px;
  color: #25334a;
  font-size: 14px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 0;
  border-bottom: 1px solid #f0f2f6;
  font-size: 12px;
}

.detail-row span {
  color: #8290a5;
}

.detail-row strong {
  color: #40516a;
  text-align: right;
}

code {
  padding: 3px 6px;
  border-radius: 5px;
  background: #edf3ff;
  color: #315fb2;
  font-size: 12px;
}

.code-example {
  margin: 22px 0;
  padding: 18px 12px;
  overflow-x: auto;
  border-radius: 9px;
  background: #f5f7fb;
}

.code-line {
  white-space: nowrap;
  color: #526078;
  font-family: monospace;
  font-size: 12px;
}

.code-purple {
  color: #8556b3;
  font-weight: 700;
}

.code-green {
  color: #21835a;
}

.visibility-status {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 22px;
  padding: 12px;
  border-radius: 8px;
  background: #f5f7fb;
  color: #66758c;
  font-size: 12px;
}

.visibility-status strong {
  color: #25334a;
}

.status-dot {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #2da879;
}

.status-dot.hidden {
  background: #c58b35;
}

.small-note {
  margin-top: 22px;
  font-size: 12px !important;
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

@media (max-width: 700px) {
  .planet-layout {
    grid-template-columns: 1fr;
  }
}
</style>