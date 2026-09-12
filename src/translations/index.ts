import { en } from "./en";
import { fr } from "./fr";
import { pt } from "./pt";
import type { Locale } from "../data/menuData";

export const translations = { fr, en, pt };
export type Translation = typeof fr;
export const isLocale = (value: string | null): value is Locale => value === "fr" || value === "en" || value === "pt";