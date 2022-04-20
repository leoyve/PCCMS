<template>
  <div>
    <b-container fluid>
      <b-form-row class="justify-content-center text-light bg-secondary"><h4><strong>活化補助工作計畫審查核定情形一覽表</strong> </h4></b-form-row
      >
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(period)="row">
          <b-container>
            <b-row>
              <b-col>{{ row.item.bdate }} ~ {{ row.item.edate }}</b-col>
            </b-row>
          </b-container>
        </template>
        <template #cell(beforeReview)="row">
          <b-container>
            <b-row>
              <b-col><strong>主辦機關</strong></b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.beforeForm.a1 }}</b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.beforeForm.a2 }}</b-col>
            </b-row>
            <b-row>
              <b-col><strong>主管機關</strong></b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.beforeForm.b1 }}</b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.beforeForm.b2 }}</b-col>
            </b-row>
            <b-row>
              <b-col><strong>中央目的事業主管機關：</strong></b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.beforeForm.c1 }}</b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.beforeForm.c2 }}</b-col>
            </b-row>
          </b-container>
        </template>
        <template #cell(currentReview)="row">
          <b-container>
            <b-row>
              <b-col><strong>工程會:</strong></b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.currentForm.b1 }}</b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.currentForm.b2 }}</b-col>
            </b-row>
            <b-row>
              <b-col><strong>行政院:</strong></b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.currentForm.c1 }}</b-col>
            </b-row>
            <b-row>
              <b-col>{{ row.item.currentForm.c2 }}</b-col>
            </b-row>
          </b-container>
        </template>
      </b-table>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {

      // 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
      fields: [
        {
          key: "PLNNO",
          label: "計畫編號",
          tdClass: 'text-left',
        },
        {
          key: "PLNNAME",
          label: "計畫名稱",
          tdClass: 'text-left',
        },
        {
          key: "constName",
          label: "閒置設施",
          tdClass: 'text-left',
        },
        {
          key: "wkut",
          label: "管理機關",
        },
        {
          key: "plnamt",
          label: "計畫經費(千元)",
        },
        {
          key: "period",
          label: "計畫期程",
        },
        {
          key: "beforeReview",
          label: "函報日期及文號",
          tdClass: "text-left",
        },
        {
          key: "currentReview",
          label: "審核日期及文號",
          tdClass: "text-left",
        },
        {
          key: "reviewResult",
          label: "審核結果及意見",
        },
        {
          key: "action",
          label: "",
          thStyle: { width: "8%" },
        },
      ],
      items: [
        {
          PLNNO: "1110000001",
          PLNNAME: "頭份鎮停二立體停車場拆除工程",
          wkut: "苗栗縣頭份市公所",
          constName: "頭份鎮停二立體停車場",
          plnamt: "5,000",
          bdate: "1110401",
          edate: "1130401",
          beforeForm: {
            a1: "1070430",
            a2: "府教國字第1070085690號函",
            b1: "1070430",
            b2: "府教國字第1070085690號函",
            c1: "1070529",
            c2: "臺教國署國字第1070057943號",
          },
          currentForm: {
            b1: "1080426",
            b2: "工程管字第1080009225號",
            c1: "1080507",
            c2: "院臺工字第1080014066號",
          },
          reviewResult: "同意",
        },
      ],
      reviewResult: [
        { value: "", text: "不拘" },
        { value: "Y", text: "審查同意" },
        { value: "N", text: "審查不同意" },
        { value: "D", text: "退回修正" },
      ],
      reviewSituation: [
        { value: "", text: "全部" },
        { value: "N", text: "尚未審查" },
        { value: "T", text: "今日審查" },
        { value: "D", text: "七日內審查" },
        { value: "Y", text: "已審查" },
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