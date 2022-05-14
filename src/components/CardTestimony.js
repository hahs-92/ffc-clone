import PropTypes from 'prop-types'
//styles
import style from '../styles/components/CardTestimony.module.css'


const CardTestimony = ({
    image,
    name,
    country,
    role,
    company,
    testimony
}) => {
    return(
        <article className={ style.Testimony}>
            <section className={ style.Image }>
                <img src={ image} alt={ name } />
            </section>
            <section className={ style.TextContent }>
                <p className={ style.Name }>
                    <strong>{ name }</strong> from { country}
                </p>
                <p className={ style.Role }>
                    { role } in <strong>{ company}</strong>
                </p>
                <p className={ style.Content }>{ testimony }</p>
            </section>
        </article>
    )
}

CardTestimony.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    testimony: PropTypes.string.isRequired
}


export default CardTestimony
