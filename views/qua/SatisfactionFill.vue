<template>
	<div>
		<br>
		<h3><strong><font color="brown">學員滿意度調查表單</font></strong></h3>
		<br>
		<b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>對本次訓練整體滿意度：</b-col>
          <b-col class="col-md-8 text-left">
				<b-form-radio-group
					id="radio-group-1"
					v-model="picked"
					:options="options"
					name="radio-options"
				></b-form-radio-group>
			</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>對代訓機構行政服務：</b-col>
          <b-col class="col-md-8 text-left">
				<b-form-radio-group
					id="radio-group-1"
					v-model="picked"
					:options="options"
					name="radio-options"
				></b-form-radio-group>
			</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>對代訓機構教學設施：</b-col>
          <b-col class="col-md-8 text-left">
				<b-form-radio-group
					id="radio-group-1"
					v-model="picked"
					:options="options"
					name="radio-options"
				></b-form-radio-group>
			</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>對講師授課內容：</b-col>
          <b-col class="col-md-8 text-left">
				<b-form-radio-group
					id="radio-group-1"
					v-model="picked"
					:options="options"
					name="radio-options"
				></b-form-radio-group>
			</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>對訓練遴聘之講師：</b-col>
          <b-col class="col-md-8 text-left">
				<b-form-radio-group
					id="radio-group-1"
					v-model="picked"
					:options="options"
					name="radio-options"
				></b-form-radio-group>
			</b-col>
        </b-row>
        <b-row class="border border-dark">
			<b-col class="col-md-4 "><font color="red">*</font>您的寶貴建議與意見(限500字)：</b-col>
			<b-col class="col-md-8 text-left">
				<b-textarea></b-textarea>
			</b-col>
        </b-row>
		<b-row class="border border-dark">
			<b-col class="col-md-4 "><font color="red">*</font>聯絡電話：</b-col>
			<b-col class="col-md-8 text-left">
				<b-input></b-input>
			</b-col>
        </b-row>
      </b-container>
		<br>
		<b-container>
		<b-row class="col-sm row justify-content-end" >
			<b-button size="sm" variant="success" @click="add">送出</b-button>&ensp; 
			<b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
		</b-row>
		</b-container>
	</div>
</template>


<script>


export default {
 data(){
	return{
		options:[
			{text:'非常滿意',	value:'A'},
			{text:'滿意',	value:'B'},
			{text:'普通',	value:'C'},
			{text:'不滿意',	value:'D'},
			{text:'非常不滿意',	value:'E'},
		],
		
	}
 },
 methods: {

 }
}


</script>

<style>
.col-md-4 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}
</style>