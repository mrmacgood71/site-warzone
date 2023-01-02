
export default function MainPageItem({name, posterSource, videoSource, videoLink}) {
   return (
       <div className="item">
           <h1>{name}</h1>
           <video className="map" controls="controls" poster={posterSource} src={videoSource}>
                   <a href={videoLink}>Скачайте видео</a>
           </video>
       </div>

   )
}