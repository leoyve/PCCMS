<template>
  <div>
    <br/>
    <b-container fluid>
      <b-form-row>
        <b-table striped hover :items="items" :fields="fields">
			<template #cell(action)="row">
				<b-button size="sm" variant="success" @click="gotoParam('FillActivations', row.item)" v-if="fillFlag">填報</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="gotoParam('ActivationsVersionDetail', row.item)" v-if="detailFlag">明細</b-button>
			</template>
			<template #thead-top>
				<b-tr>
					<b-th colspan="6" ></b-th>
					<b-th class="border border-dark " variant="secondary" colspan="4">經費累計執行情形</b-th>
					<b-th colspan="1"></b-th>
					<b-th class="border border-dark " variant="secondary" colspan="2">里程碑執行情形</b-th>
					<b-th colspan="1"></b-th>
				</b-tr>
			</template>
        </b-table>
      </b-form-row>
      <b-pagination align="right" v-model="currentPage"  :total-rows="rows"  :per-page="perPage" first-number></b-pagination>
    </b-container>
  </div>
</template>


<script>
export default {
	props:['replaceItems', 'detailFlag', 'fillFlag'],
  data() {
    return {
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'PLNNO',
				label:	'活化計畫編號'
			},
			{
				key:	'PLNNAME',
				label:	'活化計畫名稱'
			},
			{
				key:	'wkut',
				label: '主辦機關'
			}, 
			{
				key:	'constName',
				label:	'公共設施名稱'
			}, 
			{
				key:	'plnamt',
				label:	'核定經費數(仟元)'
			},
			{
				key:	'pcount',
				label:	'預定執行數'
			},
			{
				key:	'scount',
				label:	'累計執行數	'
			},
			{
				key:	'prate',
				label:	'執行率(%)'
			},
			{
				key:	'arate',
				label:	'達成率(%)'
			},
			{
				key:	'mnum',
				label:	'里程碑項數'
			},
			{
				key:	'pmnum',
				label:	'應完成項數'
			},
			{
				key:	'amnum',
				label:	'已完成項數'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
		],
      items: this.replaceItems,
    };
  },
  methods: {},

  mounted() {
    this.items.forEach((items, index) => {
      items.serial = index + 1;
    });
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