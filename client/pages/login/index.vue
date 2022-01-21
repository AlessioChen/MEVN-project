<template>
  <div>
      <h1>Login</h1>
    <button @click="auth.login"></button>    
  </div>
</template>


<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';

const auth = useAuthStore()


</script>
