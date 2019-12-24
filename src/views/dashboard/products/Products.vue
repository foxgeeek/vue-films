<template>
  <div class="container-fluid">
    <h1 class="mt-3">Todos os produtos</h1>
    <hr>

    <div class="row">
      <div
        class="col-3"
        :key="item.id"
        v-for="item in productsList"
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
  name: 'Products',
  components: {
    SerieBox
  },
  mounted () {
    this.ActionGetProductslist()
  },
  computed: {
    ...mapState('products', ['productsList'])
  },
  methods: {
    ...mapActions('products', ['ActionGetProductslist'])
  }
}
</script>

<style>
</style>
