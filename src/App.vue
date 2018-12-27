<template>
<div >
  <h1>Hello World!</h1>
  <div>{{vue}}</div>
  <div>123456</div>
</div>
</template>

<script>
  export default {
    name: 'App',
    data(){
        return{
            vue:"这是进行测试"
        }
    }
  }
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
</style>
