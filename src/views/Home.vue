<template>
  <div class="home">
    <h3>Vue.js</h3>
    <template v-if="!token">
      <van-button type="primary" @click="login" size="small">登录</van-button>
    </template>
    <template v-else>
      <div>
        <p>{{ token ? `已登录 Token: ${token}` : '未登录' }}</p>
        <van-button type="danger" @click="logout" size="small">退出登录</van-button>
      </div>
    </template>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  mounted () {
    console.log(this.token)
  },
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    login () {
      login({ username: '' }).then(res => {
        console.log(res)
      })
      this.$store.dispatch('Login', 'xxx.xxx.xxx')
    },
    logout () {
      this.$store.dispatch('LogOut')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  h3 {
    font-size: 24px;
  }
}
</style>
