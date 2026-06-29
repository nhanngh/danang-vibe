export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4 border-b border-zinc-200">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <span className="font-bold text-xl">Đà Nẵng Vibe</span>
                <ul className="flex gap-6 text-sm font-medium">
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="/destinations">Thắng cảnh</a></li>
                    <li><a href="/food">Ẩm thực</a></li>
                </ul>
            </div>
        </nav>
    );
}
