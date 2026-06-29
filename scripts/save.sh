#!/usr/bin/env bash
# Build kiểm tra -> commit -> push. Push xong, GitHub Actions tự deploy GH Pages.
# Dùng:  npm run save -- "nội dung commit"
#   ví dụ:  npm run save -- "feat: cập nhật mục VIFC-DN"
set -euo pipefail

cd "$(dirname "$0")/.."

MSG="${1:-chore: update website}"

echo "▶ 1/4  Build kiểm tra (không commit nếu build lỗi)…"
npm run build

echo "▶ 2/4  git add…"
git add -A

if git diff --cached --quiet; then
  echo "✓ Không có thay đổi nào để commit. Dừng."
  exit 0
fi

echo "▶ 3/4  Commit: \"$MSG\""
git commit -m "$MSG"

echo "▶ 4/4  Push lên origin/main…"
git push -u origin main

echo "✅ Xong. Theo dõi quá trình deploy tại tab Actions trên GitHub."
