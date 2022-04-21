<template>
  <div>
    <br>
    <h3><strong>建立機關關鍵公共設施</strong></h3>
    <br>
    <b-container fluid>
      <b-form-row class="justify-content-end ">
        <b-button size="xs" variant="info" @click="wkutHelp()">機關代碼</b-button>
      </b-form-row>
      <b-form-row class="justify-content-center "><h4><strong><font color="blue">維護設施資訊(流水號:)</font></strong></h4></b-form-row>
      <br>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主類別:</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-select v-model="statusPicked" :options="mainStatus" ></b-form-select>
          </b-col>
          <b-col class="col-md-2 ">次類別:</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-select v-model="statusPicked" :options="status" ></b-form-select>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施名稱</b-col>
          <b-col class="col-md-4"><b-form-input v-model="test"></b-form-input></b-col>
          <b-col class="col-md-2">規定養護頻率:</b-col>
          <b-col class="col-md-4">
            <b-container>
              <b-row>
                <b-col><b-form-input v-model="test"></b-form-input>年</b-col>
                <b-col><b-form-input v-model="test"></b-form-input>月</b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主管法規之中央目的事業主管機關:</b-col>
          <b-col class="col-md-4"><b-form-input placeholder="請輸入機關代碼"></b-form-input></b-col>
          <b-col class="col-md-2 ">設施性質對應之主管法規:</b-col>
          <b-col class="col-md-4"><b-form-textarea></b-form-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">養護機關:</b-col>
          <b-col class="col-md-4"><b-form-input placeholder="請輸入養護機關代碼"></b-form-input></b-col>
          <b-col class="col-md-2 ">機關自訂之養護規定:</b-col>
          <b-col class="col-md-4"><b-form-textarea></b-form-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">聯絡人:</b-col>
          <b-col class="col-md-4"><b-form-input></b-form-input></b-col>
          <b-col class="col-md-2 ">聯絡電話:</b-col>
          <b-col class="col-md-4"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">電子郵件:</b-col>
          <b-col class="col-md-4"><b-form-input></b-form-input></b-col>
          <b-col class="col-md-2 "></b-col>
          <b-col class="col-md-4"></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">養護單位的上一級養護管理機關:</b-col>
          <b-col class="col-md-4"><b-form-input placeholder="請輸入養護機關代碼"></b-form-input></b-col>
          <b-col class="col-md-2 ">養護單位的主管機關(中央部會或地方政府):</b-col>
          <b-col class="col-md-4"><b-form-input placeholder="請輸入養護機關代碼"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">所有權機關的主管機關(中央部會或地方政府):</b-col>
          <b-col class="col-md-4"><b-form-input placeholder="請輸入養護機關代碼"></b-form-input></b-col>
          <b-col class="col-md-2 "></b-col>
          <b-col class="col-md-4"></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">最後一次養護日期:</b-col>
          <b-col class="col-md-4"><b-datepicker/></b-col>
          <b-col class="col-md-2 "></b-col>
          <b-col class="col-md-4"></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">維護管理狀況分為:</b-col>
          <b-col class="col-md-4">
            <b-form-select v-model="statusPicked" :options="situation" ></b-form-select>
          </b-col>
          <b-col class="col-md-2 ">近期維護管理執行情形:</b-col>
          <b-col class="col-md-4"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施改善情形說明::</b-col>
          <b-col class="col-md-4">
            <b-textarea/>
          </b-col>
          <b-col class="col-md-2 "><font color="red">未依規定落實維護說明:</font></b-col>
          <b-col class="col-md-4"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">備註</b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea /></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container v-show="updateFlag" fluid>
      <b-form-row class="justify-content-center "><h2><strong><font color="blue">維護紀錄</font></strong></h2></b-form-row>
      <b-form-row class="justify-content-end ">
        <b-button size="xs" variant="success" @click="gotoParam('UploadMaintaceRecord')">新增</b-button>
      </b-form-row>
      <br>
      <b-form-row class="justify-content-center ">
        <b-table striped hover :items="items" :fields="fields" head-variant="dark">
          <template #cell(action)="row">
						<b-button size="sm" variant="info" @click="download()">下載</b-button>&nbsp;
            <b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
					</template>
        </b-table>
      </b-form-row>
    </b-container>
    <br>
    <b-container v-show="updateFlag" fluid>
      <b-form-row class="justify-content-center "><h2><strong><font color="blue">訪談紀錄</font></strong></h2></b-form-row>
      <b-form-row class="justify-content-end ">
        <b-button size="xs" variant="success" @click="gotoParam('UploadInterviewRecord')">新增</b-button>
      </b-form-row>
      <br>
      <b-form-row class="justify-content-center ">
        <b-table striped hover :items="items" :fields="fields" head-variant="dark">
          <template #cell(action)="row">
					
            <b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
					</template>
        </b-table>
      </b-form-row>
    </b-container>
    <br>
    <b-container fluid>
      <b-row class="row justify-content-end" >
        <b-button size="lg" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
        <b-button size="lg" variant="success" @click="update" v-show="updateFlag">修改</b-button>&ensp; 
        <b-button size="lg" variant="outline-secondary" @click="goBack()">取消</b-button>
      </b-row>
    </b-container>
    <br>
  </div>
</template>

<script>

export default {
  data(){
    return{
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      status: [
        { value: '1', text: '道路'},
        { value: '2', text: '軌道' },
        { value: '3', text: '邊坡' },
        { value: '4', text: '隧道' },
        { value: '6', text: '纜車' },
        { value: '7', text: '機場/航空站' },
      ],
      mainStatus: [
        { value: 'M', text: '交通設施'},
        { value: 'F', text: '水利設施' },
        { value: 'C', text: '能源設施' },
        { value: 'Z', text: '環保設施' },
      ],
      situation: [
        { value: 'M', text: '已依規定維護正常使用'},
        { value: 'F', text: '已依規定維護改善中' },
        { value: 'C', text: '已依規定維護待改善' },
        { value: 'Z', text: '未依規定維護' },
      ],
      fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'dataDate',
				label:	'資料年月'
			},
			{
				key:	'fileDesc',
				label:	'檔案描述'
			},
      {
				key:	'action',
				label:	''
			},
		],
		items:	[
			{ id: 1, dataDate: '110-02', fileDesc:'110年維護紀錄',	pk: 5566 },
			{ id: 2, dataDate: '109-02', fileDesc:'109年維護紀錄',	pk: 5566 },
			{ id: 3, dataDate: '111-02', fileDesc:'111年維護紀錄',	pk: 5566 },
		],
  }
 },
 methods:  {
   download(){
     alert('下載檔案');
   },
   wkutHelp(){
      let routeUrl = this.$router.resolve({name:'WkutHelp'})
      window.open(routeUrl.href, '_blank'); 
    },
  },
}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-md-4 {
  background-color:white;
  color: white;
  text-align: left;
}

</style>