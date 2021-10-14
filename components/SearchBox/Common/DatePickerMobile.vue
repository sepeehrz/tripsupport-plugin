<style scoped>
.ts-picker-wrapper {
  display: flex;
  align-items: center;
}
label {
  font-size: 12px;
  color: #66678f;
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
  font-size: 14px;
  font-weight: 400;
  color: #66678f;
  width: 100%;
  margin-top: 12px;
  padding-left: 40px;
  cursor: pointer;
}
.ts-input::placeholder {
  color: #66678f;
}
.ts-display-input {
  position: relative;
  width: 100%;
}
.ts-svg-input {
  position: absolute;
  left: 15px;
  bottom: 12px;
}
.inputSpace {
  margin-left: 5px;
}

@media only screen and (max-width: 768px) {
  label {
    display: none;
  }
}
</style>

<template>
  <section>
    <div class="ts-picker-wrapper">
      <div class="ts-display-input">
        <label>{{ $t('Departure') }}</label>
        <input
          type="text"
          class="ts-input"
          :placeholder="`${$t('Departure')}`"
          :value="displayValueStart"
          @click="openDateDialog"
          readonly
        />
        <div class="ts-svg-input">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.90747 12.3429C3.58719 12.3429 3.33096 12.6 3.33096 12.9214C3.33096 13.2429 3.58719 13.5 3.90747 13.5H5.0605V14.6571C5.0605 14.9786 5.31673 15.2357 5.63701 15.2357C5.9573 15.2357 6.21352 14.9786 6.21352 14.6571V13.5H8.45552V14.6571C8.45552 14.9786 8.71174 15.2357 9.03203 15.2357C9.35231 15.2357 9.60854 14.9786 9.60854 14.6571V13.5H11.8505V14.6571C11.8505 14.9786 12.1068 15.2357 12.427 15.2357C12.7473 15.2357 13.0036 14.9786 13.0036 14.6571V13.5H14.1566C14.4769 13.5 14.7331 13.2429 14.7331 12.9214C14.7331 12.6 14.4769 12.3429 14.1566 12.3429H13.0036V10.0929H14.1566C14.4769 10.0929 14.7331 9.83571 14.7331 9.51429C14.7331 9.19286 14.4769 8.93571 14.1566 8.93571H13.0036V7.77857C13.0036 7.45714 12.7473 7.2 12.427 7.2C12.1068 7.2 11.8505 7.45714 11.8505 7.77857V9H9.60854V7.84286C9.60854 7.52143 9.35231 7.26429 9.03203 7.26429C8.71174 7.26429 8.45552 7.52143 8.45552 7.84286V9H6.21352V7.84286C6.21352 7.52143 5.9573 7.26429 5.63701 7.26429C5.31673 7.26429 5.0605 7.52143 5.0605 7.84286V9H3.90747C3.58719 9 3.33096 9.25714 3.33096 9.57857C3.33096 9.9 3.58719 10.1571 3.90747 10.1571H5.0605V12.4071H3.90747V12.3429ZM9.54448 10.0929H11.7865V12.3429H9.54448V10.0929ZM6.14947 10.0929H8.39146V12.3429H6.14947V10.0929Z"
              fill="#66678F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.847 0H1.15302C0.512455 0 0 0.514286 0 1.09286V16.8429C0 17.4857 0.512455 18 1.15302 18H16.847C17.4875 18 18 17.4857 18 16.8429V1.09286C17.9359 0.514286 17.4235 0 16.847 0ZM11.21 2.25C11.5302 2.25 11.7865 2.50714 11.7865 2.82857C11.7865 3.15 11.5302 3.40714 11.21 3.40714C10.8897 3.40714 10.6335 3.15 10.6335 2.82857C10.6335 2.50714 10.8897 2.25 11.21 2.25ZM6.72598 2.25C7.04626 2.25 7.30249 2.50714 7.30249 2.82857C7.30249 3.15 7.04626 3.40714 6.72598 3.40714C6.40569 3.40714 6.14947 3.15 6.14947 2.82857C6.14947 2.50714 6.40569 2.25 6.72598 2.25ZM16.847 16.3286C16.847 16.65 16.5907 16.9071 16.2705 16.9071H1.66548C1.3452 16.9071 1.08897 16.65 1.08897 16.3286V5.59286H16.7829V16.3286H16.847Z"
              fill="#66678F"
            />
          </svg>
        </div>
      </div>
      <div class="ts-display-input" v-if="!singleDatePicker">
        <label>{{ $t('Return') }}</label>
        <input
          type="text"
          class="ts-input"
          :class="{ inputSpace: !singleDatePicker }"
          :placeholder="`${$t('Return')}`"
          :value="displayValueEnd"
          readonly
        />
        <div class="ts-svg-input">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.90747 12.3429C3.58719 12.3429 3.33096 12.6 3.33096 12.9214C3.33096 13.2429 3.58719 13.5 3.90747 13.5H5.0605V14.6571C5.0605 14.9786 5.31673 15.2357 5.63701 15.2357C5.9573 15.2357 6.21352 14.9786 6.21352 14.6571V13.5H8.45552V14.6571C8.45552 14.9786 8.71174 15.2357 9.03203 15.2357C9.35231 15.2357 9.60854 14.9786 9.60854 14.6571V13.5H11.8505V14.6571C11.8505 14.9786 12.1068 15.2357 12.427 15.2357C12.7473 15.2357 13.0036 14.9786 13.0036 14.6571V13.5H14.1566C14.4769 13.5 14.7331 13.2429 14.7331 12.9214C14.7331 12.6 14.4769 12.3429 14.1566 12.3429H13.0036V10.0929H14.1566C14.4769 10.0929 14.7331 9.83571 14.7331 9.51429C14.7331 9.19286 14.4769 8.93571 14.1566 8.93571H13.0036V7.77857C13.0036 7.45714 12.7473 7.2 12.427 7.2C12.1068 7.2 11.8505 7.45714 11.8505 7.77857V9H9.60854V7.84286C9.60854 7.52143 9.35231 7.26429 9.03203 7.26429C8.71174 7.26429 8.45552 7.52143 8.45552 7.84286V9H6.21352V7.84286C6.21352 7.52143 5.9573 7.26429 5.63701 7.26429C5.31673 7.26429 5.0605 7.52143 5.0605 7.84286V9H3.90747C3.58719 9 3.33096 9.25714 3.33096 9.57857C3.33096 9.9 3.58719 10.1571 3.90747 10.1571H5.0605V12.4071H3.90747V12.3429ZM9.54448 10.0929H11.7865V12.3429H9.54448V10.0929ZM6.14947 10.0929H8.39146V12.3429H6.14947V10.0929Z"
              fill="#66678F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.847 0H1.15302C0.512455 0 0 0.514286 0 1.09286V16.8429C0 17.4857 0.512455 18 1.15302 18H16.847C17.4875 18 18 17.4857 18 16.8429V1.09286C17.9359 0.514286 17.4235 0 16.847 0ZM11.21 2.25C11.5302 2.25 11.7865 2.50714 11.7865 2.82857C11.7865 3.15 11.5302 3.40714 11.21 3.40714C10.8897 3.40714 10.6335 3.15 10.6335 2.82857C10.6335 2.50714 10.8897 2.25 11.21 2.25ZM6.72598 2.25C7.04626 2.25 7.30249 2.50714 7.30249 2.82857C7.30249 3.15 7.04626 3.40714 6.72598 3.40714C6.40569 3.40714 6.14947 3.15 6.14947 2.82857C6.14947 2.50714 6.40569 2.25 6.72598 2.25ZM16.847 16.3286C16.847 16.65 16.5907 16.9071 16.2705 16.9071H1.66548C1.3452 16.9071 1.08897 16.65 1.08897 16.3286V5.59286H16.7829V16.3286H16.847Z"
              fill="#66678F"
            />
          </svg>
        </div>
      </div>
    </div>
    <SearchDialog
      :openDialog="openDialog"
      :from="false"
      :title="`select date`"
      @close="openDialog = $event"
    >
      <template>
        <DatePicker
          :lastDate="lastDate"
          @RangeSelectedDate="getRangeDate"
          :singleDatePicker="singleDatePicker"
        />
      </template>
    </SearchDialog>
  </section>
</template>

<script>
import SearchDialog from './SearchDialog.vue';
import DatePicker from './DatePicker.vue';
import moment from 'moment';

export default {
  components: { SearchDialog, DatePicker },
  props: {
    lastDate: {},
    singleDatePicker: {
      default: false,
    },
  },
  data() {
    return {
      openDialog: false,
      displayValueStart: null,
      displayValueEnd: null,
    };
  },
  watch: {
    lastDate: {
      handler: function(val) {
        this.lastDate = val;
        this.displayValueStart = moment(val.startDate).format('ddd M/D');
        this.displayValueEnd = moment(val.endDate).format('ddd M/D');
      },
      deep: true,
    },
  },
  methods: {
    openDateDialog() {
      this.openDialog = !this.openDialog;
    },
    getRangeDate(e) {
      this.displayValueStart = this.changeFormat(e.startDate);
      this.displayValueEnd = this.changeFormat(e.endDate);
      this.$emit('RangeSelectedDateMobile', e);
      this.openDialog = false;
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
  },
};
</script>
