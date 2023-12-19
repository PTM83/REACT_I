import '../assets/cssComponents/SBcss.css'
const SocialButton = ({linkedin, github, facebook}) => {
    return(
    <div className='SBcss'>
        <a href='#'> <img src={linkedin}/> </a>
        <a href='#'> <img src={github}/> </a>
        <a href='#'> <img src={facebook}/> </a>
    </div>
    )
}

export default SocialButton