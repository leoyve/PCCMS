<template>
  <div>
    <br />
    <b-container fluid>
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('ActivationsManager')">回上一頁</b-button>
      </b-form-row>
      <br />
      <b-form-row class="row justify-content-center bg-secondary text-light">
        <h3>活化工作里程碑一覽表</h3>
      </b-form-row>
      <b-form-row class="row justify-content-end">
        <b-table striped hover :items="items" :fields="fields">
          <template #cell(action)="row">
            <b-button size="sm" variant="success" @click="gotoParam('WorkMilestoneEdit', {updateFlag: true,...row.item,})">編輯</b-button>&nbsp;
            <b-button size="sm" variant="danger"  @click="deleteCheck(row.item)" v-if="!row.item.defaultFlag">刪除</b-button>
          </template>
        </b-table>
      </b-form-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "serial",
          label: "流水號",
        },
        {
          key: "PRJNO",
          label: "工作編號",
        },
        {
          key: "NAME",
          label: "工作名稱",
        },
        {
          key: "TOTAMT",
          label: "經費(仟元)",
        },
        {
          key: "BDATE",
          label: "工作起始日期",
        },
        {
          key: "EDATE",
          label: "工作結束日期",
        },
        {
          key: "PRJKIND",
          label: "工作類別",
        },
        {
          key: "milestone",
          label: "里程碑",
        },
        {
          key: "PMS",
          label: "預定完成日期",
        },
        {
          key: "action",
          label: "",
        },
      ],
      items: [
        {
          PRJNO: "106000000400001",
          NAME: "頭份鎮停二機械式立體停車場拆除工程",
          TOTAMT: "5,000",
          BDATE: "1070101",
          EDATE: "1070531",
          PRJKIND: "工程採購",
          milestone: "招標公告日期",
          PMS: "1090101",
          defaultFlag: true,
        },
        {
          PRJNO: "106000000400002",
          NAME: "頭份鎮停二機械式立體停車場拆除工程",
          TOTAMT: "5,000",
          BDATE: "1070101",
          EDATE: "1070531",
          PRJKIND: "工程採購",
          milestone: "	決標日期",
          PMS: "1090201",
          defaultFlag: true,
        },
        {
          PRJNO: "106000000400003",
          NAME: "頭份鎮停二機械式立體停車場拆除工程",
          TOTAMT: "5,000",
          BDATE: "1070101",
          EDATE: "1070531",
          PRJKIND: "工程採購",
          milestone: "開工日期",
          PMS: "1090301",
          defaultFlag: true,
        },
        {
          PRJNO: "106000000400004",
          NAME: "頭份鎮停二機械式立體停車場拆除工程",
          TOTAMT: "5,000",
          BDATE: "1070101",
          EDATE: "1070531",
          PRJKIND: "工程採購",
          milestone: "完工日期",
          PMS: "1090401",
          defaultFlag: true,
        },
        {
          PRJNO: "106000000400005",
          NAME: "頭份鎮停二機械式立體停車場拆除工程",
          TOTAMT: "5,000",
          BDATE: "1070101",
          EDATE: "1070531",
          PRJKIND: "工程採購",
          milestone: "驗收日期",
          PMS: "1090501",
          defaultFlag: true,
        },
        {
          PRJNO: "106000000400006",
          NAME: "頭份鎮停二機械式立體停車場拆除工程",
          TOTAMT: "5,000",
          BDATE: "1070101",
          EDATE: "1070531",
          PRJKIND: "工程採購",
          milestone: "其他",
          PMS: "1090601",
          defaultFlag: false,
        },
      ],
    };
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