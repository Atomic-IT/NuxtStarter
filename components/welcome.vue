<template>
  <div class="welcome-container">
    <a href="https://github.com/Atomic-IT">
      <img src="/logo.png" alt="Atomic IT logo" width="150" height="150" />
      <h1>Nuxt Starter</h1>
    </a>
  </div>
</template>

<style scoped lang="scss">
.welcome-container {
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: black;

  a {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-decoration: none;

    h1 {
      color: white;
      font-weight: 200;
    }

    img {
      margin: 0 auto;
    }
  }
}
</style>
