import "./globals.css";
import Footer from "@/components/Footer"; // 导入 Footer 组件

export const metadata = {
  title: "Web前端开发练习平台", // 更新标题
  description: "《Web前端开发》课程练习成果展示", // 更新描述
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head></head>
      <body className={` antialiased bg-slate-50 flex flex-col min-h-screen`}>
        <div className="flex-grow">{children}</div>
        <Footer /> {/* 添加 Footer 组件 */}
        <script
        src="https://ai.youdao.com/saas/qanything/js/agent-iframe-min.js"
        id="qanything-iframe"
        data-agent-src="https://ai.youdao.com/saas/qanything/#/bots/88A40C6A9F9C4C38/share"
        data-open-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
        data-close-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
        defer
      >
    </script>
      </body>
    </html>
  );
}
