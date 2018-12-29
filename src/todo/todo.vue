<template>
    <div>
        <section class="real-app">
            <input type="text"   class="add-input"
               autofocus="autofocus"
               placeholder="接下来要做什么?"
               @keyup.enter="addTodo">
               <!-- 使用items组件 -->
               <Item :todo="todo"  v-for="todo in filteredTodos" :key="todo.id"  @del="deleteTodo" ></Item>
               <!-- Tab组件 -->
               <Tab :filter="filter"
                  :todos="todos"
                   @toggle="toggleFilter"
                    @clearAllCompleted="clearAllCompleted"
                  ></Tab>

        </section>
    </div>
</template>

<script>
import Tab from './tab.vue';
import Item from './item.vue';
let id=1;
    export default {
        data(){
            return{
                todos:[],
                filter:'all'
            }
        },
        computed:{
            filteredTodos(){
                if(this.filter=='all'){
                    return this.todos;
                } 
                const finish =this.filter==='finish';
        
                return this.todos.filter(todo=>finish===todo.finish);
            }
        },
        methods:{
            addTodo(e){
                if(e.target.value.replace(/\s+/g,"")===''){
                    //进行不为空判断去除空格
                    alert('妈卖批不能为空');
                    return false;
                }
                this.todos.unshift({
                    id:id++,
                    content:e.target.value.trim(),
                    finish:false
                });
                e.target.value="";

            },
            deleteTodo(id){
                this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
            },
            toggleFilter(state){
                this.filter=state;
            },
              clearAllCompleted(){
              this.todos =this.todos.filter(todo=>todo.finish===false)
            }
        },
        components:{
            Item,
            Tab
        }
    }
</script>

<style lang="stylus" scoped>
    .real-app {
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }  
    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>