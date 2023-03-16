

const { createApp } = Vue

createApp({
  data() {
    return {
        
      tasklist: [
        {
            text: 'erert',
            done: false
        },
        {
            text: 'rrtr',
            done: false
        },
        {
            text: 'rrthzth',
            done: false
        }
       
      ]
    }
   
  },
  methods: {
    remuveTask(index){
        this.tasklist.splice(index, 1);


    }
}
}).mount('#app')