<style scoped>
.vhd__datepicker__wrapper {
  height: 48px;
  border: 1px solid rgba(171, 171, 196, 0.6);
  border-radius: 6px;
  width: 100%;
  margin-top: 11px;
  background: #ffffff url(../../../assets/images/svg/calendar-icon.svg)
    no-repeat 1em center / 1em;
}
::v-deep .vhd__datepicker__dummy-wrapper {
  border: unset;
}
::v-deep .vhd__datepicker {
  z-index: 1001;
}
.ts-label {
  text-align: left;
  font-size: 12px;
  color: #66678f;
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
}
::v-deep .vhd__datepicker__month-day,
::v-deep .vhd__datepicker__month-day-wrapper,
::v-deep .vhd__datepicker__month-button {
  border: unset !important;
}
::v-deep .vhd__datepicker__month-button {
  background: transparent url(../../../assets/images/svg/arrow-right.svg)
    no-repeat 50%/8px;
}
::v-deep .vhd__datepicker__dummy-wrapper--is-active {
  border: unset;
}

::v-deep .vhd__datepicker__month-day-wrapper {
  padding-top: calc(100% - 1px) !important;
}
::v-deep .vhd__datepicker__month-day--selected {
  background: rgba(102, 103, 143, 0.08) !important;
  color: #66678f !important;
}

::v-deep .vhd__datepicker__month-day--first-day-selected,
::v-deep .vhd__datepicker__month-day--last-day-selected {
  background: #0c0d25 !important;
  border-radius: 50%;
  color: #ffffff !important;
}
::v-deep .vhd__datepicker__month-day {
  color: #0c0d25;
}
::v-deep .vhd__datepicker__month-day--disabled {
  background: unset;
  color: #ababc4;
}
::v-deep .vhd__square .vhd__datepicker__month-day {
  margin: 0 0 0 0;
}
::v-deep .vhd__datepicker__month-day--allowed-checkout:hover,
::v-deep .vhd__datepicker__month-day--valid:hover {
  background-color: #0c0d25;
  border-radius: 50%;
  color: #ffffff !important;
}
::v-deep .vhd__hide-up-to-tablet {
  display: block;
}
::v-deep .vhd__datepicker__week-row {
  box-shadow: unset;
}

@media only screen and (max-width: 768px) {
  .ts-label {
    display: none;
  }
  ::v-deep .vhd__datepicker__month {
    padding-top: 4em;
  }
}
</style>

<template>
  <div class="ts-hotel-date-picker">
    <label class="ts-label">{{ title }}</label>
    <HotelDatePicker
      ref="datePicker"
      format="ddd M/D"
      :hoveringTooltip="false"
      :startingDateValue="startingDateValue"
      :endingDateValue="endingDateValue"
      :positionRight="true"
      :singleDaySelection="singleDatePicker"
      :showSingleMonth="singleDatePicker"
      :startDate="startDateCalendar"
      @day-clicked="checkIn"
      @period-selected="updateValues"
      @clear-selection="removeDate"
    />
    <Toast v-model="showDialog" :toast="toast" />
  </div>
</template>
<script>
import HotelDatePicker from 'vue-hotel-datepicker';
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
import Toast from './Toast.vue';
import moment from 'moment';
export default {
  props: {
    lastDate: {},
    singleDatePicker: {
      default: false,
    },
    startDate: {},
    title: {
      default: 'Departure/Return ',
    },
    numberOfStay: {
      default: 20,
    },
    haveValidation: {
      default: false,
    },
  },
  components: {
    HotelDatePicker,
    Toast,
  },
  data() {
    return {
      date: null,
      dateRange: {
        startDate: '',
        endDate: '',
      },
      toast: {
        toastText: '',
        color: 'red',
      },
      showDialog: false,
      startingDateValue: null,
      endingDateValue: null,
      startDateCalendar: new Date(),
      storageDateSelected: [],
    };
  },
  watch: {
    lastDate: {
      handler: function(val) {
        if (val) {
          this.dateRange = val;
          if (!this.singleDatePicker) {
            this.startingDateValue = new Date(val.startDate);
            this.endingDateValue = new Date(val.endDate);
          } else {
            this.startingDateValue = new Date(val.startDate);
          }
        }
      },
      deep: true,
      immediate: true,
    },
    startDate: {
      handler: function(val) {
        this.startDateCalendar = val;
      },
    },
  },
  mounted() {
    document
      .querySelector('.vhd__datepicker__clear-button svg path')
      .setAttribute('stroke', '#66678F');
    // this.changeTitle();
  },
  methods: {
    changeTitle() {
      let datePickerPlaceHolder = document.getElementsByClassName(
        'vhd__datepicker__input'
      );
      if (this.$parent.name == 'flight') {
        datePickerPlaceHolder[0].innerText = 'Departure Date';
        datePickerPlaceHolder[1].innerText = 'Return Date';
      }
    },
    checkIn(date) {
      if (this.singleDatePicker) {
        this.dateRange.startDate = date;
        this.$emit('RangeSelectedDate', this.dateRange);
      } else {
        this.storageDateSelected.push(date);
        let storage = this.storageDateSelected.slice(-2);
        if (storage[1]) {
          this.storageDateSelected = [];
        }
        if (storage[0] && !storage[1]) {
          this.showDialog = true;
          this.toast = {
            color: '#17a2b8 ',
            toastText: 'Please select return date',
            timeout: '2500',
          };
        }
      }
    },
    updateValues(Event, startDate, endDate) {
      let startValidation = moment(startDate);
      let endValidation = moment(endDate);
      let diff = moment.duration(endValidation.diff(startValidation)).asDays();
      if (this.haveValidation) {
        let dateValidationPassed = true;
        if (diff > this.numberOfStay) {
          this.showDialog = true;
          this.toast = {
            color: '#cb3839',
            toastText: `Maximum Length of stay allowed is ${this.numberOfStay} days`,
          };
          dateValidationPassed = false;
        }
        this.$emit('dateValidation', dateValidationPassed);
      }
      this.dateRange.startDate = startDate;
      this.dateRange.endDate = endDate;
      this.$emit('RangeSelectedDate', this.dateRange);
    },
    removeDate() {
      this.$emit('clearDate');
    },
  },
};
</script>
