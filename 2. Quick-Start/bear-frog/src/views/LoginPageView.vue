<script setup lang="ts">
import { loginPageView } from "@/composables/views/loginPageView";

const { user, validateResult, handleLogin } = loginPageView();
</script>

<template>
  <div class="login-page">
    <slot name="header"></slot>

    <form class="login-form">
      <div class="form-group">
        <label for="id">ID:</label>
        <input
          v-model="user.id"
          @focus="() => (validateResult = true)"
          type="text"
          id="id"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          v-model="user.password"
          @focus="() => (validateResult = true)"
          type="password"
          id="password"
          required
        />
      </div>
      <button type="submit" @click.stop.prevent="handleLogin">Login</button>
    </form>
    <span id="inValidLogin" v-if="!validateResult">{{
      "로그인 정보가 유효하지 않아요!"
    }}</span>
  </div>
</template>

<style scoped>
#inValidLogin {
  color: red;
  font-weight: bold;
}
</style>
