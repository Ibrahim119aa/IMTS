"use client"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



import '@/app/globals.css';


import { Provider } from 'react-redux';
import store from './_redux/store';
import Navbar from '@/app/components/Header/Navbar';
import Footer from '@/app/components/Footer/footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Provider store={store}>
                <head>
                    <link rel="preconnect" href="https://fonts.googleapis.com/" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&amp;family=Jost:wght@300;400;500;600;700;800;900&amp;family=Roboto:wght@100;300;400;500;700&amp;display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/style.css" />
                    {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/> */}
  

                    <link rel="icon" href="/favicon3.ico" sizes="any" />
                    <link rel="icon" href="/favicon3.ico" sizes="32x32" />
                    <link rel="icon" href="/favicon3.ico" sizes="16x16" />
                    <link rel="apple-touch-icon" href="/favicon3.ico" />

                </head>
                <body>
                    <Navbar />
                    {children}
                    <Footer />
                  


                    
                </body>

            </Provider>
        </html>
    );
}
