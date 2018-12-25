
<style lang="scss">
</style>

<template>
  <div id="app">
    <appLayout v-if="$route.path!=='/login'"></appLayout>
    <template v-else>
        <router-view></router-view>
    </template>
  </div>
</template>


<script>
import layout from "components/layout/layout.vue";
export default {
  components: {
    appLayout:layout
  }
}
</script>

