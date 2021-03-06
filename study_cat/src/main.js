import Vue from 'vue';
import Antd from 'ant-design-vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'ant-design-vue/dist/antd.css';
import App from './App';
import {router} from './routes'

import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import swal from "sweetalert2";

Vue.use(Antd);


Vue.config.productionTip = false;

var pomodoroDoneAudio = new Audio(require('@/assets/work_done.mp3'))
var restDoneAudio = new Audio(require('@/assets/rest_done_sound.mp3'))
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

const store = new Vuex.Store({
    state: {
        pomoSession: {
            timerBegun: null,
            currentProject: '日常瑣事',
            workMinutes: 1,
            restMinutes: 1,
            perCycle: 4,
            cyclePassed: 0,
        },
        projects: {'日常瑣事': {name: '日常瑣事', pomodoro: 0}},
    },
    getters: {
        isWorkCycle(state) {
            return state.pomoSession.cyclePassed % 2 === 0
        },
        currentTimerSecondsLeft(state) {
            const isWorkCycle = state.pomoSession.cyclePassed % 2 === 0
            const timerFullInterval = (isWorkCycle ? state.pomoSession.workMinutes : state.pomoSession.restMinutes) * 60;
            return timerFullInterval
        }
    },
    mutations: {
        updatePomoSession(state, newPomoSession) {
            console.log(newPomoSession)
            state.pomoSession = {...state.pomoSession, ...newPomoSession,}
            console.log(state.pomoSession.workMinutes)
        },
        updateProjects(state, newProjects) {
            state.projects = newProjects
        },
        nextPomo(state) {
            state.pomoSession.cyclePassed += 1
            state.pomoSession.cyclePassed %= state.pomoSession.perCycle * 2
            state.pomoSession.timerBegun = null
        },
        onPomoDone(state) {
            state.pomoSession.timerBegun = null
            state.pomoSession.cyclePassed += 1
            state.pomoSession.cyclePassed %= state.pomoSession.perCycle * 2
            console.log("Stop Timer")
            if (state.pomoSession.cyclePassed % 2 == 0) {
                restDoneAudio.play()
                swal.fire({
                    icon: 'success',
                    title: '',
                    html: '休息結束囉！再接再厲！',
                    confirmButtonText: '確定',
                }).then(function () {
                    restDoneAudio.pause();
                    restDoneAudio.currentTime = 0
                })

                return null
            }

            const currentProjectObject = state.projects[state.pomoSession.currentProject]
            if (currentProjectObject) {
                var newProjects = {[currentProjectObject.name]: currentProjectObject}
                newProjects[currentProjectObject.name].pomodoro += 1
                pomodoroDoneAudio.play();
                if (newProjects[currentProjectObject.name].pomodoro === 1) {
                    swal.fire({
                        icon: 'success',
                        title: '',
                        html: '恭喜你收集到第一顆番茄！右下角小番茄是<b>今日總共收集的番茄</b>～科目蒐集到的番茄可以在<b>任務</b>中查詢喔',
                        confirmButtonText: '確定',
                    }).then(function () {
                        pomodoroDoneAudio.pause();
                        pomodoroDoneAudio.currentTime = 0
                    })
                } else {
                    swal.fire({
                        icon: 'success',
                        title: '',
                        html: '恭喜你又收集到一顆番茄！為自己掌聲鼓勵！',
                        confirmButtonText: '確定',
                    }).then(function () {
                        pomodoroDoneAudio.pause();
                        pomodoroDoneAudio.currentTime = 0
                    })

                }
                state.projects = newProjects
            } else {
                console.error("Project name not found!")
            }

        },
        addProject(state, project) {
            Vue.set(state.projects, project.name, project)
        }
    }
})
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
