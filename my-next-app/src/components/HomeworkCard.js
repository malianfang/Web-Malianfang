function HomeworkCard() {
    let count = 10;
    const CardTitle = "作业标题"; 
    const CardContent = "作业内容简介";
    const cardUrl = ''
    const CardDate = new Date().toLocaleDateString(); //获取当前日期
    return (
        <div style={{ border: '1px solid #ccc',padding: '10px',margin: '10px',borderRadius: '5px'}}>
        <a href={cardUrl}>
            <h2>{cardTitle}</h2>
            <p>{cardContent}</p>
            <p>{cardDate}</p>
            <p>{2 + 3},{count}</p>
        </a>
        </div>   
    )
}
export default HomeworkCard;