<template>
        <div class="container">
      <div class="callout callout--primary callout-signup">
        <div class="grid grid--1x2">
          <div class="callout__content">
            <h2 class="callout__heading">الآن هل أنت جاهز لدخول العالم الحديث</h2>
            <p>
                سنرشدك خطوه بخطوه لمدة سنه كامله وهذه ستكون كهديه مننا وتشجيع لك لبدء عملك الخاص
            </p>
          </div>
          <a
            target="_blank"
            href="/"
            class="btn btn--secondary btn--stretched"
            >لنبدأ الآن</a
          >
        </div>
      </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}


.container {
  max-width: 1140px;
  margin: 0 auto;
}

/* Callouts */

.callout {
  padding: 4rem;
  border-radius: 5px;
}

.callout--primary {
  background: #d9dfff;
  color: #8f97c0;
}

.callout__heading {
  color: #6679bb;
  margin-top: 0;
  font-size: 3rem;
}

.callout .btn {
  justify-self: center;
  align-self: center;
}

.callout__content {
  text-align: center;
}

@media screen and (min-width: 768px) {
  .callout .grid--1x2 {
    grid-template-columns: 1fr auto;
  }
  .callout__content {
    text-align: left;
  }
  .callout .btn {
    justify-self: start;
    margin: 0 2rem;
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
.btn--secondary {
  background: #f49d8f;
  color: #fff;
}

.btn--secondary:hover {
  background: #ffa5a5;
}
.btn:hover::before {
  background: #ffa5a5;
  content: "⬅⬅";
  transition: margin 0.15s;
}


.btn--stretched {
  padding-left: 6rem;
  padding-right: 6rem;
}

/* Sign-up Callout */

.callout-signup {
  transform: translateY(5rem);
}

.grid {
  display: grid;
}
</style>