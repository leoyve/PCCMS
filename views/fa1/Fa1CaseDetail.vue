<template>
  <div>
    <br />
    <b-form-row class="justify-content-center">
		<h2><strong>閒置公共設施管理畫面</strong></h2>
	</b-form-row>
    <br />
    <b-container fluid>
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('DivisionCaseQuery')">回上一頁</b-button>
      </b-form-row>
      <br />
      <b-form-row class="justify-content-end">
        <b-col class="col-md-9">
			<h4 class="text-left"><font color="red">閒置公共設施基本資料</font></h4>
		</b-col>
        <b-col class="col-md-3">
			<b-button size="sm" variant="success" @click="gotoParam('Fa1CaseEdit')">修改通報案件</b-button>&nbsp;          
			<b-button size="sm" variant="danger" @click="deleteCheck()">刪除通報案件</b-button>
        </b-col>
      </b-form-row>
      <br />
      <fa1CaseInfo />
      <br />
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-11 text-left">
			<h4><strong><font color="red">預算來源</font></strong></h4>
		</b-col>
        <b-col class="col-md-1">
			<b-button size="sm" variant="success" @click="gotoParam('Fa1BudgetEdit', { addFlag: true })">新增</b-button>
		</b-col>
      </b-form-row>
      <fa1BudgetInfo />
      <br />
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-11 text-left">
			<h4><strong><font color="red">各分項作業里程碑</font></strong></h4>
		</b-col>
        <b-col class="col-md-1">
			<b-button size="sm" variant="success" @click="gotoParam('Fa1MilestoneEdit', { addFlag: true })">新增</b-button>
		</b-col>
      </b-form-row>
      <fa1MilestoneInfo />
      <br />
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-12 text-left">
			<h4><strong><font color="red">各月活化辦理情形</font></strong></h4>
		</b-col>
      </b-form-row>
      <fa1MonthlyInfo />
      <br />
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-11 text-left">
			<h4><strong><font color="red">上傳照片文件檔案</font></strong></h4>
		</b-col>
        <b-col class="col-md-1">
			<b-button size="sm" variant="success" @click="gotoParam('ChangeDivisionPhoto', { addFlag: true })">上傳文件檔案</b-button>
		</b-col>
      </b-form-row>
		<b-form-row class="justify-content-center text-light bg-primary">
			<h4><strong>上傳照片及文件檔案一覽表</strong></h4>
		</b-form-row>
		<b-form-row class="justify-content-center">
			<b-table striped hover :items="items2" :fields="fields2" head-variant="dark">
				<template #cell(action)="row">
					<b-button size="sm" variant="success" @click="gotoParam('ChangeDivisionPhoto', {updateFlag: true,...row.item})">修改</b-button>&nbsp;
					<b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
				</template>
				<template #cell(photo)>
					<b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg" width="100" height="100"></b-img>
				</template>
			</b-table>
		</b-form-row>
	</b-container>
  </div>
</template>


<script>
import fa1CaseInfo from "./Fa1CaseInfo.vue";
import fa1BudgetInfo from "./Fa1BudgetInfo.vue";
import fa1MilestoneInfo from "./Fa1MilestoneInfo.vue";
import fa1MonthlyInfo from "./Fa1MonthlyInfo.vue";

export default {
  data() {
    return {
      fields: [
        {
          key: "serial",
          label: "流水號",
        },
        {
          key: "divisionDate",
          label: "分案日期",
        },
        {
          key: "divisioNum",
          label: "分案時間序號	",
        },
        {
          key: "reason",
          label: "分案原因",
        },
        {
          key: "desc",
          label: "分案意見說明	",
        },
        {
          key: "wkut",
          label: "查處機關	",
        },
        {
          key: "situation",
          label: "查處情形	",
          thStyle: { width: "30%" },
        },
        {
          key: "isCheck",
          label: "是否納入閒置系統列管	",
        },
        {
          key: "caseNum",
          label: "列管案件編號	",
        },
        {
          key: "unReason",
          label: "不納入列管原因	",
        },
        {
          key: "action",
          label: "",
          thStyle: { width: "10%" },
        },
      ],
      items: [
        {
          divisionDate: "110/02/03",
          divisioNum: "1",
          reason: "分案原因",
          desc: "分案意見說明",
          wkut: "臺中市后里區后里國民小學",
          situation:
            "依教育部104年9月23日臺教授國字第1040105213號函查處結果，「后里區后里國小通學步道工程」於104年5月12日與廠商終止契約，正辦理後續採購相關事宜，本設施尚處於施工期間，非屬閒置公共設施。",
          isCheck: "是",
          caseNum: "1100100001",
          unReason: "不納入列管原因",
          pk: 5566,
        },
      ],
      fields2: [
        {
          key: "id",
          label: "流水號",
        },
        {
          key: "wkut",
          label: "上傳機關",
        },
        {
          key: "photo",
          label: "照片預覽圖",
        },
        {
          key: "photoComment",
          label: "照片說明",
          thStyle: { width: "20%" },
        },
        {
          key: "review",
          label: "審核結果",
        },
        {
          key: "reviewComment",
          label: "審核不通過理由",
        },
        {
          key: "action",
          label: "",
        },
      ],
      items2: [
        //待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
        {
          id: 1,
          number: "11000000001",
          wkut: "行政院公共工程委員會",
          photoComment:
            "施工人員未戴安全帽及穿著反光背心, 鋼筋裸露未加保護套, 土堆未覆蓋，造成揚塵.",
          review: "(尚未審核)",
          reviewComment: "照片過於模糊",
          pk: 5566,
        },
      ],
    };
  },
  methods: {},
  components: {
    fa1CaseInfo,
    fa1BudgetInfo,
    fa1MilestoneInfo,
    fa1MonthlyInfo,
  },
  mounted() {
    this.items.forEach((items, index) => {
      items.serial = index + 1;
    });
  },
};
</script>
<style>
.col-md-2 {
  background-color: rgb(183, 197, 206);
  color: black;
  text-align: left;
}
</style>