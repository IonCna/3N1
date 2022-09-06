import React from "react";
import { createRoot } from "react-dom/client";

import App from "./web/app"

const appDOM = document.getElementById("app")
const root = createRoot(appDOM)

root.render(<App/>)