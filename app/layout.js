import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "QuizzBuzz",
  description: "Create quizzes and get answer from participants like a buzz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
