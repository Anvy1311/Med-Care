import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata = {
  title: "MedBridge - Doctor Appointment App",
  description: "Book and manage your doctor appointments with ease using MedBridge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.classname}`}
      >
        {/* header */}

        <main className="min-h-screen">{children} </main>

        {/* footer */}

        <footer className="bg-muted/50 py-12">
          <div children="container mx-auto px-4 text-center text-gray-200">
            <p>© 2024 MedBridge. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
