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
          mode="hotel"
        />
      </div>
      <div class="ts-date-picker">
        <NewDatePicker
          ref="HotelDatePicker"
          @RangeSelectedDate="getRangeDate"
          @clearDate="clearDate"
          @dateValidation="dateValidation = $event"
          :haveValidation="true"
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
      To: null,
      EntryDate: null,
      ExitDate: null,
      lastDate: null,
      items: [],
      Rooms: 1,
      dateValidation: true,
      timeout: null,
      Travellers: [{ adults: 2, children: 0, childrenAges: [] }],
      getHotelSearch: null,
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
        return;
      }
      if (!this.EntryDate || !this.ExitDate) {
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
        To: JSON.stringify(this.To),
        EntryDate: this.EntryDate,
        ExitDate: this.ExitDate,
        Rooms: this.Rooms,
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
