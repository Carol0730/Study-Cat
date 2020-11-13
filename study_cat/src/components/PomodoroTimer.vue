<template lang="pug">
  div
    a-dropdown.w-50.p-3
      a.ant-dropdown-link {{currentProject}}
        a-icon(type="down")
      a-menu(slot="overlay")
        a-menu-item(v-for="p in Object.values(projects)" :key="p.name" :value="p.name" @click="switchProject") {{p.name}}
    p
      img(src="@/assets/Group 29.png" width="300" height="300")
      .tomato-container
        .p1 {{timerRunning ? Math.floor(timeLeft / 60) : workMinutes}} : {{(timerRunning?timeLeft % 60:0)}}
        p(style="opacity:0") haha
        //haha 不準刪
        .p2 {{totalPomodoro}}
    div(v-show="editingTime")
      a-slider(v-model="workMinutes" :max="60" :min="1")
    p
      .buttonStart(@click="switchTimer") {{timerRunning ? '放棄' : '開始！'}}
    div
      .button(@click="editingTime = !editingTime") {{editingTime ? '調整完成':'調整時間'}}
      .button(@click="submitt") 儲存
      //.button(@click="section='setting_time'") 設定
      //setting_time(:projects.sync="projects" v-show="section==='setting_time'")
    button(id="demo2" @click="showAlert")
</template>
<script>
import swal from 'sweetalert2'

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
      currentProject: '微積分',
      editingTime: false,
      workMinutes: 25,
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
            if(newProjects[this.currentProject].pomodoro === 1){
              swal.fire({
                icon: '',
                title: '',
                text: '這裡搜集的番茄會顯示在目標列表中～',
                confirmButtonText:
                    '確定',
              })
            }
            newProjects[this.currentProject].pomodoro += 1
            this.$emit('update:projects', newProjects)
          }
        }, 1000)
      } else {
        this.timeLeft = this.workMinutes * 60
        clearInterval(this.timer)
      }
    },
    switchProject({key}) {
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
    },
    showAlert() {
      swal.fire({
        icon: '',
        title: '',
        text: '這裡搜集的番茄會顯示在目標列表中～',
        confirmButtonText:
            '確定',
      })
    }
  }
}
</script>
<style>

</style>
