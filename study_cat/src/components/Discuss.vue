<template lang="pug">
  div.container.d-flex.justify-content-center.bg-white
    div.w-100(style="max-width:400px")
      a-dropdown.w-50
        a.ant-dropdown-link {{browsingSubject}}
          a-icon(type="down")
        a-menu(slot="overlay")
          a-menu-item(v-for="p in Object.values(projects)" :key="p.name" :value="p.name" @click="switchProject") {{p.name}}

      br
      br
      a-space(align="start")
        .d-flex.align-items-center(@click="browsingDiscussStatus='all'")
          img(src="@/assets/Star 6.png" width="15" height="15")
          span.ml-1 問題

        a-divider(type="vertical")
        a(@click="switchDiscussStatus('unsolved')") 待解決
        a-divider(type="vertical")
        a(@click="switchDiscussStatus('solved')") 已解決
      a-card(v-for="discuss in discusses" :key="discuss.content + discuss.author").w-100.p-3.mt-2.text-left
        div.d-flex.align.w-100(align="start" style="width: 100%")
          a-space.text-center(direction="vertical")
            a-avatar
            span {{discuss.author}}
            button.btn-solved(v-show="discuss.author === user.name" @click="discuss.status = discuss.status==='solved'? 'unsolved':'solved'") {{discuss.status==='solved'? '未解決':'已解決'}}
          div.ml-2(style="width: calc(100% - 50px)")
            //span {{{unsolved:'待解決', solved:'已解決'}[discuss.status]}}
            a-card.box.w-100 {{discuss.content}}
        a-divider.operation-zone(orientation="left")
          a-space(align="end")
            span {{discuss.star.length}}
            a-button(type="link" @click="starDiscuss(discuss)")
              a-icon(type="star" :theme="discuss.star.includes(user.name)?'filled':'outlined'" )
            span {{discuss.comments.length}}
            a-button(icon="message" type="link")
        div.mb-3.w-100(v-for="comment of discuss.comments" :key="JSON.stringify(comment)")
          div.d-flex.align.w-100(align="start" style="width: 100%")
            a-space(direction="vertical")
              a-avatar
              span.box {{comment.author}}
            div.ml-2(style="width: calc(100% - 50px)")
              a-card {{comment.content}}


          a-textarea( v-model="sendingComment" placeholder="你的評論..." :autoSize="true")
          button.sendC(type="link" @click="addComment(discuss)") 送出評論
            a-icon(type="enter")
      div.position-relative.mt-3
        a-textarea( v-model="sendingDiscussContent" placeholder="縮縮你的問題..." :autoSize="true")
        button.sendQ(type="link" @click="addDiscuss") 送出問題
          a-icon(type="enter")
      button(id="demo3" @click="showAlert")



</template>
<script>
import swal from 'sweetalert2'
export default {
  name: 'discuss',
  props: {
    projects: {},
    user: {}
  },
  data() {
    return {
      sendingDiscussContent:'',
      sendingComment:'',
      browsingSubject: '無任務',
      browsingDiscussStatus: 'all',
      hintsStatus:false,
      subjectDiscuss: {
        '無任務': [
          {
            content: '哈哈',
            status:'unsolved',
            time: '2020',
            author: 'Annoy',
            star: ["a"],
            comments: [
              {author: "Annoy2", content: "wh"}
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
        comments: []
      })
      this.sendingDiscussContent = ''
    },
    addComment(discuss){
      discuss.comments.push({
        content: this.sendingComment,
            author: this.user.name,
      })
      this.sendingComment = ''
    },
    switchProject({key}){
      this.browsingSubject = key
    },
    switchDiscussStatus(status){
      this.browsingDiscussStatus = status
      if(status === 'unsolved'){
          swal.fire({
            title: '',
            icon: 'question',
            html: '確定解決這題問題了嗎？',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '確定',
            cancelButtonText:
                '取消',
          })
          // this.hintsStatus = true
        }
      },
      showAlert() {
        swal.fire({
          icon: 'question',
          title: '',
          html:
              '確認解決這題問題了嗎？',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:
              '確定',
          cancelButtonText:
              '取消',
        })
      }
    },
}
</script>

<style>
.ant-card-bordered {
  border: 1px solid #AB9872;
  border-radius: 6px;
  margin-bottom:5px;
}

/*.align{*/
/*  text-align: left;*/
/*}*/

.box {
  /*width:230px;*/
  height:100px;
}

.btn-solved{
  height: 25px;
  width: 50px;
  padding: 0 2px;
  border-radius: 6px;
  border:1px solid #AB9872;
  background-color: white;
  cursor: pointer;
  margin-top:-20px;
}

.ant-avatar {
  width:42px;
  height:42px;
}

.ant-card-body {
  padding: 6px;
  zoom: 1;
}

.commitWord {
  word-wrap: break-word;
}

.ant-btn-link {
  color: #76643E;
}
.ant-dropdown-link {
  color: #76643E;
}

a:hover {
  color: #1890ff;
}
/*::selection {*/
/*  color: #fff;*/
/*  background: #76643E;*/
/*}*/

.sendC{
  position:absolute;
  right:28px;
  margin:4px 0 0 0;
  border:none;
  border-radius: 8px;
  background-color:#FBE9C6;
  color:#76643E;
}

.sendQ{
  position:absolute;
  right:5px;
  margin:4px 0 0 0;
  border:none;
  border-radius: 8px;
  background-color:#FBE9C6;
  color:#76643E;
  font-size: 14px;
}
</style>