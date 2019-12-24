<template>
  <div class="container-fluid">
    <h1 class="mt-3">Todos os clients</h1>
    <hr>

    <div class="row">
      <div
        class="col-3"
        :key="item.id"
        v-for="item in clientsList"
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
  name: 'Clients',
  components: {
    SerieBox
  },
  mounted () {
    this.ActionGetClientslist()
  },
  computed: {
    ...mapState('clients', ['clientsList'])
  },
  methods: {
    ...mapActions('clients', ['ActionGetClientslist'])
  }
}
</script>

<style>
</style>
