<template>
  <div>
    <b-container fluid>
      <br>
      <b-row>
        <template v-for="photo in photoData">
          <b-col :key="photo.id"> 
            <b-container>
              <b-row>
                <b-img v-bind="mainProps" :src="photo.url"></b-img>
              </b-row>
              <b-row class="justify-content-start">{{ photo.desc  }}</b-row>
            </b-container>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  props:  ['test',  'disabledFlag'],
  data(){
    return{
       mainProps:  {
        width: 200,
        height: 200,
      },
      photoData:  [
        {url:  'https://www.mdnkids.com/upload/images/20210703-06-09.jpg', desc: '示意圖1', },
        {url:  'https://www.mdnkids.com/upload/images/20210703-06-09.jpg', desc: '示意圖2', },
        {url:  'https://www.mdnkids.com/upload/images/20210703-06-09.jpg', desc: '示意圖3', },
        {url:  'https://www.mdnkids.com/upload/images/20210703-06-09.jpg', desc: '示意圖4', },
      ]
  }
 },
 methods:  {
 
  },
  mounted(){  
   // this.items.forEach((items, index) => { items.serial = index + 1; });
  }
}
</script>
<style>

</style>