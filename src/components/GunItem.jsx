// function GunItem(name, description, source) {
//     return (
//         <div className="item">
//             <h1>{name}</h1>
//             <h4>{description}</h4>
//             <img src={source} className="gun-image"/>
//         </div>
//     )
// }

export default function GunItem({name, description, source}) {
    return (
        <div className="item">
            <h1>{name}</h1>
            <h4>{description}</h4>
            <img src={source} className="gun-image"/>
        </div>
    )
}