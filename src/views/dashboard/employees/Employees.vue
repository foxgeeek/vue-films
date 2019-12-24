<template>
  <div class="container-fluid">
    <h1 class="mt-3">Todos os funcionários</h1>
    <hr>

    <div class="row">
      <div
        class="col-3"
        :key="item.id"
        v-for="item in employeesList"
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
  name: 'Employees',
  components: {
    SerieBox
  },
  mounted () {
    this.ActionGetEmployeeslist()
  },
  computed: {
    ...mapState('employees', ['employeesList'])
  },
  methods: {
    ...mapActions('employees', ['ActionGetEmployeeslist'])
  }
}
</script>

<style>
</style>
