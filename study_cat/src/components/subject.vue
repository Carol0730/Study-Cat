<template>
  <div>

    <hr/>
    <span>
    <span>{{ subjects }}</span>
    <img style="text-align: center" alt="tomato" src="./assets/Group 24.png" width="30"
         height="30">
    <span>{{ different_tomato }}</span>
  </span>
  </div>
</template>

<script>
export default {
  name: "subject",
  props: ['subjects', 'different_tomato']
}
</script>

<style scoped>

</style>