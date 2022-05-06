<template>
  <div>
    <br />
    <h3><strong>年度活化閒置公共設施里程碑落後時間一覽表</strong></h3>
    <br />
    <b-container fluid>
		<b-table striped hover :items="items" :fields="fields" >
			<template #thead-top>
				<b-tr>
					<b-th colspan="2" ></b-th>
					<b-th class="border border-dark " variant="info" colspan="4">里程碑(L1)</b-th>
					<b-th class="border border-dark " variant="info" colspan="4">里程碑(L2)</b-th>
					<b-th class="border border-dark " variant="info" colspan="4">里程碑(L3)</b-th>
					<b-th class="border border-dark " variant="info" colspan="4">里程碑(L4)</b-th>
					<b-th colspan="1"></b-th>
				</b-tr>
			</template>
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
				label:	'案件名稱'
			},
			{
				key:	'behindTime',
				label:	'里程碑(L1)'
			},
			{
				key:	'method',
				label: '里程碑預定完成日期(L1)'
			}, 
			{
				key:	'rate',
				label:	'里程碑實際完成日期(L1)'
			}, 
			{
				key:	'rate1',
				label:	'採計落後時間(L1)'
			}, 
			{
				key:	'behindTime2',
				label:	'里程碑(L2)'
			},
			{
				key:	'method2',
				label: '里程碑預定完成日期(L2)'
			}, 
			{
				key:	'rate2',
				label:	'里程碑實際完成日期(L2)'
			}, 
			{
				key:	'rate32',
				label:	'採計落後時間(L2)'
			}, 
			{
				key:	'behindTime3',
				label:	'里程碑(L3)'
			},
			{
				key:	'method3',
				label: '里程碑預定完成日期(L3)'
			}, 
			{
				key:	'rate3',
				label:	'里程碑實際完成日期(L3)'
			}, 
			{
				key:	'rate33',
				label:	'採計落後時間(L3)'
			}, 
			{
				key:	'behindTime4',
				label:	'里程碑(L4)'
			},
			{
				key:	'method4',
				label: '里程碑預定完成日期(L4)'
			}, 
			{
				key:	'rate4',
				label:	'里程碑實際完成日期(L4)'
			}, 
			{
				key:	'rate444',
				label:	'採計落後時間(L4)'
			}, 
			{
				key:	'rate44',
				label:	'採計落後時間合計'
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