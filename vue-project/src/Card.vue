<script setup>
import {ref, reactive, computed } from 'vue';

const appData = reactive({
  basePrice: 100,
  serviceTip: 10,
  order: [], // New array to store selected items
  cards: [
    {
      title: "醬油拉麵",
      cover: "http://www.tabirai.net/tabirai-uploader/img/0005408/s1_0005408.jpg",
      price: 150,
      soldOut: true,
      des: "湯汁清淡卻風味濃郁，搭配Q彈的麵條、豬肉叉燒、竹筍、蔥花等配料，呈現出豐富的口感與層次。",
      expanded: false
    },
    {
      title: "豚骨拉麵",
      cover: "http://3.bp.blogspot.com/-aj0ideQcly0/VfZ5RvLGyDI/AAAAAAAAWzE/Vy6U0R6vs90/s1600/IMG_2848.jpg",
      price: 250,
      des: "以豬骨熬製的濃郁湯頭，滑順香濃，搭配Q彈麵條和豬肉叉燒，口感豐富。",
      expanded: false
    },
    {
      title: "南洋咖哩拉麵",
      cover: "https://taiwan.sharelife.tw/tw-feat-store-img/36306/0636240323160508.jpg",
      price: 300,
      des: "融合南洋風味的咖哩湯底，香料濃郁，與麵條和多樣配料形成獨特風味。",
      expanded: false
    },
    {
      title: "味噌叉燒拉麵",
      cover: "https://yaki125-tw.weebly.com/uploads/1/2/9/5/129539494/666-2.jpg",
      price: 150,
      des: "以味噌為基底的濃厚湯頭，鹹香適中，搭配豬肉叉燒和蔬菜，滋味濃郁。",
      expanded: false
    },
    {
      title: "蝦醬豚骨拉麵",
      cover: "http://d10pyp7ylo9bub.cloudfront.net/2017/06/tokyofruitramen_papapapapain1.jpg",
      price: 250,
      des: "豬骨湯底加入蝦醬，海鮮與肉類風味完美結合，口感鮮香濃郁。",
      expanded: false
    },
    {
      title: "豚骨叉燒拉麵",
      cover: "https://farm1.static.flickr.com/380/32022985490_3e2bfbe774_b.jpg",
      price: 300,
      des: "濃厚豚骨湯搭配軟嫩叉燒，湯頭滑順、香氣四溢，滋味豐富。",
      expanded: false
    }
  ]
});
const check = ref(true)
function toggle(){
  check.value = !check.value;
}
// Function to get a short description
const getShortDescription = (des, expanded) => {
  return expanded ? des : des.slice(0, 20) + '...';
};

// Function to add a card to the order
const addToOrder = (card) => {
  appData.order.push({ title: card.title, price: card.price });
};

// Computed property to calculate the total price of the order
const totalOrderPrice = computed(() => {
  return appData.order.reduce((total, item) => total + item.price, 0);
});

</script>

<template>
  <div class="container">

    <div class="menu">
      <div class="banner">
        <img
          src="https://scontent.frmq2-1.fna.fbcdn.net/v/t39.30808-6/460117571_2057237291338777_4036046374938057312_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=B5iC5iCW00oQ7kNvgE-q07x&_nc_zt=23&_nc_ht=scontent.frmq2-1.fna&_nc_gid=A6eyPLVoMxs-_zmj0rwinKe&oh=00_AYDGYAGI9OEBIBSQBEgLbNWvm-iheWvQZjg7JyvVI0xSjg&oe=671AA2F5"
          alt="">
      </div>
      <div class="cards">
        <div class="card" v-for="card in appData.cards" :key="card.title">
          <div class="img-container">
            <img :src="card.cover" :alt="card.title">
          </div>

          <h3>{{ card.title }}</h3>
          <p class="price"><strong>價格:</strong> ${{ card.price }}<span>(未稅)</span></p>

          <p>{{ getShortDescription(card.des, card.expanded) }} <button @click="card.expanded = !card.expanded">
              {{ card.expanded ? '縮小' : '閱讀更多' }}
            </button></p>

          <!-- Add to Order Button -->
          <button @click="addToOrder(card)">加入訂單</button>
          <button @click="toggle">查看</button>
          <h3 v-if="check">55</h3>
          <h3 v-else>555</h3>

        </div>
      </div>

      <!-- Display order summary -->
      <div class="order-summary" v-if="appData.order.length">
        <h3>訂單摘要:</h3>
        <ul>
          <li v-for="item in appData.order" :key="item.title">
            {{ item.title }} - ${{ item.price }}
          </li>
        </ul>
        <p><strong>總金額:</strong> ${{ totalOrderPrice }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
}

.banner img {
  width: 100%;
  height: fit-content;
}

.price {
  text-align: left;
  display: inline;
  width: 100%;
  padding-left: 2.5rem !important;
  font-size: 1rem !important;
  font-weight: bold;
  color: #e45c5c;
}

.menu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}

.card button {
  border: 0;
  font-size: 14px;
  background: none;
  opacity: 0.5;
  cursor: pointer;
}

.card {
  max-width: 300px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 0 0 1rem 0;
  border-radius: .5rem;
  margin: .25rem;
  overflow: hidden;
}

.img-container {
  overflow: hidden;
  height: 200px;
}

.card img {
  width: 100%;
}

.card h3 {
  padding: .75rem 1rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.card p {
  padding: .25rem .75rem .75rem;
  font-size: 14px;
  letter-spacing: 1px;
}

h1, h2, h3, p, a {
  margin: 0;
  padding: 0;
}

.order-summary {
  margin-top: 2rem;
  text-align: left;
}

.order-summary ul {
  list-style: none;
  padding-left: 0;
}

.order-summary li {
  margin-bottom: 0.5rem;
}

</style>
