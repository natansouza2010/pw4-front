import { format } from 'date-fns';
import './header.scss';
import ptBR from 'date-fns/locale/pt-BR';

export const Header = () =>{
    const currentDate = format(new Date(), 'EEEEEE, d MMM', {
        locale: ptBR 
    });

    return(
        <header>

            <p>Vehicles Sales </p>

            <span>{currentDate}</span>
        </header>
    )
}