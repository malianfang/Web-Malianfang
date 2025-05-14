## Next.js 配置文件核心知识

### 基础配置结构
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```

### 常用配置模块
#### 实验性功能
```javascript
experimental: {
  appDir: true,
  serverComponentsExternalPackages: ['@tailwindcss/typography']
}
```

#### 编译器配置
```javascript
compiler: {
  styledComponents: true
}
```

#### 图片处理
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.example.com'
    }
  ]
}
```

### 高级配置技巧
#### Webpack扩展
```javascript
webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  return config
}
```