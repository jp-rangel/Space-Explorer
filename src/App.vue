<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Condicionales', path: '/condicionales' },
  { name: 'v-show', path: '/v-show' },
  { name: 'v-for', path: '/v-for' },
  { name: 'v-bind:key', path: '/v-bind-key' },
]
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink to="/" class="brand">
        <span class="brand-icon">✦</span>
        <span>Space Explorer</span>
      </RouterLink>

      <nav class="navigation" aria-label="Navegación principal">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ active: route.path === link.path }"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="footer">
      <p>Space Explorer · Un viaje por Vue 3</p>
    </footer>
  </div>
</template>