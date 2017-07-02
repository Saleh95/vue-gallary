<template>
<div class="col-sm-4">
<div class='ui centered card'>
<div class="ui small item">
 <img :src="item.url" alt="..." style="height:200px; width:250px;">
</div>
    <div class="content" v-show="!isEditing">
      <div class='header'>
          {{ item.caption }}
      </div>
      <div class='extra content'>
          <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deleteImage(item)">
          <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="item.caption" >
        </div>
        <div class='field'>
        <div class='field'>
          <input class="image icon" @change="onFileChange" type='file'>
        </div>
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing &&item.featured" v-on:click="likeImage(item)">
        Featured
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !item.featured" v-on:click="likeImage(item)">
        Like
    </div>
</div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['item'],
    data () {
      return {
        isEditing: false
      }
    },
    methods: {
      onFileChange (e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        this.initImage(files[0])
      },
      initImage (file, item) {
        this.item.url = new Image()
        var reader = new FileReader()
        reader.onload = (e) => {
          this.item.url = e.target.result
        }
        reader.readAsDataURL(file)
      },
      likeImage (item) {
        console.log(item.url)
        this.$emit('like-image', item)
      },
      showForm () {
        this.isEditing = true
      },
      hideForm () {
        this.isEditing = false
      },
      deleteImage (item) {
        this.$emit('delete-image', item)
      }
    }
  }
</script>
