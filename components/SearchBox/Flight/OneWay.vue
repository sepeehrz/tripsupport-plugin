<style scoped>
.ts-search-field-wrapper {
  display: flex;
  flex: 0 0 80%;
}
.ts-date-picker {
  flex: 0 0 20%;
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
            :displaySearchWord="displayOrigin"
            :from="true"
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
            :displaySearchWord="displayDestination"
          />
        </div>
      </div>
      <div class="ts-date-picker">
        <NewDatePicker
          ref="datePicker"
          @RangeSelectedDate="getRangeDate"
          @clearDate="clearDate"
          :singleDatePicker="true"
          title="Departure"
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
      IsFlexiSearch: false,
      departDate: null,
      originItems: [],
      destinationItems: [],
      adult: 1,
      infant: 0,
      child: 0,
      class: this.$store.commit('getAirType', `${this.$t('Economy')}`),
      ns: false,
      getOriginSearch: null,
      getDestinationSearch: null,
    };
  },
  watch: {
    getOriginSearch: {
      handler: function(val) {
        this.origin = val;
        this.searchRequest(val).then((res) => {
          this.originItems = res;
        });
      },
    },
    getDestinationSearch: {
      handler: function(val) {
        this.destination = val;
        this.searchRequest(val).then((res) => {
          this.destinationItems = res;
        });
      },
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth < 600;
    },
    disabledButton() {
      let adult = this.$store.state.adult;
      if (
        !this.origin ||
        !this.origin.ct ||
        !this.destination ||
        !this.destination.ct ||
        !this.departDate ||
        adult == 0
      ) {
        return true;
      }
    },
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
    clearDate() {
      this.departDate = null;
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
        return;
      }
      if (!this.departDate) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter departure date',
        };
        return;
      }
      if (this.adult == 0) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'AdultCount should not be zero',
        };
        return;
      }
      let href = `https://secure.tripsupport.ca/flight/oneway;tripType=oneway;destination=${this.destination.ac};origin=${this.origin.ac};IsFlexiSearch=${this.IsFlexiSearch};ns=${this.ns};departDate=${this.departDate};returnDate=;adult=${this.adult};child=${this.child};infant=${this.infant};class=${this.class};multiOrigin=;multiDestination=;multidate=;`;
      window.open(href, '_self');
    },
    getRangeDate(e) {
      this.departDate = this.changeFormat(e.startDate);
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
  },
};
</script>
