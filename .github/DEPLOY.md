# Инструкция по развёртыванию на GitHub Pages

## Настройка GitHub Pages

1. **Перейдите в настройки репозитория**
   - Откройте ваш репозиторий на GitHub
   - Перейдите в `Settings` → `Pages`

2. **Настройте источник развёртывания**
   - В разделе "Build and deployment"
   - Source: выберите `GitHub Actions`

3. **Загрузите изменения в репозиторий**
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push origin master
   ```

4. **Проверьте деплой**
   - Перейдите во вкладку `Actions` в вашем репозитории
   - Дождитесь завершения workflow "Deploy to GitHub Pages"
   - После успешного завершения сайт будет доступен по адресу:
     `https://<username>.github.io/forest-rest/`

## Автоматическое развёртывание

После настройки каждый push в ветку `master` будет автоматически:
1. Устанавливать зависимости
2. Запускать линтеры (ESLint и Stylelint)
3. Генерировать статические файлы
4. Деплоить на GitHub Pages

## Ручное развёртывание

Вы можете запустить деплой вручную:
1. Перейдите во вкладку `Actions`
2. Выберите workflow "Deploy to GitHub Pages"
3. Нажмите `Run workflow`
4. Выберите ветку `master` и подтвердите

## Локальная проверка

Перед деплоем рекомендуется проверить сборку локально:

```bash
# Установка зависимостей
npm install

# Генерация статических файлов
npm run generate

# Предпросмотр собранного сайта
npm run preview
```

## Важные моменты

- **baseURL**: Устанавливается через переменную окружения `NUXT_APP_BASE_URL`
- **Линтеры**: Ошибки линтеров не блокируют деплой (`continue-on-error: true`)
- **Node.js версия**: Используется Node.js 20
- **Кэширование**: npm зависимости кэшируются для ускорения сборки

## Изменение базового URL

Если ваш репозиторий называется по-другому, измените переменную окружения в `.github/workflows/deploy.yml`:

```yaml
- name: Generate static files
  run: npm run generate
  env:
    NUXT_APP_BASE_URL: /your-repo-name/
```

Для локальной разработки с другим baseURL создайте файл `.env`:

```bash
NUXT_APP_BASE_URL=/your-base-url/
```
