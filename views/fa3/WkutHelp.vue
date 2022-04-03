<template>
  <div>
    <br>
    <h3><strong>機關代碼小幫手</strong></h3>
    <br>
    <b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="機關名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
    <br>
    <b-container fluid>
      <br>
      <b-form-row class="row justify-content-end">
        <b-table striped hover :items="items" :fields="fields" head-variant="dark">
        </b-table>
      </b-form-row>
    </b-container>
    <br>
  </div>
</template>


<script>

export default {
  data(){
    return{
      fields:[
        {
          key:	'serial',
          label:	'流水號'
        },
        {
          key: 'wkutNum',
          label:	'機關代碼'
        },
        {
          key: 'wkutName',
          label:	'機關名稱'
        },
      ],
		items:[
      {wkutNum:'300000000A', wkutName:'行政院'},
      {wkutNum:'300010000A', wkutName:'行政院本部'},
      {wkutNum:'321000000A', wkutName:'行政院主計總處'},
      {wkutNum:'360000000G', wkutName:'行政院公共工程委員會'},
    ],
  }
 },
 methods:  {
   
 },
 mounted(){
   this.items.forEach((items, index) => { items.serial = index + 1; });
 }


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