<script setup lang="ts">

</script>

<template>
  <header class="header">
    <nav class="header__navigation container">
      <!-- logo -->
      <NuxtLink
        :to="{ name: 'index' }"
        class="md:mr-8 header__menu-logo"
      >
        <img
            src="../public/logos/gutscheine_de.png"
            width="116"
            height="56"
            alt="gutscheine_de logo"
        />
      </NuxtLink>
    </nav>
  </header>
</template>

<style lang="sass">

</style>