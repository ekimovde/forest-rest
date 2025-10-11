# 🚀 Краткое руководство по развёртыванию

## ✅ Что уже настроено

1. ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
2. ✅ Конфигурация Nuxt для GitHub Pages (`nuxt.config.ts`)
3. ✅ Файл `.nojekyll` для корректной работы GitHub Pages
4. ✅ Переменная окружения `NUXT_APP_BASE_URL` для baseURL
5. ✅ Автоматический линтинг при деплое
6. ✅ Документация (README.md и .github/DEPLOY.md)

## 📝 Следующие шаги

### 1. Установите зависимости

Если вы пропустили установку, выполните:

```bash
npm install
```

### 2. Проверьте локально (опционально)

```bash
# Соберите проект
npm run generate

# Проверьте сборку
npm run preview
```

### 3. Закоммитьте изменения

```bash
git add .
git commit -m "feat: add GitHub Actions deployment"
```

### 4. Отправьте в GitHub

```bash
git push origin master
```

### 5. Настройте GitHub Pages

1. Откройте репозиторий на GitHub: https://github.com/ekimovde/forest-rest
2. Перейдите в **Settings** → **Pages**
3. В разделе **"Build and deployment"**:
   - **Source**: выберите `GitHub Actions`
4. Сохраните изменения

### 6. Дождитесь завершения деплоя

1. Перейдите во вкладку **Actions** в репозитории
2. Дождитесь завершения workflow **"Deploy to GitHub Pages"**
3. После успешного завершения ваш сайт будет доступен по адресу:

   **https://ekimovde.github.io/forest-rest/**

## 🔄 Автоматические обновления

После настройки каждый push в ветку `master` будет автоматически:
- ✨ Устанавливать зависимости
- 🧹 Проверять код линтерами
- 🏗️ Собирать проект
- 🚀 Деплоить на GitHub Pages

## ⚙️ Дополнительные настройки

### Изменить название репозитория

Если вы переименуете репозиторий, обновите `NUXT_APP_BASE_URL` в `.github/workflows/deploy.yml`:

```yaml
env:
  NUXT_APP_BASE_URL: /new-repo-name/
```

### Локальная разработка с baseURL

Создайте файл `.env` (если нужно):

```bash
cp .env.example .env
```

И измените значение по необходимости.

## 🐛 Проблемы?

- **Сайт не открывается**: проверьте, что в Settings → Pages выбран источник "GitHub Actions"
- **404 ошибки**: убедитесь, что baseURL настроен правильно
- **Workflow не запускается**: проверьте, что у вас есть права на push в репозиторий
- **Линтер-ошибки**: запустите `npm install` для установки @types/node

## 📚 Подробная документация

Смотрите:
- [README.md](README.md) - Основная документация проекта
- [.github/DEPLOY.md](.github/DEPLOY.md) - Детальная инструкция по деплою
