<style scoped>
.dialog {
  text-decoration: underline;
  font-size: 14px;
  color: #fff;
}
.ts-dialog-wrapper {
  background: #fff;
  padding: 20px;
}
.ts-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ts-from-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 10px;
}
.ts-from {
  font-size: 16px;
  font-weight: 400;
  color: #66678f;
}
.ts-clear-selected {
  font-size: 16px;
  font-weight: 400;
  color: #66678f;
  text-decoration: underline;
  cursor: pointer;
}
.ts-selected-wrapper {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid rgba(171, 171, 196, 0.6);
  border-radius: 6px;
  padding: 16px;
}
.ts-selected-item,
.ts-selected-more {
  background: rgba(102, 103, 143, 0.1);
  border-radius: 32px;
  padding: 8px 16px;
  margin-right: 4px;
  cursor: pointer;
}
.ts-item-name {
  display: flex;
  align-items: center;
}
.ts-item-name span,
.ts-selected-more span {
  margin-right: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #66678f;
}
.ts-navigation-wrapper {
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #dddde7;
}
.ts-navigation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 96px;
  border: 1px solid rgba(171, 171, 196, 0.6);
  border-radius: 6px;
  margin-top: 16px;
  margin-bottom: 16px;
  cursor: pointer;
}
.ts-navigation-item:not(:last-child) {
  margin-right: 16px;
}
.ts-navigation-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 2px solid #ababc4;
  border-radius: 50%;
  background: #fff;
  margin: 18px 0 16px;
}
.ts-navigation-circle > div {
  width: 8px;
  height: 8px;
  background: #ed1b2e;
  border-radius: 50%;
  display: none;
}
.ts-navigation-name {
  font-size: 16px;
  color: #66678f;
  font-weight: 400;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
}
.active {
  border: 2px solid #ed1b2e;
}
.active .ts-navigation-name {
  color: #ed1b2e;
}
.active .ts-navigation-circle {
  border: 2px solid #ed1b2e;
}
.active .ts-navigation-circle > div {
  display: block;
}
.ts-search {
  position: relative;
  margin-top: 16px;
}
.ts-search input {
  width: 100%;
  height: 48px;
  border: 1px solid rgba(171, 171, 196, 0.6);
  border-radius: 6px;
  padding-left: 39px;
  outline: none;
  color: #66678f;
  font-size: 14px;
  font-weight: 400;
}
.ts-search input::placeholder {
  color: #66678f;
  font-size: 14px;
  font-weight: 400;
}
.ts-search-svg {
  position: absolute;
  top: 15px;
  left: 16px;
}
.ts-content-item {
  padding: 20px 0;
}
.ts-content-item:not(:last-child) {
  border-bottom: 1px dashed #dddde7;
}
.ts-country-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.ts-country-name {
  font-size: 14px;
  font-weight: 400;
  color: #0c0d25;
}
.ts-select-all {
  font-size: 10px;
  font-weight: bold;
  color: #ababc4;
  text-transform: uppercase;
  cursor: pointer;
}
.ts-city-item {
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 50px;
  background: rgba(171, 171, 196, 0.1);
  border-radius: 6px;
}
.ts-city-item:not(:last-child) {
  margin-bottom: 8px;
}
.ts-checkbox-item {
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
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
  top: 0;
}
.ts-apply-button {
  position: sticky;
  bottom: 10px;
}
.ts-apply-button button {
  height: 48px;
  width: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  background: #ed1b2e;
  border-radius: 4px;
}
.ts-multiple-dialog {
  padding: 13px 16px;
  font-size: 14px;
  color: #66678f;
  background: rgba(102, 103, 143, 0.1);
  border-radius: 4px;
  margin-right: 12px;
  font-weight: 400;
  cursor: pointer;
}
.ts-svg-try-this {
  position: absolute;
  top: 8px;
  left: -70px;
}
.try-this {
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  z-index: 2;
  position: absolute;
  top: 12px;
  left: -60px;
}
.ts-double-svg-one {
  position: absolute;
  top: 8px;
  left: -6px;
  z-index: 2;
}
.ts-double-svg-two {
  position: absolute;
  top: 8px;
  left: -2px;
  z-index: 2;
}
@media only screen and (max-width: 600px) {
  .ts-multiple-dialog {
    text-align: center;
    padding: 13px 0;
    width: 100%;
  }
  .ts-svg-try-this {
    top: 10px;
    left: -6px;
  }
  .try-this {
    top: 14px;
    left: 0px;
  }
  .ts-double-svg-one {
    top: 9px;
    left: 55px;
  }
  .ts-double-svg-two {
    top: 9px;
    left: 60px;
  }
}
</style>

