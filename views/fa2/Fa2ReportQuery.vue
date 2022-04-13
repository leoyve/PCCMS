<template>
  <div>
    <br>
    <h3><strong>顯示地方縣市政府活化補助教化執行情形統計表</strong></h3>
    <br>
    <b-container >
		<br>
		<b-form-row >
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="補助年度" label-align-md="right">
				<b-form-input></b-form-input>
			</b-form-group>
		</b-form-row>
		<b-form-row >
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="補助年度" label-align-md="right">
				<b-form-radio-group
					id="radio-group-1"
					v-model="picked"
					:options="options"
					name="radio-options1"
				></b-form-radio-group>
			</b-form-group>
		</b-form-row>
		<b-form-row class="justify-content-end">
			<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
			<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
		</b-form-row>
	</b-container>
    <br>
	<b-container fluid>
      <b-form-row>
        <b-table striped hover :items="items" :fields="fields">
			<template #cell(action)="row">
				<b-button size="sm" variant="outline-secondary" @click="gotoParam('CityReportDetail', row.item)">明細</b-button>
			</template>
			<template #thead-top>
				<b-tr>
					<b-th colspan="4" ></b-th>
					<b-th class="border border-dark " variant="secondary" colspan="7">經費累計執行情形</b-th>
					<b-th colspan="2"></b-th>
					<b-th class="border border-dark " variant="secondary" colspan="2">里程碑執行情形</b-th>
					<b-th colspan="1"></b-th>
				</b-tr>
			</template>
			<template #custom-foot >
				<b-tr variant="secondary">
					<b-th variant="secondary" colspan="2">合計</b-th>
					<b-th >3</b-th>
					<b-th >131,140</b-th>
					<b-th >26,666</b-th>
					<b-th >13,503</b-th>
					<b-th >0</b-th>
					<b-th >0</b-th>
					<b-th >13,503</b-th>
					<b-th >50.64</b-th>
					<b-th >10.30</b-th>
					<b-th >21</b-th>
					<b-th >9</b-th>
					<b-th >19</b-th>
					<b-th >10</b-th>
					<b-th ><b-button size="sm" variant="outline-secondary" @click="gotoParam('CityReportDetail', )">明細</b-button></b-th>
				</b-tr>
			</template>
        </b-table>
      </b-form-row>
      <b-pagination align="right" v-model="currentPage"  :total-rows="rows"  :per-page="perPage" first-number></b-pagination>
    </b-container>
  </div>
</template>


<script>

export default {
  data(){
    return{
		options:[
			{text:'中央', value:1},
			{text:'地方', value:1},
		],

		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'city',
				label:	'縣市'
			},
			{
				key:	'plnTotal',
				label:	'活化計畫項數'
			},
			{
				key:	'plnamt',
				label:	'核定經費數(仟元)'
			},
			{
				key:	'pcount',
				label:	'預定執行數'
			},
			{
				key:	'scount',
				label:	'實支數	'
			},
			{
				key:	'scount1',
				label:	'應付未付數	'
			},
			{
				key:	'scount2',
				label:	'節餘數	'
			},
			{
				key:	'scount3',
				label:	'執行數	'
			},
			{
				key:	'prate',
				label:	'執行率(%)'
			},
			{
				key:	'arate',
				label:	'達成率(%)'
			},
			{
				key:	'mnum',
				label:	'里程碑項數'
			},
			{
				key:	'mFinNum',
				label:	'里程碑完成項數'
			},
			{
				key:	'pmnum',
				label:	'應完成項數'
			},
			{
				key:	'pnmnum',
				label:	'應完成未完成項數'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
	],
	items:[ 
			{
				city:'新竹市',plnTotal:1,plnamt:'5,000',pcount:0,scount:0,scount1:0,scount2:0,scount3:0,
				prate:'',arate:'0.00',mnum:5,mFinNum:0,pmnum:5,pnmnum:5,
	
			},
			{
				city:'內政部',plnTotal:1,plnamt:'5,566',pcount:0,scount:0,scount1:0,scount2:0,scount3:0,
				prate:'0.00',arate:'0.00',mnum:6,mFinNum:6,pmnum:6,pnmnum:0,
	
			},
			{
				city:'桃園市',plnTotal:1,plnamt:'42,000',pcount:'21,100',scount:'13,502',scount1:0,scount2:0,scount3:'13,503',
				prate:'63.99',arate:'32.15',mnum:5,mFinNum:3,pmnum:3,pnmnum:0,
			}
		],
  }
 },
 methods:  {
   
  },

  mounted(){
	this.items.forEach((items, index) => { items.serial = index + 1; });
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