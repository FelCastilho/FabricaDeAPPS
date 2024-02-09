interface HeaderProps{
    name: string;
    description: string;
}

export function Header({name, description} : HeaderProps){
    return(
        <header>
            <h3>{name}</h3>
            <p>{description}</p>
            <hr />
        </header>
    )
}