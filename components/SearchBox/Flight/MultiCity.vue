<style scoped>
.ts-menu {
  top: 82px;
}
.ts-field-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.ts-field-item-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}
.ts-remove-position {
  cursor: pointer;
  position: absolute;
  right: -25px;
  bottom: 10px;
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
.ts-field-item .ts-input {
  width: 180px;
}
.ts-line {
  height: 70px;
  width: 1px;
  background: rgba(171, 171, 196, 0.6);
  margin: 0 30px;
}
.ts-field-item {
  position: relative;
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
.ts-action-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 37px;
  padding-bottom: 32px;
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
.ts-dropdown-wrapper {
  padding: 10px 0;
  width: 356px;
}
.ts-dropdown-item {
  display: flex;
  justify-content: space-between;
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

::v-deep .reportrange-text {
  margin-top: 7px;
}
@media only screen and (max-width: 768px) {
  .ts-origin .ts-input {
    margin-top: 0;
  }
  .ts-field-item-wrapper {
    display: block;
  }
  .ts-field-wrapper {
    display: block;
    position: relative;
    margin-bottom: 0;
  }
  .ts-line {
    display: none;
  }
  .ts-field-item .ts-input {
    width: 100%;
  }
  ::v-deep .reportrange-text {
    margin-top: 12px;
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
  .ts-label {
    display: none;
  }
  .ts-dropdown-wrapper {
    width: 100%;
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
}
@media (min-width: 800px) and (max-width: 1900px) {
  .ts-field-item .ts-input {
    width: 95%;
  }
}
</style>

<template>
  <section>
    <div class="ts-field-wrapper">
      <div class="ts-remove-wrapper" v-if="isMobile">
        <div class="ts-flight-number">Flight 1</div>
      </div>
      <div class="ts-field-item-wrapper" v-if="counter >= 0">
        <div class="ts-field-item ts-origin">
          <label class="ts-label">{{ $t('Departing_From') }}</label>
          <input
            @keyup="originSearchFirst"
            v-bind:value="displayOriginFirst"
            v-on:input="
              (displayOriginFirst = $event.target.value),
                (originFirst = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Departing_From')}`"
            v-click-outside="onClickOutsideOriginFirst"
            @click="openOriginFirst"
            @focus="$event.target.select()"
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
            :showMenu="showOriginMenuFirst"
            v-if="originItemsFirst.length"
          >
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in originItemsFirst"
                  :key="index"
                  @click="getOriginFirst(item)"
                  :class="{ active: originFirst == item }"
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
          :openDialog="openOriginDialogFirst"
          :items="originItemsFirst"
          :from="true"
          :title="$t('Departing_From')"
          @getDataSearch="getDataOriginSearchFirst"
          @close="openOriginDialogFirst = $event"
        />
        <div class="ts-field-item">
          <label class="ts-label">{{ $t('Going_To') }}</label>
          <input
            @keyup="destinationSearchFirst"
            v-bind:value="displayDestinationFirst"
            v-on:input="
              (displayDestinationFirst = $event.target.value),
                (destinationFirst = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Going_To')}`"
            v-click-outside="onClickOutsideDestinationFirst"
            @click="openDestinationFirst"
            @focus="$event.target.select()"
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
            :showMenu="showDestinationMenuFirst"
            v-if="destinationItemsFirst.length"
          >
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in destinationItemsFirst"
                  :key="index"
                  @click="getdestinationFirst(item)"
                  :class="{ active: destinationFirst == item }"
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
          :openDialog="openDestinationDialogFirst"
          :items="destinationItemsFirst"
          :from="false"
          :title="$t('Going_To')"
          @getDataSearch="getDataDestinationFrist"
          @close="openDestinationDialogFirst = $event"
        />
        <div class="ts-field-item">
          <NewDatePicker
            @RangeSelectedDate="getRangeDateFirst"
            @clearDate="clearDate"
            :lastDate="LastFirstDate"
            :singleDatePicker="true"
            title="Departure"
          />
        </div>
      </div>
      <div class="ts-line"></div>
      <div class="ts-remove-wrapper" v-if="isMobile">
        <div class="ts-flight-number">Flight 2</div>
      </div>
      <div class="ts-field-item-wrapper" v-if="counter >= 1">
        <div class="ts-field-item">
          <label class="ts-label">{{ $t('Departing_From') }}</label>

          <input
            @keyup="originSearchSecond"
            v-bind:value="displayOriginSecond"
            v-on:input="
              (displayOriginSecond = $event.target.value),
                (originSecond = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Departing_From')}`"
            v-click-outside="onClickOutsideOriginSecond"
            @click="openOriginSecond"
            @focus="$event.target.select()"
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
            :showMenu="showOriginMenuSecond"
            v-if="originItemsSecond.length"
          >
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in originItemsSecond"
                  :key="index"
                  @click="getOriginSecond(item)"
                  :class="{ active: originSecond == item }"
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
          :openDialog="openOriginDialogSecond"
          :items="originItemsSecond"
          :from="false"
          :title="$t('Departing_From')"
          @getDataSearch="getDataOriginSearchSecond"
          @close="openOriginDialogSecond = $event"
        />
        <div class="ts-field-item">
          <label class="ts-label">{{ $t('Going_To') }}</label>
          <input
            @keyup="destinationSearchSecond"
            v-bind:value="displayDestinationSecond"
            v-on:input="
              (displayDestinationSecond = $event.target.value),
                (destinationSecond = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Going_To')}`"
            v-click-outside="onClickOutsideDestinationSecond"
            @click="openDestinationSecond"
            @focus="$event.target.select()"
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
            :showMenu="showDestinationMenuSecond"
            v-if="destinationItemsSecond.length"
          >
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in destinationItemsSecond"
                  :key="index"
                  @click="getdestinationSecond(item)"
                  :class="{ active: destinationSecond == item }"
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
          :openDialog="openDestinationDialogSecond"
          :items="destinationItemsSecond"
          :from="false"
          :title="$t('Going_To')"
          @getDataSearch="getDataDestinationSecond"
          @close="openDestinationDialogSecond = $event"
        />
        <div class="ts-field-item">
          <NewDatePicker
            @RangeSelectedDate="getRangeDateSecond"
            :singleDatePicker="true"
            :startDate="departureFirst"
            title="Departure"
          />
        </div>
      </div>
    </div>
    <div class="ts-remove-wrapper" v-if="isMobile">
      <div class="ts-flight-number" v-if="counter >= 2">Flight 3</div>
      <div class="ts-remove" v-if="counter >= 2" @click="counter--">
        remove
      </div>
    </div>
    <div class="ts-field-wrapper">
      <div class="ts-field-item-wrapper" v-if="counter >= 2">
        <div class="ts-field-item">
          <label class="ts-label">{{ $t('Departing_From') }}</label>
          <input
            @keyup="originSearchThird"
            v-bind:value="displayOriginThird"
            v-on:input="
              (displayOriginThird = $event.target.value),
                (originThird = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Departing_From')}`"
            v-click-outside="onClickOutsideOriginThird"
            @click="openOriginThird"
            @focus="$event.target.select()"
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
            :showMenu="showOriginMenuThird"
            v-if="originItemsThird.length"
          >
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in originItemsThird"
                  :key="index"
                  @click="getOriginThird(item)"
                  :class="{ active: originThird == item }"
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
          :openDialog="openOriginDialogThird"
          :items="originItemsThird"
          :from="false"
          :title="$t('Departing_From')"
          @getDataSearch="getDataOriginSearchThird"
          @close="openOriginDialogThird = $event"
        />
        <div class="ts-field-item">
          <label class="ts-label">{{ $t('Going_To') }}</label>
          <input
            @keyup="destinationSearchThird"
            v-bind:value="displayDestinationThird"
            v-on:input="
              (displayDestinationThird = $event.target.value),
                (destinationThird = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Going_To')}`"
            v-click-outside="onClickOutsideDestinationThird"
            @click="openDestinationThird"
            @focus="$event.target.select()"
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
            :showMenu="showDestinationMenuThird"
            v-if="destinationItemsThird.length"
          >
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in destinationItemsThird"
                  :key="index"
                  @click="getdestinationThird(item)"
                  :class="{ active: destinationThird == item }"
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
          :openDialog="openDestinationDialogThird"
          :items="destinationItemsThird"
          :from="false"
          :title="$t('Going_To')"
          @getDataSearch="getDataDestinationThird"
          @close="openDestinationDialogThird = $event"
        />
        <div class="ts-field-item">
          <NewDatePicker
            @RangeSelectedDate="getRangeDateThird"
            :singleDatePicker="true"
            title="Departure"
          />
        </div>
        <div class="ts-remove-position" v-if="!isMobile" @click="counter--">
          <v-icon>mdi-close</v-icon>
        </div>
      </div>
      <div class="ts-remove-wrapper" v-if="isMobile">
        <div class="ts-flight-number" v-if="counter >= 3">Flight 4</div>
        <div class="ts-remove" v-if="counter >= 3" @click="counter--">
          remove
        </div>
      </div>
      <div class="ts-line" v-if="counter >= 3"></div>
      <div class="ts-field-item-wrapper" v-if="counter >= 3">
        <div class="ts-field-item">
          <label class="ts-label">{{ $t('Departing_From') }}</label>
          <input
            @keyup="originSearchFourth"
            v-bind:value="displayOriginFourth"
            v-on:input="
              (displayOriginFourth = $event.target.value),
                (originFourth = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Departing_From')}`"
            v-click-outside="onClickOutsideOriginFourth"
            @click="openOriginFourth"
            @focus="$event.target.select()"
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
            :showMenu="showOriginMenuFourth"
            v-if="originItemsFourth.length"
          >
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in originItemsFourth"
                  :key="index"
                  @click="getOriginFourth(item)"
                  :class="{ active: getOriginFourth == item }"
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
          :openDialog="openOriginDialogFourth"
          :items="originItemsFourth"
          :from="false"
          :title="$t('Departing_From')"
          @getDataSearch="getDataOriginSearchFourth"
          @close="openOriginDialogFourth = $event"
        />
        <div class="ts-field-item">
          <label class="ts-label">{{ $t('Going_To') }}</label>
          <input
            @keyup="destinationSearchFourth"
            v-bind:value="displayDestinationFourth"
            v-on:input="
              (displayDestinationFourth = $event.target.value),
                (destinationFourth = $event.target.value)
            "
            type="text"
            class="ts-input"
            :placeholder="`${$t('Going_To')}`"
            v-click-outside="onClickOutsideDestinationFourth"
            @click="openDestinationFourth"
            @focus="$event.target.select()"
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
            :showMenu="showDestinationMenuFourth"
            v-if="destinationItemsFourth.length"
          >
            <template #data>
              <div class="ts-dropdown-wrapper">
                <div
                  class="ts-dropdown-item"
                  v-for="(item, index) in destinationItemsFourth"
                  :key="index"
                  @click="getdestinationFourth(item)"
                  :class="{ active: destinationFourth == item }"
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
          :openDialog="openDestinationDialogFourth"
          :items="destinationItemsFourth"
          :from="false"
          :title="$t('Going_To')"
          @getDataSearch="getDataDestinationFourth"
          @close="openDestinationDialogFourth = $event"
        />
        <div class="ts-field-item">
          <NewDatePicker
            @RangeSelectedDate="getRangeDateFourth"
            :singleDatePicker="true"
            title="Departure"
          />
        </div>
        <div class="ts-remove-position" v-if="!isMobile" @click="counter--">
          <v-icon>mdi-close</v-icon>
        </div>
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
          <button
            class="ts-add-more"
            @click="counter++"
            :disabled="counter >= 5"
          >
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
  </section>
</template>

<script>
import SearchButton from './../Common/SearchButton.vue';
import Travellers from './../Common/Passengers.vue';
import AirfareType from './../Common/AirfareType.vue';
import Toast from './../Common/Toast.vue';
import moment from 'moment';
import MenuDialog from '../Common/MenuDialog.vue';
import DatePicker from './../Common/DatePicker.vue';
import SearchDialog from '../Common/SearchDialog.vue';
import DatePickerMobile from '../Common/DatePickerMobile.vue';

export default {
  components: {
    SearchButton,
    Travellers,
    AirfareType,
    Toast,
    MenuDialog,
    DatePicker,
    SearchDialog,
    DatePickerMobile,
  },
  data() {
    return {
      name: 'flight',
      toast: {
        toastText: '',
        color: 'red',
      },

      openOriginDialogFirst: false,
      openOriginDialogSecond: false,
      openOriginDialogThird: false,
      openOriginDialogFourth: false,

      openDestinationDialogFirst: false,
      openDestinationDialogSecond: false,
      openDestinationDialogThird: false,
      openDestinationDialogFourth: false,

      showOriginMenuFirst: false,
      showOriginMenuSecond: false,
      showOriginMenuThird: false,
      showOriginMenuFourth: false,
      showDestinationMenuFirst: false,
      showDestinationMenuSecond: false,
      showDestinationMenuThird: false,
      showDestinationMenuFourth: false,
      originFirst: null,
      originSecond: null,
      originThird: null,
      originFourth: null,
      displayOriginFirst: null,
      displayOriginSecond: null,
      displayOriginThird: null,
      displayOriginFourth: null,
      originItemsFirst: [],
      originItemsSecond: [],
      originItemsThird: [],
      originItemsFourth: [],

      destinationFirst: null,
      destinationSecond: null,
      destinationThird: null,
      destinationFourth: null,

      displayDestinationFirst: null,
      displayDestinationSecond: null,
      displayDestinationThird: null,
      displayDestinationFourth: null,

      destinationItemsFirst: [],
      destinationItemsSecond: [],
      destinationItemsThird: [],
      destinationItemsFourth: [],

      departureFirst: null,
      departureSecond: null,
      departureThird: null,
      departureFourth: null,

      LastFirstDate: null,

      IsFlexiSearch: false,
      ns: false,
      counter: 1,
      showDialog: false,
      adult: 1,
      infant: 0,
      child: 0,
      class: this.$store.commit('getAirType', `${this.$t('Economy')}`),
    };
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
      this.originFirst = locationSearch;
      this.displayOriginFirst =
        locationSearch.ac + '-' + locationSearch.ct + '-' + locationSearch.an;
    } else {
      this.$cookie.set(
        'userLocation',
        JSON.stringify({
          ct: 'Toronto',
          ac: 'YTO',
        })
      );
      this.originFirst = {
        ac: 'YTO',
        an: 'Toronto All airports',
        cc: 'CA',
        cn: 'CA',
        ct: 'Toronto',
      };
      this.displayOriginFirst =
        'YTO' + '-' + 'Toronto' + '-' + 'Toronto All airports';
    }
    let getLastSearch = localStorage.getItem('lastFlightMultipleSearch');
    if (!getLastSearch) {
      return;
    }
    let parsedGetLastSearch = JSON.parse(getLastSearch);
    if (parsedGetLastSearch.date) {
      this.LastFirstDate = parsedGetLastSearch.date;
      this.departureFirst = this.changeFormat(
        parsedGetLastSearch.date.startDate
      );
    }
  },
  computed: {
    isMobile() {
      if (window.innerWidth <= 600) {
        return true;
      } else {
        return false;
      }
    },
    disabledButton() {
      let adult = this.$store.state.adult;
      if (
        !this.originFirst ||
        !this.originFirst.ct ||
        !this.destinationFirst ||
        !this.destinationFirst.ct ||
        !this.departureFirst ||
        adult == 0
      ) {
        return true;
      }
    },
  },
  methods: {
    clearDate() {
      this.departureFirst = null;
    },
    openOriginFirst() {
      if (window.innerWidth <= 600)
        this.openOriginDialogFirst = !this.openOriginDialogFirst;
      if (window.innerWidth <= 600) {
        this.showOriginMenuFirst = false;
      } else {
        this.showOriginMenuFirst = true;
      }
    },
    openOriginSecond() {
      if (window.innerWidth <= 600)
        this.openOriginDialogSecond = !this.openOriginDialogSecond;
      if (window.innerWidth <= 600) {
        this.showOriginMenuSecond = false;
      } else {
        this.showOriginMenuSecond = true;
      }
    },
    openOriginThird() {
      if (window.innerWidth <= 600)
        this.openOriginDialogThird = !this.openOriginDialogThird;
      if (window.innerWidth <= 600) {
        this.showOriginMenuThird = false;
      } else {
        this.showOriginMenuThird = true;
      }
    },
    openOriginFourth() {
      if (window.innerWidth <= 600)
        this.openOriginDialogFourth = !this.openOriginDialogFourth;
      if (window.innerWidth <= 600) {
        this.showOriginMenuFourth = false;
      } else {
        this.showOriginMenuFourth = true;
      }
    },
    openDestinationFirst() {
      if (window.innerWidth <= 600)
        this.openDestinationDialogFirst = !this.openDestinationDialogFirst;
      if (window.innerWidth <= 600) {
        this.showDestinationMenuFirst = false;
      } else {
        this.showDestinationMenuFirst = true;
      }
    },
    openDestinationSecond() {
      if (window.innerWidth <= 600)
        this.openDestinationDialogSecond = !this.openDestinationDialogSecond;
      if (window.innerWidth <= 600) {
        this.showDestinationMenuSecond = false;
      } else {
        this.showDestinationMenuSecond = true;
      }
    },
    openDestinationThird() {
      if (window.innerWidth <= 600)
        this.openDestinationDialogThird = !this.openDestinationDialogThird;
      if (window.innerWidth <= 600) {
        this.showDestinationMenuThird = false;
      } else {
        this.showDestinationMenuThird = true;
      }
    },
    openDestinationFourth() {
      if (window.innerWidth <= 600)
        this.openDestinationDialogFourth = !this.openDestinationDialogFourth;
      if (window.innerWidth <= 600) {
        this.showDestinationMenuFourth = false;
      } else {
        this.showDestinationMenuFourth = true;
      }
    },

    originSearchFirst() {
      this.searchRequest(this.originFirst, (cb) => {
        this.originItemsFirst = cb;
      });
      if (window.innerWidth <= 600) {
        this.showOriginMenuFirst = false;
      } else {
        this.showOriginMenuFirst = true;
      }
    },
    destinationSearchFirst() {
      this.searchRequest(this.destinationFirst, (cb) => {
        this.destinationItemsFirst = cb;
      });
      if (window.innerWidth <= 600) {
        this.showDestinationMenuFirst = false;
      } else {
        this.showDestinationMenuFirst = true;
      }
    },
    originSearchSecond() {
      this.searchRequest(this.originSecond, (cb) => {
        this.originItemsSecond = cb;
      });
      if (window.innerWidth <= 600) {
        this.showOriginMenuSecond = false;
      } else {
        this.showOriginMenuSecond = true;
      }
    },
    destinationSearchSecond() {
      this.searchRequest(this.destinationSecond, (cb) => {
        this.destinationItemsSecond = cb;
      });
      if (window.innerWidth <= 600) {
        this.showDestinationMenuSecond = false;
      } else {
        this.showDestinationMenuSecond = true;
      }
    },
    originSearchThird() {
      this.searchRequest(this.originThird, (cb) => {
        this.originItemsThird = cb;
      });
      if (window.innerWidth <= 600) {
        this.showOriginMenuThird = false;
      } else {
        this.showOriginMenuThird = true;
      }
    },
    destinationSearchThird() {
      this.searchRequest(this.destinationThird, (cb) => {
        this.destinationItemsThird = cb;
      });
      if (window.innerWidth <= 600) {
        this.showDestinationMenuThird = false;
      } else {
        this.showDestinationMenuThird = true;
      }
    },
    originSearchFourth() {
      this.searchRequest(this.originFourth, (cb) => {
        this.originItemsFourth = cb;
      });
      if (window.innerWidth <= 600) {
        this.showOriginMenuFourth = false;
      } else {
        this.showOriginMenuFourth = true;
      }
    },
    destinationSearchFourth() {
      this.searchRequest(this.destinationFourth, (cb) => {
        this.destinationItemsFourth = cb;
      });
      if (window.innerWidth <= 600) {
        this.showDestinationMenuFourth = false;
      } else {
        this.showDestinationMenuFourth = true;
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
    getDataOriginSearchFirst(origin, displayOrigin) {
      this.originFirst = origin;
      this.displayOriginFirst = displayOrigin;
      this.searchRequest(this.originFirst, (cb) => {
        this.originItemsFirst = cb;
      });
    },
    getDataOriginSearchSecond(origin, displayOrigin) {
      this.originSecond = origin;
      this.displayOriginSecond = displayOrigin;
      this.searchRequest(this.originSecond, (cb) => {
        this.originItemsSecond = cb;
      });
    },
    getDataOriginSearchThird(origin, displayOrigin) {
      this.originThird = origin;
      this.displayOriginThird = displayOrigin;
      this.searchRequest(this.originThird, (cb) => {
        this.originItemsThird = cb;
      });
    },
    getDataOriginSearchFourth(origin, displayOrigin) {
      this.originFourth = origin;
      this.displayOriginFourth = displayOrigin;
      this.searchRequest(this.originFourth, (cb) => {
        this.originItemsFourth = cb;
      });
    },

    getDataDestinationFrist(origin, displayOrigin) {
      this.destinationFirst = origin;
      this.displayDestinationFirst = displayOrigin;
      this.searchRequest(this.destinationFirst, (cb) => {
        this.destinationItemsFirst = cb;
      });
    },
    getDataDestinationSecond(origin, displayOrigin) {
      this.destinationSecond = origin;
      this.displayDestinationSecond = displayOrigin;
      this.searchRequest(this.destinationSecond, (cb) => {
        this.destinationItemsSecond = cb;
      });
    },
    getDataDestinationThird(origin, displayOrigin) {
      this.destinationThird = origin;
      this.displayDestinationThird = displayOrigin;
      this.searchRequest(this.destinationThird, (cb) => {
        this.destinationItemsThird = cb;
      });
    },
    getDataDestinationFourth(origin, displayOrigin) {
      this.destinationFourth = origin;
      this.displayDestinationFourth = displayOrigin;
      this.searchRequest(this.destinationFourth, (cb) => {
        this.destinationItemsFourth = cb;
      });
    },

    getOriginFirst(item) {
      this.originFirst = item;
      this.displayOriginFirst = item.ac + '-' + item.ct + '-' + item.an;
    },
    getOriginSecond(item) {
      this.originSecond = item;
      this.displayOriginSecond = item.ac + '-' + item.ct + '-' + item.an;
    },
    getOriginThird(item) {
      this.originThird = item;
      this.displayOriginThird = item.ac + '-' + item.ct + '-' + item.an;
    },
    getOriginFourth(item) {
      this.originFourth = item;
      this.displayOriginFourth = item.ac + '-' + item.ct + '-' + item.an;
    },
    getdestinationFirst(item) {
      this.destinationFirst = item;
      this.displayDestinationFirst = item.ac + '-' + item.ct + '-' + item.an;
    },
    getdestinationSecond(item) {
      this.destinationSecond = item;
      this.displayDestinationSecond = item.ac + '-' + item.ct + '-' + item.an;
    },
    getdestinationThird(item) {
      this.destinationThird = item;
      this.displayDestinationThird = item.ac + '-' + item.ct + '-' + item.an;
    },
    getdestinationFourth(item) {
      this.destinationFourth = item;
      this.displayDestinationFourth = item.ac + '-' + item.ct + '-' + item.an;
    },
    onClickOutsideOriginFirst() {
      this.showOriginMenuFirst = false;
    },
    onClickOutsideOriginSecond() {
      this.showOriginMenuSecond = false;
    },
    onClickOutsideOriginThird() {
      this.showOriginMenuThird = false;
    },
    onClickOutsideOriginFourth() {
      this.showOriginMenuFourth = false;
    },
    onClickOutsideDestinationFirst() {
      this.showDestinationMenuFirst = false;
    },
    onClickOutsideDestinationSecond() {
      this.showDestinationMenuSecond = false;
    },
    onClickOutsideDestinationThird() {
      this.showDestinationMenuThird = false;
    },
    onClickOutsideDestinationFourth() {
      this.showDestinationMenuFourth = false;
    },
    getRangeDateFirst(e) {
      this.LastFirstDate = e;
      this.departureFirst = this.changeFormat(e.startDate);
    },
    getRangeDateSecond(e) {
      this.departureSecond = this.changeFormat(e.startDate);
    },
    getRangeDateThird(e) {
      this.departureThird = this.changeFormat(e.startDate);
    },
    getRangeDateFourth(e) {
      this.departureFourth = this.changeFormat(e.startDate);
    },
    changeFormat(val) {
      return moment(val).format('D MMM YYYY');
    },
    getTravellers(adult, infant, child) {
      this.adult = adult;
      this.infant = infant;
      this.child = child;
    },
    getClass(val) {
      this.class = val;
    },
    save() {
      this.class = this.$store.state.airfaireType;
      this.adult = this.$store.state.adult;
      this.infant = this.$store.state.infant;
      this.child = this.$store.state.child;
      if (
        !this.originFirst ||
        !this.originFirst.ct ||
        !this.destinationFirst ||
        !this.destinationFirst.ct
      ) {
        this.showDialog = true;
        this.toast = {
          color: '#cb3839',
          toastText: 'Please Enter Departing From and Going To',
        };
        if (!this.originFirst || !this.originFirst.ct) {
          this.$gtag.event('Validation', {
            event_category: 'Flight Multi City',
            event_label: 'User entered an invalid Departing From',
          });
        }
        if (!this.destinationFirst || !this.destinationFirst.ct) {
          this.$gtag.event('Validation', {
            event_category: 'Flight Multi City',
            event_label: 'User entered an invalid Going To',
          });
        }
        return;
      }
      if (!this.departureFirst) {
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
      if (this.adult == 0) {
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
      let searchObject = {
        date: this.LastFirstDate,
      };
      localStorage.setItem(
        'lastFlightMultipleSearch',
        JSON.stringify(searchObject)
      );
      this.$gtag.event('Search', {
        event_category: 'Flight Multi City',
        event_label: 'User submit new search',
      });
      let url = location.href;
      url = url.substring(url.indexOf('.')).split('/')[0];
      let href = `https://secure.tripsupport${url}/flight/multicity;tripType=multicity;destination=${
        this.destinationFirst.ac
      };origin=${this.originFirst.ac};IsFlexiSearch=${this.IsFlexiSearch};ns=${
        this.ns
      };departDate=${this.departureFirst};returnDate=;adult=${
        this.adult
      };child=${this.child};infant=${this.infant};class=${
        this.class
      };multiOrigin=${this.originFirst.ac}-${this.originFirst.ct}-${
        this.originFirst.an
      },${this.originSecond ? this.originSecond.ac : ''}-${
        this.originSecond ? this.originSecond.ct : ''
      }-${this.originSecond ? this.originSecond.an : ''},${
        this.originThird ? this.originThird.ac : ''
      }-${this.originThird ? this.originThird.ct : ''}-${
        this.originThird ? this.originThird.an : ''
      },${this.originFourth ? this.originFourth.ac : ''}-${
        this.originFourth ? this.originFourth.ct : ''
      }-${this.originFourth ? this.originFourth.an : ''};multiDestination=${
        this.destinationFirst.ac
      }-${this.destinationFirst.ct}-${this.destinationFirst.an},${
        this.destinationSecond ? this.destinationSecond.ac : ''
      }-${this.destinationSecond ? this.destinationSecond.ct : ''}-${
        this.destinationSecond ? this.destinationSecond.an : ''
      },${this.destinationThird ? this.destinationThird.ac : ''}-${
        this.destinationThird ? this.destinationThird.ct : ''
      }-${this.destinationThird ? this.destinationThird.an : ''},${
        this.destinationFourth ? this.destinationFourth.ac : ''
      }-${this.destinationFourth ? this.destinationSearchFourth.ct : ''}-${
        this.destinationFourth ? this.destinationSearchFourth.an : ''
      };multidate=${this.departureFirst ? this.departureFirst : ''},${
        this.departureSecond ? this.departureSecond : ''
      },${this.departureThird ? this.departureThird : ''},${
        this.departureFourth ? this.departureFourth : ''
      }`;
      window.open(href, '_self');
    },
  },
};
</script>
