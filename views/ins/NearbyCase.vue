<template>
	<div>
		<b-container >
			<h2 class="text-center"><font color="red">通報案件缺失地點及鄰近之施工中標案</font></h2>
			<case-map-info-vue/>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(action)="row">
						<b-button size="sm" variant="outline-secondary" @click="toSee(row.item)">檢視</b-button>
					</template>
				</b-table>
			</b-container>
		</div>

	</div>
</template>


<script>
import caseMapInfoVue from './CaseMapInfo.vue'

export default {
 data(){
	return{
		rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'number',
				label:	'通報案件編號'
			},
			{
				key:	'workName',
				label:	'通報工程名稱'
			}, 
			{
				key:	'wkut',
				label:	'主辦機關'
			},
			{
				key:	'workSite',
				label:	'工程地點'
			},
			{
				key:	'coordinate',
				label:	'經緯度'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, number: '11000000001', workName: '內政部營建署南區工程處空調設備節能改善',	workSite: '台中市南區', wkut:	'行政院工程會',
				coordinate:	'( 120.671, 24.119)',pk: 5566 },
			{ id: 2, number: '11000000001',	workName: '前金區東金公園改造工程',	workSite: '台中市西區', wkut:	'臺中市政府',
				coordinate:	'( 120.675, 24.133)',	pk: 5566 },
			{ id: 3, number: '11000000001', 	workName: '汐止區江長抽水站星座公園兒童遊戲新建工程',	workSite: '中市東區和平街50號', wkut:	'新北市政府',
				coordinate:	'( 120.685, 24.134)	',	pk: 5566 },
		],
		checkAssign:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '未分案'	},
			{	value: 'Y', text: '已分案'	},
		],
		checkClosed:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '未結案'	},
			{	value: 'E', text: '逾期未結案'	},
			{	value: 'W', text: '待審查結案'	},
			{	value: 'Y', text: '已結案'	},
		],
		value1: '',
		value2: '',
		testBody:	[
			{
				test:	'1223'
			},
			{
				edit:	true,
			}
		],
		check2:	'N',
		check3:	'',

	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);
		this.$router.push({name:'ShowWorkSiteMap'})

	},
  queryHandler(){

  },
  reset(){

  }
 },
 components: {
    caseMapInfoVue,
  },

}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>