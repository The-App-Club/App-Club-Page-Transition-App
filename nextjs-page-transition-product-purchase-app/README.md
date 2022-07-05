[nextjs-page-transitions](https://github.com/wrongakram/nextjs-page-transitions)

MEMO

nextjsを使うときはnodeのサーバが必要で、nextjsでSPAしたいなら、ルーティングはnextjsの機能を使うのではなく、react-dom-routerの機能を使う

そうしないとヒストリーフォールバックが効かない

その警告の例

```bash
warn  - Statically exporting a Next.js application via `next export` disables API routes.
This command is meant for static-only hosts, and is not necessary to make your application static.
Pages in your application without server-side data dependencies will be automatically statically exported by `next build`, including pages powered by `getStaticProps`.
Learn more: https://nextjs.org/docs/messages/api-routes-static-export
```