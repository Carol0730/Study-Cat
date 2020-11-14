<template lang="pug">
  div#app
    p
      img(src="@/assets/Group 26.png" width="208" height="61")
    div.mx-auto(class="d-flex justify-content-center" style="max-width: 300px").mb-3
      router-link.nav-btn(to="/pomodoro" :class="{'nav-btn-active':$router.currentRoute.path==='/pomodoro'}") 番茄鐘
      router-link.nav-btn(to="/projects" :class="{'nav-btn-active':$router.currentRoute.path==='/projects'}") 任務
      router-link.nav-btn(to="/discuss"  :class="{'nav-btn-active':$router.currentRoute.path==='/discuss'}" ) 筆記/討論
    a-divider
    router-view(:key="$route.fullPath" :projects.sync="projects" :user="user")

    //a-button(:href="loginURL" type="link") Line 登入

    div.d-flex.flex-column.fab-buttons
      //a-button(type="circle" icon="global" size="large").mb-2.fab-btn
      a-button(type="circle" icon="setting" size="large" @click="showSetting=true").fab-btn

    a-modal(title="設定"
      :visible="showSetting"
      @ok="showSetting=false"
      @cancel="showSetting=false")
      p 我的姓名
      a-input(v-model="user.name")


</template>

<script>
import PomodoroTimer from "./components/PomodoroTimer";
import TasksList from "./components/TasksList";
import Discuss from "@/components/Discuss";

import axios from 'axios'
import oauth from 'axios-oauth-client'

const tokenConfig = {
  url: 'https://api.line.me/oauth2/v2.1/token',
  grant_type: 'authorization_code',
  client_id: '1655016607',
  client_secret: '9a2ae7335f215fc00dac198546b2a25e',
  redirect_uri: 'http://localhost:8080',
  scope: 'baz',
}
export default {
  name: 'App',
  components: {Discuss, TasksList, PomodoroTimer},
  data() {
    return {
      section: 'discuss',
      projects: {'日常瑣事': {name: '日常瑣事', pomodoro: 0}},
      user: {
        name: '無名氏'
      },
      showSetting: false,
      loginURL: "https://access.line.me/oauth2/v2.1/authorize" +
          "?response_type=code&client_id=1655016607&state=123&scope=profile%20openid&redirect_uri=http://localhost:8080"

    }
  },
  async mounted() {

    if (this.code !== null) {
      tokenConfig.code = this.code
      const getAuthorizationCode = oauth.client(axios.create(), tokenConfig)
      this.user.token = await getAuthorizationCode()

      const token = this.user.token.access_token

      const getProfileOptions = {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
        url: 'https://api.line.me/v2/profile'
      }

      const profileResp = await axios(getProfileOptions)
      console.log(profileResp.data)
      this.$message.success(`你已登入為 ${profileResp.data.displayName}`)
      this.user = {...(this.user), ...(profileResp.data)}

    }
  },
  computed: {
    link() {
      return new URLSearchParams(window.location.search)
    },
    code() {
      return this.link.get('code')
    },
  }
}
</script>

<style>

/* 導覽列按鈕 */
.nav-btn {
  width: 25%;
  height: 40px;
  line-height: 36px;
  cursor: pointer;
  color: #76643E !important;
  font-size: 16px;
  text-align: center;
  text-decoration: none !important;
  font-weight:bolder;
  border: 2px solid transparent;
}
.nav-btn-active {
  border-radius: 16px;
  border: 2px solid #AB9872;
  background-color: #FBE9C6;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 0 0 0 rgba(0,0,0,0.19);
}

.button {
  border-radius: 16px;
  font-weight: bold;
  background-color: #FBE9C6;
  border: 2px solid #AB9872;
  color: #76643E;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 6px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  font-weight: bold;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 0 0 0 rgba(0,0,0,0.19);
}
.buttonStart {
  border-radius: 10px;
  background-color: #FBE9C6;
  border: 2px solid #AB9872;
  color: #DB5D2B;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 10px;
  cursor: pointer;
  width: 100px;
  height: min-content;
  font-weight: bold;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 0 0 0 rgba(0,0,0,0.19);
}
.buttonSetting {
  position: absolute;
  left:calc(50% + 50px);
  background: none;
  border: none;
  box-shadow: none;
  display: inline-block;
  margin: 4px 10px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
.tomato-container {
  position: relative;
}
.p1 {
  position: absolute;
  top: -650%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: white;
}
.p2 {
  position: absolute;
  left: calc(50% + 119px);
  bottom: 50px;
  transform: translateX(-50%);
  font-size: 18px;
  color: white;
}
.ant-select-selection{
  border-radius:16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.fab-buttons {
  position: fixed;
  bottom: 24px;
  right: 16px;
}
.fab-btn {
  color: #799BD7
}
.fab-btn, .fab-btn:hover, .fab-btn:focus {
  background-color: #DBE9F3
}

</style>
