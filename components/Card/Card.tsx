import Image from "next/image";
import cardStyles from './Card.module.css'

export interface CardData {
  name: string;
  type?: string;
  created: string;
  image?: string;
}

interface Props {
    data: CardData;
}

function Card({ data }: Props) {
  let formattedType = data.type;
  formattedType ||= 'No Type';
  return (
    <div className={cardStyles.Card}>
        <p>Name: {data.name}</p>
        <p>Type: {formattedType}</p>
        <p>Created: {data.created}</p>
        {!!data.image && (
          <Image width="100" height="100" src={data.image} alt='image' priority />
        )}
    </div>
  )
}

export default Card