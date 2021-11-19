<style scoped>
.ts-field-wrapper {
  display: flex;
  align-items: center;
}
.ts-origin {
  position: relative;
  flex: 0 0 70%;
}
.ts-date-picker {
  flex: 0 0 30%;
}
.ts-airplane-icon {
  position: absolute;
  left: 9px;
  bottom: 13px;
}
.ts-action-wrapper {
  display: flex;
  justify-content: flex-end;
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
.ts-airfare-component {
  display: flex;
  justify-content: flex-end;
}
@media only screen and (max-width: 768px) {
  ::v-deep .ts-icon-passenger {
    display: none;
  }
  .ts-passengers-component {
    padding-right: 8px;
  }
  .ts-header-component {
    display: block;
    padding: 20px 0 16px;
  }
  .ts-title-component {
    font-size: 16px;
    margin-bottom: 20px;
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
}
</style>

<template>
  <section>
    <div class="ts-header-component">
      <div class="ts-title-component">
        Search Stays
      </div>
      <div class="ts-other-components">
        <div class="ts-passengers-component">
          <Passengers @numberOfTravellers="numberOfTravellers" :Rooms="Rooms" />
        </div>
        <div class="ts-airfare-component">
          <Rooms @Rooms="getRooms" />
        </div>
      </div>
    </div>
    <div class="ts-field-wrapper">
      <div class="ts-origin">
        <Autocomplete
          ref="hotelAutocomplete"
          v-model="getHotelSearch"
          :items="items"
          :placeholder="$t('HOTELS.Destination_To')"
          :localStorage="localData.To"
          mode="hotel"
        />
      </div>
      <div class="ts-date-picker">
        <NewDatePicker
          @RangeSelectedDate="getRangeDate"
          @clearDate="clearDate"
          :lastDate="lastDate"
          @dateValidation="dateValidation = $event"
          :haveValidation="true"
          :placeHolder="{
            origin: 'Check-in',
            destination: 'Check-out',
          }"
        />
      </div>
    </div>
    <div class="ts-action-wrapper">
      <SearchButton
        :buttonText="`${$t('HOTELS.Search_Hotels')}`"
        @search="save"
        :activeButton="disabledButton"
      />
    </div>
    <Toast v-model="showDialog" :toast="toast" />
  </section>
</template>

<script>
import moment from 'moment';
import Passengers from './../Common/HotelPassengers.vue';
import Rooms from './../Common/Rooms.vue';

export default {
  components: {
    Passengers,
    Rooms,
  },
  data() {
    return {
      toast: {
        toastText: '',
        color: 'red',
      },
      showDialog: false,
      EntryMenu: false,
      ExitMenu: false,
      To: null,
      EntryDate: null,
      ExitDate: null,
      lastDate: null,
      originalEntryDate: null,
      originalExitDate: null,
      items: [],
      Rooms: 1,
      dateValidation: true,
      timeout: null,
      Travellers: [{ adults: 2, children: 0, childrenAges: [] }],
      name: 'hotel',
      getHotelSearch: null,
      localData: {},
    };
  },
  watch: {
    getHotelSearch: {
      handler: function(val) {
        this.To = val;
        this.searchRequest(val).then((res) => {
          this.items = res;
        });
      },
    },
  },
  mounted() {
    let getlastHotelSearch = localStorage.getItem('lastHotelSearch');
    if (!getlastHotelSearch) {
      return;
    }
    this.localData = JSON.parse(getlastHotelSearch);
    this.To = this.localData.To;
    if (this.localData.date) {
      this.lastDate = this.localData.date;
      this.EntryDate = this.changeFormat(this.localData.date.startDate);
      this.ExitDate = this.changeFormat(this.localData.date.endDate);
      this.originalEntryDate = moment(this.localData.date.startDate)._d;
      this.originalExitDate = moment(this.localData.date.endDate)._d;
    }
  },
  computed: {
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
        !this.To ||
        !this.To.id ||
        !this.EntryDate ||
        !this.ExitDate ||
        !this.checkZero ||
        !this.dateValidation
      ) {
        return true;
      }
    },
  },
  methods: {
    clearDate() {
      this.EntryDate = null;
      this.ExitDate = null;
    },
    searchRequest(value) {
      return new Promise((resolve) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          if (value && !value.name) {
            this.axios
              .get(
                `https://hotelapi.tripsupport.ca/api/Resource/SearchDestinations?name=${value.trim()}&page=1`
              )
              .then((response) => {
                resolve(response.data.data);
              });
          }
        }, 500);
      });
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
    getRooms(val) {
      this.Rooms = val;
    },
    numberOfTravellers(val) {
      this.Travellers = val;
    },
    getRangeDate(e) {
      this.lastDate = e;
      this.originalEntryDate = e.startDate;
      this.originalExitDate = e.endDate;
      this.EntryDate = this.changeFormat(e.startDate);
      this.ExitDate = this.changeFormat(e.endDate);
    },
    save() {
      if (!this.To || !this.To.id) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter Destination',
        };
        this.$gtag.event('Validation', {
          event_category: 'Hotels',
          event_label: 'User entered an invalid Destination',
        });
        return;
      }
      if (!this.EntryDate || !this.ExitDate) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter departure date',
        };
        if (!this.EntryDate) {
          this.$gtag.event('Validation', {
            event_category: 'Hotels',
            event_label: 'User entered an invalid Departure',
          });
        }
        if (!this.ExitDate) {
          this.$gtag.event('Validation', {
            event_category: 'Hotels',
            event_label: 'User entered an invalid Return',
          });
        }
        return;
      }
      if (!this.checkZero) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'AdultCount should not be zero',
        };
        this.$gtag.event('Validation', {
          event_category: 'Hotels',
          event_label: 'User entered an invalid AdultCount',
        });
        return;
      }
      if (!this.dateValidation) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Maximum Length of stay allowed is 20 days',
        };
        this.$gtag.event('Validation', {
          event_category: 'Hotels',
          event_label: 'User entered an invalid Maximum Length of stay allowed',
        });
        return;
      }
      let customUrl = {
        To: JSON.stringify(this.To),
        EntryDate: this.EntryDate,
        ExitDate: this.ExitDate,
        Rooms: this.Rooms,
        travellersForm: {
          travellers: this.Travellers,
        },
      };
      let customLocal = {
        To: this.To,
        EntryDate: this.EntryDate,
        ExitDate: this.ExitDate,
        Rooms: this.Rooms,
        travellersForm: {
          travellers: this.Travellers,
        },
        date: this.lastDate,
      };
      localStorage.setItem('hotelEntryDate', this.originalEntryDate);
      localStorage.setItem('hotelExitDate', this.originalExitDate);
      localStorage.setItem('hotelDestination', JSON.stringify(this.To));
      localStorage.setItem('hotelRooms', this.Rooms);
      localStorage.setItem(
        'hotelTravellers',
        JSON.stringify(customLocal.travellersForm)
      );
      let customUrlStringify = JSON.stringify(customUrl);
      localStorage.setItem('lastHotelSearch', JSON.stringify(customLocal));
      this.$gtag.event('Search', {
        event_category: 'Hotels',
        event_label: 'User submit new search',
      });
      let url = location.href;
      url = url.substring(url.indexOf('.')).split('/')[0];
      let href = `https://secure.tripsupport${url}/hotel/search/${customUrlStringify}`;
      href = encodeURI(href);
      window.open(href, '_self');
    },
  },
};
</script>
