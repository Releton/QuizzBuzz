import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "QuizzBuzz",
  description: "Create quizzes and get answer from participants like a buzz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden min-w-[95vw] bg-slate-800 before:content[''] before:absolute before:w-[500px] before:h-[500px] before:bg-red-500 z-40 before:rounded-full before:blur-3xl before:bg-opacity-40 min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
