<template>
  <div class="company">
    <p class="date">{{ exp.time }}</p>

    <div class="title_box">
      <a-icon type="laptop" class="title_icon" :style="{fontSize : '20px', color: color == null ? exp.color : color}"/>
      <span class="title">{{ exp.title }}</span>
    </div>

    <a-timeline>
      <a-timeline-item
          v-for="(item, index) in exp.items"
          :key="item + index"
          :color="color == null ? exp.color : color">{{ item }}
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
export default {
  name: "Company",
  props: {
    exp: {
      type: Object,
      default: () => {
        return {
          time: '2020.01 - 至今',
          title: '公司名',
          color: 'rgba(0,0,0,0.85)',
          items: [
              'XXXXXXXXXXXXX'
          ]
        }
      }
    },
    color: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.company {
  .title_box {
    margin-bottom: 1rem;

    .title_icon {
      margin-right: 10px;
      height: 20px;
      line-height: 20px;
    }

    .title {
      height: 20px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.85);
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
