<template>
  <div>
    <br>
    <h3>相關公函及附件</h3>
    <br>
    <b-container fluid>
      <b-form-row class="justify-content-end">
        <b-col class="text-left"><a href="#">1.啟用閒置公共設施通報機制通知函及系統操作手冊(102.12.3).pdf</a></b-col>
      </b-form-row>
      <b-form-row class="justify-content-end">
        <b-col class="text-left"><a href="#">2.活化閒置公共設施成功案例.pdf</a></b-col>
      </b-form-row>
      <b-form-row class="justify-content-end">
        <b-col class="text-left"><a href="#">3.列管中閒置公共設施「解除列管」申請表(含現勘檢核表範例).doc</a></b-col>
      </b-form-row>
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
  methods: {},
};
</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>