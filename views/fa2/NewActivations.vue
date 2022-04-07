<template>
  <div>
    <br>
    <h3><strong>選擇新增申請活化補助工作計畫方式</strong></h3>
    <br>
    <b-container fluid>
		<b-form-row class="justify-content-end">
			<b-button size="l" variant="outline-secondary"  @click="gotoParam('ActivationsQuery',)" >回上一頁</b-button>
		</b-form-row>
		<br>
		<b-form-row class="justify-content-start">
			<H3><strong><font color="red">新增方式一</font></strong></H3>
		</b-form-row>
		<b-form-row class="justify-content-start">
			<b-button size="l" variant="success"  @click="gotoParam('SimplyCaseCreate',)" >建立新的活化計畫</b-button>
		</b-form-row>
		<br>
		<b-form-row class="justify-content-start">
			<H3><strong><font color="red">新增方式二、自以往申請未通過之活化計畫項目轉入</font></strong></H3>
		</b-form-row>
		<b-form-row class="justify-content-start">
		<b-table striped hover :items="items" :fields="fields" head-variant="dark">
				<template #cell(action)="row">
					<b-button size="sm" variant="outline-secondary" @click="gotoParam('ActivationsMoveIn', row.item)">明細</b-button>
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
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
		],
	items:[ 
			{
				PLNNO:'1110000001',PLNNAME:'頭份鎮停二立體停車場拆除工程',wkut:'苗栗縣頭份市公所',constName:'頭份鎮停二立體停車場',
				plnamt:'5,000',bdate:'111/02/03', edate:'111/12/12',prjnum:2,currentForm:{a1:'1061109',a2:'頭市農字第1060028086號',
				b1:'1061117',b2:'府工道字第1060219036號', c1:'1061225',c2:'交路字第1060416418'}
			},
			{
				PLNNO:'1110000002',PLNNAME:'嘉義縣布袋鎮布袋鎮景山國民小學推動閒置公共設施活化--正義校區活化計畫',wkut:'嘉義縣布袋鎮景山國民小學',constName:'嘉義縣布袋鎮景山國民小學正義校區',
				plnamt:'8,214',bdate:'111/02/03', edate:'111/12/12',prjnum:2,currentForm:{}
			},
			{
				PLNNO:'1110000004',PLNNAME:'桃園市大園區五權砲陣地舊營舍活化計畫',wkut:'桃園市政府都市發展局',constName:'桃園市大園區五權砲陣地舊營舍活化計畫',
				plnamt:'26,000	',bdate:'111/02/03', edate:'111/12/12',prjnum:2,currentForm:{a1:'1061109',a2:'頭市農字第1060028086號',
				b1:'1061117',b2:'府工道字第1060219036號',}
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