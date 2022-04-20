<template>
  <div>
    <b-container fluid>
      <b-form-row class="justify-content-center text-light bg-primary">
        <h4><strong>活化計畫各月活化辦理情形一覽表</strong></h4>
      </b-form-row>
      <b-form-row class="justify-content-end">
        <b-table striped hover :items="items" :fields="fields" head-variant="light">
          <template #cell(action)="row">
            <b-button size="sm" variant="success" @click="gotoParam('Fa1MonthlyEdit',row.item)">填報</b-button>&nbsp;
            <!--應該只有中央主管機關以上才看得到-->
            <b-button size="sm" variant="info" @click="gotoParam('Fa1MonthlyBosEdit',row.item)">督辦</b-button>&nbsp;
          </template>
          <template #cell(pmilestone)="row">
              <b-container v-for="milestone in row.item.arryaData" :key="milestone.id" fluid>
                <b-row >
                  <b-col >{{milestone.event}}
                    <div v-if="milestone.bdate != null">{{milestone.bdate}}預定開始</div>
                    <div v-if="milestone.ddate != null">{{milestone.ddate}}預定結束</div>   
                  </b-col>
                </b-row>
                <b-row>
                  -------
                </b-row>
              </b-container>
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
          key: "ym",
          label: "年月",
        },
        {
          key: "pmilestone",
          label: "本月預定開始或完成里程碑",
          tdClass: "text-left",
          thStyle: { width: "15%" },
        },
        {
          key: "situation",
          label: "全月辦理情形",
          thStyle: { width: "22%" },
        },
        {
          key: "isClose",
          label: "是否建議結案",
        },
        {
          key: "bosSupervise",
          label: "中央目的事業主管機關督辦情形",
          thStyle: { width: "18%" },
        },
        {
          key: "bosCheck",
          label: "中央目的事業主管機關確認進度",
          thStyle: { width: "12%" },
        },
        {
          key: "action",
          label: "",
        },
      ],
      items: [
        {
          ym:'111/04',
          situation: "1、雲林縣政府110年3月2日召開「三條崙海水浴場續存建物及教育農園活化情形討論」會議，洽談處理三條崙海水浴場三合院建物問題。 2、公所函請雲林縣政府教育處協助，...",
          isClose: "否",
          bosSupervise: "1.本案活化計畫前經本局109.12.21、109.11.17.函請縣府積極趕辦，主要係四棟建物地用與取得使照問題，請縣府積極協助，惟有關109年12月23日雲林縣政府函請農委會釋疑，釋示所謂其他安全設施之包含項目為何？是否有使用面積之限制？...",
          bosCheck:'落後',
          arryaData:[
            {id:1,event:'濱海大樓委外經營',bdate:'110/12/01',ddate:'110/12/31'},
            {event:'續存建物委外經營',ddate:'110/12/31'},
            {event:'濱海大樓委外經營',ddate:'110/12/31'},
          ]
        },
        
       {
          ym:'111/03',
          situation: "",
          isClose: "",
          bosSupervise: "",
          bosCheck:'',
          arryaData:[
            {id:1,event:'	濱海大樓委外經營',bdate:'110/07/01',},
          ]
        },
        {
          ym:'111/02',
          situation: "",
          isClose: "",
          bosSupervise: "",
          bosCheck:''
        },
      ],
    };
  },
  methods: {},
  mounted() {
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