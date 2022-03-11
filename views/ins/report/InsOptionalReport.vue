<template>
	<div>
		<b-container fluid>
			<h2><font color="blue">督工通報案件自選欄位查詢</font></h2>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件編號關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報工程名稱關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報缺失地點關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件主題關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件具體內容關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="分案情形" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="checkAssign" name="radio-validation-1"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="結案情形" label-align-md="right">
					<b-form-radio-group v-model="check3" :options="checkClosed" name="radio-validation-2"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="納入督工有效統計案件" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="checkAssign2" name="radio-validation-1"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報方式" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
				</b-form-group>
		
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="顯示項目" label-align-md="right">
						<b-form-checkbox-group
							v-model="selected"
							:options="checkOptions"
							class="mb-2"
							value-field="item"
							text-field="name"
							disabled-field="notEnabled"
							name="flavour-1a"
							inline
						></b-form-checkbox-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
	

	</div>
</template>


<script>


export default {
 data(){
	return{
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
		checkAssign2:[
			{	value: 'Y', text: '是'	},
			{	value: 'N', text: '否'	},
			{	value: '', text: '不限'	},
		],
		type: [
			{ value: '', text: '' , disabled: true},
			{ value: '0', text: '電話' },
			{ value: '1', text: '傳真' },
			{ value: '2', text: '線上網路' },
			{ value: '3', text: '智慧型手機' },
			{ value: '4', text: '行動版通報' },
			{ value: '5', text: '信件' },
			{ value: '6', text: '媒體' },
		],
	checkOptions: [
      {	name:	'建築',	item:	'1',  },
      {	name:	'道路運輸',	item:	'2',  },
      {	name:	'軌道運輸',	item:	'3',  },
      {	name:	'機場',	item:	'4',  },
      {	name:	'港灣',	item:	'5',  },
      {	name:	'水庫及蓄水',	item:	'6',   },
      {	name:	'電業設備',	item:	'7',   },
      {	name:	'水利',	item:	'8',   },
      {	name:	'自來水',	item:	'9',   },
      {	name:	'共同管道',	item:	'10',   },
      {	name:	'下水道',	item:	'11',   },
      {	name:	'焚化廠',	item:	'12',   },
      {	name:	'垃圾掩埋場',	item:	'13',   },
      {	name:	'土地開發',	item:	'14',   },
      {	name:	'水土保持',	item:	'15',   },
      {	name:	'其他',	item:	'16',   },

    ],
	}
 },
 methods: {
	toSee(row){
		//alert(item.pk);
		console.log(row.item.wkut);
		this.$router.push({name:'ReportCommonList',  params:{wkutName:	row.item.wkut}})
		
	},
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