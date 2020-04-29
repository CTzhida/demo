<template>
  <div class="circle">
    <div class="slotContainer">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.circle {
  width:150px;
  height:150px;
  border: 30px solid;
  border-top-color: #F92C33;
  border-right-color: #F8F8F8;
  border-bottom-color: #172540;
  border-left-color: #0e7A94;
  border-radius: 50%;
  transform:rotate(-45deg);
}
.slotContainer {
  transform: rotate(45deg);
  position: absolute;
  left: 40px;
  top: 40px;
}
</style>
