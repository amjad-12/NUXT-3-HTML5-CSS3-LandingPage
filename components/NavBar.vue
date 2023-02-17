<template>
  <div>
    <header>
      <nav :class="isExpanded ? 'nav collapsible collapsible--expanded' : 'nav collapsible'">
        <a href="/" class="nav__brand">متجري</a>
        <span class="icon icon--white nav__toggler" @click="Toggler">
          <img src="~/assets/menu.svg" alt="">
        </span>
        <ul class="list nav__list collapsible__content">
          <li class="nav__item">
            <a target="_blank" href="/">الرئيسيه</a>
          </li>
          <li class="nav__item">
            <a target="_blank" href="/">الميزات</a>
          </li>
          <li class="nav__item">
            <a target="_blank" href="/">عملاؤنا</a>
          </li>
          <li class="nav__item">
            <a target="_blank" href="/">الأسعار</a>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script setup>
const isExpanded = ref(false)
function Toggler() {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
a {
  text-decoration: none;
}

/* Navigation Bar */
.nav {
  background: #f49e94;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
}

.nav__list {
  width: 100%;
  margin: 0;
}

.nav__item {
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #d85c4984;
}

.nav__item:last-of-type {
  border-bottom: none;
}

.nav__item>a {
  color: #e9e7f4;
  transition: color 0.3s;
}

.nav__item>a:hover {
  color: #fff;
}

.nav__toggler {
  opacity: 0.5;
  transition: box-shadow 0.15s;
  cursor: pointer;
}

.collapsible__content {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s;
}

.nav.collapsible--expanded .nav__toggler {
  opacity: 1;
  box-shadow: 0 0 0 3px #666;
  border-radius: 5px;
}

.collapsible--expanded .collapsible__content {
  max-height: 100%;
  opacity: 1;
}

.nav__brand {
  transform: translateX(19px);
  width: 150px;
  color: white;
}

@media screen and (min-width: 768px) {
  .nav__toggler {
    display: none;
  }

  .nav__list {
    width: auto;
    display: flex;
    font-size: 2.3rem;
    max-height: 100%;
    opacity: 1;
  }

  .nav__item {
    border: 0;
  }
}

/* Lists */
.list {
  list-style: none;
  padding-left: 0;
  color: var(--color-h2);
}

.list--inline .list__item {
  display: inline-block;
  margin-right: 2rem;
}

.list--tick {
  list-style-image: url(/images/tick.svg);
  padding-left: 3rem;
}

.list--tick .list__item {
  padding-left: 0.5rem;
  margin-bottom: 1rem;
}

@media screen and (min-width: 1024px) {
  .list--tick .list__item {
    padding-left: 0;
  }
}

/* Icons */
.icon {
  width: 40px;
  height: 40px;
}

.icon--white {
  fill: #fff;
}
</style>