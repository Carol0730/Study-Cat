<template lang="pug">
  div.container
    a-list(:data-source="Object.values(projects)")
      a-list-item(slot="renderItem" slot-scope="item")
        a-list-item-meta
          div(slot="title")
            p(v-if="editingProjectName!==item.name" ) {{item.name}}
            a-input(v-else v-model="editingProjectNewName" @keyup.enter="commitEdit") {{item.name}}
        p(v-if="editingProjectName!==item.name")
          button.buttonTaskSetting.buttonEdit(@click="setEditingProjects(item)") 修改
          button.buttonTaskSetting.buttonDelete(@click="deleteProject(item)") 刪除
        p(v-else)
          button.buttonTaskSetting.buttonEdit(@click="commitEdit") 完成


    p
      input.input(v-model="newProjectName" placeholder="想新增什麼科目呢？" @keyup.enter="addProjects")
      a-button(@click="addProjects" icon="plus" shape="circle")
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
      const newProjects = {...this.projects}
      newProjects[this.editingProjectNewName] = newProjects[this.editingProjectName]
      newProjects[this.editingProjectNewName].name = this.editingProjectNewName
      delete newProjects[this.editingProjectName]
      this.$emit('update:projects', newProjects)
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
.ant-input{
  width: 580px;
  border-radius: 10px;
  padding: 16px 16px !important;
  margin: 8px 0 !important;
}
.input,select {
  width: 40%;
  height: 15px;
  padding: 16px 16px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}
.buttonTaskSetting {
  position: relative;
  right:10%;
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
}

.buttonEdit{
  background-color:#7F9BD2;
}
.buttonDelete{
  background-color:#EB8D8D;
}

</style>