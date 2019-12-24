<template>
  <div class="container-fluid">
    <h1 class="mt-3">Todos os métodos de pagamentos</h1>
    <hr>

    <div class="row">
      <div
        class="col-3"
        :key="item.id"
        v-for="item in paymentsList"
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
  name: 'Payments',
  components: {
    SerieBox
  },
  mounted () {
    this.ActionGetPaymentslist()
  },
  computed: {
    ...mapState('payments', ['paymentsList'])
  },
  methods: {
    ...mapActions('payments', ['ActionGetPaymentslist'])
  }
}
</script>

<style>
</style>
