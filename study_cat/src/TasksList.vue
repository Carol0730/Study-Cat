<template lang="pug">
  div.container
    div(v-for="item in Object.values(projects)")
      a-space
        div
          span(v-if="editingProjectName!==item.name") {{item.name}}
          input.input1(v-else v-model="editingProjectNewName" @keyup.enter="commitEdit")
        div(v-if="editingProjectName!==item.name")
          span {{item.pomodoro}}
          button.buttonEdit(@click="setEditingProjects(item)") 修改
          button.buttonDelete(@click="deleteProject(item)") 刪除
        div(v-else)
          button.buttonEdit(@click="commitEdit") 完成


    div
      input.input(v-model="newProjectName" placeholder="想新增什麼科目呢？" @keyup.enter="addProjects")
      button.buttonEdit(@click="addProjects" icon="plus" shape="circle") ＋
</template>
<script>
export default {
  name: 'tasks-list',
  props: {
    projects: {}
  },
  data() {
    return {
      newProjectName: '',
      editingProjectName: null,
      editingProjectNewName: ''
    }
  },
  methods: {
    addProjects() {
      const projectName = this.newProjectName
      const newProject = {
        name: projectName,
        pomodoro: 0,
      }
      this.$emit('update:projects', {...(this.projects), [projectName]: newProject})
    },
    setEditingProjects(project) {
      if(this.editingProjectName){
        this.commitEdit()
      }
      this.editingProjectName = project.name
      this.editingProjectNewName = project.name
    },
    commitEdit() {
      if(this.editingProjectName !== this.editingProjectNewName){
        const newProjects = {...this.projects}
        newProjects[this.editingProjectNewName] = newProjects[this.editingProjectName]
        newProjects[this.editingProjectNewName].name = this.editingProjectNewName
        delete newProjects[this.editingProjectName]
        this.$emit('update:projects', newProjects)
      }
      this.editingProjectName = null
    },
    deleteProject(project){
      const newProjects = {...this.projects}
      delete newProjects[project.name]
      this.$emit('update:projects', newProjects)
    }
  }
}
</script>

<style>

.buttonAdd{
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

.input {
  width: 40%;
  height: 15px;
  padding: 16px 16px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}
.input1 {
  width: 40%;
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
</style>