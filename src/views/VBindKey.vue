<script setup>
import { ref } from 'vue'

const siguienteId = ref(4)
const nuevoSatélite = ref('')

const satelites = ref([
  { id: 1, nombre: 'Hubble', tipo: 'Telescopio espacial' },
  { id: 2, nombre: 'James Webb', tipo: 'Observatorio infrarrojo' },
  { id: 3, nombre: 'Estación Espacial Internacional', tipo: 'Estación orbital' },
])

function agregarSatelite() {
  const nombre = nuevoSatélite.value.trim()

  if (!nombre) return

  satelites.value.push({
    id: siguienteId.value,
    nombre,
    tipo: 'Satélite registrado por el explorador',
  })

  siguienteId.value++
  nuevoSatélite.value = ''
}

function eliminarSatelite(id) {
  satelites.value = satelites.value.filter(
    satelite => satelite.id !== id
  )
}
</script>

<template>
  <section>
    <span class="page-label">MISIÓN 04 · IDENTIFICACIÓN DE ELEMENTOS</span>
    <h1 class="page-title">Cada objeto tiene su identidad.</h1>
    <p class="page-description">
      Descubre cómo funciona la propiedad :key en las listas de Vue.
      Registra nuevos satélites o elimina los existentes para observar
      cómo se actualiza el catálogo.
    </p>

    <div class="key-info panel">
      <div class="key-icon">⌘</div>
      <div>
        <h2>¿Por qué necesitamos una key?</h2>
        <p>
          Cuando una lista cambia, Vue utiliza la clave para reconocer
          qué elemento se agregó, se eliminó o se modificó.
        </p>
      </div>
    </div>

    <form class="add-form" @submit.prevent="agregarSatelite">
      <label for="nombre-satelite">Registrar un nuevo satélite</label>
      <div class="form-controls">
        <input
          id="nombre-satelite"
          v-model="nuevoSatélite"
          type="text"
          placeholder="Ej. Voyager 1"
          maxlength="60"
        />
        <button type="submit" class="primary-button">
          + Agregar
        </button>
      </div>
    </form>

    <div class="list-heading">
      <div>
        <span class="page-label">BASE DE DATOS ORBITAL</span>
        <h2>Satélites registrados</h2>
      </div>
      <span class="counter">{{ satelites.length }} elementos</span>
    </div>

    <div v-if="satelites.length > 0" class="satellite-list">
      <article
        v-for="satelite in satelites"
        :key="satelite.id"
        class="satellite-card"
      >
        <div class="satellite-icon">✦</div>

        <div class="satellite-info">
          <h3>{{ satelite.nombre }}</h3>
          <p>{{ satelite.tipo }}</p>
          <code>:key="{{ satelite.id }}"</code>
        </div>

        <button
          type="button"
          class="delete-button"
          @click="eliminarSatelite(satelite.id)"
          :aria-label="'Eliminar ' + satelite.nombre"
        >
          Eliminar
        </button>
      </article>
    </div>

    <div v-else class="empty-state panel">
      <span>✧</span>
      <h3>No hay satélites registrados</h3>
      <p>Agrega un satélite para comenzar un nuevo registro.</p>
    </div>

    <div class="explanation-panel">
      <span class="page-label">EJEMPLO DE CÓDIGO</span>
      <h2>Una clave única por elemento</h2>

      <pre><code v-pre>&lt;article
  v-for="satelite in satelites"
  :key="satelite.id"
&gt;
  {{ satelite.nombre }}
&lt;/article&gt;</code></pre>

      <p>
        En este ejemplo, <code>v-for</code> recorre la lista y
        <code>:key="satelite.id"</code> asigna una clave única a cada
        elemento. Así Vue puede identificar los elementos de manera
        confiable cuando cambia la lista.
      </p>
      <p>
        La clave debe ser única dentro de esa lista y mantenerse asociada
        al mismo elemento. Por eso usamos un identificador en lugar de
        la posición del elemento.
      </p>
    </div>
  </section>
</template>

<style scoped>
.key-info {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-top: 32px;
}

.key-icon {
  display: grid;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 12px;
  background: #edf3ff;
  color: #356fe0;
  font-size: 26px;
}

.key-info h2,
.list-heading h2,
.explanation-panel h2 {
  margin: 0 0 8px;
  color: #172b4d;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 21px;
}

.key-info p,
.explanation-panel p {
  margin: 0;
  color: #66758c;
  font-size: 14px;
  line-height: 1.8;
}

.add-form {
  margin-top: 30px;
  padding: 22px;
  border: 1px solid #e4eaf3;
  border-radius: 14px;
  background: #fff;
}

.add-form label {
  display: block;
  margin-bottom: 12px;
  color: #43536c;
  font-size: 13px;
  font-weight: 700;
}

.form-controls {
  display: flex;
  gap: 10px;
}

.form-controls input {
  min-width: 0;
  flex: 1;
  padding: 11px 13px;
  border: 1px solid #dce4f0;
  border-radius: 9px;
  outline: none;
}

.form-controls input:focus {
  border-color: #477ee8;
}

.primary-button {
  white-space: nowrap;
}

.list-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin: 38px 0 18px;
}

.counter {
  padding: 6px 10px;
  border-radius: 7px;
  background: #edf3ff;
  color: #3566bd;
  font-size: 12px;
  font-weight: 700;
}

.satellite-list {
  display: grid;
  gap: 12px;
}

.satellite-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border: 1px solid #e4eaf3;
  border-radius: 13px;
  background: white;
}

.satellite-icon {
  display: grid;
  flex-shrink: 0;
  width: 43px;
  height: 43px;
  place-items: center;
  border-radius: 11px;
  background: #edf4ff;
  color: #477ee8;
  font-size: 23px;
}

.satellite-info {
  min-width: 0;
  flex: 1;
}

.satellite-info h3 {
  margin: 0 0 5px;
  color: #25334a;
  font-size: 15px;
  overflow-wrap: anywhere;
}

.satellite-info p {
  margin: 0 0 9px;
  color: #8290a5;
  font-size: 12px;
}

.satellite-info code {
  color: #3566bd;
  font-size: 11px;
}

.delete-button {
  padding: 8px 10px;
  border: 1px solid #f0dada;
  border-radius: 8px;
  background: #fff7f7;
  color: #b64c4c;
  font-size: 12px;
}

.delete-button:hover {
  background: #ffeded;
}

.empty-state {
  padding: 35px 20px;
  text-align: center;
}

.empty-state > span {
  color: #477ee8;
  font-size: 30px;
}

.empty-state h3 {
  color: #25334a;
}

.empty-state p {
  color: #8290a5;
  font-size: 13px;
}

.explanation-panel {
  margin-top: 28px;
  padding: 25px;
  border: 1px solid #e4eaf3;
  border-radius: 15px;
  background: white;
}

.explanation-panel h2 {
  margin-top: 9px;
}

.explanation-panel pre {
  overflow-x: auto;
  margin: 18px 0;
  padding: 18px;
  border-radius: 10px;
  background: #f2f6fc;
  color: #285dbb;
  font-size: 12px;
  line-height: 1.8;
}

.explanation-panel p + p {
  margin-top: 12px;
}

.explanation-panel p code {
  padding: 2px 5px;
  border-radius: 4px;
  background: #edf3ff;
  color: #285dbb;
}

@media (max-width: 600px) {
  .form-controls {
    flex-direction: column;
  }

  .list-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .satellite-card {
    align-items: flex-start;
    gap: 10px;
    padding: 14px;
  }

  .delete-button {
    align-self: center;
  }

  .key-info {
    flex-direction: column;
  }
}
</style>