<style scoped>
.ts-menu {
  width: 95%;
  top: 84px;
}
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
.ts-origin .ts-input,
.ts-destination .ts-input {
  width: 95%;
}
.ts-origin,
.ts-destination {
  position: relative;
  width: 100%;
}
.ts-label {
  text-align: left;
  font-size: 12px;
  color: #66678f;
  padding-bottom: 0 !important;
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
.ts-svg {
  margin-right: 16px;
  margin-top: 45px;
  cursor: pointer;
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
.ts-dropdown-wrapper {
  padding: 10px 0;
}
.ts-dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 8px;
}
.ts-dropdown-item:not(:last-child) {
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

.ts-svg svg {
  fill: #ababc4;
}
@media only screen and (max-width: 768px) {
  .ts-destination .ts-input {
    margin-top: 12px;
  }
  .ts-origin .ts-input {
    margin-top: 0;
  }
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
  .ts-label {
    display: none;
  }
  .ts-origin .ts-input,
  .ts-destination .ts-input {
    width: 100%;
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
  .ts-dropdown-wrapper {
    width: 100%;
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
          <label class="ts-label">{{ $t('Departing_From') }}</label>
          <input
            ref="originInput"
            @keyup="originSearch"
            v-bind:value="displayOrigin"
            v-on:input="
              (displayOrigin = $event.target.value),
                (origin = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Departing_From')}`"
            v-click-outside="onClickOutside"
            @click="openOrigin"
            @focus="$event.target.select()"
            @change="fillInput"
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
                d="M16.808 3.19729C16.5399 3.46359 15.2015 4.93888 13.9124 6.21937C13.9124 17.0109 14.2682 16.2008 12.4569 18L11.0211 11.9598L9.55414 10.5026C5.66686 14.3632 6.25266 11.3737 6.25266 15.0695C6.25636 15.8766 5.91536 16.4075 5.42637 16.8932L4.06597 13.8389L0.990894 12.4876C2.00029 11.4859 2.55178 11.6669 4.93967 11.6669C5.75236 10.0003 6.75696 9.28595 7.54295 8.50496L6.07896 7.05087L0 5.62688C1.71529 3.92299 0.663795 4.23739 11.8395 4.23739C13.1355 2.95009 14.5277 1.4671 14.7969 1.1997C15.5714 0.430509 17.5986 -0.235987 17.9174 0.0806108C18.2361 0.397209 17.5825 2.428 16.808 3.19729ZM15.4406 7.44417L14.6307 8.24686V10.6048C16.3815 8.84986 16.827 8.82816 15.4406 7.44417ZM10.6281 2.6519C9.26034 1.2867 9.36394 1.5691 7.41295 3.50889H9.77544L10.6281 2.6519Z"
                fill="#66678F"
              />
            </svg>
          </div>
          <MenuDialog :showMenu="showOriginMenu" v-if="originItems.length">
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in originItems"
                  :key="index"
                  @click="getOrigin(item)"
                  :class="{
                    active:
                      origin == item ||
                      index == activeOrigin ||
                      index == arrowCounterOrigin,
                  }"
                  @mouseenter="
                    index ? (activeOrigin = index) : (activeOrigin = 0)
                  "
                >
                  <div>
                    <div class="ts-dropdown-city-name">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.808 3.19729C16.5399 3.46359 15.2015 4.93888 13.9124 6.21937C13.9124 17.0109 14.2682 16.2008 12.4569 18L11.0211 11.9598L9.55414 10.5026C5.66686 14.3632 6.25266 11.3737 6.25266 15.0695C6.25636 15.8766 5.91536 16.4075 5.42637 16.8932L4.06597 13.8389L0.990894 12.4876C2.00029 11.4859 2.55178 11.6669 4.93967 11.6669C5.75236 10.0003 6.75696 9.28595 7.54295 8.50496L6.07896 7.05087L0 5.62688C1.71529 3.92299 0.663795 4.23739 11.8395 4.23739C13.1355 2.95009 14.5277 1.4671 14.7969 1.1997C15.5714 0.430509 17.5986 -0.235987 17.9174 0.0806108C18.2361 0.397209 17.5825 2.428 16.808 3.19729ZM15.4406 7.44417L14.6307 8.24686V10.6048C16.3815 8.84986 16.827 8.82816 15.4406 7.44417ZM10.6281 2.6519C9.26034 1.2867 9.36394 1.5691 7.41295 3.50889H9.77544L10.6281 2.6519Z"
                          />
                        </svg>
                      </span>
                      {{ item.ct }}({{ item.ac }})
                    </div>
                    <div class="ts-dropdown-ariport-name">
                      {{ item.an }}
                    </div>
                  </div>
                  <div class="ts-dropdown-airport">
                    {{ item.cc }}
                  </div>
                </div>
              </div>
            </template>
          </MenuDialog>
        </div>
        <SearchDialog
          :openDialog="openOriginDialog"
          :items="originItems"
          :from="true"
          :title="$t('Departing_From')"
          @getDataSearch="getDataOriginSearch"
          @close="openOriginDialog = $event"
        />
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
          <label class="ts-label">{{ $t('Going_To') }}</label>
          <input
            ref="destinationInput"
            @keyup="destinationSearch"
            v-bind:value="displayDestination"
            v-on:input="
              (displayDestination = $event.target.value),
                (destination = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Going_To')}`"
            v-click-outside="outSideDestinationMenu"
            @click="openDestination"
            @focus="$event.target.select()"
            @change="fillInput"
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
                d="M16.808 3.19729C16.5399 3.46359 15.2015 4.93888 13.9124 6.21937C13.9124 17.0109 14.2682 16.2008 12.4569 18L11.0211 11.9598L9.55414 10.5026C5.66686 14.3632 6.25266 11.3737 6.25266 15.0695C6.25636 15.8766 5.91536 16.4075 5.42637 16.8932L4.06597 13.8389L0.990894 12.4876C2.00029 11.4859 2.55178 11.6669 4.93967 11.6669C5.75236 10.0003 6.75696 9.28595 7.54295 8.50496L6.07896 7.05087L0 5.62688C1.71529 3.92299 0.663795 4.23739 11.8395 4.23739C13.1355 2.95009 14.5277 1.4671 14.7969 1.1997C15.5714 0.430509 17.5986 -0.235987 17.9174 0.0806108C18.2361 0.397209 17.5825 2.428 16.808 3.19729ZM15.4406 7.44417L14.6307 8.24686V10.6048C16.3815 8.84986 16.827 8.82816 15.4406 7.44417ZM10.6281 2.6519C9.26034 1.2867 9.36394 1.5691 7.41295 3.50889H9.77544L10.6281 2.6519Z"
                fill="#66678F"
              />
            </svg>
          </div>
          <MenuDialog
            :showMenu="showDestinationMenu"
            v-if="destinationItems.length"
          >
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in destinationItems"
                  :key="index"
                  @click="getDestination(item)"
                  :class="{
                    active:
                      origin == item ||
                      index == activeDestination ||
                      index == arrowCounterDestination,
                  }"
                  @mouseenter="
                    index
                      ? (activeDestination = index)
                      : (activeDestination = 0)
                  "
                >
                  <div>
                    <div class="ts-dropdown-city-name">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.808 3.19729C16.5399 3.46359 15.2015 4.93888 13.9124 6.21937C13.9124 17.0109 14.2682 16.2008 12.4569 18L11.0211 11.9598L9.55414 10.5026C5.66686 14.3632 6.25266 11.3737 6.25266 15.0695C6.25636 15.8766 5.91536 16.4075 5.42637 16.8932L4.06597 13.8389L0.990894 12.4876C2.00029 11.4859 2.55178 11.6669 4.93967 11.6669C5.75236 10.0003 6.75696 9.28595 7.54295 8.50496L6.07896 7.05087L0 5.62688C1.71529 3.92299 0.663795 4.23739 11.8395 4.23739C13.1355 2.95009 14.5277 1.4671 14.7969 1.1997C15.5714 0.430509 17.5986 -0.235987 17.9174 0.0806108C18.2361 0.397209 17.5825 2.428 16.808 3.19729ZM15.4406 7.44417L14.6307 8.24686V10.6048C16.3815 8.84986 16.827 8.82816 15.4406 7.44417ZM10.6281 2.6519C9.26034 1.2867 9.36394 1.5691 7.41295 3.50889H9.77544L10.6281 2.6519Z"
                          />
                        </svg>
                      </span>
                      {{ item.ct }}({{ item.ac }})
                    </div>
                    <div class="ts-dropdown-ariport-name">
                      {{ item.an }}
                    </div>
                  </div>
                  <div class="ts-dropdown-airport">
                    {{ item.cc }}
                  </div>
                </div>
              </div>
            </template>
          </MenuDialog>
        </div>
        <SearchDialog
          :openDialog="openDestinationDialog"
          :items="destinationItems"
          :from="false"
          :title="$t('Going_To')"
          @getDataSearch="getDataDestinationSearch"
          @close="openDestinationDialog = $event"
        />
      </div>
      <div class="ts-date-picker">
        <NewDatePicker
          @RangeSelectedDate="getRangeDate"
          @clearDate="clearDate"
          :lastDate="lastDate"
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
import SearchButton from './../Common/SearchButton.vue';
import Travellers from './../Common/Passengers.vue';
import Toast from './../Common/Toast.vue';
import MenuDialog from '../Common/MenuDialog.vue';
import DatePicker from './../Common/DatePicker.vue';
import DatePickerMobile from '../Common/DatePickerMobile.vue';
import SearchDialog from '../Common/SearchDialog.vue';
export default {
  components: {
    SearchButton,
    Travellers,
    MenuDialog,
    DatePicker,
    Toast,
    DatePickerMobile,
    SearchDialog,
  },
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
      ns: false,
      departDate: null,
      returnDate: null,
      lastDate: null,
      showOriginMenu: false,
      showDestinationMenu: false,
      originItems: [],
      destinationItems: [],
      departureDateMenu: false,
      adult: 1,
      infant: 0,
      child: 0,
      class: this.$store.commit('getAirType', `${this.$t('Economy')}`),
      userLocation: {},
      openOriginDialog: false,
      openDestinationDialog: false,
      activeOrigin: 0,
      activeDestination: 0,
      arrowCounterOrigin: 0,
      arrowCounterDestination: 0,
    };
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
    let { data } = await this.axios.get(
      `https://tripsupport.ca/wp-json/trip-support-endpoints/v1/user/geolocation`
    );
    let { data: res } = await this.axios.get(
      `https://search.tripsupport.ca/api/searchairports?searchvalue=${data.data.city.toLowerCase()}`
    );
    if (res.length) {
      let locationSearch = res[0];
      this.$cookie.set(
        'userLocation',
        JSON.stringify({
          ct: locationSearch.ct,
          ac: locationSearch.ac,
        })
      );
      this.origin = locationSearch;
      this.displayOrigin =
        locationSearch.ac + '-' + locationSearch.ct + '-' + locationSearch.an;
    } else {
      this.$cookie.set(
        'userLocation',
        JSON.stringify({
          ct: 'Toronto',
          ac: 'YTO',
        })
      );
      this.origin = {
        ac: 'YTO',
        an: 'Toronto All airports',
        cc: 'CA',
        cn: 'CA',
        ct: 'Toronto',
      };
      this.displayOrigin =
        'YTO' + '-' + 'Toronto' + '-' + 'Toronto All airports';
    }
    let getFlightLastSearch = localStorage.getItem('lastFlightRoundTripSearch');
    if (!getFlightLastSearch) {
      return;
    }
    let parsedGetFlightLastSearch = JSON.parse(getFlightLastSearch);
    this.displayOrigin =
      parsedGetFlightLastSearch.origin.ac +
      '-' +
      parsedGetFlightLastSearch.origin.ct +
      '-' +
      parsedGetFlightLastSearch.origin.an;
    this.origin = parsedGetFlightLastSearch.origin;
    this.displayDestination =
      parsedGetFlightLastSearch.destination.ac +
      '-' +
      parsedGetFlightLastSearch.destination.ct +
      '-' +
      parsedGetFlightLastSearch.destination.an;
    this.destination = parsedGetFlightLastSearch.destination;
    if (parsedGetFlightLastSearch.date) {
      this.lastDate = parsedGetFlightLastSearch.date;
      this.departDate = this.changeFormat(
        parsedGetFlightLastSearch.date.startDate
      );
      this.returnDate = this.changeFormat(
        parsedGetFlightLastSearch.date.endDate
      );
    }
  },
  methods: {
    fillInput() {
      if (this.originItems.length && this.origin.length) {
        this.origin = this.originItems[0];
        this.displayOrigin =
          this.originItems[0].ac +
          '-' +
          this.originItems[0].ct +
          '-' +
          this.originItems[0].an;
        this.showOriginMenu = false;
      }
      if (this.destinationItems.length && this.destination.length) {
        this.destination = this.destinationItems[0];
        this.displayDestination =
          this.destinationItems[0].ac +
          '-' +
          this.destinationItems[0].ct +
          '-' +
          this.destinationItems[0].an;
        this.showDestinationMenu = false;
      }
    },
    openOrigin() {
      if (window.innerWidth <= 600)
        this.openOriginDialog = !this.openOriginDialog;
      if (window.innerWidth <= 600) {
        this.showOriginMenu = false;
      } else {
        this.showOriginMenu = true;
      }
    },
    openDestination() {
      if (window.innerWidth <= 600)
        this.openDestinationDialog = !this.openDestinationDialog;
      if (window.innerWidth <= 600) {
        this.showDestinationMenu = false;
      } else {
        this.showDestinationMenu = true;
      }
    },
    onClickOutside() {
      this.showOriginMenu = false;
    },
    outSideDestinationMenu() {
      this.showDestinationMenu = false;
    },
    focusNext(elem) {
      const currentIndex = Array.from(elem.form.elements).indexOf(elem);
      elem.form.elements
        .item(
          currentIndex < elem.form.elements.length - 1 ? currentIndex + 1 : 0
        )
        .focus();
    },
    originSearch(e) {
      if (!this.origin.ct) {
        this.axios
          .get(
            `https://search.tripsupport.ca/api/searchairports?searchvalue=${this.origin.trim()}`
          )
          .then((response) => {
            this.originItems = response.data;
          });
      }
      if (window.innerWidth <= 600) {
        this.showOriginMenu = false;
      } else {
        this.showOriginMenu = true;
      }
      if (!this.isMobile) {
        if (e.key == 'ArrowDown') {
          if (this.arrowCounterOrigin < this.originItems.length) {
            this.arrowCounterOrigin = this.arrowCounterOrigin + 1;
            this.activeOrigin = this.arrowCounterOrigin;
          }
        } else if (e.key == 'ArrowUp') {
          if (this.arrowCounterOrigin > 0) {
            this.arrowCounterOrigin = this.arrowCounterOrigin - 1;
            this.activeOrigin = this.arrowCounterOrigin;
          }
        } else if (e.key == 'Enter') {
          if (this.arrowCounterOrigin == 0 && this.originItems[0]) {
            this.origin = this.originItems[0];
            this.displayOrigin =
              this.originItems[0].ac +
              '-' +
              this.originItems[0].ct +
              '-' +
              this.originItems[0].an;
          } else if (this.arrowCounterOrigin > 0) {
            let item = this.originItems[this.arrowCounterOrigin];
            this.origin = item;
            this.displayOrigin = item.ac + '-' + item.ct + '-' + item.an;
            this.arrowCounterOrigin = -1;
          }
          this.$refs.destinationInput.focus();
          this.showOriginMenu = false;
        }
      }
    },
    destinationSearch(e) {
      if (!this.destination.ct) {
        this.axios
          .get(
            `https://search.tripsupport.ca/api/searchairports?searchvalue=${this.destination.trim()}`
          )
          .then((response) => {
            this.destinationItems = response.data;
          });
      }
      if (window.innerWidth <= 600) {
        this.showDestinationMenu = false;
      } else {
        this.showDestinationMenu = true;
      }
      if (!this.isMobile) {
        if (e.key == 'ArrowDown') {
          if (this.arrowCounterDestination < this.destinationItems.length) {
            this.arrowCounterDestination = this.arrowCounterDestination + 1;
            this.activeDestination = this.arrowCounterDestination;
          }
        } else if (e.key == 'ArrowUp') {
          if (this.arrowCounterDestination > 0) {
            this.arrowCounterDestination = this.arrowCounterDestination - 1;
            this.activeDestination = this.arrowCounterDestination;
          }
        } else if (e.key == 'Enter') {
          if (this.arrowCounterDestination == 0 && this.destinationItems[0]) {
            this.destination = this.destinationItems[0];
            this.displayDestination =
              this.destinationItems[0].ac +
              '-' +
              this.destinationItems[0].ct +
              '-' +
              this.destinationItems[0].an;
          } else if (this.arrowCounterDestination > 0) {
            let item = this.destinationItems[this.arrowCounterDestination];
            this.destination = item;
            this.displayDestination = item.ac + '-' + item.ct + '-' + item.an;
            this.arrowCounterDestination = -1;
          }
          this.showDestinationMenu = false;
        }
      }
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
    getOrigin(item) {
      this.origin = item;
      this.displayOrigin = item.ac + '-' + item.ct + '-' + item.an;
    },
    getDestination(item) {
      this.destination = item;
      this.displayDestination = item.ac + '-' + item.ct + '-' + item.an;
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
      let origin = this.origin;
      let displayOrigin = this.displayOrigin;
      let destination = this.destination;
      let displayDestination = this.displayDestination;

      this.origin = destination;
      this.displayOrigin = displayDestination;
      this.destination = origin;
      this.displayDestination = displayOrigin;
    },
    getDataOriginSearch(origin, displayOrigin) {
      this.origin = origin;
      this.displayOrigin = displayOrigin;
      this.originSearch();
    },
    getDataDestinationSearch(destination, displayDestination) {
      this.destination = destination;
      this.displayDestination = displayDestination;
      if (!this.destination.ct) {
        this.destinationSearch();
      }
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
      url = url.substring(url.indexOf('.')).split('/')[0];
      let href = `https://secure.tripsupport${url}/flight/roundtrip;tripType=roundtrip;destination=${this.destination.ac};origin=${this.origin.ac};IsFlexiSearch=${this.IsFlexiSearch};ns=${this.ns};departDate=${this.departDate};returnDate=${this.returnDate};adult=${this.adult};child=${this.child};infant=${this.infant};class=${this.class};multiOrigin=;multiDestination=;multidate=`;
      window.open(href, '_self');
    },
  },
};
</script>
