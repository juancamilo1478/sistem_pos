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
            <h5 class="modal-title">Productos</h5>
            <div class="input-group mb-3">
              <span class="input-group-text ml-3" id="basic-addon1"
                >nombre</span
              >
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filtersProducts.name"
              />
              <button
                type="button"
                class="btn btn-primary ml-3"
                @click="loadproducts"
              >
                buscar
              </button>
            </div>

           
          </div>
          <nav
              aria-label="Page navigation example"
              v-if="products.length > 0"
            >
              <ul class="pagination">
                <li class="page-item" v-if="currentPageproduct !== 1">
                  <a
                    class="page-link"
                    href="#"
                    @click="goToPage(currentPageproduct - 1)"
                    >Previous</a
                  >
                </li>
                <li
                  class="page-item"
                  v-for="pageNumber in range(
                    currentPageproduct,
                    totalpageproduct
                  )"
                  :key="pageNumber"
                >
                  <a class="page-link" href="#" @click="goToPage(pageNumber)">{{
                    pageNumber
                  }}</a>
                </li>
                <li
                  class="page-item"
                  v-if="currentPageproduct !== totalpageproduct"
                >
                  <a
                    class="page-link"
                    href="#"
                    @click="goToPage(currentPageproduct + 1)"
                    >Next</a
                  >
                </li>
              </ul>
            </nav>
          <div class="modal-body">
            <!-- body modal  -->
            <div class="container">
              <!-- table suppliers -->
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">imagen</th>
                    <th scope="col">cantidad</th>
                    <th scope="col">disponible</th>
                    <th scope="col">agregar</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Corrección: Cambiar <tdbody> a <tbody> -->
                  <tr v-for="product in products" :key="product.id">
                    <td scope="row">
                      <img
                        :src="product.Images[0].url"
                        :alt="product.id"
                        style="width: 60px; border-radius: 100%"
                      />
                    </td>
                    <td>{{ product.name }}</td>

                    <td>{{ product.store }}</td>
                    <td style="text-align: center">
                      <i
                        class="bi bi-plus-circle-fill"
                        style="font-size: 1.5rem; color: #007bff"
                      ></i>
                    </td>
                    <id></id>
                  </tr>
                </tbody>
              </table>
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
      currentPageproduct: 1,
      totalpageproduct: 1,
      products: [],
      filtersProducts: {
        name: "",
        category: "",
      },
    };
  },
  methods: {
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
    range(start, end) {
      return Array.from(
        { length: end - start + 1 },
        (_, index) => start + index
      );
    },

    resetmodal() {
      this.currentPageproduct = 1;
      this.filtersProducts = {
        name: "",
      };
      this.totalpageproduct = 1;
    },
    async addmodalproduct() {
      await this.resetmodal();
      await this.loadproducts();
      this.modaladdproduct = !this.modaladdproduct;
    },
    goToPage(pageNumber) {
      // Lógica para cambiar de página...
      // Por ejemplo, puedes emitir un evento para informar al componente padre sobre el cambio de página.
      // this.$emit('page-changed', pageNumber);
    
      this.currentPageproduct = pageNumber;
      this.loadproducts();
    },
    async loadproducts() {
      let filter = "";

      let page = `pageNumber=${this.currentPageproduct}&`;
      if (typeof this.filtersProducts === "object") {
        for (const key in this.filtersProducts) {
          if (this.filtersProducts[key] !== "") {
            filter += `${key}=${this.filtersProducts[key]}&`;
          }
        }
      }

      const response = await axios.get(`products/get?${page}${filter}`);
      console.log(response.data);
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
