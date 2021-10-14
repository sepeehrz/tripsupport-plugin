<style scoped>
.search-box {
  max-width: 1280px;
  padding: 0 32px;
  background: #fff;
  border-radius: 0px 4px 4px 4px;
  box-shadow: 0px 6px 12px rgba(102, 103, 143, 0.06),
    0px 1px 1px rgba(102, 103, 143, 0.04);
}
@media only screen and (max-width: 600px) {
  .search-box {
    padding: 0 0;
    box-shadow: unset;
    border-bottom: 2px solid rgba(171, 171, 196, 0.2);
  }
}
</style>

<template>
  <section>
    <NavigationSearchBox @activeItem="activeItem = $event" />
    <div class="search-box">
      <keep-alive>
        <component :is="activeComponents" />
      </keep-alive>
    </div>
  </section>
</template>

<script>
import Flight from './Flight/Index.vue';
import Hotel from './Hotel/Index.vue';
import Vacation from './Vacation/Index.vue';
import NavigationSearchBox from './NavigationSearchBox.vue';
import FlightHotel from './FlightHotel/Index.vue';
import ThingsToDo from './ThingsToDo/Index.vue';
export default {
  components: {
    NavigationSearchBox,
  },
  data() {
    return {
      activeItem: 'flight',
    };
  },

  computed: {
    activeComponents() {
      switch (this.activeItem) {
        case 'flight':
          return Flight;
          break;
        case 'vacation':
          return Vacation;
          break;
        case 'hotel':
          return Hotel;
          break;
        case 'flight-hotel':
          return FlightHotel;
          break;
        case 'things-to-do':
          return ThingsToDo;
          break;
      }
    },
  },
};
</script>
