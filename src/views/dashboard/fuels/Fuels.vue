<template>
  <div class="container-fluid">
    <h1 class="mt-3">Todos as bombas de combustíveis</h1>
    <hr>

    <div class="row">
      <div
        class="col-3"
        :key="item.id"
        v-for="item in fuelsList"
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
  name: 'Fuels',
  components: {
    SerieBox
  },
  mounted () {
    this.ActionGetFuelslist()
  },
  computed: {
    ...mapState('fuels', ['fuelsList'])
  },
  methods: {
    ...mapActions('fuels', ['ActionGetFuelslist'])
  }
}
</script>

<style>
</style>
