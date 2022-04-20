<template>
	<div>
		<br>
		<h3><strong>閒置設施補助自選欄位查詢</strong></h3>
		<br>
		<b-container fluid>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="活化計畫編號關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="設施編號關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="活化計畫名稱關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
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
			{	name:	'活化計畫編號',	item:	'1',  },
			{	name:	'設施編號',	item:	'2',  },
			{	name:	'設施管理機關',	item:	'3',  },
			{	name:	'活化計畫名稱',	item:	'4',  },
			{	name:	'活化計畫核定經費',	item:	'5',  },
			{	name:	'活化計畫起始日',	item:	'6',   },
			{	name:	'活化計畫結束日',	item:	'7',   },
			{	name:	'設施內容及使用現況',	item:	'8',   },
			{	name:	'活化計畫內容',	item:	'9',   },
			{	name:	'活化計畫效益',	item:	'10',   },
			{	name:	'活化經費編列說明',	item:	'11',   },
			{	name:	'解除列管原因說明',	item:	'12',   },
			{	name:	'設施活化類別',	item:	'13',   },
			{	name:	'活化標準',	item:	'14',   },
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