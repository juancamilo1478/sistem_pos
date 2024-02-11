<template>
  <div
    style="width: 100%; min-height: 100vh; overflow-y: auto; max-height: 100vh"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
          <h1>Inventario</h1>
        </div>
        <div class="col-lg-9 text text-right" style="position: relative">
          <button
            type="button"
            class="btn btn-light"
            @click="modalfilterbutton"
          >
            <i class="bi bi-funnel" style="margin: 5px"></i>filtros
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addproductmodal"
          >
            <i class="bi bi-plus-circle-fill" style="margin: 5px"></i>Crear
            producto
          </button>
        </div>
      </div>
    </div>
    <!-- modal agregar producto -->

    <div
      class="modal"
      v-if="modalfilter"
      tabindex="-1"
      style="display: block; max-height: 80vh; overflow-y: auto"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Filtros</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="modalfilterbutton"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="loadproducts">
              Filtrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <modalAddproduct @cerrar="addproductmodal" v-if="addproduct" @load="loadproducts"/>
    <!-- table products -->
    <!-- <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">nombre</th>
          <th scope="col">categoria</th>
          <th scope="col">Inventario</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table> -->
    <div class="container">
      <div class="row">
        <div v-for="product in products" :key="product.id" class="">
          

          <div class="card m-3" style="width: 18rem; max-height: ; text-align: center; ">
            <h2 style="margin: 5px;">{{ product.name }}</h2>
  <img :src="product.Images?.[0]?.url" class="card-img-top" alt="..." style="width: 100%; max-height: 200px;">
  <div class="card-body">
    <p class="card-text">{{ product.description }}</p>
    <table class="table">
      <thead>
        <tr>    
          <th scope="col">categoria</th>
          <th scope="col">Inventario</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ product.category }}</td>
          <td>{{ product.store }}</td>     
        </tr> 
      </tbody>
    </table>
  </div>
</div>


        </div>
      </div>
    </div>
  </div>
</template>
<script >
import modalAddproduct from "./addproduct.vue";
import axios from "../../../axiosInstance";
export default {
  data() {
    return {
      addproduct: false,
      products: [],
      currentpage: 1,
      totalpage: 1,
      filters: {
        name: "",
        category: "",
      },
      modalfilter: false,
    };
  },
  methods: {
    modalfilterbutton() {
      this.modalfilter = !this.modalfilter;
    },
    selectOption(value) {
      this.option = value;
    },
    addproductmodal() {
      this.addproduct = !this.addproduct;
    },
    async loadproducts() {
      let filter = "";
      for (const key in this.filters) {
        if (this.filters[key] !== "") {
          filter[key] = this.filters[key];
          filter += `${key}=${this.filters[key]}&`;
        }
      }
      const response = await axios.get(`products/get?${filter}`);
      this.products = response.data.products;
      this.currentpage = response.data.currentPage;
      this.totalpage = response.data.totalPages;
    },
  },
  mounted() {
    this.loadproducts();
  },
  components: {
    modalAddproduct,
  },
};
</script>
<style >
.filtersmodel {
  width: 200px;
  border: solid black;
  border-radius: 10px;
  transform: translateX(-50%);
  background: white;
  position: absolute;
  z-index: 2;
  text-align: left;
}
</style>