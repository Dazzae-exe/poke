import Footer from "../components/layoutComponents/Footer";
import Header from "../components/layoutComponents/Header";

function RootLayout({ content }) {
    return ( 
        <div>
            <Header />

            <main className="w-full h-full py-8">
                {content}
            </main>

           <Footer />
        </div>
     );
}

export default RootLayout;