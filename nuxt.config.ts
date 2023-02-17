// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/css/my-variables.css", "@/assets/css/normalize.css"],
    modules: ["nuxt-icons"],
    plugins: [
      { src: '~/plugins/aos', mode: 'client' },
    ],
    // plugins: [
    //   { src: "@/plugins/aos", mode: "client" },
    // ],
    // purgeCSS: {
    //   whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
    // }
    
  // head: {
  //     link: [
  //         {
  //             rel: "stylesheet",
  //             href: "<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@500;600;700&family=Inter:wght@400;700&display=swap" rel="stylesheet">"
  //         }
  //     ]
  // }
});
