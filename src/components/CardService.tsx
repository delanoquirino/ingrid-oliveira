
type ServiceProps = {
    tag: string,
    title:
      string,
    imageSrc: string,
}

export const CardService = ({tag, title, imageSrc}: ServiceProps) => {
  return (
    <div className="h-52 md:h-72 flex justify-center items-center"  style={{ background: `url(${imageSrc})`, backgroundSize: "cover", opacity:"revert" }}>
        <div className="self-end p-2">
          <p className="text-primary text-center uppercase text-sm font-semibold">{tag}</p>
          <p className="text-xl text-white">{title}</p>
        </div>
    </div>
  )
}