<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>學員名單資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>座號</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>身份證字號</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>姓名</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>報名資格</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
							id="radio-group-1"
							v-model="picked"
							:options="options"
							name="radio-options">
						</b-form-radio-group>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">修改</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="reset">取消</b-button>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data(){
    return{      
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      options: [
        {	text:	'取得公共工程類科專業技師或建築師證書者（含消防設備師）',	value:	'A'},
        {	text:	'大專以上學校土木、水利、環工、建築、營建、電機、機械、電子、化工及工程相關科系畢業，並於畢業後有二年（含）以上工程實務經驗者',	value:	'B'},
        {	text:	'高級工業職業學校土木、水利、環工、建築、營建、電機、機械、電子、化工、建築製圖、電工科及工程相關科別畢業，並於畢業後有三年（含）以上工程實務經驗者',	value:	'B'},
        {	text:	'普通考試或相當於普通考試以上之特種考試土木、建築、電機、化工及工程相關類科考試(含消防設備士)及格，或具有委任（派）職務，並於及格後或擔任委任（派）職務有二年（含）以上工程實務經驗者',	value:	'C'},
        {	text:	'領有建築、機電及工程相關職類乙級技術士以上或甲種電匠，並於取得証照後有三年以上工程實務經驗者',	value:	'D'},
        {	text:	'營造(機水電)業登記之負責人（含土木包工業、甲級工程承裝業），並於取得負責人資格後有三年以上工程實務經驗者',	value:	'E'},
        {	text:	'領有內政部核發之工地主任結業證書者',	value:	'F'},
        {	text:	'具有七年（含）以上之工程實務經驗者',	value:	'G'},
      ],
  }
 },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
  },


}
</script>
<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>