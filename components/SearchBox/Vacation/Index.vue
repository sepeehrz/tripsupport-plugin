<style scoped>
.ts-menu {
  width: 95%;
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
.ts-origin input,
.ts-destination input,
.ts-chips {
  width: 95%;
}
.ts-origin,
.ts-destination {
  position: relative;
  width: 100%;
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
  align-items: center;
  cursor: pointer;
  padding: 0 8px;
  height: 40px;
}
.ts-dropdown-item:hover {
  background: rgba(0, 122, 255, 0.02);
}
.ts-dropdown-item:hover .ts-name {
  color: #0c0d25;
}
.ts-dropdown-item:hover svg {
  fill: #007aff;
}
.ts-dropdown-item svg {
  fill: #ababc4;
  margin-bottom: -5px;
}
.active {
  background: rgba(0, 122, 255, 0.02);
}
.ts-name {
  font-weight: 500;
  color: #ababc4;
  font-size: 16px;
}
.active .ts-name {
  color: #0c0d25;
}
.active svg {
  fill: #007aff;
}
.ts-button-wrapper {
  display: flex;
  align-items: center;
}
.ts-multiple-dialog-wrapper {
  position: relative;
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
.ts-chips {
  display: flex;
  align-items: center;
  height: 48px;
  border: 1px solid rgba(171, 171, 196, 0.6);
  padding: 0 10px;
  border-radius: 6px;
  background: #ffffff;
  margin-right: 16px;
  margin-top: 12px;
  padding-left: 40px;
  overflow: hidden;
}
.ts-chips-item,
.ts-chips-more {
  background: rgba(102, 103, 143, 0.1);
  border-radius: 32px;
  padding: 6px 10px;
  margin-right: 4px;
  cursor: pointer;
  white-space: nowrap;
}
.ts-chips-name {
  font-size: 14px;
  font-weight: 400;
  color: #66678f;
}
.ts-chips-name span {
  margin-right: 4px;
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
  .ts-multiple-dialog-wrapper {
    margin-bottom: 12px;
  }
  .ts-checkbox-wrapper {
    display: none;
  }
  label {
    display: none;
  }
  input[type='text'],
  .ts-chips {
    width: 100%;
  }
  .ts-dropdown-wrapper {
    width: 100vw;
  }
  ::v-deep .vue-daterange-picker {
    min-width: 140px;
  }
  ::v-deep .ts-picker-wrapper > div {
    width: unset !important;
  }
  .ts-origin input {
    margin-top: 0;
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
          <label for="">{{ $t('VACATION.Departing_From') }}</label>
          <input
            @keyup="searchFrom"
            v-bind:value="displayFrom"
            v-on:input="
              (displayFrom = $event.target.value), (From = $event.target.value)
            "
            type="text"
            :placeholder="`${$t('VACATION.Departing_From')}`"
            v-click-outside="onClickOutsideFrom"
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
                d="M16.808 3.19729C16.5399 3.46359 15.2015 4.93888 13.9124 6.21937C13.9124 17.0109 14.2682 16.2008 12.4569 18L11.0211 11.9598L9.55414 10.5026C5.66686 14.3632 6.25266 11.3737 6.25266 15.0695C6.25636 15.8766 5.91536 16.4075 5.42637 16.8932L4.06597 13.8389L0.990894 12.4876C2.00029 11.4859 2.55178 11.6669 4.93967 11.6669C5.75236 10.0003 6.75696 9.28595 7.54295 8.50496L6.07896 7.05087L0 5.62688C1.71529 3.92299 0.663795 4.23739 11.8395 4.23739C13.1355 2.95009 14.5277 1.4671 14.7969 1.1997C15.5714 0.430509 17.5986 -0.235987 17.9174 0.0806108C18.2361 0.397209 17.5825 2.428 16.808 3.19729ZM15.4406 7.44417L14.6307 8.24686V10.6048C16.3815 8.84986 16.827 8.82816 15.4406 7.44417ZM10.6281 2.6519C9.26034 1.2867 9.36394 1.5691 7.41295 3.50889H9.77544L10.6281 2.6519Z"
                fill="#66678F"
              />
            </svg>
          </div>
          <MenuDialog :showMenu="showFormMenu" v-if="FromsItemsDisplay.length">
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in FromsItemsDisplay"
                  :key="index"
                  @click="getFrom(item)"
                  :class="{
                    active:
                      From == item ||
                      index == activeFrom ||
                      index == arrowCounterFrom,
                  }"
                  @mouseenter="index ? (activeFrom = index) : (activeFrom = 0)"
                >
                  <div ref="dropdownItemOrigin">
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
                    <span class="ts-name">
                      {{ item.name }}
                    </span>
                  </div>
                </div>
              </div>
            </template>
          </MenuDialog>
        </div>
        <SearchDialog
          :openDialog="openOriginDialog"
          :items="FromsItemsDisplay"
          :from="true"
          :title="$t('VACATION.Departing_From')"
          mode="vacation"
          @getDataSearch="getDataOriginSearch"
          @close="openOriginDialog = $event"
        />
        <div class="ts-destination">
          <label for="">{{ $t('VACATION.Going_To') }}</label>
          <input
            ref="ToInput"
            @keyup="searchTo"
            v-bind:value="displayTo"
            v-on:input="
              (displayTo = $event.target.value), (To = $event.target.value)
            "
            type="text"
            :placeholder="`${$t('VACATION.Going_To')}`"
            v-click-outside="onClickOutsideTo"
            @click="openDestination"
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
                d="M16.808 3.19729C16.5399 3.46359 15.2015 4.93888 13.9124 6.21937C13.9124 17.0109 14.2682 16.2008 12.4569 18L11.0211 11.9598L9.55414 10.5026C5.66686 14.3632 6.25266 11.3737 6.25266 15.0695C6.25636 15.8766 5.91536 16.4075 5.42637 16.8932L4.06597 13.8389L0.990894 12.4876C2.00029 11.4859 2.55178 11.6669 4.93967 11.6669C5.75236 10.0003 6.75696 9.28595 7.54295 8.50496L6.07896 7.05087L0 5.62688C1.71529 3.92299 0.663795 4.23739 11.8395 4.23739C13.1355 2.95009 14.5277 1.4671 14.7969 1.1997C15.5714 0.430509 17.5986 -0.235987 17.9174 0.0806108C18.2361 0.397209 17.5825 2.428 16.808 3.19729ZM15.4406 7.44417L14.6307 8.24686V10.6048C16.3815 8.84986 16.827 8.82816 15.4406 7.44417ZM10.6281 2.6519C9.26034 1.2867 9.36394 1.5691 7.41295 3.50889H9.77544L10.6281 2.6519Z"
                fill="#66678F"
              />
            </svg>
          </div>
          <MenuDialog :showMenu="showToMenu" v-if="toItemsDisplay.length">
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in toItemsDisplay"
                  :key="index"
                  @click="getTo(item)"
                  :class="{
                    active:
                      To == item ||
                      index == activeTo ||
                      index == arrowCounterTo,
                  }"
                  @mouseenter="index ? (activeTo = index) : (activeTo = 0)"
                >
                  <div ref="dropdownItemDestination">
                    <span v-if="item.type == 'Hotel'">
                      <svg
                        height="18"
                        viewBox="0 0 640 512"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g _ngcontent-uhw-c21="">
                          <g
                            _ngcontent-uhw-c21=""
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              _ngcontent-uhw-c21=""
                              d="m347.829 38.679h-76.829v-38.679h-30v38.679h-76.829v42.815h183.658z"
                              data-original="#000000"
                            ></path>
                            <path
                              _ngcontent-uhw-c21=""
                              d="m392.647 482v-370.506h-273.294v370.506h-68.065v30h409.424v-30zm-153.458-332.885h33.622v30h-33.622zm0 67.62h33.622v30h-33.622zm0 67.621h33.622v30h-33.622zm-84.403-135.241h33.622v30h-33.622zm0 67.62h33.622v30h-33.622zm0 67.621h33.622v30h-33.622zm200.618 197.644h-30v-96.485h-54.404v96.485h-30v-96.485h-54.404v96.485h-30v-126.485h198.808zm1.811-167.644h-33.622v-30h33.622zm0-67.621h-33.622v-30h33.622zm0-67.62h-33.622v-30h33.622z"
                              data-original="#000000"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span v-else>
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
                    <span class="ts-name">
                      {{ item.name }}
                    </span>
                  </div>
                </div>
              </div>
            </template>
          </MenuDialog>
        </div>
        <SearchDialog
          :openDialog="openDestinationDialog"
          :items="toItemsDisplay"
          :title="$t('VACATION.Going_To')"
          mode="vacation"
          @getDataSearch="getDataDestinationSearch"
          @close="openDestinationDialog = $event"
        />
      </div>
      <div class="ts-duration-wrapper">
        <div class="ts-date-picker">
          <NewDatePicker
            ref="vacationDatePicker"
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
import SearchButton from './../Common/SearchButton.vue';
import Rooms from './Rooms.vue';
import Travellers from './Travellers.vue';
import MultipleDestionationDialog from './MultipleDestionationDialog.vue';
import Duration from './Duration.vue';
import Toast from './../Common/Toast.vue';
import MenuDialog from '../Common/MenuDialog.vue';
import Passengers from './../Common/Passengers.vue';
import AirfareType from './../Common/AirfareType.vue';
import DatePicker from './../Common/DatePicker.vue';
import SearchDialog from '../Common/SearchDialog.vue';
import DatePickerMobile from '../Common/DatePickerMobile.vue';
import moment from 'moment';

export default {
  components: {
    SearchButton,
    Rooms,
    Travellers,
    MultipleDestionationDialog,
    Duration,
    Toast,
    MenuDialog,
    Passengers,
    AirfareType,
    DatePicker,
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
      From: {},
      displayFrom: null,
      To: {},
      displayTo: null,
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
      loading: false,
      roomsError: false,
      readonly: false,
      showFormMenu: false,
      showToMenu: false,
      openOriginDialog: false,
      openDestinationDialog: false,
      selectedMultiple: [],
      previousSelectionTravellers: {},
      activeFrom: 0,
      activeTo: 0,
      arrowCounterFrom: 0,
      arrowCounterTo: 0,
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

      await this.axios
        .get(
          `https://vacationapi.tripsupport.ca/api/Resource/GetDestinations?codes=${
            this.From.codes ? this.From.codes : 'YYZ'
          }`
        )
        .then((response) => {
          this.toItems = response.data.data;
          this.toItemsDisplay = this.toItems.slice(0, 50);
        });

      let userLocation = data.data.city.toLowerCase();
      this.querySelections(userLocation, this.FromsItems, (cb) => {
        if (cb.length) {
          this.$cookie.set(
            'userLocation',
            JSON.stringify({
              ct: cb[0].name,
              ac: cb[0].codes,
            })
          );
          this.displayFrom = cb[0].name;
          this.From = cb[0];
        } else {
          this.$cookie.set(
            'userLocation',
            JSON.stringify({
              ct: 'Toronto',
              ac: 'YYZ',
            })
          );
          this.displayFrom = 'Toronto';
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
    let parsedGetLastVacationBooking = JSON.parse(getLastVacationBooking);
    this.displayFrom = parsedGetLastVacationBooking.From.name;
    this.From = parsedGetLastVacationBooking.From;
    this.To = parsedGetLastVacationBooking.To;
    this.displayTo = parsedGetLastVacationBooking.To.name;
    this.NumberOfRooms = parsedGetLastVacationBooking.NumberOfRooms;
    if (parsedGetLastVacationBooking.date) {
      this.lastDate = parsedGetLastVacationBooking.date;
      this.DepartureDate = this.changeFormat(
        parsedGetLastVacationBooking.date.startDate
      );
    }
    if (parsedGetLastVacationBooking.multiple.length) {
      this.selectedMultiple = parsedGetLastVacationBooking.multiple;
    }
    if (parsedGetLastVacationBooking.TravellersData) {
      let childAgesArray = [];
      parsedGetLastVacationBooking.TravellersData.childrenAges.forEach(
        (element) => {
          childAgesArray.push(element.child);
        }
      );
      this.Adults = parsedGetLastVacationBooking.TravellersData.adults;
      this.Children = parsedGetLastVacationBooking.TravellersData.children;
      this.ChildrenAges = childAgesArray;
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth < 600;
    },
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
    focusInput(e) {
      if (!this.isMobile) {
        e.target.select();
      }
    },
    fillInputTab() {
      this.fillInput();
    },
    fixScrollingOrigin() {
      let element = this.$refs.dropdownItemOrigin[this.arrowCounterFrom];
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    },
    fixScrollingDestination() {
      let element = this.$refs.dropdownItemDestination[this.arrowCounterTo];
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    },
    fillInput() {
      if (
        this.FromsItemsDisplay.length &&
        this.From.length &&
        !this.From.name
      ) {
        this.From = this.FromsItemsDisplay[0];
        this.displayFrom = this.FromsItemsDisplay[0].name;
      }
      if (this.toItemsDisplay.length && this.To.length && !this.To.name) {
        this.To = this.toItemsDisplay[0];
        this.displayTo = this.toItemsDisplay[0].name;
      }
    },
    clearDate() {
      this.DepartureDate = null;
    },
    openOrigin() {
      if (this.isMobile) {
        this.openOriginDialog = !this.openOriginDialog;
        this.showFormMenu = false;
      } else {
        this.showFormMenu = true;
      }
    },
    openDestination() {
      if (this.isMobile) {
        this.openDestinationDialog = !this.openDestinationDialog;
        this.showToMenu = false;
      } else {
        this.showToMenu = true;
      }
    },
    getDataOriginSearch(items) {
      this.From = items.searchItem;
      this.displayFrom = items.display;
      this.querySelections(this.From, this.FromsItems, (cb) => {
        this.FromsItemsDisplay = cb;
      });
      this.changeDestination();
      if (items.searchItem.name) {
        this.openDestinationDialog = true;
      } else {
        this.openDestinationDialog = false;
      }
    },
    getDataDestinationSearch(items) {
      this.To = items.searchItem;
      this.displayTo = items.display;
      this.querySelections(this.To, this.toItems, (res) => {
        this.toItemsDisplay = res.slice(0, 50);
      });
      if (items.searchItem.name) {
        this.$refs.vacationDatePicker.$children[0].open = true;
      } else {
        this.$refs.vacationDatePicker.$children[0].open = false;
      }
    },
    changeDestination() {
      if (this.From.codes) {
        this.axios
          .get(
            `https://vacationapi.tripsupport.ca/api/Resource/GetDestinations?codes=${this.From.codes}`
          )
          .then((response) => {
            this.toItems = response.data.data;
            this.toItemsDisplay = response.data.data.slice(0, 50);
          });
      }
    },
    searchTo(e) {
      this.querySelections(this.To, this.toItems, (res) => {
        this.toItemsDisplay = res.slice(0, 50);
      });
      if (this.isMobile) {
        this.showToMenu = false;
      } else {
        this.showToMenu = true;
      }
      if (e.key == 'ArrowDown') {
        if (this.arrowCounterTo < this.toItemsDisplay.length) {
          this.arrowCounterTo = this.arrowCounterTo + 1;
          this.activeTo = this.arrowCounterTo;
          this.fixScrollingDestination();
        }
      } else if (e.key == 'ArrowUp') {
        if (this.arrowCounterTo > 0) {
          this.arrowCounterTo = this.arrowCounterTo - 1;
          this.activeTo = this.arrowCounterTo;
          this.fixScrollingDestination();
        }
      } else if (e.key == 'Enter') {
        if (this.arrowCounterTo == 0 && this.toItemsDisplay[0]) {
          this.To = this.toItemsDisplay[0];
          this.displayTo = this.toItemsDisplay[0].name;
        } else if (this.arrowCounterTo > 0) {
          let item = this.toItemsDisplay[this.arrowCounterTo];
          this.To = item;
          this.displayTo = item.name;
          this.showToMenu = false;
          this.arrowCounterTo = -1;
          this.$refs.vacationDatePicker.$children[0].open = true;
        }
        this.showToMenu = false;
      }
    },
    searchFrom(e) {
      this.querySelections(this.From, this.FromsItems, (cb) => {
        this.FromsItemsDisplay = cb;
      });
      if (window.innerWidth <= 600) {
        this.showFormMenu = false;
      } else {
        this.showFormMenu = true;
      }
      if (e.key == 'ArrowDown') {
        if (this.arrowCounterFrom < this.FromsItemsDisplay.length) {
          this.arrowCounterFrom = this.arrowCounterFrom + 1;
          this.activeFrom = this.arrowCounterFrom;
          this.fixScrollingOrigin();
        }
      } else if (e.key == 'ArrowUp') {
        if (this.arrowCounterFrom > 0) {
          this.arrowCounterFrom = this.arrowCounterFrom - 1;
          this.activeFrom = this.arrowCounterFrom;
          this.fixScrollingOrigin();
        }
      } else if (e.key == 'Enter') {
        if (this.arrowCounterFrom == 0 && this.FromsItemsDisplay[0]) {
          this.From = this.FromsItemsDisplay[0];
          this.displayFrom = this.FromsItemsDisplay[0].name;
        } else if (this.arrowCounterFrom > 0) {
          let item = this.FromsItemsDisplay[this.arrowCounterFrom];
          this.From = item;
          this.displayFrom = item.name;
          this.showFormMenu = false;
          this.arrowCounterFrom = -1;
        }
        this.changeDestination();
        this.$refs.ToInput.focus();
        this.showFormMenu = false;
      }
    },
    querySelections(value, arrayItems, callback) {
      let items = arrayItems.filter((e) => {
        if (value.length) {
          let searchWord = value.toLowerCase().trim();
          return e.name.toLowerCase().indexOf(searchWord) >= 0;
        }
      });
      callback(items);
    },
    onClickOutsideFrom() {
      this.showFormMenu = false;
      this.fillInput();
    },
    onClickOutsideTo() {
      this.showToMenu = false;
      this.fillInput();
    },
    getFrom(item) {
      this.From = item;
      this.displayFrom = item.name;
      this.changeDestination();
    },
    getTo(item) {
      this.To = item;
      this.displayTo = item.name;
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
    removeItem(index) {
      this.selectedMultiple.splice(index, 1);
    },
    multipleDestination(val) {
      this.selectedMultiple = val;
      if (val.length) {
        this.readonly = true;
      }
    },
  },
};
</script>
