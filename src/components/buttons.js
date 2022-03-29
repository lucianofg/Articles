import './buttons.css'

export function OkayButton(props) {
    return (
        <button className="button okay-button" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export function CancelButton(props) {
    return (
        <button className="button cancel-button" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export function SignButton(props) {
    return (
        <button className="button sign-button" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export function FollowButton(props) {
    function userAlreadyFollowAuthor(user, author) {
        return true;
    }

    if (userAlreadyFollowAuthor())
        return <button className="unfollow-button">Unfollow</button>
    else
        return <button className="follow-button">Follow</button>
}
