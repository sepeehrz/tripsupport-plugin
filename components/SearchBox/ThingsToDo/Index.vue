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
  left: 16px;
  bottom: 11px;
}
.ts-action-wrapper {
  display: flex;
  justify-content: flex-end;
  padding-top: 37px;
  padding-bottom: 32px;
}
.ts-header-component {
  padding: 32px 0 24px;
  font-size: 18px;
  font-weight: 400;
  color: #0c0d25;
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
      Search Stays
    </div>
    <div class="ts-field-wrapper">
      <div class="ts-origin">
        <Autocomplete
          ref="thingsToDoAutocomplete"
          v-model="getHotelSearch"
          :items="items"
          :placeholder="$t('HOTELS.Destination_To')"
          mode="thingsToDo"
        />
      </div>
      <div class="ts-date-picker">
        <NewDatePicker
          ref="thingsToDoDatePicker"
          @RangeSelectedDate="getRangeDate"
          @clearDate="clearDate"
          @dateValidation="dateValidation = $event"
          :haveValidation="true"
        />
      </div>
    </div>
    <div class="ts-action-wrapper">
      <SearchButton
        :buttonText="`Search Things To Do`"
        @search="save"
        :activeButton="disabledButton"
      />
    </div>
    <Toast v-model="showDialog" :toast="toast" />
  </section>
</template>

<script>
import moment from 'moment';

export default {
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
    clearDate() {
      this.EntryDate = null;
      this.ExitDate = null;
    },
    changeFormat(val) {
      return moment(val).format('YYYY-MM-DD');
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
        travellersForm: {
          travellers: [],
        },
      };
      let customUrlStringify = JSON.stringify(customUrl);
      let href = `https://secure.tripsupport.ca/thingtodo/search/${customUrlStringify}`;
      href = encodeURI(href);
      window.open(href, '_self');
    },
  },
};
</script>
