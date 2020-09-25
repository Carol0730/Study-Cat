<template>
  <div id="app">
    <p><img src="./assets/Group 26.png" width="208" height="61"></p>
<!--    <h1 style="text-align: center ">{{ text }}</h1>-->
    <button class="button button3" id="task" @click="onLick">任務</button>
    <button class="button button3" id="tomato" @click="onLick2">番茄鐘</button>
    <br/>
    <br/>
    <div>
      <select id="subject_lists" style="background:palevioletred;color:white;font-size:20px;">
        <!--   <option v-for="s of subject_lists" :key="s" value="1">英文單字7000</option>-->
        <!--        <option value="2">微積分</option>-->
      </select>
    </div>


<!--    番茄-->
    <div v-show="text2==='two'">
      <div class="tomato-container">
        <p class="p1">{{ Math.floor(timeRemaining / 60) }} : {{ timeRemaining % 60 }}</p>
        <img alt="tomato" src="./assets/Group 29.png" width="300" height="300">
        <p class="p2">{{ total_tomato }}</p>
        <div>
          <button class="buttonSetting" id="setting" @click="setting_window_click" v-show="text2!=='three'"><img src="./assets/Group 30.png" width="45px" height= "45px"></button>
        </div>
      </div>
      <div>
        <button class="buttonStart button3" id="start&stop" @click="start_study">{{ start_text }}</button>
      </div>
      <!--      <img alt="Vue logo" src="./assets/logo.png">-->
    </div>
<!--    任務-->
    <div v-show="text2==='one'">
      <input type="text" id="new_subject" v-model=subject_name @keydown.enter="add_subject_into_list">
<!--      <div>{{subject_name}}</div>-->
<!--      <button id="subject_adding" @click="add_subject">add</button>-->
<!--            <hr/>-->
<!--            <span>-->
<!--              <span style="text-align: center">英文單字7000</span>-->
<!--              <img style="text-align: center" alt="tomato" src="./assets/Group 24.png" width="30" height="30">-->
<!--              <span>{{ tomato }}</span>-->
<!--            </span>-->
<!--            <hr/>&lt;!&ndash;產生水平線 &ndash;&gt;-->
      <list subjects = "英文單字7000" different_tomato = "0"></list>
      <!--      <span style="text-align: left">微積分</span>-->
      <!--      <img style="text-align: center" alt="tomato" src="./assets/Group 24.png" width="30" height="30">-->
      <!--      <span>{{ tomato }}</span>-->
      <!--      <hr/>-->
      <!--      <img src="./assets/S__983043.jpg" height="500" width="500"/>-->
    </div>
    <setting_time :text2="text2" :study_time.sync="study_time" :relax_time.sync="relax_time"/>
<!--    <div>-->
<!--      <button class="buttonSetting" id="setting" @click="setting_window_click" v-show="text2!=='three'"><img src="./assets/Group 30.png" width="45px" height= "45px"></button>-->
<!--    </div>-->
<!--    <div>-->
<!--      <a href="https://www.youtube.com/?gl=TW&hl=zh-TW">This is a Link</a>-->
<!--    </div>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import setting_time from "./Setting_time";
import Vue from 'vue'

export default {
  name: 'App',
  components: {
    setting_time
    // HelloWorld
  },
  data() {
    return {
      start_text: 'START',
      text: 'Study Cat',
      text2: 'one',
      timeRemaining: 10,
      timeRemaining_relax: 3,
      study_time: 10,
      relax_time: 3,
      total_tomato: 0,
      tomato: 0,
      study_timer: null,
      relax_timer: null,
      subject_lists: [],
      list_count: 0,
      subject_name: null,
      select: null,
      option: null
    }
  },
  methods: {
    onLick() {
      console.log("this.text2 = 'one'")
      console.log(this.study_time)
      console.log(this.relax_time)
      this.text2 = 'one'
      this.timeRemaining = this.study_time
      this.timeRemaining_relax = this.relax_time
    },
    onLick2() {
      console.log("this.text2 = 'two'")
      console.log(this.study_time)
      console.log(this.relax_time)
      this.text2 = 'two'
      this.timeRemaining = this.study_time
      this.timeRemaining_relax = this.relax_time
    },
    setting_window_click() {
      console.log("this.text2 = 'two'")
      this.text2 = 'three'
    },
    start_study() {
      console.log("start_study")
      this.study_timer = setInterval(this.study_starting, 1000)
    },
    study_starting() {
      this.timeRemaining -= 1
      if (this.timeRemaining === -1) {
        this.timeRemaining = this.relax_time
        clearInterval(this.study_timer)
        this.relax_timer = setInterval(this.relax_starting, 1000)
        this.tomato += 1
        this.total_tomato += 1
      }
    },
    relax_starting() {
      this.timeRemaining -= 1
      if (this.timeRemaining === -1) {
        this.timeRemaining = 10
        clearInterval(this.relax_timer)
      }
    },
    // add_subject() {
    //   this.subject_name = document.getElementById("new_subject").value
    //   console.log(this.subject_name)
    //   this.select = document.getElementById("subject_lists")
    //   this.select.add(this.subject_name, this.list_count)
    //   this.list_count++
    // },
    add_subject_into_list() {
      console.log(this.subject_name)
      this.select = document.getElementById("subject_lists")
      this.option = document.createElement('option')
      this.option.text = this.subject_name
      this.select.add(this.option, this.list_count)
      this.subject_lists[this.count] = this.subject_name
      this.list_count++

    }

  }
}
Vue.component('list',{
  template:'<hr/><span><span>{{subjects}}</span><img style="text-align: center" alt="tomato" src="./assets/Group 24.png" width="30" height="30"><span>{{different_tomato}}</span></span>',
  props:['subjects,different_tomato']
})
// var vm = new Vue({
//   el: '#app',
//   data :{
//     currentView : 'list'
//   }
// })
</script>

<style>
.button {
  background-color: #FBE9C6;
  border: 2px solid #AB9872;
  color: #76643E;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
  margin: 4px 10px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  font-weight: bold;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 0 0 0 rgba(0,0,0,0.19);
}
.buttonStart {
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
.button3 {border-radius: 16px;}

.tomato-container {
  position: relative;
}

.p1 {
  position:absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: white;
}
.p2 {
  position: absolute;
  left: calc(50% + 118px);
  bottom: -5px;
  transform: translateX(-50%);
  font-size: 18px;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
