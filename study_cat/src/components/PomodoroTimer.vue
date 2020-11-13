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
          span()
            p(@click="workMinutes = 1/60" style="font-size:100px;display:inline").font-weight-bold
              | {{Math.floor(currentTimerSecondsLeft / 60)}}
            p(style="font-size:32px;display:inline")
              | {{(currentTimerSecondsLeft % 60).toString().padStart(2, '0')}}
        p(style="opacity:0" ) haha
        //haha 不準刪
        .p2.font-weight-bold {{totalPomodoro}}
      a-space
        img(v-for="index in perCycle" :key="index" :style="{opacity: (index > cyclePassed ? 0.2:1)}" src="@/assets/Group 24.png" width="36")
        //img(v-for="index in perCycle-cyclePassed" :key="index" src="@/assets/Group 24.png" width="30" )

    a-space(v-if="editingTime")
      a-slider(v-model="workMinutes" :max="60" :min="1" style="width: 300px;")
    p(v-if="editingTime")
      .buttonStart(@click="switchTimer") {{timerRunning ? '放棄' : '開始！'}}
    div(v-if="!timerRunning")
      .button(@click="editingTime = !editingTime") {{editingTime ? '調整完成':'調整時間'}}
      .button(@click="submitt") 儲存
    button(id="demo3" @click="showAlert")

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
      timerBegun: null,
      now: Date.now(),

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
    timerRunning() {
      return this.timerBegun !== null
    },
    currentTimerSecondsLeft() {
      if (this.timerBegun) {
        const timePassed = (this.now - this.timerBegun) / 1000
        console.log(timePassed)
        const timeLeft = parseInt(this.workMinutes * 60 - timePassed)
        this.isTimeout()

        return timeLeft
      } else {
        return parseInt(this.workMinutes * 60)
      }
    }
  },
  methods: {
    isTimeout() {
      var timeLeft = -1
      if (this.timerBegun) {
        const timePassed = (this.now - this.timerBegun) / 1000
        timeLeft = parseInt(this.workMinutes * 60 - timePassed)
      } else {
        return false
      }

      const timeout = timeLeft < 0
      if (timeout) {
        console.log("Stop Timer")
        this.timerBegun = null
        const newProjects = {...this.projects}
        const currentProjectObject = newProjects[this.currentProject]
        if (currentProjectObject) {
          if (newProjects[this.currentProject].pomodoro === 0) {
            swal.fire({
              icon: 'success',
              title: '',
              html: '恭喜你搜集到第一顆番茄！右下角小番茄是<b>今日搜集</b>的番茄顆數，番茄也會依照科目顯示在<b>任務列表</b>～',
              confirmButtonText:
                  '確定',
            })
          }
          newProjects[this.currentProject].pomodoro += 1
          this.$emit('update:projects', newProjects)
        } else {
          console.error("Project name not found!")
        }
        this.cyclePassed += 1
      }
      return timeout
    },
    switchTimer() {
      console.log("Switch Timer")
      if (!this.timerRunning) {
        this.timerBegun = Date.now()
      } else {
        this.timerBegun = null
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
        title: '',
        icon: 'warning',
        html:
            '確定要離開嗎？半途而廢就搜集不到這顆番茄了喔！' ,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            '確定',
        cancelButtonText:
            '取消',
      })
    }
  },
  mounted() {
    this.timeLeft = this.workMinutes * 60
  },
  created() {
    var self = this;
    setInterval(function () {
      self.now = Date.now()
    }, 1000)
  },
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>
