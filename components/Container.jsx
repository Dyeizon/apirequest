export default function Container({children}) {

    return (
        <div className="container mx-auto h-screen w-screen">
            {children}
        </div>
    )

}