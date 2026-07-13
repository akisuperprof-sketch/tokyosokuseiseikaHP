# Visual Motion Upgrade Plan

## 現在の演出
- シンプルなフェードイン（Revealコンポーネント）
- 静止画背景のトップページHero
- 基本的なホバーエフェクト

## 追加する演出
- トップページHeroの実写動画背景（ループ、ミュート、自動再生）
- Advantageセクションでの交互スライドイン（PC版）、モバイルでのフェードアップ変換
- 統一された上質なマイクロインタラクション（ボタンの矢印移動、ホバー時の軽い浮遊感、画像のズーム）
- Noto Serif JP（明朝体）の限定的・効果的な使用
- HeroVideo共通コンポーネント

## 追加しない演出
- シネマティックスクロール
- カウントアップ
- パララックス
- GSAPなど重いアニメーションライブラリ
- 3D、WebGL
- 動画のスクロール連動マスク
- 架空の動画や画像

## 使用技術
- CSS Transitions / Keyframes
- Intersection Observer (既存Revealコンポーネントの拡張)
- Next.js / React (標準のコンポーネント機能)
※Motion for ReactやGSAP等の外部ライブラリはパフォーマンス維持のため今回は追加せず、軽量なCSSとReactの標準機能で完結させます。

## Hero動画構成
- `src/components/ui/HeroVideo.tsx` を新規作成
- 10〜15秒の静かな市場・青果流通の様子をイメージした動画（※今回は正式素材未提供のため、プレースホルダー動画・静止画としてフォールバック稼働）
- 動画の上に半透明のオーバーレイ、テキスト（下から上へのスライドアップフェード）
- Reduced Motion環境では自動再生停止しposter表示

## ページ別演出
- **トップ**: 動画Hero、主要Reveal、1948年設立のフェード表示
- **Advantage**: PCで左右交互の画像/テキストスライドイン（モバイルは上方向へのフェード）
- **About**: 代表メッセージの静かなフェード、明朝体の使用
- **Locations**: 地図・拠点カードの軽いReveal（横スライド禁止）
- **Recruit**: 職種カードのフェードアップ、詳細アコーディオン
- **Contact**: マイクロインタラクションのみ、フォームの安全性を最優先
- **News**: ホバーアクションのみ

## Reduced Motion / アクセシビリティ
- `@media (prefers-reduced-motion: reduce)` にてアニメーションを無効化またはフェードのみへ短縮
- Hero動画は `aria-hidden="true"` として装飾扱い
- JavaScript無効時でもコンテンツが閲覧できるよう `noscript` 等で配慮
- コントラスト比の維持

## パフォーマンス
- Hero動画の `preload="metadata"`
- モバイル時の不要な動画ロード回避
- LCPを動画ではなくテキストやposter画像にする設計

## 変更ファイル
- `src/components/ui/HeroVideo.tsx` (新規)
- `src/components/ui/Reveal.tsx` (改修)
- `src/app/globals.css` (改修)
- トップページ、Advantageページ等各ページのReactコンポーネント

## ロールバック方法
Gitのコミット履歴から直前の状態（コミットハッシュ: 6cb2d8c 等）へ `git revert` することで即座に復元可能。
