<template>
  <div>
    <br />
    <h3><strong>填報及申請活化計畫</strong></h3>
    <br />
    <b-container>
      <b-form-row class="justify-content-end">
        <b-button size="l" variant="success" @click="gotoParam('NewActivations')">新增</b-button>
      </b-form-row>
      <br />
      <b-form-row>
        <b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="補助年度" label-align-md="right">
          <b-form-input></b-form-input>
        </b-form-group>
      </b-form-row>
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="success" @click="queryHandler">查詢</b-button>&nbsp;
        <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button
        >
      </b-form-row>
    </b-container>
    <br />
    <activationsList :replaceItems="items" />
  </div>
</template>


<script>
import activationsList from "./ActivationsList.vue";

export default {
  data() {
    return {
      items: [
        {
          PLNNO: "1110000001",
          PLNNAME: "頭份鎮停二立體停車場拆除工程",
          wkut: "苗栗縣頭份市公所",
          constName: "頭份鎮停二立體停車場",
          plnamt: "5,000",
          bdate: "111/02/03",
          edate: "111/12/12",
          prjnum: 2,
          currentForm: {
            a1: "1061109",
            a2: "頭市農字第1060028086號",
            b1: "1061117",
            b2: "府工道字第1060219036號",
            c1: "1061225",
            c2: "交路字第1060416418",
          },
          diff: true,
          beforeForm: {},
        },
        {
          PLNNO: "1110000002",
          PLNNAME:
            "嘉義縣布袋鎮布袋鎮景山國民小學推動閒置公共設施活化--正義校區活化計畫",
          wkut: "嘉義縣布袋鎮景山國民小學",
          constName: "嘉義縣布袋鎮景山國民小學正義校區",
          plnamt: "8,214",
          bdate: "111/02/03",
          edate: "111/12/12",
          prjnum: 2,
          currentForm: {},
          diff: true,
          beforeForm: {},
        },
        {
          PLNNO: "1110000004",
          PLNNAME: "桃園市大園區五權砲陣地舊營舍活化計畫",
          wkut: "桃園市政府都市發展局",
          constName: "桃園市大園區五權砲陣地舊營舍活化計畫",
          plnamt: "26,000	",
          bdate: "111/02/03",
          edate: "111/12/12",
          prjnum: 2,
          currentForm: {
            a1: "1061109",
            a2: "頭市農字第1060028086號",
            b1: "1061117",
            b2: "府工道字第1060219036號",
          },
          diff: false,
          beforeForm: {
            a1: "1061109",
            a2: "頭市農字第1060028086號",
            b1: "1061117",
            b2: "府工道字第1060219036號",
            c1: "1061225",
            c2: "交路字第1060416418",
            d1: "1110203",
            d2: "107年7月31日工程管字第10700235660號函",
            agree: false,
          },
        },
      ],
    };
  },
  methods: {},
  components: {
    activationsList,
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