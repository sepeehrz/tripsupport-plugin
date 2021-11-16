<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #cdcdda;
}
::-webkit-scrollbar-thumb {
  background: #8f90ad;
}
::-webkit-scrollbar-thumb:hover {
  background: #8f90ad;
}
.ts-menu {
  width: 98%;
  top: 84px;
}
.ts-field-wrapper {
  display: flex;
  align-items: center;
}
.ts-origin input {
  width: 98%;
}
.ts-origin {
  position: relative;
  flex: 0 0 70%;
}
.ts-date-picker {
  flex: 0 0 30%;
}
label {
  font-size: 12px;
  color: #66678f;
  margin-bottom: 0 !important;
}
input[type='text'] {
  height: 48px;
  border: 1px solid rgba(171, 171, 196, 0.6);
  padding: 0 10px;
  border-radius: 6px;
  background: #ffffff;
  outline: none;
  margin-right: 16px;
  margin-top: 12px;
  padding-left: 40px;
  color: #66678f;
  font-size: 14px;
  font-weight: 500;
}
input::placeholder {
  color: #66678f;
  font-size: 14px;
  font-weight: 500;
}
.ts-airplane-icon {
  position: absolute;
  left: 16px;
  bottom: 11px;
}
.ts-dropdown-wrapper {
  padding: 10px 0;
}
.ts-dropdown-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 8px;
  margin-bottom: 10px;
}
.ts-dropdown-item:hover {
  background: rgba(0, 122, 255, 0.02);
}
.ts-dropdown-item:hover .ts-name {
  color: #0c0d25;
}
.ts-dropdown-item:hover .ts-svg svg {
  fill: #007aff;
}
.ts-dropdown-item svg {
  fill: #ababc4;
  margin-right: 8px;
}
.ts-name-wrapper {
  display: flex;
}
.ts-svg {
  display: flex;
  align-items: center;
}
.ts-name {
  font-weight: 400;
  color: #ababc4;
  font-size: 16px;
}
.active .ts-name {
  color: #0c0d25;
}
.active svg {
  fill: #007aff;
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
  .ts-origin input {
    margin-top: 0;
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
  label {
    display: none;
  }
  input[type='text'] {
    width: 100%;
  }
  .ts-dropdown-wrapper {
    width: 100%;
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
        <label for="">{{ $t('HOTELS.Destination_To') }}</label>
        <input
          @keyup="search"
          v-bind:value="displayTo"
          v-on:input="
            (displayTo = $event.target.value), (To = $event.target.value)
          "
          type="text"
          v-click-outside="onClickOutside"
          :placeholder="`${$t('HOTELS.Destination_To')}`"
          @click="openOrigin"
          @focus="focusInput"
          @keydown.tab="fillInputTab"
        />
        <div class="ts-airplane-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M16 18H0L1.17073 15.5918H7.80488L12.4878 12.7196L15.6098 14.3609L16 18Z"
              fill="#66678F"
            ></path>
            <path
              d="M4.00229 2.83424L2.24136 8.39775L3.90244 11.0784L2.73171 14.7712H5.60417L4.53023 13.9042L6.47129 11.39L5.91184 9.31134L7.57851 10.3393L8.05793 14.2074L10.4217 13.0272L9.58714 12.3803L9.51423 9.65607L6.7279 6.60424L7.12576 5.70575L9.05691 7.0199L12.4878 6.15466L12.0976 5.33404L9.38669 4.79618L6.45351 2.46948L6.59705 1.84693L7.22942 1.98691C7.22942 1.98691 7.6565 0.266458 6.29929 0.0414007C6.29929 0.0414007 4.82368 -0.561511 4.00229 2.83424Z"
              fill="#66678F"
            ></path>
            <path
              d="M12.0976 6.97529L10.5366 7.3856L10.9268 11.899H11.7073L12.0976 6.97529Z"
              fill="#66678F"
            ></path>
            <path
              d="M3.17505 2.48671C3.17505 2.48671 1.52947 2.01402 1.06631 3.29945C0.60315 4.58514 0.0873984 5.82703 0.0873984 5.82703L1.76575 6.82837L3.17505 2.48671Z"
              fill="#66678F"
            ></path>
          </svg>
        </div>
        <MenuDialog :showMenu="showToMenu" v-if="items.length">
          <template #data>
            <div class="ts-dropdown-wrapper">
              <div
                class="ts-dropdown-item"
                v-for="(item, index) in items"
                :key="index"
                @click="getTo(item)"
                :class="{
                  active:
                    To == item || index == activeFrom || index == arrowCounter,
                }"
                @mouseenter="index ? (activeFrom = index) : (activeFrom = 0)"
              >
                <div class="ts-name-wrapper" ref="dropdownItem">
                  <div class="ts-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M16 18H0L1.17073 15.5918H7.80488L12.4878 12.7196L15.6098 14.3609L16 18Z"
                      ></path>
                      <path
                        d="M4.00229 2.83424L2.24136 8.39775L3.90244 11.0784L2.73171 14.7712H5.60417L4.53023 13.9042L6.47129 11.39L5.91184 9.31134L7.57851 10.3393L8.05793 14.2074L10.4217 13.0272L9.58714 12.3803L9.51423 9.65607L6.7279 6.60424L7.12576 5.70575L9.05691 7.0199L12.4878 6.15466L12.0976 5.33404L9.38669 4.79618L6.45351 2.46948L6.59705 1.84693L7.22942 1.98691C7.22942 1.98691 7.6565 0.266458 6.29929 0.0414007C6.29929 0.0414007 4.82368 -0.561511 4.00229 2.83424Z"
                      ></path>
                      <path
                        d="M12.0976 6.97529L10.5366 7.3856L10.9268 11.899H11.7073L12.0976 6.97529Z"
                      ></path>
                      <path
                        d="M3.17505 2.48671C3.17505 2.48671 1.52947 2.01402 1.06631 3.29945C0.60315 4.58514 0.0873984 5.82703 0.0873984 5.82703L1.76575 6.82837L3.17505 2.48671Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ts-name">
                    <div class="ts-cityname">{{ item.name }}</div>
                    <div>{{ item.secondaryName }}</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </MenuDialog>
      </div>
      <SearchDialog
        :openDialog="openOriginDialog"
        :items="items"
        :from="false"
        mode="thingsToDo"
        :title="$t('HOTELS.Destination_To')"
        @getDataSearch="getDataOriginSearch"
        @close="openOriginDialog = $event"
      />
      <div class="ts-date-picker">
        <NewDatePicker
          ref="thingsDatePicker"
          @RangeSelectedDate="getRangeDate"
          @clearDate="clearDate"
          :lastDate="lastDate"
          @dateValidation="dateValidation = $event"
          :haveValidation="true"
          :placeHolder="{
            origin: 'From',
            destination: 'To',
          }"
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
import MenuDialog from '../Common/MenuDialog.vue';
import SearchButton from './../Common/SearchButton.vue';
import DatePicker from './../Common/DatePicker.vue';
import Toast from './../Common/Toast.vue';
import SearchDialog from '../Common/SearchDialog.vue';
import DatePickerMobile from '../Common/DatePickerMobile.vue';

export default {
  components: {
    SearchButton,
    MenuDialog,
    DatePicker,
    Toast,
    SearchDialog,
    DatePickerMobile,
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
      displayTo: null,
      showToMenu: false,
      openOriginDialog: false,
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
      previousSelectionTravellers: {},
      activeFrom: 0,
      arrowCounter: 0,
    };
  },
  mounted() {
    let getlastThingsToDoSearch = localStorage.getItem('lastThingsToDoSearch');
    if (!getlastThingsToDoSearch) {
      return;
    }
    let parsedGetlastThingsToDoSearch = JSON.parse(getlastThingsToDoSearch);
    this.To = parsedGetlastThingsToDoSearch.To;
    this.displayTo = parsedGetlastThingsToDoSearch.To.name;
    if (parsedGetlastThingsToDoSearch.date) {
      this.lastDate = parsedGetlastThingsToDoSearch.date;
      this.EntryDate = this.changeFormat(
        parsedGetlastThingsToDoSearch.date.startDate
      );
      this.ExitDate = this.changeFormat(
        parsedGetlastThingsToDoSearch.date.endDate
      );
      this.originalEntryDate = moment(
        parsedGetlastThingsToDoSearch.date.startDate
      )._d;
      this.originalExitDate = moment(
        parsedGetlastThingsToDoSearch.date.endDate
      )._d;
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
    isMobile() {
      return window.innerWidth < 600;
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
    focusInput(e) {
      if (!this.isMobile) {
        e.target.select();
      }
    },
    fillInputTab() {
      this.fillInput();
    },
    fixScrolling() {
      let element = this.$refs.dropdownItem[this.arrowCounter];
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    },
    fillInput() {
      if (this.items.length && this.To.length && !this.To.name) {
        this.To = this.items[0];
        this.displayTo = this.items[0].name;
        this.showToMenu = false;
      }
    },
    clearDate() {
      this.EntryDate = null;
      this.ExitDate = null;
    },
    openOrigin() {
      if (window.innerWidth <= 600)
        this.openOriginDialog = !this.openOriginDialog;
      if (window.innerWidth <= 600) {
        this.showToMenu = false;
      } else {
        this.showToMenu = true;
      }
    },
    getDataOriginSearch(items) {
      this.To = items.searchItem;
      this.displayTo = items.display;
      this.search();
      if (items.searchItem.name) {
        this.$refs.hotelDatePicker.$children[0].open = true;
      } else {
        this.$refs.hotelDatePicker.$children[0].open = false;
      }
    },
    onClickOutside() {
      this.showToMenu = false;
      this.fillInput();
    },
    search(e) {
      if (this.To) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.axios
            .get(
              `https://ttd.tripsupport.com/api/Resource/SearchDestinations?name=${this.To.trim()}&page=1`
            )
            .then((response) => {
              this.items = response.data.data;
            });
        }, 500);
      }
      if (window.innerWidth <= 600) {
        this.showToMenu = false;
      } else {
        this.showToMenu = true;
      }
      if (this.isMobile) {
        if (e.key == 'ArrowDown') {
          if (this.arrowCounter < this.items.length) {
            this.arrowCounter = this.arrowCounter + 1;
            this.activeFrom = this.arrowCounter;
            this.fixScrolling();
          }
        } else if (e.key == 'ArrowUp') {
          if (this.arrowCounter > 0) {
            this.arrowCounter = this.arrowCounter - 1;
            this.activeFrom = this.arrowCounter;
            this.fixScrolling();
          }
        } else if (e.key == 'Enter') {
          if (this.arrowCounter == 0 && this.items[0]) {
            this.To = this.items[0];
            this.displayTo = this.items[0].name;
          } else if (this.arrowCounter > 0) {
            let item = this.items[this.arrowCounter];
            this.To = item;
            this.displayTo = item.name;
            this.showToMenu = false;
            this.arrowCounter = -1;
            this.$refs.thingsDatePicker.$children[0].open = true;
          }
          this.showToMenu = false;
        }
      }
    },
    getTo(item) {
      this.To = item;
      this.displayTo = item.name;
    },
    changeFormat(val) {
      return moment(val).format('YYYY-MM-DD');
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
          event_category: 'ThingToDo',
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
            event_category: 'ThingToDo',
            event_label: 'User entered an invalid Departure',
          });
        }
        if (!this.ExitDate) {
          this.$gtag.event('Validation', {
            event_category: 'ThingToDo',
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
          event_category: 'ThingToDo',
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
          event_category: 'ThingToDo',
          event_label: 'User entered an invalid Maximum Length of stay allowed',
        });
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
      let customLocal = {
        To: this.To,
        EntryDate: this.EntryDate,
        ExitDate: this.ExitDate,
        travellersForm: {
          travellers: [],
        },
        date: this.lastDate,
      };
      // localStorage.setItem('hotelEntryDate', this.originalEntryDate);
      // localStorage.setItem('hotelExitDate', this.originalExitDate);
      // localStorage.setItem('hotelDestination', JSON.stringify(this.To));
      // localStorage.setItem('hotelRooms', this.Rooms);
      // localStorage.setItem(
      //   'hotelTravellers',
      //   JSON.stringify(customLocal.travellersForm)
      // );
      let customUrlStringify = JSON.stringify(customUrl);
      localStorage.setItem('lastThingsToDoSearch', JSON.stringify(customLocal));
      this.$gtag.event('Search', {
        event_category: 'ThingToDo',
        event_label: 'User submit new search',
      });
      let url = location.href;
      url = url.substring(url.indexOf('.')).split('/')[0];
      let href = `https://secure.tripsupport${url}/thingtodo/search/${customUrlStringify}`;
      href = encodeURI(href);
      window.open(href, '_self');
    },
  },
};
</script>
