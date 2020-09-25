<template lang="pug">
  div
    p
      a-select.w-100.p-3(v-model="currentProject")
        a-select-option(v-for="p in Object.values(projects)" :key="p.name" :value="p.name") {{p.name}}
    p
      a-card
        p {{Math.floor(timeLeft / 60)}} : {{(timeLeft % 60)}}
        p 這個專案的番茄數{{currentPomodoro}}
        p 總番茄數{{totalPomodoro}}
    p
      a-button(@click="switchTimer") {{timerRunning ? 'PAUSE' : 'START'}}
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
            }
        }
    }
</script>
