<template>
<div id='app'>
   <div id="cover"></div>
   <APP_Header></APP_Header>
      <APP_Todo></APP_Todo>
   <APP_Footer></APP_Footer>


  
</div>
</template>

<script>
    // 引入header.vue组件
    import APP_Header from './layout/header.vue';
    // 引入footer.jsx组件
    import APP_Footer from './layout/footer.jsx';
    // // 引入todo.vue组件
    import APP_Todo from './view/todo/todo.vue';
  export default {
    name: 'App',
    data(){
        return{
            vue:"这是进行测试"
        }
    },
    components:{
      APP_Header,
      APP_Footer,
      APP_Todo
    }
  }
</script>

<style lang="stylus" scoped>

  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
     #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

    #cover {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #555
        opacity 0.5
        z-index -1
    }
</style>
