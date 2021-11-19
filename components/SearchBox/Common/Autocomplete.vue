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
.input-wrapper {
  position: relative;
}
.ts-label {
  text-align: left;
  font-size: 12px;
  color: #66678f;
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
}
.ts-autocomplete {
  height: 48px;
  border: 1px solid rgba(171, 171, 196, 0.6);
  padding: 0 10px 0 32px;
  border-radius: 6px;
  background: #ffffff;
  outline: none;
  margin-right: 16px;
  margin-top: 12px;
  color: #66678f;
  font-size: 14px;
  font-weight: 500;
  width: 95%;
}
.ts-autocomplete::placeholder {
  color: #66678f;
  font-size: 14px;
  font-weight: 500;
}
.ts-svg-icon {
  position: absolute;
  left: 9px;
  bottom: 13px;
}
.ts-dropdown-wrapper {
  padding: 10px 0;
  width: 100%;
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
@media only screen and (max-width: 768px) {
  .ts-menu {
    width: 100%;
  }
  .ts-autocomplete {
    width: 100%;
  }
  .ts-label {
    display: none;
  }
}
</style>

<template>
  <div class="input-wrapper">
    <label class="ts-label">{{ $t('Departing_From') }}</label>
    <input
      class="ts-autocomplete"
      :placeholder="`${placeholder}`"
      @keyup="searchItems"
      @input="getInput($event.target.value)"
      v-bind:value="displaySearch"
      v-click-outside="onClickOutside"
      @focus="focusInput"
      @click="openResult"
    />
    <div class="ts-svg-icon">
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
    <DropdownDialog :showMenu="showMenu" v-if="items.length">
      <template #data>
        <div class="ts-dropdown-wrapper">
          <div
            class="ts-dropdown-item"
            v-for="(item, index) in items"
            :key="index"
            @click="selectItem(item)"
            :class="{
              active: search == item || index == arrowCounter,
            }"
          >
            <div ref="dropdown">
              <div class="ts-dropdown-city-name">
                <span>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    v-if="mode == 'hotel'"
                  >
                    <path
                      d="M2.4735 5.04564C2.4735 4.71369 2.75618 4.31535 3.10954 4.31535C3.4629 4.31535 4.947 5.04564 5.58304 5.04564H6.21908C6.85512 5.04564 8.40989 4.31535 8.69258 4.31535C8.97527 4.31535 9.32862 4.6473 9.32862 5.04564C9.32862 5.44398 8.69258 6.50622 8.69258 7.23651H11.1661C11.1661 6.50622 10.53 5.44398 10.53 5.04564C10.53 4.6473 10.8127 4.31535 11.1661 4.31535C11.5194 4.31535 13.0035 5.04564 13.6396 5.04564H14.2756C14.9117 5.04564 16.4664 4.31535 16.7491 4.31535C17.0318 4.31535 17.3852 4.6473 17.3852 5.04564C17.3852 5.44398 16.7491 6.50622 16.7491 7.23651H18.5866V0.73029C18.5866 0.33195 18.3039 0 17.9505 0H1.83746C1.4841 0 1.27208 0.33195 1.27208 0.73029V7.23651H3.10954C3.10954 6.50622 2.4735 5.44398 2.4735 5.04564Z"
                    />
                    <path
                      d="M19.1519 10.1577H0.636042C0.282686 10.1577 0 10.4896 0 10.888V12.3485C0 12.7469 0.282686 13.0788 0.636042 13.0788V15.2697C0.636042 15.668 0.918728 16 1.27208 16H2.54417C2.89753 16 3.18021 15.668 3.18021 15.2697V14.5394H16.8198V15.2697C16.8198 15.668 17.1025 16 17.4558 16H18.7279C19.0813 16 19.364 15.668 19.364 15.2697V13.0788C19.7173 13.0788 20 12.7469 20 12.3485V10.888C20 10.2905 19.5053 10.1577 19.1519 10.1577Z"
                    />
                  </svg>
                  <svg
                    fill="none"
                    height="18"
                    viewBox="0 0 16 18"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    v-else-if="mode == 'thingsToDo'"
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
                  <svg
                    height="18"
                    viewBox="0 0 640 512"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    v-else-if="mode == 'vacation' && item.type == 'Hotel'"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    v-else
                  >
                    <path
                      d="M16.808 3.19729C16.5399 3.46359 15.2015 4.93888 13.9124 6.21937C13.9124 17.0109 14.2682 16.2008 12.4569 18L11.0211 11.9598L9.55414 10.5026C5.66686 14.3632 6.25266 11.3737 6.25266 15.0695C6.25636 15.8766 5.91536 16.4075 5.42637 16.8932L4.06597 13.8389L0.990894 12.4876C2.00029 11.4859 2.55178 11.6669 4.93967 11.6669C5.75236 10.0003 6.75696 9.28595 7.54295 8.50496L6.07896 7.05087L0 5.62688C1.71529 3.92299 0.663795 4.23739 11.8395 4.23739C13.1355 2.95009 14.5277 1.4671 14.7969 1.1997C15.5714 0.430509 17.5986 -0.235987 17.9174 0.0806108C18.2361 0.397209 17.5825 2.428 16.808 3.19729ZM15.4406 7.44417L14.6307 8.24686V10.6048C16.3815 8.84986 16.827 8.82816 15.4406 7.44417ZM10.6281 2.6519C9.26034 1.2867 9.36394 1.5691 7.41295 3.50889H9.77544L10.6281 2.6519Z"
                    />
                  </svg>
                </span>
                <span v-if="mode == 'flight'">
                  {{ item.ct }}({{ item.ac }})
                </span>
                <span
                  v-else-if="
                    mode == 'vacation' ||
                      mode == 'hotelFlightDestination' ||
                      mode == 'hotel' ||
                      mode == 'thingsToDo'
                  "
                >
                  {{ item.name }}
                </span>

                <span v-else-if="mode == 'hotelFlightOrigin'">
                  {{ item.cityName }}
                </span>
              </div>
              <div class="ts-dropdown-ariport-name">
                <span v-if="mode == 'flight'">
                  {{ item.an }}
                </span>
                <span
                  v-else-if="
                    mode == 'hotel' ||
                      mode == 'hotelFlightDestination' ||
                      mode == 'thingsToDo'
                  "
                >
                  {{ item.secondaryName }}
                </span>
                <span v-else-if="mode == 'hotelFlightOrigin'">
                  {{ item.name }}
                </span>
              </div>
            </div>
            <div class="ts-dropdown-airport" v-if="mode == 'flight'">
              {{ item.cc }}
            </div>
            <div
              class="ts-dropdown-airport"
              v-else-if="mode == 'hotelFlightOrigin'"
            >
              {{ item.countryCode }}
            </div>
          </div>
        </div>
      </template>
    </DropdownDialog>
    <SearchDialog
      :openDialog="openMobileDialog"
      :items="items"
      :title="placeholder"
      @getDataSearch="getDataSearchFromMobile"
      @close="openMobileDialog = $event"
      :mode="mode"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    items: {},
    placeholder: {
      type: String,
    },
    localStorage: {
      type: Object,
    },
    mode: {
      type: String,
      default: 'flight',
    },
    displaySearchWord: {
      type: String,
    },
    userLocation: {},
    from: {
      tyoe: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMenu: false,
      search: null,
      displaySearch: null,
      arrowCounter: 0,
      openMobileDialog: false,
    };
  },
  watch: {
    displaySearchWord: {
      handler: function(val) {
        this.displaySearch = val;
      },
      immediate: true,
    },
    items: {
      handler: function(val) {
        this.items = val;
      },
      immediate: true,
    },
    localStorage: {
      handler: function(val) {
        this.getLocalStorage(val);
      },
    },
    userLocation: {
      handler: function(val) {
        if (Object.keys(val).length && this.from) {
          if (!this.localStorage) {
            this.search = val;
            this.displayItemSearch(val);
            this.$emit('input', this.search);
          }
        }
        if (Object.keys(val).length == 0 && this.from) {
          if (!this.localStorage) {
            this.userLocationObject();
            this.$emit('input', this.search);
          }
        }
      },
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth < 600;
    },
  },
  methods: {
    focusInput(e) {
      if (!this.isMobile) {
        e.target.select();
      }
    },
    getLocalStorage(value) {
      if (!value) {
        return;
      }
      this.search = value;
      this.displayItemSearch(value);
      this.$emit('input', this.search);
    },
    openResult() {
      if (this.isMobile) {
        this.openMobileDialog = !this.openMobileDialog;
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    },
    getDataSearchFromMobile(items) {
      this.search = items.searchItem;
      this.displaySearch = items.display;
      this.$emit('input', this.search);
    },
    onClickOutside() {
      this.showMenu = false;
      this.fillInput();
    },
    getInput(keySearch) {
      this.displaySearch = keySearch;
      this.search = keySearch;
      this.$emit('input', keySearch);
    },
    fixScrolling() {
      let element = this.$refs.dropdown[this.arrowCounter];
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    },
    searchItems(e) {
      if (this.isMobile) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
      if (!this.isMobile) {
        if (e.key == 'ArrowDown') {
          if (this.arrowCounter < this.items.length) {
            this.arrowCounter = this.arrowCounter + 1;
            this.fixScrolling();
          }
        } else if (e.key == 'ArrowUp') {
          if (this.arrowCounter > 0) {
            this.arrowCounter = this.arrowCounter - 1;
            this.fixScrolling();
          }
        } else if (e.key == 'Enter') {
          if (this.arrowCounter == 0 && this.items[0]) {
            this.search = this.items[0];
            this.displayItemSearch(this.items[0]);
            this.$emit('input', this.search);
          } else if (this.arrowCounter > 0) {
            let item = this.items[this.arrowCounter];
            this.search = item;
            this.displayItemSearch(item);
            this.arrowCounter = -1;
            this.$emit('input', item);
          }
          this.showMenu = false;
        }
      }
    },
    userLocationObject() {
      if (this.from) {
        if (this.mode == 'flight') {
          this.search = {
            ac: 'YTO',
            an: 'Toronto All airports',
            cc: 'CA',
            cn: 'CA',
            ct: 'Toronto',
          };
          this.displayItemSearch(this.search);
        } else if (this.mode == 'vacation') {
          this.search = { codes: 'YYZ', name: 'Toronto' };
          this.displayItemSearch(this.search);
        }
      }
    },
    displayItemSearch(item) {
      if (this.mode == 'flight') {
        this.displaySearch = item.ac + '-' + item.ct + '-' + item.an;
      } else if (
        this.mode == 'vacation' ||
        this.mode == 'hotel' ||
        this.mode == 'thingsToDo'
      ) {
        this.displaySearch = item.name;
      } else if (this.mode == 'hotelFlightOrigin') {
        this.displaySearch =
          item.cityCode + '-' + item.cityName + '-' + item.name;
      } else if (this.mode == 'hotelFlightDestination') {
        this.displaySearch = item.name + '-' + item.secondaryName;
      }
    },
    selectItem(item) {
      this.search = item;
      this.displayItemSearch(item);
      this.$emit('input', item);
    },
    fillInput() {
      if (this.items.length && this.search.length) {
        this.search = this.items[0];
        this.displayItemSearch(this.items[0]);
        this.showMenu = false;
        this.$emit('input', this.search);
      }
    },
  },
};
</script>
