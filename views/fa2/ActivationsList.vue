<template>
  <div>
	<br>
	<b-container fluid>
		<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>申請活化補助工作計畫一覽表</strong></h4></b-form-row>
		<b-form-row>
			<b-table striped hover :items="items" :fields="fields" head-variant="dark">
				<template #cell(action)="row">
					<b-button size="sm" variant="outline-secondary" @click="gotoParam('AgencyDetail', row.item)">明細</b-button>
				</template>
				<template #cell(beforeReview)="row">
					<b-container>
						<b-row>
							<b-col><strong><font color="red">資料已有修改</font></strong></b-col>
						</b-row>
						<b-row>
							<b-col><strong>主辦機關</strong></b-col>
						</b-row>
						<b-row  v-if="row.item.currentForm.a1 != null">
							<b-col>{{row.item.currentForm.a1}}</b-col>
						</b-row>
						<b-row v-if="row.item.currentForm.a1 != null">
							<b-col>{{row.item.currentForm.a2}}</b-col>
						</b-row>
						<b-row v-if="row.item.currentForm.a1 == null">
							<b-col><strong><font color="red">未函報</font></strong></b-col>
						</b-row>
						<b-row>
							<b-col><strong>主辦機關</strong></b-col>
						</b-row>
						<b-row>
							<b-col>{{row.item.currentForm.b1}}</b-col>
						</b-row>
						<b-row>
							<b-col>{{row.item.currentForm.b2}}</b-col>
						</b-row>
						<b-row v-if="row.item.currentForm.b1 == null">
							<b-col><strong><font color="red">未核轉</font></strong></b-col>
						</b-row>
						<b-row>
							<b-col><strong>中央目的事業主管機關：</strong></b-col>
						</b-row>
						<b-row>
							<b-col>{{row.item.currentForm.c1}}</b-col>
						</b-row>
						<b-row>
							<b-col>{{row.item.currentForm.c2}}</b-col>
						</b-row>
						<b-row v-if="row.item.currentForm.c1 == null">
							<b-col><strong><font color="red">未核轉</font></strong></b-col>
						</b-row>
					</b-container>
				</template>
				<template #cell(currentReview)="row">
					<b-container>
						<b-row>
							<b-col><strong><font color="red">資料已有修改</font></strong></b-col>
						</b-row>
						<b-row>
							<b-col><strong>主辦機關</strong></b-col>
						</b-row>
						<b-row  v-if="row.item.currentForm.a1 != null">
							<b-col>{{row.item.currentForm.a1}}</b-col>
						</b-row>
						<b-row v-if="row.item.currentForm.a1 != null">
							<b-col>{{row.item.currentForm.a2}}</b-col>
						</b-row>
						<b-row v-if="row.item.currentForm.a1 == null">
							<b-col><strong><font color="red">未函報</font></strong></b-col>
						</b-row>
						<b-row>
							<b-col><strong>主辦機關</strong></b-col>
						</b-row>
						<b-row>
							<b-col>{{row.item.currentForm.b1}}</b-col>
						</b-row>
						<b-row>
							<b-col>{{row.item.currentForm.b2}}</b-col>
						</b-row>
						<b-row v-if="row.item.currentForm.b1 == null">
							<b-col><strong><font color="red">未核轉</font></strong></b-col>
						</b-row>
						<b-row>
							<b-col><strong>中央目的事業主管機關：</strong></b-col>
						</b-row>
						<b-row>
							<b-col>{{row.item.currentForm.c1}}</b-col>
						</b-row>
						<b-row>
							<b-col>{{row.item.currentForm.c2}}</b-col>
						</b-row>
						<b-row v-if="row.item.currentForm.c1 == null">
							<b-col><strong><font color="red">未核轉</font></strong></b-col>
						</b-row>
					</b-container>
				</template>
			</b-table>
		</b-form-row>
		<b-pagination align="right"
			v-model="currentPage"
			:total-rows="rows"
			:per-page="perPage"
			first-number
		></b-pagination>
	</b-container>
  </div>
</template>


<script>

export default {
	props:['replaceItems','buttonFlag'],
  data(){
    return{
     fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'PLNNO',
				label:	'活化計畫編號'
			},
			{
				key:	'PLNNAME',
				label:	'活化計畫名稱'
			},
			{
				key:	'wkut',
				label: '主辦機關'
			}, 
			{
				key:	'constName',
				label:	'公共設施名稱'
			}, 
			{
				key:	'plnamt',
				label:	'申請補助經費數(仟元)'
			},
			{
				key:	'bdate',
				label:	'計畫起始日'
			},
			{
				key:	'edate',
				label:	'計畫結束日	'
			},
			{
				key:	'prjnum',
				label:	'活化工作項數'
			},
			{
				key:	'beforeReview',
				label:	'前次送審及核定情形',
				tdClass: 'text-left',
				thStyle: { width: "15%" },
			},
			{
				key:	'currentReview',
				label:	'目前送審日期及文號',
				tdClass: 'text-left',
				thStyle: { width: "15%" },
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
		],
	
	items:this.replaceItems,
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