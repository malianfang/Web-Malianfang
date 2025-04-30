import Hello from "../components/Hello";
import HomeworkCard from "../components/HomeworkCard";
export default function Home() {
  return (
    <div>
      <h1>这是来自函数的内容</h1>
      <HomeworkCard cardTitle={'这是来自父组件传递进来的内容'} cardContent={'卡片内容'} cardUrl={"../index.html"} cardDate={'获取当前日期'}/>
      <HomeworkCard cardTitle={'这是来自父组件传递进来的内容'} cardContent={'卡片内容'} cardUrl={"../index.html"} cardDate={'获取当前日期'} />
      <HomeworkCard cardTitle={'这是来自父组件传递进来的内容'} cardContent={'卡片内容'} cardUrl={"../index.html"} cardDate={'获取当前日期'}/>
    </div>
  );
} 