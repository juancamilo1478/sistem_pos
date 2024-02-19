<template>
  <h1>ponga los datos de user</h1>
</template>
<script>
import axios from "../../../axiosInstance";
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      
      userdata: [],
      
    }
  },
  methods: {
   async loaduser(){
    const response = await axios.get('users/data')
    this.userdata=response.data.data
 
    }
  },
  async mounted() {
   
  this.loaduser();
  },
};
</script>
