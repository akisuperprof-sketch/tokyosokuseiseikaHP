# Vercel 本番環境 構築・設定ドキュメント

## 1. デプロイ設定
- **Framework Preset**: Next.js
- **Build Command**: `next build` (デフォルト)
- **Output Directory**: `.next` (デフォルト)
- **Node.js Version**: 20.x

## 2. 環境変数 (Environment Variables)

本番環境（Production）において、以下の環境変数を設定してください。

| 変数名 | 値の例 | 目的 |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | `https://tokyosokuseiseika.co.jp` | サイトマップやOGPのベースURL生成に使用 |
| `CONTACT_FORM_ENABLED` | `false` | `true`に設定するまでお問い合わせフォームの送信処理をブロックし、準備中メッセージを表示する |
| `RESEND_API_KEY` (予定) | `re_...` | お問い合わせメール送信機能（SendGridやResend等）導入時に使用予定 |

## 3. その他の設定
- **Domains**: 取得済みのドメイン（例: `tokyosokuseiseika.co.jp`）を設定し、DNS（AレコードやCNAME）をVercelの指定に向ける。
- **Redirects**: 旧サイトからのURL変更に伴うリダイレクトは `next.config.js` または別途Vercel設定で行う。（詳細は `redirect-map.md` 参照）
