import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

/* 

  {
    "id": 7,
    "name": "The Psychology of Money",
    "price": 16.99,
    "imgUrl": "src/assets/jpg/psychology-of-money.jpg"
  },
  {
    "id": 8,
    "name": "Steve Jobs",
    "price": 19.99,
    "imgUrl": "src/assets/jpg/steve-jobs.jpg"
  },
  {
    "id": 9,
    "name": "Outliers",
    "price": 13.99,
    "imgUrl": "src/assets/jpg/outliers.jpg"
  },
  {
    "id": 10,
    "name": "Zero to ONE",
    "price": 16.99,
    "imgUrl": "src/assets/jpg/zero-to-one.jpg"
  },
  {
    "id": 11,
    "name": "How to Get Rich",
    "price": 11.99,
    "imgUrl": "src/assets/jpg/how-to-get-rich.jpg"
  },
  {
    "id": 12,
    "name": "Rich Dad, Poor Dad",
    "price": 10.99,
    "imgUrl": "src/assets/jpg/rich-dad-poor-dad.jpg"
  },
  {
    "id": 13,
    "name": "Moonwalking with Einstein",
    "price": 18.99,
    "imgUrl": "src/assets/jpg/moonwalking-with-einstein.jpg"
  },
  {
    "id": 14,
    "name": "Men are from Mars, Women are from Venus",
    "price": 10.99,
    "imgUrl": "src/assets/jpg/men-from-mars-women-from-venus.jpg"
  }

*/
