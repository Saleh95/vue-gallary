import axios from 'axios';

export default {
  data: ()=>{
    images: [],
    errors: [],
    postbody:'',
  },
  get(){
    axios.get("....")
    .then(res =>{
      this.posts = res.data
    })
    .catch(err =>{
      this.errors.push(err)
    })
  },
  post(){
    axios.post("...........",this.postbody)
    .then(res=>{})
    .catch(err=>{this.errors.push(err)})
  }
}
