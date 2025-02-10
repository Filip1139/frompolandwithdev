import type { InjectionKey } from "vue";
import type { Product } from "./types";

export const currentProductKey = Symbol() as InjectionKey<Product>;
