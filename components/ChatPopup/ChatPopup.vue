<template>
  <div class="ouvidoria">
    <div class="box-chat">
      <div class="box-body">
        <i class="bi bi-headset"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPopup",
};
</script>

<style lang="scss" scoped>
.ouvidoria {
  position: fixed;
    top: 10rem;
    right: 2rem;
    z-index: 9999;
    @media (max-width: 768px) {
      top: 15%;
      right: 0.2rem;
    }
  .box-chat {
    width: 3rem;
    height: 3rem;
    background-color: #37bec9;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
  }
    .box-chat:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.2);
    }
}
</style>
