<style scoped>
.ts-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(204, 18, 18, 0.56);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  padding: 13px 16px;
  outline: none;
  cursor: pointer;
  border: none;
}

.ts-button svg {
  margin-right: 8px;
  fill: #fff;
}
.active {
  background: #ed1b2e;
  color: #fff;
}
.ts-button:disabled {
  background: #f9f9f9;
  color: #212121;
}
@media only screen and (max-width: 600px) {
  .ts-button {
    width: 100%;
  }
}
</style>

<template>
  <div>
    <button
      @click="$emit('search')"
      class="ts-button"
      :class="{ active: !activeButton }"
    >
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7701 12.6212L9.35093 9.05758C10.1748 8.06061 10.628 6.80909 10.628 5.49394C10.628 2.48182 8.25927 0 5.31386 0C2.38904 0 -0.000244141 2.46061 -0.000244141 5.49394C-0.000244141 8.50606 2.38904 10.9667 5.31386 10.9667C6.30253 10.9667 7.31179 10.6697 8.15628 10.1182L11.699 13.7667C11.8432 13.9152 12.0286 14 12.2345 14C12.4405 14 12.6259 13.9152 12.7701 13.7667C12.9143 13.6182 12.9966 13.4061 12.9966 13.1939C13.0172 12.9818 12.9349 12.7909 12.7701 12.6212ZM9.10376 5.49394C9.10376 7.63636 7.41478 9.37576 5.33445 9.37576C3.25413 9.37576 1.56515 7.61515 1.56515 5.49394C1.56515 3.35152 3.25413 1.61212 5.33445 1.61212C7.41478 1.61212 9.10376 3.35152 9.10376 5.49394Z"
        />
      </svg>
      <span> {{ buttonText }} </span>
    </button>
  </div>
</template>

<script>
export default {
  props: ['buttonText', 'activeButton'],
};
</script>
