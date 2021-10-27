<style scoped>
.ts-menu {
  top: 82px;
}
.ts-fields-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.ts-block-wrapper {
  display: flex;
  flex: 0 0 49%;
  margin-bottom: 10px;
  position: relative;
}
.ts-remove-icon {
  cursor: pointer;
  position: absolute;
  right: -22px;
  bottom: 10px;
}
.ts-input-wrapper {
  position: relative;
  flex: 0 0 35%;
}
.ts-date-picker {
  flex: 0 0 25%;
}
.ts-label {
  font-size: 12px;
  color: #66678f;
  display: flex;
  justify-content: flex-start;
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
  margin-top: 16px;
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
  margin-top: 40px;
}
.ts-airplane-icon {
  position: absolute;
  left: 9px;
  bottom: 13px;
}
.ts-dropdown-wrapper {
  padding: 10px 0;
  width: 352px;
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
.ts-action-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 37px;
  padding-bottom: 32px;
  width: 100%;
}
.ts-button {
  display: flex;
}
.ts-add-more {
  display: flex;
  align-items: center;
  padding: 13px 16px;
  font-size: 14px;
  color: #66678f;
  background: rgba(102, 103, 143, 0.1);
  border-radius: 4px;
  margin-right: 12px;
  font-weight: 400;
  cursor: pointer;
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
@media only screen and (max-width: 600px) {
  .ts-block-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 100%;
  }
  .ts-input-wrapper {
    position: relative;
    flex: 0 0 100%;
    margin-top: 10px;
  }
  .ts-date-picker {
    flex: 0 0 100%;
    margin-top: 10px;
  }
  .ts-input {
    width: 100%;
  }
  .ts-action-wrapper {
    display: block;
    padding-top: 18px;
    padding-bottom: 22px;
  }
  .ts-checkbox-wrapper {
    display: block;
  }
  .ts-checkbox-wrapper > div {
    margin-bottom: 20px;
  }
  .ts-button {
    display: block;
    margin-top: 26px;
  }
  .ts-add-more {
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
  }
  .ts-remove-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
  }
  .ts-flight-number {
    color: #66678f;
  }
  .ts-remove {
    color: #ed1b2e;
  }
}
</style>

