import { Link } from "react-router-dom"
export const Modal = ({ title, subTitle, isShow, onConfirm, onClose, gameId }) => {


    return (
        isShow &&
        <div className="modal">
            <div className="bg-white p-5 rounded-3">
                <div className="content">
                    <h2 className="m-0 p-0">{title}</h2>
                    <sub className="p-0 m-0">{subTitle}</sub>
                </div>
                <div className="d-flex gap-1 mt-4">

                    <button
                        className="button bg-primary text-white p-2 rounded-2 border-0">
                        <Link
                            className="text-white text-decoration-none"
                            to={`/games/${gameId}`}
                        >
                            Show Details
                        </Link>
                    </button>

                    <button
                        className="button bg-warning text-white p-2 rounded-2 border-0"
                    > Add to WhisList
                    </button>

                    <button
                        onClick={onClose}
                        className="button bg-danger text-white p-2 rounded-2 border-0"
                    > Close
                    </button>

                </div>
            </div>
        </div>
    )
}