import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col size-full">
      <Header />
      <div className="flex size-full">
        <Sidebar />

        <ResizablePanelGroup direction="vertical" className="size-full">
          <ResizablePanel defaultSize={96}>
            <div className="size-full p-3">{children}</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={4} minSize={4} maxSize={25}>
            <Footer />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
