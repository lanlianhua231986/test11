<template>
  <div class="list">
    <ul>
      <li @click="godetail" v-for="item in products" :key="item._id">
        <h3>{{ item.name }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onload() {
      axios.get("http://localhost:3009/api/v1/products").then((res) => {
        console.log(res);
        this.products = res.data.products;
      });
    },
    godetail() {
      this.$router.push("/detail");
    },
  },
  activated() {
    if (!this.$route.meta.isshowcache) {
      this.products = [];
      this.onload();
    }
  },
  deactivated() {
    console.log("离开了");
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == "Detail") {
      from.meta.isshowcache = true;
    } else {
      from.meta.isshowcache = false;
    }
    next();
  },
  created() {
    this.onload();
  },
  mounted() {},
  components: {},
};
</script>
<style scoped></style>
