export default{

    template:`
    <li>
    <label>
    {{data.name}}
    <input type="checkbox" v-model="data.complete"/>
    </label>
    </li>
    `,
    props:{
      data:Object  
    }

} 