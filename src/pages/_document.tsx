import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>너 내 MBTI 알아??</title>
        <meta
          name="description"
          content="너 내 MBTI 알아??, 상대방이 생각하는 당신의 MBTI!"
        />
        <meta
          name="keywords"
          content="SWYG, MBTI, PINOMAKER, Toy, 심리테스트, 엠비티아이"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
        ></script>

        <link rel="apple-touch-icon" href="/mbti.png" />
        <link rel="shortcut icon" href="/mbti.png" />
        <link rel="icon" href="/mbti.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
