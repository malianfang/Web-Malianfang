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
      </body>
    </html>
  );
}