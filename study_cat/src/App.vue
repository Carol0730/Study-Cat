<template lang="pug">
  div#app
    p
      img(src="./assets/Group 26.png" width="208" height="61")
    p
      a-space
        .button(@click="section='tasks'") 番茄鐘
        .button(@click="section='pomodoro'") 任務
    pomodoro-timer(:projects.sync="projects" v-if="section==='tasks'")
    tasks-list(:projects.sync="projects" v-else-if="section==='pomodoro'")

</template>

<script>
import PomodoroTimer from "./PomodoroTimer";
import TasksList from "./TasksList";
export default {
  name: 'App',
  components: {TasksList, PomodoroTimer},
  data(){
    return{
      section:'tasks',
      projects:{},
    }
  }
}
</script>

<style>
.button {
  border-radius: 16px;
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
  border-radius: 16px;
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
  position:absolute;
  top: -650%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: white;
}
.p2 {
  position: absolute;
  left: calc(50% + 118px);
  bottom: 50px;
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
