<template>
	<div>
		<br>
		<h3><strong>通報案件結案考核</strong></h3>
		<br>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件主題" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件編號" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="主管機關" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件結案日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker3" v-model="value3" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker4" v-model="value4" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="考核情形" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="民眾滿意度" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="picked"
						:options="options2"
						name="radio-options2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="排序" label-align-md="right">
					<b-form-radio-group
						id="radio-group-3"
						v-model="picked"
						:options="options3"
						name="radio-options3"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		<div>
			<b-container fluid>
				<h3>民眾通報案件結案考核情形查詢結果表</h3>
				<br>
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(action)="row">
						<!--民眾考核常駐顯示、主辦機關看的到主辦考核、主管機關與工程會看的到全部 -->
						<b-button size="sm" variant="info" @click="gotoParam('DirectorAssessmentFill', row.item)">主管</b-button>&ensp; 
						<b-button size="sm" variant="primary" @click="gotoParam('WkutAssessmentFill', row.item)">主辦</b-button>&ensp; 
						<b-button size="sm" variant="success" @click="gotoParam('PeopleAssessmentFill', row.item)">民眾</b-button>
					</template>
				</b-table>
				<b-pagination align="right"
					v-model="currentPage"
					:total-rows="rows"
					:per-page="perPage"
					first-number
				></b-pagination>
			</b-container>
		</div>

	</div>
</template>

<script>

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
				key:	'duconNumber',
				label:	'通報案件編號'
			},
			{
				key:	'wkut',
				label: '主管機關',
				thStyle: { width: "10%" },
			}, 
			{
				key:	'duconTopic',
				label:	'通報主題',
				thStyle: { width: "20%" },
			}, 
			{
				key:	'announceDate',
				label:	'通報日期'
			},
			{
				key:	'closeDate',
				label:	'結案日期'
			},
			{
				key:	'survey',
				label:	'民眾最新滿意度調查'
			},
			{
				key:	'action',
				label:	'考核評分'
			},
			],
		items:	[
			{ id: 1, duconNumber: '11000000329', wkut: '臺中市風景區管理所',	duconTopic:'停車場排水不良、施工圍籬遮蔽車行視線',	announceDate:	'110/03/01',	
				closeDate:	'110/05/28',	survey:	'110/04/11非常不滿意',pk: 5566 },
			{ id: 2, duconNumber: '11000000330',  wkut: '臺中市建設局養護工程處路燈養護科',	duconTopic:'停車場排水不良、施工圍籬遮蔽車行視線',	announceDate:	'110/03/01',	
				closeDate:	'110/05/28',	survey:	'110/04/11非常不滿意',pk: 5566 },
		],
		type: [
			{ value: '', text: '(請選擇)' , disabled: true},
			{ value: '0', text: '行政院公共工程委員會' },
			{ value: '1', text: '台北市政府' },
			{ value: '2', text: '新北市政府' },
			{ value: '3', text: '台中市政府' },
			{ value: '4', text: '高雄市政府' },
		],
		options: [
			{ value: 'N', text: '未完成考核' },
			{ value: 'Y', text: '已完成考核' },
			{ value: 'A', text: '全部案件' },
		],
		options2: [
			{ value: 'N', text: '不滿意' },
			{ value: 'A', text: '全部' },
		],
		options3: [
			{ value: 'N', text: '結案日遠的優先' },
			{ value: 'A', text: '結案日近的優先' },
		],

	}
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