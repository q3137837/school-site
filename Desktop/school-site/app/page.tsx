import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "编程班学生作品展示",
  description: "展示学生的网页游戏和软件作品",
};

// 作品数据类型
type Work = {
  id: number;
  title: string;
  type: "game" | "software";
  author: string;
  description: string;
  image?: string;
  demoUrl?: string;
};

// 示例作品数据
const works: Work[] = [
  {
    id: 1,
    title: "小满婚纱",
    type: "software",
    author: "杨思杭",
    description: "AI一键试穿，AI婚纱顾问。",
    image: "/xiaoman.png",
    demoUrl: "https://wedding.jiangkaixin.site/",
  },
  {
    id: 2,
    title: "聚翁合江宴",
    type: "software",
    author: "黄韵洁",
    description: "用AI生成宴会方案的网站。",
    image: "/jwh.png",
    demoUrl: "https://zt9mv56n5k.coze.site/",
  },
  {
    id: 3,
    title: "英语版羊了个羊",
    type: "game",
    author: "张馨雅",
    description: "用玩游戏的方式学习英语。",
    image: "/ylgy.png",
    demoUrl: "https://rbqvvhs8vr.coze.site/",
  },
  {
    id: 4,
    title: "合同翻译官",
    type: "software",
    author: "田炜航",
    description: "上传合同，AI自动识别风险条款并提供修改建议。",
    image: "/htfy.png",
    demoUrl: "https://cqz9pcbccf.coze.site/",
  },
  {
    id: 5,
    title: "听觉画布",
    type: "game",
    author: "龚雅晴",
    description: "上传一首音乐或使用麦克风，观看3D粒子随音乐跳动、变色、爆炸。",
    image: "/tjhb.png",
    demoUrl: "https://p5znvq23n7.coze.site/",
  },
  {
    id: 6,
    title: "虚拟买卖交易所",
    type: "software",
    author: "王梓林",
    description: "玩家可以虚拟买卖游戏枪支，枪支可以打开摄像头模拟靶场射击。",
    image: "/mq.png",
    demoUrl: "https://5g3n22tvyt.coze.site/",
  },
  {    
    id: 7,    
    title: "检验师AI智能助手",    
    type: "software",    
    author: "魏立珊",    
    description: "专为医院检验科设计的垂直AI工具，解决看不准和查得慢两大核心痛点。",    
    image: "/jys.png",    
    demoUrl: "https://my67tpnb6w.coze.site/",  
  },
  {        
    id: 8,        
    title: "球球三国",        
    type: "game",        
    author: "陈冠元",        
    description: "移动鼠标调整方向发射弹球",        
    image: "/qqsg.png",        
    demoUrl: "https://x3vc4236z8.coze.site/",    
  },
  {            
    id: 9,            
    title: "程序员AI助手",            
    type: "software",            
    author: "马羽乐",            
    description: "减少程序员的重复性日常工作",            
    image: "/zhaopian.png",            
    demoUrl: "https://pkw2s9t22v.coze.site/",      
  },
  {                
    id: 10,                
    title: "像素版黑神话悟空",                
    type: "game",                
    author: "黄仁泽",                
    description: "黄仁泽说真好玩",
    image: "/wk.png",
    demoUrl: "https://mj4rmm8wg3.coze.site/",        
},
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* 头部 */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              编程班学生作品展示
            </h1>
            <nav className="hidden sm:flex gap-6">
              <a href="#games" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                网页游戏
              </a>
              <a href="#software" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                软件作品
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* 主体内容 */}
      <main>
        {/* 背景图片区域 - 作者合照占位 */}
        <section className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
            {/* 在这里替换成作者合照的链接 */}
            <img
              src="/zhaopian.png"
              alt="作者合照"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative h-full flex items-start justify-center pt-8 sm:pt-12 px-4">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                新河编程班
              </h2>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                这里汇集了学生们精心制作的网页游戏和软件作品，每一件作品都凝聚着创意与努力
              </p>
            </div>
          </div>
        </section>

        {/* 作品列表区域 */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* 网页游戏区域 */}
        <section id="games" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-1 h-6 sm:h-8 bg-blue-500 rounded-full"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              网页游戏
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {works.filter((work) => work.type === "game").map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </section>

        {/* 软件作品区域 */}
        <section id="software" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-1 h-6 sm:h-8 bg-green-500 rounded-full"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              软件作品
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {works.filter((work) => work.type === "software").map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </section>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            © 2026 学生作品展示平台 | 用代码创造未来
          </p>
        </div>
      </footer>
    </div>
  );
}

// 作品卡片组件
function WorkCard({ work }: { work: Work }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 flex flex-col h-full">
      {work.image && (
        <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white line-clamp-1">
            {work.title}
          </h4>
          <span className={`px-2 py-1 text-xs font-medium rounded-full shrink-0 ${
            work.type === "game"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          }`}>
            {work.type === "game" ? "游戏" : "软件"}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          作者：{work.author}
        </p>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 line-clamp-3 mb-4 flex-1">
          {work.description}
        </p>
        {work.demoUrl && (
          <a
            href={work.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            在线演示
          </a>
        )}
      </div>
    </div>
  );
}