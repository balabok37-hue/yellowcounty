#!/bin/bash

# Путь к каталогу, где находятся файлы
DIRECTORY="src/assets/machines"

# Сообщения для коммита
COMMIT_MESSAGE="rename: replace spaces with hyphens in webp filenames under src/assets/machines"
RENAMED_FILES=()
SKIPPED_FILES=()

# Переходим в директорию проекта (опционально)
cd "$(git rev-parse --show-toplevel)"

# Проверяем наличие изменений
if [[ $(git status --porcelain) != "" ]]; then
  echo "В вашем репозитории есть незакоммиченные изменения. Пожалуйста, закоммитьте или откатите их перед выполнением этого скрипта."
  exit 1
fi

# Dry-run: собираем список файлов
for FILE in "$DIRECTORY"/*.webp; do
    # Если в имени файла есть пробел
    if [[ "$FILE" == *" "* ]]; then
        # Переименовываем
        NEW_FILE=$(echo "$FILE" | sed 's/ /-/g')
        if [[ -e "$NEW_FILE" ]]; then
            # Целевой файл уже существует
            SKIPPED_FILES+=("$FILE -> $NEW_FILE")
        else
            git mv "$FILE" "$NEW_FILE"
            RENAMED_FILES+=("$FILE -> $NEW_FILE")
        fi
    fi
done

# Если dry-run ничего не нашёл
if [[ ${#RENAMED_FILES[@]} -eq 0 && ${#SKIPPED_FILES[@]} -eq 0 ]]; then
    echo "Нет файлов для переименования."
    exit 0
fi

# Выводим планируемые изменения
echo "Список всех переименованных файлов:"
for FILE in "${RENAMED_FILES[@]}"; do
    echo "  $FILE"
done

echo ""
echo "Список всех пропущенных файлов (из-за коллизий):"
for FILE in "${SKIPPED_FILES[@]}"; do
    echo "  $FILE"
done

# Запрос подтверждения
read -p "Подтвердите выполнение коммита (y/n): " CONFIRM
if [[ "$CONFIRM" != "y" ]]; then
    echo "Отмена выполнения"
    exit 0
fi

# Выполняем коммит
COMMIT_BODY=$(printf "Renamed files:\n%s\n\nSkipped files:\n%s" "$(printf -- '- %s\n' "${RENAMED_FILES[@]}")" "$(printf -- '- %s\n' "${SKIPPED_FILES[@]}")")
git commit -m "$COMMIT_MESSAGE" -m "$COMMIT_BODY"

# Пушим изменения
echo "Пытаюсь сделать push..."
if git push; then
    echo "Изменения успешно запушены."
else
    echo "Push не удался. Возможно, главная ветка защищена."
    echo "Попробуйте создать pull request вручную."
fi