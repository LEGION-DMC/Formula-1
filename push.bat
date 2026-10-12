@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo === Увеличиваю версию ===
powershell -NoProfile -Command ^
  "$v = [int](Get-Content 'version.txt' -Raw).Trim(); $v++; Set-Content 'version.txt' $v -NoNewline; Write-Host ('Версия: ' + $v)"
if errorlevel 1 ( echo ❌ Ошибка чтения version.txt & pause & exit /b 1 )

echo.
echo === Обновляю index.html ===
powershell -NoProfile -Command ^
  "$v = (Get-Content 'version.txt' -Raw).Trim();" ^
  "$html = Get-Content 'index.html' -Raw;" ^
  "$html = [regex]::Replace($html, '(src|href)=\"([^\"?]+\.(js|css))(\?v=[^\"]*)?\"', { param($m) $attr=$m.Groups[1].Value; $file=$m.Groups[2].Value; $attr + '=\"' + $file + '?v=' + $v + '\"' });" ^
  "Set-Content 'index.html' $html -NoNewline -Encoding UTF8; Write-Host 'index.html обновлён'"
if errorlevel 1 ( echo ❌ Ошибка обновления index.html & pause & exit /b 1 )

echo.
echo === Git: add / commit / push ===
git add .
git commit -m "update results"
if errorlevel 1 (
    echo ⚠ Нечего коммитить или ошибка git.
    pause
    exit /b 0
)

git push
if errorlevel 1 ( echo ❌ Ошибка push & pause & exit /b 1 )

echo.
echo ✅ Готово. Версия обновлена, сайт обновится через ~1 минуту.
pause