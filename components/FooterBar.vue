<template>
    <footer class="block block--dark footer">
      <div class="container grid footer__sections">
        <section class="collapsible collapsible--expanded footer__section">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">منتجاتنا</h2>
            <span class="icon icon--white collapsible__chevron" @click="Toggler">
              <img src="~/assets/chevron.svg" alt="">
            </span>
          </div>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">متاجر إلكترونيه</a></li>
              <li><a href="#">تطبيقات إلكترونيه</a></li>
              <li><a href="#">تسويق وزيادة مبيعات</a></li>
            </ul>
          </div>
        </section>
        <section :class="isExpandedB ? 'collapsible collapsible--expanded footer__section' : 'collapsible footer__section' ">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">الشركه</h2>
            <span class="icon icon--white collapsible__chevron" @click="Toggler('B')">
              <img src="~/assets/chevron.svg" alt="">
            </span>
          </div>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">من نحن</a></li>
              <li><a href="#">الشركاء</a></li>
            </ul>
          </div>
        </section>
        <section :class="isExpandedC ? 'collapsible collapsible--expanded footer__section' : 'collapsible footer__section' ">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">الدعم</h2>
            <span class="icon icon--white collapsible__chevron" @click="Toggler('C')">
              <img src="~/assets/chevron.svg" alt="">
            </span>
          </div>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">إتصل بنا</a></li>
              <li><a href="#">الوظائف</a></li>
              <li><a href="#">الأسئله الشائعه</a></li>
            </ul>
          </div>
        </section>
        <section :class="isExpandedD ? 'collapsible collapsible--expanded footer__section' : 'collapsible footer__section' ">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">تجدنا على </h2>
            <span class="icon icon--white collapsible__chevron " @click="Toggler('D')">
              <img src="~/assets/chevron.svg" alt="">
            </span>
          </div>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">إنستاغرام</a></li>
              <li><a href="#">فايسبوك</a></li>
              <li><a href="#">تويتر</a></li>
            </ul>
          </div>
        </section>
        <div class="footer__brand">
          <p class="footer__copyright">جميع الحقوق محفوظه © متجري 2023-2024</p>
        </div>
      </div>
    </footer>
</template>

<script setup>
const isExpandedB = ref(false)
const isExpandedC = ref(false)
const isExpandedD = ref(false)
function Toggler(char) {
    if (char === 'B') {
        isExpandedB.value = !isExpandedB.value
    }
    if (char === 'C') {
        isExpandedC.value = !isExpandedC.value
    }
    if (char === 'D') {
        isExpandedD.value = !isExpandedD.value
    }
}

</script>

<style scoped>
a {
    text-decoration: none;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}

.list {
  list-style: none;
  padding-left: 0;
}


/* Footer */

.footer {
  background: #f49e94;
  padding-top: 10rem;
}

.footer a {
  color: #777;
  transition: color 0.3s;
}

.footer a:hover {
  color: rgb(91, 89, 89);
}

.footer__section {
  padding: 2rem;
  border-bottom: 1px solid #393939;
}

.footer__section .list {
  margin: 0;
}

.footer__heading {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.5;
}

.footer__brand {
  margin-top: 5rem;
  text-align: center;
}

.footer__brand img {
  max-width: 230px;
}

.footer__copyright {
  font-size: 2.1rem;
  color: white;
  opacity: 0.3;
}

/* Collapsibles */

.collapsible__header {
  display: flex;
  justify-content: space-between;
}

.collapsible__heading {
  margin-top: 0;
  font-size: 3rem;
}

.collapsible__chevron {
  transform: rotate(-90deg);
  transition: transform 0.3s;
}

.collapsible__content {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s;
}

.collapsible--expanded .collapsible__chevron {
  transform: rotate(0);
}

.collapsible--expanded .collapsible__content {
  max-height: 100%;
  opacity: 1;
}


@media screen and (min-width: 768px) {
  .footer {
    font-size: 1.9rem;
  }
  .footer__sections {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
  .footer .collapsible__chevron {
    display: none;
  }
  .footer .collapsible__content {
    opacity: 1;
    max-height: 100%;
  }
  .footer__brand {
    order: -1;
    margin-top: 1rem;
  }
  .footer__copyright {
    margin: 2rem;
    font-size: 2rem;
  }
  .footer__section {
    border: 0;
  }
  .footer__heading {
    font-size: 2rem;
  }
}

/* Blocks */

.block {
  --padding-vertical: 5rem;
  padding: var(--padding-vertical) 2rem;
}

.block__header {
  text-align: center;
  margin-bottom: 4rem;
}

.block__heading {
  margin-top: 0;
}

.block--dark {
  background: #f49e94;
  color: #7b858b;
}

.block--dark h1, .block--dark h2, .block--dark h3 {
  color: #e9e7f4;
}

/* Grids */

.grid {
  display: grid;
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