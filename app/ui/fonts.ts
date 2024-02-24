// file to keep the fonts that will be used throughout your application
import { Inter, Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
})