<template>
  <div>
    <br />
    <h3><strong>年度活化閒置公共設施年度績效與補助型計畫補助款扣除處理統計一覽表</strong></h3>
    <br />
    <b-container fluid>
      <b-table striped hover :items="items" :fields="fields" head-variant="dark">
			</b-table>
    </b-container>
    <br />
  </div>
</template>


<script>

export default {
  data() {
    return {
      fields: [
			{
				key:	'city',
				label:	'流水號'
			},
			{
				key:	'indexA',
				label:	'設施編號'
			},
			{
				key:	'behindTime',
				label:	'設施名稱'
			},
			{
				key:	'method',
				label: '設施管理機關'
			}, 
			{
				key:	'rate',
				label:	'總建造費(C)'
			}, 
      {
				key:	'rate1',
				label:	'案件來源'
			}, 
      {
				key:	'rate2',
				label:	'完工日期'
			}, 
      {
				key:	'rate3',
				label:	'閒置起始日期'
			}, 
      {
				key:	'rate4',
				label:	'開始列管日期'
			}, 
      {
				key:	'rate5',
				label:	'解除列管日期'
			}, 
      {
				key:	'rate6',
				label:	'閒置時間參數(T)'
			}, 
      {
				key:	'rate7',
				label:	'重要性參數(I)'
			}, 
      {
				key:	'rate8',
				label:	'解列T*I(Q1)'
			}, 
      {
				key:	'rate9',
				label:	'列管T*I(Q1)'
			}, 
      {
				key:	'rate10',
				label:	'解列C(Q1)'
			}, 
      {
				key:	'rate11',
				label:	'列管C(Q1)'
			}, 
      {
				key:	'rate12',
				label:	'解列T*I(Q2)'
			}, 
      {
				key:	'rate13',
				label:	'列管T*I(Q2)'
			}, 
      {
				key:	'rate14',
				label:	'解列C(Q2)'
			},
      {
				key:	'rate15',
				label:	'列管C(Q2)'
			},

      {
				key:	'rate16',
				label:	'解列T*I(Q3)'
			},
      {
				key:	'rate17',
				label:	'列管T*I(Q3)'
			},
      {
				key:	'rate18',
				label:	'解列C(Q3)'
			},
      {
				key:	'rate19',
				label:	'列管C(Q3)'
			},
      {
				key:	'rate20',
				label:	'解列T*I(Q4)'
			},
      {
				key:	'rate21',
				label:	'列管T*I(Q4)'
			},
      {
				key:	'rate22',
				label:	'解列C(Q4)'
			},
      {
				key:	'rate23',
				label:	'列管C(Q4)'
			},
      {
				key:	'rate24',
				label:	'里程碑(L1)'
			},
      {
				key:	'rate25',
				label:	'里程碑預定完成日期(L1)'
			},
      {
				key:	'rate26',
				label:	'里程碑實際完成日期(L1)'
			},
      {
				key:	'rate27',
				label:	'採計落後時間(L1)'
			},
      {
				key:	'rate28',
				label:	'里程碑(L2)'
			},
      {
				key:	'rate29',
				label:	'里程碑預定完成日期(L2)'
			},
      {
				key:	'rate30',
				label:	'里程碑實際完成日期(L2)'
			},
      {
				key:	'rate31',
				label:	'採計落後時間(L2)'
			},
      {
				key:	'rate32',
				label:	'里程碑(L3)'
			},
      {
				key:	'rate33',
				label:	'里程碑預定完成日期(L3)'
			},
      {
				key:	'rate34',
				label:	'里程碑實際完成日期(L3)'
			},
      {
				key:	'rate35',
				label:	'採計落後時間(L3)'
			},
      {
				key:	'rate36',
				label:	'里程碑(L4)'
			},
      {
				key:	'rate37',
				label:	'里程碑預定完成日期(L4)'
			},
      {
				key:	'rate38',
				label:	'里程碑實際完成日期(L4)'
			},
      {
				key:	'rate39',
				label:	'採計落後時間(L4)'
			},
      {
				key:	'rate40',
				label:	'採計落後時間合計(L)'
			},


		],
      items: undefined,
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