# brand/ — Mayudama Factory のブランド画像

元の形は、ヘッダーのまゆだまマーク（枝の線＋丸3つ）。SVG が元データで、PNG はすべて SVG から書き出したもの。
文字入りのロゴと OGP の文字は、Zen Kaku Gothic New Bold（Google Fonts）をアウトライン化してある。フォントがなくても同じに見える。

## 色

| 用途 | 色 |
|---|---|
| 背景 | `#FBF8F2` |
| 文字 | `#22201C` |
| 丸（コーラル） | `#F26B5B` |
| 丸（ブルー） | `#2F5D8C` |
| 丸（グリーン） | `#3E9B6B` |
| 枝 | `#9A8F7C`（白版ロゴだけ暗い背景用に `#C9BFAE`） |
| 飾り（トップの絵のみ） | `#E8C468` `#E4DCCD` `#C9BFAE` |

## ファイル

| ファイル | サイズ | 用途・アップロード先 |
|---|---|---|
| `mark.svg` | 34×28 | マークの元データ（背景透過） |
| `mark-small.svg` | 32×32 | 小さく表示する用（枝を太く・丸を大きく）。favicon の元（`/favicon.svg` と同じ形） |
| `logo-horizontal.svg` | 413×68 | マーク＋「Mayudama Factory」の横組み（背景透過・明るい背景用） |
| `logo-horizontal-white.svg` | 413×68 | 同・暗い背景用（文字は白） |
| `google-play/developer-icon-512.png` | 512×512 | Google Play Console → デベロッパー アカウント →「デベロッパー ページ」→ デベロッパー アイコン |
| `google-play/header-4096x2304.png` | 4096×2304 | 同 → ヘッダー画像（24bit PNG・透過なし） |
| `x/profile-400.png` | 400×400 | X のプロフィール画像（円く切り抜かれる） |
| `x/header-1500x500.png` | 1500×500 | X のヘッダー画像（左下はプロフィール画像に隠れる） |
| `og/ogp-1200x630.png` | 1200×630 | トップページ（index.html）の OGP |
| `square/mark-1024.png` | 1024×1024 | 汎用（背景 `#FBF8F2`）。アプリストア以外のアイコン用 |
| `square/mark-1024-transparent.png` | 1024×1024 | 汎用（透過）。GitHub の組織アイコンなど |

サイトのルートにある `favicon.svg`・`favicon.ico`（16/32/48）・`apple-touch-icon.png`（180×180）も、このマークから作ったもの。
