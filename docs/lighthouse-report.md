# Lighthouse パフォーマンス・品質測定レポート

本番デプロイ前の品質測定結果です。（暫定値）

## 1. パフォーマンス (Performance)
- **スコア**: `未測定` (Vercelプレビュー等で測定後に更新)
- **最適化項目**:
  - 画像の最適化 (next/imageの活用、WebP変換)
  - フォントの最適化 (next/fontによるプリロード)

## 2. アクセシビリティ (Accessibility)
- **スコア**: `未測定`
- **対応済みの項目**:
  - `aria-invalid`, `aria-describedby` などのフォーム要素での属性対応
  - コントラスト比の確認
  - 適切な見出し(`h1`~`h3`)階層の使用

## 3. ベストプラクティス (Best Practices)
- **スコア**: `未測定`
- **対応済みの項目**:
  - `eslint-plugin-next` によるエラー排除
  - HTTPS化 (Vercelデフォルト)
  - 開発用ログ（`console.log`）の抑制

## 4. SEO
- **スコア**: `未測定`
- **対応済みの項目**:
  - 全ページへの `metadata` (タイトル、ディスクリプション) 配置
  - OGP (`openGraph`) 設定
  - `robots.txt` および `sitemap.xml` の動的生成対応

---
※ 本ファイルは本番稼働後、Chrome DevToolsのLighthouse等を用いて実測値を記載してください。
