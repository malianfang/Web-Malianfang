![QAnything运行截图](./images/Qanything.jpg)
![课程作业运行截图](./images/work.jpg)
![课程作业运行截图](./images/work(1).jpg)
![WakaTime API运行截图](./images/work(1).jpg)
### 项目简介
该项目包含两个基于Next.js构建的Web前端开发相关应用：`my-next-app`和`tailwind-app`。这两个应用主要用于展示《Web前端开发》课程的练习成果，涵盖了HTML、CSS、JavaScript、React、Next.js等多个前端技术领域的练习内容。

### QAnything集成路径与实现细节

#### 集成路径
在`tailwind-app`项目的`src/app/layout.js`文件中，通过`<script>`标签引入QAnything的脚本，并配置相关参数实现集成。

#### 实现细节
```javascript
// tailwind-app/src/app/layout.js
<script
  src="https://ai.youdao.com/saas/qanything/js/agent-iframe-min.js"
  id="qanything-iframe"
  data-agent-src="https://ai.youdao.com/saas/qanything/#/bots/88A40C6A9F9C4C38/share"
  data-open-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
  data-close-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
  defer
>
</script>
```
- 选择路径及原因：使用QAnything创建知识库，将知识库关联到Agents，进行发布，嵌入网页选择复制链接，写入相应的代码文件中。
选择在`layout.js`中集成QAnything是因为`layout.js`是Next.js应用的全局布局文件，所有页面都会共享该布局。这样可以确保在整个应用的所有页面中都能使用QAnything的问答功能，无需在每个页面单独引入。

### WakaTime API集成方法
目前提供的代码片段中未涉及WakaTime API的集成。若要集成WakaTime API，可以按照以下步骤进行：

1. 获取API密钥：在WakaTime官网注册并获取API密钥。
2. 使用Cloudflare Workers：WakaTime API需要在Cloudflare Workers中进行配置和部署。可以按照课程开发文档指导进行设置。
3. 发起API请求：在Next.js项目中使用`fetch`发起API请求。例如，在某个页面组件中获取用户的统计数据：
  // 请将 'YOUR_WORKER_URL' 替换为您实际部署的 Cloudflare Worker URL
        const workerUrl = "http://mlf-wakatime.wemedia.press/";
        const response = await fetch(workerUrl);

        if (!response.ok) {
          const errorData = await response
            .json()
            .catch(() => ({ message: "Failed to parse error response" }));
          throw new Error(
            errorData.message ||
              `Error fetching Wakatime stats: ${response.status}`
          );
        }

### Next.js项目结构

#### `my-next-app`
- `src`目录：包含应用的主要源代码。
  - `app`目录：Next.js的App Router目录，包含页面组件。
    - `page.js`：首页组件。
  - `components`目录：包含可复用的组件。
    - `HomeworkCard.js`：作业卡片组件。
- `jsconfig.json`：JavaScript配置文件，用于路径映射。
- `package.json`：项目依赖和脚本配置文件。

#### `tailwind-app`
- `src`目录：包含应用的主要源代码。
  - `app`目录：Next.js的App Router目录，包含页面组件。
    - `page.js`：首页组件，展示练习卡片。
    - `github-stats`目录：包含GitHub提交统计相关页面。
      - `page.js`：展示GitHub提交记录。
      - `commits`目录：包含提交详情页面。
        - `[commitId]`目录：动态路由目录，展示特定提交的详情。
          - `page.js`：提交详情页面组件。
  - `components`目录：包含可复用的组件。
  - `data`目录：包含练习数据的JSON文件。
    - `exercises.json`：练习数据文件。
- `public`目录：包含静态资源和练习的HTML文件。
  - `exercises`目录：包含各种练习的HTML文件。
- `package.json`：项目依赖和脚本配置文件。

### 旧作业整合方式
为了统一管理旧作业，在项目的`public`目录下新建`exercises`文件夹，并将所有作业的HTML文件移动到该文件夹中。例如，在`tailwind-app`项目中已经存在`public/exercises`目录，将相关的HTML文件（如`week01.html`、`javaScript(1).html`等）放在该目录下，并在`src/data/exercises.json`文件中更新练习的链接。

```json
// tailwind-app/src/data/exercises.json
[
  {
    "id": 1,
    "title": "HTML 基础结构练习",
    "description": "学习并实践HTML5的基本文档结构，包括头部、主体和常用标签。",
    "imageUrl": "https://images.unsplash.com/photo-1600695268275-1a6468700bd5",
    "link": "/exercises/week01.html",
    "tags": [
      "HTML",
      "基础"
    ]
  },
  // 其他练习项...
]
```

### 项目运行指南

#### 启动开发服务器
1. 进入项目目录：
   - 对于`my-next-app`：
     ```bash
     cd Web-Malianfang/my-next-app
     ```
   - 对于`tailwind-app`：
     ```bash
     cd Web-Malianfang/tailwind-app
     ```
2. 安装依赖：
   ```bash
   npm install
   ```
3. 启动开发服务器：
   ```bash
   npm run dev
   ```
4. 打开浏览器：访问 [http://localhost:3000](http://localhost:3000) （CTRL+单击）查看应用。