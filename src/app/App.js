import GlobalContextProvider from "../../state/context/GlobalContext";

function App({Component, pageProps}){
    return (
        <GlobalContextProvider>
            <Component {...pageProps}/>
        </GlobalContextProvider>
    )
}

export default App