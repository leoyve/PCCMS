<template>
	<div>
		<br>
		<h3><strong>閒置設施列管案件自選欄位查詢</strong></h3>
		<br>
		<b-container fluid>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="納入系統提供檢視" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="checkOptions"
						name="radio-options1"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="列管狀況" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="checkOptions2"
						name="radio-options1"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="實際開工期間" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker3" v-model="value3" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker4" v-model="value4" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="實際完成期間(" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker3" v-model="value3" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker4" v-model="value4" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="設施類別" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="顯示項目" label-align-md="right">
					<b-form-checkbox-group
						v-model="selected"
						:options="checkOptions3"
						class="mb-2"
						value-field="item"
						text-field="name"
						disabled-field="notEnabled"
						name="flavour-3a"
						inline
					></b-form-checkbox-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >產生報表</b-button>&nbsp;&nbsp;
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
		checkOptions: [
			{	text:	'全部',	value:	'1',  },
			{	text:	'納入',	value:	'2',  },
			{	text:	'不納入',	value:	'3',  },
		],
		checkOptions2:[
			{	text:	'全部',	value:	'1',  },
			{	text:	'繼續列管',	value:	'2',  },
			{	text:	'解除列管',	value:	'3',  },
		],
		type: [
			{ value: '', text: '全部類別' },
			{ value: '0', text: '停車場' },
			{ value: '1', text: '機場' },
			{ value: '2', text: '文物館' },
			{ value: '3', text: '社福設施' },
		],
		checkOptions3: [
			{	name:	'案號',	item:	'1',  },
			{	name:	'類別',	item:	'2',  },
			{	name:	'設施管理機關',	item:	'3',  },
			{	name:	'目的事業主管機關',	item:	'4',  },
			{	name:	'核准機關',	item:	'5',  },
			{	name:	'提案時之機關首長',	item:	'6',   },
			{	name:	'開工日期',	item:	'7',   },
			{	name:	'開工時之機關首長',	item:	'8',   },
			{	name:	'完工日期',	item:	'9',   },
			{	name:	'總建造費',	item:	'10',   },
			{	name:	'經費詳細來源',	item:	'11',   },
			{	name:	'屬中央經費',	item:	'12',   },
			{	name:	'屬地方經費',	item:	'13',   },
			{	name:	'累計已投入活化經費',	item:	'14',   },
			{	name:	'...',	item:	'15',   },
		],
	}
 },
 methods: {
	queryHandler(){
		alert("產生下載報表");
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