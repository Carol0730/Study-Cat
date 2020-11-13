<template lang="pug">
  div
    //a 計時任務：
    a-dropdown.w-50.p-3
      a.ant-dropdown-link {{currentProject}}
        a-icon(type="down")
      a-menu(slot="overlay")
        a-menu-item(v-for="p in Object.values(projects)" :key="p.name" :value="p.name" @click="switchProject") {{p.name}}
    br
    p
      img(src="@/assets/Group 29.png" width="300" height="300")
      .tomato-container
        .p1
          span
            p(style="font-size:100px;display:inline").font-weight-bold {{timerRunning ? Math.floor(timeLeft / 60) : workMinutes}}
            p(style="font-size:32px;display:inline") {{(timerRunning?(timeLeft % 60).toString().padStart(2, '0'):'00')}}
        p(style="opacity:0" ) haha
        //haha 不準刪
        .p2.font-weight-bold {{totalPomodoro}}
      a-space
        img(v-for="index in perCycle" :key="index" :style="{opacity: (index >= cyclePassed ? 0.2:1)}" src="@/assets/Group 24.png" width="36")
        //img(v-for="index in perCycle-cyclePassed" :key="index" src="@/assets/Group 24.png" width="30" )

    a-space(v-if="editingTime")
      a-slider(v-model="workMinutes" :max="60" :min="1" style="width: 300px;")
    p(v-if="editingTime")
      .buttonStart(@click="switchTimer") {{timerRunning ? '放棄' : '開始！'}}
    div(v-if="!timerRunning")
      .button(@click="editingTime = !editingTime") {{editingTime ? '調整完成':'調整時間'}}
      .button(@click="submitt") 儲存
</template>
<script>

export default {
  name: 'pomodoro-timer',
  components: {},
  props: {
    projects: {},
    user: Object
  },
  data() {
    return {
      timeLeft: 3,
      timerRunning: false,
      timer: null,
      currentProject: '日常瑣事',
      editingTime: false,
      workMinutes: 1,
      cyclePassed: 0,
      perCycle: 4
    }
  },
  computed: {
    totalPomodoro() {
      return Object.values(this.projects).reduce((o, n) => o + n.pomodoro, 0)
    },
    currentPomodoro() {
      const currentProject = this.projects[this.currentProject] ?? {pomodoro: 0}
      return currentProject.pomodoro
    }
  },
  methods: {
    switchTimer() {
      this.timerRunning = !(this.timerRunning)
      console.log("Switch Timer")
      if (this.timerRunning) {
        this.timeLeft = this.workMinutes * 60
        this.timer = setInterval(() => {
          this.timeLeft -= 1
          console.log("Tick", this.timeLeft)
          if (this.timeLeft < 0) {
            console.log("Stop Timer")
            this.timeLeft = this.workMinutes * 60
            clearInterval(this.timer)
            this.timerRunning = !(this.timerRunning)
            const newProjects = {...this.projects}
            newProjects[this.currentProject].pomodoro += 1
            this.cyclePassed += 1
            this.$emit('update:projects', newProjects)
          }
        }, 1000)
      } else {
        this.timeLeft = this.workMinutes * 60
        clearInterval(this.timer)
      }
    },
    switchProject({key}){
      this.currentProject = key
    },
    submitt() {
      const data = {
        userr: this.user.name,
        studytime: this.workMinutes,
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
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>
