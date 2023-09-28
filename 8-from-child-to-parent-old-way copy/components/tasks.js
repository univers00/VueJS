import task from './task.js';


export default{
    components:{
        task
    },
    template:`
    <section v-show="list.length">
                <h1> {{title}} </h1>
                <ul>
                        <task v-for="obj in list" :data="obj" :key="obj.id">
                            
                            </task>
                </ul>
    </section>
    `,
    props:{
            title:{
                type:String,
            },
            list:{
                type:Array,
            }
    }
}