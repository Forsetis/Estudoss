import './style.scss';

export function Title(props) {
    return (
        <div className='title'>
            <h2>{props.children}</h2>
        </div>
    );
}