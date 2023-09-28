import tasks from './tasks.js';
import addTask from './addTask.js';

export default {
    components:{
        tasks,
        addTask,
    },
    template:
        `
        <tasks title='in progress' :list='inProgress'></tasks>
        <tasks title='completed' :list="complet"></tasks>
        <addTask v-on:add="add">  </addTask>
        `,
    methods: {
        add(e){

            this.listTasks.push({
                name:e,
                complete:false,
                id:this.listTasks.length,
            });
        }
    },
    data(){
        return {

            listTasks:[
                {name:"white letter",complete:false,id:1},
                {name:"read letter",complete:false,id:2},
                {name:"finish project",complete:false,id:3},
            ],
        }
    },
    computed:{
        inProgress () {
            return  this.listTasks.filter(task=>!task.complete);},  
        complet (){
            return this.listTasks.filter(task=>task.complete);}
    }
    
}