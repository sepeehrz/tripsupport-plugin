<style scoped>
ul {
  display: flex;
  list-style-type: none;
  padding-left: 0 !important;
  margin: 0;
}
li {
  background: rgba(12, 13, 37, 0.5);
  backdrop-filter: blur(24px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  color: #fff;
}
li:first-child {
  border-radius: 4px 0px 0px 0px;
}
li:last-child {
  border-radius: 0 4px 0 0;
}
li span {
  font-size: 18px;
}
.space {
  margin-left: 8px;
}
li svg {
  fill: #fff;
}
.active {
  background: #fff;
  color: #0c0d25;
  border-radius: 4px 4px 0px 0px;
}
.active svg {
  fill: red;
}
.space-svg {
  margin-right: 12px;
}
@media only screen and (max-width: 600px) {
  ul {
    overflow: auto;
    padding-left: 14px !important;
  }
  li {
    display: flex;
    flex-direction: column;
    padding: 16px 7px 12px;
    background: #fff;
    color: #66678f;
    white-space: nowrap;
    border-bottom: 2px solid rgba(171, 171, 196, 0.2);
  }
  li span {
    font-size: 14px;
  }
  li svg {
    fill: #ababc4;
  }
  .space {
    margin-top: 5px;
    margin-left: 0;
  }
  .active {
    border-bottom: 2px solid #ed1b2e;
    color: #0c0d25;
    border-radius: 0;
  }
}
@media only screen and (max-width: 375px) {
  li {
    padding: 16px 5px 12px;
  }
  li span {
    font-size: 13px;
  }
}
@media only screen and (max-width: 320px) {
  li {
    padding: 16px 6px 12px;
  }
  li span {
    font-size: 10px;
  }
}
</style>

<template>
  <div class="main-nav">
    <ul>
      <li
        @click="activeNav('flight')"
        :class="{ active: activeItem == 'flight' }"
      >
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6756 3.55255C18.3777 3.84843 16.8906 5.48765 15.4582 6.91041C15.4582 18.901 15.8536 18.0009 13.841 20L12.2457 13.2887L10.6157 11.6696C6.29652 15.9591 6.9474 12.6375 6.9474 16.7439C6.95151 17.6407 6.57263 18.2306 6.0293 18.7702L4.51775 15.3766L1.10099 13.8751C2.22254 12.7622 2.83532 12.9633 5.48852 12.9633C6.39152 11.1115 7.50773 10.3177 8.38106 9.44995L6.7544 7.8343L0 6.25209C1.90588 4.35887 0.73755 4.70821 13.155 4.70821C14.595 3.27788 16.1419 1.63011 16.441 1.333C17.3016 0.478343 19.554 -0.262208 19.9082 0.0895676C20.2623 0.441343 19.5361 2.69777 18.6756 3.55255ZM17.1562 8.2713L16.2563 9.16318V11.7832C18.2017 9.83317 18.6967 9.80906 17.1562 8.2713ZM11.809 2.94655C10.2893 1.42967 10.4044 1.74345 8.23662 3.89877H10.8616L11.809 2.94655Z"
            />
          </svg>
        </div>
        <span class="space"> {{ $t('Flights') }} </span>
      </li>
      <li
        @click="activeNav('vacation')"
        :class="{ active: activeItem == 'vacation' }"
        v-if="!location.includes('https://tripsupport.com')"
      >
        <div>
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7269 9.59961C20.6052 6.43881 20.7799 3.67161 20.2963 1.76828C23.1588 3.87588 24.574 7.52374 23.7825 11.0757L19.7269 9.59961ZM15.2403 0.00641108C11.776 -0.123989 8.4592 1.74254 6.8188 4.90148L10.7123 6.31854C12.0513 3.37628 13.668 1.16801 15.2403 0.00641108ZM21 17H12.4371L15.6727 8.12387L18.6359 9.20241C19.6777 5.38614 19.55 2.42148 18.7827 1.06521C18.3004 0.663211 18.3452 0.594544 17.2228 0.296411C15.7471 0.630944 13.5753 2.86868 11.8036 6.71574L14.1836 7.58201L10.7503 17H3C1.3432 17 0 18.3432 0 20H24C24 18.3432 22.6568 17 21 17Z"
            />
          </svg>
        </div>
        <span class="space">{{ $t('Vacations') }} </span>
      </li>
      <li
        @click="activeNav('hotel')"
        :class="{ active: activeItem == 'hotel' }"
      >
        <div>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1666 0V5.88168H19.3309C18.9284 4.77015 17.9345 3.98386 16.7724 3.98386H14.256C13.0939 3.98386 12.1 4.77015 11.6975 5.88168H10.3025C9.9 4.77015 8.90615 3.98386 7.744 3.98386H5.22761C4.06546 3.98386 3.07161 4.77015 2.66915 5.88168H1.83288V0H20.1666ZM22 9.99978C22 8.489 20.9763 7.23886 19.6445 7.03058H2.35551C1.023 7.23886 0 8.489 0 9.99978V16H1.83288V12.9998H20.1666V16H22V9.99978Z"
            />
          </svg>
        </div>
        <span class="space"> {{ $t('Hotels') }} </span>
      </li>
      <li
        @click="activeNav('flight-hotel')"
        :class="{ active: activeItem == 'flight-hotel' }"
      >
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6756 3.55255C18.3777 3.84843 16.8906 5.48765 15.4582 6.91041C15.4582 18.901 15.8536 18.0009 13.841 20L12.2457 13.2887L10.6157 11.6696C6.29652 15.9591 6.9474 12.6375 6.9474 16.7439C6.95151 17.6407 6.57263 18.2306 6.0293 18.7702L4.51775 15.3766L1.10099 13.8751C2.22254 12.7622 2.83532 12.9633 5.48852 12.9633C6.39152 11.1115 7.50773 10.3177 8.38106 9.44995L6.7544 7.8343L0 6.25209C1.90588 4.35887 0.73755 4.70821 13.155 4.70821C14.595 3.27788 16.1419 1.63011 16.441 1.333C17.3016 0.478343 19.554 -0.262208 19.9082 0.0895676C20.2623 0.441343 19.5361 2.69777 18.6756 3.55255ZM17.1562 8.2713L16.2563 9.16318V11.7832C18.2017 9.83317 18.6967 9.80906 17.1562 8.2713ZM11.809 2.94655C10.2893 1.42967 10.4044 1.74345 8.23662 3.89877H10.8616L11.809 2.94655Z"
            />
          </svg>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1666 0V5.88168H19.3309C18.9284 4.77015 17.9345 3.98386 16.7724 3.98386H14.256C13.0939 3.98386 12.1 4.77015 11.6975 5.88168H10.3025C9.9 4.77015 8.90615 3.98386 7.744 3.98386H5.22761C4.06546 3.98386 3.07161 4.77015 2.66915 5.88168H1.83288V0H20.1666ZM22 9.99978C22 8.489 20.9763 7.23886 19.6445 7.03058H2.35551C1.023 7.23886 0 8.489 0 9.99978V16H1.83288V12.9998H20.1666V16H22V9.99978Z"
            />
          </svg>
        </div>
        <span class="space"> {{ $t('Hotel_P_Flight') }} </span>
      </li>
      <li
        @click="activeNav('things-to-do')"
        :class="{ active: activeItem == 'things-to-do' }"
      >
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-edu-c5=""
              d="M18 20H0L1.31707 17.3243H8.78049L14.0488 14.1329L17.561 15.9565L18 20Z"
            ></path>
            <path
              _ngcontent-edu-c5=""
              d="M4.50257 3.14916L2.52153 9.33084L4.39024 12.3093L3.07317 16.4124H6.30469L5.09651 15.4491L7.2802 12.6556L6.65082 10.3459L8.52582 11.4881L9.06517 15.786L11.7245 14.4747L10.7855 13.7558L10.7035 10.729L7.56888 7.33805L8.01648 6.33973L10.189 7.79989L14.0488 6.83852L13.6098 5.92671L10.56 5.32909L7.26019 2.74386L7.42168 2.05215L8.1331 2.20767C8.1331 2.20767 8.61357 0.296064 7.0867 0.0460008C7.0867 0.0460008 5.42664 -0.623901 4.50257 3.14916Z"
            ></path>
            <path
              _ngcontent-edu-c5=""
              d="M13.6098 7.75032L11.8537 8.20622L12.2927 13.2211H13.1707L13.6098 7.75032Z"
            ></path>
            <path
              _ngcontent-edu-c5=""
              d="M3.57193 2.76301C3.57193 2.76301 1.72066 2.2378 1.1996 3.66605C0.678544 5.09461 0.0983232 6.47448 0.0983232 6.47448L1.98647 7.58707L3.57193 2.76301Z"
            ></path>
          </svg>
        </div>
        <span class="space"> {{ 'Things To Do' }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 'flight',
      location: location.href,
    };
  },
  // watch: {
  //   location: {
  //     handler: function(val) {
  //       let targetLocation = [
  //         'flight',
  //         'vacation',
  //         'hotel',
  //         'flight-hotel',
  //         'things-to-do',
  //       ];
  //       targetLocation.forEach((element) => {
  //         if (val.includes(`${element}`)) {
  //           this.activeItem = element;
  //           this.$emit('activeItem', this.activeItem);
  //         }
  //       });
  //     },
  //     immediate: true,
  //   },
  // },
  methods: {
    activeNav(menuItem) {
      this.activeItem = menuItem;
      this.$emit('activeItem', this.activeItem);
    },
  },
};
</script>
