<template lang="pug">
  div
    p
      a-select.w-100.p-3(v-model="currentProject")
        a-select-option(v-for="p in Object.values(projects)" :key="p.name" :value="p.name") {{p.name}}
    p
      img(src="./assets/Group 29.png" width="300" height="300")
      .tomato-container
        .p1 {{Math.floor(timeLeft / 60)}} : {{(timeLeft % 60)}}
        p 這個專案的番茄數{{currentPomodoro}}
        .p2 {{totalPomodoro}}
    p
      .buttonStart(@click="switchTimer") {{timerRunning ? 'PAUSE' : 'START'}}
      .button(@click="submitt") 儲存
      //.button(@click="section='setting_time'") 設定
      //setting_time(:projects.sync="projects" v-show="section==='setting_time'")
</template>
<script>
import Setting_time from "./Setting_time";
export default {
  name: 'pomodoro-timer',
  components: {Setting_time},
  props: {
    projects: {}
  },
  data() {
    return {
      timeLeft: 3,
      timerRunning: false,
      timer: null,
      currentProject: null
    }
  },
  computed:{
    totalPomodoro(){
      return Object.values(this.projects).reduce((o,n) => o + n.pomodoro, 0)
    },
    currentPomodoro(){
      const currentProject = this.projects[this.currentProject] ?? {pomodoro:0}
      return currentProject.pomodoro
    }
  },
  methods: {
    switchTimer() {
      this.timerRunning = !(this.timerRunning)
      console.log("Switch Timer")
      if (this.timerRunning) {
        this.timer = setInterval(() => {
          this.timeLeft -= 1
          console.log("Tick", this.timeLeft)
          if(this.timeLeft < 0){
            console.log("Stop Timer")
            this.timeLeft = 3
            clearInterval(this.timer)
            this.timerRunning = !(this.timerRunning)
            const newProjects = {...this.projects}
            newProjects[this.currentProject].pomodoro += 1
            this.$emit('update:projects', newProjects)
          }
        }, 1000)
      } else {
        clearInterval(this.timer)
      }
    },
      submitt(){
        const data={
          studytime: this.timeLeft,
          relaxtime: this.relax_time,
          subject: this.projects
          //User
          //學習時間
          //休息時間
          //科目
          //對應番茄顆數
        }
        console.log(JSON.stringify(data))

        fetch('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbyFou-FpZLBIQN5cASfPse1XfCtKcnTJaHh-raHf8b9f6OHyro1/exec',
            {
              method: "POST",
              body: JSON.stringify(data),
              headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              })
            }).then(res => res.json())
            .catch(error => console.error('Error: ', error))
            .then(response => console.log('Success: ', response))
      }
    }
}
</script>