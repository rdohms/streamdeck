import { Plugin } from "@rdohms/streamdeck";
import * as config from "./streamdeck.json";
import hello from "./actions/Hello";

const plugin = new Plugin({ ...config, actions: [hello] });

export default plugin;
