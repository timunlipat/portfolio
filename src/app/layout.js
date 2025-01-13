import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from './components/layout/TransitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Portfolio',
    description: 'Portfolio Zamil',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} bg-gradient-to-r from-blue-50 to-red-100`}>
                <TransitionProvider>{children}</TransitionProvider>
            </body>
        </html>
    );
}
