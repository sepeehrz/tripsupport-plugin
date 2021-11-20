<style scoped>
.ts-field-wrapper {
  display: flex;
  align-items: center;
}
.ts-search-field-wrapper {
  display: flex;
  flex: 0 0 70%;
}
.ts-date-picker {
  flex: 0 0 30%;
}
.ts-origin,
.ts-destination {
  position: relative;
  width: 100%;
}
.ts-svg {
  margin-right: 16px;
  margin-top: 45px;
  cursor: pointer;
}
.ts-action-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 37px;
  padding-bottom: 32px;
}
.ts-checkbox-wrapper {
  display: flex;
  align-items: center;
}
.ts-checkbox-wrapper > div {
  display: flex;
  align-items: center;
  margin-right: 19px;
}
.ts-checkbox-wrapper > div label {
  font-weight: 400;
  color: #66678f;
  font-size: 14px;
}
.ts-checkbox-item {
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  margin-bottom: 0 !important;
}
.ts-checkbox-item > span {
  font-weight: 400;
  color: #66678f;
  font-size: 14px;
  margin-left: 8px;
}
.ts-checkbox-item > input {
  height: 18px;
  width: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid rgba(171, 171, 196, 0.6);
  border-radius: 4px;
  outline: none;
  transition-duration: 0.3s;
  background-color: #fff;
  cursor: pointer;
}

.ts-checkbox-item > input:checked {
  border: 1px solid #ed1b2e;
  background-color: #ed1b2e;
}
.ts-checkbox-item > input:checked + span::before {
  content: '\2713';
  display: block;
  text-align: center;
  color: #fff;
  position: absolute;
  left: 5px;
  top: 1px;
}
.ts-svg svg {
  fill: #ababc4;
}
@media only screen and (max-width: 768px) {
  .ts-svg svg {
    fill: #66678f;
  }
  .ts-field-wrapper {
    display: block;
    position: relative;
  }
  .ts-action-wrapper {
    display: block;
    padding-top: 18px;
    padding-bottom: 22px;
  }
  .ts-checkbox-wrapper {
    display: block;
  }
  .ts-checkbox-wrapper > div:not(:last-child) {
    margin-bottom: 20px;
  }
  .ts-svg {
    position: absolute;
    right: -6px;
    top: -10px;
    padding: 10px;
    z-index: 2;
    background: #ffffff;
    border: 1px solid rgba(171, 171, 196, 0.6);
    border-radius: 8px;
    transform: rotate(-90deg);
    cursor: pointer;
  }
  .ts-button {
    margin-top: 26px;
  }
  .ts-search-field-wrapper {
    display: block;
    flex: unset;
  }
}
</style>

