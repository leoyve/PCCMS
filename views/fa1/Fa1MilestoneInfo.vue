<template>
  <div>
    <b-container fluid>
      <b-form-row class="justify-content-center text-light bg-primary">
        <h4><strong>活化計畫各分項作業里程碑一覽表</strong></h4>
      </b-form-row>
      <b-form-row class="justify-content-end">
        <b-table striped hover :items="items" :fields="fields" head-variant="light">
          <template #cell(action)="row">
            <b-button size="sm" variant="success" @click="gotoParam('Fa1MilestoneEdit', { updateFlag: true, ...row.item })">修改</b-button>&nbsp;
            <b-button size="sm" variant="danger" @click="deleteCheck()">刪除</b-button>
          </template>
        </b-table>
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
</template>


<script>
export default {
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 1,
      fields: [
        {
          key: "serial",
          label: "流水號",
        },
        {
          key: "milestone",
          label: "活化計畫各分項作業里程碑",
          tdClass: "text-left",
        },
        {
          key: "bdate",
          label: "開始日期",
        },
        {
          key: "pdate",
          label: "預定完成期限",
        },
        {
          key: "edate",
          label: "實際完成日期",
        },
        {
          key: "action",
          label: "",
        },
      ],
      items: [
        {
          milestone: "積極爭取雲嘉南濱家風景區管理處協助活化",
          bdate: "104/01/01",
          pdate: "104/02/28",
          edate: "104/02/12",
        },
        {
          milestone:
            "縣府辦理「雲林縣四湖鄉三條崙海水浴場親水公園活化再利用方案先期規劃」招標",
          bdate: "104/03/01",
          pdate: "104/07/31",
          edate: "104/07/13",
        },
        {
          milestone: "辦理已解編土地分割登記作業",
          bdate: "104/04/01",
          pdate: "104/08/31",
          edate: "104/07/03",
        },
        {
          milestone:"縣府辦理「雲林縣四湖鄉三條崙海水浴場親水公園活化再利用方案先期規劃」期初審查",
          bdate: "104/07/01",
          pdate: "104/11/30",
          edate: "104/11/25",
        },
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
.col-md-2 {
  background-color: rgb(183, 197, 206);
  color: black;
  text-align: left;
}
</style>