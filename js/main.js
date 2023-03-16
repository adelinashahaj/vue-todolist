

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
  }
}).mount('#app')