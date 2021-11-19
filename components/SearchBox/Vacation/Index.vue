<style scoped>
.ts-field-wrapper {
  display: flex;
  align-items: center;
}
.ts-search-field-wrapper {
  flex: 0 0 70%;
  display: flex;
}
.ts-duration-wrapper {
  flex: 0 0 30%;
  display: flex;
  align-items: center;
}
.ts-date-picker,
.ts-duration {
  flex: 0 0 50%;
}
.ts-duration ::v-deep .ts-menu {
  top: 80px;
  right: 0;
}
.ts-origin,
.ts-destination {
  position: relative;
  width: 100%;
}
.ts-airplane-icon {
  position: absolute;
  left: 9px;
  bottom: 13px;
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
.ts-button-wrapper {
  display: flex;
  align-items: center;
}
.ts-header-component {
  padding: 32px 0 24px;
  display: flex;
  justify-content: space-between;
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
    padding-bottom: 27px;
  }
  .ts-button-wrapper {
    display: block;
  }
  .ts-checkbox-wrapper {
    display: none;
  }
  ::v-deep .vue-daterange-picker {
    min-width: 140px;
  }
  ::v-deep .ts-picker-wrapper > div {
    width: unset !important;
  }
  .ts-search-field-wrapper {
    display: block;
    width: 100%;
    flex: unset;
  }
  .ts-duration-wrapper {
    display: block;
    width: 100%;
    flex: unset;
  }
}
</style>

<template>
  <section>
    <div class="ts-header-component">
      <div class="ts-title-component">
        Book your vacation now, pay later!
      </div>
      <div class="ts-other-components">
        <div class="ts-passengers-component">
          <Travellers @NumberOfPassangers="passanger" :rooms="NumberOfRooms" />
        </div>
        <div class="ts-airfare-component">
          <Rooms
            @NumberOfRooms="rooms"
            :children="Children"
            :error="roomsError"
          />
        </div>
      </div>
    </div>
    <div class="ts-field-wrapper">
      <div class="ts-search-field-wrapper">
        <div class="ts-origin">
          <Autocomplete
            ref="FromAutocomplete"
            v-model="getFromSearch"
            :items="FromsItemsDisplay"
            :placeholder="$t('VACATION.Departing_From')"
            :localStorage="localData.From"
            :from="true"
            mode="vacation"
            :userLocation="userLocation"
          />
        </div>
        <div class="ts-destination">
          <Autocomplete
            ref="ToAutocomplete"
            v-model="getToSearch"
            :items="toItemsDisplay"
            :placeholder="$t('VACATION.Going_To')"
            :localStorage="localData.To"
            mode="vacation"
          />
        </div>
      </div>
      <div class="ts-duration-wrapper">
        <div class="ts-date-picker">
          <NewDatePicker
            @RangeSelectedDate="getRangeDate"
            @clearDate="clearDate"
            :singleDatePicker="true"
            :lastDate="lastDate"
            title="Departure"
            :placeHolder="{
              origin: 'Departure Date',
            }"
          />
        </div>
        <div class="ts-duration">
          <Duration @Durations="getDurations" />
        </div>
      </div>
    </div>
    <div class="ts-action-wrapper">
      <div class="ts-checkbox-wrapper">
        <div>
          <label class="ts-checkbox-item">
            <input type="checkbox" v-model="AllInclusive" />
            <span>All-Inclusive Only</span>
          </label>
        </div>
      </div>
      <div class="ts-button-wrapper">
        <SearchButton
          :buttonText="`${$t('VACATION.Search_Vacations')}`"
          @search="save"
          :activeButton="disabledButton"
        />
      </div>
    </div>
    <Toast v-model="showDialog" :toast="toast" />
  </section>
</template>

<script>
import Rooms from './Rooms.vue';
import Travellers from './Travellers.vue';
import Duration from './Duration.vue';
import Passengers from './../Common/Passengers.vue';
import AirfareType from './../Common/AirfareType.vue';
import moment from 'moment';

