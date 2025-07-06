<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>把关人理论 - 信息传播中的守门人</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --light-color: #ecf0f1;
            --dark-color: #1a252f;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e7f0 100%);
            color: #333;
            line-height: 1.6;
        }
        
        .navbar {
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .hero-section {
            background: url('https://bkimg.cdn.bcebos.com/pic/c995d143ad4bd11373f0b802c0f7b30f4bfbfbedaff1') no-repeat center center/cover;
            height: 500px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .hero-overlay {
            
            background: rgba(0, 0, 0, 0.6);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }
        
        .section-title {
            position: relative;
            padding-bottom: 15px;
            margin-bottom: 30px;
            text-align: center;
            color: var(--primary-color);
            font-weight: 700;
        }
        
        .section-title:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--secondary-color);
            border-radius: 2px;
        }
        
        .card {
            border: none;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 25px;
            height: 100%;
        }
        
        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .card-header {
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            color: white;
            font-weight: 600;
            padding: 15px 20px;
            border: none;
        }
        
        .timeline {
            position: relative;
            padding: 40px 0;
        }
        
        .timeline::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 4px;
            background: var(--secondary-color);
            margin-left: -2px;
        }
        
        .timeline-item {
            position: relative;
            margin-bottom: 50px;
        }
        
        .timeline-content {
            position: relative;
            width: 45%;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .timeline-item:nth-child(odd) .timeline-content {
            left: 0;
        }
        
        .timeline-item:nth-child(even) .timeline-content {
            left: 55%;
        }
        
        .timeline-content::after {
            content: "";
            position: absolute;
            top: 20px;
            width: 0;
            height: 0;
            border-style: solid;
        }
        
        .timeline-item:nth-child(odd) .timeline-content::after {
            right: -15px;
            border-width: 10px 0 10px 15px;
            border-color: transparent transparent transparent white;
        }
        
        .timeline-item:nth-child(even) .timeline-content::after {
            left: -15px;
            border-width: 10px 15px 10px 0;
            border-color: transparent white transparent transparent;
        }
        
        .timeline-icon {
            position: absolute;
            left: 50%;
            background: var(--secondary-color);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-left: -25px;
            box-shadow: 0 0 0 8px rgba(52, 152, 219, 0.2);
        }
        
        .simulation-container {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .news-item {
            background: var(--light-color);
            padding: 15px;
            margin: 15px 0;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
        }
        
        .news-item:hover {
            background: #d6eaf8;
            transform: translateX(5px);
        }
        
        .news-item.selected {
            background: #d5f5e3;
            border-left: 4px solid #28a745;
        }
        
        .counter {
            background: var(--accent-color);
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-weight: bold;
        }
        
        .platform-card {
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
            cursor: pointer;
            height: 100%;
        }
        
        .platform-card:hover {
            transform: scale(1.03);
        }
        
        .platform-header {
            padding: 20px;
            color: white;
            font-weight: bold;
        }
        
        .platform-content {
            padding: 20px;
            background: white;
        }
        
        .footer {
            background: var(--dark-color);
            color: white;
            padding: 40px 0 20px;
            margin-top: 60px;
        }
        
        .social-links a {
            color: white;
            font-size: 1.5rem;
            margin: 0 10px;
            transition: color 0.3s ease;
        }
        
        .social-links a:hover {
            color: var(--secondary-color);
        }
        
        @media (max-width: 768px) {
            .timeline::before {
                left: 30px;
            }
            
            .timeline-content {
                width: calc(100% - 80px);
                margin-left: 80px;
            }
            
            .timeline-item:nth-child(even) .timeline-content {
                left: 0;
            }
            
            .timeline-content::after {
                display: none;
            }
            
            .timeline-icon {
                left: 30px;
            }
        }
    </style>
</head>
<body>
    <!-- 导航栏 -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <i class="fas fa-shield-alt fa-2x me-2"></i>
                <span class="fw-bold">把关人理论</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#overview">理论概述</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#history">历史发展</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#digital">数字时代</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#simulation">模拟实验</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#resources">学习资源</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- 英雄区域 -->
    <section class="hero-section">
        <div class="hero-overlay">
            <div class="container">
                <h1 class="display-3 fw-bold mb-3">把关人理论</h1>
                <h3 class="mb-4">信息传播中的"守门人"机制</h3>
                <p class="lead mb-5">探索从传统媒体到算法时代的信息过滤与筛选机制</p>
                <a href="#overview" class="btn btn-light btn-lg px-4 py-2 fw-bold">开始探索 <i class="fas fa-arrow-down ms-2"></i></a>
            </div>
        </div>
    </section>

    <!-- 理论概述 -->
    <section id="overview" class="py-5">
        <div class="container">
            <h2 class="section-title">理论核心概念</h2>
            
            <div class="row mb-5">
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <i class="fas fa-info-circle me-2"></i>定义与起源
                        </div>
                        <div class="card-body">
                            <p class="card-text">把关人理论（Gatekeeping Theory）指信息在传播过程中需经过特定"守门人"的筛选与过滤，最终只有部分信息能进入公众视野。</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <i class="fas fa-calendar-alt text-primary me-2"></i>
                                    <strong>1947年</strong>：库尔特·卢因（Kurt Lewin）首次提出
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-book text-success me-2"></i>
                                    最初用于解释家庭食物采购决策中的筛选行为
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-newspaper text-warning me-2"></i>
                                    <strong>1950年</strong>：怀特（David Manning White）将其应用于新闻传播研究
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <i class="fas fa-filter me-2"></i>传统媒体把关机制
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">把关主体</h5>
                            <div class="d-flex flex-wrap mb-3">
                                <span class="badge bg-primary me-2 mb-2">记者</span>
                                <span class="badge bg-primary me-2 mb-2">编辑</span>
                                <span class="badge bg-primary me-2 mb-2">媒体机构</span>
                                <span class="badge bg-primary me-2 mb-2">主编</span>
                                <span class="badge bg-primary me-2 mb-2">制片人</span>
                            </div>
                            
                            <h5 class="card-title">把关标准</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="alert alert-success">
                                        <i class="fas fa-bolt me-2"></i>时效性
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="alert alert-info">
                                        <i class="fas fa-star me-2"></i>重要性
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="alert alert-warning">
                                        <i class="fas fa-smile me-2"></i>趣味性
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="alert alert-danger">
                                        <i class="fas fa-check-circle me-2"></i>准确性
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header">
                    <i class="fas fa-sitemap me-2"></i>休梅克五级把关模型（1991）
                </div>
                <div class="card-body">
                    <div class="row text-center">
                        <div class="col-md-2 mb-3">
                            <div class="p-3 bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                <i class="fas fa-user"></i>
                            </div>
                            <h5 class="mt-2">个体</h5>
                        </div>
                        <div class="col-md-1 d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-arrow-right fa-2x text-muted"></i>
                        </div>
                        <div class="col-md-2 mb-3">
                            <div class="p-3 bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                <i class="fas fa-ruler-combined"></i>
                            </div>
                            <h5 class="mt-2">传播惯例</h5>
                        </div>
                        <div class="col-md-1 d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-arrow-right fa-2x text-muted"></i>
                        </div>
                        <div class="col-md-2 mb-3">
                            <div class="p-3 bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                <i class="fas fa-building"></i>
                            </div>
                            <h5 class="mt-2">组织</h5>
                        </div>
                        <div class="col-md-1 d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-arrow-right fa-2x text-muted"></i>
                        </div>
                        <div class="col-md-2 mb-3">
                            <div class="p-3 bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <h5 class="mt-2">社会体制</h5>
                        </div>
                        <div class="col-md-1 d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-arrow-right fa-2x text-muted"></i>
                        </div>
                        <div class="col-md-2 mb-3">
                            <div class="p-3 bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                <i class="fas fa-globe"></i>
                            </div>
                            <h5 class="mt-2">社会系统</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 历史发展 -->
    <section id="history" class="py-5 bg-light">
        <div class="container">
            <h2 class="section-title">理论发展历程</h2>
            
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>1947年</h3>
                        <h4>理论诞生</h4>
                        <p>社会心理学家库尔特·卢因（Kurt Lewin）在《群体动力学前沿》中首次提出"把关人"概念，用于解释家庭食物采购决策中的筛选行为。</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-newspaper"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>1950年</h3>
                        <h4>新闻传播应用</h4>
                        <p>大卫·曼宁·怀特（David Manning White）研究报纸编辑的新闻选择过程，提出首个新闻传播领域的"把关人模型"。</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>1964年</h3>
                        <h4>组织压力研究</h4>
                        <p>吉伯托（Gieber）揭露组织压力对把关的影响，包括截稿时间、版面限制和广告主需求等因素。</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>1991年</h3>
                        <h4>五级把关模型</h4>
                        <p>休梅克（Shoemaker）提出五级把关模型，将把关因素分为：个体、传播惯例、组织、社会体制和社会系统。</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>2010s至今</h3>
                        <h4>算法把关时代</h4>
                        <p>随着社交媒体和算法推荐系统的兴起，把关主体从人类编辑转向算法系统，开启了"全民把关"的新时代。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 数字时代 -->
    <section id="digital" class="py-5">
        <div class="container">
            <h2 class="section-title">数字时代的把关机制</h2>
            
            <div class="row mb-5">
                <div class="col-md-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-sync-alt me-2"></i>新特征
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <i class="fas fa-user-friends text-primary me-2"></i>
                                    <strong>主体多元化</strong>：算法平台、自媒体、用户皆成把关人
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-chart-line text-success me-2"></i>
                                    <strong>标准复杂化</strong>：流量导向、商业利益、社群规范
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-exchange-alt text-warning me-2"></i>
                                    <strong>权力转移</strong>：传统媒体垄断性削弱，"全民把关"趋势显现
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-brain text-info me-2"></i>
                                    <strong>算法黑箱</strong>：不透明的算法决策过程引发伦理争议
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-exclamation-triangle me-2"></i>争议与批判
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <i class="fas fa-balance-scale text-danger me-2"></i>
                                    <strong>民主困境</strong>：算法黑箱操作导致透明度缺失
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-mask text-secondary me-2"></i>
                                    <strong>文化偏见</strong>：算法基于历史数据训练，固化刻板印象
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-code-branch text-primary me-2"></i>
                                    <strong>信息茧房</strong>：个性化推荐导致认知局限
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-globe-americas text-success me-2"></i>
                                    <strong>权力结构</strong>：科技巨头成为"超级把关人"
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 class="mb-4 text-center">算法把关的运作逻辑</h3>
            
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="platform-card shadow">
                        <div class="platform-header bg-primary">
                            <i class="fab fa-facebook fa-3x mb-3"></i>
                            <h4>Facebook</h4>
                            <p>内容过滤机制</p>
                        </div>
                        <div class="platform-content">
                            <p>使用AI自动检测暴力、仇恨言论等内容，2023年移除超过27亿条违规内容。</p>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-success" style="width: 85%">85%自动检测</div>
                            </div>
                            <ul>
                                <li>自然语言处理识别敏感词</li>
                                <li>图像识别检测违规图片</li>
                                <li>用户举报系统辅助</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4 mb-4">
                    <div class="platform-card shadow">
                        <div class="platform-header bg-danger">
                            <i class="fab fa-weibo fa-3x mb-3"></i>
                            <h4>微博</h4>
                            <p>热搜榜排名算法</p>
                        </div>
                        <div class="platform-content">
                            <p>基于热度值（阅读量、讨论量、传播速度）计算话题排名，同时受人工干预影响。</p>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-warning" style="width: 65%">65%算法</div>
                                <div class="progress-bar bg-info" style="width: 35%">35%人工</div>
                            </div>
                            <ul>
                                <li>实时热度监测</li>
                                <li>用户兴趣建模</li>
                                <li>商业合作调整</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4 mb-4">
                    <div class="platform-card shadow">
                        <div class="platform-header bg-dark">
                            <i class="fab fa-tiktok fa-3x mb-3"></i>
                            <h4>TikTok</h4>
                            <p>"For You"推荐机制</p>
                        </div>
                        <div class="platform-content">
                            <p>基于用户行为（观看时长、点赞、分享）的协同过滤算法，每秒处理数百万视频。</p>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-info" style="width: 95%">95%算法推荐</div>
                            </div>
                            <ul>
                                <li>内容特征分析</li>
                                <li>用户相似度匹配</li>
                                <li>多样化内容注入</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 模拟实验 -->
    <section id="simulation" class="py-5 bg-light">
        <div class="container">
            <h2 class="section-title">把关人模拟实验</h2>
            
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="simulation-container">
                        <div class="text-center mb-5">
                            <h3 class="mb-3">扮演新闻编辑</h3>
                            <p class="lead">从以下10条新闻中筛选5条发布到明天的头版</p>
                            <div class="d-flex justify-content-center mb-4">
                                <div class="mx-3">
                                    <h4 id="selectedCount">0</h4>
                                    <small>已选数量</small>
                                </div>
                                <div class="mx-3">
                                    <h4 id="remainingCount">5</h4>
                                    <small>剩余可选</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="news-list">
                            <div class="news-item" onclick="toggleSelection(1)">
                                <div class="counter">1</div>
                                <div>
                                    <h5>总统宣布新经济刺激计划</h5>
                                    <p class="mb-0">涉及数万亿美元，旨在缓解通胀压力</p>
                                </div>
                            </div>
                            
                            <div class="news-item" onclick="toggleSelection(2)">
                                <div class="counter">2</div>
                                <div>
                                    <h5>本地高中赢得全国科学竞赛</h5>
                                    <p class="mb-0">学生团队开发出新型环保材料</p>
                                </div>
                            </div>
                            
                            <div class="news-item" onclick="toggleSelection(3)">
                                <div class="counter">3</div>
                                <div>
                                    <h5>明星夫妻离婚引发网络热议</h5>
                                    <p class="mb-0">社交媒体话题阅读量破10亿</p>
                                </div>
                            </div>
                            
                            <div class="news-item" onclick="toggleSelection(4)">
                                <div class="counter">4</div>
                                <div>
                                    <h5>科学家发现可能宜居系外行星</h5>
                                    <p class="mb-0">距离地球120光年，有液态水存在证据</p>
                                </div>
                            </div>
                            
                            <div class="news-item" onclick="toggleSelection(5)">
                                <div class="counter">5</div>
                                <div>
                                    <h5>重大交通事故致10人死亡</h5>
                                    <p class="mb-0">高速公路多车连环相撞，原因调查中</p>
                                </div>
                            </div>
                            
                            <div class="news-item" onclick="toggleSelection(6)">
                                <div class="counter">6</div>
                                <div>
                                    <h5>新研究发现每天喝咖啡可延长寿命</h5>
                                    <p class="mb-0">基于20万人的10年跟踪研究</p>
                                </div>
                            </div>
                            
                            <div class="news-item" onclick="toggleSelection(7)">
                                <div class="counter">7</div>
                                <div>
                                    <h5>著名作家发布新书引发抢购</h5>
                                    <p class="mb-0">首日销量突破百万册</p>
                                </div>
                            </div>
                            
                            <div class="news-item" onclick="toggleSelection(8)">
                                <div class="counter">8</div>
                                <div>
                                    <h5>国际组织报告全球粮食危机加剧</h5>
                                    <p class="mb-0">受冲突和气候变化影响，数百万人面临饥荒</p>
                                </div>
                            </div>
                            
                            <div class="news-item" onclick="toggleSelection(9)">
                                <div class="counter">9</div>
                                <div>
                                    <h5>科技公司发布革命性AI助手</h5>
                                    <p class="mb-0">可理解并生成自然语言，接近人类水平</p>
                                </div>
                            </div>
                            
                            <div class="news-item" onclick="toggleSelection(10)">
                                <div class="counter">10</div>
                                <div>
                                    <h5>地方议会通过新环保法规</h5>
                                    <p class="mb-0">限制一次性塑料制品使用，2026年生效</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center mt-4">
                            <button class="btn btn-primary btn-lg px-5" onclick="showResults()">
                                <i class="fas fa-check-circle me-2"></i>完成筛选
                            </button>
                        </div>
                        
                        <div id="results" class="mt-5 d-none">
                            <h3 class="text-center mb-4">你的把关标准分析</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card mb-3">
                                        <div class="card-header">新闻价值分布</div>
                                        <div class="card-body">
                                            <canvas id="newsValueChart" height="250"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card mb-3">
                                        <div class="card-header">你的把关倾向</div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    时效性
                                                    <span class="badge bg-primary rounded-pill">8.2</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    重要性
                                                    <span class="badge bg-success rounded-pill">7.6</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    接近性
                                                    <span class="badge bg-info rounded-pill">6.3</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    趣味性
                                                    <span class="badge bg-warning rounded-pill">5.8</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="alert alert-info">
                                        <i class="fas fa-lightbulb me-2"></i>
                                        你的选择体现了传统编辑的价值观，重视政治、经济等硬新闻，兼顾本地新闻。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 学习资源 -->
    <section id="resources" class="py-5">
        <div class="container">
            <h2 class="section-title">学习资源与参考文献</h2>
            
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <i class="fas fa-book me-2"></i>经典文献
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    Lewin, K. (1947). <strong>Frontiers in Group Dynamics</strong>. Human Relations.
                                </li>
                                <li class="list-group-item">
                                    White, D.M. (1950). <strong>The "Gate Keeper": A Case Study in the Selection of News</strong>.
                                </li>
                                <li class="list-group-item">
                                    Shoemaker, P.J. (1991). <strong>Gatekeeping</strong>. SAGE Publications.
                                </li>
                                <li class="list-group-item">
                                    Bruns, A. (2018). <strong>Gatewatching and News Curation</strong>. Peter Lang.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <i class="fas fa-graduation-cap me-2"></i>中文研究
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    刘海龙 (2021). <strong>传播中的非人行动者：算法把关的伦理困境</strong>. 新闻大学.
                                </li>
                                <li class="list-group-item">
                                    彭兰 (2020). <strong>算法社会的"囚徒"风险</strong>. 国际新闻界.
                                </li>
                                <li class="list-group-item">
                                    陈力丹 (2015). <strong>传播学纲要</strong>. 中国人民大学出版社.
                                </li>
                                <li class="list-group-item">
                                    胡翼青 (2019). <strong>西方传播学术史手册</strong>. 北京大学出版社.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-link me-2"></i>在线资源
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">传播学百科</h5>
                                    <p class="card-text">把关人理论详细条目</p>
                                    <a href="#" class="btn btn-outline-primary btn-sm">访问</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">算法透明度项目</h5>
                                    <p class="card-text">分析各大平台算法机制</p>
                                    <a href="#" class="btn btn-outline-primary btn-sm">访问</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">媒体观察站</h5>
                                    <p class="card-text">实时媒体偏见分析工具</p>
                                    <a href="#" class="btn btn-outline-primary btn-sm">访问</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <h4><i class="fas fa-shield-alt me-2"></i>把关人理论</h4>
                    <p>探索信息传播中的筛选机制与权力结构</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-weibo"></i></a>
                        <a href="#"><i class="fab fa-weixin"></i></a>
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <h5>快速链接</h5>
                    <ul class="list-unstyled">
                        <li><a href="#overview" class="text-white">理论概述</a></li>
                        <li><a href="#history" class="text-white">历史发展</a></li>
                        <li><a href="#digital" class="text-white">数字时代</a></li>
                        <li><a href="#simulation" class="text-white">模拟实验</a></li>
                        <li><a href="#resources" class="text-white">学习资源</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-4">
                    <h5>订阅更新</h5>
                    <p>获取传播学领域最新研究动态</p>
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder="您的邮箱地址">
                        <button class="btn btn-primary" type="button">订阅</button>
                    </div>
                </div>
            </div>
            <hr class="bg-light">
            <div class="text-center py-3">
                <p class="mb-0">© 2023 传播学研究实验室 | 设计：李教授团队</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // 模拟实验功能
        let selectedItems = [];
        const maxSelection = 5;
        
        function toggleSelection(itemNumber) {
            const itemIndex = selectedItems.indexOf(itemNumber);
            const newsItem = document.querySelector(`.news-item:nth-child(${itemNumber})`);
            
            if (itemIndex > -1) {
                selectedItems.splice(itemIndex, 1);
                newsItem.classList.remove('selected');
            } else if (selectedItems.length < maxSelection) {
                selectedItems.push(itemNumber);
                newsItem.classList.add('selected');
            }
            
            updateSelectionCount();
        }
        
        function updateSelectionCount() {
            document.getElementById('selectedCount').textContent = selectedItems.length;
            document.getElementById('remainingCount').textContent = maxSelection - selectedItems.length;
        }
        
        function showResults() {
            if (selectedItems.length !== maxSelection) {
                alert(`请选择${maxSelection}条新闻`);
                return;
            }
            
            // 显示结果区域
            document.getElementById('results').classList.remove('d-none');
            
            // 滚动到结果区域
            document.getElementById('results').scrollIntoView({behavior: 'smooth'});
            
            // 创建图表
            createChart();
        }
        
        function createChart() {
            const ctx = document.getElementById('newsValueChart').getContext('2d');
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['时效性', '重要性', '显著性', '接近性', '趣味性'],
                    datasets: [{
                        label: '你的新闻价值判断',
                        data: [8.2, 7.6, 6.8, 6.3, 5.8],
                        fill: true,
                        backgroundColor: 'rgba(52, 152, 219, 0.2)',
                        borderColor: 'rgb(52, 152, 219)',
                        pointBackgroundColor: 'rgb(52, 152, 219)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(52, 152, 219)'
                    }, {
                        label: '专业编辑平均值',
                        data: [7.5, 8.1, 7.2, 5.5, 6.5],
                        fill: true,
                        backgroundColor: 'rgba(231, 76, 60, 0.2)',
                        borderColor: 'rgb(231, 76, 60)',
                        pointBackgroundColor: 'rgb(231, 76, 60)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(231, 76, 60)'
                    }]
                },
                options: {
                    scales: {
                        r: {
                            angleLines: {
                                display: true
                            },
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            });
        }
        
        // 初始化页面
        document.addEventListener('DOMContentLoaded', function() {
            updateSelectionCount();
        });
    </script>
</body>
</html>