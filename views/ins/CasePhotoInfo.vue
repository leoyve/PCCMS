<template>
  <div>
    <b-container>
      <h2 class="text-left"><font color="red">通報案件相關照片</font></h2>
      <br>
      <b-row>
        <template v-for="photo in photoData">
          <b-col :key="photo.id"> 
            <b-container>
              <b-row>
                <b-img v-bind="mainProps" :src="photo.url"></b-img>
              </b-row>
              <b-row class="justify-content-start">{{ photo.desc  }}</b-row>
              <b-row class="justify-content-start"><font :color="photo.color">{{ photo.status  }}</font></b-row>
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
        {id:  '1',  url:  'https://www.mdnkids.com/upload/images/20210703-06-09.jpg', desc: '示意圖1', status: '審查通過',  color:  'green'},
        {id:  '2',  url:  'https://www.mdnkids.com/upload/images/20210703-06-09.jpg', desc: '示意圖2', status: '尚未立案',  color:  'blue'},
        {id:  '3',  url:  'https://www.mdnkids.com/upload/images/20210703-06-09.jpg', desc: '示意圖3', status: '已立案待審查',  color:  'red'},
        {id:  '4',  url:  'https://www.mdnkids.com/upload/images/20210703-06-09.jpg', desc: '示意圖4', status: '審查通過',  color:  'green'},
      ]
  }
 },
 methods:  {
 
  },
  mounted(){  
    
  }
}
</script>
<style>

</style>