<template>
  <section>
    <div class="ts-field-wrapper">
      <div class="ts-search-field-wrapper">
        <div class="ts-origin">
          <Autocomplete
            ref="originAutocomplete"
            v-model="getOriginSearch"
            :items="originItems"
            :placeholder="$t('Departing_From')"
            :localStorage="localData.origin"
            :displaySearchWord="displayOrigin"
            :from="true"
            :userLocation="userLocation"
          />
        </div>
        <div class="ts-svg" @click="displacement">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5468 11.6809C17.9487 12.0973 17.9182 12.7441 17.5468 13.1631C17.1755 13.5795 16.4838 13.5507 16.1074 13.1631L10.5809 7.47249C10.4198 7.30669 10.3255 7.0929 10.2977 6.87084C10.2903 6.82511 10.2854 6.77855 10.2833 6.73137C10.2737 6.51848 10.3402 6.31745 10.4551 6.14952C10.4912 6.0929 10.5331 6.03946 10.5809 5.99025L16.1074 0.299621C16.5092 -0.114147 17.1399 -0.0853407 17.5468 0.299621C17.9512 0.681965 17.9232 1.39428 17.5468 1.78186L13.7574 5.68386H22.9818C23.5515 5.68386 23.9737 6.16309 23.9991 6.73137C24.0245 7.29703 23.5133 7.77889 22.9818 7.77889H22.9614C19.8952 7.83009 16.8241 7.77889 13.7574 7.77889L17.5468 11.6809Z"
            />
            <path
              d="M6.37686 10.3191L10.1663 14.2211H2.44498C2.28909 14.2211 2.13291 14.2202 1.97665 14.2194C1.66383 14.2176 1.35063 14.2159 1.03856 14.2211H1.01821C0.486673 14.2211 -0.0245216 14.703 0.000910992 15.2686C0.0263436 15.8369 0.448524 16.3161 1.01821 16.3161H10.1663L6.37686 20.2181C6.00045 20.6057 5.97248 21.318 6.37686 21.7004C6.78378 22.0853 7.41451 22.1141 7.81634 21.7004L13.3428 16.0097C13.4058 15.9449 13.4586 15.8727 13.5012 15.7955C13.5943 15.6395 13.6464 15.4588 13.6379 15.2686C13.6367 15.2436 13.6348 15.2187 13.6322 15.1941C13.616 14.9491 13.5195 14.7094 13.3428 14.5275L7.81634 8.83688C7.43994 8.4493 6.74817 8.42049 6.37686 8.83688C6.003 9.25589 5.97248 9.90273 6.37686 10.3191Z"
            />
          </svg>
        </div>
        <div class="ts-destination">
          <Autocomplete
            ref="destinationAutocomplete"
            v-model="getDestinationSearch"
            :items="destinationItems"
            :placeholder="$t('Going_To')"
            :localStorage="localData.destination"
            :displaySearchWord="displayDestination"
            :userLocation="userLocation"
          />
        </div>
      </div>
      <div class="ts-date-picker">
        <NewDatePicker
          ref="datePicker"
          @RangeSelectedDate="getRangeDate"
          @clearDate="clearDate"
          :lastDate="lastDate"
          :placeHolder="{
            origin: 'Departure Date',
            destination: 'Return Date',
          }"
        />
      </div>
    </div>
    <div class="ts-action-wrapper">
      <div class="ts-checkbox-wrapper">
        <div>
          <label class="ts-checkbox-item">
            <input type="checkbox" v-model="IsFlexiSearch" />
            <span>Flexible Search (+/-3 days)</span>
          </label>
        </div>
        <div>
          <label class="ts-checkbox-item">
            <input type="checkbox" v-model="ns" />
            <span>Non-stop flights only</span>
          </label>
        </div>
      </div>
      <div class="ts-button">
        <SearchButton
          @search="save"
          :buttonText="`${$t('Search_Flights')}`"
          :activeButton="disabledButton"
        />
      </div>
    </div>
    <Toast v-model="showDialog" :toast="toast" />
  </section>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      name: 'flight',
      toast: {
        toastText: '',
        color: 'red',
      },
      showDialog: false,
      origin: null,
      displayOrigin: null,
      destination: null,
      displayDestination: null,
      getOriginSearch: null,
      getDestinationSearch: null,
      IsFlexiSearch: false,
      ns: false,
      departDate: null,
      returnDate: null,
      lastDate: null,
      originItems: [],
      destinationItems: [],
      adult: 1,
      infant: 0,
      child: 0,
      class: this.$store.commit('getAirType', `${this.$t('Economy')}`),
      localData: {},
      userLocation: {},
    };
  },
  watch: {
    getOriginSearch: {
      handler: function(val) {
        this.origin = val;
        if (
          this.isMobile &&
          val.ct &&
          this.$refs.originAutocomplete.openMobileDialog == true
        ) {
          this.$refs.destinationAutocomplete.openMobileDialog = true;
        } else {
          this.$refs.destinationAutocomplete.openMobileDialog = false;
        }
        this.searchRequest(val).then((res) => {
          this.originItems = res;
        });
      },
      // immediate: true,
    },
    getDestinationSearch: {
      handler: function(val) {
        this.destination = val;
        if (
          this.isMobile &&
          val.ct &&
          this.$refs.destinationAutocomplete.openMobileDialog == true
        ) {
          this.$refs.datePicker.$children[0].open = true;
        }
        this.searchRequest(val).then((res) => {
          this.destinationItems = res;
        });
      },
      // immediate: true,
    },
  },
  computed: {
    disabledButton() {
      let adult = this.$store.state.adult;
      if (
        !this.origin ||
        !this.origin.ct ||
        !this.destination ||
        !this.destination.ct ||
        !this.departDate ||
        !this.returnDate ||
        adult == 0
      ) {
        return true;
      }
    },
    isMobile() {
      return window.innerWidth < 600;
    },
  },
  async mounted() {
    try {
      let { data } = await this.axios.get(
        `https://tripsupport.ca/wp-json/trip-support-endpoints/v1/user/geolocation`
      );
      let { data: res } = await this.axios.get(
        `https://search.tripsupport.ca/api/searchairports?searchvalue=${data.data.city.toLowerCase()}`
      );
      if (res.length) {
        this.userLocation = res[0];
        this.$cookie.set(
          'userLocation',
          JSON.stringify({
            ct: this.userLocation.ct,
            ac: this.userLocation.ac,
            cc: this.userLocation.cc,
          })
        );
      } else {
        this.userLocation = res;
        this.$cookie.set(
          'userLocation',
          JSON.stringify({
            ct: 'Toronto',
            ac: 'YTO',
            cc: 'CA',
          })
        );
      }
    } catch (e) {
      console.log(e);
    }
    let getFlightLastSearch = localStorage.getItem('lastFlightRoundTripSearch');
    if (!getFlightLastSearch) {
      return;
    }

    this.localData = JSON.parse(getFlightLastSearch);
    this.displayOrigin =
      this.localData.origin.ac +
      '-' +
      this.localData.origin.ct +
      '-' +
      this.localData.origin.an;
    this.origin = this.localData.origin;
    this.displayDestination =
      this.localData.destination.ac +
      '-' +
      this.localData.destination.ct +
      '-' +
      this.localData.destination.an;
    this.destination = this.localData.destination;
    if (this.localData.date) {
      this.lastDate = this.localData.date;
      this.departDate = this.changeFormat(this.localData.date.startDate);
      this.returnDate = this.changeFormat(this.localData.date.endDate);
    }
  },
  methods: {
    searchRequest(value) {
      return new Promise((resolve) => {
        if (value && !value.ct) {
          this.axios
            .get(
              `https://search.tripsupport.ca/api/searchairports?searchvalue=${value.trim()}`
            )
            .then((response) => {
              resolve(response.data);
            });
        }
      });
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
    getRangeDate(e) {
      this.lastDate = e;
      this.departDate = this.changeFormat(e.startDate);
      this.returnDate = this.changeFormat(e.endDate);
    },
    clearDate() {
      this.departDate = null;
      this.returnDate = null;
    },
    displacement() {
      this.displayOrigin =
        this.origin.ac + '-' + this.origin.ct + '-' + this.origin.an;
      this.displayDestination =
        this.destination.ac +
        '-' +
        this.destination.ct +
        '-' +
        this.destination.an;
      let origin = this.origin;
      let displayOrigin = this.displayOrigin;
      let destination = this.destination;
      let displayDestination = this.displayDestination;

      this.origin = destination;
      this.displayOrigin = displayDestination;
      this.destination = origin;
      this.displayDestination = displayOrigin;
    },
    save() {
      this.class = this.$store.state.airfaireType;
      this.adult = this.$store.state.adult;
      this.infant = this.$store.state.infant;
      this.child = this.$store.state.child;
      if (
        !this.origin ||
        !this.origin.ct ||
        !this.destination ||
        !this.destination.ct
      ) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter Departing From and Going To',
        };
        if (!this.origin || !this.origin.ct) {
          this.$gtag.event('Validation', {
            event_category: 'Flight Runway',
            event_label: 'User entered an invalid Departing From',
          });
        }
        if (!this.destination || !this.destination.ct) {
          this.$gtag.event('Validation', {
            event_category: 'Flight Runway',
            event_label: 'User entered an invalid Going To',
          });
        }
        return;
      }
      if (!this.departDate || !this.returnDate) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter departure date',
        };
        if (!this.departDate) {
          this.$gtag.event('Validation', {
            event_category: 'Flight Runway',
            event_label: 'User entered an invalid Departure',
          });
        }
        if (!this.returnDate) {
          this.$gtag.event('Validation', {
            event_category: 'Flight Runway',
            event_label: 'User entered an invalid Return',
          });
        }
        return;
      }
      if (this.adult == 0) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'AdultCount should not be zero',
        };
        this.$gtag.event('Validation', {
          event_category: 'Flight Runway',
          event_label: 'User entered an invalid Traveller',
        });
        return;
      }
      let searchObject = {
        origin: this.origin,
        destination: this.destination,
        date: this.lastDate,
        class: this.$store.state.airfaireType,
        adult: this.$store.state.adult,
        infant: this.$store.state.infant,
        child: this.$store.state.child,
      };
      localStorage.setItem(
        'lastFlightRoundTripSearch',
        JSON.stringify(searchObject)
      );
      this.$gtag.event('Search', {
        event_category: 'Flight Runway',
        event_label: 'User submit new search',
      });
      let url = location.href;
      let lang = 'lg=';
      if (this.$i18n.locale == 'fr') {
        lang = lang + 'fr-FR';
      } else {
        lang = lang + 'en-EN';
      }
      url = url.substring(url.indexOf('.')).split('/')[0];
      let href = `https://secure.tripsupport${url}/flight/roundtrip;tripType=roundtrip;destination=${this.destination.ac};origin=${this.origin.ac};IsFlexiSearch=${this.IsFlexiSearch};ns=${this.ns};departDate=${this.departDate};returnDate=${this.returnDate};adult=${this.adult};child=${this.child};infant=${this.infant};class=${this.class};multiOrigin=;multiDestination=;multidate=;${lang}`;
      window.open(href, '_self');
    },
  },
};
</script>
