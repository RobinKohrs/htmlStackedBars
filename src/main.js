import "./app.css";
import App from "./App.svelte";
import ExampleApp from "./ExampleApp.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
