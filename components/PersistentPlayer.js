

const PersistentPlayer = ({src}) => {
    return (
        <>
                <div className="content fixed bottom-0 w-full bg-dark-green max-h-48" dangerouslySetInnerHTML={{__html: src}}></div>
        </>
    )
}

export default PersistentPlayer;