<template>
  <div>
    NewHome
  </div>
</template>

<script>
export default {
  name: 'newHome',

  data() {
    return {
      
    };
  },
  created(){
    this.getData()
  },

  mounted() {
    

  },

  methods: {
    getData(){
      console.log('getDatagetDatagetDatagetDatagetDatagetDatagetData')
      this.$store.dispatch('global/getD',{name:'jiafeimao'})
    }
    
  },
};
</script>