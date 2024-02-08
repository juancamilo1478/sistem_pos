<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2" style="background: #f6f8f9; height: 100vh">
        <div class="container-fluid p-4 divoption" @click="selectOption('/homemenu')" >
          <i class="bi bi-house-door-fill icon" ></i>
          <h1>Home</h1>
        </div>
        <div class="container-fluid p-4 divoption" @click="selectOption('/suppliers')">
          <i class="bi bi-person-vcard-fill icon"></i>
          <h1>Provedores</h1>
        </div>
        <div class="container-fluid p-4 divoption" @click="selectOption('/inventarie')">
          <i class="bi bi-archive icon"></i>
          <h1>Inventario</h1>
        </div>
        <div class="container-fluid p-4 divoption" @click="selectOption('/perfil')" >
          <i class="bi bi-person-circle icon"></i>
          <h1>Perfil</h1>
        </div>
      </div>
      <div class="col-lg-10" style="background: #ffffff">
      <!-- this section is options -->  
        <inventarie v-if="option==='/inventarie'" />
        <datauser v-if="option==='/perfil'"/>
        <suppliers v-if="option==='/suppliers'"/>
        <homemenu v-if="option==='/homemenu'"/>
      </div>
    </div>
  </div>
</template> 
<script >
  import inventarie from './inventarie/inventarie.vue';
  import datauser from './perfil/datauser.vue';
  import suppliers from './suppliers/suppliers.vue';
  import homemenu from './home_menu/homemenu.vue';
  export default{
    components: {
      inventarie,
      datauser,
      suppliers,
      homemenu
  },
  data() {
    return {
      option: "/homemenu",
    };
  },
  methods: {
    selectOption(value){
      this.option=value;
    }
  },
};


</script>

<style >
.icon {
  padding-right: 5px;
  padding-bottom: 5px;
}
.divoption{
  display: flex; cursor: pointer;
  transition: 0.5s;
}
.divoption:hover{
  background: rgb(181, 181, 181);
  color: white;
}
</style>



