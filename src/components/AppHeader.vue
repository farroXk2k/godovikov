<template>
  <header class="college-header">
    <div class="container">
      <h1 class="logo">{{ collegeName }}</h1>
      <nav>
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      collegeName: 'Государственное бюджетное профессиональное образовательное учреждение города Москвы «Политехнический колледж им. Н.Н. Годовикова»',
      navLinks: [
        { name: 'Главная', url: '/' },
        { name: 'О колледже', url: '/about' },
        { name: 'Курсы', url: '/courses' },
        { name: 'Контакты', url: '/contact' }
      ]
    };
  }
};
</script>

<style scoped>
.college-header {
  background-color: #E7ECFF; /* Цвет фона */
  color: #fff; /* Цвет текста */
  padding: 20px 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  color:black;
  font-family: 'Open Sans', sans-serif;
}

.nav-links {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;

}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  color:black;
  font-family: 'Open Sans', sans-serif;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffcc00; /* Цвет при наведении */
}
</style>
