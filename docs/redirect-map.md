# 旧サイト → 新サイト リダイレクトマップ

旧サイト（静的HTML等）から本Next.jsサイトへの移行に伴うURLリダイレクトの対応表です。
`next.config.mjs` またはVercelの機能を用いて恒久的なリダイレクト（301）を設定します。

| 旧URL (想定される主なもの) | 新URL | 理由 |
| :--- | :--- | :--- |
| `/index.html` | `/` | 拡張子の排除 |
| `/company.html` | `/about` | 会社情報ページへの統合 |
| `/business.html` | `/advantage` | 事業内容・特長ページへ統合 |
| `/access.html` | `/locations` | アクセス情報を拠点情報へ統合 |
| `/recruit.html` | `/recruit` | 採用情報への統合 |
| `/contact.html` | `/contact` | お問い合わせへの統合 |

## 実装方法（`next.config.mjs`）

将来的に旧URLが判明した場合、`next.config.mjs` に以下を追記します。

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/company.html',
        destination: '/about',
        permanent: true,
      },
      // 他のURLも同様に追加
    ]
  },
};

export default nextConfig;
```
