<template>
  <div>
    <br />
    <h3>重點防汛工程標案施工查核一覽表</h3>
    <br />
    <div>
      <b-container fluid>
        <b-form-row class="row justify-content-center bg-primary text-light">
          <h3>各機關查核小組110年度重點防汛工程施工查核案件一覽表</h3>
        </b-form-row>
        <b-form-row class="row justify-content-end">
          <b-table striped hover :items="items" :fields="fields">
            <template #cell(action)="row">
              <b-button size="sm" variant="outline-secondary" @click="alertMsg(row.item)">檢視</b-button>
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
          key: "checkDate",
          label: "查核日期",
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
          key: "decisive",
          label: "決標金額",
        },
        {
          key: "checkScore",
          label: "查核分數",
        },
        {
          key: "checkType",
          label: "查核類別",
        },
        {
          key: "inform",
          label: "不預先通知",
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
          key: "plan",
          label: "歸屬計畫",
        },
        {
          key: "action",
          label: "",
          thStyle: { width: "8%" },
        },
      ],
      items: [
        {
          plan: "縣市管河川及區域排水整體改善計畫",
          wkut: "嘉義縣政府水利處下水道工程科",
          cmdNum: "109TS359A4-1",
          cmdName: "嘉義縣新港鄉新港公園抽水站新建工程",
          manage:"王正源建築師事務所",
          design:"楊瑞禎聯合建築師事務所",
          monitor:"楊瑞禎聯合建築師事務所",
          vendor:"長宏營造股份有限公司",
          decisive:"114,970",
          decisiveDate:"109/10/28",
          preDate:"111/05/26",
          checkDate:"110/12/12",
          checkScore:"77",
          checkType:"查核",
          inform:"Y",
        },
        {
          plan: "無",
          wkut: "桃園市政府工務局新建工程處",
          cmdNum: "1081105-A2",
          cmdName: "桃園市立楊梅高級中等學校綜合教學大樓新建工程",
          manage:"王正源建築師事務所",
          design:"張涵瑋建築師事務所",
          monitor:"張涵瑋建築師事務所",
          vendor:"嘉崴營造工程有限公司",
          decisive:"252,685",
          decisiveDate:"109/10/28",
          preDate:"111/05/26",
          checkDate:"110/01/21",
          checkScore:"78",
          checkType:"查核",
          inform:"",
        },
 
      ],
    };
  },
  methods: {
    queryHandler() {},
    reset() {},
    alertMsg() {
      alert("參考標管查核小組資訊");
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