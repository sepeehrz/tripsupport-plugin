<style scoped>
.ts-menu {
  width: 98%;
  top: 84px;
}
.ts-field-wrapper {
  display: flex;
  align-items: center;
}
.ts-date-picker {
  flex: 0 0 30%;
}
.ts-search-field-wrapper {
  flex: 0 0 70%;
  display: flex;
  padding-right: 5px;
}
.ts-origin .ts-input,
.ts-destination .ts-input {
  width: 100%;
}
.ts-origin,
.ts-destination {
  position: relative;
  width: 50%;
  padding-right: 10px;
}
label {
  font-size: 12px;
  color: #66678f;
  margin-bottom: 0 !important;
}
.ts-input {
  height: 48px;
  border: 1px solid rgba(171, 171, 196, 0.6);
  padding: 0 10px;
  border-radius: 6px;
  background: #ffffff;
  outline: none;
  margin-right: 16px;
  margin-top: 12px;
  padding-left: 32px;
  color: #66678f;
  font-size: 14px;
  font-weight: 500;
}
.ts-input::placeholder {
  color: #66678f;
  font-size: 14px;
  font-weight: 500;
}
.ts-airplane-icon {
  position: absolute;
  left: 9px;
  bottom: 13px;
}
.ts-action-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 37px;
  padding-bottom: 32px;
}
.ts-header-component {
  padding: 32px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ts-title-component {
  font-size: 18px;
  font-weight: 400;
  color: #0c0d25;
}
.ts-other-components {
  display: flex;
  align-items: center;
}
.ts-passengers-component {
  padding-right: 24px;
}
@media only screen and (max-width: 768px) {
  ::v-deep .ts-airfare-component .ts-menu {
    right: 0;
  }
  .ts-origin .ts-input {
    margin-top: 0;
  }
  .ts-origin,
  .ts-destination {
    width: 100%;
    padding-right: 0;
  }
  ::v-deep .ts-passenger-count {
    font-size: 12px;
    padding: 0 8px 0 0;
  }
  ::v-deep .ts-icon-passenger {
    display: none;
  }
  ::v-deep .ts-rooms-component .ts-menu {
    right: -120px;
  }
  .ts-header-component {
    display: block;
    padding: 20px 0 16px;
  }
  .ts-title-component {
    margin-bottom: 20px;
  }
  .ts-passengers-component {
    padding-right: 10px;
  }
  .ts-field-wrapper {
    display: block;
    position: relative;
  }
  .ts-action-wrapper {
    display: block;
    padding-top: 16px;
    padding-bottom: 24px;
  }
  .ts-search-field-wrapper {
    flex: unset;
    display: block;
    width: 100%;
    padding-right: 0;
  }
}
</style>
<template>
  <section>
    <div class="ts-header-component">
      <div class="ts-title-component">
        Build a Trip
      </div>
      <div class="ts-other-components">
        <div class="ts-passengers-component">
          <Passengers @numberOfTravellers="numberOfTravellers" :Rooms="Rooms" />
        </div>
        <div class="ts-passengers-component ts-rooms-component">
          <Rooms @Rooms="getRooms" />
        </div>
        <div class="ts-airfare-component">
          <AirfareType @class="getClass" />
        </div>
      </div>
    </div>
    <div class="ts-field-wrapper">
      <div class="ts-search-field-wrapper">
        <div class="ts-origin">
          <Autocomplete
            ref="flightSearchAutocomplete"
            v-model="getOriginSearch"
            :items="originItems"
            :placeholder="$t('Departing_From')"
            mode="hotelFlightOrigin"
          />
        </div>
        <div class="ts-destination">
          <Autocomplete
            ref="flightDestinationAutocomplete"
            v-model="getDestinationSearch"
            :items="destinationItems"
            :placeholder="$t('Going_To')"
            mode="hotelFlightDestination"
          />
        </div>
      </div>
      <div class="ts-date-picker">
        <NewDatePicker
          ref="flightHotelDatePicker"
          @RangeSelectedDate="getRangeDate"
          @clearDate="clearDate"
          @dateValidation="dateValidation = $event"
          :haveValidation="true"
        />
      </div>
    </div>
    <div class="ts-action-wrapper">
      <div class="ts-button">
        <SearchButton
          @search="save"
          :buttonText="`Search Hotels`"
          :activeButton="disabledButton"
        />
      </div>
    </div>
    <Toast v-model="showDialog" :toast="toast" />
  </section>
</template>

<script>
import moment from 'moment';
import AirfareType from './../Common/AirfareType.vue';
import Passengers from './../Common/HotelPassengers.vue';
import Rooms from './../Common/Rooms.vue';

export default {
  components: {
    Passengers,
    Rooms,
    AirfareType,
  },
  data() {
    return {
      toast: {
        toastText: '',
        color: 'red',
      },
      showDialog: false,
      origin: null,
      destination: null,
      departDate: null,
      returnDate: null,
      DirectFlights: false,
      dateValidation: true,
      originTimeout: null,
      destinationTimeout: null,
      originItems: [],
      destinationItems: [],
      Travellers: [{ adults: 2, children: 0, childrenAges: [] }],
      Rooms: 1,
      class: this.$store.commit('getAirType', `${this.$t('Economy')}`),
      getOriginSearch: null,
      getDestinationSearch: null,
    };
  },
  watch: {
    getOriginSearch: {
      handler: function(val) {
        this.origin = val;
        this.searchFlight(val).then((res) => {
          this.originItems = res;
        });
      },
    },
    getDestinationSearch: {
      handler: function(val) {
        this.destination = val;
        this.searchDestination(val).then((res) => {
          this.destinationItems = res;
        });
      },
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth < 600;
    },
    checkZero() {
      let adultsArray = [];
      this.Travellers.forEach((item) => {
        adultsArray.push(item.adults);
      });
      let checkZero = adultsArray.every((item) => {
        return item > 0;
      });
      return checkZero;
    },
    disabledButton() {
      if (
        !this.origin ||
        !this.origin.code ||
        !this.destination ||
        !this.destination.id ||
        !this.departDate ||
        !this.returnDate ||
        !this.checkZero ||
        !this.dateValidation
      ) {
        return true;
      }
    },
  },
  methods: {
    clearDate() {
      this.departDate = null;
      this.returnDate = null;
    },
    searchFlight(value) {
      return new Promise((resolve) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          if (value && !value.name) {
            this.axios
              .get(
                `https://flighthotelapi.tripsupport.com/api/Resource/FindAirports?term=${value.trim()}`
              )
              .then((response) => {
                resolve(response.data.data);
              });
          }
        }, 500);
      });
    },
    searchDestination(value) {
      return new Promise((resolve) => {
        clearTimeout(this.destinationTimeout);
        this.destinationTimeout = setTimeout(() => {
          if (value && !value.name) {
            this.axios
              .get(
                `https://flighthotelapi.tripsupport.com/api/Resource/SearchDestinations?name=${value.trim()}&page=1`
              )
              .then((response) => {
                resolve(response.data.data);
              });
          }
        }, 500);
      });
    },
    numberOfTravellers(val) {
      this.Travellers = val;
    },
    getClass(val) {
      this.class = val;
    },
    getRangeDate(e) {
      this.departDate = this.changeFormat(e.startDate);
      this.returnDate = this.changeFormat(e.endDate);
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
    getRooms(val) {
      this.Rooms = val;
    },
    save() {
      if (
        !this.origin ||
        !this.origin.code ||
        !this.destination ||
        !this.destination.id
      ) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter Departing From and Going To',
        };
        return;
      }
      if (!this.departDate || !this.returnDate) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter departure date',
        };
        return;
      }
      if (!this.checkZero) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'AdultCount should not be zero',
        };
        return;
      }
      if (!this.dateValidation) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Maximum Length of stay allowed is 20 days',
        };
        return;
      }
      let customUrl = {
        From: JSON.stringify(this.origin),
        To: JSON.stringify(this.destination),
        EntryDate: this.departDate,
        ExitDate: this.returnDate,
        PartEntryDate: this.departDate,
        PartExitDate: this.returnDate,
        Rooms: this.Rooms,
        DirectFlights: this.DirectFlights,
        FlightType: this.$store.state.airfaireType,
        travellersForm: {
          travellers: this.Travellers,
        },
      };
      let customUrlStringify = JSON.stringify(customUrl);
      let href = `https://secure.tripsupport.ca/hotel/search/${customUrlStringify}`;
      href = encodeURI(href);
      window.open(href, '_self');
    },
  },
};
</script>
