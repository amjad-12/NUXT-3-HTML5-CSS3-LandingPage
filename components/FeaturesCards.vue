<template>
  <section class="block container">
    <header class="block__header">
      <h2>ميزاتنا الرئيسيه</h2>
      <p>
        تمتع بإداره عجله تحكم تجارتك الإلكترونيه الحامله لشعارك التجاري ونطاقك الخاص حيث يمكنك تطوير منتجاتك وخدماتك
        واستقبال الطلبات من أي مكان في العالم وفي أي وقت كان.
      </p>
    </header>
    <article class="grid grid--1x2 feature">
      <div class="feature__content" data-aos="fade-right">
        <span class="icon-container">
          <span class="icon icon--primary">
            <img src="~/assets/icons-iphone.png" alt="">
          </span>
        </span>
        <h3 class="feature__heading">احصل على تطبيق هاتفي سهل الإستخدام لمتجرك</h3>
        <p>
          امنح العملاء الأوفياء تجربه التسوق من خلال هواتفهم الذكيه عبر تطبيق متجرك الإلكتروني المزود بأدوات إضافيه مثل
          تفعيل الإشعارات
        </p>
        <a href="/" target="_blank" class="link-arrow">للمعلومات أكثر</a>
      </div>
      <picture data-aos="zoom-in-left">
        <img class="feature__image" src="~/assets/features-easy-use.jpg" alt="" />
      </picture>
    </article>
    <article class="grid grid--1x2 feature">
      <div class="feature__content" data-aos="fade-up">
        <span class="icon-container">
          <span class="icon icon--primary">
            <img src="~/assets/growth.svg" alt="">
          </span>
        </span>
        <h3 class="feature__heading">
          لإستراتيجيه الأفضل لرواد الأعمال</h3>
        <p>
          أكثر من 50 بالمئه من رواد الأعمال يمتلكون متاجر إلكترونيه خاصه بهم
        </p>
        <a href="/" target="_blank" class="link-arrow">للمعلومات أكثر</a>
      </div>
      <picture>
        <img class="feature__image" src="~/assets/increase.jpg" alt="" />
      </picture>
    </article>
    <article class="grid grid--1x2 feature">
      <div class="feature__content" data-aos="fade-up">
        <span class="icon-container">
          <span class="icon icon--primary">
            <img src="~/assets/computer.svg" alt="">
          </span>

        </span>
        <h3 class="feature__heading">أفضل إستثمارات العصر الحديث المتاجر الإلكترونيه</h3>
        <p>
          نظراً للأبحاث التي أجريت عام 2022 فقد تم شراء منتجات بقيمه 22 مليون دينار من المتاجر الإلكترونيه
        </p>
        <a href="/" target="_blank" class="link-arrow">للمعلومات أكثر</a>
      </div>
      <picture>
        <img class="feature__image" src="~/assets/features-phone-photo.jpg" alt="" />
      </picture>
    </article>
    <article class="grid grid--1x2 feature">
      <div class="feature__content" data-aos="fade-left">
        <span class="icon-container">

          <span class="icon icon--primary">
            <img src="~/assets/clock.svg" alt="" class="icon icon--primary">
          </span>
        </span>
        <h3 class="feature__heading">24/7 خدمه تسويقيه لزياده الأرباح</h3>
        <p>
          خدامتنا التسويقيه تعتمد على تجارب أكبر المتاجر الإلكترونيه في العالم
        </p>
        <a href="/" target="_blank" class="link-arrow">للمعلومات أكثر</a>
      </div>
      <picture data-aos="fade-right">
        <img class="feature__image" src="~/assets/sale.jpg" alt="">
      </picture>
    </article>
  </section>
</template>

<style scoped>
.feature__image {
  size: 180px;
  border-radius: 20px;
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

.container {
  max-width: 1140px;
  margin: 0 auto;
}

/* Grids */
.grid {
  display: grid;
}

@media screen and (min-width: 768px) {
  .grid--1x2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Features */

.feature {
  gap: 4rem 2rem;
  margin: 12rem 0;
}

.feature__heading {
  margin: 1rem 0;
}

@media screen and (min-width: 768px) {
  .feature:nth-of-type(even) .feature__content {
    order: 2;
  }
}

/* Icons */
.icon {
  width: 40px;
  height: 40px;
}

.icon--primary {
  fill: var(--color-icon);
}

.icon-container {
  background: #f3f9fa;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

/* Links */

a {
  text-decoration: none;
}

.link-arrow {
  color: #98b3ff;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bold;
}

.link-arrow::after {
  content: "➜";
  margin-left: 5px;
  transition: margin 0.15s;
}

.link-arrow:hover::after {
  margin-left: 10px;
}

@media screen and (min-width: 1024px) {
  .link-arrow {
    font-size: 2.5rem;
  }
}
</style>

