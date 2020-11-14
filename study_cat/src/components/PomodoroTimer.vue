<template lang="pug">
  div
    //a 計時任務：
    a-dropdown.w-50.p-3
      a.ant-dropdown-link.font-weight-bold {{pomoSess.currentProject}}
        a-icon(type="down")
      a-menu(slot="overlay")
        a-menu-item.font-weight-bold(v-for="p in Object.values(projects)" :key="p.name" :value="p.name" @click="switchProject") {{p.name}}
    br
    p
      img(v-if="isWorkCycle === true" src="@/assets/work_pomodoro.png" width="300" height="300")
      img(v-else             src="@/assets/rest_pomodoro.png" width="300" height="300")
      .tomato-container
        .p1
          span()
            p(@click="setPomoSess({workMinutes: 3/60, restMinutes: 3/60})" style="font-size:100px;display:inline").font-weight-bold
              | {{Math.floor(currentTimerSecondsLeft / 60)}}
            p(style="font-size:32px;display:inline")
              | {{(currentTimerSecondsLeft % 60).toString().padStart(2, '0')}}
        p(style="opacity:0" ) haha
        //haha 不準刪
        .p2.font-weight-bold {{totalPomodoro}}
      a-space(align="baseline")
        span(v-for="index in pomoSess.perCycle * 2" :key="index" :style="{opacity: (index > pomoSess.cyclePassed + 1 ? 0.1:1)}" )
          img(v-if="index % 2 === 1" src="@/assets/small_work_pomo.png" width="36")
          img(v-else                 src="@/assets/rest_pomodoro.png" width="24")
        //img(v-for="index in perCycle-cyclePassed" :key="index" src="@/assets/Group 24.png" width="30" )

    a-space(v-if="editingTime")
      a-slider(v-model="pomoSess.workMinutes" :max="60" :min="1" style="width: 300px;")
    a-space(v-else)
      .buttonStart(v-if="isWorkCycle" @click="switchTimer") {{timerRunning ? '放棄' : '開始！'}}
      a-space(v-else)
        .buttonStart(@click="switchTimer") {{timerRunning ? '放棄' : '休息去！'}}
        .buttonStart(@click="nextPomo") 跳過休息

    div(v-if="!timerRunning && isWorkCycle")
      .button(@click="editingTime = !editingTime") {{editingTime ? '調整完成':'調整時間'}}
      .button(@click="submitt") 儲存
</template>
<script>
import swal from 'sweetalert2'
import {mapState, mapGetters, mapMutations} from 'vuex'
import axios from 'axios'

export default {
  name: 'pomodoro-timer',
  components: {},
  props: {
    user: Object
  },
  data() {
    return {
      now: Date.now(),
      editingTime: false
    }
  },
  computed: {
    ...mapState({
      pomoSess: state => state.pomoSession,
      projects: state => state.projects
    }),
    ...mapGetters({isWorkCycle: 'isWorkCycle', intervalTimer: 'currentTimerSecondsLeft'}),
    currentTimerSecondsLeft() {
      const timer = this.pomoSess.timerBegun;
      const timePassed = (this.now - timer) / 1000
      if (timer) {
        const timeLeft = Math.floor(this.intervalTimer - timePassed)
        console.log("Tick ", timeLeft)
        this.isTimeout()
        return timeLeft >= 0 ? timeLeft : 0
      } else {
        return Math.floor(this.intervalTimer)
      }
    },
    totalPomodoro() {
      return Object.values(this.projects).reduce((o, n) => o + n.pomodoro, 0)
    },
    timerRunning() {
      return this.pomoSess.timerBegun !== null
    },
  },
  methods: {
    ...mapMutations({
      setPomoSess: 'updatePomoSession',
      onPomoDone: 'onPomoDone',
      nextPomo: 'nextPomo'
    }),
    isTimeout() {
      var timeLeft = -1
      const begun = this.pomoSess.timerBegun;
      if (begun) {
        const timePassed = (this.now - begun) / 1000
        const workSecs = this.intervalTimer;
        timeLeft = Math.floor(workSecs - timePassed)
      } else {
        return false
      }

      const timeout = timeLeft < 0
      if (timeout) {
        this.onPomoDone()
      }
      return timeout
    },
    switchTimer() {
      const _this = this
      console.log("Switch Timer")
      if (this.timerRunning) {
        if (this.isWorkCycle) {
          swal.fire({
            title: '',
            icon: "warning",
            html: '確定要放棄嗎？半途而廢就搜集不到這顆蕃茄囉！',
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '放棄',
            cancelButtonText: '繼續專注'
          }).then(function (result) {
            if (result.isConfirmed) _this.setPomoSess({timerBegun: null})
          })
        } else {
          _this.setPomoSess({timerBegun: null})
        }
      } else {
        this.setPomoSess({timerBegun: Date.now()})
      }
    },
    switchProject({key}) {
      this.setPomoSess({currentProject: key})
    },
    submitt() {
      const postData = {'entry.1990721791': '無名氏', 'entry.880743640': JSON.stringify(this.projects)};
      axios.post('https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSccetvzM7NpL1rEBqHUEikTrvo9jDcFRlrdICze5g8tQy7yUg/formResponse',
          postData)
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
