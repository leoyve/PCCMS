<template>
  <div class="about">
      {{ message }} 測試
  <div>台幣: <input type="text" v-model="twd"></div>
  <div>美金: <input type="text" v-model="usd"></div>
  <div>日幣: <input type="text" v-model="jpy"></div>
  <div>韓元: <input type="text" v-model="kor"></div>
  </div>
</template>


<script>
export default {
 data(){
	return{
		message:'LEO',
		twd:121
	}
 }
}

</script>