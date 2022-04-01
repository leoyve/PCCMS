<template>
  <div>
    <br>
    <h3><strong>停用LineAPP通知</strong></h3>
    <br>
    <b-container>
      <b-form-row class="justify-content-center text-light bg-primary"><h4><strong>LineAPP通知接收帳號一覽表</strong></h4></b-form-row>
      <b-form-row>
        <b-table striped hover :items="items" :fields="fields" head-variant="light">
        </b-table>
      </b-form-row>
      <br>
      <b-form-row class="justify-content-center">
        <b-button size="lg" variant="success" @click="toSee(row.item)">停用LineAPP通知</b-button>
      </b-form-row>  
    </b-container>
  </div>
</template>


<script>
export default {
  data(){
    return{
      fields: [
        {
          key:	'actionTime',
          label:	'啟用時間',
        },
        {
          key:	'account',
          label:	'接收帳號'
        },
        {
          key:	'accountType',
          label:	'接收帳號類別'
        },
        {
          key:	'isVaild',
          label:	'是否有效'
        }
      ],
      items:	[
        { actionTime: '110/12/34 17:30:30', account: 'XXXX', accountType: 'USER',	isVaild: 'Y',	},
		],
  }
 },
 methods:  {
 
 },
 mounted(){  //ready已經不被使用了
    
  }
}
</script>
<style>

</style>