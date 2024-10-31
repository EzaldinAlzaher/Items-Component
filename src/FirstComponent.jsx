
export default function FirstComponent(){
    // const Nitems = [1, 2, 3, 4, 5, 6, 7];
    let items = [
    {id: 1, name: "Ezaldin"},
    {id: 2, name: "Osama"},
    {id: 3, name: "Abdualrahman"}
    ]
    // items = []
    return (
    <>
        {(items.length != 0)? (<ul>
            {items.map((item) => (
                <li key={item.id}> {item.name} </li>
            ))}
        </ul>) : "Empity"}
        
    </>
    );
}