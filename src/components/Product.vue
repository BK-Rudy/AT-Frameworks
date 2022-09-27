<template>
    <div v-if="currentProduct" class="edit-form">
      <h4>Produto</h4>
      <form>
        <div class="form-group">
          <label for="title">Nome do Produto</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentProduct.title"
          />
        </div>
  
        <div class="form-group">
          <label for="description">Detalhes do produto</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="currentProduct.description"
          />
        </div>

        <div class="form-group">
          <label for="price">Preço</label>
          <input
            type="text"
            class="form-control"
            id="price"
            v-model="currentProduct.price"
          />
        </div>

        <div class="form-group">
          <label for="offerlink">Link da oferta</label>
          <input
            type="text"
            class="form-control"
            id="offerlink"
            v-model="currentProduct.offerlink"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentProduct.published ? "Publicado" : "Pendente" }}
        </div>
      </form>
  
      <button
        type="button" class="btn btn-primary btn-sm mr-3"
        v-if="currentProduct.published"
        @click="updatePublished(false)"
      >
        Despublicar
      </button>
      <button
        v-else
        type="button" class="btn btn-primary btn-sm mr-3"
        @click="updatePublished(true)"
      >
        Publicar
      </button>
  
      <button 
        type="submit" class="btn btn-danger btn-sm mr-3"
        @click="deleteProduct"
        >
        Deletar
      </button>
  
      <button 
        type="submit" class="btn btn-success btn-sm mr-3" 
        @click="updateProduct"
        >
        Atualizar
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Selecione um produto para obter mais informações.</p>
    </div>
  </template>
  n  
  <script>
  import ProductDataService from "../services/ProductDataService";
  
  export default {
    name: "product",
    props: ["product"],
    data() {
      return {
        currentProduct: null,
        message: "",
      };
    },
    watch: {
      product: function(product) {
        this.currentProduct = { ...product };
        this.message = "";
      },
    },
    methods: {
      updatePublished(status) {
        ProductDataService.update(this.currentProduct.key, {
          published: status,
        })
          .then(() => {
            this.currentProduct.published = status;
            this.message = "Status atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateProduct() {
        const data = {
          title: this.currentProduct.title,
          description: this.currentProduct.description,
          price: this.currentProduct.price,
          offerlink: this.currentProduct.offerlink,
        };
  
        ProductDataService.update(this.currentProduct.key, data)
          .then(() => {
            this.message = "Produto atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      deleteProduct() {
        ProductDataService.delete(this.currentProduct.key)
          .then(() => {
            this.$emit("refreshList");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.message = "";
      this.currentProduct = { ...this.product }
    },
  };
  </script>