<script setup lang="ts">
import { useUserStore } from "@/store";
import MainPageView from "@/views/MainPageView.vue";

const userStore = useUserStore();
</script>

<template>
  <div class="main-layout">
    <header>
      <h3>Welcome {{ userStore.user.id }}!</h3>
    </header>
    <main>
      <MainPageView />
    </main>
  </div>
</template>
