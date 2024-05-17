function Student(p){

    console.log(p)
    return (
        <div>
            <h1>Hello {p.name}</h1>
            <h2>{p.email}</h2>
        </div>
    )
}

export default Student