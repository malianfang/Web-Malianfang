// 扩展Tailwind主题配置
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 添加自定义过渡效果
      transitionProperty: {
        'border': 'border-color, box-shadow'
      },
      // 扩展阴影配置
      boxShadow: {
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms') // 启用表单插件
  ]
}