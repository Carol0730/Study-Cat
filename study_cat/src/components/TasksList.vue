<template lang="pug">
  div.container.d-flex.justify-content-center
    div.w-100.mt-2(style="max-width:400px")
      div.list-item.d-flex.align-items-center(v-for="item in Object.values(projects)")
        div.flex-grow-1
          p.m-0.pl-2.text-left(v-if="editingProjectName!==item.name") {{item.name}}
          input.input1.w-100(v-else v-model="editingProjectNewName" @keyup.enter="commitEdit")
        div.ml-2(v-if="editingProjectName!==item.name")
          span.d-flex(v-if="!editingProject").containerTomatoNum
            span.font-weight-bold.pTomato {{item.pomodoro}}
            img(src="@/assets/little tomato.png" width="30" height="30")
          div(v-else)
            button.font-weight-bold.buttonEdit(@click="setEditingProjects(item)") 修改
            button.font-weight-bold.buttonDelete(@click="deleteProject(item)") 刪除
        div(v-else)
          button.font-weight-bold.buttonEdit(@click="commitEdit") 完成

      div.d-flex.align-items-center
        input.input.flex-grow-1(v-model="newProjectName" placeholder="想新增什麼科目呢？" @keyup.enter="addProjects")
        button.font-weight-bold.buttonAdd(v-show="newProjectName.length !== 0" @click="addProjects" icon="plus" shape="circle") ＋
        button.w-25.font-weight-bold.buttonAdd(@click="editingProject=!editingProject" icon="plus" shape="circle") {{editingProject?'完成':'編輯'}}
</template>
<script>
import swal from "sweetalert2";
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'tasks-list',
  props: {
    pomodoroStatus: {}
  },
  data() {
    return {
      newProjectName: '',
      editingProjectName: null,
      editingProjectNewName: '',
      editingProject: false,
      firstTimeAddProject: true
    }
  },
  computed: {
    ...mapState({
      projects: state => state.projects
    }),
  },
  methods: {
    ...mapMutations(['addProject', 'updateProjects']),
    addProjects() {
      if (this.firstTimeAddProject) {
        this.firstTimeAddProject = false
        swal.fire({
          icon: 'info',
          title: '',
          html: '新增的任務可以在<b>番茄鐘</b>及<b>討論版/筆記</b>中選取喔！',
          confirmButtonText:
              '確定',
        })
      }
      const projectName = this.newProjectName
      const newProject = {
        name: projectName,
        pomodoro: 0,
      }
      this.addProject(newProject)
      this.newProjectName = ''
    },
    setEditingProjects(project) {
      if (this.editingProjectName) {
        this.commitEdit()
      }
      this.editingProjectName = project.name
      this.editingProjectNewName = project.name
    },
    commitEdit() {
      if (this.editingProjectName !== this.editingProjectNewName) {
        const newProjects = {...this.projects}
        newProjects[this.editingProjectNewName] = newProjects[this.editingProjectName]
        newProjects[this.editingProjectNewName].name = this.editingProjectNewName
        delete newProjects[this.editingProjectName]
        this.updateProjects(newProjects)
      }
      this.editingProjectName = null
    },
    deleteProject(project) {
      const newProjects = {...this.projects}
      delete newProjects[project.name]
      this.updateProjects(newProjects)
    }
  }
}
</script>

<style>
.containerTomatoNum{
  position: relative;
  margin: 0 8px 0 0;
}
.list-item {
  margin: auto;
  padding: 10px;
  margin-bottom:-1px ;
  border-top: 1px solid #AB9872;
  border-bottom: 1px solid #AB9872;
}

.buttonAdd{
  background-color: #FBE9C6;
  border: 2px solid #AB9872;
  position: relative;
  right:0;
  display: inline-block;
  cursor: pointer;
  width: 50px;
  height: 30px;
  border-radius: 10px;
  color:#76643E;
  /*border: #8B6C2A;*/
  padding-top: 3px;
  padding-bottom: 5px;
  margin: 2px 4px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 0 0 0 rgba(0,0,0,0.19);
  /*background-color:#7F9BD2;*/
}

.input {
  /*width: 40%;*/
  color:#76643E;
  height: 15px;
  padding: 16px 16px;
  margin: 24px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}
.input1 {
  /*width: 40%;*/
  color:#76643E;
  height: 15px;
  padding: 16px 14px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}
.task-container{
  position:relative;
}
.buttonEdit{
  position: relative;
  right:0;
  display: inline-block;
  cursor: pointer;
  width: 50px;
  height: 30px;
  border-radius: 10px;
  color:white;
  border: none;
  padding: 5px;
  margin: 2px 4px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 0 0 0 rgba(0,0,0,0.19);
  background-color:#7F9BD2;
}
.buttonDelete{
  position: relative;
  right:0;
  display: inline-block;
  cursor: pointer;
  width: 50px;
  height: 30px;
  border-radius: 10px;
  color:white;
  border: none;
  padding: 5px;
  margin: 2px 4px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 0 0 0 rgba(0,0,0,0.19);
  background-color:#EB8D8D;
}
.pTomato{
  color:white;
  position: absolute;
  right:36%;
  top:22%;
}
</style>
