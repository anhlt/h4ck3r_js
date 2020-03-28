<template>
  <div class="columns is-mobile">
    <section>
      <b-field label="Name">
        <b-input v-model="userRegisterInfo.nickname"></b-input>
      </b-field>
      <b-field label="Email">
        <b-input type="email" v-model="userRegisterInfo.email" maxlength="30">
        </b-input>
      </b-field>
      <b-field label="Username">
        <b-input v-model="userRegisterInfo.username" maxlength="30"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input v-model="userRegisterInfo.password" type="password" maxlength="30"></b-input>
      </b-field>
      <div class="field">
        <button v-on:click="submit" class="button is-success">
          Register
        </button>
      </div>
    </section>
  </div>
</template>
<script lang="ts" src="./UserRegisterForm.ts">
</script>
