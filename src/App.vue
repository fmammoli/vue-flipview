<template>
  <div
    id="app"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false"
  >
    <Flipbook
      class="flipbook"
      :pages="pages"
      :pagesHiRes="pagesHiRes"
      :startPage="pageNum"
      v-slot="flipbook"
      ref="flipbook"
      @flip-left-start="onFlipLeftStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-right-start="onFlipRightStart"
      @flip-right-end="onFlipRightEnd"
      @zoom-start="onZoomStart"
      @zoom-end="onZoomEnd"
    >
      <div class="action-bar">
        <left-icon
          class="btn left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft"
        />
        <plus-icon
          class="btn plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn"
        />
        <span class="page-num">
          Page {{ flipbook.page }} of {{ flipbook.numPages }}
        </span>
        <minus-icon
          class="btn minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut"
        />
        <right-icon
          class="btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
        />
      </div>
    </Flipbook>
  </div>
</template>

<script>
import "vue-material-design-icons/styles.css";
import LeftIcon from "vue-material-design-icons/ChevronLeftCircle";
import RightIcon from "vue-material-design-icons/ChevronRightCircle";
import PlusIcon from "vue-material-design-icons/PlusCircle";
import MinusIcon from "vue-material-design-icons/MinusCircle";
import Flipbook from "flipbook-vue";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";

// import img1hi from "./assets/1hi.jpeg";
// import img2hi from "./assets/2hi.jpeg";
// import img3hi from "./assets/3hi.jpeg";
// import img4hi from "./assets/4hi.jpeg";
// import img5hi from "./assets/5hi.jpeg";
// import img6hi from "./assets/6hi.jpeg";

export default {
  name: "app",
  components: { Flipbook, LeftIcon, RightIcon, PlusIcon, MinusIcon },
  data() {
    return {
      pages: [],
      pagesHiRes: [],
      hasMouse: true,
      pageNum: null,
    };
  },
  methods: {
    onFlipLeftStart: (page) => console.log("flip-left-start", page),
    onFlipLeftEnd: (page) => {
      console.log("flip-left-end", page);
      window.location.hash = "#" + page;
    },
    onFlipRightStart: (page) => console.log("flip-right-start", page),
    onFlipRightEnd: (page) => {
      console.log("flip-right-end", page);
      window.location.hash = "#" + page;
    },
    onZoomStart: (zoom) => console.log("zoom-start", zoom),
    onZoomEnd: (zoom) => console.log("zoom-end", zoom),
    setPageFromHash() {
      const n = parseInt(window.location.hash.slice(1), 10);
      if (isFinite(n)) {
        return (this.pageNum = n);
      }
    },
  },

  mounted() {
    console.log("aaa");
    window.addEventListener("keydown", (ev) => {
      const flipbook = this.$refs.flipbook;
      if (!flipbook) {
        return;
      }
      if (ev.keyCode === 37 && flipbook.canFlipLeft) {
        flipbook.flipLeft();
      }
      if (ev.keyCode === 39 && flipbook.canFlipRight) {
        return flipbook.flipRight();
      }
    });

    console.log(this.pages);
    setTimeout(() => {
      // this.pages = [
      //   null,
      //   process.env.BASE_URL + "1.jpeg",
      //   process.env.BASE_URL + "2.jpeg",
      //   process.env.BASE_URL + "3.jpeg",
      //   process.env.BASE_URL + "4.jpeg",
      //   process.env.BASE_URL + "5.jpeg",
      //   process.env.BASE_URL + "6.jpeg",
      // ];
      // this.pagesHiRes = [
      //   null,
      //   process.env.BASE_URL + "1hi.jpeg",
      //   process.env.BASE_URL + "2hi.jpeg",
      //   process.env.BASE_URL + "3hi.jpeg",
      //   process.env.BASE_URL + "4hi.jpeg",
      //   process.env.BASE_URL + "5hi.jpeg",
      //   process.env.BASE_URL + "6hi.jpeg",
      // ];
    }, 1);
    this.pages = [null, img1, img2, img3, img4, img5, img6];
    //this.pagesHiRes = [null, img1hi, img2hi, img3hi, img4hi, img5hi, img6hi];
    window.addEventListener("hashchange", this.setPageFromHash);
    this.setPageFromHash();
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ccc;
  overflow: hidden;
}
a {
  color: inherit;
}
.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.action-bar .btn {
  font-size: 30px;
  color: #999;
}
.action-bar .btn svg {
  bottom: 0;
}
.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}
.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}
.action-bar .btn:active {
  filter: none !important;
}
.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}
.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}
.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}
.credit {
  font-size: 12px;
  line-height: 20px;
  margin: 10px;
}
.flipbook .viewport {
  width: 90vw !important;
  height: calc(100vh - 50px - 40px) !important;
}
</style>
