<template>
  <div class="luckdraw-content">
    <!-- 滚动号码 -->
    <ul class="luckdraw-scroll">
      <li v-for="(item, i) in list" :key="i" :class="{ anim: animate && i === 0 }">
        <span class="lkq-name">{{ item.phone }}</span>
      </li>
    </ul>

    <!-- 抽奖弹窗 -->
    <div class="turntable">
      <!-- 跑马灯 -->
      <svg class="bulb" viewBox="-6 -6 316 316" fill="currentColor" fill-rule="evenodd">
        <g class="bulb-1">
          <circle cx="10" cy="10" r="4" />
          <circle cx="78" cy="4" r="4" />
          <circle cx="152" cy="4" r="4" />
          <circle cx="226" cy="4" r="4" />
          <circle cx="294" cy="10" r="4" />
          <circle cx="4" cy="89" r="4" />
          <circle cx="4" cy="173" r="4" />
          <circle cx="4" cy="258" r="4" />
          <circle cx="41" cy="300" r="4" />
          <circle cx="115" cy="300" r="4" />
          <circle cx="189" cy="300" r="4" />
          <circle cx="263" cy="300" r="4" />
          <circle cx="300" cy="258" r="4" />
          <circle cx="300" cy="173" r="4" />
          <circle cx="300" cy="89" r="4" />
        </g>
        <g class="bulb-2 ">
          <circle cx="41" cy="4" r="4" />
          <circle cx="115" cy="4" r="4" />
          <circle cx="189" cy="4" r="4" />
          <circle cx="263" cy="4" r="4" />
          <circle cx="4" cy="46" r="4" />
          <circle cx="4" cy="131" r="4" />
          <circle cx="4" cy="215" r="4" />
          <circle cx="10" cy="294" r="4" />
          <circle cx="294" cy="294" r="4" />
          <circle cx="300" cy="215" r="4" />
          <circle cx="300" cy="131" r="4" />
          <circle cx="300" cy="46" r="4" />
          <circle cx="78" cy="300" r="4" />
          <circle cx="152" cy="300" r="4" />
          <circle cx="226" cy="300" r="4" />
        </g>
      </svg>

      <!-- 奖品 -->
      <ul class="awards-list">
        <li
          v-for="(item, key) in awardList" :key="item.id" class="awards-item"
          :class="{ 'awards-item-draw': key === 4, 'run-item': item.runId === current }"
        >
          <div v-if="key === 4" class="draw-btn" @click="handleStart">
            <span class="draw-btn-text">点击抽奖</span>
          </div>
          <div v-else>
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
// https://github.com/vincentzyc/vue3-demo/blob/main/src/views/LuckDraw.vue

interface AwardTypes {
  id: number
  runId: number
  name: string
}

const initSpeed = 200 // 初始速度
const diff = 20 // 速度变化的值，值越大，变化地越快
const minRotateTime = 2.5 // 抽奖动画最少转动时间
const rotateTime = 5 // 抽奖动画转动时间

let speed = 0 // 变化速度
let time = 0 // 记录开始抽奖的时间
let isRuningLucky = false // 是否正在抽奖
let award: AwardTypes // 抽中的奖品

const animate = ref(false) // 中奖名单滚动动画控制
const current = ref(0) // 当前转动的位置
const list = reactive([
  {
    phone: '186****2336抽中0元话费',
  },
  {
    phone: '166****2336抽中1元话费',
  },
  {
    phone: '156****2336抽中2元话费',
  },
])
const awards = reactive([
  {
    id: 1,
    runId: 0,
    name: '潘多拉音箱',
  },
  {
    id: 2,
    runId: 1,
    name: '小酷M1耳机',
  },
  {
    id: 3,
    runId: 2,
    name: '酷狗VIP会员',
  },
  {
    id: 4,
    runId: 7,
    name: '8元话费',
  },
  {
    id: 5,
    runId: 3,
    name: '12元话费',
  },
  {
    id: 6,
    runId: 6,
    name: '谢谢参与1',
  },
  {
    id: 7,
    runId: 5,
    name: '4元话费',
  },
  {
    id: 8,
    runId: 4,
    name: '谢谢参与2',
  },
])

