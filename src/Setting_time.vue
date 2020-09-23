<template>
  <div v-show="text2==='three'">
    <br/>
    <br/>
    <div>
      <button id="add_study_minute" @click="study_minute_up">up</button>
      <button id="add_study_second" @click="study_second_up">up</button>
    </div>
    <div>
      <p>專注時間 {{ Math.floor(study_time / 60) }} : {{ study_time % 60 }}</p>
    </div>
    <div>
      <button id="Subtraction_study_minute" @click="study_minute_down">down</button>
      <button id="Subtraction_study_second" @click="study_second_down">down</button>
    </div>
    <br/>
    <br/>
    <div>
      <button id="add_relax_minute" @click="relax_minute_up">up</button>
      <button id="add_relax_second" @click="relax_second_up">up</button>
    </div>
    <div>
      <p>休息時間 {{ Math.floor(relax_time / 60) }} : {{ relax_time % 60 }}</p>
    </div>
    <div>
      <button id="Subtraction_relax_minute" @click="relax_minute_down">down</button>
      <button id="Subtraction_relax_second" @click="relax_second_down">down</button>
    </div>
    <br/>
    <br/>
  </div>
</template>
<script>
export default {
  name: 'setting_time',
  props: {
    text2: {},
    study_time: {},
    relax_time: {}
  },
  methods: {
    study_minute_up() {
      this.$emit('update:study_time', this.study_time + 60 )
    },
    study_second_up() {
      this.$emit('update:study_time', this.study_time + 1 )
    },
    study_minute_down() {
      if (this.study_time >= 60){
        this.$emit('update:study_time', this.study_time - 60 )
      }

    },
    study_second_down() {
      if (this.study_time >= 1)
        this.$emit('update:study_time', this.study_time - 1 )
    },
    relax_minute_up() {
      this.$emit('update:relax_time', this.relax_time + 60 )
    },
    relax_second_up() {
      this.$emit('update:relax_time', this.relax_time + 1 )
    },
    relax_minute_down() {
      if (this.relax_time >= 60)
        this.$emit('update:relax_time', this.relax_time - 60 )
    },
    relax_second_down() {
      if (this.relax_time >= 1)
        this.$emit('update:relax_time', this.relax_time - 1 )
    }

  }
}
</script>
