<script setup lang="ts">
import logo from "@/assets/img/logo.png";
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/">
    <img :src="logo" alt="Site logo" width="140" height="40" />
  </RouterLink>
</template>
