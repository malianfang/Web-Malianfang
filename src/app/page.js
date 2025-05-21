// 主展示页面组件
export default function CourseWorkPage() {
  return (
    <main className="min-h-screen p-8 md:p-12 bg-gray-50">
      {/* 标题模块 */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Web前端开发课程作业展示
      </h1>

      {/* 卡片容器 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 示例卡片组件 */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">响应式布局实践</h2>
          <p className="text-gray-600 mb-4">使用Tailwind实现多设备适配...</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-200 hover:scale-105">
            查看详情
          </button>
        </div>
        
        {/* 其他卡片可以复用相同结构 */}
      </div>

      {/* 输入框组件 */}
      <div className="mt-8 max-w-md mx-auto">
        <input 
          type="text"
          placeholder="搜索作业..."
          className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
        />
      </div>
    </main>
  )
}