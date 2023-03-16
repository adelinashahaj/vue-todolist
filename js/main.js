

const { createApp } = Vue

createApp({
  data() {
    return {
        newtask: '',
      tasklist: [
        {
            text: 'Compiti',
            done: false
        },
        {
            text: 'La spesa',
            done: false
        },
        {
            text: 'Pulire la casa',
            done: true
        }
       
      ]
    }
   
  },
  methods: {
    remuveTask(index){
        this.tasklist.splice(index, 1);
    },
    addTask(){
        let newelemetTask =   {
            text: this.newtask,
            done: true
        }
         this.tasklist.unshift(newelemetTask);
         this.newtask = '';
    }
}
}).mount('#app')