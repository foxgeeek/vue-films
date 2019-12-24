<template>
  <div class="container-fluid">
    <h1 class="mt-3">Todos os cargos</h1>
    <hr>

    <div class="row">
      <div
        class="col-3"
        :key="item.id"
        v-for="item in rolesList"
      >
        <serie-box :serie="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SerieBox from '@/components/SerieBox'
export default {
  name: 'Roles',
  components: {
    SerieBox
  },
  mounted () {
    this.ActionGetRoleslist()
  },
  computed: {
    ...mapState('roles', ['rolesList'])
  },
  methods: {
    ...mapActions('roles', ['ActionGetRoleslist'])
  }
}
</script>

<style>
</style>
