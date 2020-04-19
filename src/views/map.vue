<template>
  <div class="map">
    <div class="map" style="text-align :center">
      <iframe
        width="600"
        height="500"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="http://j.map.baidu.com/s/qNMIFb"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.map {
  width: 100vw;
  height: 100vh;
  position: relative;
  iframe {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
}
</style>