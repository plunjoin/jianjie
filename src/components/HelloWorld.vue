<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p class="font-01">
      【見芥】成立於2013年，坐落離西湖最近的深山中。
      <br />“ 見 ” 即看見，關注，探索至洞察
    </p> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  font-size: 0.5rem;
}
</style>
