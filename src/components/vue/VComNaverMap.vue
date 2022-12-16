<template>
    <div>
        <input class="inputTxt" id="inputLat" type="text" value='' placeholder='위도(Lat) 입력' style="margin-right:5px;"/>
        <input class="inputTxt" id="inputLng" type="text" value='' placeholder='경도(Lng) 입력'/>
        <button class="btn" type="button" @click="changePosition">위치 조회</button>
    </div>
    <div
        :id="id"
        :lat="lat"
        :lng="lng"
        >
    </div>
</template>
<script>

export default {
    name: "naverMap",
    props: {
        id: {
            type: String,
            default: ''
        },
        lat: {
            type: Number,
            default: 37.3595704
        },
        lng: {
            type: Number,
            default: 127.105399
        }
    },
    mounted() {
        this.initMap(this.lat, this.lng)
    },
    methods: {
        initMap(lat, lng) {
            let script = document.createElement('script');
            script.setAttribute('src', 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=zip1s8ybro');
            script.onload = () => {
                var position = new window.naver.maps.LatLng(lat, lng);
                var map = new window.naver.maps.Map('map', {
                    center: position,
                    zoom: 15
                });
                var marker = new window.naver.maps.Marker({
                    position: position,
                    map: map
                });
                window.naver.maps.Event.addListener(map, 'click', function(e) {
                    marker.setPosition(e.coord);
                    console.log(e.coord.y + '/' + e.coord.x);
                });
            };
            document.head.appendChild(script);
        },
        changePosition() {
            const inputLat = document.getElementById('inputLat').value;
            const inputLng = document.getElementById('inputLng').value;

            if(!inputLat.trim() || !inputLng.trim()){
                alert('위도와 경도를 반드시 입력해주시기 바랍니다.')
            }else{
                this.initMap(Number(inputLat), Number(inputLng));
            }

        }
    }
}
</script>
<style scoped>
.inputTxt {
  width: 10%;
  height: 32px;
  font-size: 15px;
  border: 1px solid black;
  padding-left: 12px;
  margin: 5px 0px 5px 0px;
  background-color: rgb(233, 233, 233);
}
#map {
    width: 100%;
    height: 500px;
}

.btn {
    border: 0;
    line-height: 2.2;
    padding: 0px 12px 0px 12px;
    margin: 0px 0px 4px 5px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgba(220, 0, 0, 1);
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);

}
.btn:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}
.btn:hover {
    background-color: rgba(255, 0, 0, 1);
}

</style>