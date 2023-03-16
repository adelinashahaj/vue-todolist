

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
            done: false
        }
       
      ]
    }
   
  },
  methods: {
    removeTask(index){
        this.tasklist.splice(index, 1);
    },
    addTask(){
        let newelemetTask =   {
            text: this.newtask,
            done: true
        }
         this.tasklist.unshift(newelemetTask);
         this.newtask = '';
    },
    toggle(indice) {
        console.log(indice);
      
     if(!this.tasklist[indice].done == true ){
        this.tasklist[indice].done = true;
     } else {
        this.tasklist[indice].done = false;
    }
    
    }
    
}

}).mount('#app')