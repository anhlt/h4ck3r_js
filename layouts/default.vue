<template>
  <div>
    <NavBar></NavBar>
    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>
<script>

import NavBar from '~/components/navigation_bar/NavBar'

export default {

  components: {
    NavBar
  },
  data() {
    return {
      items: [{
          title: 'Home2',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        },
      ]
    }
  }
}

</script>
