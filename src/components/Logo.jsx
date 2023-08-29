import logoIcon from '../assets/img/logo.png';

export const Logo = () => {
    return (
        <div className='logo position-relative'>
            <img src={logoIcon} alt="Logo Icon"></img>
            <span className='position-absolute'>The Tic Summit</span>
        </div>
    )
}