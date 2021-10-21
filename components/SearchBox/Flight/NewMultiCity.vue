<style scoped>
.ts-fields-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.ts-block-wrapper {
  display: flex;
  flex: 0 0 50%;
  margin-bottom: 10px;
}
.ts-input-wrapper {
  position: relative;
  flex: 0 0 35%;
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
.ts-date-picker {
  flex: 0 0 25%;
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
</style>

<template>
  <div class="ts-fields-wrapper">
    <div
      class="ts-block-wrapper"
      v-for="(trip, index) in tripsSearchData"
      :key="index"
    >
      <div class="ts-input-wrapper">
        <label class="ts-label">{{ $t('Departing_From') }}</label>
        <input
          type="text"
          class="ts-input"
          :placeholder="`${$t('Departing_From')}`"
          @keyup="searchOrigin($event.target.value, trip)"
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
      <div v class="ts-input-wrapper">
        <label class="ts-label">{{ $t('Departing_From') }}</label>
        <input
          type="text"
          class="ts-input"
          :placeholder="`${$t('Departing_From')}`"
          @keyup="searchDestination($event.target.value, trip)"
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
      <div class="ts-date-picker">
        <NewDatePicker
          @RangeSelectedDate="getRangeDate($event, trip)"
          @clearDate="clearDate(trip)"
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
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      tripsSearchData: [],
      IsFlexiSearch: false,
      ns: false,
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
      departure: null,
      originItems: [],
      DestinationItems: [],
    });
    this.tripsSearchData.push({
      origin: null,
      displayOrigin: null,
      destination: null,
      displayDestination: null,
      openOriginDialog: false,
      openDestinationDialog: false,
      departure: null,
      originItems: [],
      DestinationItems: [],
    });
  },
  computed: {
    disabledButton() {},
  },
  methods: {
    addNewTrips() {
      this.tripsSearchData.push({
        origin: null,
        displayOrigin: null,
        destination: null,
        displayDestination: null,
        openOriginDialog: false,
        openDestinationDialog: false,
        departure: null,
        originItems: [],
        DestinationItems: [],
      });
    },
    searchOrigin(key, trip) {
      this.searchRequest(key, (cb) => {
        trip.originItems = cb;
      });
    },
    searchDestination(key, trip) {
      this.searchRequest(key, (cb) => {
        trip.DestinationItems = cb;
      });
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
      item.openOriginDialog = true;
    },
    openDestination(item) {
      item.openDestinationDialog = true;
    },
    getRangeDate(date, trip) {
      trip.departure = this.changeFormat(date.startDate);
    },
    clearDate(item) {
      item.departure = null;
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
    save() {
      console.log(this.tripsSearchData);
    },
    // last date not implement
    // validation not implement
    // save not implement
    // fix query lisbon not implement
    // fix width dropdown not implement
    // keyup and keydown not implement
  },
};
</script>
