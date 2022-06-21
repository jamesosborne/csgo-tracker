<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
:root {
  --primary-color: #de9b35;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--primary-color);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  line-height: 1.6;
}

a {
  color: #fff;
  text-decoration: none;
}

ul {
  list-style: none;
}

.body-bg-no-image {
  background-color: var(--primary-color);
}

.body-bg-image {
  background: var(--primary-color) url("./assets/ct.png") no-repeat top center;
}

.container {
  max-width: 960px;
  margin: 1rem auto;
  overflow: auto;
  padding: 0 2rem
}

.form-group {
  margin: 1rem auto;
}

.search {
  background: rgba(0, 0, 0, 0.5);
  border: 4px #fff solid;
  margin-top: 1rem;
  padding: 2rem;
}

input,
select,
textarea {
  display: block;
  widows: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}

.btn {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
}

@media (max-width: 700px){
  body {
    background: var(--primary-color);
  }
}
</style>
