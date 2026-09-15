import { useEffect, useState } from "react";

export function useLocalStorage(key: string) {
  const [value, setValue] = useState<string>(() => {
    // ищем в localStorage значение под этим ключом; если не найдено — вернётся null
    const item = localStorage.getItem(key);
    // если нашли строку — превращаем её обратно из JSON в обычное значение; если нет — стартуем с пустой строки
    return item !== null ? JSON.parse(item) : '';
  });

  useEffect(() => {
    // сохраняем value в localStorage под тем же ключом, превратив его в JSON-строку
    localStorage.setItem(key, JSON.stringify(value));
    // эффект перезапустится, если изменится value (например, после ввода текста) или сам ключ key
  }, [value, key]);

  // отдаём наружу пару [текущее значение, функция для его изменения] — как у обычного useState
  return [value, setValue] as const;
}
