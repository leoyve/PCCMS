<template>
  <div>
	<br>
	<h3><strong><font color="brown">閒置公共設施一覽表</font></strong></h3>
	<br>
    <b-container fluid>
		<b-form-row class="justify-content-center text-light bg-primary">
			<h4><strong>閒置公共設施一覽表</strong></h4>
		</b-form-row>
		<b-form-row class="justify-content-end">
			<b-table striped hover	:items="items"	:fields="fields" head-variant="light">
				<template #cell(action)="row">
					<b-button  size="sm"  variant="outline-secondary"  @click="gotoParam('Fa1CaseDetail', {deleteFlag:true, ...row.item})">明細</b-button>
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
</template>


<script>
export default {
  data() {
    return {
		rows: 100,
		perPage: 1,
		currentPage: 1,
		itemOptions: [
			{ text: "否", value: "A" },
			{ text: "是", value: "B" },
			{ text: "不限", value: "C" },
		],
      // 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
      fields: [
        {
          key: "serial",
          label: "流水號",
        },
		{
          key: "constName",
          label: "設施名稱",
        },
        {
          key: "wkut",
          label: "設施管理機關",
        },
		{
          key: "bosWkut",
          label: "目的事業主管機關",
        },
        {
          key: "status",
          label: "列管狀態",
        },
        {
          key: "action",
          label: "",
        },
      ],
      items: [
        { constName:'彰化縣鹿港鎮第一公有零售市場2樓美食街廣場',wkut: "彰化縣鹿港鎮公所", bosWkut:'經濟部', status:'繼續列管'},
		{ constName:'桃園市新明公有零售市場(原中壢區第二公有市場)',wkut: "桃園市政府經濟發展局", bosWkut:'經濟部', status:'繼續列管'},
      ],
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