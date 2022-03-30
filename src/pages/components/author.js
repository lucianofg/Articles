import './author.css'
import {FollowButton} from "./buttons";

export default function AuthorInfo(props) {
    return (
        <div className="author-info">
            <img
                className="author-pfp"
                src={props.author.img}
                alt={`${props.author.name}`}
            />
            <div className="author-info">
                <div className="author-name">{props.author.name}</div>
                <div className="author-work">{props.author.work}</div>
            </div>
            <div className="author-follow">
                <FollowButton author={props.author} />
            </div>
        </div>
    )
}