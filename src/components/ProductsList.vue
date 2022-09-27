<template>
    <div class="list row">
      <div class="col-md-6">
        <h4>Lista de produtos</h4>
        <ul class="list-group">
          <li
            style="margin-top:20px;" class="list-group-item" 
            :class="{ active: index == currentIndex }"
            v-for="(product, index) in products"
            :key="index"
            @click="setActiveProduct(product, index)"
          >
            {{ product.title }}
            {{ product.price }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllProducts">
          Apagar todos
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentProduct">
          <product-details
            :product="currentProduct"
            @refreshList="refreshList"
          />
        </div>
        <div v-else>
          <br />
          <p>Selecione um produto</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProductDataService from "../services/ProductDataService";
  import ProductDetails from "./Product";
  
  export default {
    name: "products-list",
    components: { ProductDetails },
    data() {
      return {
        products: [],
        currentProduct: null,
        currentIndex: -1
      };
    },
    methods: {
      onDataChange(items) {
        let _products = [];
  
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _products.push({
            key: key,
            title: data.title,
            description: data.description,
            price: data.price,
            offerlink: data.offerlink,
            published: data.published,
          });
        });
  
        this.products = _products;
      },
  
      refreshList() {
        this.currentProduct = null;
        this.currentIndex = -1;
      },
  
      setActiveProduct(product, index) {
        this.currentProduct = product;
        this.currentIndex = index;
      },
  
      removeAllProducts() {
        ProductDataService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      ProductDataService.getAll().on("value", this.onDataChange);
    },
    beforeDestroy() {
      ProductDataService.getAll().off("value", this.onDataChange);
    }
  };
  </script>