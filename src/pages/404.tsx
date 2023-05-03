import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router])

    return(
        <>
            <Head>
                <title>Error</title>
            </Head>
            <div>
                <h2>404</h2>
                <h2>Something is going wrong...</h2>
                <p>You will be automatically moved to the main page</p>
            </div>
        </>
    )
}

export default Error;