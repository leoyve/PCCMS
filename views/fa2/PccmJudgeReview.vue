<template>
  <div>
    <br>
    <h3>活化補助工作計畫考核評分表單</h3>
    <br>
      <b-container fluid>
        <b-table-simple hover small caption-top responsive bordered>
          <caption><h3>活化補助工作計畫考核評分表單(計畫編號：1060000006)</h3></caption>
          <b-thead head-variant="dark">
              <b-tr>
                <b-th width="10%">評分項目</b-th>
                <b-th width="5%">配分</b-th>
                <b-th width="5%">基本分</b-th>
                <b-th width="12%">評分標準</b-th>
                <b-th width="14%">系統加分</b-th>
                <b-th width="14%">系統減分</b-th>
                <b-th width="40%">評分內容</b-th>
              </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
                <b-th class="align-middle">預算申請撥款情形</b-th>
                <b-th class="align-middle">10</b-th>
                <b-th class="align-middle">8</b-th>
                <b-td class="text-left align-middle">1.第一階段：於接獲核定補助函二個月內檢附領據及納入預算證明，函送財政部申請撥款
                  2.第二階段：核定之活化計畫辦竣後，於三個月內檢附經費實際支用情形表、補助款辦理成果報告書，函送工程會審核</b-td>
                <b-td class="text-left align-middle">1.提前15天（含）以上申請撥款且文件完備者，每次加0.5分 2.提前30天（含）以上申請撥款且文件完備者，每次加1分</b-td>
                <b-td class="text-left align-middle">未於規定期限內申請，或因申請文件不完備致需補件者，逾期或自退件次日起至重行函送補件天數，每階段每逾1日減 0.1分</b-td>
                <b-td class="text-left align-middle">
                  <b-container>
                    <b-row>
                      <b-col>計畫核定日期： 1070816</b-col>
                    </b-row>
                    <b-row>
                      <b-col>第一階段申請撥款日期： </b-col>
                      <b-col><b-datepicker/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>第一階段申請撥款文號：</b-col>
                      <b-col><b-input></b-input></b-col>
                    </b-row>
                    <b-row>
                      <b-col>第一階段申請撥款需重行補件之延遲天數：</b-col>
                      <b-col><b-input></b-input></b-col>
                    </b-row>
                    <b-row>
                      <b-col>第一階段申請撥款需重行補件日期及相關理由說明：</b-col>
                      <b-col><b-textarea></b-textarea></b-col>
                    </b-row>
                    <b-row>
                      <b-col>-------------------------------------------------------------------------------------------------------------------</b-col>
                    </b-row>
                    <b-row>
                      <b-col>計畫辦竣日期：</b-col>
                      <b-col><b-datepicker/></b-col>
                    </b-row>
                    <b-row>
                      <b-col><font color="blue"><strong>以下有關第二階段申請撥款等4個欄位請於完成申請作業後補填：</strong></font></b-col>
                    </b-row>
                    <b-row>
                      <b-col>第二階段申請撥款日期：</b-col>
                      <b-col><b-datepicker/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>第二階段申請撥款文號：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>二階段申請撥款需重行補件之延遲天數：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>第二階段申請撥款需重行補件日期及相關理由說明：</b-col>
                      <b-col><b-textarea></b-textarea></b-col>
                    </b-row>
                  </b-container>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th class="align-middle">計畫執行確實度</b-th>
                <b-th class="align-middle">20</b-th>
                <b-th class="align-middle">17</b-th>
                <b-td class="text-left align-middle">是否依核定計畫內容確實執行</b-td>
                <b-td class="text-left align-middle"></b-td>
                <b-td class="text-left align-middle">1.未完成工作之里程碑數占總里程碑數之比例，其未達20%者計列1點；達20%以上者每逾20%加計1點
                  2.有未依核定計畫內容執行之金額，其金額占核定補助款之百分比，每逾5%計列1點
                  3.本項至多計列20點
                </b-td>
                <b-td class="text-left align-middle">
                  <b-container>
                    <b-row>
                      <b-col>工作里程碑總數：5</b-col>
                    </b-row>
                    <b-row>
                      <b-col>工作里程碑實際完成數： 0</b-col>
                    </b-row>
                    <b-row>
                      <b-col>--------------------------------------------------------------------------------------------------------------------------------------------------</b-col>
                    </b-row>
                    <b-row>
                      <b-col>計畫核定金額(千元)： 4850</b-col>
                    </b-row>
                    <b-row>
                      <b-col>有未依核定計畫內容執行之金額(千元)：</b-col><b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>有未依核定計畫內容執行之金額相關說明：</b-col>
                      <b-col><b-textarea></b-textarea></b-col>
                    </b-row>
                  </b-container>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th class="align-middle">計畫如期完成情形</b-th>
                <b-th class="align-middle">20</b-th>
                <b-th class="align-middle">17</b-th>
                <b-td class="text-left align-middle">是否於核定之計畫執行期程內如期完成整體計畫</b-td>
                <b-td class="text-left align-middle">提前完成，每提前1日加0.1分</b-td>
                <b-td class="text-left align-middle">扣除不可抗拒影響因素之天數後，每逾期1日減0.1分</b-td>
                <b-td class="text-left align-middle">
                  <b-container>
                    <b-row>
                      <b-col>計畫預定結束日期： 1090630</b-col>
                    </b-row>
                    <b-row>
                      <b-col>不可抗拒因素影響天數：</b-col><b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>不可抗拒影響因素說明：</b-col>
                      <b-col><b-textarea></b-textarea></b-col>
                    </b-row>
                  </b-container>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th class="align-middle">預期活化效益達成情形</b-th>
                <b-th class="align-middle">30</b-th>
                <b-th class="align-middle">26</b-th>
                <b-td class="text-left align-middle">依工程會實地查證或請設施管理機關派員說明結果</b-td>
                <b-td class="text-left align-middle">達成100%，加4分</b-td>
                <b-td class="text-left align-middle">達成80%以上未達90%，減2分； 達成70%以上未達80%，減5分； 達成60%以上未達70%，減10分： 達成50%以上未達60%，減15分； 未達50%者，減20分</b-td>
                <b-td class="text-left align-middle">
                  <b-container>
                    <b-row>
                      <b-col>預期活化效益： 一、預期使用情形及其效益目標。 1、活化政府閒置之公共空間。 2、提供民眾優質之文化場域，達到推廣藝術教育之目的 3、提升政府公共服務水準，增進公有財產效益，促進民間經濟發展。 4、提升地方觀光休閒能量及效益。 5、創造在地就業機會及經濟活絡。 6、節省政府營運成本及管理人力。 7、活化閒置公共空間，避免因閒置空間而遭扣除中央補助款。 8、配合「新竹縣關新田園自行車道示範計畫」作為關西鐵馬驛站。 9、配合「國家級臺三線客庄浪漫大道推動方案規劃案」作為關西旅遊服務中心。 10、配合「關西鎮客家文化場域營造及閒置空間再活用計畫」協助推廣在地農特產品行銷。 二、評估使用情形及其效益之分析指標。 1、預計每月參觀人次為7,200人次。 2、預計每月旅遊服務中心服務人次為14,000人次。 3、預計每月鐵馬驛站服務人次為7,000人次。 4、創造在地就業人口為7人以上。 5、每年為縣府增加210萬元權利金收益。 三、未來設施使用管理計畫 1、以委外經營方式辦理活化計畫。 2、修繕完成後，由廠商負擔使用維護保管責任。 3、要求廠商依規辦理公安管理計畫及設施使用維護計畫，定期檢測保養相關設施。 4、契約結束收回時，將要求廠商須回復原況後點交。</b-col>
                    </b-row>
                    <b-row>
                      <b-col>實際活化效益達成率：</b-col><b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>實際達成活化效益說明：</b-col>
                      <b-col><b-textarea></b-textarea></b-col>
                    </b-row>
                  </b-container>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th class="align-middle">後續維護管理計畫</b-th>
                <b-th class="align-middle">10</b-th>
                <b-th class="align-middle">8</b-th>
                <b-td class="text-left align-middle">依工程會實地查證或請設施管理機關派員說明結果</b-td>
                <b-td class="text-left align-middle"></b-td>
                <b-td class="text-left align-middle">未訂定後續維護管理計畫，減8分</b-td>
                <b-td class="text-left align-middle">
                  <b-container>
                    <b-row>
                      <b-col>是否訂定設施後續完整可行之維護管理計畫：</b-col>
                      <b-col>
                        <b-form-radio-group
                          id="radio-group-1"
                          v-model="picked"
                          :options="options"
                          name="radio-options1"
                        ></b-form-radio-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>後續維護管理計畫內容說明：</b-col>
                      <b-col><b-textarea></b-textarea></b-col>
                    </b-row>
                  </b-container>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th class="align-middle" rowspan="2">特殊績效</b-th>
                <b-th class="align-middle" rowspan="2">10</b-th>
                <b-th class="align-middle" rowspan="2">6</b-th>
                <b-td class="align-middle text-left ">施工查核情形：於計畫執行期間之施工查核分數</b-td>
                <b-td class="align-middle text-left ">1.每次查核優等加3分 2.每次查核甲等加1分</b-td>
                <b-td class="align-middle text-left ">每次查核丙等扣3分</b-td>
                <b-td class="align-middle text-left ">
                  <b-container>
                    <b-row>
                      <b-col>查核日期1：</b-col>
                      <b-col><b-datepicker/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核小組機關1：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核工程名稱1：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核分數1：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>--------------------------------------------------------------------------------------------------------------------------------------------------</b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核日期2：</b-col>
                      <b-col><b-datepicker/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核小組機關2：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核工程名稱2</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核分數2：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>--------------------------------------------------------------------------------------------------------------------------------------------------</b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核日期3：</b-col>
                      <b-col><b-datepicker/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核小組機關3：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核工程名稱3：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                    <b-row>
                      <b-col>查核分數3：</b-col>
                      <b-col><b-input/></b-col>
                    </b-row>
                  </b-container>
                </b-td>
              </b-tr>
              <b-tr>
                <b-td class="align-middle text-left ">資訊系統填報情形：1.是否於每月10日前填報前一月之預算執行情形及前一月已完成里程碑之實際完成日期，如有落後是否填報完整之落後原因 2.核定之活化計畫辦竣後，是否於三個月內填報辦理成果報告</b-td>
                <b-td class="align-middle text-left ">每月均如期完成填報者，加3分</b-td>
                <b-td class="align-middle text-left ">至計畫完成月份，期間如有未如期完成填報之月份，每月份減1分2.核定之活化計畫辦竣後，未於三個月內填報辦理成果報告，另減2分</b-td>
                <b-td class="align-middle text-left ">
                  <b-container>
                    <b-row>
                      <b-col>辦理成果報告填報日期： 1071005</b-col>
                    </b-row>
                  </b-container>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th class="align-middle text-left" colspan="6"><font color="red">系統評分及計點</font></b-th>
                <b-td class="align-middle text-left ">71.8分       (計0點)</b-td>
              </b-tr>
              <b-tr>
                <b-th class="align-middle text-left" colspan="6"><font color="red">工程會考核總評分</font></b-th>
                <b-td class="align-middle text-left ">
                  <b-container fluid>
                    <b-row>
                      <b-col><b-input/></b-col><b-col>分</b-col>
                    </b-row>
                  </b-container>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th class="align-middle text-left" colspan="6"><font color="red">工程會考核總意見</font></b-th>
                <b-td class="align-middle text-left "><b-textarea/></b-td>
              </b-tr>
              <b-tr>
                <b-th class="align-middle text-left" colspan="6"><font color="red">是否鎖定辦理成果報告資料(不允許修改)</font></b-th>
                <b-td class="align-middle text-left "><b-checkbox>是</b-checkbox></b-td>
              </b-tr>
          </b-tbody>
        </b-table-simple>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success"  @click="modify()" >送出考核評分資料</b-button>&nbsp;&nbsp;
          <b-button size="sm" variant="outline-secondary"  @click="goBack()" >取消</b-button>&nbsp;&nbsp;
        </b-form-row>
      </b-container>
  </div>
</template>


<script>

export default {
  props:["detailFlag"],
  data(){
    return{
     options: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
		],
  }
 },
}
</script>
<style>

</style>