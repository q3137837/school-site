import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "小新老师和同学们的创意基地",
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
  const games = works.filter((work) => work.type === "game");
  const software = works.filter((work) => work.type === "software");

  return (
    <div className="min-h-dvh flex flex-col">
      {/* 头部 */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/70 dark:bg-slate-950/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-soft" />
            <h1 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white sm:text-lg">
              小新老师和同学们的创意基地
            </h1>
          </div>
          <nav className="hidden items-center gap-2 sm:flex">
            <a
              href="#games"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
            >
              网页游戏
            </a>
            <a
              href="#software"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
            >
              软件作品
            </a>
          </nav>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="flex-1">
        {/* 背景图片区域 - 作者合照占位 */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/zhaopian.png"
              alt="作者合照"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_70%] sm:object-[center_75%] lg:object-[center_80%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/20 to-transparent" />
          </div>
          <div className="relative mx-auto flex min-h-[360px] max-w-7xl items-start px-4 py-10 sm:min-h-[440px] sm:px-6 sm:py-14 lg:min-h-[540px] lg:px-8">
            <div className="mx-auto w-full max-w-2xl text-center">
              <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-medium text-white shadow-soft">
                2026 · 作品展
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl">
                新河编程班
              </h2>
              <p className="mt-4 text-balance text-base text-white/90 drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)] sm:text-lg">
                这里汇集了学生们精心制作的网页游戏和软件作品，每一件作品都凝聚着创意与努力
              </p>
            </div>
          </div>
        </section>

        {/* 作品列表区域 */}
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

        {/* 网页游戏区域 */}
        <section id="games" className="scroll-mt-24 mb-12 sm:mb-16">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="h-7 w-1 rounded-full bg-blue-500 sm:h-9" />
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  网页游戏
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  共 {games.length} 个作品
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {games.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </section>

        {/* 软件作品区域 */}
        <section id="software" className="scroll-mt-24 mb-12 sm:mb-16">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="h-7 w-1 rounded-full bg-green-500 sm:h-9" />
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  软件作品
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  共 {software.length} 个作品
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {software.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </section>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-600 dark:text-slate-300">
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
    <div className="group flex h-full flex-col overflow-hidden rounded-card bg-white/80 shadow-soft ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-900/60 dark:ring-slate-800/70">
      {work.image && (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h4 className="line-clamp-1 text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl">
            {work.title}
          </h4>
          <span className={`shrink-0 rounded-full px-2 py-1 text-xs font-medium ${
            work.type === "game"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          }`}>
            {work.type === "game" ? "游戏" : "软件"}
          </span>
        </div>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
          作者：{work.author}
        </p>
        <p className="line-clamp-3 mb-4 flex-1 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
          {work.description}
        </p>
        {work.demoUrl && (
          <a
            href={work.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
          >
            在线演示 <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
