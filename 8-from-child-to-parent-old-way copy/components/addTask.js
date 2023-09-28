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
            
            this.$emit("add",this.newTask);
            console.log('TEST');
            this.newTask = "";
            }
    },
    data(){
        return{
            newTask:"",
        }
    },

}