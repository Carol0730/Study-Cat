<template lang="pug">
  div
    a-list(:data-source="Object.values(projects)")
      a-list-item(slot="renderItem" slot-scope="item")
        a-list-item-meta
          div(slot="title")
            a(v-if="editingProjectName!==item.name" ) {{item.name}}
            a-input(v-else v-model="editingProjectNewName" @keyup.enter="commitEdit") {{item.name}}
        p(v-if="editingProjectName!==item.name")
          a-button(@click="setEditingProjects(item)") 修改
          a-button(@click="deleteProject(item)") 刪除
        p(v-else)
          a-button(@click="commitEdit") 完成


    p
      .input(v-model="newProjectName" placeholder="想新增什麼科目呢？" @keyup.enter="addProjects")
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



</style>