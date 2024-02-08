

<template>
  <!-- nav bar -->
  <div>
    <div class="container-fluid mt-5">
      <div class="row g-0 text-center">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-3">
              <h3 style="font-size: 1rem;">SENA</h3>
            </div>
            <div class="col-lg-3">
              <div>
                <h3>Quienes somos?</h3>
              </div>
            </div>
            <div class="col-lg-3">
              <h3>Contactanos</h3>
            </div>
            <div class="col-lg-3">
              <h3>Socios</h3>
            </div>
          </div>
        </div>
        <div v-if="login===false" class="col-lg-6"><button type="button" class="btn btn-light">Ingresar</button><router-link to="/register"><button type="button" class="btn btn-dark" style="border-radius: 10px;">Crear cuenta</button></router-link></div>
        <div v-else class="col-lg-6"><router-link to="/menu"><button type="button" class="btn btn-dark" style="border-radius: 10px;">Mi menu</button></router-link></div>
      </div>
    </div>
    <div class="container col-lg-10 mt-5 pb-5">
      <div class="row">
        <div class="col-lg-6 mt-5">
          <div class="col-lg-10">
          <h1 style="font-weight: bold; font-size: 2.2rem;">Sistema pos sena</h1>
      
          <p class="mt-5">
            Un sistema de punto de venta (POS) es una herramienta esencial en entornos comerciales, permitiendo realizar transacciones de ventas de manera eficiente. Compuesto por hardware y software, un POS facilita el proceso de compra al integrar funciones como escaneo de productos, gestión de inventario, y procesamiento de pagos.
          </p>
        </div>
        </div>
        <div class="col-lg-6 text-center">
          <img src="../images/menu_1.jpg" alt="imagen1"  style="width: 250px;border-radius: 10px;"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script >

  export default {
  data() {
    return {
      user:null,
      login:false
    };
  },
  mounted() {
   this.user= this.$store.getters.currentUser;
   this.login= this.$store.getters.isLoggedIn;
   console.log(this.user);
   console.log(this.login);
  },
  methods: {
    
    
  },
};
 
</script>