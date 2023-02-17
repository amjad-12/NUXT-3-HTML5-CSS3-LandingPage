<template>
    <div>
        <section class="block block--dark block--skewed-right block-showcase">
            <header class="block__header">
                <h2>نوفر لك أفضل طريقه لإداره البزنس الإلكتروني الخاص بك</h2>
            </header>
            <div class="container grid grid--1x2">
                <picture data-aos="fade-right" class="block-showcase__image">
                    <img src="~/assets/Productimize_UI.png" alt="" />
                </picture>
                <ul class="list" data-aos="fade-up">
                    <li>
                        <div class="media">
                            <span class=" icon-container">
                                <span class="icon icon--primary">
                                    <img src="~/assets/snap.svg" alt="">
                                </span>
                            </span>
                            <div class="media__body">
                                <h3 class="media__title">لوحه تحكم سهله الإستخدام</h3>
                                <p>
                                    تتيح لك لوحه التحكم رؤيه جميع المبيعات وصافي الأرباح
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="media">
                            <span class=" icon-container">
                                <span class="icon icon--primary">
                                    <img src="~/assets/easy.svg" alt="">
                                </span>
                            </span>
                            <div class="media__body">
                                <h3 class="media__title">إضافه المنتجات بسهوله</h3>
                                <p>
                                    يمكنك إضافه المنتج و إرفاق صوره له بكل يسر
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="media">
                            <span class=" icon-container">
                                <span class="icon icon--primary">
                                    <img src="~/assets/notification.png" alt="">
                                </span>
                            </span>
                            <div class="media__body">
                                <h3 class="media__title">تنبيه نفاذ الكميه</h3>
                                <p>
                                    لا حاجه لمراقبة كميات المنتجات لأنه بفضل الخوارزميه المبتكره ستتلقى إشعار حالاً عند
                                    نفاذ الكميه
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style scoped>
.container {
    max-width: 1140px;
    margin: 0 auto;
}


/* Lists */

.list {
    list-style: none;
    padding-left: 0;
}

/* Icons */

.icon-container {
    /* background: #6679bb; */
    width: 64px;
    height: 64px;
    /* border-radius: 100%; */
    display: inline-flex;
    justify-content: center;
    align-items: center; 
}
.icon {
    width: 40px;
    height: 40px;
}

.icon--primary {
    fill: var(--color-primary);
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
    color: #8f97c0;
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

/* Showcase Block */

@media screen and (min-width: 768px) {
    .block-showcase .grid {
        grid-template-columns: 50% 50%;
    }

    .block-showcase__image {
        justify-self: end;
    }

    .block-showcase__image>img {
        width: auto;
        max-width: 700px;
    }
}

/* Media */

.media {
    display: flex;
    margin-bottom: 6rem;
}

.media__title {
    margin-top: 0;
}

.media__body {
    margin: 0 2rem;
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
</style>