export default {
  components: {
    Rooms,
    Travellers,
    Duration,
    Passengers,
    AirfareType,
  },
  data() {
    return {
      toast: {
        toastText: '',
        color: 'red',
      },
      showDialog: false,
      From: {},
      To: {},
      AllInclusive: false,
      FromsItems: [],
      FromsItemsDisplay: [],
      toItems: [],
      toItemsDisplay: [],
      NumberOfRooms: 1,
      NumberOfPassangers: 2,
      Adults: 2,
      ChildrenAges: [],
      DepartureDate: null,
      lastDate: null,
      Children: 0,
      Durations: '7,8',
      roomsError: false,
      selectedMultiple: [],
      previousSelectionTravellers: {},
      getFromSearch: null,
      getToSearch: null,
      localData: {},
      userLocation: {},
    };
  },
  async mounted() {
    try {
      let { data } = await this.axios.get(
        `https://tripsupport.ca/wp-json/trip-support-endpoints/v1/user/geolocation`
      );

      await this.axios
        .get(`https://vacationapi.tripsupport.ca/api/Resource/GetDepartures`)
        .then((response) => {
          this.FromsItems = response.data.data;
          this.FromsItemsDisplay = response.data.data;
        });
      this.changeDestination('YYZ').then((res) => {
        this.toItems = res;
        this.toItemsDisplay = res;
      });

      let userLocation = data.data.city.toLowerCase();
      this.querySearch(userLocation, this.FromsItems).then((res) => {
        if (res.length) {
          this.userLocation = res[0];
          this.$cookie.set(
            'userLocation',
            JSON.stringify({
              ct: res[0].name,
              ac: res[0].codes,
            })
          );
          this.From = res[0];
        } else {
          this.userLocation = res;
          this.$cookie.set(
            'userLocation',
            JSON.stringify({
              ct: 'Toronto',
              ac: 'YYZ',
            })
          );
          this.From = { codes: 'YYZ', name: 'Toronto' };
        }
      });
    } catch (e) {
      console.log(e);
    }

    let getLastVacationBooking = localStorage.getItem('lastVacationBooking');
    if (!getLastVacationBooking) {
      this.previousSelectionTravellers = {
        adults: 2,
        children: 0,
        childrenAges: [],
      };
      return;
    }
    this.localData = JSON.parse(getLastVacationBooking);
    this.From = this.localData.From;
    this.To = this.localData.To;
    this.NumberOfRooms = this.localData.NumberOfRooms;
    if (this.localData.date) {
      this.lastDate = this.localData.date;
      this.DepartureDate = this.changeFormat(this.localData.date.startDate);
    }
    if (this.localData.multiple.length) {
      this.selectedMultiple = this.localData.multiple;
    }
    if (this.localData.TravellersData) {
      let childAgesArray = [];
      this.localData.TravellersData.childrenAges.forEach((element) => {
        childAgesArray.push(element.child);
      });
      this.Adults = this.localData.TravellersData.adults;
      this.Children = this.localData.TravellersData.children;
      this.ChildrenAges = childAgesArray;
    }
  },
  watch: {
    getFromSearch: {
      handler: function(val) {
        this.From = val;
        this.querySearch(val, this.FromsItems).then((res) => {
          this.FromsItemsDisplay = res;
        });
        if (val.codes) {
          this.changeDestination(val.codes).then((res) => {
            this.toItems = res;
            this.toItemsDisplay = res;
          });
        }
      },
    },
    getToSearch: {
      handler: function(val) {
        this.To = val;
        this.querySearch(val, this.toItems).then((res) => {
          this.toItemsDisplay = res;
        });
      },
    },
  },
  computed: {
    disabledButton() {
      let checkAvailableRoom = this.Adults / this.NumberOfRooms;
      let getError = false;
      this.ChildrenAges.forEach((element) => {
        if (element == 0 || element == null || element > 17) {
          getError = true;
        }
      });
      if (
        !this.To.ids ||
        !this.To ||
        !this.From ||
        !this.From.codes ||
        !this.DepartureDate ||
        (this.Children > 0 && this.NumberOfRooms > 1) ||
        !Number.isInteger(checkAvailableRoom) ||
        this.NumberOfPassangers > 6 ||
        this.Adults == 0 ||
        getError
      ) {
        return true;
      }
    },
  },
  methods: {
    clearDate() {
      this.DepartureDate = null;
    },
    changeDestination(value) {
      return new Promise((resolve) => {
        if (value && !value.name) {
          this.axios
            .get(
              `https://vacationapi.tripsupport.ca/api/Resource/GetDestinations?codes=${value}`
            )
            .then((response) => {
              resolve(response.data.data.slice(0, 50));
            });
        }
      });
    },
    querySearch(value, arrayItems) {
      return new Promise((resolve) => {
        let items = arrayItems.filter((e) => {
          if (value.length) {
            let searchWord = value.toLowerCase().trim();
            return e.name.toLowerCase().indexOf(searchWord) >= 0;
          }
        });
        resolve(items);
      });
    },
    getRangeDate(e) {
      this.lastDate = e;
      this.DepartureDate = this.changeFormat(e.startDate);
    },
    save() {
      let destination = [];
      if (!this.selectedMultiple.length) {
        destination.push(this.To.ids);
      } else {
        this.selectedMultiple.map((items) => {
          destination.push(items.id);
        });
      }
      if (!this.From || !this.From.codes || !destination[0]) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter Departing From and Going To',
        };
        if (!this.From || !this.From.codes) {
          this.$gtag.event('Validation', {
            event_category: 'Vacation',
            event_label: 'User entered an invalid Departing From',
          });
        }
        if (!destination[0]) {
          this.$gtag.event('Validation', {
            event_category: 'Vacation',
            event_label: 'User entered an invalid Going To',
          });
        }
        return;
      }
      if (!this.DepartureDate) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter departure date',
        };
        this.$gtag.event('Validation', {
          event_category: 'Vacation',
          event_label: 'User entered an invalid Departure',
        });
        return;
      }
      if (this.Children > 0 && this.NumberOfRooms > 1) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText:
            'Sorry, the adult occupancy must be consistent for all rooms in an online booking.',
        };
        this.$gtag.event('Validation', {
          event_category: 'Vacation',
          event_label:
            'User entered Rooms do not match the number of passengers',
        });
        return;
      }
      let checkAvailableRoom = this.Adults / this.NumberOfRooms;
      if (!Number.isInteger(checkAvailableRoom)) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText:
            'Sorry, the adult occupancy must be consistent for all rooms in an online booking.',
        };
        this.$gtag.event('Validation', {
          event_category: 'Vacation',
          event_label:
            'User entered Rooms do not match the number of passengers',
        });
        return;
      }
      if (this.NumberOfPassangers > 6) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText:
            'Sorry, you can only book a maximum of 6 passengers in an online booking.',
        };
        this.$gtag.event('Validation', {
          event_category: 'Vacation',
          event_label: 'User entered more than 6 passengers',
        });
        return;
      }
      if (this.Adults == 0) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'AdultCount should not be zero',
        };
        this.$gtag.event('Validation', {
          event_category: 'Vacation',
          event_label: 'User entered an invalid Traveller',
        });
        return;
      }
      let getError = false;
      this.ChildrenAges.forEach((element) => {
        if (element == 0 || element == null || element > 17) {
          getError = true;
        }
      });
      if (getError) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText:
            'Age should not be zero or empty or The maximum age must be 17 years old',
        };
        this.$gtag.event('Validation', {
          event_category: 'Vacation',
          event_label:
            'User entered zero or empty or more than 17 years for children ages',
        });
        return;
      }
      let setVacationFilter = {
        From: this.From.codes,
        To: this.To.ids,
        DepartureDate: this.DepartureDate,
        Durations: this.Durations,
        AllInclusive: this.AllInclusive,
        NumberOfRooms: this.NumberOfRooms,
        NumberOfAdults: this.Adults,
        ChildrenAges: JSON.stringify(this.ChildrenAges),
      };
      let newLocalStorage = {
        From: this.From,
        To: this.To,
        NumberOfPassangers: this.NumberOfPassangers,
        NumberOfRooms: this.NumberOfRooms,
        DepartureDate: this.DepartureDate,
        AllInclusive: this.AllInclusive,
        ChildrenAges: this.ChildrenAges,
        Durations: this.Durations,
        multiple: this.selectedMultiple,
        date: this.lastDate,
        TravellersData: this.previousSelectionTravellers,
      };
      localStorage.setItem('vacationFilter', JSON.stringify(setVacationFilter));
      localStorage.setItem('adultsFilter', JSON.stringify(this.Adults));
      localStorage.setItem('childrenFilter', JSON.stringify(this.ChildrenAges));
      localStorage.setItem(
        'lastVacationBooking',
        JSON.stringify(newLocalStorage)
      );
      this.$gtag.event('Search', {
        event_category: 'Vacation',
        event_label: 'User submit new search',
      });
      let url = location.href;
      url = url.substring(url.indexOf('.')).split('/')[0];
      let href = `https://secure.tripsupport${url}/vacation?From=${this.From.codes}&To=${destination}&DepartureDate=${this.DepartureDate}&Durations=${this.Durations}&AllInclusive=${this.AllInclusive}&NumberOfRooms=${this.NumberOfRooms}&NumberOfAdults=${this.Adults}&ChildrenAges=[${this.ChildrenAges}]`;
      window.open(href, '_self');
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
    rooms(val) {
      this.NumberOfRooms = val;
      let checkAvailableRoom = this.Adults / this.NumberOfRooms;
      if (!Number.isInteger(checkAvailableRoom)) {
        this.roomsError = true;
      } else {
        this.roomsError = false;
      }
    },
    passanger(val, ChildrenAges, Children, Adults) {
      let childAgesArray = [];
      ChildrenAges.forEach((element) => {
        childAgesArray.push(element.child);
      });
      this.NumberOfPassangers = val;
      this.ChildrenAges = childAgesArray;
      this.Children = Children;
      this.Adults = Adults;
      this.previousSelectionTravellers = {
        adults: Adults,
        children: Children,
        childrenAges: ChildrenAges,
      };
      let checkAvailableRoom = this.Adults / this.NumberOfRooms;
      if (!Number.isInteger(checkAvailableRoom)) {
        this.roomsError = true;
      } else {
        this.roomsError = false;
      }
    },
    getDurations(val) {
      this.Durations = val;
    },
  },
};
</script>
