# X 宣伝画像の元データ

- `index.html`：3 枚の画像を 1600×900 で組んだもの。文字・画面を差し替えたいときはここを直す
- `screens/`：画面の画像（1320×2868）。元は ~/development/screenshots/sukidane/2.0.0-assets/ja/iphone-6.9/upload/
- `icon.png`：アプリアイコン（sukidane/icon.png のコピー）
- 書き出し：ヘッドレスの Chromium で `#s1`〜`#s3` を 1600×900 で撮り、`../01.png`〜`../03.png` にする（Playwright）。フォントは Google Fonts から読むので、ネットにつながっている状態で行う
- `index.html?guides` で、X の切り抜きに対する安全範囲（点線）が見える
