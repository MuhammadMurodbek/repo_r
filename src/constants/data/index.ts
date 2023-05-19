import { randstr } from "../functions";

export const lists: object[] = [
  {
    id: randstr("list"),
    name: "Mastercard",
    category: "one",
    order: 1,
    sublist: [
      {
        id: randstr("sublist"),
        name: "Максимал фойда (Нац. валюта)",
        order: 2,
      },
      {
        id: randstr("sublist"),
        name: "On-line (Нац. валюта)",
        order: 3,
      },
      {
        id: randstr("sublist"),
        name: "Аванс (Нац. валюта)",
        order: 4,
      },
      {
        id: randstr("sublist"),
        name: "Максимал фойда (Ин. валюта)",
        order: 2,
      },
      {
        id: randstr("sublist"),
        name: "On-line (Нац. валюта)",
        order: 3,
      },
      {
        id: randstr("sublist"),
        name: "Аванс (Нац. валюта)",
        order: 4,
      },
    ],
  },
  {
    id: randstr("list"),
    name: "Вклады",
    category: "2",
    sublist: [
      {
        id: randstr("sublist"),
        name: "Максимал фойда (Ин. валюта)",
        order: 2,
      },
      {
        id: randstr("sublist"),
        name: "your username and hostname.",
        order: 3,
      },
      {
        id: randstr("sublist"),
        name: "Please check that",
        order: 4,
      },
    ],
  },
  {
    id: randstr("list"),
    name: "Кредиты",
    category: "3",
    sublist: [
      {
        id: randstr("sublist"),
        name: "sublist133",
        order: 2,
      },
      {
        id: randstr("sublist"),
        name: "sublist1",
        order: 3,
      },
      {
        id: randstr("sublist"),
        name: "sublist1",
        order: 4,
      },
    ],
  },
];
