<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Caption</label>
            <input v-model="caption" type='text'>
          </div>
          <div class='field'>
            <input class="image icon" @change="onFileChange" type='file'>
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-image',
  data () {
    return {
      caption: '',
      url: '',
      isCreating: false
    }
  },
  methods: {
    onFileChange (e) {
      console.log('fdddfdfd')
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.initImage(files[0])
    },
    initImage (file) {
      this.url = new Image()
      var reader = new FileReader()
      reader.onload = (e) => {
        this.url = e.target.result
      }
      reader.readAsDataURL(file)
    },
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      console.log('ff1')
      if (this.caption.length > 0 && this.url.length > 0) {
        const caption = this.caption
        const url = this.url
        this.$emit('create-image', {
          caption,
          url,
          featured: false
        })
        console.log(url)
        this.caption = ''
        this.url = ''
        this.isCreating = false
      }
    }
  }
}
</script>
