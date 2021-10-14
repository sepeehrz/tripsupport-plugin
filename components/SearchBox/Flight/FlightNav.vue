<style scoped>
ul {
  display: flex;
  list-style-type: none;
  padding-left: 0 !important;
  margin: 0;
}
li {
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  margin-right: 8px;
  padding: 8px 12px;
  background: rgba(102, 103, 143, 0.1);
  border-radius: 24px;
  color: #66678f;
  white-space: nowrap;
}
.active {
  background: #66678f;
  color: #ffffff;
}
li:hover {
  background: #66678f;
  color: #ffffff;
}

@media only screen and (max-width: 600px) {
  ul {
    display: flex;
    margin-bottom: 20px;
  }
}
</style>

<template>
  <div>
    <ul>
      <li
        @click="activeNav('RoundTrip')"
        :class="{ active: activeItem == 'RoundTrip' }"
      >
        {{ $t('Round_Trip') }}
      </li>
      <li
        @click="activeNav('OneWay')"
        :class="{ active: activeItem == 'OneWay' }"
      >
        {{ $t('One_Way') }}
      </li>
      <li
        @click="activeNav('MultiCity')"
        :class="{ active: activeItem == 'MultiCity' }"
      >
        {{ $t('Multi_City') }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 'RoundTrip',
    };
  },
  methods: {
    activeNav(menuItem) {
      this.activeItem = menuItem;
      this.setServiceAnalytics();
      this.$emit('activeItem', menuItem);
    },
    setServiceAnalytics() {
      switch (this.activeItem) {
        case 'RoundTrip':
          this.$gtag.event('Services', {
            event_category: 'Flight Runway',
            event_label: 'User Click Flight Runway',
          });
          break;
        case 'OneWay':
          this.$gtag.event('Services', {
            event_category: 'Flight One Way',
            event_label: 'User Click Flight One Way',
          });
          break;
        case 'MultiCity':
          this.$gtag.event('Services', {
            event_category: 'Flight Multi City',
            event_label: 'User Click Flight Multi City',
          });
          break;
      }
    },
  },
};
</script>
