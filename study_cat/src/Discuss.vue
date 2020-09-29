<template lang="pug">
  div
    a-dropdown.w-50.p-3
      a.ant-dropdown-link {{browsingSubject}}
        a-icon(type="down")
      a-menu(v-for="p in Object.values(projects)" :key="p.name"  slot="overlay")
        a-menu-item(:value="p.name" @click="browsingSubject=p.name") {{p.name}}
    a-card
      span wow

</template>
<script>
export default {
  name: 'discuss',
  props: {
    projects: {}
  },
  data(){
    return{
      browsingSubject: '無任務'
    }
  }
}
</script>
