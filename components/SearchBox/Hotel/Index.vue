<style scoped>
.ts-menu {
  width: 98%;
  top: 84px;
}
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
  padding-left: 32px;
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
  left: 9px;
  bottom: 13px;
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
.ts-dropdown-item:hover .ts-dropdown-city-name {
  color: #0c0d25;
}
.ts-dropdown-item:hover .ts-dropdown-city-name span svg {
  fill: #007aff;
}

.ts-dropdown-city-name {
  font-size: 16px;
  font-weight: 500;
  color: #ababc4;
  display: flex;
  align-items: center;
}
.ts-dropdown-city-name span svg {
  fill: #ababc4;
  margin-right: 5px;
  margin-bottom: -5px;
}
.ts-dropdown-ariport-name {
  font-size: 12px;
  color: #ababc4;
  margin-left: 30px;
  margin-top: 5px;
}
.ts-dropdown-airport {
  font-size: 12px;
  color: #666;
}
.active {
  background: rgba(0, 122, 255, 0.02);
}
.active .ts-dropdown-city-name {
  color: #0c0d25;
}
.active .ts-dropdown-city-name span svg {
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
  .ts-origin input {
    margin-top: 0;
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
  label {
    display: none;
  }
  input[type='text'] {
    width: 100%;
  }
  .ts-svg {
    position: absolute;
    right: -10px;
    top: 0;
    padding: 10px;
    z-index: 2;
    background: #ffffff;
    border: 1px solid rgba(171, 171, 196, 0.6);
    border-radius: 8px;
  }
  .ts-dropdown-wrapper {
    width: 100%;
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
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.4735 5.04564C2.4735 4.71369 2.75618 4.31535 3.10954 4.31535C3.4629 4.31535 4.947 5.04564 5.58304 5.04564H6.21908C6.85512 5.04564 8.40989 4.31535 8.69258 4.31535C8.97527 4.31535 9.32862 4.6473 9.32862 5.04564C9.32862 5.44398 8.69258 6.50622 8.69258 7.23651H11.1661C11.1661 6.50622 10.53 5.44398 10.53 5.04564C10.53 4.6473 10.8127 4.31535 11.1661 4.31535C11.5194 4.31535 13.0035 5.04564 13.6396 5.04564H14.2756C14.9117 5.04564 16.4664 4.31535 16.7491 4.31535C17.0318 4.31535 17.3852 4.6473 17.3852 5.04564C17.3852 5.44398 16.7491 6.50622 16.7491 7.23651H18.5866V0.73029C18.5866 0.33195 18.3039 0 17.9505 0H1.83746C1.4841 0 1.27208 0.33195 1.27208 0.73029V7.23651H3.10954C3.10954 6.50622 2.4735 5.44398 2.4735 5.04564Z"
              fill="#66678F"
            />
            <path
              d="M19.1519 10.1577H0.636042C0.282686 10.1577 0 10.4896 0 10.888V12.3485C0 12.7469 0.282686 13.0788 0.636042 13.0788V15.2697C0.636042 15.668 0.918728 16 1.27208 16H2.54417C2.89753 16 3.18021 15.668 3.18021 15.2697V14.5394H16.8198V15.2697C16.8198 15.668 17.1025 16 17.4558 16H18.7279C19.0813 16 19.364 15.668 19.364 15.2697V13.0788C19.7173 13.0788 20 12.7469 20 12.3485V10.888C20 10.2905 19.5053 10.1577 19.1519 10.1577Z"
              fill="#66678F"
            />
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
                    To == item || index == activeTo || index == arrowCounter,
                }"
                @mouseenter="index ? (activeTo = index) : (activeTo = 0)"
              >
                <div ref="dropdownItem">
                  <div class="ts-dropdown-city-name">
                    <span>
                      <svg
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.4735 5.04564C2.4735 4.71369 2.75618 4.31535 3.10954 4.31535C3.4629 4.31535 4.947 5.04564 5.58304 5.04564H6.21908C6.85512 5.04564 8.40989 4.31535 8.69258 4.31535C8.97527 4.31535 9.32862 4.6473 9.32862 5.04564C9.32862 5.44398 8.69258 6.50622 8.69258 7.23651H11.1661C11.1661 6.50622 10.53 5.44398 10.53 5.04564C10.53 4.6473 10.8127 4.31535 11.1661 4.31535C11.5194 4.31535 13.0035 5.04564 13.6396 5.04564H14.2756C14.9117 5.04564 16.4664 4.31535 16.7491 4.31535C17.0318 4.31535 17.3852 4.6473 17.3852 5.04564C17.3852 5.44398 16.7491 6.50622 16.7491 7.23651H18.5866V0.73029C18.5866 0.33195 18.3039 0 17.9505 0H1.83746C1.4841 0 1.27208 0.33195 1.27208 0.73029V7.23651H3.10954C3.10954 6.50622 2.4735 5.44398 2.4735 5.04564Z"
                        />
                        <path
                          d="M19.1519 10.1577H0.636042C0.282686 10.1577 0 10.4896 0 10.888V12.3485C0 12.7469 0.282686 13.0788 0.636042 13.0788V15.2697C0.636042 15.668 0.918728 16 1.27208 16H2.54417C2.89753 16 3.18021 15.668 3.18021 15.2697V14.5394H16.8198V15.2697C16.8198 15.668 17.1025 16 17.4558 16H18.7279C19.0813 16 19.364 15.668 19.364 15.2697V13.0788C19.7173 13.0788 20 12.7469 20 12.3485V10.888C20 10.2905 19.5053 10.1577 19.1519 10.1577Z"
                        />
                      </svg>
                    </span>
                    {{ item.name }}
                  </div>
                  <div class="ts-dropdown-ariport-name">
                    {{ item.secondaryName }}
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
        mode="hotel"
        :title="$t('HOTELS.Destination_To')"
        @getDataSearch="getDataOriginSearch"
        @close="openOriginDialog = $event"
      />
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
import MenuDialog from '../Common/MenuDialog.vue';
import SearchButton from './../Common/SearchButton.vue';
import DatePicker from './../Common/DatePicker.vue';
import Passengers from './../Common/HotelPassengers.vue';
import Rooms from './../Common/Rooms.vue';
import Toast from './../Common/Toast.vue';
import SearchDialog from '../Common/SearchDialog.vue';
import DatePickerMobile from '../Common/DatePickerMobile.vue';

export default {
  components: {
    SearchButton,
    MenuDialog,
    DatePicker,
    Passengers,
    Rooms,
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
      name: 'hotel',
      activeTo: 0,
      arrowCounter: 0,
    };
  },
  mounted() {
    let getlastHotelSearch = localStorage.getItem('lastHotelSearch');
    if (!getlastHotelSearch) {
      return;
    }
    let parsedGetlastHotelSearch = JSON.parse(getlastHotelSearch);
    this.To = parsedGetlastHotelSearch.To;
    this.displayTo = parsedGetlastHotelSearch.To.name;
    if (parsedGetlastHotelSearch.date) {
      this.lastDate = parsedGetlastHotelSearch.date;
      this.EntryDate = this.changeFormat(
        parsedGetlastHotelSearch.date.startDate
      );
      this.ExitDate = this.changeFormat(parsedGetlastHotelSearch.date.endDate);
      this.originalEntryDate = moment(
        parsedGetlastHotelSearch.date.startDate
      )._d;
      this.originalExitDate = moment(parsedGetlastHotelSearch.date.endDate)._d;
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
    fixScrolling() {
      let element = this.$refs.dropdownItem[this.arrowCounter];
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    },
    fillInputTab() {
      this.fillInput();
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
              `https://hotelapi.tripsupport.ca/api/Resource/SearchDestinations?name=${this.To.trim()}&page=1`
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
      if (!this.isMobile) {
        if (e.key == 'ArrowDown') {
          if (this.arrowCounter < this.items.length) {
            this.arrowCounter = this.arrowCounter + 1;
            this.activeTo = this.arrowCounter;
            this.fixScrolling();
          }
        } else if (e.key == 'ArrowUp') {
          if (this.arrowCounter > 0) {
            this.arrowCounter = this.arrowCounter - 1;
            this.activeTo = this.arrowCounter;
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
      let lang = 'lg=';
      if (this.$i18n.locale == 'fr') {
        lang = lang + 'fr-FR';
      } else {
        lang = lang + 'en-EN';
      }
      url = url.substring(url.indexOf('.')).split('/')[0];
      let href = `https://secure.tripsupport${url}/hotel/search/${customUrlStringify},${lang}`;
      href = encodeURI(href);
      window.open(href, '_self');
    },
  },
};
</script>
