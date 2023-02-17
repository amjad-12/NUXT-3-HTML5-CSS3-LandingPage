<template>
  <div data-aos="fade-up" class="block container block-plans">
    <div class="grid grid--1x3">
      <div class="plan">
        <div class="card card--secondary">
          <header class="card__header">
            <h3 class="plan__name">تبدأ من</h3>
            <span class="plan__price">$250</span>
            <span class="plan__billing-cycle">/month</span>
            <span class="badge badge--secondary badge--small">15% خصم</span>
            <span class="plan__description">الباقه المناسبه للمتاجر الصغيره</span>
          </header>
          <div class="card__body">
            <ul class="list list--tick">
              <li class="list__item">حجز إسم نطاق إلكتروني</li>
              <li class="list__item">شهاده حمايه مجانيه</li>
              <li class="list__item">%0 عموله على الطلبات</li>
              <li class="list__item">إضافه حتى 400 منتج</li>
            </ul>
            <button class="btn btn--outline btn--block">إشترك الآن</button>
          </div>
        </div>
      </div>
      <div class="plan plan--popular">
        <div class="card card--primary">
          <header class="card__header">
            <h3 class="plan__name">تبدأ من</h3>
            <span class="plan__billing-cycle">/month</span>
            <span class="plan__price">$350</span>
            <span class="badge badge--primary badge--small">10% خصم</span>
            <span class="plan__description"> بريميوم)أفضل خيار لجذب العملاء)</span>
          </header>
          <div class="card__body">
            <ul class="list list--tick">
              <li class="list__item">الربط مع شركات التوصيل</li>
              <li class="list__item">إداره نظام نقاط البيع (P.O.S)</li>
              <li class="list__item">برنامج الولاء لإسترداد المبالغ المدفوعه</li>
              <li class="list__item">إضافه حتى 1500 منتج</li>
            </ul>
            <button class="btn btn--outline btn--block">إشترك الآن</button>
          </div>
        </div>
      </div>
      <div class="plan">
        <div class="card card--secondary">
          <header class="card__header">
            <h3 class="plan__name">تبدأ من</h3>
            <span class="plan__price">$450</span>
            <span class="plan__billing-cycle">/month</span>
            <span class="badge badge--secondary badge--small">25% خصم</span>
            <span class="plan__description">تطبيق الموبايل سهل الإستخدام</span>
          </header>
          <div class="card__body">
            <ul class="list list--tick">
              <li class="list__item">ربط مع إنستغرام</li>
              <li class="list__item">إشعارات تطبيق الموبايل</li>
              <li class="list__item">سهوله إستخدام</li>
              <li class="list__item">تصميم فريد</li>
            </ul>
            <button class="btn btn--outline btn--block">إشترك الآن</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block {
  --padding-vertical: 5rem;
  padding: var(--padding-vertical) 2rem;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

/* Cards */

.card {
  border-radius: 7px;
  box-shadow: 0 0 20px 10px #f3f3f3;
  overflow: hidden;
}

.card__header,
.card__body {
  padding: 4rem 7%;
}

.card--primary .card__header {
  background: var(--color-primary);
  color: #fff;
}

.card--secondary .card__header {
  background: var(--color-secondary);
  color: #fff;
}

.card--primary .badge--primary {
  background: #f75151;
}

.card--secondary .badge--secondary {
  background: #61939c;
}




/* Plans Block */

.block-plans .grid {
  gap: 8rem 4rem;
}

.block-plans .card {
  max-width: 500px;
  margin: 0 auto;
}

/* Plans */

.plan {
  transition: transform 0.2s ease-out;
}

.plan__name {
  color: #fff;
  margin: 0;
  font-weight: 500;
  font-size: 3rem;
}

.plan__price {
  font-size: 5rem;
}

.plan__billing-cycle {
  font-size: 2rem;
  font-weight: 300;
  opacity: 0.8;
  margin-right: 1rem;
}

.plan__description {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
  display: block;
}

.plan .list__item {
  margin-bottom: 2rem;
}

.plan--popular .card__header {
  position: relative;
}

.plan--popular .card__header::before {
  content: url(~/images/popular.svg);
  width: 40px;
  display: inline-block;
  position: absolute;
  top: -6px;
  right: 5%;
}

.plan:hover {
  transform: scale(1.05);
}

.plan--popular:hover {
  transform: scale(1.15);
}

@media screen and (min-width: 1024px) {
  .plan--popular {
    transform: scale(1.1);
  }

  .plan__name {
    font-size: 3rem;
  }

  .plan__price {
    font-size: 5rem;
  }

  .plan__billing-cycle {
    font-size: 1.6rem;
  }

  .plan__description {
    font-size: 2rem;
  }
}

/* List */
.list {
  list-style: none;
  padding-left: 0;
  color: var(--color-h2);
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

/* Grids */

.grid {
  display: grid;
}

@media screen and (min-width: 768px) {
  .grid--1x2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .grid--1x3 {
    grid-template-columns: repeat(3, 1fr);
  }
}


/* Buttons */
.btn {
  border-radius: 40px;
  border: 0;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 1rem 0;
  outline: 0;
  padding: 2rem 4vw;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
}


.btn--outline {
  background: #fff;
  color: var(--color-headings);
  border: 2px solid var(--color-headings);
}

.btn--outline:hover {
  background: var(--color-headings);
  color: #fff;
}

.btn--block {
  width: 100%;
  display: inline-block;
}

@media screen and (min-width: 1024px) {
  .btn {
    font-size: 1.5rem;
  }
}

/* Badges */
.badge {
  border-radius: 20px;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem 2rem;
  white-space: nowrap;
}

.badge--primary {
  background: var(--color-primary);
  color: #fff;
}

.badge--secondary {
  background: var(--color-secondary);
  color: #fff;
}

.badge--small {
  font-size: 1.6rem;
  padding: 0.5rem 1.5rem;
}

@media screen and (min-width: 1024px) {
  .badge {
    font-size: 1.5rem;
  }

  .badge--small {
    font-size: 1.2rem;
  }
}
</style>