<template>
  <v-dialog
    v-model="dialog"
    id="dialog"
    width="800px"
    height="812px"
    max-width="80vw"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="ts-multiple-dialog" v-bind="attrs" v-on="on">
        Add multiple destinations
      </div>
      <div class="ts-svg-try-this">
        <svg
          width="79"
          height="24"
          viewBox="0 0 79 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style="mix-blend-mode:multiply">
            <path
              d="M69.7119 1.2362C68.9572 0.446632 67.9125 0 66.8203 0H3.99987C1.79073 0 -0.00012207 1.79086 -0.00012207 4V20C-0.00012207 22.2091 1.79074 24 3.99988 24H66.8203C67.9125 24 68.9572 23.5534 69.7119 22.7638L77.3582 14.7638C78.8361 13.2176 78.8361 10.7824 77.3582 9.2362L69.7119 1.2362Z"
              fill="#ED1B2E"
            />
          </g>
        </svg>
      </div>
      <span class="try-this">{{ $t('VACATION.Try_This') }}</span>
      <span class="ts-double-svg-one">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.250573 8.61155C0.100946 8.75343 0.0111634 8.95149 0.000871047 9.16241C-0.00942129 9.37333 0.0606151 9.57992 0.195654 9.73698C0.262372 9.81459 0.343082 9.87769 0.433161 9.92264C0.523239 9.96759 0.620916 9.99351 0.720594 9.99893C0.820273 10.0043 0.919993 9.98915 1.01404 9.9542C1.10809 9.91925 1.19462 9.86525 1.26868 9.79528L5.74918 5.55861C5.82834 5.48355 5.89156 5.39196 5.93474 5.28975C5.97793 5.18755 6.00011 5.07701 5.99988 4.96527C5.99964 4.85354 5.97697 4.7431 5.93335 4.6411C5.88974 4.5391 5.82613 4.44781 5.74665 4.37312L1.3067 0.203585C1.23241 0.133696 1.14565 0.0798388 1.0514 0.0451078C0.957144 0.0103769 0.857258 -0.00454521 0.757474 0.00120068C0.657691 0.00694656 0.559976 0.033247 0.469941 0.0785904C0.379907 0.123933 0.299327 0.187425 0.23283 0.265421C0.0983118 0.423044 0.029009 0.629972 0.0400938 0.840902C0.0511785 1.05183 0.141747 1.24958 0.291972 1.39084L3.82365 4.70703C3.85892 4.74017 3.88712 4.78069 3.90642 4.82597C3.92573 4.87125 3.9357 4.92027 3.9357 4.96984C3.9357 5.01941 3.92573 5.06843 3.90642 5.11371C3.88712 5.15898 3.85892 5.19951 3.82365 5.23264L0.250573 8.61155Z"
            fill="white"
          />
        </svg>
      </span>
      <span class="ts-double-svg-two">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.250573 8.61155C0.100946 8.75343 0.0111634 8.95149 0.000871047 9.16241C-0.00942129 9.37333 0.0606151 9.57992 0.195654 9.73698C0.262372 9.81459 0.343082 9.87769 0.433161 9.92264C0.523239 9.96759 0.620916 9.99351 0.720594 9.99893C0.820273 10.0043 0.919993 9.98915 1.01404 9.9542C1.10809 9.91925 1.19462 9.86525 1.26868 9.79528L5.74918 5.55861C5.82834 5.48355 5.89156 5.39196 5.93474 5.28975C5.97793 5.18755 6.00011 5.07701 5.99988 4.96527C5.99964 4.85354 5.97697 4.7431 5.93335 4.6411C5.88974 4.5391 5.82613 4.44781 5.74665 4.37312L1.3067 0.203585C1.23241 0.133696 1.14565 0.0798388 1.0514 0.0451078C0.957144 0.0103769 0.857258 -0.00454521 0.757474 0.00120068C0.657691 0.00694656 0.559976 0.033247 0.469941 0.0785904C0.379907 0.123933 0.299327 0.187425 0.23283 0.265421C0.0983118 0.423044 0.029009 0.629972 0.0400938 0.840902C0.0511785 1.05183 0.141747 1.24958 0.291972 1.39084L3.82365 4.70703C3.85892 4.74017 3.88712 4.78069 3.90642 4.82597C3.92573 4.87125 3.9357 4.92027 3.9357 4.96984C3.9357 5.01941 3.92573 5.06843 3.90642 5.11371C3.88712 5.15898 3.85892 5.19951 3.82365 5.23264L0.250573 8.61155Z"
            fill="white"
          />
        </svg>
      </span>
    </template>
    <div class="ts-dialog-wrapper">
      <div class="ts-dialog-header">
        <div>
          {{ $t('VACATION.Select_destinations') }}
        </div>
        <div>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </div>
      </div>
      <div class="ts-from-wrapper">
        <div class="ts-from">{{ FromName.name }}({{ FromName.codes }})</div>
        <div class="ts-clear-selected" @click="selected = []">Clear All</div>
      </div>
      <div class="ts-selected-wrapper" v-if="selected.length">
        <div
          class="ts-selected-item"
          v-for="(item, index) in selected.slice(0, 3)"
          :key="index"
        >
          <div class="ts-item-name" @click="removeItem(index)">
            <span>
              {{ item.name }}
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.74786 0.252135C9.41167 -0.0840537 8.86663 -0.0840365 8.53046 0.252135L4.99999 3.7826L1.46953 0.252146C1.13336 -0.0840259 0.588319 -0.0840432 0.252134 0.252146C-0.0840498 0.588335 -0.0840395 1.13338 0.252134 1.46955L3.78259 5L0.252146 8.53045C-0.0840256 8.86662 -0.0840376 9.41166 0.252146 9.74785C0.588332 10.084 1.13337 10.084 1.46955 9.74785L4.99999 6.21739L8.53045 9.74787C8.86662 10.084 9.41166 10.084 9.74784 9.74787C10.084 9.41168 10.084 8.86663 9.74785 8.53046L6.21739 5L9.74786 1.46954C10.084 1.13337 10.084 0.588324 9.74786 0.252135Z"
                fill="#66678F"
                fill-opacity="0.6"
              />
            </svg>
          </div>
        </div>
        <div class="ts-selected-more" v-if="selected.length > 3">
          <span> + {{ selected.length - 3 }} </span>
        </div>
      </div>
      <div class="ts-navigation-wrapper">
        <div
          class="ts-navigation-item"
          v-for="(name, index) in getNav"
          :key="index"
          @click="activeNav(index, name)"
          :class="{ active: activeItem == index }"
        >
          <div class="ts-navigation-circle">
            <div></div>
          </div>
          <div class="ts-navigation-name">
            {{ name }}
          </div>
        </div>
      </div>
      <div class="ts-search">
        <input
          v-model="search"
          type="text"
          placeholder="Type here to filter search"
        />
        <div class="ts-search-svg">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.735 14.4242L10.7898 10.3515C11.7405 9.21212 12.2633 7.78182 12.2633 6.27879C12.2633 2.83636 9.53021 0 6.13165 0C2.75687 0 0 2.81212 0 6.27879C0 9.72121 2.75687 12.5333 6.13165 12.5333C7.27243 12.5333 8.43697 12.1939 9.41138 11.5636L13.4991 15.7333C13.6655 15.903 13.8794 16 14.1171 16C14.3547 16 14.5686 15.903 14.735 15.7333C14.9013 15.5636 14.9964 15.3212 14.9964 15.0788C15.0202 14.8364 14.9251 14.6182 14.735 14.4242ZM10.5046 6.27879C10.5046 8.72727 8.5558 10.7152 6.15542 10.7152C3.75504 10.7152 1.80622 8.70303 1.80622 6.27879C1.80622 3.8303 3.75504 1.84242 6.15542 1.84242C8.5558 1.84242 10.5046 3.8303 10.5046 6.27879Z"
              fill="#66678F"
            />
          </svg>
        </div>
      </div>
      <div class="ts-dialog-content">
        <div
          class="ts-content-item"
          v-for="(item, index) in getCountry"
          :key="index"
        >
          <div class="ts-country-wrapper">
            <div class="ts-country-name">
              {{ item.name }}
            </div>
            <div class="ts-select-all" @click="selectAll(item.cities)">
              Select All
            </div>
          </div>
          <div
            class="ts-city-item"
            v-for="(city, inx) in getFiltredCity(item)"
            :key="inx"
          >
            <label class="ts-checkbox-item">
              <input
                type="checkbox"
                :label="city.name"
                v-model="selected"
                :value="city"
                :name="city.id"
                :id="city.id"
              />
              <span :for="city.id"> {{ city.name }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="ts-apply-button">
        <button @click="apply">
          {{ $t('VACATION.Apply') }}
        </button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
    },
    FromName: {
      required: true,
    },
  },

  data() {
    return {
      activeItem: 0,
      selectedCountry: null,
      data: [],
      selected: [],
      dialog: false,
      search: '',
      filtredData: [],
    };
  },
  computed: {
    getNav() {
      if (this.data) {
        let navsName = this.data.map((items) => {
          return items.name;
        });
        if (this.dialog) this.selectedCountry = navsName[0];
        return navsName;
      }
    },
    getCountry() {
      if (this.selectedCountry) {
        let country = [];
        let finded = this.data.find(
          (data) => data.name == this.selectedCountry
        );
        for (let items in finded.countries) {
          country.push(finded.countries[items]);
        }
        return country;
      }
    },
  },
  methods: {
    apply() {
      this.$emit('multipleDestination', this.selected);
      this.dialog = false;
    },
    getFiltredCity(value) {
      let filtredData = value.cities.filter((e) => {
        return e.name.toLowerCase().includes(this.search.toLowerCase());
      });
      return filtredData;
    },
    activeNav(index, name) {
      this.activeItem = index;
      this.selectedCountry = name;
    },
    removeItem(index) {
      this.selected.splice(index, 1);
    },
    selectAll(value) {
      for (let selected of value) {
        if (this.selected.indexOf(selected) === -1) {
          this.selected.push(selected);
        }
      }
    },
  },
  created() {
    this.data = this.items;
  },
  watch: {
    items: {
      handler: function(value) {
        this.data = value;
      },
      deep: true,
    },
  },
  mounted() {
    let getLastVacationBooking = localStorage.getItem('lastVacationBooking');
    if (!getLastVacationBooking) {
      return;
    }
    let parsedGetLastVacationBooking = JSON.parse(getLastVacationBooking);
    if (parsedGetLastVacationBooking.multiple.length) {
      this.selected = parsedGetLastVacationBooking.multiple;
    }
  },
};
</script>