const awardList = computed<typeof awards>(() => {
  const newArr = JSON.parse(JSON.stringify(awards))
  newArr.splice(4, 0, { name: 'drawBtn' })
  return newArr
})

// 中奖名单滚动
function scroll() {
  animate.value = true
  setTimeout(() => {
    list.push(list[0])
    list.shift()
    animate.value = false
  }, 500)
}

function move() {
  const timer = setTimeout(() => {
    current.value++
    if (current.value > 7) current.value = 0
    // 若抽中的奖品id存在，并且转动时间大于2.5秒后，则开始减速转动
    if (award?.id && (Date.now() - time) / 1000 > minRotateTime) {
      console.log('奖品出来了')
      speed += diff // 转动减速
      // 若转动时间超过5秒，等到当前格子是对应奖品id数组，则停下来
      if (
        (Date.now() - time) / 1000 > rotateTime
        && award.runId === current.value
      ) {
        clearTimeout(timer)
        setTimeout(() => {
          isRuningLucky = false
          // 这里写停下来要执行的操作（弹出奖品框之类的）
          const getAward: AwardTypes | undefined = awards.find(
            v => v.id === award.id,
          )
          if (getAward) {
            console.log(
              `您抽中的奖品是${getAward.name},奖品id是${getAward.id}`,
            )
          }
        }, 400)
        return
      }
      // 若抽中的奖品不存在，则加速转动
    } else {
      if (speed >= 50) speed -= diff // 转动加速
    }
    move()
  }, speed)
}

// 请求接口，模拟一个抽奖数据(假设请求时间为2s)
function drawAward() {
  setTimeout(() => {
    const awardId = Math.ceil(Math.random() * 8) // 随机奖品
    const getAward = awards.find(v => v.id === awardId)
    if (getAward) award = getAward
    console.log('返回的抽奖结果是', award)
  }, 2000)
  move()
}

// 开始抽奖
function handleStart() {
  if (isRuningLucky) {
    console.log('正在抽奖中...')
    return
  }

  if (Number.isNaN(Number(initSpeed))) {
    return false
  }

  speed = initSpeed
  isRuningLucky = true
  time = Date.now()
  drawAward()
  console.log('开始抽奖')
}

onMounted(() => {
  setInterval(scroll, 2000)
})
</script>

<style lang="scss" scoped>
.luckdraw-scroll {
  position: relative;
  height: 40px;
  margin: 30px auto;
  padding: 0;
  overflow: hidden;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  list-style: none;
  background: #bcbcc1;
  border-radius: 20px;

  .lkq-name {
    margin: 0 auto;
    color: #fff;
  }

  .anim {
    margin-top: -40px;
    transition: all 0.5s linear;
  }
}

.luckdraw-content {

  // 转盘
  .turntable {
    position: relative;
    width: 320px;
    height: 320px;
    margin: 30px auto;
    padding: 20px;
    background: #fed479;
    border-radius: 20px;

    .awards-list {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
      gap: 3%;
      height: 100%;
    }

    .awards-item {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #d65c23;
      font-size: 12px;
      background-color: #fff;
      border: 3px solid #fff;
      border-color: #fff;
      border-radius: 25%;
      transition: border-color 0.1s;
    }

    .run-item {
      border-color: #ff7051;
    }

    .awards-item-draw {
      overflow: hidden;
      background: #963434;
      border: none;
    }

    .draw-btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: #fff;
      background: #ff7051;
      border: 3px solid #ff7051;
      border-radius: 25%;
      animation: draw-btn-jump 0.5s infinite;
    }

  }
}

.bulb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.bulb .bulb-1 {
  animation: bulb-animation 0.5s -0.25s infinite;
}

.bulb .bulb-2 {
  animation: bulb-animation 0.5s infinite;
}

@keyframes bulb-animation {
  0% {
    color: #FFF;
  }

  50% {
    color: #FFE37F;
  }

  100% {
    color: #FFF;
  }
}

@keyframes draw-btn-jump {
  0% {
    top: -6px;
  }

  50% {
    top: 0;
  }

  100% {
    top: -6px;
  }
}
</style>