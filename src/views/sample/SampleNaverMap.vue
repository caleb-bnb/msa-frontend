<template>
  <div>
    <h2>네이버지도</h2>
  </div>
  <br/>
  <v-card>
    <div>네이버 지도 보이는 부분</div>
    <div>네이버 API 문서 : <font color="blue">https://navermaps.github.io/maps.js/docs/tutorial-2-Getting-Started.html</font></div>
    <div>파라미터는 위도,경도만 입력받음</div>
    <div>clientId=<font color="red">zip1s8ybro</font></div>
  </v-card>
  <VComNaverMap
    :id="id"
    :lat="lat"
    :lng="lng"
  >
  </VComNaverMap>
</template>
<script>
import VComNaverMap from '@/components/vue/VComNaverMap';

export default {
  name: 'SampleNaverMap',
  components: {
    VComNaverMap
  },
  data() {
    return {
      id: 'map',
      lat: 37.3595704,
      lng: 127.105399
    }
  },
  mounted() {
    console.log('SampleNaverMap')
  },
  methods: {
  }
}
</script>
