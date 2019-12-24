<template>
  <div class="container-fluid">
    <h1 class="mt-3">Todos os usuários</h1>
    <hr>

    <div class="row">
      <div
        class="col-3"
        :key="item.id"
        v-for="item in usersList"
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
  name: 'Users',
  components: {
    SerieBox
  },
  mounted () {
    this.ActionGetUserslist()
  },
  computed: {
    ...mapState('users', ['usersList'])
  },
  methods: {
    ...mapActions('users', ['ActionGetUserslist'])
  }
}
</script>

<style>
</style>
