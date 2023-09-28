export default {
    
    template:`
    <div>
            <form @submit.prevent="add">
            <input type="text" v-model="newTask">
            <button type="submit">ADD</button>
            </form>
    </div>`,
    methods:{
        add(){
            console.log(this.newTask);
            this.list.push({
                name:this.newTask,
                complete:false,
                id:this.list.length,
            });
        }
    },
    data(){
        return{
            newTask:"",
        }
    },
    props:{
        list:{
            type:Array,
        }
    }
}