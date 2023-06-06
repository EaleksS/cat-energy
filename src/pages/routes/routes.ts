import { RouteData } from "./types";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { Ui } from "../Ui/Ui";
import { Catalog } from "../Catalog/Catalog";
import { Program } from "../Program/Program";
import { Basket } from "../Basket/Basket";

export const routes: RouteData[] = [
  { path: "/", Component: Main, key: "main_page" },
  { path: "/ui", Component: Ui, key: "ui_page" },
  { path: "/catalog", Component: Catalog, key: "catalog_page" },
  { path: "/program", Component: Program, key: "program_page" },
  { path: "/basket", Component: Basket, key: "basket_page" },
  { path: "*", Component: NotFound, key: "not-found_page" },
];
