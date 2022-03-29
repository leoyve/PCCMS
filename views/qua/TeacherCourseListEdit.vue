<template>
  <div>
    <br>
    <b-form-row class="justify-content-center "><h2><strong>代訓機構課程新增授課教師</strong></h2></b-form-row>
    <br>
    <b-container >
			<b-form-row class="justify-content-end">
				<b-button size="l" variant="success"  @click="gotoParam('TrainingClassDetail', )">回上一頁</b-button>&nbsp;&nbsp;
			</b-form-row>
			<br>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="姓名" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
        <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
    <br>
    <div>
			<b-container fluid>
				<!--帶入選項值-->
        <b-form-row class="justify-content-end"><b-button size="l" variant="success"  @click="gotoParam('StageDateEdit', )">新增</b-button></b-form-row>
        <br>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}課程科目新增授課教師勾選一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
            <template #cell(checkBar)="row">
              <b-checkbox v-model="model"	@value="row.item.id"></b-checkbox>
            </template>
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('TraineesSatisfactionList', row.item)">明細</b-button>
						</template>
					</b-table>
          <b-pagination align="right"
						v-model="currentPage"
						:total-rows="rows"
						:per-page="perPage"
						first-number
					></b-pagination>
				</b-form-row>
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
      fields: [
      {
				key:	'checkBar',
				label:	'',
			},
			{
				key:	'id',
				label:	'流水號',
			},
			{
				key:	'teacherName',
				label:	'教師姓名'
			},
			{
				key:	'idNum',
				label:	'身份證字號'
			} ,
			{
				key:	'serviceUnit',
				label:	'服務單位名稱'
			},
			{
				key:	'title',
				label: 	'職稱'
			}, 
			{
				key:	'isRetire',
				label:	'是否退休',
				thStyle: { width: "8%" },
			},
			{
				key:	'checkSourse',
				label:	'本班別已核定授課之課程',
				thStyle: { width: "8%" },
			}
		],
		items:	[
			{
				id: '1',	teacherName: '王XX', idNum: 'F*********', serviceUnit: '交通部鐵道局南部工程處', title:'教授',
        isRetire:'退休',checkSourse:'',pk: 5566
			},
			{
				id: '2',	teacherName: '林XX', idNum: 'L*********', serviceUnit: '國立台北科技大學土木系', title:'科長',
				isRetire:'政府單位在職',checkSourse:'',pk: 5566
			},
			{
				id: '3', 	teacherName: '陳XX', idNum: 'G*********', serviceUnit: '台灣電力公司配電工程隊', title:'主任',
				isRetire:'民間單位在職',checkSourse:'基樁工程、連續壁工程',pk: 5566
			}
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