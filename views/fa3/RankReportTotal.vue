<template>
  <div>
    <br>
    <h3><strong>公共設施維管排名(設施數量)</strong></h3>
    <br>
    <b-container>
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="outline-secondary" @click="goBack()" >回上一頁</b-button>
      </b-form-row>
      <br>
      <b-form-row class="justify-content-center text-light bg-info"><h4><strong>中央部會</strong></h4></b-form-row>
      <b-form-row >
        <b-table striped hover :items="items" :fields="fields" head-variant="dark">
        </b-table>
      </b-form-row>
      <br>
      <b-form-row class="justify-content-center text-light bg-info"><h4><strong>地方政府</strong></h4></b-form-row>
      <b-form-row >
        <b-table striped hover :items="items2" :fields="fields" head-variant="dark">
        </b-table>
      </b-form-row>
    </b-container>
    <br>
  </div>
</template>


<script>


export default {
  data(){
    return{
      // 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'wkutName',
				label:	'機關名稱'
			},
			{
				key:	'wkutRank',
				label:	'機關設施排名'
			},
			{
				key:	'wkutTotal',
				label:	'機關設施排名(件數)'
			},
		],
		items:	[
			{ wkutRank: 1, wkutName: '經濟部', wkutTotal:1350,	pk: 5566 },
			{ wkutRank: 2, wkutName: '交通部', wkutTotal:568,	pk: 5566 },
			{ wkutRank: 3, wkutName: '行政院農業委員會', wkutTotal:167,	pk: 5566 },
      { wkutRank: 4, wkutName: '內政部', wkutTotal:20,	pk: 5566 },
      { wkutRank: 5, wkutName: '科技部', wkutTotal:12,	pk: 5566 },
      { wkutRank: 6, wkutName: '教育部', wkutTotal:3,	pk: 5566 },
      { wkutRank: 7, wkutName: '國軍退除役官兵輔導委員會', wkutTotal:1,	pk: 5566 },
		],
    items2:	[
			{ wkutRank: 1, wkutName: '新北市政府', wkutTotal:1017,	pk: 5566 },
			{ wkutRank: 2, wkutName: '臺中市政府', wkutTotal:207,	pk: 5566 },
			{ wkutRank: 3, wkutName: '高雄市政府', wkutTotal:192,	pk: 5566 },
      { wkutRank: 4, wkutName: '臺北市政府', wkutTotal:172,	pk: 5566 },
      { wkutRank: 5, wkutName: '臺南市政府', wkutTotal:147,	pk: 5566 },
      { wkutRank: 6, wkutName: '宜蘭縣政府', wkutTotal:132,	pk: 5566 },
      { wkutRank: 7, wkutName: '桃園市政府', wkutTotal:81,	pk: 5566 },
		],
      
  }
 },
 methods:  {
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