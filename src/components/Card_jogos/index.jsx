import Image from 'next/image'
import xbox_logo from '../../../public/xbox-logo.png'
import nintendo_logo from '../../../public/nintendo-logo.jpg'
import ps_logo from '../../../public/playstation-logo.jpg'

export default function Card_jogos(props){
    return(
        <div className="bg-black flex justify-center items-center w-80 h-14">
            <div className="w-1/4">
                <Image className='w-16 h-14'
                    src={props.plataforma === 'xbox' ? xbox_logo :
                        props.plataforma === 'nintendo' ? nintendo_logo : ps_logo
                    }
                />
            </div>
            <div className="text-white flex items-center text-center w-3/4 p-2">{props.nome}</div>
        </div>
    )
}