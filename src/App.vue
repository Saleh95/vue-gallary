<template>
  <div id="app" class="container-fluid">
  <nav class="navbar navbar-default">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-3">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Vue</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar-collapse-3">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/">Featured</router-link></li>
          <li><router-link to="/all">All Images</router-link></li>
        </ul>

          <form class="navbar-form navbar-right" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <button type="submit" class="btn btn-danger"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
          </form>

      </div><!-- /.navbar-collapse -->
    </div><!-- /.container -->
  </nav><!-- /.navbar -->
  <div class="container">
    <div class="row">
      <div class="col-sm-9 offset-sm-6">
        <router-view :images="images"></router-view>
      </div>
    <div class="col-sm-3">
      <create-image v-on:create-image="createImage"></create-image>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import CreateImage from './components/CreateImage'
import ImageList from './components/ImageList'
import sweetalert from 'sweetalert'

var STORAGE_KEY = 'what-eva'

var imageStorage = {
  get: () => { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') },
  set: (images) => { localStorage.setItem(STORAGE_KEY, JSON.stringify(images)) }
}

export default {
  name: 'app',
  components: {
    CreateImage,
    ImageList
  },
  data () {
    return {
      images: imageStorage.get()
    }
  },
  watch: {
    images: {
      handler: function (images) {
        imageStorage.set(images)
      }
    }
  },
  methods: {
    createImage (newimage) {
      this.images.push(newimage)
      sweetalert('Success!', 'image created!', 'success')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
