<template>
    <div>
        <section class="block block--dark block--skewed-left hero">
            <div class="container grid grid--1x2">
                <header class="block__header hero__content">
                    <h1 data-aos="zoom-in-up" class="block__heading">
                        كن جزئاً من العالم الرقمي
                    </h1>
                    <p class="hero__tagline">
                        أنشئ موقعًا تجاريًا إلكترونيًا اليوم مجهز بأدوات فعاله وآمنه تساعدك على كسب عملاء جدد ولاحظ
                        بدءًا من الغد زياده مبيعاتك.
                    </p>
                    <a target="_blank" href="/" class="btn btn--accent btn--stretched">إبدأ الان</a>
                </header>
                <picture data-aos="zoom-in">
                    <img class="hero__image" src="../images/banner-hero.jpg" alt="" />
                </picture>
            </div>
        </section>
    </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.hero__tagline {
    font-size: 3rem;
    color: #8f97c0;
    letter-spacing: 1px;
    margin: 2rem 0 5rem;
}

.hero__image {
    width: 100%;
}


@media screen and (min-width: 768px) {
    .hero__content {
        text-align: left;
        align-self: center;
        padding-right: 7rem;
    }
}

@media screen and (min-width: 1024px) {
    .hero {
        padding-top: 0;
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
    background: #d9dfff;
    color: #7b858b;
}

.block--dark h1,
.block--dark h2,
.block--dark h3 {
    color: #6679bb;
}

.block--skewed-right {
    padding-bottom: calc(var(--padding-vertical) + 4rem);
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 95%);
}

.block--skewed-left {
    padding-bottom: calc(var(--padding-vertical) + 4rem);
    clip-path: polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%);
}

.container {
    max-width: 1140px;
    margin: 0 auto;
}

/* Hero */

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
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    padding: 2rem 3rem;
    border: 0;
    border-radius: 40px;
    cursor: pointer;
    white-space: nowrap;
    margin: 1rem 0;
}

.btn--accent {
    background: var(--color-accent);
    color: #fff;
}

.btn--accent:hover {
    background: #f49d8f;
}

@media screen and (min-width: 1024px) {
    .btn {
        font-size: 2.2rem;
    }
}
</style>