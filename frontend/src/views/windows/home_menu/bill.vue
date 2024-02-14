<template>
  <div
    style="width: 100%; min-height: 100vh; overflow-y: auto; max-height: 100vh"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
          <h1>cuenta #{{ $route.params.id }}</h1>
        </div>
        <div class="col-lg-9 text text-right" style="position: relative">
          <!-- <button
            type="button"
            class="btn btn-light"
            @click="modalfilterbutton"
          >
            <i class="bi bi-funnel" style="margin: 5px"></i>filtros
          </button> -->
          <button
            type="button"
            class="btn btn-primary"
            @click="addmodalproduct"
          >
            <i class="bi bi-plus-circle-fill" style="margin: 5px"></i>Agregar
            producto
          </button>
        </div>
      </div>
    </div>

    <!-- MODAL ADD PRODUCT -->
    <div
      class="modal"
      v-if="modaladdproduct"
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
              @click="addmodalproduct"
            >
              Salir
            </button>
          </div>
          <div class="modal-body">
            <!-- body modal  -->
            <div class="col-lg-12 row m-2">
              <h2 class="col-lg-3">Nombre:</h2>
              <input type="text" class="form-control col-lg-9 text-right" />
            </div>

            <div class="col-lg-12 row m-2">
              <h2 class="col-lg-3">categoria:</h2>
              <input type="text" class="form-control col-lg-9 text-right" />
            </div>
            <div class="col-lg-12 row m-2">
              <h2 class="col-lg-3">ciudad:</h2>
              <input type="text" class="form-control col-lg-9 text-right" />
            </div>
            <!-- end modal -->
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
            <button type="button" class="btn btn-primary" @click="filterdata">
              Filtrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../../axiosInstance";
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      modaladdproduct: false,
      databill: [],
      currentPageproduct:1,
      totalpageproduct:1,
      products:[],
      filters: {
        name: "",
        category: "",
      },
    };
  },
  methods: {
   async selectmodal(modalselect) {
    await  this.resetmodal();
     await this.loadproducts();
      this.modal = modalselect;
    },
    async createbill() {
      const self = this;
      if (this.username !== "") {
        if (response.status === 200) {
          toast.success("creado correctamente", {
            autoClose: 1000,
          });
          self.funtionProp("actives");
        }
      } else {
        toast.error("no tiene nombre de cliente", {
          autoClose: 1000,
        });
      }
    },
    resetmodal(){
      this.currentPageproduct=1;
      this.filters={
        name: "",
        category: "",
      }
      this.totalpageproduct=1;
    },
    addmodalproduct() {
      this.modaladdproduct = !this.modaladdproduct;
    },
    async loadproducts() {
      let filter = "";
    
      let page = `pageNumber=${this.currentPage}&`;
      if (typeof this.filters === "object") {
        for (const key in this.filters) {
          if (this.filters[key] !== "") {
            filter += `${key}=${this.filters[key]}&`;
          }
        }
      }
  
      const response = await axios.get(`products/get?${page}${filter}`);
      this.products = response.data.products;
      this.currentPageproduct = response.data.currentPage;
      this.totalpageproduct = response.data.totalPages;
 
    },
  },
  async mounted() {
    const response = await axios.get("bills/billId/" + this.$route.params.id);
    this.databill = response.data.data;
    console.log(response);
  },
};
</script>
