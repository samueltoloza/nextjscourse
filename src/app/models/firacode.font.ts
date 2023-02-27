import localfont from '@next/font/local'

export const firacode = localfont({
    src: [{
      path: "./FiraCode-Medium.woff2",
      weight: '400',
      style: 'normal',
    }, {
      path: "./FiraCode-Bold.woff2",
      weight: '700',
      style: 'italic',
    }],
})