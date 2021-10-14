<style scoped>
section {
  position: relative;
}
label {
  font-size: 12px;
  color: #66678f;
  margin-bottom: 0 !important;
  display: flex;
  margin-top: 5px;
}
input[type='text'] {
  height: 48px;
  border: 1px solid rgba(171, 171, 196, 0.6);
  /* padding: 0 10px; */
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
.ts-display-input {
  position: relative;
  margin-left: 16px;
}
.ts-svg-input {
  position: absolute;
  left: 15px;
  bottom: 12px;
}
.ts-dropdown-wrapper {
  padding: 24px;
  width: 300px;
}
.ts-dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.ts-dropdown-item svg {
  fill: #ababc4;
  margin-right: 12px;
}
.ts-dropdown-item:not(:last-child) {
  padding-bottom: 20px;
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
.ts-menu {
  right: 0;
}
@media only screen and (max-width: 600px) {
  label {
    display: none;
  }
  input[type='text'] {
    width: 100%;
  }
  .ts-dropdown-wrapper {
    width: 92vw;
  }
  .ts-display-input {
    margin-left: 0;
  }
}
@media (min-width: 768px) and (max-width: 1900px) {
  .ts-dropdown-wrapper {
    width: 184px;
  }
  /* .ts-menu {
    right: 67px;
  } */
  /* input[type='text'] {
    width: 185px;
  } */
}
@media (min-width: 1920px) {
  .ts-dropdown-wrapper {
    width: 174px;
    padding: 24px 15px 24px;
  }
  .ts-menu {
    right: 15px;
  }
}
</style>

<template>
  <section>
    <div class="ts-display-input">
      <label>{{ $t('VACATION.Duration') }}</label>
      <input
        type="text"
        :placeholder="`${$t('VACATION.Duration')}`"
        v-click-outside="outSideMenu"
        :value="TsDurationSelected"
        @click="durationMenu = !durationMenu"
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
    <MenuDialog :showMenu="durationMenu">
      <template #data>
        <div class="ts-dropdown-wrapper">
          <div
            class="ts-dropdown-item"
            v-for="(item, index) in displayDuration"
            :key="index"
            @click="changeSelected(item, index)"
            :class="{ active: TsDurationSelected == item }"
          >
            <div>
              <span>
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.2 11.781C7.2031 11.6485 7.25113 11.5205 7.33692 11.4161C7.42272 11.3117 7.54167 11.2366 7.676 11.2019C9.06314 10.8176 10.2581 9.96945 11.0414 8.81332C11.8247 7.65718 12.1438 6.27068 11.94 4.90849C11.7362 3.54629 11.0232 2.29987 9.93199 1.39816C8.84079 0.496448 7.44465 0 6 0C4.55535 0 3.15921 0.496448 2.06801 1.39816C0.976813 2.29987 0.26383 3.54629 0.060023 4.90849C-0.143784 6.27068 0.17527 7.65718 0.958581 8.81332C1.74189 9.96945 2.93686 10.8176 4.324 11.2019C4.45833 11.2366 4.57728 11.3117 4.66308 11.4161C4.74887 11.5205 4.7969 11.6485 4.8 11.781V14.8571C4.8 15.1602 4.92643 15.4509 5.15147 15.6652C5.37652 15.8796 5.68174 16 6 16C6.31826 16 6.62348 15.8796 6.84853 15.6652C7.07357 15.4509 7.2 15.1602 7.2 14.8571V11.781Z"
                  />
                </svg>
              </span>
              <span class="ts-name">
                {{ item }}
              </span>
            </div>
            <div>
              <svg
                v-if="TsDurationSelected == item"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.250695 8.61155C0.101068 8.75343 0.0112855 8.95149 0.000993118 9.16241C-0.00929922 9.37333 0.0607372 9.57992 0.195777 9.73698C0.262494 9.81459 0.343204 9.87769 0.433283 9.92264C0.523361 9.96759 0.621038 9.99351 0.720717 9.99893C0.820395 10.0043 0.920115 9.98915 1.01417 9.9542C1.10821 9.91925 1.19474 9.86525 1.2688 9.79528L5.7493 5.55861C5.82846 5.48355 5.89168 5.39196 5.93486 5.28975C5.97805 5.18755 6.00024 5.07701 6 4.96527C5.99976 4.85354 5.9771 4.7431 5.93348 4.6411C5.88986 4.5391 5.82625 4.44781 5.74677 4.37312L1.30682 0.203585C1.23253 0.133696 1.14577 0.0798388 1.05152 0.0451078C0.957266 0.0103769 0.85738 -0.00454521 0.757596 0.00120068C0.657813 0.00694656 0.560098 0.033247 0.470063 0.0785904C0.380029 0.123933 0.299449 0.187425 0.232952 0.265421C0.0984339 0.423044 0.0291311 0.629972 0.0402159 0.840902C0.0513006 1.05183 0.141869 1.24958 0.292095 1.39084L3.82378 4.70703C3.85904 4.74017 3.88724 4.78069 3.90654 4.82597C3.92585 4.87125 3.93582 4.92027 3.93582 4.96984C3.93582 5.01941 3.92585 5.06843 3.90654 5.11371C3.88724 5.15898 3.85904 5.19951 3.82378 5.23264L0.250695 8.61155Z"
                  fill="#66678F"
                />
              </svg>
            </div>
          </div>
        </div>
      </template>
    </MenuDialog>
  </section>
</template>

<script>
import MenuDialog from '../Common/MenuDialog.vue';

export default {
  components: {
    MenuDialog,
  },
  data() {
    return {
      displayDuration: [
        `3 ${this.$t('VACATION.or')} 4  ${this.$t('VACATION.days')}`,
        `7 ${this.$t('VACATION.or')} 8  ${this.$t('VACATION.days')}`,
        `5 ${this.$t('VACATION.to')} 10  ${this.$t('VACATION.days')}`,
        `14 ${this.$t('VACATION.or')} 15  ${this.$t('VACATION.days')}`,
        `11 ${this.$t('VACATION.to')} 16  ${this.$t('VACATION.days')}`,
        `17 ${this.$t('VACATION.to')} 22  ${this.$t('VACATION.days')}`,
        `1 ${this.$t('VACATION.day')}`,
        `2  ${this.$t('VACATION.days')}`,
        `3  ${this.$t('VACATION.days')}`,
        `4  ${this.$t('VACATION.days')}`,
        `5  ${this.$t('VACATION.days')}`,
        `7  ${this.$t('VACATION.days')}`,
        `8  ${this.$t('VACATION.days')}`,
        `9  ${this.$t('VACATION.days')}`,
        `10  ${this.$t('VACATION.days')}`,
        `11  ${this.$t('VACATION.days')}`,
        `12  ${this.$t('VACATION.days')}`,
        `13  ${this.$t('VACATION.days')}`,
        `14  ${this.$t('VACATION.days')}`,
        `15  ${this.$t('VACATION.days')}`,
        `16  ${this.$t('VACATION.days')}`,
        `21  ${this.$t('VACATION.days')}`,
        `28  ${this.$t('VACATION.days')}`,
      ],
      TsDuration: [
        '3,4',
        '7,8',
        '5,6,7,8,9,10',
        '14,15',
        '11,12,13,14,15,16',
        '17,18,19,20,21,22',
        '1',
        '2',
        '3',
        '4',
        '5',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '21',
        '28',
      ],
      TsDurationSelected: `7 ${this.$t('VACATION.or')} 8  ${this.$t(
        'VACATION.days'
      )}`,
      durationMenu: false,
    };
  },
  methods: {
    outSideMenu() {
      this.durationMenu = false;
    },
    changeSelected(item, index) {
      this.TsDurationSelected = item;
      this.$emit('Durations', this.TsDuration[index]);
    },
  },
};
</script>
