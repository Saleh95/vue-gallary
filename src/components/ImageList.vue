<template>
<div>
  <item v-on:delete-image="deleteImage" v-on:like-image="likeImage" v-for="image in images" v-bind:item="image">
  </item>
</div>
</template>

<script type = "text/javascript" >
import Item from './Image'
import sweetalert from 'sweetalert'

export default {
  name: 'image-list',
  props: ['images'],
  components: {
    Item
  },
  methods: {
    deleteImage (image) {
      sweetalert({
        title: 'Are you sure?',
        text: 'This image will be permanently deleted!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
      },
      () => {
        const imageIndex = this.images.indexOf(image)
        this.images.splice(imageIndex, 1)
        sweetalert('Deleted!', 'Your image has been deleted.', 'success')
      })
    },
    likeImage (image) {
      const imageIndex = this.images.indexOf(image)
      this.images[imageIndex].featured = !(this.images[imageIndex].featured)
      sweetalert('Success!', 'Image status has changed!', 'success')
    }
  }
}
</script>
<style>
</style>
