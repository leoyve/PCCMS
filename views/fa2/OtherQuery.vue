<template>
  <div>
    <br />
    <h3><strong>顯示活化閒置公共設施年度績效與補助型計畫補助款扣除處理統計總表</strong></h3>
    <br />
    <b-container>
      <b-form-row>
        <b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="補助年度" label-align-md="right">
          <b-form-input></b-form-input>
        </b-form-group>
      </b-form-row>
      <b-form-row>
        <b-form-group class="col-md-6" label-cols-md="3" content-cols-md="9" label="第1季督導小組會議日期" label-align-md="right">
          <b-datepicker/>
        </b-form-group>
        <b-form-group class="col-md-6" label-cols-md="3" content-cols-md="9" label="第2季督導小組會議日期" label-align-md="right">
          <b-datepicker/>
        </b-form-group>
      </b-form-row>
      <b-form-row>
        <b-form-group class="col-md-6" label-cols-md="3" content-cols-md="9" label="第3季督導小組會議日期" label-align-md="right">
          <b-datepicker/>
        </b-form-group>
        <b-form-group class="col-md-6" label-cols-md="3" content-cols-md="9" label="第4季督導小組會議日期" label-align-md="right">
          <b-datepicker/>
        </b-form-group>
      </b-form-row>
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="success" @click="queryHandler">查詢</b-button>&nbsp;
        <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button
        >
      </b-form-row>
    </b-container>
    <br />
   <b-table striped hover :items="items" :fields="fields" head-variant="dark">
				<template #cell(city)="row">
          <a href="#" @click="gotoParam('OtherQueryCity', row.item)">{{row.item.cityName}}</a>
				</template>
        <template #cell(indexA)="row">
          <a href="#" @click="gotoParam('OtherQueryIndex', row.item)">{{row.item.indexANum}}</a>
				</template>
        <template #cell(behindTime)="row">
          <a href="#" @click="gotoParam('OtherQueryBehind', row.item)">{{row.item.behindTimeNum}}</a>
				</template>
			</b-table>
  </div>
</template>


<script>

export default {
  data() {
    return {
      fields: [
			{
				key:	'city',
				label:	'縣(市)別'
			},
			{
				key:	'indexA',
				label:	'績效總指標(A)'
			},
			{
				key:	'behindTime',
				label:	'里程碑落後時間(L)'
			},
			{
				key:	'method',
				label: '擇優計算方式'
			}, 
			{
				key:	'rate',
				label:	'建議補助款扣減比率'
			}, 
		],
      items: [
        {
          cityName: "新竹縣政府",
          indexANum: "0.00",
          behindTimeNum: "6.0",
          method: "里程碑落後時間",
          rate: "免扣減",
        },
        {
          cityName: "雲林縣政府",
          indexANum: "0.00",
          behindTimeNum: "4.0",
          method: "里程碑落後時間",
          rate: "1%~3%",
        },
        {
          cityName: "桃園市政府",
          indexANum: "0.00",
          behindTimeNum: "0.5",
          method: "里程碑落後時間",
          rate: "免扣減",
        },
      ],
    };
  },
};
</script>
<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>