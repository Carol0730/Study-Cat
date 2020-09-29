<template lang="pug">
  div
    a-dropdown.w-50.p-3
      a.ant-dropdown-link {{browsingSubject}}
        a-icon(type="down")
      a-menu(slot="overlay")
        a-menu-item(v-for="p in Object.values(projects)" :key="p.name" :value="p.name" @click="switchProject") {{p.name}}

    br
    br
    a-space(align="start")
      a(@click="browsingDiscussStatus='all'")
        a-icon(type="star")
        |問題

      a-divider(type="vertical")
      a(@click="browsingDiscussStatus='unsolved'") 待解決
      a-divider(type="vertical")
      a(@click="browsingDiscussStatus='solved'") 已解決

    a-card(v-for="discuss in discusses" :key="discuss.toString()").w-100.p-3
      a-space.main-content(align="start")
        a-space(direction="vertical")
          a-avatar
          span {{discuss.author}}
        a-space(direction="vertical")
          //span {{{unsolved:'待解決', solved:'已解決'}[discuss.status]}}
          a-card.w-100.p-3 {{discuss.content}}
      a-divider.operation-zone(orientation="left")
        a-space(align="end")
          span {{discuss.star.length}}
          a-button(type="link" @click="starDiscuss(discuss)")
            a-icon(type="star" :theme="discuss.star.includes(user.name)?'filled':'outlined'" )
          span {{discuss.comments.length}}
          a-button(icon="message" type="link")
      a-space.comment(v-for="comment of discuss.comments" :key="JSON.stringify(comment)")
        a-space(direction="vertical")
          a-avatar
          span {{comment.author}}
        a-card
          p {{comment.content}}

    a-textarea( v-model="sendingDiscussContent" placeholder="縮縮你的問題..." :autoSize="true")
    a-button(type="link" @click="addDiscuss") 送出問題
      a-icon(type="up")



</template>
<script>
export default {
  name: 'discuss',
  props: {
    projects: {},
    user: {}
  },
  data() {
    return {
      sendingDiscussContent:'',
      browsingSubject: '無任務',
      browsingDiscussStatus: 'all',
      subjectDiscuss: {
        '無任務': [
          {
            content: '哈哈',
            status:'unsolved',
            time: '2020',
            author: 'Annoy',
            star: ["a"],
            comments: [
              {author: "Annoy2", content: "wow"}
            ]
          }]
      }
    }
  },
  computed: {
    discusses:{
      get(){

        var discuss = this.subjectDiscuss[this.browsingSubject]
        if(this.browsingDiscussStatus !== 'all'){
          discuss = discuss.filter((v) => v.status === this.browsingDiscussStatus)
        }
        return discuss
      },
      set(newValue){
        this.subjectDiscuss = newValue
      }
    }
  },
  methods:{
    starDiscuss(discuss){
      if(discuss.star.includes(this.user.name)){
        discuss.star.splice(discuss.star.indexOf(this.user.name), 1)
      }else{
        discuss.star.push(this.user.name)
      }
    },
    addDiscuss(){
      this.discusses.push({
        content: this.sendingDiscussContent,
            status:'unsolved',
            time: '2020',
            author: this.user.name,
            star: [],
            comments: [
        ]
      })
      this.sendingDiscussContent = ''
    },
    switchProject({key}){
      this.currentProject = key
    },
  }
}
</script>
