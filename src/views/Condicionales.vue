<script setup>
import { ref } from 'vue'

const estado = ref('activa')

const misiones = {
  activa: {
    nombre: 'Exploración de Marte',
    mensaje: 'La nave está explorando la superficie marciana.',
    detalle: 'Todos los sistemas funcionan correctamente.',
    simbolo: '🚀',
  },
  pendiente: {
    nombre: 'Misión Europa',
    mensaje: 'La misión está pendiente de lanzamiento.',
    detalle: 'La tripulación y los equipos están en preparación.',
    simbolo: '🛰️',
  },
  finalizada: {
    nombre: 'Misión Apolo',
    mensaje: 'La misión ha finalizado correctamente.',
    detalle: 'Los datos recopilados están listos para su análisis.',
    simbolo: '🌕',
  },
}
</script>

<template>
  <section>
    <span class="page-label">MISIÓN 01 · CONTROL DE EXPLORACIONES</span>
    <h1 class="page-title">Estado de las misiones</h1>

    <p class="page-description">
      Durante una exploración espacial, cada misión puede encontrarse
      en un estado diferente. Utiliza el selector para comprobar cómo
      Vue muestra un contenido u otro mediante condiciones.
    </p>

    <div class="mission-layout">
      <section class="panel controls">
        <span class="field-label">CENTRO DE CONTROL</span>
        <h2>Selecciona una misión</h2>

        <label for="estado">Estado de la misión</label>
        <select id="estado" v-model="estado">
          <option value="activa">En curso</option>
          <option value="pendiente">Pendiente</option>
          <option value="finalizada">Finalizada</option>
        </select>

        <p class="hint">
          Cambia el estado para actualizar la información del panel.
        </p>

        <div class="code-note">
          <strong>Directivas utilizadas</strong>
          <code>v-if</code>
          <code>v-else-if</code>
          <code>v-else</code>
        </div>
      </section>

      <section class="panel mission-display">
        <span class="field-label">REPORTE DE TELEMETRÍA</span>

        <div v-if="estado === 'activa'" class="status status-active">
          <span class="status-dot"></span>
          MISIÓN EN CURSO
        </div>

        <div
          v-else-if="estado === 'pendiente'" class="status status-pending">
          <span class="status-dot"></span>
          MISIÓN PENDIENTE
        </div>

        <div v-else class="status status-finished">
          <span class="status-dot"></span>
          MISIÓN FINALIZADA
        </div>

        <div class="mission-symbol">
          {{ misiones[estado].simbolo }}
        </div>

        <h2>{{ misiones[estado].nombre }}</h2>
        <p class="mission-message">{{ misiones[estado].mensaje }}</p>
        <p class="mission-detail">{{ misiones[estado].detalle }}</p>
      </section>
    </div>

    <section class="explanation panel">
      <h2>¿Cómo funciona?</h2>
      <p>
        <code>v-if</code> muestra el primer bloque cuando la misión está
        activa. <code>v-else-if</code> comprueba si está pendiente y
        <code>v-else</code> muestra el resultado restante, cuando la
        misión ha finalizado.
      </p>
      <p>
        Vue evalúa las condiciones y actualiza la interfaz cuando cambia
        el valor reactivo de <code>estado</code>.
      </p>
    </section>

    <div class="next-mission">
      <span>¿Listo para continuar?</span>
      <RouterLink to="/v-show" class="primary-button">
        Siguiente misión →
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.mission-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 20px;
  margin-top: 32px;
}

.field-label {
  color: #8795aa;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.controls h2,
.mission-display h2,
.explanation h2 {
  margin: 12px 0;
  color: #172b4d;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 21px;
}

.controls label {
  display: block;
  margin: 25px 0 8px;
  color: #53627a;
  font-size: 13px;
  font-weight: 600;
}

.controls select {
  width: 100%;
  padding: 12px;
  border: 1px solid #dce4ef;
  border-radius: 8px;
  background: #fff;
  color: #25334a;
}

.hint {
  color: #8290a5;
  font-size: 12px;
  line-height: 1.7;
}

.code-note {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
  padding-top: 18px;
  border-top: 1px solid #edf0f5;
}

.code-note strong {
  width: 100%;
  margin-bottom: 5px;
  color: #53627a;
  font-size: 12px;
}

code {
  padding: 4px 7px;
  border-radius: 5px;
  background: #edf3ff;
  color: #315fb2;
  font-size: 12px;
}

.mission-display {
  text-align: center;
}

.mission-display > .field-label {
  display: block;
  text-align: left;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 25px;
  padding: 7px 11px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.6px;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}

.status-active {
  color: #21835a;
  background: #e6f7ee;
}

.status-pending {
  color: #a46b15;
  background: #fff3d9;
}

.status-finished {
  color: #3566bd;
  background: #eaf1ff;
}

.mission-symbol {
  display: grid;
  place-items: center;
  width: 105px;
  height: 105px;
  margin: 22px auto 12px;
  border-radius: 50%;
  background: #f0f5ff;
  font-size: 44px;
}

.mission-display h2 {
  margin-bottom: 8px;
}

.mission-message {
  color: #53627a;
  font-size: 14px;
  line-height: 1.7;
}

.mission-detail {
  color: #8290a5;
  font-size: 12px;
  line-height: 1.7;
}

.explanation {
  margin-top: 22px;
}

.explanation p {
  color: #66758c;
  font-size: 13px;
  line-height: 1.9;
}

.next-mission {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 28px;
  color: #718096;
  font-size: 13px;
}

@media (max-width: 700px) {
  .mission-layout {
    grid-template-columns: 1fr;
  }

  .next-mission {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>