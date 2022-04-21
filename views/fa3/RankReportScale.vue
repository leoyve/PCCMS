<template>
  <div>
    <br>
    <h3><strong>公共設施維管排名(公開比率)</strong></h3>
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
				label:	'機關公開比率排名'
			},
      {
				key:	'rate',
				label:	'機關公開比率'
			},
			{
				key:	'total',
				label:	'總數'
			},
      {
				key:	'public',
				label:	'公開數'
			},
		],
		items:	[
			{ wkutRank: 1, wkutName: '經濟部',rate:'100%',total:1, 	public:1,pk: 5566 },
			{ wkutRank: 2, wkutName: '交通部', rate:'95%',total:20, 	public:19,pk: 5566 },
			{ wkutRank: 3, wkutName: '行政院農業委員會', rate:'89%',total:1350, 	public:1205,	pk: 5566 },
      { wkutRank: 4, wkutName: '內政部', rate:'88%',total:568, 	public:497,	pk: 5566 },
      { wkutRank: 5, wkutName: '科技部',rate:'83%',total:12, 	public:10,	pk: 5566 },
      { wkutRank: 6, wkutName: '教育部', rate:'53%',total:167, 	public:89,	pk: 5566 },
      { wkutRank: 7, wkutName: '國軍退除役官兵輔導委員會', rate:'33%',total:3, 	public:1,	pk: 5566 },
		],
    items2:	[
			{ wkutRank: 1, wkutName: '經濟部',rate:'100%',total:1, 	public:1,pk: 5566 },
			{ wkutRank: 2, wkutName: '交通部', rate:'95%',total:20, 	public:19,pk: 5566 },
			{ wkutRank: 3, wkutName: '行政院農業委員會', rate:'89%',total:1350, 	public:1205,	pk: 5566 },
      { wkutRank: 4, wkutName: '內政部', rate:'88%',total:568, 	public:497,	pk: 5566 },
      { wkutRank: 5, wkutName: '科技部',rate:'83%',total:12, 	public:10,	pk: 5566 },
      { wkutRank: 6, wkutName: '教育部', rate:'53%',total:167, 	public:89,	pk: 5566 },
      { wkutRank: 7, wkutName: '國軍退除役官兵輔導委員會', rate:'33%',total:3, 	public:1,	pk: 5566 },
		],
      
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