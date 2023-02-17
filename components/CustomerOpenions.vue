<template>
    <section class="block" data-aos="zoom-in">
      <header class="block__header">
        <h2>ماذا يقول عملاؤنا عن خدماتنا</h2>
        <p>
          العملاء الأوفياء هم البزنس الصحيح
        </p>
      </header>
      <div class="container">
        <div class="card testimonial">
          <div class="grid grid--1x2">
            <div class="testimonial__image">
              <img
                src="~/assets/happy-girl-2.jpg"
                alt="A happy, smiling customer"
              />
              <span class="icon-container icon-container--accent">
                <span class="icon icon--white icon--small">
                  <img src="~/assets/quotes.svg" alt="">
                </span>
              </span>
            </div>
            <blockquote class="quote">
              <p class="quote__text">
                لقد تعاملت مع موقع متجري والآن أنا سعيده جدا لأن أرباحي إزدادت جدا بفضل مهارتهم التسويقه 
              </p>
              <footer>
                <div class="media">
                  <div class="media__image">
                    <span class="icon icon--primary quote__line">
                      <img src="~/assets/line.svg" alt="">
                    </span>
                  </div>
                  <div class="media__body">
                    <h3 class="media__title quote__author">ترانيم رندر</h3>
                    <p class="quote__organization">شركة التساؤل</p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.container {
  max-width: 1140px;
  margin: 0 auto;
}

.card {
  border-radius: 7px;
  box-shadow: 0 0 20px 10px #f3f3f3;
  overflow: hidden;
  background: #ffffff;
}
/* Icons */

.icon {
  width: 40px;
  height: 40px;
}

.icon--primary {
  fill: var(--color-primary);
}

.icon--small {
  width: 30px;
  height: 30px;
}


.icon--white {
  fill: #fff;
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

.icon-container--accent {
  background: #a66589;
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

/* Testimonials */
.testimonial {
  padding: 3rem;
}

.testimonial .quote {
  margin: 2rem 0;
  font-size: 110%;
}

.testimonial__image {
  position: relative;
  margin: 0 3rem;
}

.testimonial__image>.icon-container {
  position: absolute;
  top: 3rem;
  right: -32px;
}

@media screen and (min-width: 768px) {
  .testimonial__image {
    margin: 0;
  }
  .testimonial .quote {
    margin: 5rem 0 0 6rem;
    font-size: 120%;
    line-height: 1.5;
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

/* Quotes */

.quote {
  font-size: 3rem;
  font-style: italic;
  color: #d7dc7e;
  line-height: 1.3;
}

.quote__text::before {
  content: open-quote;
}

.quote__text::after {
  content: close-quote;
}

.quote__author {
  font-size: 2rem;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 0;
}

.quote__organization {
  color: #000000;
  opacity: 0.4;
  font-size: 1.5rem;
  font-style: normal;
}

.quote__line {
  position: relative;
  bottom: 10px;
}

@media screen and (min-width: 1024px) {
  .quote {
    font-size: 2rem;
  }
  .quote__author {
    font-size: 2.4rem;
  }
  .quote__organization {
    font-size: 1.6rem;
  }
}


/* Media */
.media {
  display: flex;
  margin-bottom: 4rem;
}

.media__title {
  margin-top: 0;
}

.media__body {
  margin: 0 2rem;
}

.media__image {
  margin-top: 1rem;
}
</style>