<template>
  <div class="ts-fields-wrapper">
    <div
      class="ts-block-wrapper"
      v-for="(trip, index) in tripsSearchData"
      :key="index"
    >
      <div class="ts-remove-wrapper" v-if="isMobile">
        <div class="ts-flight-number">Flight {{ index + 1 }}</div>
        <div class="ts-remove" v-if="index > 1" @click="remove(index)">
          remove
        </div>
      </div>
      <div class="ts-remove-icon" v-if="!isMobile && index > 1">
        <v-icon @click="remove(index)">mdi-close</v-icon>
      </div>
      <div class="ts-input-wrapper">
        <label class="ts-label">{{ $t('Departing_From') }}</label>
        <input
          type="text"
          class="ts-input"
          :placeholder="`${$t('Departing_From')}`"
          @keyup="searchOrigin($event.target.value, trip, $event)"
          v-bind:value="trip.displayOrigin"
          v-on:input="
            (trip.displayOrigin = $event.target.value),
              (trip.origin = $event.target.value)
          "
          v-click-outside="
            () => {
              trip.openOriginDialog = false;
            }
          "
          @click="openOrigin(trip)"
          @focus="$event.target.select()"
          @change="fillInput(trip)"
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
        <DropdownDialog
          :showMenu="trip.openOriginDialog"
          v-if="trip.originItems.length"
        >
          <template #data>
            <div class="ts-dropdown-wrapper">
              <div
                class="ts-dropdown-item"
                v-for="(item, index) in trip.originItems"
                :key="index"
                :class="{
                  active:
                    trip.origin == item || index == trip.arrowCounterOrigin,
                }"
                @click="getOrigin(item, trip)"
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
        </DropdownDialog>
      </div>
      <SearchDialog
        :openDialog="trip.openOriginMobile"
        :items="trip.originItems"
        :title="$t('Departing_From')"
        @getDataSearch="getMobileDataOriginSearch($event, trip)"
        @close="trip.openOriginMobile = $event"
      />
      <div class="ts-input-wrapper">
        <label class="ts-label">{{ $t('Going_To') }}</label>
        <input
          type="text"
          class="ts-input"
          :placeholder="`${$t('Going_To')}`"
          @keyup="searchDestination($event.target.value, trip, $event)"
          v-bind:value="trip.displayDestination"
          v-on:input="
            (trip.displayDestination = $event.target.value),
              (trip.destination = $event.target.value)
          "
          v-click-outside="
            () => {
              trip.openDestinationDialog = false;
            }
          "
          @click="openDestination(trip)"
          @focus="$event.target.select()"
          @change="fillInput(trip)"
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
        <DropdownDialog
          :showMenu="trip.openDestinationDialog"
          v-if="trip.DestinationItems.length"
        >
          <template #data>
            <div class="ts-dropdown-wrapper">
              <div
                class="ts-dropdown-item"
                v-for="(item, index) in trip.DestinationItems"
                :key="index"
                :class="{
                  active:
                    trip.destination == item ||
                    index == trip.arrowCounterDestination,
                }"
                @click="getDestination(item, trip)"
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
        </DropdownDialog>
      </div>
      <SearchDialog
        :openDialog="trip.openDestinationMobile"
        :items="trip.DestinationItems"
        :title="$t('Going_To')"
        @getDataSearch="getMobileDataDestinationSearch($event, trip)"
        @close="trip.openDestinationMobile = $event"
      />
      <div class="ts-date-picker">
        <NewDatePicker
          @RangeSelectedDate="getRangeDate($event, trip)"
          @clearDate="clearDate(trip)"
          :lastDate="trip.lastDate"
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
        <div>
          <button class="ts-add-more" @click="addNewTrips">
            <svg
              height="18px"
              version="1.1"
              viewBox="0 0 50 50"
              width="18px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="margin-right:5px"
            >
              <line
                fill="none"
                stroke="#66678f"
                stroke-miterlimit="10"
                stroke-width="4"
                x1="9"
                x2="41"
                y1="25"
                y2="25"
              />
              <line
                fill="none"
                stroke="#66678f"
                stroke-miterlimit="10"
                stroke-width="4"
                x1="25"
                x2="25"
                y1="9"
                y2="41"
              />
            </svg>
            Add Another Flight
          </button>
        </div>
        <div>
          <SearchButton
            @search="save"
            :buttonText="`${$t('Search_Flights')}`"
            :activeButton="disabledButton"
          />
        </div>
      </div>
    </div>
    <Toast v-model="showDialog" :toast="toast" />
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      name: 'flight',
      tripsSearchData: [],
      IsFlexiSearch: false,
      ns: false,
      showDialog: false,
      toast: {
        toastText: '',
        color: 'red',
      },
    };
  },
  created() {
    this.tripsSearchData.push({
      origin: null,
      displayOrigin: null,
      destination: null,
      displayDestination: null,
      openOriginDialog: false,
      openDestinationDialog: false,
      openOriginMobile: false,
      openDestinationMobile: false,
      departureDate: null,
      lastDate: null,
      originItems: [],
      DestinationItems: [],
      arrowCounterOrigin: 0,
      arrowCounterDestination: 0,
    });
    this.tripsSearchData.push({
      origin: null,
      displayOrigin: null,
      destination: null,
      displayDestination: null,
      openOriginDialog: false,
      openDestinationDialog: false,
      openOriginMobile: false,
      openDestinationMobile: false,
      departureDate: null,
      lastDate: null,
      originItems: [],
      DestinationItems: [],
      arrowCounterOrigin: 0,
      arrowCounterDestination: 0,
    });
  },
  mounted() {
    let getLastSearch = localStorage.getItem('lastFlightMultipleSearch');
    if (!getLastSearch) {
      this.getUserLocation();
      return;
    }
    let parsedGetLastSearch = JSON.parse(getLastSearch);
    this.tripsSearchData = parsedGetLastSearch;
  },
  computed: {
    disabledButton() {
      let adult = this.$store.state.adult;
      if (
        this.validation('origin') ||
        this.validation('destination') ||
        this.validation('date') ||
        adult == 0
      ) {
        return true;
      }
    },
    isMobile() {
      if (window.innerWidth <= 600) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    fillInput(trip) {
      if (trip.originItems.length && trip.origin.length) {
        trip.origin = trip.originItems[0];
        trip.displayOrigin =
          trip.originItems[0].ac +
          '-' +
          trip.originItems[0].ct +
          '-' +
          trip.originItems[0].an;
        trip.openOriginDialog = false;
      }
      if (trip.DestinationItems.length && trip.destination.length) {
        trip.destination = trip.DestinationItems[0];
        trip.displayDestination =
          trip.DestinationItems[0].ac +
          '-' +
          trip.DestinationItems[0].ct +
          '-' +
          trip.DestinationItems[0].an;
        trip.openDestinationDialog = false;
      }
    },
    async getUserLocation() {
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
        this.tripsSearchData[0].origin = locationSearch;
        this.tripsSearchData[0].displayOrigin =
          locationSearch.ac + '-' + locationSearch.ct + '-' + locationSearch.an;
      } else {
        this.$cookie.set(
          'userLocation',
          JSON.stringify({
            ct: 'Toronto',
            ac: 'YTO',
          })
        );
        this.tripsSearchData[0].origin = {
          ac: 'YTO',
          an: 'Toronto All airports',
          cc: 'CA',
          cn: 'CA',
          ct: 'Toronto',
        };
        this.tripsSearchData[0].displayOrigin =
          'YTO' + '-' + 'Toronto' + '-' + 'Toronto All airports';
      }
    },
    addNewTrips() {
      this.tripsSearchData.push({
        origin: null,
        displayOrigin: null,
        destination: null,
        displayDestination: null,
        openOriginDialog: false,
        openDestinationDialog: false,
        openOriginMobile: false,
        openDestinationMobile: false,
        departureDate: null,
        lastDate: null,
        originItems: [],
        DestinationItems: [],
        arrowCounterOrigin: 0,
        arrowCounterDestination: 0,
      });
    },
    getMobileDataOriginSearch(item, trip) {
      trip.origin = item.searchItem;
      trip.displayOrigin = item.display;
      if (!item.searchItem.ct) {
        this.searchRequest(item.searchItem, (cb) => {
          trip.originItems = cb;
        });
      }
    },
    getMobileDataDestinationSearch(item, trip) {
      trip.destination = item.searchItem;
      trip.displayDestination = item.display;
      if (!item.searchItem.ct) {
        this.searchRequest(item.searchItem, (cb) => {
          trip.DestinationItems = cb;
        });
      }
    },
    searchOrigin(key, trip, e) {
      this.searchRequest(key, (cb) => {
        trip.originItems = cb;
      });
      if (this.isMobile) {
        trip.openOriginDialog = false;
      } else {
        trip.openOriginDialog = true;
      }
      if (e.key == 'ArrowDown') {
        if (trip.arrowCounterOrigin < trip.originItems.length) {
          trip.arrowCounterOrigin = trip.arrowCounterOrigin + 1;
        }
      } else if (e.key == 'ArrowUp') {
        if (trip.arrowCounterOrigin > 0) {
          trip.arrowCounterOrigin = trip.arrowCounterOrigin - 1;
        }
      } else if (e.key == 'Enter') {
        if (trip.arrowCounterOrigin == 0 && trip.originItems[0]) {
          trip.origin = trip.originItems[0];
          trip.displayOrigin =
            trip.originItems[0].ac +
            '-' +
            trip.originItems[0].ct +
            '-' +
            trip.originItems[0].an;
        } else if (trip.arrowCounterOrigin > 0) {
          let item = trip.originItems[trip.arrowCounterOrigin];
          trip.origin = item;
          trip.displayOrigin = item.ac + '-' + item.ct + '-' + item.an;
          trip.arrowCounterOrigin = -1;
        }
        trip.openOriginDialog = false;
      }
    },
    searchDestination(key, trip, e) {
      this.searchRequest(key, (cb) => {
        trip.DestinationItems = cb;
      });
      if (this.isMobile) {
        trip.openDestinationDialog = false;
      } else {
        trip.openDestinationDialog = true;
      }
      if (e.key == 'ArrowDown') {
        if (trip.arrowCounterDestination < trip.DestinationItems.length) {
          trip.arrowCounterDestination = trip.arrowCounterDestination + 1;
        }
      } else if (e.key == 'ArrowUp') {
        if (trip.arrowCounterDestination > 0) {
          trip.arrowCounterDestination = trip.arrowCounterDestination - 1;
        }
      } else if (e.key == 'Enter') {
        if (trip.arrowCounterDestination == 0 && trip.DestinationItems[0]) {
          trip.destination = trip.DestinationItems[0];
          trip.displayDestination =
            trip.DestinationItems[0].ac +
            '-' +
            trip.DestinationItems[0].ct +
            '-' +
            trip.DestinationItems[0].an;
        } else if (trip.arrowCounterDestination > 0) {
          let item = trip.DestinationItems[trip.arrowCounterDestination];
          trip.destination = item;
          trip.displayDestination = item.ac + '-' + item.ct + '-' + item.an;
          trip.arrowCounterDestination = -1;
        }
        trip.openDestinationDialog = false;
      }
    },
    searchRequest(value, callback) {
      if (value) {
        this.axios
          .get(
            `https://search.tripsupport.ca/api/searchairports?searchvalue=${value.trim()}`
          )
          .then((response) => {
            callback(response.data);
          });
      }
    },
    getOrigin(item, trip) {
      trip.origin = item;
      trip.displayOrigin = item.ac + '-' + item.ct + '-' + item.an;
      trip.openOriginDialog = false;
    },
    getDestination(item, trip) {
      trip.destination = item;
      trip.displayDestination = item.ac + '-' + item.ct + '-' + item.an;
      trip.openDestinationDialog = false;
    },
    openOrigin(item) {
      if (this.isMobile) {
        item.openOriginDialog = false;
        item.openOriginMobile = !item.openOriginMobile;
      } else {
        item.openOriginDialog = true;
      }
    },
    openDestination(item) {
      if (this.isMobile) {
        item.openDestinationDialog = false;
        item.openDestinationMobile = !item.openDestinationMobile;
      } else {
        item.openDestinationDialog = true;
      }
    },
    getRangeDate(date, trip) {
      trip.lastDate = date;
      trip.departureDate = this.changeFormat(date.startDate);
    },
    clearDate(item) {
      item.departureDate = null;
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
    remove(index) {
      this.tripsSearchData.splice(index, 1);
    },
    getMultipleData(items) {
      let result = [];
      for (let item of items) {
        let splitCharacter = item.ac + '-' + item.ct + '-' + item.an;
        result.push(splitCharacter);
      }
      return result;
    },
    generateQuery() {
      let airfaireType = this.$store.state.airfaireType;
      let adult = this.$store.state.adult;
      let infant = this.$store.state.infant;
      let child = this.$store.state.child;
      let url = location.href;
      url = url.substring(url.indexOf('.')).split('/')[0];
      let getOrigin = this.tripsSearchData.map((items) => {
        return items.origin;
      });
      let getDestination = this.tripsSearchData.map((items) => {
        return items.destination;
      });
      let getDepartureDate = this.tripsSearchData.map((items) => {
        return items.departureDate;
      });
      let urlQuery = `https://secure.tripsupport${url}/flight/multicity;tripType=multicity;`;
      let FirstDestination = `destination=${getDestination[0].ac}-${getDestination[0].ct}-${getDestination[0].an};`;
      let FirstOrigin = `origin=${getOrigin[0].ac}-${getOrigin[0].ct}-${getOrigin[0].an};`;
      let FirstDepartDate = `departDate=${getDepartureDate[0]};`;
      let multiOrigin = `multiOrigin=${this.getMultipleData(getOrigin)};`;
      let multiDestination = `multiDestination=${this.getMultipleData(
        getDestination
      )};`;
      let multidate = `multidate=${getDepartureDate}`;
      let QueryAdult = `adult=${adult};`;
      let QueryChild = `child=${child};`;
      let QueryInfant = `infant=${infant};`;
      let QueryAirfaireType = `class=${airfaireType};`;
      let IsFlexiSearch = `IsFlexiSearch=${this.IsFlexiSearch};`;
      let ns = `ns=${this.ns};`;

      let href = `${urlQuery}${FirstOrigin}${FirstDestination}${IsFlexiSearch}${ns}${FirstDepartDate}returnDate=;${QueryAdult}${QueryChild}${QueryInfant}${QueryAirfaireType}${multiOrigin}${multiDestination}${multidate}`;
      href = href.replace(/\(/g, '%28').replace(/\)/g, '%29');
      window.open(href, '_self');
    },
    validation(mode) {
      let isValid;
      let data;
      if (mode == 'origin') {
        data = this.tripsSearchData.map((items) => {
          if (items.origin) {
            return items.origin.ct;
          }
        });
      } else if (mode == 'destination') {
        data = this.tripsSearchData.map((items) => {
          if (items.destination) {
            return items.destination.ct;
          }
        });
      } else if (mode == 'date') {
        data = this.tripsSearchData.map((items) => {
          if (items.departureDate) {
            return items.departureDate;
          }
        });
      }

      for (let items in data) {
        if (data[items] === undefined || data[items] === null) {
          isValid = true;
        } else {
          isValid = false;
        }
      }
      return isValid;
    },
    setLocalStorage() {
      let LocalData = this.tripsSearchData.map((item) => {
        return {
          origin: item.origin,
          displayOrigin: item.displayOrigin,
          destination: item.destination,
          displayDestination: item.displayDestination,
          openOriginDialog: false,
          openDestinationDialog: false,
          openOriginMobile: false,
          openDestinationMobile: false,
          lastDate: item.lastDate,
          originItems: [],
          DestinationItems: [],
          arrowCounterOrigin: 0,
          arrowCounterDestination: 0,
        };
      });
      localStorage.setItem(
        'lastFlightMultipleSearch',
        JSON.stringify(LocalData)
      );
    },
    validationFields() {
      if (this.validation('origin')) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter Departing From ',
        };
        this.$gtag.event('Validation', {
          event_category: 'Flight Multi City',
          event_label: 'User entered an invalid Departing From',
        });
        return;
      }
      if (this.validation('destination')) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter Departing Going To ',
        };
        this.$gtag.event('Validation', {
          event_category: 'Flight Multi City',
          event_label: 'User entered an invalid Going To',
        });
        return;
      }
      if (this.validation('date')) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter departure date',
        };
        this.$gtag.event('Validation', {
          event_category: 'Flight Multi City',
          event_label: 'User entered an invalid Departure',
        });
        return;
      }
      if (this.$store.state.adultt == 0) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'AdultCount should not be zero',
        };
        this.$gtag.event('Validation', {
          event_category: 'Flight Multi City',
          event_label: 'User entered an invalid Traveller',
        });
        return;
      }
      this.$gtag.event('Search', {
        event_category: 'Flight Multi City',
        event_label: 'User submit new search',
      });
      this.generateQuery();
    },
    save() {
      this.validationFields();
      this.setLocalStorage();
    },
  },
};
</script>
