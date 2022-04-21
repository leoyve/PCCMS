<template>
  <div>
    <br>
    <h3><strong>維管排名</strong></h3>
    <br>
    <b-container>
     <b-row class="col-sm row justify-content-center" >
        <b-button size="lg" variant="info" @click="gotoParam('RankReportTotal')" >公共設施維管排名(設施數量)</b-button>&nbsp; &nbsp; &nbsp; 
        <b-button size="lg" variant="info" @click="gotoParam('RankReportPublic')" >公共設施維管排名(公開數量)</b-button>&nbsp; &nbsp; &nbsp; 
        <b-button size="lg" variant="info" @click="gotoParam('RankReportScale')">公共設施維管排名(公開比率)</b-button>
      </b-row>
    </b-container>
    <br>
  </div>
</template>

<script>

export default {
  data(){
    return{
      check: [
        { value: '1', text: '是'},
        { value: '2', text: '否' },
      ],
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
  }
 },
}
</script>
<style>
.col-md-4 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>