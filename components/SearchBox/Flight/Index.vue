<style>
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
.ts-origin,
.ts-destination {
  position: relative;
  width: 100%;
}
.ts-svg {
  margin-right: 16px;
  margin-top: 45px;
  cursor: pointer;
}
.ts-action-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 37px;
  padding-bottom: 32px;
}

.ts-svg svg {
  fill: #ababc4;
}
.ts-header-component {
  padding: 32px 0 24px;
  display: flex;
  justify-content: space-between;
}
.ts-other-components {
  display: flex;
  align-items: center;
}
.ts-passengers-component {
  padding-right: 24px;
}
@media only screen and (max-width: 600px) {
  .ts-passengers-component {
    padding-right: 8px;
  }
  .ts-header-component {
    display: block;
    padding: 16px 0 20px;
  }
  ::v-deep .ts-icon-passenger {
    display: none;
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
  .ts-button {
    margin-top: 26px;
  }
  .ts-search-field-wrapper {
    display: block;
    flex: unset;
  }
}
/* @media (min-width: 992px) and (max-width: 1366px) {
  ::v-deep .ts-header-component .ts-menu {
    right: 0;
  }
} */
</style>

<template>
  <div>
    <div class="ts-header-component">
      <div class="ts-title-component">
        <FlightNav @activeItem="activeItem = $event" />
      </div>
      <div class="ts-other-components">
        <div class="ts-passengers-component">
          <Passengers :activePassengers="activeItem" />
        </div>
        <div class="ts-airfare-component">
          <AirfareType />
        </div>
      </div>
    </div>
    <keep-alive>
      <component :is="activeComponents" />
    </keep-alive>
  </div>
</template>

<script>
import FlightNav from './FlightNav.vue';
import RoundTrip from './RoundTrip.vue';
import OneWay from './OneWay.vue';
import MultiCity from './MultiCity.vue';
import Passengers from './../Common/Passengers.vue';
import AirfareType from './../Common/AirfareType.vue';
export default {
  components: {
    FlightNav,
    Passengers,
    AirfareType,
    MultiCity,
  },
  data() {
    return {
      activeItem: 'RoundTrip',
      name: 'flight',
    };
  },
  computed: {
    activeComponents() {
      switch (this.activeItem) {
        case 'RoundTrip':
          return RoundTrip;
          break;
        case 'OneWay':
          return OneWay;
          break;
        case 'MultiCity':
          return MultiCity;
          break;
      }
    },
  },
};
</script>

<style></style>
