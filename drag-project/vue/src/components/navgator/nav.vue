<template>
<div class="nav-container">
    <ul   @mouseout="actionSlideOutUp" id="nav-slot" :class="{'slideInDown animated':!classStyle.UlShowIn,'slideOutUp animated':!classStyle.UlShowIn}"  >
        <li :key="index"  v-for="{item,index} in listData">
            {{item}}
        </li>
    </ul>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { listData } from "../../config/htmlConfig";
import { Observable, Subject, timer, interval } from "rxjs";
import * as Rx from "rxjs";

import { debounce } from "rxjs/operators";

const nav = {
  name: "navSlot",
  data() {
    return {
      listData,
      classStyle: {
        UlShowIn: true
      }
    };
  },
  subscriptions() {
    this.showNav$ = new Subject();
    this.hideNav$ = new Subject();
    return {
      navActionMouseOver: this.hideNav$.pipe(debounce(() => interval(200))),
      // .subscribe(() => {
      //   this.actionSlideInDown();
      // })
      navActionMouseOut: this.showNav$.pipe(debounce(() => interval(200)))
    };
  },
  methods: {
    actionSlideInDown() {
      this.classStyle.UlShowIn = true;
    },
    actionSlideOutUp() {
      this.classStyle.UlShowIn = false;
    }
  },
  mounted() {
    console.log(this.subscriptions);
  }
};
export default Vue.extend(nav);
</script>
<style lang="scss" scoped>
ul,
li {
  list-style-type: none;
}
ul {
  width: 100%;
  height: 80px;

  display: flex;
  li {
    flex: 1 1 200px;
    background: red;
    border: 1px solid blue;
  }
  li:hover {
  }
}
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
.display-none {
  //   display: none;
  height: 1px;
}
</style>

