<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Nome do Produto</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="product.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Detalhes do produto</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="product.description"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="price">Preço</label>
        <input
          class="form-control"
          id="price"
          required
          v-model="product.price"
          name="price"
        />
      </div>

      <div class="form-group">
        <label for="offerlink">Link da oferta</label>
        <input
          class="form-control"
          id="offerlink"
          required
          v-model="product.offerlink"
          name="offerlink"
        />
      </div>

      <button @click="saveProduct" class="btn btn-success">Salvar</button>
    </div>

    <div v-else>
      <h4>Parabéns, produto adicionado com successo!</h4>
      <button class="btn btn-success" @click="newProduct">Adicionar</button>
    </div>
  </div>
  </template>
  
  <script>
  import ProductDataService from "../services/ProductDataService";
  
  export default {
    name: "add-product",
    data() {
      return {
        product: {
          title: "",
          description: "",
          price: "",
          offerlink: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveProduct() {
        var data = {
          title: this.product.title,
          description: this.product.description,
          price: this.product.price,
          offerlink: this.product.offerlink,
          published: false
        };
  
        ProductDataService.create(data)
          .then(() => {
            console.log("Novo Item criado com sucesso");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newProduct() {
        this.submitted = false;
        this.product = {
          title: "",
          description: "",
          price: "",
          offerlink: "",
          published: false
        };
      }
    }
  };
  </script>