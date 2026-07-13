# 画像資産管理一覧 (Image Inventory)

サイト内で使用している、または使用予定の画像ファイルに関する管理シートです。

## 構成ディレクトリ
- `/public/images/about/` : 会社情報関連（社長画像、沿革、社屋など）
- `/public/images/advantage/` : 事業・特長関連（加工場、商品、生産者など）
- `/public/images/locations/` : 拠点情報関連（各営業部の外観、地図など）
- `/public/images/recruit/` : 採用関連（社員インタビュー、働く環境など）
- `/public/images/news/` : ニュース・お知らせ関連のアイキャッチ
- `/public/images/common/` : 共通画像（ロゴ、OGP画像、ファビコンなど）
- `/public/images/ai/` : ブランドイメージライブラリ（AI生成）
  - `market/` : 市場イメージ
  - `vegetables/` : 青果イメージ
  - `agriculture/` : 農業イメージ
  - `distribution/` : 流通イメージ
  - `kitchen/` : 商品開発イメージ
  - `brand/` : ブランドイメージ
  - `hero/` : Hero背景イメージ
  - `news/` : ニュースアイキャッチイメージ
  - `recruit/` : 採用イメージ
  - `background/` : 抽象背景イメージ

## 現在のファイルとステータス

| ファイル名 | 使用ページ | 被写体 | 出典 | ContentStatus | 掲載許可状態 | 提供者 | 提供日 | alt | 公開可否 | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/public/images/approved/president.jpg` | 会社情報：代表メッセージ | 社長 | ユーザー提供 | `confirmed` | `pending` | ユーザー | 未定 | 東京促成青果株式会社 代表取締役 大竹康弘 | 許可確認後 | Web掲載許可の正式確認待ち |
| `/public/images/approved/pickup/mitaaji-logo.png` | トップページ：Pickup | Mitaajiロゴ | 公式 | `placeholder` | `pending` | 未定 | 未定 | Mitaaji みためとあじはちがう店 | 差し替え必要 | 正式な高解像度データ提供待ち |
| `/public/images/approved/pickup/chefoodo-banner.jpg` | トップページ：Pickup | ChefooDoバナー | 公式 | `confirmed` | `pending` | 未定 | 未定 | 一般社団法人ChefooDo | 許可確認後 | 外部サイト掲載許可待ち |
| Hero動画 | トップページ：Hero | （動画） | 未定 | `placeholder` | `pending` | 未定 | 未定 | Hero動画 | 差し替え必要 | 正式な動画データ提供待ち |
| Hero動画ポスター | トップページ：Hero | 市場 | Unsplash | `placeholder` | `not-required` | - | - | 豊洲市場 | 差し替え必要 | 実在の市場画像への差し替え推奨 |
| 各拠点画像 | 拠点情報 | 拠点外観等 | 未定 | `placeholder` | `pending` | 未定 | 未定 | 各拠点 | 差し替え必要 | 正式データ提供待ち |
| 採用画像 | 採用情報 | 働く環境等 | 未定 | `placeholder` | `pending` | 未定 | 未定 | 採用イメージ | 差し替え必要 | 正式データ提供待ち |
| ニュース画像 | ニュース | アイキャッチ | 未定 | `placeholder` | `pending` | 未定 | 未定 | ニュース画像 | 差し替え必要 | 正式データ提供待ち |

## 不足している必要な画像（手配依頼）
以下の画像はダミーを使用、またはテキストのみで表示しているため、正式な提供を依頼します。

- **公式ロゴデータ**: `/public/images/common/logo.svg` または透過PNG (高画質版)
- **各拠点の外観・地図画像**: 築地本社、大田営業部、大阪営業部、豊洲営業部
- **加工場の写真**: 大田市場内加工場の様子
- **採用情報用画像**: 各拠点での勤務風景や社員の写真
- **OGP画像**: SNSシェア時に表示する `/public/images/common/og-image.jpg` (1200x630px推奨)
- **ファビコン**: `/public/favicon.ico`, `apple-touch-icon.png` などのアイコン画像

## ブランドイメージライブラリ（AI生成）

| 画像 | カテゴリ | AI/実写 | 使用ページ | 状態 | 差し替え候補 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| （生成待ち） | - | - | - | - | - |
