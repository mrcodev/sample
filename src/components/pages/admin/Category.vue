<template>
  <div>
    <modal
      modal-heading="Add New Category"
      :cond="showingAddModal"
      @modalClose="showingAddModal=false"
    >
      <table>

        <tr>
          <td>
            Category Name
          </td>
          <td>
            <input
              type="text"
              id="newCatName"
              v-model="newCategory.name"
              placeholder="Category Name"
            >
          </td>
          <td>
            <textarea
              type="text"
              v-model="newCategory.description"
              placeholder="Write Short description..."
            ></textarea>
          </td>
        </tr>

        <tr>
          <td>

          </td>
          <td>
            <button
              class="btnSave"
              @click=" addNewCategory()"
            >Save</button>
          </td>
        </tr>

      </table>
    </modal>
    <h2 class="fleft">Categories</h2>
    <button
      class="addBtn fright"
      @click="showingAddModal = true"
    >Add New</button>
    <div class="clear"></div>
    <hr>

  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      showingAddModal:false,
      newCategory:{
        name:"",
        description:""
      }
    }
  },
  methods:{
    addNewCategory(){
     /* console.log(this.newCategory);*/

     this.$eventBus.$emit("loadingStatus",true);
     this.$axios.post("https://jsonplaceholder.typicode.com/albums",this.newCategory)
       .then(res=>{
         if(res.data.error){
           this.$iziToast.error({
            title:'Error',
            message:res.data.message
           });
         } else {
           this.$iziToast.success({
             title:'Success',
             message:res.data.message
           });
         }
       });

    }
  }
}
</script>

<style scoped>
  textarea {
    resize: none;
  }
</style>


