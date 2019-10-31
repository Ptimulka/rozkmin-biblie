<template>
  <!-- custom directive - narrow or wide -->
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All blogs articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"> <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2> </router-link>
      <!-- <article>{{ blog.body | snippet }}</article> -->
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data () {
    return {
      blogs: [],
      search: '',
    }
  },
  methods: {
    post: function() {

    }
  },
  created() {
    // this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
    this.$http.get("https://ninja-vue-3edc0.firebaseio.com/posts.json").then(function(data){
      console.log(data.json());
      return data.json();
      // this.blogs = data.body.slice(0,10);
    }).then(function(data){
      var blogsArray = []
      for (let key in data) {
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    })
  },

  // zabrane do mixins
  // computed: {
  //   filteredBlogs: function() {
  //     return this.blogs.filter((blog) => {
  //       return blog.title.match(this.search);
  //     })
  //   }
  // },
  filters: {
    // tak tez mozna ale nizej krocej pisania
    // 'to-uppercase': function(value) {
    //   return value.toUpperCase();
    // }
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    'theme': {
      bind(el, binding, vnode) {
        if(binding.value == "wide") {
          el.style.maxWidth = "1200px";
        } else if(binding.value == "narrow") {
            el.style.maxWidth = "560-x";
        }
        if(binding.arg == "column") {
          el.style.background = "#ddd";
          el.style.padding = '20px';
        }
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
