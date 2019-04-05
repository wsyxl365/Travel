<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list
            :cities="cities"
            :hot="hotCities"
            :letter="letter"
        ></city-list>
        <city-alphabet
            :cities="cities"
            @change="handleLetterChange"
        ></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios';
    import CityHeader from "./components/Header";
    import CitySearch from "./components/Search";
    import CityList from "./components/List";
    import CityAlphabet from "./components/Alphabet"
    export default {
        name: "City",
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data() {
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        },
        methods: {
            getCityInfo() {
                axios.get('/api/city.json')
                    .then(this.handleGetCityInfoSucc)
                    .catch(err=>{
                        console.log(`接口错误!${err}`);
                    })
            },
            handleGetCityInfoSucc(res) {
                console.log(res)
                try {
                    const { data:{ data } } = res;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                } catch (e) {
                    console.log("数据异常！");
                }
            },
            handleLetterChange(letter) {
                this.letter = letter;
                //console.log('letter', letter)
            }
        },
        mounted() {
            this.getCityInfo();
        }
    }
</script>

<style scoped>

</style>
