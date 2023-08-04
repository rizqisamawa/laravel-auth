import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: ["resources/routes/**", "routes/**", "resources/views/**"],
        }),
    ],
});

/*
   -  dont forget to add script in tag head @vite('resources/js/app.js')
   -  this script just for development
*/
