<template>
  <div>
	<br>
    <h3><strong>機關/類別報表</strong></h3>
    <br>
	<b-container fluid>
		<br>
		<b-form-row class="row justify-content-end">
			<b-table striped hover :items="items" :fields="fields">
				<template #cell(action)="row">
					<!--中央主管機關以及工程會才有刪除的按鈕-->
					<b-button size="sm" variant="success" @click="gotoParam('PublicFacilityEdit', {updateFlag:true})">編輯</b-button>&nbsp;
					<b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
				</template>
				<template #thead-top>
					<b-tr>
						<b-th class="border border-dark " colspan="1" variant="secondary"></b-th>
						<b-th class="border border-dark " variant="secondary" colspan="7">交通設施</b-th>
						<b-th class="border border-dark " variant="secondary" colspan="5">水利設施</b-th>
						<b-th class="border border-dark " variant="secondary" colspan="3">能源設施</b-th>
						<b-th class="border border-dark " variant="secondary" colspan="3">環保設施</b-th>
						<b-th class="border border-dark " colspan="1" variant="secondary"></b-th>
					</b-tr>
				</template>
				<template #custom-foot >
					<b-tr variant="secondary">
						<b-th variant="secondary">合計</b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')" >600</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >17</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >53</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >415</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >1</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >143</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >110</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >95</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >431</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >84</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >1079</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >433</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >111</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >619</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >9</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >57</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >170</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >162</a></b-th>
						<b-th ><a href="#" variant="primary" @click="gotoParam('FacilityQuery')()" >4581</a></b-th>
					</b-tr>
				</template>
				<template #cell(wkut)="row">
					<a href="#" variant="primary" @click="updateWkut()" >{{row.item.wkutName}}</a>
				</template>
				<template #cell(m1s1)="row">
					<!--看起來取不到參數-->
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m1s1Num}}</a>
				</template>
				<template #cell(m1s2)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m1s2Num}}</a>
				</template>
				<template #cell(m1s3)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m1s3Num}}</a>
				</template>
				<template #cell(m1s4)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m1s4Num}}</a>
				</template>
				<template #cell(m1s5)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m1s5Num}}</a>
				</template>
				<template #cell(m1s6)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m1s6Num}}</a>
				</template>
				<template #cell(m2s1)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m2s1Num}}</a>
				</template>
				<template #cell(m2s2)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m2s2Num}}</a>
				</template>
				<template #cell(m2s3)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m2s3Num}}</a>
				</template>
				<template #cell(m2s4)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m2s4Num}}</a>
				</template>
				<template #cell(m2s5)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m2s5Num}}</a>
				</template>
				<template #cell(m3s1)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m3s1Num}}</a>
				</template>
				<template #cell(m3s2)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m3s2Num}}</a>
				</template>
				<template #cell(m3s3)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m3s3Num}}</a>
				</template>
				<template #cell(m4s1)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m4s1Num}}</a>
				</template>
				<template #cell(m4s2)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m4s2Num}}</a>
				</template>
				<template #cell(m4s3)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.m4s3Num}}</a>
				</template>
				<template #cell(subTotal)="row">
					<a href="#" variant="primary" @click="gotoParam('FacilityQuery', row.item)" >{{row.item.subTotalNum}}</a>
				</template>
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
        rows: 100,
		perPage: 1,
		currentPage: 1,
		fields: [
			{
				key:	'wkut',
				label:	'機關名稱'
			},
			{
				key:	'm1s1',
				label:	'道路',
			},
			{
				key:	'm1s2',
				label:	'軌道'
			},
			{
				key:	'm1s3',
				label:	'邊坡'
			},
			{
				key:	'm1s4',
				label:	'隧道'
			},
			{
				key:	'm1s5',
				label:	'纜車'
			},
			{
				key:	'm1s6',
				label:	'港灣/港埠'
			},
			{
				key:	'm1s7',
				label:	'機場/航空站',
			},
			{
				key:	'm2s1',
				label:	'水庫',
			},
			{
				key:	'm2s2',
				label:	'抽水站',
			},
			{
				key:	'm2s3',
				label:	'滯洪池',
			},
			{
				key:	'm2s4',
				label:	'水閘門',
			},
			{
				key:	'm2s5',
				label:	'自來水設施',
			},
			{
				key:	'm3s1',
				label:	'電廠',
			},
			{
				key:	'm3s2',
				label:	'變電所',
			},
			{
				key:	'm3s3',
				label:	'油氣設施',
			},
			{
				key:	'm4s1',
				label:	'水資源中心',
			},
			{
				key:	'm4s2',
				label:	'污水處理廠',
			},
			{
				key:	'm4s3',
				label:	'垃圾處理場',
			},
			{
				key:	'subTotal',
				label:	'小計',
			},
		],
		items:[
			{wkutName:'內政部',m1s1Num:12,m1s2Num:1,m1s3Num:'',m1s4Num:2,m1s5Num:'',m1s6Num:'',m2s1Num:'',m2s2Num:4,m2s3Num:'',m2s4Num:'',m2s5Num:'',m3s1Num:'',m3s2Num:9,m3s3Num:'',
				m4s1Num:'',m4s2Num:'',m4s3Num:'',subTotalNum:28},
			{wkutName:'教育部',m1s1Num:1,m1s2Num:'',m1s3Num:'',m1s4Num:'',m1s5Num:'',m1s6Num:'',m2s1Num:'',m2s2Num:'',m2s3Num:'',m2s4Num:'',m2s5Num:'',m3s1Num:'',m3s2Num:9,m3s3Num:'',
				m4s1Num:'',m4s2Num:2,m4s3Num:'',subTotalNum:3},
			{wkutName:'經濟部',m1s1Num:62,m1s2Num:5,m1s3Num:'',m1s4Num:'',m1s5Num:'',m1s6Num:'',m2s1Num:59,m2s2Num:8,m2s3Num:1,m2s4Num:15,m2s5Num:420,m3s1Num:110,m3s2Num:611,m3s3Num:9,
				m4s1Num:'',m4s2Num:50,m4s3Num:'',subTotalNum:1350},
		],

		replaceItems:[
			{wkutName:'內政部警政署',m1s1Num:1,m1s2Num:'',m1s3Num:'',m1s4Num:'',m1s5Num:'',m1s6Num:'',m2s1Num:'',m2s2Num:'',m2s3Num:'',m2s4Num:'',m2s5Num:'',m3s1Num:'',m3s2Num:9,m3s3Num:'',
				m4s1Num:'',m4s2Num:2,m4s3Num:'',subTotalNum:3},
			{wkutName:'內政部營建署',m1s1Num:1,m1s2Num:1,m1s3Num:'',m1s4Num:'',m1s5Num:'',m1s6Num:'',m2s1Num:1,m2s2Num:8,m2s3Num:1,m2s4Num:1,m2s5Num:1,m3s1Num:1,m3s2Num:1,m3s3Num:9,
				m4s1Num:'',m4s2Num:1,m4s3Num:'',subTotalNum:5566},
		],
  }
 },
 methods:  {
	updateWkut(){
		//利用那個ROW的資料(這邊是wkut.name)去即時查詢，將回傳的物件(replaceItems)替換掉
		this.items=this.replaceItems;
	},
  },
}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-md-4 {
  background-color:white;
  color: white;
  text-align: left;
}

</style>