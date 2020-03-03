<template>
  <form action="" class="box">
    <div class="field">
      <label for="" class="label">Email</label>
      <div class="control has-icons-left">
        <input v-model="userInfo.email" type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label for="" class="label">Password</label>
      <div class="control has-icons-left">
        <input v-model="userInfo.password" type="password" placeholder="*******" class="input" required>
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label for="" class="checkbox">
        <input v-model="userInfo.rememberMe" type="checkbox">
        Remember me
      </label>
    </div>
    <div class="field">
      <a @click="submitForm(userInfo)" class="button is-success">
        Login
      </a>
    </div>
  </form>
</template>
<script lang="ts" src="./LoginForm.ts">
</script>
