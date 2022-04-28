<template>
  <div>
    <br />
    <h3>水利類落後工程標案一覽表</h3>
    <br />
    <div>
      <b-container fluid>
        <b-form-row class="row justify-content-center bg-primary text-light">
          <h3>各機關所屬1千萬元以上水利類工程進度落後5%以上標案一覽表</h3>
        </b-form-row>
        <b-form-row class="row justify-content-end">
          <b-table striped hover :items="items" :fields="fields">
            <template #thead-top>
              <b-tr>
                <b-th colspan="15"></b-th>
                <b-th class="border" variant="secondary" colspan="6"
                  >施工中</b-th
                >
                <b-th class="border" variant="info" colspan="3"
                  >查核情形</b-th
                >
              </b-tr>
            </template>
          </b-table>
        </b-form-row>
        <b-form-row class="row justify-content-end">
          <b-pagination
            align="right"
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
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 1,
      // 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
      fields: [
        {
          key: "serial",
          label: "流水號",
        },
        {
          key: "isFlo",
          label: "屬重點防汛工程",
        },
        {
          key: "category",
          label: "工程類別",
        },
        {
          key: "cmdNum",
          label: "工程標案編號",
        },
        {
          key: "cmdName",
          label: "工程標案名稱",
        },
        {
          key: "wkut",
          label: "主辦機關",
        },
        {
          key: "manage",
          label: "專案管理單位",
        },
        {
          key: "design",
          label: "規劃設計單位",
        },
        {
          key: "monitor",
          label: "監造單位",
        },
        {
          key: "vendor",
          label: "施工廠商",
        },
        {
          key: "address",
          label: "工程地點",
        },
        {
          key: "budget",
          label: "預算金額",
        },
        {
          key: "decisive",
          label: "決標金額",
        },
        {
          key: "decisiveDate",
          label: "決標日期",
        },
        {
          key: "preDate",
          label: "預定完工日期",
        },
        {
          key: "ym",
          label: "年月",
        },
        {
          key: "preRate",
          label: "預定(%)",
        },
        {
          key: "actualRate",
          label: "實際(%)",
        },
        {
          key: "diffRate",
          label: "差異(%)",
        },
        {
          key: "reason",
          label: "落後原因",
        },
        {
          key: "method",
          label: "解決對策",
        },
        {
          key: "checkDate",
          label: "查核日期",
        },
		{
          key: "checkGoup",
          label: "查核小組",
        },
		{
          key: "checkScore",
          label: "查核分數",
        },
      ],
      items: [
        {
          isFlo: "",
          category:"排水工程",
          wkut: "嘉義縣政府水利處下水道工程科",
          cmdNum: "109TS359A4-1",
          cmdName: "嘉義縣新港鄉新港公園抽水站新建工程",
			manage:"王正源建築師事務所",
			design:"楊瑞禎聯合建築師事務所",
		monitor:"楊瑞禎聯合建築師事務所",
		vendor:"長宏營造股份有限公司",
		address:"嘉義縣新港鄉",
		budget:"116,095",
		decisive:"114,970",
		decisiveDate:"109/10/28",
		preDate:"111/05/26",
		ym:"11002",
		preRate:1.649,
		actualRate:2.912,
		diffRate:1.263,
		reason:"1.景觀工程無法提前施工(土方變更計畫及建造執照變更期程延遲). 2.變更設計內含材料施工面經設計監造單位更動，承商配合，惟材料送審選色...",
		method:"1.既現有工項可同步及不可同步但可獨立的項目，檢討並行，減少要徑壓力。 2.研討非要徑可提前",
		checkDate:"109/03/13",
		checkGoup:"新北市政府",
		checkScore:"77",
        },
 
      ],
    };
  },
  methods: {
    queryHandler() {},
    reset() {},
    alertMsg() {
      alert("顯示圖資資訊");
    },
  },
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