<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#about">О колледже</a>
          <a href="#courses">Курсы</a>
          <a href="#admissions">Поступление</a>
          <a href="#contact">Контакты</a>
        </div>
        <div class="footer-info">
          <p>&copy; {{ currentYear }} Колледж имени Примера. Все права защищены.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 2vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
