<template>
  <div>
    <br />
    <h3><strong>年度活化閒置公共設施各季績效指標一覽表</strong></h3>
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
				label:	'案件名稱'
			},
			{
				key:	'indexA',
				label:	'閒置時間參數(T)'
			},
			{
				key:	'behindTime',
				label:	'重要性參數(I)'
			},
			{
				key:	'method',
				label: 'T*I'
			}, 
			{
				key:	'rate',
				label:	'總建造經費(千元，C)'
			}, 
			{
				key:	'rate1',
				label:	'解除列管(第1季)'
			}, 
      {
				key:	'rate2',
				label:	'指標(第1季)'
			}, 
      {
				key:	'rate3',
				label:	'解除列管(第2季)'
			}, 
      {
				key:	'rate4',
				label:	'指標(第2季)'
			}, 
      {
				key:	'rate5',
				label:	'解除列管(第3季)'
			}, 
      {
				key:	'rate6',
				label:	'指標(第3季)'
			}, 
      {
				key:	'rate7',
				label:	'解除列管(第4季)'
			}, 
      {
				key:	'rate8',
				label:	'指標(第4季)'
			}, 
      {
				key:	'rate9',
				label:	'總指標'
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