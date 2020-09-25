<template>
  <div id="app">
    <h1 style="text-align: center ">{{ text }}</h1>
    <button id="task" @click="onLick">任務</button>
    <button id="tomato" @click="onLick2">番茄鐘</button>
    <br/>
    <br/>
    <div>
      <select id="subject_lists" v-model=the_target style="background:palevioletred;color:white;font-size:20px;" @change="change_target">
<!--        <option v-for="(thing,index) of sl" :value="thing.name" :key="index"/>-->
        <option v-for="(thing,index) of sl" :key="index">{{thing.name}}</option>
      </select>
    </div>


    <div v-show="text2==='two'">
      <div>
        <p>{{ Math.floor(timeRemaining / 60) }} : {{ timeRemaining % 60 }}</p>
        <img alt="tomato" src="./assets/Group 25.png" width="300" height="300">
        <p>{{ total_tomato }}</p>
      </div>
      <div>
        <button id="start&stop" @click="start_study">{{ start_text }}</button>
      </div>
      <!--      <img alt="Vue logo" src="./assets/logo.png">-->
    </div>
    <div v-show="text2==='one'">
      <input type="text" id="new_subject" v-model=subject_name @keydown.enter="add_subject_into_list">
      <ul>
        <li v-for="(object,index) of sl" :key="index">
          <hr/>{{object.name}}<img style="text-align: center" alt="tomato" src="./assets/Group 24.png" width="30" height="30">{{object.count}}
          <span v-show="task_set===true"><button @click="change_number=index">修改</button><button @click="delete_task(index)">刪除</button></span>
          <div v-show="change_number===index">
            <input type="text" v-model=change_subject_name @keydown.enter="change_subject_name_in_list(index)">
          </div>
        </li>
      </ul>
      <hr/>
      <button @click="task_setting">task_setting</button>
      <br/>
      <br/>

    </div>
    <setting_time :text2="text2" :study_time.sync="study_time" :relax_time.sync="relax_time"/>
    <div>
      <button id="setting" @click="setting_window_click" v-show="text2!=='three'">setting</button>
    </div>
<!--    <div>-->
<!--      <a href="https://www.youtube.com/?gl=TW&hl=zh-TW">This is a Link</a>-->
<!--    </div>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import setting_time from "./Setting_time";

export default {
  name: 'App',
  components: {
    setting_time
    // HelloWorld
  },
  data() {
    return {
      start_text: 'start',
      text: 'Study Cat',
      text2: 'one',
      timeRemaining: 10,
      timeRemaining_relax: 3,
      study_time: 10,
      relax_time: 3,
      total_tomato: 0,
      // tomato: 0,
      study_timer: null,
      relax_timer: null,
      // ],{ name： '任務名稱' , }
      sl : [],
      list_count: 0,
      subject_name: null,
      select: null,
      option: null,
      task_set: false,
      the_target: null,
      change_subject_name: null,
      change_number: false,
      original_tomato_index: -1
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
        // this.tomato += 1
        this.total_tomato += 1
        this.sl[this.original_tomato_index].count = this.total_tomato
      }
    },
    relax_starting() {
      this.timeRemaining -= 1
      if (this.timeRemaining === -1) {
        this.timeRemaining = 10
        clearInterval(this.relax_timer)
      }
    },
    add_subject_into_list() {
      // this.select = document.getElementById("subject_lists")
      // this.option = document.createElement('option')
      // this.option.text = this.subject_name
      // this.select.add(this.option)
      this.sl.push({
        name: this.subject_name,
        count: 0
      })
      // this.list_count++
      this.subject_name = null
    },
    task_setting() {
      this.task_set = !(this.task_set)
    },
    delete_task(index) {
      this.sl.splice(index,1)
      console.log(index,this.sl)
      this.task_set = false
    },
    change_subject_name_in_list(index) {
      this.sl[index].name = this.change_subject_name
      this.change_number = -1
      this.task_set = false
    },
    change_target() {
      console.log(this.the_target)
      for(let i = 0; i<this.sl.length; i++)
      {
        if(this.sl[i].name ===  this.the_target)
        {
          if(this.original_tomato_index !== -1)
            this.sl[this.original_tomato_index].count = this.total_tomato
          this.original_tomato_index = i
          this.total_tomato = this.sl[i].count
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
